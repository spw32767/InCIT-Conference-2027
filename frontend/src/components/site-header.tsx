'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { hasImportedContent, navigation } from '../lib/navigation';
import { Button } from './ui/button';

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('home');

  const closeMenus = () => { setMobileOpen(false); setOpenGroup(null); };

  useEffect(() => {
    if (pathname !== '/') return;
    const sections = ['home', 'about', 'important-dates'];
    const syncHash = () => {
      const id = window.location.hash.slice(1);
      if (sections.includes(id)) setActiveSection(id);
    };
    syncHash();
    let observer: IntersectionObserver;
    const observeSections = () => {
      observer?.disconnect();
      const height = window.innerHeight;
      observer = new IntersectionObserver((entries) => {
        const current = entries.find((entry) => entry.isIntersecting);
        if (current) setActiveSection(current.target.id);
      }, { rootMargin: `-${Math.round(height * .2)}px 0px -${Math.round(height * .65)}px 0px` });
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.observe(section);
      });
    };
    observeSections();
    window.addEventListener('hashchange', syncHash);
    window.addEventListener('resize', observeSections);
    return () => {
      observer.disconnect();
      window.removeEventListener('hashchange', syncHash);
      window.removeEventListener('resize', observeSections);
    };
  }, [pathname]);

  useEffect(() => {
    function outsideClick(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) closeMenus();
    }
    document.addEventListener('pointerdown', outsideClick);
    return () => document.removeEventListener('pointerdown', outsideClick);
  }, []);

  return (
    <header className="site-header" ref={headerRef} onKeyDown={(event) => {
      if (event.key === 'Escape') {
        const target = openGroup
          ? headerRef.current?.querySelector<HTMLButtonElement>(`[data-group="${openGroup}"]`)
          : headerRef.current?.querySelector<HTMLButtonElement>('.menu-toggle');
        if (openGroup) setOpenGroup(null);
        else setMobileOpen(false);
        target?.focus();
      }
    }} onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) closeMenus();
    }}>
      <div className="header-inner content-width">
        <Link className="brand" href="/#home" onClick={closeMenus} aria-label="InCIT 2027 home">
          <span className="brand-title">InCIT 2027</span>
          <Image className="brand-logo" src="/images/1663735797-CPlogo-final-01.png"
            alt="College of Computing, Khon Kaen University" width={1814} height={548}
            sizes="(max-width: 600px) 80px, 104px" loading="eager" />
        </Link>
        <button className="menu-toggle" aria-expanded={mobileOpen} aria-controls="primary-navigation"
          onClick={() => { setMobileOpen(!mobileOpen); setOpenGroup(null); }}>
          {mobileOpen ? 'Close' : 'Menu'} <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><path d={mobileOpen ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16'} /></svg>
        </button>
        <nav id="primary-navigation" aria-label="Main navigation" className={mobileOpen ? 'navigation is-open' : 'navigation'}>
          <ul className="nav-list">
            {navigation.map((item, index) => (
              <li key={item.label} className="nav-item">
                {item.children ? <>
                  <button className="nav-link" data-group={item.label} data-content-imported={item.children.some((child) => hasImportedContent(child.href)) || undefined} data-active={item.children.some((child) => pathname === child.href) || undefined} aria-expanded={openGroup === item.label}
                    aria-controls={`nav-group-${index}`} onClick={() => setOpenGroup(openGroup === item.label ? null : item.label)}>
                    <span className="nav-label">{item.label}</span><svg className="chevron" width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m4 6 4 4 4-4" /></svg>
                  </button>
                  <ul id={`nav-group-${index}`} className="dropdown" hidden={openGroup !== item.label}>
                    {item.children.map((child) => <li key={child.href}>
                      <Link href={child.href} data-content-imported={hasImportedContent(child.href) || undefined} onClick={closeMenus} aria-current={pathname === child.href ? 'page' : undefined}>{child.label}</Link>
                    </li>)}
                  </ul>
                </> : item.action ? <Button asChild variant="registration" size="navigation" className="nav-registration">
                  <Link href={item.href!} onClick={closeMenus} aria-current={pathname === item.href ? 'page' : undefined}>{item.label}</Link>
                </Button> : <Link className="nav-link" href={item.href!} data-content-imported={hasImportedContent(item.href) || undefined} onClick={closeMenus}
                  aria-current={item.href?.startsWith('/#')
                    ? pathname === '/' && item.href === `/#${activeSection}` ? 'location' : undefined
                    : pathname === item.href ? 'page' : undefined}><span className="nav-label">{item.label}</span></Link>}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
