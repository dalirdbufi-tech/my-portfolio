import { Section } from "./Section";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <Section id="projects" index="04" title="projects/">
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col rounded-lg border border-surface-border bg-surface p-4"
          >
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <p className="font-semibold text-foreground">{project.title}</p>
              {project.status === "current" && (
                <span className="rounded-full bg-accent-dim px-2 py-0.5 text-[10px] font-medium text-accent">
                  active
                </span>
              )}
            </div>
            <p className="mb-3 flex-1 text-sm text-muted">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-accent-2/30 px-2 py-0.5 text-[11px] text-accent-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
