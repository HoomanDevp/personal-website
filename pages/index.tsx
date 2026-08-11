import Head from "next/head";
import { useEffect, useState } from "react";

const coreStack = [
  "Java 21",
  "Spring Boot",
  "Spring Security",
  "JPA / Hibernate",
  "PostgreSQL",
  "Oracle",
  "Redis",
  "Kafka",
  "OAuth2 / OIDC",
  "Keycloak",
  "Docker",
  "Testcontainers",
];

const expertise = [
  {
    index: "01",
    title: "Backend Architecture",
    copy: "Production Java services with explicit boundaries, understandable domain models, resilient integrations, and APIs that stay maintainable as the system grows.",
    tags: ["Java 21", "Spring Boot", "REST", "Microservices", "Maven"],
  },
  {
    index: "02",
    title: "Transactions & Persistence",
    copy: "Transaction demarcation, JPA/Hibernate behavior, locking, query semantics, database invariants, and consistency under concurrent writes.",
    tags: ["PostgreSQL", "Oracle", "JPA/Hibernate", "Redis", "Locking"],
  },
  {
    index: "03",
    title: "Security & Identity",
    copy: "Authentication and authorization flows for financial systems, including token lifecycles, device trust, activation, KYC, and security-sensitive boundaries.",
    tags: ["OAuth2", "OIDC", "Keycloak", "JWT", "Spring Security"],
  },
  {
    index: "04",
    title: "Distributed Correctness",
    copy: "Concurrency, idempotency, retries, partial failure, external side effects, observability, and the trade-offs behind reliable multi-instance systems.",
    tags: ["Concurrency", "Kafka", "Idempotency", "Docker", "Prometheus"],
  },
];

const experience = [
  {
    company: "Bajet — Neobank",
    role: "Backend Engineer",
    copy: "Worked across authentication, digital identity, account and payment services, with particular attention to transaction boundaries, concurrency, external integrations, and production reliability.",
    highlights: [
      "Java 21 / Spring backend services",
      "OAuth2, Keycloak, activation and KYC flows",
      "Payments, accounts and financial integrations",
    ],
    tags: ["Java 21", "Spring Boot", "OAuth2", "Keycloak", "Redis", "PostgreSQL"],
  },
  {
    company: "Novin Kish Service Co.",
    role: "Java Backend Engineer",
    copy: "Built and maintained backend services and integrations in the banking and payment domain, where secure transaction processing and predictable operational behavior were core requirements.",
    highlights: [
      "Financial service integrations",
      "Backend reliability and performance",
      "Banking-oriented API development",
    ],
    tags: ["Java", "Spring", "PostgreSQL", "Redis", "Banking", "Payments"],
  },
  {
    company: "Dadeh Pardazi Iran",
    role: "Backend Engineer",
    copy: "Contributed to enterprise banking systems and data-intensive integration work, including services supporting Tejarat Bank environments and financial workflows.",
    highlights: [
      "Enterprise integration",
      "Oracle-backed financial systems",
      "Banking data and backend services",
    ],
    tags: ["Java", "Spring", "Oracle", "Enterprise Integration", "Banking"],
  },
];

const projects = [
  {
    name: "AntiVibe Spring",
    type: "Open Source · AI Developer Tooling",
    featured: true,
    copy: "A Cursor Agent Skill for evidence-first architectural auditing of Java/Spring backends. It turns code review into production-oriented reasoning about transactions, JPA/Hibernate, concurrency, security, distributed consistency, and failure scenarios.",
    demonstrates: "Architecture review · evidence-first reasoning · AI-assisted engineering",
    tags: ["Java/Spring", "Cursor", "Architecture", "Code Review"],
    href: "https://github.com/HoomanDevp/antivibe-spring",
  },
  {
    name: "Concurrent Balance Service",
    type: "Backend · Concurrency",
    featured: false,
    copy: "A balance service designed around correctness under contention: atomic transfers, PostgreSQL row locking, idempotency, deterministic lock ordering, rollback semantics, and real database concurrency tests.",
    demonstrates: "Transactions · locking · idempotency · Testcontainers",
    tags: ["Java 21", "Spring Boot", "PostgreSQL", "Testcontainers"],
    href: "https://github.com/HoomanDevp/concurrent-balance-service",
  },
  {
    name: "Omnia",
    type: "Java · Infrastructure Toolkit",
    featured: false,
    copy: "A modular Java backend toolkit with reusable building blocks for messaging, persistence, caching, observability, cryptography, storage, MVC/reactive support, and infrastructure integrations.",
    demonstrates: "Reusable infrastructure · modular design · Spring ecosystem",
    tags: ["Java 21", "Spring Boot", "Maven", "Infrastructure"],
    href: "https://github.com/HoomanDevp/omnia",
  },
  {
    name: "Reservation System",
    type: "Backend · High Concurrency",
    featured: false,
    copy: "A Spring Boot reservation backend with Redis-backed asynchronous processing, optimistic locking, retries, rate limiting, JWT security, persistence, and operational metrics.",
    demonstrates: "Queues · optimistic locking · retries · observability",
    tags: ["Spring Boot", "Redis", "PostgreSQL", "Prometheus"],
    href: "https://github.com/HoomanDevp/reservation",
  },
];

