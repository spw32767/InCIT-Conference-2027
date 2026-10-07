// Editorial progress marker: keep populated reference pages red until the owner clears them.
const importedContentHrefs = new Set([
  '/#home',
  '/submission-guidelines',
  '/camera-ready',
  '/presentation-guidelines',
  '/special-sessions',
  '/committee',
  '/call-for-papers',
  '/reviewers',
  '/schedule',
  '/registration',
  '/accommodations',
  '/transportation',
  '/attractions',
  '/keynote-speakers',
  '/invited-speakers',
  '/tutorials',
  '/workshops',
]);

export const hasImportedContent = (href?: string) => Boolean(href && importedContentHrefs.has(href));

export const navigation = [
  { label: 'Home', href: '/#home' },
  { label: 'InCIT2027', children: [
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
  { label: 'Registration', href: '/registration', action: true },
];

const linkedPages = navigation.flatMap((item) =>
  item.children ?? (item.href && !item.href.includes('#') ? [{ label: item.label, href: item.href }] : []),
);

// Student Grant remains available from the footer; repeated menu destinations
// generate only one static page.
export const placeholderPages = [...new Map([
  ...linkedPages,
  { label: 'Student Grant', href: '/student-grant' },
].map((page) => [page.href, page])).values()];
