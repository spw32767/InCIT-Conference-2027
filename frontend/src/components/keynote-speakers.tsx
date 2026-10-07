import { UserRound } from 'lucide-react';
import { PageHeader } from './page-header';
import { Separator } from './ui/separator';

const speakers = [
  {
    name: 'Prof. Mira Lawson', role: 'Professor of Information Technology', affiliation: 'Example University, Example Country',
    title: 'Designing Reliable Digital Systems',
    abstract: 'This example keynote explores how digital systems can remain reliable as technology and user needs change. It introduces approaches to designing dependable services, evaluating their performance, and supporting long-term improvements.',
    biography: 'Mira Lawson is a fictional professor at Example University. This biography is sample content for the speaker profile layout.',
  },
  {
    name: 'Dr. Arun Mercer', role: 'Research Director', affiliation: 'Example Research Institute, Example Country',
    title: 'Responsible AI in Everyday Practice',
    abstract: 'This example keynote considers how teams can develop and use AI responsibly. It discusses transparency, human oversight, and practical evaluation, with a focus on making technology understandable to the people who use it.',
    biography: 'Arun Mercer is a fictional research director at Example Research Institute. This biography is sample content for the speaker profile layout.',
  },
  {
    name: 'Dr. Lena Rowan', role: 'Associate Professor', affiliation: 'Example Institute of Technology, Example Country',
    title: 'Human-Centered Technology and Collaboration',
    abstract: 'This example keynote examines the connection between technology, people, and collaboration. It explores how listening to different perspectives can guide the design of accessible tools and support the exchange of ideas across disciplines.',
    biography: 'Lena Rowan is a fictional associate professor at Example Institute of Technology. This biography is sample content for the speaker profile layout.',
  },
];

export function KeynoteSpeakers() {
  return <SpeakerProfiles title="Keynote Speakers" pageKey="keynote-speakers" speakers={speakers} note="Fictional speakers, affiliations and keynote topics. Portraits are placeholders. Replace with confirmed InCIT 2027 information." />;
}

export type SpeakerProfile = {name:string; role:string; affiliation:string; title:string; abstract:string; biography:string};

export function SpeakerProfiles({title,pageKey,speakers,note}:{title:string;pageKey:string;speakers:SpeakerProfile[];note:string}) {
  return <main id="main-content" tabIndex={-1}>
    <PageHeader title={title} pageKey={pageKey} />
    <div className="content-width keynote-layout">
      <p className="draft-note keynote-note">{note}</p>
      {speakers.map((speaker, index) => <article className="keynote-speaker" key={speaker.name} aria-labelledby={`speaker-${index}-name`}>
        {index > 0 && <Separator className="keynote-divider" />}
        <div className="keynote-speaker-grid">
          <div className="keynote-portrait" role="img" aria-label={`Portrait placeholder for ${speaker.name}`}>
            <UserRound size={64} strokeWidth={1.2} aria-hidden="true" />
            <span>Portrait placeholder</span>
          </div>
          <div className="keynote-content">
            <header className="keynote-identity">
              <h2 id={`speaker-${index}-name`}>{speaker.name}</h2>
              <p className="keynote-role">{speaker.role}</p>
              <p className="keynote-affiliation">{speaker.affiliation}</p>
            </header>
            <h3 className="keynote-talk">{speaker.title}</h3>
            <dl className="keynote-details">
              <div><dt>Abstract</dt><dd>{speaker.abstract}</dd></div>
              <div><dt>Biography</dt><dd>{speaker.biography}</dd></div>
            </dl>
          </div>
        </div>
      </article>)}
    </div>
  </main>;
}
