'use client';

import { useEffect, useState } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

// Reference schedule from the live InCIT 2026 dates section, checked 6 October 2026.
// These are 2026 reference dates, not confirmed deadlines for InCIT 2027.
const dates = [
  { label: 'Paper Submission Deadline (1st Round)', date: '8 June 2026', start: '2026-06-08', end: '2026-06-08', detail: '', period: false },
  { label: 'Notification of Acceptance (1st Round)', date: '15 July 2026', start: '2026-07-15', end: '2026-07-15', detail: 'Source update: submission deadline extended to 15 July following requests from authors and reviewers.', period: false },
  { label: 'Paper Submission Deadline (2nd Round)', date: '15 August 2026', start: '2026-08-15', end: '2026-08-15', detail: '', period: false },
  { label: 'Notification', date: '24 September 2026', start: '2026-09-24', end: '2026-09-24', detail: 'Acceptance notification for the second round.', period: false },
  { label: 'Camera Ready', date: '10 October 2026', start: '2026-10-10', end: '2026-10-10', detail: 'Final camera-ready paper submission.', period: false },
  { label: 'Early Bird Registration', date: '25 September–3 October 2026', start: '2026-09-25', end: '2026-10-03', detail: 'Registration period extended through 3 October.', period: true },
  { label: 'Registration', date: '4–6 October 2026', start: '2026-10-04', end: '2026-10-06', detail: 'Regular registration period.', period: true },
  { label: 'Conference Dates', date: '12–14 November 2026', start: '2026-11-12', end: '2026-11-14', detail: 'Conference days.', period: true },
].sort((a, b) => a.start.localeCompare(b.start));

function bangkokDate() {
  const parts = new Intl.DateTimeFormat('en', { timeZone: 'Asia/Bangkok', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date());
  const part = (type: string) => parts.find((item) => item.type === type)?.value;
  return `${part('year')}-${part('month')}-${part('day')}`;
}

export function ImportantDates() {
  const [preview, setPreview] = useState(true);
  const [today, setToday] = useState('');
  useEffect(() => {
    const update = () => setToday(bangkokDate());
    update();
    const timer = window.setInterval(update, 60_000);
    return () => window.clearInterval(timer);
  }, []);
  const referenceDate = preview ? '2026-09-25' : today;
  const displayDate = referenceDate ? new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Bangkok' }).format(new Date(`${referenceDate}T12:00:00+07:00`)) : '';

  return <div className="dates-schedule">
    <div className="dates-preview-bar">
      <p aria-live="polite" className={preview ? 'draft-note' : undefined}>{preview ? 'Preview' : 'Current date'}: <strong>{displayDate}</strong>{!preview && ' · Thailand time'}</p>
      <Button variant="outline" size="sm" disabled={!today} onClick={() => setPreview(!preview)}>{preview ? 'Use current date' : 'Preview active period'}</Button>
    </div>
    <Table className="dates-table" role="table" aria-label="Important dates">
      <TableHeader role="rowgroup">
        <TableRow role="row"><TableHead role="columnheader" scope="col">Activity</TableHead><TableHead role="columnheader" scope="col">Date / Period</TableHead><TableHead role="columnheader" scope="col"><span className="sr-only">Status</span></TableHead></TableRow>
      </TableHeader>
      <TableBody role="rowgroup">
        {dates.map((item) => {
          const state = !referenceDate || referenceDate < item.start ? 'upcoming' : referenceDate > item.end ? 'passed' : 'active';
          const remaining = referenceDate ? Math.round((Date.parse(item.end) - Date.parse(referenceDate)) / 86_400_000) : 0;
          const closingSoon = state === 'active' && item.period && remaining <= 7 && item.label !== 'Conference Dates';
          const status = state === 'upcoming' ? 'Upcoming' : !item.period ? 'Today' : item.label === 'Conference Dates' ? 'Happening now' : closingSoon ? 'Closing soon' : 'Open now';
          return <TableRow key={item.label} role="row" data-period-state={state}>
            <TableHead role="rowheader" scope="row"><span className="date-activity">{item.label}</span>{item.detail && <p className="date-description">{item.detail}</p>}</TableHead>
            <TableCell role="cell"><time dateTime={item.start}>{item.date}</time></TableCell>
            <TableCell role="cell">{state !== 'passed' && <Badge data-schedule-status={state === 'upcoming' ? 'upcoming' : closingSoon ? 'closing' : 'active'}>{status}</Badge>}</TableCell>
          </TableRow>;
        })}
      </TableBody>
    </Table>
    <p className="dates-note draft-note">Reference schedule from InCIT 2026. Preview simulates 25 September 2026; switch to the current date to view live status. InCIT 2027 dates are pending confirmation.</p>
  </div>;
}
