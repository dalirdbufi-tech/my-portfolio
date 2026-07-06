import { Section } from "./Section";
import { certifications } from "@/lib/data";

export function Certifications() {
  return (
    <Section id="certifications" index="02" title="certifications.yaml">
      <div className="space-y-3">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="flex flex-col gap-3 rounded-lg border border-surface-border bg-surface p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="font-semibold text-foreground">{cert.name}</p>
              <p className="text-sm text-accent-2">{cert.issuer}</p>
              <p className="mt-1 text-sm text-muted">{cert.description}</p>
            </div>
            <span className="inline-flex w-fit items-center gap-1 rounded-full border border-accent/30 bg-accent-dim px-3 py-1 text-xs font-medium whitespace-nowrap text-accent">
              ✓ verified
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
