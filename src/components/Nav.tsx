"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { id: "about", label: "关于" },
  { id: "experience", label: "经历" },
  { id: "projects", label: "项目" },
  { id: "contact", label: "联系" },
];

export function Nav() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && setActive(entry.target.id),
        ),
      { rootMargin: "-35% 0px -55%" },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((section) => observer.observe(section));
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
  };

  return (
    <header
      className={`nav ${scrolled ? "nav-scrolled" : ""}`}
      data-print="hide"
    >
      <div className="nav-inner">
        <a className="brand" href="#home">
          王 <i>凯</i>
        </a>
        <nav
          aria-label="主导航"
          className={open ? "nav-links open" : "nav-links"}
        >
          {links.map((link) => (
            <a
              key={link.id}
              className={active === link.id ? "active" : ""}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            onClick={toggleTheme}
            aria-label={dark ? "切换浅色主题" : "切换深色主题"}
          >
            {dark ? <Sun /> : <Moon />}
          </button>
          <button
            className="menu"
            onClick={() => setOpen(!open)}
            aria-label="切换菜单"
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
