export const navigation = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Important Dates', href: '/#important-dates' },
  { label: 'InCIT 2027', children: [
    { label: 'Call for Papers', href: '/call-for-papers' },
    { label: 'Special Sessions', href: '/special-sessions' },
    { label: 'Committee', href: '/committee' },
    { label: 'Reviewers', href: '/reviewers' },
    { label: 'Schedule', href: '/schedule' },
  ] },
  { label: 'Submissions', children: [
    { label: 'Submission Guidelines', href: '/submission-guidelines' },
    { label: 'Submit Your Paper', href: '/submit-your-paper' },
    { label: 'Registration', href: '/registration' },
    { label: 'Camera-Ready Instructions', href: '/camera-ready' },
    { label: 'Presentation Guidelines', href: '/presentation-guidelines' },
  ] },
  { label: 'Program', children: [
    { label: 'Keynote Speakers', href: '/keynote-speakers' },
    { label: 'Invited Speakers', href: '/invited-speakers' },
    { label: 'Tutorials', href: '/tutorials' },
    { label: 'Workshops', href: '/workshops' },
    { label: 'City Tour', href: '/city-tour' },
  ] },
  { label: 'Venues', children: [
    { label: 'Accommodations', href: '/accommodations' },
    { label: 'Transportation', href: '/transportation' },
    { label: 'Attractions', href: '/attractions' },
  ] },
  { label: 'Student Grant', href: '/student-grant' },
];

export const placeholderPages = navigation.flatMap((item) =>
  item.children ?? (item.href && !item.href.includes('#') ? [{ label: item.label, href: item.href }] : []),
);
