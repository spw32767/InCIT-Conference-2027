import Image from 'next/image';
import { ImportantDates } from '../components/important-dates';
import './home.css';

const sponsors = [
  { name: 'IEEE', src: '/images/sponsors/ieee.png', width: 344, height: 194 },
  { name: 'IEEE Thailand Section', src: '/images/sponsors/ieee-thailand-section.png', width: 644, height: 133 },
  { name: 'IEEE Computer Society', src: '/images/sponsors/ieee-computer-society.png', width: 3120, height: 955 },
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
              <a className="home-button home-button-primary" href="#about">About <Arrow /></a>
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
          <header className="home-section-heading">
            <h2 id="about-heading">About InCIT 2027</h2>
          </header>
          <div className="academic-copy">
            <p>The International Conference on Information Technology (InCIT 2027) offers a forum for researchers to share work in information and communication technologies. Its focus is on intelligent technologies and innovations that contribute to society, inviting authors to present their findings and discuss emerging research.</p>
            <p>The conference encourages academic dialogue, the exchange of original ideas, and collaboration across disciplines. Participants can explore current advances, practical challenges, and approaches to solving problems in information technology, while identifying opportunities for future joint research.</p>
            <p>InCIT brings the research community together to build professional relationships and share knowledge. Participation arrangements for the 2027 edition, including the venue and any online attendance options, will be announced when confirmed.</p>
            <p>Further details about the organizing institutions and publication arrangements will also be provided through official announcements. We welcome researchers and practitioners interested in contributing to the development of information technology and innovation for society.</p>
            <p className="about-source-note draft-note">Draft adapted from the <a href="https://incit2026.siam.edu/#about">InCIT 2026 conference introduction</a>. Details for 2027 are pending confirmation.</p>
          </div>
        </div>
      </section>

      <section id="important-dates" className="home-section section-light" aria-labelledby="dates-heading">
        <div className="content-width">
          <header className="home-section-heading">
            <h2 id="dates-heading">Important Dates</h2>
            <p className="draft-note">Reference schedule from <a href="https://incit2026.siam.edu/index.html#dates">InCIT 2026</a>.<br />Dates for InCIT 2027 will be announced.</p>
          </header>
          <ImportantDates />
        </div>
      </section>
      <section id="sponsors" className="home-section section-paper" aria-labelledby="sponsors-heading">
        <div className="content-width">
          <header className="home-section-heading">
            <h2 id="sponsors-heading">Sponsored InCIT 2027</h2>
          </header>
          <ul className="sponsor-grid" aria-label="Sponsor logo preview">
            {[...sponsors, ...sponsors, ...sponsors].map((sponsor, index) => <li key={`${sponsor.name}-${index}`} className="sponsor-logo">
              <Image src={sponsor.src} alt={sponsor.name} width={sponsor.width} height={sponsor.height}
                sizes="180px" className="sponsor-image" />
            </li>)}
          </ul>
          <p className="sponsors-note draft-note">Repeated logos for this layout preview. Sponsors for 2027 are pending confirmation.</p>
        </div>
      </section>
      <section id="co-organized" className="home-section section-light" aria-labelledby="co-organized-heading">
        <div className="content-width">
          <header className="home-section-heading">
            <h2 id="co-organized-heading">Co-Organized by</h2>
          </header>
          <div className="co-organizer-placeholder">
            <p className="draft-note">Co-organizer logos will be added here.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
