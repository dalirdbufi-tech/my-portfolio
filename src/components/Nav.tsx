const links = [
  { href: "#profile", label: "profile" },
  { href: "#certifications", label: "certs" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#experience", label: "experience" },
  { href: "#education", label: "education" },
  { href: "#contact", label: "contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-surface-border bg-background/85 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-4xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-6 py-3">
        <a href="#top" className="text-sm font-semibold text-accent">
          dalird@devops<span className="text-muted">:~$</span>
          <span className="cursor ml-1 inline-block h-[1em] w-[0.5em] translate-y-[2px] bg-accent align-middle" />
        </a>
        <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs sm:text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-muted transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
