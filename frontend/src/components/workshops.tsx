import { PageHeader } from './page-header';
import { Separator } from './ui/separator';

const workshops = [
  {
    title: 'Designing Secure Learning Environments',
    description: 'This sample workshop uses a fictional learning platform to explore digital security. Participants consider how people access shared resources, identify potential risks, and discuss ways to protect information while supporting collaboration.',
    activities: ['Review a fictional learning-platform scenario.', 'Map sample access permissions and information flows.', 'Discuss an illustrative incident-response exercise.'],
  },
  {
    title: 'Exploring Community Data Through Prototypes',
    description: 'This sample workshop introduces a fictional community dataset. Participants explore how data can be organized and presented, then sketch a simple prototype that helps people understand an example local service. All datasets and scenarios are illustrative.',
    activities: ['Explore a sample dataset and its limitations.', 'Sketch an accessible information view.', 'Compare prototype ideas and discuss their trade-offs.'],
  },
  {
    title: 'Building Interactive Visual Experiences',
    description: 'This sample workshop explores a fictional visual-content project. Participants consider navigation, image detail, and user feedback, then outline an interactive prototype. The session description and exercises are placeholders for a future workshop.',
    activities: ['Organize sample visual content into a reading sequence.', 'Plan navigation and zoom interactions.', 'Review a prototype for clarity and accessibility.'],
  },
];

export function Workshops() {
  return <main id="main-content" tabIndex={-1}>
    <PageHeader title="Workshops" pageKey="workshops" />
    <div className="content-width workshops-layout">
      <p className="draft-note workshops-note">Sample workshop topics, descriptions and activities. Replace with confirmed InCIT 2027 information.</p>
      {workshops.map((workshop,index) => <article key={workshop.title} className="workshop-session" aria-labelledby={`workshop-${index}-title`}>
        {index > 0 && <Separator className="workshop-divider" />}
        <h2 id={`workshop-${index}-title`}>{workshop.title}</h2>
        <p>{workshop.description}</p>
        <h3>Workshop outline</h3>
        <ul>{workshop.activities.map(activity => <li key={activity}>{activity}</li>)}</ul>
      </article>)}
    </div>
  </main>;
}
