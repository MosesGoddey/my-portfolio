/**
 * Design reminder: The Proving Ground.
 * Evidence-first technical editorial layout with warm paper, ink black, and Signal Cobalt.
 * Keep hierarchy asymmetrical, metadata concise, and interactions purposeful.
 * Use personal, direct developer copy and a practical logo-led technology grid, not abstract brand slogans.
 */
import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  GraduationCap,
  MapPin,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { FaCss3Alt, FaDocker, FaGitAlt, FaHtml5, FaJs, FaLaravel, FaPhp } from "react-icons/fa";
import { SiGithub, SiPostman, SiTailwindcss } from "react-icons/si";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

const RESUME_URL = "https://drive.google.com/file/d/1WyK5E-xI_TyaxJ49gik6QxXfhAY-sdFZ/view?usp=sharing";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xljergan";

type Project = {
  number: string;
  name: string;
  kind: string;
  description: string;
  stack: string[];
  image: string;
  imageAlt: string;
  href?: string;
  live: boolean;
  note: string;
  proof: string;
  caseStudy: {
    lead: string;
    facts: Array<{ label: string; value: string }>;
    sections: Array<{ label: string; title: string; body: string }>;
  };
};

const primaryProjects: Project[] = [
  {
    number: "01",
    name: "Chophouse Kitchen",
    kind: "Restaurant commerce",
    description:
      "A full ordering and delivery experience for a busy Anyigba kitchen, from menu discovery to table bookings, cakes, orders, payments, and support.",
    stack: ["Laravel", "PHP", "JavaScript", "Paystack", "Google Cloud"],
    image: "/images/chophouse-live-home.webp",
    imageAlt: "Chophouse Kitchen live homepage",
    href: "https://chphouse.duckdns.org",
    live: true,
    note: "Live / Google Cloud",
    proof: "Google Cloud · 22 tables · PWA",
    caseStudy: {
      lead: "A live restaurant commerce PWA for an Anyigba kitchen, covering customer ordering alongside the operational details that support it.",
      facts: [
        { label: "Release", value: "Live PWA" },
        { label: "Infrastructure", value: "Google Cloud" },
        { label: "Data model", value: "22 tables" },
      ],
      sections: [
        { label: "Customer workflow", title: "From menu discovery to a confirmed order.", body: "Customers can browse the menu, build a cart, place food orders, request cakes, reserve tables, and track orders in one service flow." },
        { label: "Operations workflow", title: "Role-based work behind the storefront.", body: "The application supports customer, administrator, staff, and delivery-staff roles, with restaurant management, search, reviews, and QR-code access included in the recorded scope." },
        { label: "Implementation record", title: "Payments, authentication, and deployment included.", body: "The build uses Laravel, PHP, and JavaScript with Paystack payments tested end to end, email OTP authentication, and a Google Cloud deployment." },
      ],
    },
  },
  {
    number: "02",
    name: "ArtConnect",
    kind: "Art marketplace",
    description:
      "A contemporary Nigerian art marketplace connecting collectors with artists through catalogue discovery, protected payment flow, and artist onboarding.",
    stack: ["Laravel", "PHP", "Tailwind", "Paystack", "AWS"],
    image: "/images/artconnect-live-home.webp",
    imageAlt: "ArtConnect live homepage",
    href: "https://artconnect.duckdns.org",
    live: true,
    note: "Live / AWS",
    proof: "AWS Lightsail · 26 tables · Commerce",
    caseStudy: {
      lead: "A live Laravel art marketplace connecting artists, buyers, and administrators through catalogue discovery, protected payment workflows, and direct collaboration.",
      facts: [
        { label: "Release", value: "Live application" },
        { label: "Infrastructure", value: "AWS Lightsail" },
        { label: "Data model", value: "26 tables / 18 pages" },
      ],
      sections: [
        { label: "Marketplace workflow", title: "Different paths for artists, buyers, and administrators.", body: "The application uses Laravel authentication, email verification, password reset, Google login, and middleware-based authorization across its three user roles." },
        { label: "Commerce record", title: "Art discovery, bidding, payment, and delivery are connected.", body: "Recorded features include search autocomplete, Paystack payments, escrow workflows, auction and price bidding, plus automated email delivery of purchased digital artwork." },
        { label: "Direct collaboration", title: "Artist and buyer communication is part of the product.", body: "Pusher powers real-time messaging, while one-to-one WebRTC video and audio calls support direct interaction between artists and buyers." },
      ],
    },
  },
  {
    number: "03",
    name: "PAAUMENTOR",
    kind: "Mentorship platform",
    description:
      "A peer-mentorship platform for PAAU students, built around verified mentor progression, structured learning paths, certificate governance, and Gemini-assisted assessments.",
    stack: ["Laravel 11", "MySQL", "Gemini API", "Jitsi Meet", "AWS"],
    image: "/images/paaumentor-landing-page.png",
    imageAlt: "PAAUMENTOR landing page for PAAU student mentorship",
    href: "https://paaumentor.duckdns.org",
    live: true,
    note: "Live / AWS",
    proof: "AWS · 46 tables · Laravel 11",
    caseStudy: {
      lead: "A live peer-mentorship platform for PAAU students, built around multi-role learning, mentor progression, certificate governance, and guarded assessments.",
      facts: [
        { label: "Release", value: "Live platform" },
        { label: "Infrastructure", value: "AWS deployment" },
        { label: "Data model", value: "46 tables / Laravel 11" },
      ],
      sections: [
        { label: "Role governance", title: "A structured path from mentee to mentor.", body: "The platform supports mentees, mentors, alumni, administrators, and verifier administrators, including credential review before junior-mentor acceptance and promotion after three mentored cohorts." },
        { label: "Learning record", title: "Progress, verification, and certificates are linked.", body: "Verifier administrators review certificate eligibility, while the platform records structured learning paths and mentor progression across its role-based workflows." },
        { label: "Assessment and sessions", title: "AI assessments and hosted live sessions support the learning flow.", body: "Gemini generates CBT assessments from completed skills and course outlines, with tab-switch safeguards. Voice and video sessions use the hosted Jitsi Meet IFrame and External API." },
      ],
    },
  },
];

