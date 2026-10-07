import { PageHeader } from './page-header';
import content from '../content/committee.json';

export function Committee() {
  return <main id="main-content" tabIndex={-1}>
    <PageHeader title="Committee" pageKey="committee" />
    <div className="content-width committee-layout">
      <p className="draft-note committee-note">Placeholder names and affiliations. Replace with confirmed committee members.</p>
      {content.groups.map(group => <section key={group.id} id={group.id} className="committee-group" aria-labelledby={`${group.id}-heading`}>
        <h2 id={`${group.id}-heading`}>{group.title}</h2>
        <ul className="committee-members">{group.members.map(member => <li key={member.name}>
          <p className="committee-name">{member.name}</p>
          <p className="committee-affiliation">{member.affiliation}</p>
        </li>)}</ul>
      </section>)}
    </div>
  </main>;
}
