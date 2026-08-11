import Head from "next/head";
import { useEffect, useState } from "react";

const skills = [
  {
    title: "Backend Engineering",
    copy: "Production Java services with explicit boundaries, predictable failure handling, clean APIs, and maintainable domain design.",
    tags: ["Java 21", "Spring Boot", "REST", "Microservices", "Maven"],
  },
  {
    title: "Data & Persistence",
    copy: "Relational and distributed data access with attention to transaction semantics, locking, query behavior, and operational correctness.",
    tags: ["PostgreSQL", "Oracle", "JPA/Hibernate", "Redis", "MongoDB"],
  },
  {
    title: "Security & Identity",
    copy: "Authentication and authorization flows for financial systems, including token lifecycles, device trust, and identity/KYC boundaries.",
    tags: ["OAuth2", "OIDC", "Keycloak", "JWT", "Spring Security"],
  },
  {
    title: "Distributed Systems",
    copy: "Concurrency, idempotency, retries, external side effects, consistency trade-offs, observability, and production failure modes.",
    tags: ["Concurrency", "Kafka", "Idempotency", "Docker", "Prometheus"],
  },
];

const experience = [
  {
    company: "Bajet — Neobank",
    role: "Backend Engineer",
    copy: "Worked on banking and identity services across payments, authentication, account flows, KYC, transaction boundaries, concurrency, and production reliability using modern Java/Spring.",
    tags: ["Java 21", "Spring Boot", "OAuth2", "Keycloak", "Redis", "PostgreSQL"],
  },
  {
    company: "Novin Kish ISC",
    role: "Java Backend Engineer",
    copy: "Built and maintained financial backend services and integrations for banking/payment systems, with a focus on secure transaction processing, reliability, and performance.",
    tags: ["Java", "Spring", "PostgreSQL", "Redis", "Banking", "Payments"],
  },
  {
    company: "Dadeh Pardazi Iran",
    role: "Backend Engineer",
    copy: "Contributed to banking web systems and data-migration work for Tejarat Bank, including enterprise integrations and high-volume financial data workflows.",
    tags: ["Java", "Spring", "Oracle", "Enterprise Integration", "Banking"],
  },
];

const projects = [
  {
    name: "AntiVibe Spring",
    type: "Open Source · AI / Developer Tooling",
    copy: "A Cursor Agent Skill for evidence-first architectural auditing of Java/Spring backends, focused on transactions, JPA/Hibernate, concurrency, security, distributed consistency, and failure scenarios.",
    tags: ["Java/Spring", "Cursor", "Architecture", "Code Review"],
    href: "https://github.com/HoomanDevp/antivibe-spring",
  },
  {
    name: "Concurrent Balance Service",
    type: "Backend · Concurrency",
    copy: "A balance service that demonstrates atomic transfers, PostgreSQL row locking, idempotency, deterministic lock ordering, and correctness under concurrent load.",
    tags: ["Java 21", "Spring Boot", "PostgreSQL", "Testcontainers"],
    href: "https://github.com/HoomanDevp/concurrent-balance-service",
  },
  {
    name: "Omnia",
    type: "Java · Infrastructure Toolkit",
    copy: "A modular Java backend toolkit with reusable modules for messaging, persistence, caching, observability, cryptography, storage, MVC/reactive support, and common infrastructure integrations.",
    tags: ["Java 21", "Spring Boot", "Maven", "Infrastructure"],
    href: "https://github.com/HoomanDevp/omnia",
  },
  {
    name: "Reservation System",
    type: "Backend · High Concurrency",
    copy: "A Spring Boot reservation backend with Redis-backed asynchronous processing, optimistic locking, retries, rate limiting, JWT security, and operational metrics.",
    tags: ["Spring Boot", "Redis", "PostgreSQL", "Prometheus"],
    href: "https://github.com/HoomanDevp/reservation",
  },
];

