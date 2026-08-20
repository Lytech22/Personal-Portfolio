import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";

const currentProjects = [
  { number: "01", title: "Smart Apartment Parking System" },
  { number: "02", title: "Modern Gym OS" },
  { number: "03", title: "Personal Portfolio" },
];

const featuredProjects = [
  {
    number: "01",
    title: "Smart Apartment Parking System",
    label: "Personal",
    type: "Personal full-stack project",
    status: "Active development",
    description: "Apartment parking management system covering residents, vehicles, parking zones, availability, reservations, and role-based administration.",
    stack: ["Laravel", "React", "TypeScript", "PostgreSQL"],
    highlight: "Designed around real apartment parking workflows rather than a simple booking demo.",
    repository: "In development",
  },
  {
    number: "02",
    title: "Modern Gym OS",
    label: "Personal",
    type: "Personal full-stack project",
    status: "Active development",
    description: "Gym operations platform covering memberships, staff access, attendance, subscriptions, member records, and operational reporting.",
    stack: ["Laravel", "React", "TypeScript"],
    repository: "In development",
  },
  {
    number: "03",
    title: "Mesob Performance Hub",
    label: "Internship project",
    type: "Internship / internal system project",
    status: "Active development",
    description: "Performance management platform designed for call-center operations, bringing together KPI tracking, quality evaluation, coaching, training, assessments, progress monitoring, and performance reporting.",
    stack: ["PostgreSQL"],
    highlight: "Admin, Team Leader, and Agent roles support KPI monitoring, QA evaluation, coaching, training, exams, certificates, notifications, and achievement concepts. Developed as part of internship/project work.",
    repository: "Private repository",
  },
  {
    number: "04",
    title: "Mesob AI Customer Support Assistant",
    label: "AI",
    type: "AI / internship concept",
    status: "In development / planning",
    description: "AI-assisted customer support concept designed around an organization-specific knowledge base, with escalation to human agents when a request requires direct support.",
    stack: [],
    highlight: "The concept focuses on controlled answers from approved information, conversational support, human-agent escalation, and possible future integration with an existing support workflow.",
    repository: "Private / internal project",
  },
];

const collaborationProjects = [
  {
    number: "05",
    title: "Digital Event Invitation Platform",
    label: "Collaboration",
    status: "In development",
    description: "Digital invitation platform designed around personalized event experiences, reusable invitation templates, guest-specific information, bilingual content, RSVP workflows, countdowns, and event programmes.",
  },
  {
    number: "06",
    title: "Fitness Meal Planning Platform",
    label: "Client concept",
    status: "Concept / development",
    description: "Web platform concept for a fitness-focused meal preparation business, designed around structured meal plans, recurring subscriptions, nutrition-oriented presentation, and customer discovery.",
  },
  {
    number: "07",
    title: "Expense Tracker",
    label: "Collaboration",
    status: "In development",
    description: "A collaborative expense-tracking application focused on recording spending, organizing transactions, and presenting personal financial activity clearly.",
  },
];

const labRows = ["Private systems", "Experiments", "Coursework", "Early product concepts", "Collaborative builds"];

const experiences = [
  ["2026 — Present", "Software Development / Current Projects", "Full-stack developer", "Building full-stack web applications while strengthening software architecture, database design, testing, and deployment skills."],
  ["2025", "DMV-IT Support", "Virtual Assistant", "Researched job opportunities, tracked applications, improved CVs for ATS visibility, and supported clients preparing for interviews."],
  ["2024 — 2025", "Exclusive Calls", "Sales Development Representative", "Worked on lead generation, prospect qualification, and relationship building in a performance-driven environment."],
  ["2023 — 2024", "CCI Global", "Customer Service Representative", "Handled customer questions and concerns through clear communication, active listening, and practical problem solving."],
  ["2023", "MMCY / Vermasoft", "Customer Service Representative", "Worked with changing customer needs and challenging conversations while maintaining calm, clear communication."],
  ["2019 — 2020", "Raul Engineering Plc", "Site Operator", "Supported day-to-day site operations, employee attendance tracking, and basic work coordination."],
] as Array<[string, string, string, string]>;

const skillGroups: Array<[string, string[]]> = [
  ["Frontend", ["React", "Next.js", "TypeScript", "Tailwind CSS"]],
  ["Backend", ["Laravel", "PHP", "REST APIs"]],
  ["Data", ["PostgreSQL", "MySQL"]],
  ["Tools", ["Git", "GitHub", "GitHub Actions", "VS Code", "Vite"]],
  ["Design", ["Photoshop", "Illustrator"]],
];

export function Hero() {
  return <main id="top" className="editorial-main">
    <section className="editorial-hero" aria-labelledby="hero-title">
      <div className="hero-copy"><Reveal><p className="eyebrow">Leul Yitbarek <span>/</span> Full-stack developer</p><h1 id="hero-title">I build practical web systems around <em>real workflows.</em></h1><p className="hero-location">Based in Addis Ababa, Ethiopia.</p><p className="hero-support">Computer Science student working across frontend, backend, databases, and product workflows.</p><div className="hero-actions"><a className="text-link text-link-dark" href="#work">View projects <ArrowUpRight size={15} /></a><a className="text-link" href="https://github.com/Lytech22" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a></div></Reveal></div>
      <Reveal className="currently" delay={0.12}><p className="section-kicker">Currently</p>{currentProjects.map((project) => <a href="#work" className="current-item" key={project.number}><span>{project.number}</span><span>{project.title}</span></a>)}<div className="hero-stack"><p className="section-kicker">Stack</p><p>Laravel / React / TypeScript / PostgreSQL</p></div></Reveal>
    </section>
    <div className="hero-rule" />
    <SelectedWork />
    <About />
    <Experience />
    <Skills />
    <EducationAndLanguages />
    <Contact />
    <footer className="site-footer"><span>© 2026 Leul Yitbarek</span><span>Addis Ababa, Ethiopia</span></footer>
  </main>;
}