const principles = [
  {
    title: "Correctness before cleverness",
    copy: "For money, identity, and state transitions, the design should make invariants and failure behavior obvious before it optimizes for elegance.",
  },
  {
    title: "Boundaries should be explicit",
    copy: "Database transactions, remote calls, retries, locks, and side effects deserve visible boundaries because that is where production failures concentrate.",
  },
  {
    title: "Evidence over assumptions",
    copy: "I prefer concrete code paths, query behavior, tests, metrics, and reproducible failure scenarios over generic architectural claims.",
  },
];

const selectedWork = [
  {
    label: "Payments",
    title: "Banking & transfer flows",
    copy: "Account operations and transfer workflows including PAYA/ACH, RTGS/SATNA, card-related services, limits, fees, and external banking integrations.",
  },
  {
    label: "Identity",
    title: "Authentication & digital identity",
    copy: "OAuth2/OIDC, JWT, Keycloak, activation and device-trust flows, credential lifecycle, KYC integrations, and security-sensitive APIs.",
  },
  {
    label: "Consistency",
    title: "Transactions & concurrency",
    copy: "Transaction demarcation, optimistic/pessimistic locking, idempotency, failure recovery, external-I/O boundaries, and multi-instance consistency.",
  },
  {
    label: "Operations",
    title: "Production engineering",
    copy: "Performance and reliability work using Redis, Docker, Kafka, observability tooling, integration tests, and evidence-driven architectural review.",
  },
];

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-theme");
    const preferredLight = window.matchMedia?.("(prefers-color-scheme: light)").matches;
    const nextTheme = stored === "light" || (!stored && preferredLight) ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hooman Yarahmadi",
    jobTitle: "Senior Java Backend Engineer",
    url: "https://hoomandevp.github.io/personal-website/",
    email: "mailto:knight.hooman@gmail.com",
    sameAs: [
      "https://github.com/HoomanDevp",
      "https://www.linkedin.com/in/hooman-yarahmadi/",
    ],
    knowsAbout: [
      "Java",
      "Spring Boot",
      "Banking Systems",
      "Fintech",
      "Distributed Systems",
      "Concurrency",
      "OAuth2",
      "JPA",
      "PostgreSQL",
    ],
  };

  return (
    <>
      <Head>
        <title>Hooman Yarahmadi — Senior Java Backend Engineer</title>
        <meta
          name="description"
          content="Senior Java Backend Engineer focused on Spring Boot, banking and fintech systems, transactions, concurrency, distributed consistency, security, and production reliability."
        />
        <meta
          name="keywords"
          content="Hooman Yarahmadi, Java backend engineer, Spring Boot, fintech, banking, distributed systems, concurrency, JPA, Hibernate, OAuth2, Keycloak"
        />
        <meta name="author" content="Hooman Yarahmadi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#07111f" />
        <meta property="og:title" content="Hooman Yarahmadi — Senior Java Backend Engineer" />
        <meta
          property="og:description"
          content="Java/Spring backend engineering for banking, fintech, distributed systems, transaction correctness, concurrency, and security."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hoomandevp.github.io/personal-website/" />
        <meta name="twitter:card" content="summary" />
        <link rel="canonical" href="https://hoomandevp.github.io/personal-website/" />
        <link rel="icon" href="/personal-website/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <a className="skip-link" href="#content">Skip to content</a>

      <div className="site-shell">
        <header className="nav no-print">
          <div className="nav-inner">
            <a className="brand" href="#top" aria-label="Back to top">
              <span className="brand-mark">HY</span>
              <span className="brand-copy">
                <strong>Hooman Yarahmadi</strong>
                <small>Java Backend Engineer</small>
              </span>
            </a>

            <nav className="nav-links" aria-label="Primary navigation">
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
              <button
                className="icon-button"
                type="button"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? "☀ Light" : "● Dark"}
              </button>
            </nav>
          </div>
        </header>

        <main id="content">
          <section className="hero" id="top">
            <div className="container hero-grid">
              <div className="hero-main">
                <span className="status-pill">
                  <span className="status-dot" /> Open to Senior Java / Backend opportunities
                </span>

                <p className="hero-overline">JAVA / SPRING · BANKING / FINTECH · DISTRIBUTED SYSTEMS</p>
                <h1>
                  Hooman
                  <span>Yarahmadi.</span>
                </h1>
                <p className="hero-role">Senior Java Backend Engineer</p>
                <p className="hero-copy hero-copy-strong">
                  I build backend systems that stay understandable and correct when real-world complexity arrives:
                  concurrency, retries, partial failure, financial constraints, security boundaries, and external integrations.
                </p>

                <div className="hero-meta" aria-label="Professional focus areas">
                  <span>Transaction correctness</span>
                  <span>Identity & security</span>
                  <span>Financial integrations</span>
                  <span>Production reliability</span>
                </div>

                <div className="cta-row no-print">
                  <a className="button button-primary" href="#projects">
                    Explore engineering work <span aria-hidden="true">→</span>
                  </a>
                  <a
                    className="button button-secondary"
                    href="https://github.com/HoomanDevp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>
                  <a
                    className="button button-secondary"
                    href="https://www.linkedin.com/in/hooman-yarahmadi/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn ↗
                  </a>
                  <button className="button button-ghost" type="button" onClick={() => window.print()}>
                    Save résumé as PDF
                  </button>
                </div>
              </div>

              <aside className="hero-side" aria-label="Engineering profile">
                <div className="profile-card">
                  <div className="profile-card-head">
                    <span className="eyebrow">Engineering profile</span>
                    <span className="terminal-dots" aria-hidden="true"><i /><i /><i /></span>
                  </div>
                  <p className="profile-lead">What I optimize for</p>
                  <div className="profile-list">
                    <div><span>01</span><strong>Correct state transitions</strong></div>
                    <div><span>02</span><strong>Explicit failure behavior</strong></div>
                    <div><span>03</span><strong>Safe concurrency</strong></div>
                    <div><span>04</span><strong>Operational clarity</strong></div>
                  </div>
                  <div className="profile-footer">
                    <span className="status-dot" /> Banking & Fintech backend
                  </div>
                </div>
              </aside>
            </div>

            <div className="container stack-strip" aria-label="Core technology stack">
              <span className="stack-label">CORE STACK</span>
              <div className="stack-items">
                {coreStack.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          </section>

          <section className="section" id="about">
            <div className="container">
              <div className="section-heading">
                <div>
                  <p className="kicker">About</p>
                  <h2>Backend engineering with production consequences in mind.</h2>
                </div>
                <p className="section-lead">
                  My work sits where business-critical financial flows meet distributed systems. I care about
                  explicit transaction boundaries, correct persistence behavior, secure identity flows, resilient
                  integrations, observable systems, and designs that remain understandable when concurrency and
                  partial failure show up.
                </p>
              </div>

              <div className="skill-grid">
                {expertise.map((skill) => (
                  <article className="card expertise-card" key={skill.title}>
                    <div className="card-index">{skill.index}</div>
                    <h3>{skill.title}</h3>
                    <p>{skill.copy}</p>
                    <div className="chips">
                      {skill.tags.map((tag) => (
                        <span className="chip" key={tag}>{tag}</span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section principles-section">
            <div className="container">
              <div className="section-heading compact-heading">
                <div>
                  <p className="kicker">How I engineer</p>
                  <h2>Three principles behind the implementation.</h2>
                </div>
                <p className="section-lead">
                  Framework knowledge matters. The harder part is making the behavior defensible when the system is under load or partially failing.
                </p>
              </div>

              <div className="principles-grid">
                {principles.map((principle, index) => (
                  <article className="principle" key={principle.title}>
                    <span>0{index + 1}</span>
                    <h3>{principle.title}</h3>
                    <p>{principle.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section" id="experience">
            <div className="container">
              <div className="section-heading">
                <div>
                  <p className="kicker">Experience</p>
                  <h2>Selected professional experience.</h2>
                </div>
                <p className="section-lead">
                  Backend engineering across banking, payment platforms, identity, financial services, enterprise integration, and reliability-sensitive systems.
                </p>
              </div>

              <div className="timeline">
                {experience.map((item) => (
                  <div className="timeline-item" key={item.company}>
                    <span className="timeline-dot" aria-hidden="true" />
                    <article className="timeline-content">
                      <div className="timeline-meta">
                        <strong>{item.company}</strong>
                        <span>{item.role}</span>
                      </div>
                      <p>{item.copy}</p>
                      <ul className="highlight-list">
                        {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                      </ul>
                      <div className="chips">
                        {item.tags.map((tag) => (
                          <span className="chip" key={tag}>{tag}</span>
                        ))}
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section projects-section" id="projects">
            <div className="container">
              <div className="section-heading">
                <div>
                  <p className="kicker">Open source & projects</p>
                  <h2>Projects that expose the engineering decisions.</h2>
                </div>
                <p className="section-lead">
                  The goal is not to collect framework demos. These repositories highlight architectural reasoning, concurrency, infrastructure reuse, and backend correctness.
                </p>
              </div>

              <div className="project-grid">
                {projects.map((project, index) => (
                  <article
                    className={`card project-card ${project.featured ? "project-featured" : ""}`}
                    key={project.name}
                  >
                    <div className="project-topline">
                      <span>{project.type}</span>
                      <span>{project.featured ? "FEATURED" : `0${index + 1}`}</span>
                    </div>
                    <h3>{project.name}</h3>
                    <p>{project.copy}</p>
                    <div className="project-proof">
                      <span>Demonstrates</span>
                      <strong>{project.demonstrates}</strong>
                    </div>
                    <div className="chips">
                      {project.tags.map((tag) => (
                        <span className="chip" key={tag}>{tag}</span>
                      ))}
                    </div>
                    <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
                      Explore repository <span aria-hidden="true">↗</span>
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container">
              <div className="section-heading">
                <div>
                  <p className="kicker">Selected engineering work</p>
                  <h2>Where I spend most of my technical attention.</h2>
                </div>
                <p className="section-lead">
                  High-level areas from production banking and fintech work. Implementation details remain intentionally non-confidential.
                </p>
              </div>

              <div className="work-grid">
                {selectedWork.map((item) => (
                  <article className="card work-card" key={item.title}>
                    <span className="work-label">{item.label}</span>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section" id="contact">
            <div className="container">
              <div className="contact-box">
                <div>
                  <p className="kicker">Contact</p>
                  <h2>Need a backend engineer who cares about what happens after the happy path?</h2>
                  <p className="section-lead contact-copy">
                    I am interested in Senior Java / Backend roles and engineering problems around banking,
                    fintech, distributed systems, transaction correctness, security, and production reliability.
                  </p>
                </div>
                <div className="contact-actions">
                  <a className="contact-link" href="mailto:knight.hooman@gmail.com">
                    <span>Email</span><strong>knight.hooman@gmail.com</strong>
                  </a>
                  <a
                    className="contact-link"
                    href="https://www.linkedin.com/in/hooman-yarahmadi/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>LinkedIn</span><strong>hooman-yarahmadi ↗</strong>
                  </a>
                  <a
                    className="contact-link"
                    href="https://github.com/HoomanDevp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>GitHub</span><strong>@HoomanDevp ↗</strong>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="container footer-inner">
            <span>© {new Date().getFullYear()} Hooman Yarahmadi</span>
            <span>Java · Spring Boot · Banking · Fintech · Distributed Systems</span>
          </div>
        </footer>
      </div>
    </>
  );
}