const selectedWork = [
  {
    title: "Banking & payment rails",
    copy: "Backend work around account operations and transfer flows including PAYA/ACH, RTGS/SATNA, card-related services, limits, fees, and external banking integrations.",
  },
  {
    title: "Authentication & digital identity",
    copy: "OAuth2/OIDC, JWT, Keycloak, activation and device-trust flows, credential lifecycle, KYC integrations, and security-sensitive API boundaries.",
  },
  {
    title: "Transactions & concurrency",
    copy: "Transaction demarcation, optimistic/pessimistic locking, idempotency, failure recovery, external I/O boundaries, and multi-instance consistency.",
  },
  {
    title: "Production engineering",
    copy: "Performance and reliability work using Redis, Docker, Kafka, observability tooling, integration tests, and evidence-driven architectural review.",
  },
];

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-theme");
    const nextTheme = stored === "light" ? "light" : "dark";
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
    ],
  };

  return (
    <>
      <Head>
        <title>Hooman Yarahmadi — Senior Java Backend Engineer</title>
        <meta
          name="description"
          content="Hooman Yarahmadi — Senior Java Backend Engineer focused on Spring Boot, banking and fintech systems, distributed consistency, concurrency, security, and production reliability."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#07111f" />
        <meta property="og:title" content="Hooman Yarahmadi — Senior Java Backend Engineer" />
        <meta
          property="og:description"
          content="Java/Spring backend engineering for banking, fintech, distributed systems, concurrency, security, and production reliability."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hoomandevp.github.io/personal-website/" />
        <meta name="twitter:card" content="summary" />
        <link rel="canonical" href="https://hoomandevp.github.io/personal-website/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="site-shell">
        <header className="nav no-print">
          <div className="nav-inner">
            <a className="brand" href="#top" aria-label="Back to top">
              <span className="brand-mark">HY</span>
              <span>Hooman Yarahmadi</span>
            </a>

            <nav className="nav-links" aria-label="Primary navigation">
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
              <button className="icon-button" type="button" onClick={toggleTheme}>
                {theme === "dark" ? "Light" : "Dark"}
              </button>
            </nav>
          </div>
        </header>

        <main id="top">
          <section className="hero">
            <div className="container hero-grid">
              <div>
                <span className="status-pill">
                  <span className="status-dot" /> Open to new backend opportunities
                </span>
                <h1>
                  Hooman
                  <span>Yarahmadi.</span>
                </h1>
                <p className="hero-role">Senior Java Backend Engineer</p>
                <p className="hero-copy">
                  I build reliable backend systems for banking and fintech, with a focus on Java/Spring,
                  distributed consistency, transaction semantics, security, concurrency, and the failure modes
                  that matter in production.
                </p>

                <div className="cta-row no-print">
                  <a className="button button-primary" href="#projects">
                    View selected projects <span aria-hidden="true">→</span>
                  </a>
                  <a
                    className="button button-secondary"
                    href="https://www.linkedin.com/in/hooman-yarahmadi/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                  <button className="button button-secondary" type="button" onClick={() => window.print()}>
                    Print / Save as PDF
                  </button>
                </div>
              </div>

              <aside className="hero-side" aria-label="Professional highlights">
                <div className="hero-card">
                  <span className="eyebrow">Focus</span>
                  <strong>Banking & Fintech</strong>
                  <span>Financial workflows, identity, payments, reliability, and backend architecture.</span>
                </div>
                <div className="stats">
                  <div className="hero-card">
                    <strong>5+ yrs</strong>
                    <span>Backend engineering experience</span>
                  </div>
                  <div className="hero-card">
                    <strong>Java 21</strong>
                    <span>Modern Spring backend stack</span>
                  </div>
                </div>
              </aside>
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
                {skills.map((skill) => (
                  <article className="card" key={skill.title}>
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

          <section className="section" id="experience">
            <div className="container">
              <div className="section-heading">
                <div>
                  <p className="kicker">Experience</p>
                  <h2>Selected professional experience.</h2>
                </div>
                <p className="section-lead">
                  A career centered on backend engineering for banking, payment platforms, financial services,
                  enterprise integration, and reliability-sensitive systems.
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

          <section className="section" id="projects">
            <div className="container">
              <div className="section-heading">
                <div>
                  <p className="kicker">Open source & projects</p>
                  <h2>Systems I use to show how I think.</h2>
                </div>
                <p className="section-lead">
                  These projects focus on architectural reasoning, concurrency, infrastructure reuse, and backend
                  correctness—not just framework demos.
                </p>
              </div>

              <div className="project-grid">
                {projects.map((project, index) => (
                  <article className="card project-card" key={project.name}>
                    <div className="project-topline">
                      <span>{project.type}</span>
                      <span>0{index + 1}</span>
                    </div>
                    <h3>{project.name}</h3>
                    <p>{project.copy}</p>
                    <div className="chips">
                      {project.tags.map((tag) => (
                        <span className="chip" key={tag}>{tag}</span>
                      ))}
                    </div>
                    <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
                      View on GitHub →
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
                  High-level areas from production banking and fintech work. Implementation details remain
                  intentionally non-confidential.
                </p>
              </div>

              <div className="work-grid">
                {selectedWork.map((item) => (
                  <article className="card" key={item.title}>
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
                  <h2>Building a serious backend or financial platform?</h2>
                  <p className="section-lead" style={{ marginTop: 16 }}>
                    I am interested in backend roles and engineering problems around Java/Spring, banking,
                    fintech, distributed systems, security, and production reliability.
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
                    <span>LinkedIn</span><strong>hooman-yarahmadi</strong>
                  </a>
                  <a
                    className="contact-link"
                    href="https://github.com/HoomanDevp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>GitHub</span><strong>@HoomanDevp</strong>
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
