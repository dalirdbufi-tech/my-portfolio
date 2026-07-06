import { Section } from "./Section";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <Section id="experience" index="05" title="experience.log">
      <div className="space-y-8 border-l border-surface-border pl-6">
        {experience.map((job) => (
          <div key={job.company} className="relative">
            <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border border-accent bg-background" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <p className="font-semibold text-foreground">{job.role}</p>
              <p className="text-xs text-muted whitespace-nowrap">{job.period}</p>
            </div>
            <p className="text-sm text-accent-2">
              {job.company}
              {job.location && <span className="text-muted"> · {job.location}</span>}
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-muted">
              {job.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="text-accent">›</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