function SelectedWork() {
  return (
    <section id="work" className="content-section work-section" aria-labelledby="work-title">
      <SectionHeader id="work-title" index="01" title="Selected work" intro="Personal projects, internship work, and collaborations—presented with clear ownership and publication status." />

      <div className="work-group" aria-labelledby="featured-work-title">
        <div className="work-group-header"><p id="featured-work-title" className="section-kicker">01 / Featured work</p><span>Four systems and concepts</span></div>
        <div className="project-list">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.number} delay={index * 0.04}>
              <article className={`project-row project-${index + 1}`}>
                <div className="project-info">
                  <div className="project-meta"><span>{project.number} / {project.label}</span><span className={project.status === "Active development" ? "status-active" : undefined}>{project.status}</span></div>
                  <h3>{project.title}</h3>
                  <p className="project-type">{project.type}</p>
                  <p>{project.description}</p>
                  {project.highlight && <p className="project-highlight">{project.highlight}</p>}
                  {project.stack.length > 0 && <div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>}
                  <p className="repository-status">{project.repository}</p>
                </div>
                <div className="screenshot-placeholder" aria-label={`${project.title} screenshot placeholder`}><span>{project.title}</span><small>Screenshot placeholder</small></div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="work-group compact-work" aria-labelledby="collaboration-work-title">
        <div className="work-group-header"><p id="collaboration-work-title" className="section-kicker">02 / Collaborations &amp; product work</p><span>Shared builds and early business concepts</span></div>
        <div className="compact-project-list">
          {collaborationProjects.map((project) => (
            <article className="compact-project" key={project.number}>
              <div className="compact-project-heading"><span className="compact-number">{project.number}</span><div><p className="project-label">{project.label}</p><h3>{project.title}</h3></div></div>
              <p>{project.description}</p>
              <span className="compact-status">{project.status}</span>
            </article>
          ))}
        </div>
      </div>

      <div className="work-group lab-work" aria-labelledby="lab-work-title">
        <div className="lab-intro"><p className="section-kicker">03 / Lab &amp; private work</p><h3 id="lab-work-title">More in the lab.</h3><p>Not everything I work on is public. I also use private repositories for experiments, coursework, early product ideas, internal systems, and projects that are not ready to publish.</p></div>
        <div className="lab-list">{labRows.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><span>{item}</span><small>Private</small></div>)}</div>
        <p className="lab-note">More projects will be published as they reach a presentable stage.</p>
      </div>
    </section>
  );
}

function About() {
  return <section id="about" className="content-section about-section" aria-labelledby="about-title"><SectionHeader index="02" title="About" /><div className="editorial-two-col"><h2 id="about-title">I like understanding the problem before writing the code.</h2><p>My background spans customer service, sales, operations, and software development. Those roles taught me how people communicate, how workflows fail, and how important it is to understand the real problem before building a solution.</p></div></section>;
}

function Experience() {
  return <section id="experience" className="content-section" aria-labelledby="experience-title"><SectionHeader id="experience-title" index="03" title="Experience" intro="Work that taught me how people, systems, and expectations meet." /><div className="experience-list">{experiences.map(([date, company, role, description]) => <article className="experience-row" key={`${company}-${date}`}><time>{date}</time><div><h3>{company}</h3><p className="experience-role">{role}</p><p className="experience-description">{description}</p></div><span className="row-arrow">↗</span></article>)}</div></section>;
}

function Skills() {
  return <section id="skills" className="content-section" aria-labelledby="skills-title"><SectionHeader id="skills-title" index="04" title="Skills" intro="A practical toolkit for taking an idea from workflow to working software." /><div className="skills-grid">{skillGroups.map(([name, items]) => <div className="skill-group" key={name}><h3>{name}</h3><p>{items.join(" / ")}</p></div>)}</div></section>;
}

function EducationAndLanguages() {
  return <section className="content-section compact-section"><div className="compact-block"><SectionHeader index="05" title="Education" /><div><h2>Kibure College</h2><p>Computer Science <span>2024–2028</span></p></div></div><div className="compact-block"><SectionHeader index="06" title="Languages" /><div className="language-list"><span>Amharic <small>Fluent</small></span><span>English <small>Fluent</small></span><span>Spanish <small>Basic</small></span><span>French <small>Basic</small></span></div></div></section>;
}

function Contact() {
  return <section id="contact" className="contact-section" aria-labelledby="contact-title"><p className="section-kicker">07 / Contact</p><h2 id="contact-title">Have something worth <em>building?</em></h2><div className="contact-links"><a href="mailto:leulyitbarek4149@gmail.com">Email <ArrowUpRight size={15} /></a><a href="https://github.com/Lytech22" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a><span>LinkedIn <small>soon</small></span><span>Download CV <small>soon</small></span></div></section>;
}

function SectionHeader({ id, index, title, intro }: { id?: string; index: string; title: string; intro?: string }) { return <div className="section-header"><p id={id} className="section-kicker">{index} / {title}</p>{intro && <p className="section-intro">{intro}</p>}</div>; }
