import { Section } from "./Section";
import { education } from "@/lib/data";

export function Education() {
  return (
    <Section id="education" index="06" title="education.json">
      <div className="grid gap-4 sm:grid-cols-2">
        {education.map((edu) => (
          <div
            key={edu.degree}
            className="rounded-lg border border-surface-border bg-surface p-4"
          >
            <p className="font-semibold text-foreground">{edu.degree}</p>
            <p className="text-sm text-accent-2">{edu.school}</p>
            <p className="mt-1 text-xs text-muted">{edu.period}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
