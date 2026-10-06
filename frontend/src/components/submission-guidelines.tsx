import { Fragment } from 'react';
import { PageHeader } from './page-header';
import { ArrowRight, Mail } from 'lucide-react';
import { Alert, AlertDescription } from './ui/alert';
import { Separator } from './ui/separator';
import content from '../content/submission-guidelines.json';
import { Button } from './ui/button';

type ContentNode = { tag: string; presentation?: string; text?: string; href?: string; children?: ContentNode[] };

// Render text and approved semantic elements only; source styles and scripts are not imported.
function SourceText({ nodes }: { nodes: ContentNode[] }) {
  return nodes.map((node, index) => {
    const children = <SourceText nodes={node.children ?? []} />;
    switch (node.tag) {
      case 'text': return <Fragment key={index}>{node.text}</Fragment>;
      case 'p': return node.presentation === 'email-notice'
        ? <Alert key={index} variant="informational" role="note" className="submission-email-notice"><Mail aria-hidden="true" /><AlertDescription><p>{children}</p></AlertDescription></Alert>
        : <p key={index}>{children}</p>;
      case 'ul': return <ul key={index}>{children}</ul>;
      case 'li': return <li key={index}>{children}</li>;
      case 'strong': return <strong key={index}>{children}</strong>;
      case 'a': return <a key={index} className="content-link" href={node.href}>{children}</a>;
      default: return <Fragment key={index}>{children}</Fragment>;
    }
  });
}

export function SubmissionGuidelines() {
  return <main id="main-content" tabIndex={-1} className="submission-page">
    <PageHeader title={content.title} description={content.subtitle} pageKey="submission-guidelines" />
    <div className="content-width submission-layout">
      <nav className="submission-contents" aria-label="On this page">
        <h2>On this page</h2>
        <ul>{content.sections.map((section) => <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}</ul>
      </nav>
      <article className="submission-article" aria-labelledby="submission-heading">
        <p className="submission-draft draft-note"><strong>Draft guidelines.</strong> Text copied from InCIT 2026. Requirements and the submission portal for 2027 are pending confirmation.</p>
        <h2 id="submission-heading">{content.heading}</h2>
        <Separator className="submission-heading-divider" />
        <h3 className="submission-subheading">{content.subheading}</h3>
        {content.sections.map((section) => <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`}>
          <h3 id={`${section.id}-heading`}>{section.title}</h3>
          <SourceText nodes={section.body} />
        </section>)}
        <div className="submission-portal">
          <Button asChild variant="conference" size="hero"><a href={content.portal.href}>{content.portal.label}<ArrowRight aria-hidden="true" data-icon="inline-end" /></a></Button>
          <p className="draft-note">Reference portal for InCIT 2026. Replace with the InCIT 2027 link before publication.</p>
        </div>
        <p className="submission-source draft-note">Reference: <a href="https://incit2026.siam.edu/submission.html">InCIT 2026 submission guidelines</a>. This draft does not confirm the policies or publication arrangements for 2027.</p>
      </article>
    </div>
  </main>;
}
