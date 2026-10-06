import Link from 'next/link';

const footerMenus = [
  { title: 'Conference', id: 'footer-conference-menu', links: [
    { label: 'About InCIT', href: '/#about' },
    { label: 'Important Dates', href: '/#important-dates' },
    { label: 'Committee', href: '/committee' },
    { label: 'Keynote Speakers', href: '/keynote-speakers' },
  ] },
  { title: 'For Participants', id: 'footer-participants-menu', links: [
    { label: 'Submission Guidelines', href: '/submission-guidelines' },
    { label: 'Registration', href: '/registration' },
    { label: 'Accommodations', href: '/accommodations' },
    { label: 'Student Grant', href: '/student-grant' },
  ] },
];

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="content-width footer-inner">
        <section className="footer-brand" aria-labelledby="footer-conference-heading">
          <h2 id="footer-conference-heading">InCIT 2027</h2>
          <p className="footer-description">The International Conference on Information Technology, bringing together researchers, academicians, and professionals to share knowledge and innovations.</p>
        </section>
        {footerMenus.map((menu) => (
          <nav key={menu.id} aria-labelledby={menu.id} className="footer-menu">
            <h2 id={menu.id}>{menu.title}</h2>
            <ul>
              {menu.links.map((link) => (
                <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
              ))}
            </ul>
          </nav>
        ))}
        <section className="footer-contact-section" aria-labelledby="footer-contact-heading">
          <h2 id="footer-contact-heading">Contact Us</h2>
          <p className="footer-contact-note">Sample contact details — to be replaced.</p>
          <address className="footer-contact">
            <div className="footer-contact-row">
              <svg className="footer-icon footer-icon-location" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" /></svg>
              <p><strong>InCIT 2027 Secretariat</strong><br />Example Faculty of Information Technology<br />Example University, Example City, Thailand</p>
            </div>
            <div className="footer-contact-row">
              <svg className="footer-icon footer-icon-email" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></svg>
              <p>incit2027@example.com</p>
            </div>
            <div className="footer-contact-row">
              <svg className="footer-icon footer-icon-phone" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" /></svg>
              <p>+66 (0) 0-000-0000, 0-000-0000<br />ext. 0000</p>
            </div>
          </address>
        </section>
      </div>
      <div className="content-width footer-bottom">
        <p>© 2027 InCIT · All Rights Reserved.</p>
        <p>International Conference on Information Technology</p>
      </div>
    </footer>
  );
}