const supportingProjects: Project[] = [
  {
    number: "04",
    name: "Student Management System",
    kind: "Education operations",
    description:
      "A team-assigned internship application for course registration, staff and course assignment, CGPA computation, result checking, user management, authenticated access, and password reset.",
    stack: ["Laravel", "PHP", "JavaScript", "MySQL"],
    image: "/images/student-management-system-login.jpg",
    imageAlt: "Student Management System sign-in interface",
    live: false,
    note: "Former Render + Railway deployment / inactive",
    proof: "13 pages · 14 tables · Laravel",
    caseStudy: {
      lead: "A team-assigned internship Student Management System record, completed as a Laravel, PHP, JavaScript, and MySQL application for academic administration workflows.",
      facts: [
        { label: "Release", value: "Former deployment" },
        { label: "Infrastructure", value: "Render + Railway" },
        { label: "Scope", value: "13 pages / 14 tables" },
      ],
      sections: [
        { label: "Academic operations", title: "Core student and staff workflows in one portal.", body: "The recorded scope includes course registration, course assignment, staff assignment, CGPA computation, result checking, and user management." },
        { label: "Access record", title: "Authenticated roles protect administration tasks.", body: "Administrator and student users have role-based access, with password-reset functionality included in the completed application." },
        { label: "Deployment note", title: "The interface remains as evidence after the free-tier deployment ended.", body: "The completed application was deployed to Render with MySQL hosted on Railway. The public deployment is no longer active because of free-tier restrictions." },
      ],
    },
  },
  {
    number: "05",
    name: "Warri Wolves",
    kind: "Football-club interface",
    description:
      "A supporter-facing football-club web interface organised around club updates, squad information, fixtures, tickets, stadium details, and account access.",
    stack: ["HTML", "CSS", "Tailwind", "JavaScript"],
    image: "/images/warri-wolves-home-page.png",
    imageAlt: "Warri Wolves football-club homepage interface",
    href: "https://warriwolves-nugumrug.manus.space/",
    live: true,
    note: "Live / Public project link",
    proof: "Frontend interface · Live site",
    caseStudy: {
      lead: "A live supporter-facing football-club interface that brings club information, match context, and supporter actions into one public web experience.",
      facts: [
        { label: "Release", value: "Live public site" },
        { label: "Product scope", value: "Club / supporter interface" },
        { label: "Build", value: "HTML / CSS / Tailwind / JS" },
      ],
      sections: [
        { label: "Supporter journeys", title: "Club information is organised around what supporters look for.", body: "The live interface includes club updates, squad information, fixtures, tickets, stadium details, news, shop access, and account access." },
        { label: "Match context", title: "Fixtures and club activity have a clear public home.", body: "The experience presents a club-facing route through fixtures, a live match centre, team context, and current news without requiring visitors to navigate a fragmented set of pages." },
        { label: "Interface record", title: "A public frontend project with a live inspection link.", body: "The project is a frontend interface built with HTML, CSS, Tailwind, and JavaScript. Its public link is active and available directly from this portfolio." },
      ],
    },
  },
];

