import { FloorPlanPreview } from './floor-plan-preview';
import { Download } from 'lucide-react';
import { PageHeader } from './page-header';
import { SourceContent } from './reference-page';
import { Button } from './ui/button';
import content from '../content/schedule.json';

const downloads = [
  {label:'Download Schedule PDF'},
  {label:'Download Abstract Booklet PDF'},
];

export function Schedule() {
  return <main id="main-content" tabIndex={-1}>
    <PageHeader title="Schedule" pageKey="schedule" />
    <div className="content-width schedule-layout">
      <p className="draft-note schedule-note">Reference schedule from ICSEC 2024. Floor plans and PDF downloads are placeholders. Replace with confirmed InCIT 2027 information.</p>
      {content.tables.map((table,index) => <section className="schedule-block" key={index} aria-label={['November 6, 2024','November 7, 2024','November 8, 2024','Parallel sessions — November 7, 2024','Parallel sessions — November 8, 2024'][index]}>
        <SourceContent nodes={[table]} />
      </section>)}
      <p className="schedule-legend">Note: <span className="schedule-onsite">Onsite</span> <span className="schedule-online">Online</span></p>
      <div className="schedule-downloads">{downloads.map(item => <Button key={item.label} disabled variant="conference" size="hero"><Download aria-hidden="true" data-icon="inline-start" />{item.label}</Button>)}</div>
      <section className="schedule-floor" aria-labelledby="floor-plan-heading">
        <h2 id="floor-plan-heading">Floor plan</h2>
        {content.floorPlans.map((image,index) => <FloorPlanPreview key={index} {...image} index={index} />)}
        <div className="schedule-downloads"><Button disabled variant="conference" size="hero"><Download aria-hidden="true" data-icon="inline-start" />Download PDF</Button></div>
      </section>
    </div>
  </main>;
}
