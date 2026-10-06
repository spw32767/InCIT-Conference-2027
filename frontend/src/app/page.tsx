import Image from 'next/image';
import Link from 'next/link';
import './home.css';

const highlights = [
  { title: 'Exchange ideas', description: 'Discuss emerging challenges and fresh perspectives with the information technology community.' },
  { title: 'Discover research', description: 'Explore new work in artificial intelligence, data science, networks, and software engineering.' },
  { title: 'Build connections', description: 'Meet researchers, students, and industry professionals, and create opportunities for collaboration.' },
];

// Illustrative dates for the design preview. Replace with the approved schedule.
const importantDates = [
  { label: 'Paper submission', date: '31 May 2027', iso: '2027-05-31', detail: 'Submit your research manuscript.' },
  { label: 'Acceptance notification', date: '15 July 2027', iso: '2027-07-15', detail: 'Review decisions sent to authors.' },
  { label: 'Camera-ready deadline', date: '15 August 2027', iso: '2027-08-15', detail: 'Final papers and author materials.' },
  { label: 'Early bird registration', date: '1–30 September 2027', iso: '2027-09-01', detail: 'Example early registration period.' },
  { label: 'Regular registration', date: '1–15 October 2027', iso: '2027-10-01', detail: 'Example regular registration period.' },
  { label: 'Conference days', date: '11–13 November 2027', iso: '2027-11-11', detail: 'Three days of research and exchange.' },
];

function Arrow() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6" /></svg>;
}

export default function HomePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section id="home" className="home-hero section-light" aria-labelledby="hero-heading">
        <svg className="hero-waves" viewBox="0 0 900 800" preserveAspectRatio="none" fill="none" aria-hidden="true">
          <path className="hero-wave-outer" d="M40 0H900V800C650 800 445 720 285 555C135 400 40 225 40 0Z" />
          <path className="hero-wave-middle" d="M75 0H900V800C675 790 480 710 320 545C170 390 75 215 75 0Z" />
          <path className="hero-wave-inner" d="M110 0H900V800C700 780 515 700 355 535C205 380 110 205 110 0Z" />
        </svg>
        <div className="content-width hero-grid">
          <div className="hero-copy">
            <h1 id="hero-heading"><span className="hero-title-line">International Conference on</span>{' '}<span className="hero-title-line">Information Technology <span className="hero-year">2027</span></span></h1>
            <div className="hero-actions">
              <Link className="home-button home-button-primary" href="/call-for-papers">Call for Papers <Arrow /></Link>
              <a className="home-button home-button-secondary" href="#important-dates">Important Dates <Arrow /></a>
            </div>
          </div>
          <div className="hero-art">
            <Image src="/images/incit-2027-hero.webp" alt="A connected globe with a laptop, processor, and research data, illustrating information technology collaboration" width={1024} height={1024} sizes="(max-width: 600px) min(90vw, 420px), (max-width: 1050px) min(65vw, 480px), 560px" loading="eager" className="hero-illustration" />
          </div>
        </div>
      </section>

      <section id="about" className="home-section section-paper" aria-labelledby="about-heading">
        <div className="content-width">
          <div className="home-section-topline"><p className="section-kicker">01 / THE CONFERENCE</p><span className="preview-label">Mockup content</span></div>
          <div className="about-grid">
            <div className="about-copy">
              <h2 id="about-heading">About InCIT 2027</h2>
              <p className="section-lead">Bringing ideas together.<br />Moving technology forward.</p>
              <p>InCIT brings together researchers, academics, and professionals to share advances in information technology and explore how research can create a positive impact.</p>
              <p>This example programme combines keynote talks, paper presentations, and special sessions, with space to exchange ideas and develop new collaborations.</p>
              <Link className="home-inline-link" href="/committee">Meet the committee <Arrow /></Link>
            </div>
            <ol className="about-highlights">
              {highlights.map((item, index) => <li key={item.title}>
                <span className="highlight-number">0{index + 1}</span>
                <div><h3>{item.title}</h3><p>{item.description}</p></div>
              </li>)}
            </ol>
          </div>
          <ul className="topic-list" aria-label="Example research topics">
            <li>AI &amp; Machine Learning</li><li>Data Science</li><li>Networks &amp; Security</li><li>Software Engineering</li>
          </ul>
        </div>
      </section>

      <section id="important-dates" className="home-section section-light" aria-labelledby="dates-heading">
        <div className="content-width">
          <div className="home-section-topline"><p className="section-kicker">02 / PLAN YOUR PARTICIPATION</p><span className="preview-label">Sample schedule</span></div>
          <div className="dates-heading-row">
            <h2 id="dates-heading">Important Dates</h2>
            <p>Illustrative dates for this design preview.<br />The official schedule will be announced.</p>
          </div>
          <ol className="dates-grid">
            {importantDates.map((item, index) => <li key={item.label} className={index === importantDates.length - 1 ? 'date-card date-card-featured' : 'date-card'}>
              <div className="date-card-top"><span className="date-step">0{index + 1}</span><p>{item.label}</p></div>
              <time dateTime={item.iso}>{item.date}</time>
              <p className="date-detail">{item.detail}</p>
            </li>)}
          </ol>
          <p className="dates-note">All dates above are mockup data and are not confirmed conference deadlines.</p>
        </div>
      </section>
    </main>
  );
}