const faqs = [
  {
    question: "What technology do you work with?",
    answer:
      "My core stack is HTML, CSS, Tailwind CSS, JavaScript, PHP, Laravel, GitHub, Docker, and Postman. I have deployed ArtConnect on AWS and Chophouse Kitchen on Google Cloud.",
  },
  {
    question: "Can I see your live projects?",
    answer:
      "Yes. Chophouse Kitchen, ArtConnect, PAAUMENTOR, and Warri Wolves are live and linked in the selected work section. The Student Management System remains a supporting record with a real interface screenshot, but no public URL.",
  },
  {
    question: "Are you open to internship or full-time roles?",
    answer:
      "Yes. I completed my B.Sc. in Computer Science in July 2026 and am open to graduate software engineering roles and full-time opportunities where I can keep shipping useful products with a strong team.",
  },
  {
    question: "Do you take freelance projects?",
    answer:
      "Yes. I am open to discussing well-scoped web projects, especially where a business needs a practical Laravel-based product, polished frontend, or a clearer digital workflow.",
  },
  {
    question: "How quickly can you start?",
    answer:
      "I am available to discuss opportunities now. Once the role scope and expectations are clear, I can confirm a realistic start date and project schedule.",
  },
];

const technologyStack = [
  { name: "HTML5", role: "Semantic structure", Icon: FaHtml5, tone: "html" },
  { name: "CSS3", role: "Responsive styling", Icon: FaCss3Alt, tone: "css" },
  { name: "Tailwind CSS", role: "UI systems", Icon: SiTailwindcss, tone: "tailwind" },
  { name: "JavaScript", role: "Frontend behaviour", Icon: FaJs, tone: "javascript" },
  { name: "PHP", role: "Server-side logic", Icon: FaPhp, tone: "php" },
  { name: "Laravel", role: "Web applications", Icon: FaLaravel, tone: "laravel" },
  { name: "Postman", role: "API testing", Icon: SiPostman, tone: "postman" },
  { name: "Docker", role: "Containers", Icon: FaDocker, tone: "docker" },
  { name: "Git & GitHub", role: "Version control", Icon: FaGitAlt, tone: "git" },
  { name: "GitHub", role: "Collaboration", Icon: SiGithub, tone: "github" },
];

