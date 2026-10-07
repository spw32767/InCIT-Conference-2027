import { Fragment } from 'react';
import { PageHeader } from './page-header';
import { VenueGallery, type VenueImage } from './venue-gallery';
import content from '../content/venues.json';

type VenueSection = {id:string; title:string; paragraphs:string[]; images:VenueImage[]; links:{label:string;href:string}[]};
type VenueContent = {slug:string; title:string; source:string; sections:VenueSection[]};
export const venuePages:VenueContent[] = content;

function LinkedText({text,links}:{text:string;links:VenueSection['links']}) {
  const tokens = text.split(/(download form|reservation form|[\w.+-]+@[\w.-]+\.[A-Za-z]+)/g);
  return tokens.map((token,index)=>{
    const link = links.find(item=>item.label===token);
    return link ? <a key={index} className="content-link" href={link.href}>{token}</a> : <Fragment key={index}>{token}</Fragment>;
  });
}

export function VenuePage({content}:{content:VenueContent}) {
  return <main id="main-content" tabIndex={-1} className="venue-page">
    <PageHeader title={content.title} pageKey={content.slug} />
    <div className="content-width venue-layout">
      <nav className="submission-contents" aria-label="On this page">
        <h2>On this page</h2>
        <ul>{content.sections.map(section=><li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}</ul>
      </nav>
      <article className="venue-article" aria-label={content.title}>
        <p className="draft-note venue-draft">Reference information and images from ICSEC 2024. Information for InCIT 2027 is pending confirmation.</p>
        {content.sections.map(section=><section className="venue-section" key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`}>
          <h2 id={`${section.id}-heading`}>{section.title}</h2>
          <div className="venue-section-body">
            <div className="venue-copy">{section.paragraphs.map((paragraph,index)=><p key={index}><LinkedText text={paragraph} links={section.links} /></p>)}</div>
            <VenueGallery title={section.title} images={section.images} />
          </div>
        </section>)}
        <p className="draft-note venue-source">Reference: <a href={content.source}>ICSEC 2024 — {content.title}</a>. Review the information and links before publication.</p>
      </article>
    </div>
  </main>;
}
