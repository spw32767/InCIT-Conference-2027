import { Fragment } from 'react';
import Image from 'next/image';
import { ArrowRight, UserRoundPen, Banknote, Gift, CreditCard, Info, TriangleAlert } from 'lucide-react';
import { Alert, AlertDescription } from './ui/alert';
import { PageHeader } from './page-header';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from './ui/table';
import camera from '../content/camera-ready.json';
import presentation from '../content/presentation-guidelines.json';
import sessions from '../content/special-sessions.json';
import registration from '../content/registration.json';

type Node = {tag: string; presentation?: string; text?: string; href?: string; src?: string; alt?: string; width?: number; height?: number; rowSpan?: number; colSpan?: number; tone?:string; children?: Node[]};
type Reference = {slug:string; source:string; title:string; subtitle?:string; heading:string; sections:{id:string; title:string; body:Node[]}[]};
export const referencePages: Reference[] = [camera, presentation, sessions, registration];

// Source CSS, scripts, event handlers and unknown attributes are never rendered.
export function SourceContent({nodes}: {nodes:Node[]}) {
  return nodes.map((node,index) => {
    const childNodes = node.children ?? [];
    const children = <SourceContent nodes={['table','thead','tbody','tr'].includes(node.tag)
      ? childNodes.filter(child => child.tag !== 'text' || Boolean(child.text?.trim()))
      : childNodes} />;
    switch(node.tag) {
      case 'text': return <Fragment key={index}>{node.text}</Fragment>;
      case 'p': {
        const note = node.presentation === 'note';
        const warning = node.presentation === 'warning';
        const Icon = warning ? TriangleAlert : Info;
        return note || warning
          ? <Alert key={index} variant={warning ? 'warning' : 'note'} role="note" className="registration-note"><Icon aria-hidden="true" /><AlertDescription><p>{children}</p></AlertDescription></Alert>
          : <p key={index}>{children}</p>;
      }
      case 'ul': return <ul key={index}>{children}</ul>;
      case 'ol': return <ol key={index}>{children}</ol>;
      case 'li': return <li key={index}>{children}</li>;
      case 'strong': return <strong key={index}>{children}</strong>;
      case 'em': return <em key={index}>{children}</em>;
      case 'br': return <br key={index} />;
      case 'disabled-action': return <Button key={index} disabled variant="conference" size="hero">{children}<ArrowRight aria-hidden="true" data-icon="inline-end" /></Button>;
      case 'h4': case 'h5': return <h4 key={index}>{children}</h4>;
      case 'a': return node.href === 'https://citt.or.th/payment'
        ? <Button key={index} asChild variant="conference" size="hero"><a href={node.href}>{children}<ArrowRight aria-hidden="true" data-icon="inline-end" /></a></Button>
        : <a key={index} className="content-link" href={node.href}>{children}</a>;
      case 'img': return node.src ? <Image key={index} className="reference-image" src={node.src} alt={node.alt ?? ''} width={node.width || 1000} height={node.height || 600} unoptimized /> : null;
      case 'table': return <Table key={index}>{children}</Table>;
      case 'thead': return <TableHeader key={index}>{children}</TableHeader>;
      case 'tbody': return <TableBody key={index}>{children}</TableBody>;
      case 'tr': return <TableRow key={index}>{children}</TableRow>;
      case 'th': return <TableHead key={index} rowSpan={node.rowSpan} colSpan={node.colSpan}>{children}</TableHead>;
      case 'td': return <TableCell key={index} data-mode={node.tone} rowSpan={node.rowSpan} colSpan={node.colSpan}>{children}</TableCell>;
      default: return <Fragment key={index}>{children}</Fragment>;
    }
  });
}

export function ReferencePage({content}: {content:Reference}) {
  const registrationIcons = [UserRoundPen, Banknote, Gift, CreditCard];
  return <main id="main-content" tabIndex={-1} className={`reference-page reference-${content.slug}`}>
    <PageHeader title={content.title} description={content.subtitle} pageKey={content.slug} />
    <div className="content-width submission-layout">
      <nav className="submission-contents" aria-label="On this page">
        <h2>On this page</h2>
        <ul>{content.sections.map(section => <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}</ul>
      </nav>
      <article className="submission-article reference-article" aria-labelledby="reference-heading">
        <p className="submission-draft draft-note">Draft content. Text, images and service links copied from InCIT 2026. Information for 2027 is pending confirmation.</p>
        <h2 id="reference-heading">{content.heading}</h2>
        <Separator className="submission-heading-divider" />
        {content.sections.map((section, index) => {
          const Icon = content.slug === 'registration' ? registrationIcons[index] : undefined;
          return <section key={section.id} id={section.id} aria-labelledby={index === 0 && section.title === content.heading ? 'reference-heading' : `${section.id}-heading`}>
          {!(index === 0 && section.title === content.heading) && <h3 id={`${section.id}-heading`} className={Icon ? 'registration-section-heading' : undefined}>{Icon && <Icon aria-hidden="true" />}<span>{section.title}</span></h3>}
          <SourceContent nodes={section.body} />
        </section>;
        })}
        <p className="submission-source draft-note">Reference: <a href={content.source}>InCIT 2026 — {content.title}</a>. Review the 2026 information and links before publication.</p>
      </article>
    </div>
  </main>;
}