function ProjectCard({ project, featured = false, supporting = false, onOpenCaseStudy }: { project: Project; featured?: boolean; supporting?: boolean; onOpenCaseStudy?: () => void }) {
  return (
    <article data-reveal className={`project-card ${featured ? "project-card--featured" : ""} ${supporting ? "project-card--supporting" : ""} ${!project.live ? "project-card--record" : ""}`}>
      {project.live && project.href && (
        <a href={project.href} target="_blank" rel="noreferrer" className="project-card__live-link" aria-label={`Open ${project.name} in a new tab`} />
      )}
      <div className="project-card__visual">
        <img src={project.image} alt={project.imageAlt} />
      </div>
      <div className="project-card__body">
        <div className="project-card__topline"><span>File {project.number} / {project.kind}</span><span className={project.live ? "project-card__status project-card__status--live" : "project-card__status"}>{project.live ? project.note : "Supporting record"}</span></div>
        <div className="project-card__case"><span>MGJ / CASE RECORD</span><strong>{project.proof}</strong></div>
        <div className="project-card__proofs" aria-label={`${project.name} verified project facts`}>
          {project.caseStudy.facts.slice(0, 2).map((fact) => (
            <span key={fact.label}><b>{fact.label}</b>{fact.value}</span>
          ))}
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        {!project.live && (
          <div className="project-card__record-note">
            <span>Status</span>
            <strong>{project.note}</strong>
          </div>
        )}
        <div className="project-card__bottom">
          <div className="project-tags">
            {project.stack.map((item) => <span key={item}>{item}</span>)}
          </div>
          <div className="project-card__actions">
            {onOpenCaseStudy && <button type="button" className="case-study-trigger" onClick={onOpenCaseStudy}>Case study <ArrowDownRight size={15} /></button>}
            {project.live ? (
              <a href={project.href} target="_blank" rel="noreferrer" className="circle-link" aria-label={`Visit ${project.name} live website`}>
                <ExternalLink size={19} />
              </a>
            ) : (
              <span className="project-card__record-lock">No public URL</span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectCaseStudy({ project, open, onOpenChange, darkMode }: { project: Project | null; open: boolean; onOpenChange: (open: boolean) => void; darkMode: boolean }) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={`case-study-modal ${darkMode ? "case-study-modal--dark" : ""}`}>
        <div className="case-study-modal__masthead">
          <div className="eyebrow"><span className="live-dot" /> {project.number} / {project.name} case record</div>
          <div className="case-study-modal__heading">
            <div>
              <DialogTitle>{project.name}</DialogTitle>
              <DialogDescription>{project.caseStudy.lead}</DialogDescription>
            </div>
            <div className="case-study-modal__facts" aria-label={`${project.name} evidence`}>
              {project.caseStudy.facts.map((fact) => <div key={fact.label}><span>{fact.label}</span><strong>{fact.value}</strong></div>)}
            </div>
          </div>
        </div>

        <div className="case-study-modal__body">
          {project.caseStudy.sections.map((section) => (
            <section key={section.label}>
              <div className="case-study-modal__label">{section.label}</div>
              <h3>{section.title}</h3>
              <p>{section.body}</p>
            </section>
          ))}
        </div>

        <div className="case-study-modal__footer">
          <div>MGJ / CASE {project.number} <span>{project.kind}</span></div>
          {project.live && project.href ? (
            <a href={project.href} target="_blank" rel="noreferrer" className="button button--blue">Visit project <ExternalLink size={16} /></a>
          ) : (
            <span className="case-study-modal__availability">Former deployment inactive</span>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function ResumeButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={RESUME_URL}
      target="_blank"
      rel="noreferrer"
      className={`${className} resume-action`}
    >
      Resume PDF
      <ArrowUpRight aria-hidden="true" size={15} />
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [motionReady, setMotionReady] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);
  const [contactState, setContactState] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setContactState("sending");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (!response.ok) throw new Error("Contact form delivery failed");

      form.reset();
      setContactState("success");
    } catch {
      setContactState("error");
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setMotionReady(true);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px" },
    );

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);
  return (
    <div className={`portfolio-shell ${darkMode ? "portfolio-dark" : ""} ${motionReady ? "motion-ready" : ""}`}>
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <div className="site-header__inner">
          <a href="#top" className="brand" onClick={closeMenu} aria-label="Back to top">
            <span className="brand__seal">
              <img
                src="/images/mgj-monogram-logo.png"
                alt="MGJ monogram"
                className="brand__mark"
              />
            </span>
            <span className="brand__wordmark"><strong>Moses Goddey Joseph</strong><small>MGJ / Full-stack field record</small></span>
          </a>

          <nav className={`main-nav ${menuOpen ? "main-nav--open" : ""}`} aria-label="Main navigation">
            {[
              ["About", "#about"],
              ["Projects", "#work"],
              ["Resume", RESUME_URL],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={label} href={href} onClick={closeMenu} target={label === "Resume" ? "_blank" : undefined} rel={label === "Resume" ? "noreferrer" : undefined}>{label}</a>
            ))}
            <div className="main-nav__mobile-actions">
              <ResumeButton className="button button--dark button--compact" />
            </div>
          </nav>

          <div className="header-actions">
            <button
              type="button"
              className="icon-button theme-button"
              onClick={() => setDarkMode((current) => !current)}
              aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <ResumeButton className="button button--dark button--compact header-cv" />
            <button
              type="button"
              className="icon-button menu-button"
              onClick={() => setMenuOpen((current) => !current)}
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero__content">
            <div className="eyebrow hero__eyebrow"><span className="live-dot" /> Field record / Full-stack developer · Jos, Nigeria</div>
            <h1 id="hero-title">Moses Goddey<br />Joseph<span className="hero__period">.</span></h1>
            <p className="hero__intro">
              I build and deploy web applications for practical workflows with Laravel, PHP, JavaScript, and MySQL.
            </p>
            <div className="hero__actions">
              <a className="button button--blue" href="#work">Inspect the live work <ArrowDownRight size={17} /></a>
              <a className="text-link" href="#about">More about me <ArrowDownRight size={16} /></a>
            </div>
          </div>

          <div className="hero__artifact hero__artifact--portrait">
            <div className="artifact__label">Field image / 01</div>
            <img
              src="/images/moses-portrait.JPG"
              alt="Moses Goddey Joseph in formal attire at a Computer Science faculty event"
            />
            <div className="artifact__stamp" aria-hidden="true"><strong>MGJ</strong><span>Identity record</span></div>
            <div className="artifact__caption">
              <span>Location / Jos, Nigeria</span>
              <strong>Status / Full-stack developer</strong>
            </div>
          </div>

            <div className="hero__evidence" aria-label="Professional summary">
            <div><strong>02+</strong><span>Years building</span></div>
            <div><strong>05</strong><span>Selected projects</span></div>
            <div><strong>2026</strong><span>B.Sc. completed</span></div>
          </div>
        </section>

        <section className="stack-section" id="stack" aria-labelledby="stack-title">
          <div data-reveal className="section-shell stack-section__inner">
            <div className="stack-section__intro">
              <div className="eyebrow">01 / Technology stack</div>
              <h2 id="stack-title">The tools I use<br />to get the job <em>done.</em></h2>
              <p>I use a focused web-development stack for building interfaces, application logic, and maintainable project workflows.</p>
            </div>
            <div className="stack-grid" aria-label="Technology skills">
              {technologyStack.map(({ name, role, Icon, tone }) => (
                <article data-reveal className={`stack-card stack-card--${tone}`} key={name}>
                  <Icon aria-hidden="true" className="stack-card__icon" />
                  <div><h3>{name}</h3><p>{role}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="work section-shell" id="work" aria-labelledby="work-title">
          <div data-reveal className="section-heading section-heading--wide">
            <div className="eyebrow">02 / Selected work</div>
            <div>
              <h2 id="work-title">Built for real <em>workflows.</em></h2>
              <p>Four live builds, documented with interface evidence and deployment records. The supporting record below remains clearly labelled by availability.</p>
            </div>
          </div>

          <div className="project-grid">
            {primaryProjects.map((project) => <ProjectCard project={project} featured onOpenCaseStudy={() => setActiveCaseStudy(project)} key={project.number} />)}
          </div>
          <div className="supporting-records">
            <div data-reveal className="supporting-records__heading">
              <div className="eyebrow">02.1 / Additional projects</div>
              <p>More work from education and community projects. The Student Management System is no longer hosted; Warri Wolves is available to view live.</p>
            </div>
            <div className="supporting-records__grid">
              {supportingProjects.map((project) => <ProjectCard project={project} featured supporting onOpenCaseStudy={() => setActiveCaseStudy(project)} key={project.number} />)}
            </div>
          </div>
        </section>

        <section data-reveal className="about section-shell" id="about" aria-labelledby="about-title">
          <div className="about__statement">
            <div className="eyebrow">03 / About</div>
            <h2 id="about-title">I like software that makes the next step <em>clearer.</em></h2>
            <p>
              I enjoy solving the practical point where people get stuck: ordering a meal, discovering art, registering for a course, or finding the right mentor. I use the full web stack to turn those next steps into clearer, usable workflows.
            </p>
            <p>
              I am a full-stack web developer who cares about useful details from the interface through to the workflow behind it. I hold a B.Sc. in Computer Science from Prince Abubakar Audu University, Anyigba, completed in July 2026, and I am open to graduate and full-time roles where I can contribute with purpose and keep building products that earn their place.
            </p>
          </div>
          <aside className="field-notes" aria-label="Personal details">
            <div data-reveal className="field-notes__heading"><span>MGJ</span> Field notes</div>
            <div data-reveal className="field-note"><MapPin size={19} /><div><span>Based in</span><strong>Jos, Plateau State<br />Nigeria</strong></div></div>
            <div data-reveal className="field-note"><Code2 size={19} /><div><span>Core focus</span><strong>Full-stack web apps<br />Laravel + JavaScript</strong></div></div>
            <div data-reveal className="field-note"><GraduationCap size={19} /><div><span>Education</span><strong>B.Sc. Computer Science<br />Prince Abubakar Audu University, Anyigba<br />Completed July 2026</strong></div></div>
            <div data-reveal className="field-note"><BriefcaseBusiness size={19} /><div><span>Open to</span><strong>Graduate &amp;<br />full-time roles</strong></div></div>
          </aside>
        </section>

        <section className="experience-band" id="experience" aria-labelledby="experience-title">
          <div data-reveal className="section-shell experience-band__inner">
            <div className="section-heading">
              <div className="eyebrow">04 / Experience</div>
              <h2 id="experience-title">Experience with real product <em>work.</em></h2>
            </div>
            <div className="timeline">
              <article data-reveal className="timeline__entry">
                <div className="timeline__date">6 MONTHS<br /><span>Internship</span></div>
                <div className="timeline__line"><span /></div>
                <div className="timeline__body">
                  <div className="timeline__role">Full-Stack Developer Intern</div>
                  <h3>Axia Hub Innovation &amp; Technology</h3>
                  <p>Built a Student Management System for a team-assigned internship project using Laravel, PHP, JavaScript, and MySQL. The 13-page, 14-table application covered course registration, staff and course assignment, CGPA computation, results, user management, authenticated admin and student access, and password reset. It was deployed to Render with MySQL hosted on Railway.</p>
                  <div className="timeline__chips"><span>Laravel</span><span>PHP</span><span>JavaScript</span><span>MySQL</span><span>Render</span><span>Railway</span></div>
                </div>
              </article>
              <article data-reveal className="timeline__entry">
                <div className="timeline__date">2+ YEARS<br /><span>Independent work</span></div>
                <div className="timeline__line"><span /></div>
                <div className="timeline__body">
                  <div className="timeline__role">Full-stack Developer</div>
                  <h3>Personal &amp; Client-Focused Projects</h3>
                  <p>Built and iterated on web solutions across food ordering, creative commerce, education operations, community presence, and mentorship, with a focus on complete user journeys.</p>
                  <div className="timeline__chips"><span>Product thinking</span><span>Frontend</span><span>Backend</span><span>Deployment</span></div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section data-reveal className="faq section-shell" id="faq" aria-labelledby="faq-title">
          <div className="faq__intro">
            <div className="eyebrow">05 / FAQ</div>
            <h2 id="faq-title">A few things you might want to <em>know.</em></h2>
            <p>Project availability, tools, and working context before you reach out. The contact record is below for anything else.</p>
          </div>
          <Accordion type="single" collapsible className="faq__accordion">
            {faqs.map((faq, index) => (
              <AccordionItem data-reveal value={`question-${index + 1}`} key={faq.question}>
                <AccordionTrigger className="faq__trigger">
                  <span><small>0{index + 1}</small>{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="faq__content"><p>{faq.answer}</p></AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="contact__grain" aria-hidden="true" />
          <div className="contact__stamp" aria-hidden="true"><strong>MGJ</strong></div>
          <div data-reveal className="section-shell contact__inner">
            <div className="eyebrow eyebrow--light"><span className="live-dot" /> 06 / Let&apos;s work together</div>
            <h2 id="contact-title">Have a role, an idea,<br />or a useful problem?</h2>
            <p>Four live products are linked above, from restaurant ordering and art commerce to peer mentorship and a football-club interface. If that work matches a role, project, or useful problem you need solved, let&apos;s talk.</p>
            <form data-reveal className="contact-form" onSubmit={handleContactSubmit} aria-label="Send Moses a message" aria-busy={contactState === "sending"}>
              <input type="hidden" name="_subject" value="Portfolio enquiry for Moses Goddey Joseph" />
              <div className="contact-form__honeypot" aria-hidden="true">
                <label htmlFor="contact-company">Company</label>
                <input id="contact-company" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
              </div>
              <div className="contact-form__field">
                <label htmlFor="contact-name">Your name</label>
                <input id="contact-name" name="name" type="text" autoComplete="name" required placeholder="Name or company" />
              </div>
              <div className="contact-form__field">
                <label htmlFor="contact-email">Your email</label>
                <input id="contact-email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
              </div>
              <div className="contact-form__field contact-form__field--wide">
                <label htmlFor="contact-message">What would you like to work on?</label>
                <textarea id="contact-message" name="message" required rows={5} placeholder="Tell me the role, product, or problem you have in mind." />
              </div>
              <div className="contact-form__footer">
                <p className="contact-form__note">Clear context helps.</p>
                <button className="contact-form__submit" type="submit" disabled={contactState === "sending"}>
                  {contactState === "sending" ? "Sending…" : "Send message"} <ArrowUpRight size={17} />
                </button>
              </div>
              <p className={`contact-form__status contact-form__status--${contactState}`} role="status" aria-live="polite">
                {contactState === "success" && "Sent. I’ll get back to you soon."}
                {contactState === "error" && "Couldn’t send that. Try again or email me directly."}
              </p>
            </form>
            <div className="contact__actions">
              <a data-reveal href="mailto:mosesgoddey521@gmail.com" className="contact-link">Email directly <ArrowUpRight size={23} /></a>
              <a data-reveal href="https://www.linkedin.com/in/moses-goddey-855490358/" target="_blank" rel="noreferrer" className="contact-link">LinkedIn <ArrowUpRight size={23} /></a>
              <a data-reveal href="https://github.com/MosesGoddey" target="_blank" rel="noreferrer" className="contact-link">GitHub <ArrowUpRight size={23} /></a>
              <a data-reveal href="https://x.com/GoddeyJ7" target="_blank" rel="noreferrer" className="contact-link">X / Twitter <ArrowUpRight size={23} /></a>
            </div>
            <div className="contact__availability">MGJ / PROJECT RECORD · <strong>Open to opportunities</strong></div>
          </div>
        </section>
      </main>

      <ProjectCaseStudy project={activeCaseStudy} open={Boolean(activeCaseStudy)} onOpenChange={(open) => !open && setActiveCaseStudy(null)} darkMode={darkMode} />

      <footer className="site-footer section-shell">
        <span>© 2026 Moses Goddey Joseph</span>
        <span>Built as a product record</span>
        <a href="#top">Back to top <ArrowUpRight size={14} /></a>
      </footer>
    </div>
  );
}
