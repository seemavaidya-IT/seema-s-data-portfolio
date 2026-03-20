import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = links.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection("");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-xl shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="font-mono text-lg font-semibold text-primary">
          SV<span className="text-accent">.</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const isActive = activeSection === l.href.replace("#", "");
            return (
              <a
                key={l.href}
                href={l.href}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-primary bg-primary/10"
                    : scrolled
                    ? "text-muted-foreground hover:text-foreground hover:bg-muted"
                    : "text-hero-muted hover:text-hero-foreground hover:bg-white/5"
                }`}
              >
                {l.label}
              </a>
            );
          })}
          <a
            href="/resume-seema-vaidya.pdf"
            download
            className="ml-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            <Download size={14} /> Resume
          </a>
        </div>

        <button
          className={`md:hidden ${scrolled ? "text-foreground" : "text-hero-foreground"}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card/95 backdrop-blur-xl border-b border-border px-6 pb-4 flex flex-col gap-1">
          {links.map((l) => {
            const isActive = activeSection === l.href.replace("#", "");
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`px-3 py-2 rounded-md text-sm transition-colors ${
                  isActive
                    ? "text-primary bg-primary/10 font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {l.label}
              </a>
            );
          })}
          <a
            href="/resume-seema-vaidya.pdf"
            download
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium"
          >
            <Download size={14} /> Download Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
