import { Section } from "./Section";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <Section id="skills" index="03" title="skills.yaml">
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-lg border border-surface-border bg-surface p-4"
          >
            <p className="mb-2 text-sm font-semibold text-accent-2">
              {group.category}:
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded border border-surface-border bg-black/20 px-2 py-1 text-xs text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
