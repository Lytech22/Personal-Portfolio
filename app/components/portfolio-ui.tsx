"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Code2,
  Github,
  Layers3,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const stack = ["Laravel", "React", "TypeScript", "Next.js", "PostgreSQL"];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl border border-white/[0.09] bg-[#0c0d12]/75 px-4 shadow-2xl shadow-black/10 backdrop-blur-xl sm:px-6">
        <a href="#top" className="group flex items-center gap-3" aria-label="Leul Yitbarek home">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-bold tracking-[-0.12em] text-[#0d0e13] transition-transform group-hover:rotate-[-6deg]">
            LY.
          </span>
          <span className="hidden text-sm font-medium tracking-[-0.02em] text-white/75 sm:block">Leul Yitbarek</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="icon-button"
            aria-label="Open GitHub profile"
          >
            <Github size={17} strokeWidth={1.7} />
          </a>
          <button
            type="button"
            className="icon-button md:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/[0.09] bg-[#111218]/95 p-2 shadow-2xl backdrop-blur-xl md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm text-white/65 transition-colors hover:bg-white/[0.06] hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[min(900px,100svh)] items-center overflow-hidden px-6 pb-16 pt-32 lg:px-10">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[minmax(0,1fr)_330px] xl:grid-cols-[minmax(0,1fr)_390px]">
        <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.09, delayChildren: 0.15 }}>
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="mb-7 flex items-center gap-3 text-[11px] font-semibold tracking-[0.24em] text-blue-300/80">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-300 shadow-[0_0_14px_rgba(147,197,253,0.9)]" />
            FULL-STACK DEVELOPER
          </motion.div>
          <motion.h1 variants={fadeUp} transition={{ duration: 0.7 }} className="max-w-4xl text-[clamp(3.5rem,8vw,7.8rem)] font-semibold leading-[0.94] tracking-[-0.075em] text-white">
            Building digital experiences <span className="text-gradient">that work beautifully.</span>
          </motion.h1>
          <motion.p variants={fadeUp} transition={{ duration: 0.7 }} className="mt-8 max-w-xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
            Hi, I&apos;m Leul Yitbarek — a Computer Science student and full-stack developer focused on building reliable, modern web applications.
          </motion.p>
          <motion.div variants={fadeUp} transition={{ duration: 0.7 }} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="button-primary">View My Work <ArrowUpRight size={17} /></a>
            <a href="#contact" className="button-secondary">Let&apos;s Talk <ArrowUpRight size={17} /></a>
          </motion.div>
          <motion.div variants={fadeUp} transition={{ duration: 0.7 }} className="mt-10 inline-flex items-center gap-2.5 rounded-full border border-white/[0.09] bg-white/[0.035] px-3.5 py-2 text-xs text-white/55">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" /></span>
            Available for opportunities
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.45 }} className="relative hidden min-h-[330px] lg:block">
          <div className="glass-card absolute inset-6 rotate-[-5deg] opacity-40" />
          <div className="glass-card absolute inset-3 rotate-[3deg] opacity-65" />
          <div className="glass-card relative flex h-[330px] flex-col justify-between overflow-hidden p-7">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-400/15 blur-3xl" />
            <div className="flex items-center justify-between text-white/35"><Code2 size={20} /><span className="font-mono text-[10px] tracking-[0.22em]">01 / 05</span></div>
            <div><div className="mb-4 h-px w-16 bg-blue-300/60" /><p className="max-w-[220px] text-2xl font-medium leading-tight tracking-[-0.04em] text-white/90">Thoughtful code. Tangible impact.</p></div>
            <div className="flex items-center justify-between text-xs text-white/35"><span>Leul Yitbarek</span><Sparkles size={15} /></div>
          </div>
        </motion.div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/30 transition-colors hover:text-white/70 sm:flex">
        Scroll to explore <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
}

export function StackRow() {
  return (
    <div className="border-y border-white/[0.07] bg-white/[0.015] px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/30">Comfortable across the stack</span>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/50 sm:gap-x-8">
          {stack.map((item) => <span key={item} className="transition-colors hover:text-white">{item}</span>)}
        </div>
      </div>
    </div>
  );
}

export function SupportingSections() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-10">
      <section id="about" className="section-grid grid gap-10 py-28 md:grid-cols-[0.7fr_1.3fr] md:py-36">
        <SectionLabel number="01" label="About" />
        <div><h2 className="section-title">I care about the details that make products feel inevitable.</h2><p className="section-copy mt-7">From the first line of code to the final interaction, I bring a product-minded approach to full-stack development. The goal is always the same: make complex things feel clear, useful, and a little delightful.</p></div>
      </section>
      <section id="projects" className="section-grid border-t border-white/[0.07] py-28 md:py-36"><SectionLabel number="02" label="Projects" /><div className="grid gap-4 md:grid-cols-2"><ProjectCard title="Selected work" description="A collection of reliable, human-centered web products in progress." tag="Coming soon" /><ProjectCard title="Open source" description="Tools and experiments built to make the web a more thoughtful place." tag="Exploring" /></div></section>
      <section id="skills" className="section-grid grid gap-10 border-t border-white/[0.07] py-28 md:grid-cols-[0.7fr_1.3fr] md:py-36"><SectionLabel number="03" label="Skills" /><div className="grid grid-cols-2 gap-x-6 gap-y-5 text-lg tracking-[-0.03em] text-white/75 sm:grid-cols-3"><span>Frontend architecture</span><span>Design systems</span><span>API development</span><span>Database design</span><span>Product thinking</span><span>Performance</span></div></section>
      <section id="experience" className="section-grid border-t border-white/[0.07] py-28 md:py-36"><SectionLabel number="04" label="Experience" /><div className="flex items-start gap-4 text-white/70"><Layers3 className="mt-1 text-blue-300/70" size={20} /><div><p className="text-xl tracking-[-0.03em] text-white">Building with intention</p><p className="mt-2 max-w-lg leading-7 text-white/45">Currently studying Computer Science and growing through hands-on product and engineering work.</p></div></div></section>
      <section id="contact" className="relative overflow-hidden border-t border-white/[0.07] py-28 md:py-36"><div className="ambient ambient-two" aria-hidden="true" /><div className="relative z-10"><SectionLabel number="05" label="Contact" /><div className="mt-10 flex flex-col justify-between gap-10 md:flex-row md:items-end"><h2 className="section-title max-w-2xl">Have a good idea? <span className="text-gradient">Let&apos;s make it real.</span></h2><a href="mailto:hello@leulyitbarek.dev" className="button-primary shrink-0">Get in touch <ArrowUpRight size={17} /></a></div></div></section>
      <footer className="flex flex-col gap-3 border-t border-white/[0.07] py-7 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between"><span>© 2025 Leul Yitbarek</span><span className="flex items-center gap-2"><Check size={13} className="text-emerald-400" /> Built with care</span></footer>
    </div>
  );
}

function SectionLabel({ number, label }: { number: string; label: string }) {
  return <div className="mb-8 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-blue-300/70 md:mb-0"><span className="font-mono text-white/25">{number}</span><span className="h-px w-8 bg-white/20" />{label}</div>;
}

function ProjectCard({ title, description, tag }: { title: string; description: string; tag: string }) {
  return <article className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200/25 hover:bg-white/[0.045]"><div className="mb-16 flex items-center justify-between"><span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-white/35">{tag}</span><ArrowUpRight size={17} className="text-white/25 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div><h3 className="text-xl tracking-[-0.03em] text-white">{title}</h3><p className="mt-2 max-w-xs text-sm leading-6 text-white/40">{description}</p></article>;
}
