import { PageHeader } from './page-header';
import content from '../content/reviewers.json';

export function Reviewers() {
  return <main id="main-content" tabIndex={-1}>
    <PageHeader title="Reviewers" pageKey="reviewers" />
    <div className="content-width committee-layout">
      <p className="draft-note committee-note">Placeholder names and affiliations. Replace with confirmed reviewers.</p>
      <ul className="committee-members reviewer-members">{content.members.map(member => <li key={member.name}>
        <p className="committee-name">{member.name}</p>
        <p className="committee-affiliation">{member.affiliation}</p>
      </li>)}</ul>
    </div>
  </main>;
}
