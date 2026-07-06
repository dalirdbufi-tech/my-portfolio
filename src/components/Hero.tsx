import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 pt-10 pb-6 sm:pt-16">
      <div className="overflow-hidden rounded-lg border border-surface-border bg-surface shadow-2xl shadow-black/40">
        <div className="flex items-center gap-2 border-b border-surface-border bg-black/30 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-500/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
          <span className="h-3 w-3 rounded-full bg-green-500/70" />
          <span className="ml-3 text-xs text-muted">dalird@devops: ~</span>
        </div>
        <div className="px-5 py-8 text-sm leading-relaxed sm:px-8 sm:text-base">
          <p className="prompt text-foreground">whoami</p>
          <p className="mt-1 text-2xl font-bold text-accent sm:text-3xl">
            {profile.name}
          </p>
          <p className="text-muted">
            {profile.title} — {profile.tagline}
          </p>

          <p className="prompt mt-6 text-foreground">cat contact.txt</p>
          <ul className="mt-1 space-y-1 text-muted">
            <li>
              location: <span className="text-foreground">{profile.location}</span>
            </li>
            <li>
              email:{" "}
              <a
                href={`mailto:${profile.email}`}
                className="text-accent-2 hover:underline"
              >
                {profile.email}
              </a>
            </li>
            <li>
              phone: <span className="text-foreground">{profile.phone}</span>
            </li>
          </ul>

          <p className="prompt mt-6 text-foreground">echo $STATUS</p>
          <p className="mt-1 text-muted">
            Open to DevOps / Platform Engineering roles{" "}
            <span className="text-accent">●</span> Available now
          </p>
        </div>
      </div>
    </section>
  );
}
