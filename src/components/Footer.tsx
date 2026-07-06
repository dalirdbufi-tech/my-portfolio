import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-surface-border">
      <div className="mx-auto w-full max-w-4xl px-6 py-10 text-sm text-muted">
        <p className="prompt text-foreground">echo &quot;let&apos;s talk&quot;</p>
        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
          <a
            href={`mailto:${profile.email}`}
            className="text-accent-2 hover:underline"
          >
            {profile.email}
          </a>
          <span>{profile.phone}</span>
          <span>{profile.location}</span>
        </div>
        <p className="mt-6 text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp;
          Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
