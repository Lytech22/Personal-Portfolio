import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";

const projects = [
  { number: "01", title: "Smart Apartment Parking System", description: "Apartment parking management system with resident and vehicle records, parking zones, booking workflows, role-based access, and PostgreSQL-backed availability logic.", stack: ["Laravel", "React", "TypeScript", "PostgreSQL"], status: "Active development" },
  { number: "02", title: "Modern Gym OS", description: "Gym management platform for memberships, staff, attendance, subscriptions, operational workflows, and reporting.", stack: ["Laravel", "React", "TypeScript", "PostgreSQL"], status: "Active development" },
  { number: "03", title: "Personal Portfolio", description: "A developer portfolio built to document my work, experience, and technical growth.", stack: ["Next.js", "TypeScript", "Tailwind CSS"], status: "Building" },
];

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
      <Reveal className="currently" delay={0.12}><p className="section-kicker">Currently</p>{projects.map((project) => <a href="#work" className="current-item" key={project.number}><span>{project.number}</span><span>{project.title}</span></a>)}<div className="hero-stack"><p className="section-kicker">Stack</p><p>Laravel / React / TypeScript / PostgreSQL</p></div></Reveal>
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
  return <section id="work" className="content-section work-section" aria-labelledby="work-title"><SectionHeader index="01" title="Selected work" intro="Systems built around the way people actually work." /><div className="project-list">{projects.map((project, index) => <Reveal key={project.number} delay={index * 0.04}><article className={`project-row project-${index + 1}`}><div className="project-info"><div className="project-meta"><span>{project.number}</span><span>{project.status}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div><div className="screenshot-placeholder" aria-label={`${project.title} screenshot placeholder`}><span>Project view</span><small>Screenshot placeholder</small></div></article></Reveal>)}</div></section>;
}

function About() {
  return <section id="about" className="content-section about-section" aria-labelledby="about-title"><SectionHeader index="02" title="About" /><div className="editorial-two-col"><h2 id="about-title">I like understanding the problem before writing the code.</h2><p>My background spans customer service, sales, operations, and software development. Those roles taught me how people communicate, how workflows fail, and how important it is to understand the real problem before building a solution.</p></div></section>;
}

function Experience() {
  return <section id="experience" className="content-section" aria-labelledby="experience-title"><SectionHeader index="03" title="Experience" intro="Work that taught me how people, systems, and expectations meet." /><div className="experience-list" id="experience-title">{experiences.map(([date, company, role, description]) => <article className="experience-row" key={`${company}-${date}`}><time>{date}</time><div><h3>{company}</h3><p className="experience-role">{role}</p><p className="experience-description">{description}</p></div><span className="row-arrow">↗</span></article>)}</div></section>;
}

function Skills() {
  return <section id="skills" className="content-section" aria-labelledby="skills-title"><SectionHeader index="04" title="Skills" intro="A practical toolkit for taking an idea from workflow to working software." /><div className="skills-grid" id="skills-title">{skillGroups.map(([name, items]) => <div className="skill-group" key={name}><h3>{name}</h3><p>{items.join(" / ")}</p></div>)}</div></section>;
}

function EducationAndLanguages() {
  return <section className="content-section compact-section"><div className="compact-block"><SectionHeader index="05" title="Education" /><div><h2>Kibure College</h2><p>Computer Science <span>2024–2028</span></p></div></div><div className="compact-block"><SectionHeader index="06" title="Languages" /><div className="language-list"><span>Amharic <small>Fluent</small></span><span>English <small>Fluent</small></span><span>Spanish <small>Basic</small></span><span>French <small>Basic</small></span></div></div></section>;
}

function Contact() {
  return <section id="contact" className="contact-section" aria-labelledby="contact-title"><p className="section-kicker">07 / Contact</p><h2 id="contact-title">Have something worth <em>building?</em></h2><div className="contact-links"><a href="mailto:leulyitbarek4149@gmail.com">Email <ArrowUpRight size={15} /></a><a href="https://github.com/Lytech22" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a><span>LinkedIn <small>soon</small></span><span>Download CV <small>soon</small></span></div></section>;
}

function SectionHeader({ index, title, intro }: { index: string; title: string; intro?: string }) { return <div className="section-header"><p className="section-kicker">{index} / {title}</p>{intro && <p className="section-intro">{intro}</p>}</div>; }
