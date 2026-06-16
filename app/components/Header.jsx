"use client";

import { useState } from "react";
import { site } from "../../data/site";
import { Icon } from "./Icons";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#why", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <span className="brand__mark">{site.name}</span>
          <span>
            <span className="brand__name">{site.name}</span>
            <span className="brand__sub" style={{ display: "block" }}>
              {site.tagline}
            </span>
          </span>
        </a>

        <nav className={open ? "nav nav--open" : "nav"}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a className="btn btn--gold" href={`tel:${site.phone}`}>
            Call Now
          </a>
        </nav>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
    </header>
  );
}
