"use client";

import { Code2, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Work", "#work"],
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <a href="#top" className="wordmark">LY<span>.</span></a>
        <div className="desktop-links">
          {links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        </div>
        <div className="nav-actions">
          <a href="https://github.com/Lytech22" target="_blank" rel="noreferrer" className="github-link" aria-label="Open Leul's GitHub profile"><Code2 size={16} /> <span>GitHub</span></a>
          <button type="button" className="menu-button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>{open ? <X size={18} /> : <Menu size={18} />}</button>
        </div>
      </nav>
      {open && <div className="mobile-menu">{links.map(([label, href]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}</div>}
    </header>
  );
}
