import Image from 'next/image';
import { CalendarDays } from 'lucide-react';
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
        <svg className="hero-waves" viewBox="0 0 1440 690" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs><linearGradient id="home-wave-gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stopColor="var(--wave-start)" /><stop offset="95%" stopColor="var(--wave-end)" /></linearGradient></defs>
          <g fill="url(#home-wave-gradient)" stroke="none" transform="rotate(-180 720 350)">
            <path fillOpacity="0.4" d="M 0,700 L 0,131 C 36.93890738685411,144.58317918362314 73.87781477370822,158.16635836724626 132,174 C 190.12218522629178,189.83364163275374 269.4276482920212,207.91774571463804 328,208 C 386.5723517079788,208.08225428536196 424.4115920582069,190.16265877420153 478,232 C 531.5884079417931,273.83734122579847 600.9259834751512,375.4316191885559 653,414 C 705.0740165248488,452.5683808114441 739.8844740411887,428.1108644715748 797,430 C 854.1155259588113,431.8891355284252 933.5361203600937,460.1249229251448 987,491 C 1040.4638796399063,521.8750770748552 1067.9710445184364,555.3894438278456 1110,577 C 1152.0289554815636,598.6105561721544 1208.579701566161,608.3173017634726 1266,632 C 1323.420298433839,655.6826982365274 1381.7101492169195,693.3413491182637 1440,731 L 1440,700 L 0,700 Z" />
            <path fillOpacity="0.53" d="M 0,700 L 0,306 C 38.74169441361451,317.4613392526822 77.48338882722902,328.9226785053644 138,354 C 198.51661117277098,379.0773214946356 280.8081391046984,417.77062523122447 347,426 C 413.1918608953016,434.22937476877553 463.2840547539772,411.9948205697374 501,437 C 538.7159452460228,462.0051794302626 564.0556418793932,534.2500924898261 621,571 C 677.9443581206068,607.7499075101739 766.49337772845,609.0048094709583 826,628 C 885.50662227155,646.9951905290417 915.9708472068072,683.7306696263411 959,690 C 1002.0291527931928,696.2693303736589 1057.6232334443212,672.0725120236775 1110,704 C 1162.3767665556788,735.9274879763225 1211.536219015908,823.9792822789493 1266,867 C 1320.463780984092,910.0207177210507 1380.231890492046,908.0103588605253 1440,906 L 1440,700 L 0,700 Z" />
            <path fillOpacity="1" d="M 0,700 L 0,481 C 64.56154889628809,504.0423480083858 129.12309779257617,527.0846960167715 178,545 C 226.87690220742383,562.9153039832285 260.0691577259834,575.7035639412998 315,579 C 369.9308422740166,582.2964360587002 446.60027130349,576.1010482180294 493,616 C 539.39972869651,655.8989517819706 555.5297570600567,741.8922431865827 611,758 C 666.4702429399433,774.1077568134173 761.2807004562833,720.3299790356394 826,739 C 890.7192995437167,757.6700209643606 925.3474411148105,848.7878406708596 974,875 C 1022.6525588851895,901.2121593291404 1085.3295350844742,862.5186582809223 1140,876 C 1194.6704649155258,889.4813417190777 1241.3344185472931,955.1375262054507 1290,998 C 1338.6655814527069,1040.8624737945493 1389.3327907263533,1060.9312368972746 1440,1081 L 1440,700 L 0,700 Z" />
          </g>
        </svg>
        <div className="content-width hero-grid">
          <div className="hero-copy">
            <h1 id="hero-heading"><span className="hero-title-line">International Conference on</span>{' '}<span className="hero-title-line">Information Technology <span className="hero-year">2027</span></span></h1>
            <p className="hero-date"><CalendarDays aria-hidden="true" /><span className="hero-date-text"><span className="hero-date-range"><time dateTime="2027-11-08">8</time>–<time dateTime="2027-11-10">10</time></span>{' '}<span className="hero-date-month">November 2027</span></span></p>
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
