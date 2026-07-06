import { Section } from "./Section";
import { profile } from "@/lib/data";

export function Profile() {
  return (
    <Section id="profile" index="01" title="profile.md">
      <p className="whitespace-pre-line text-sm leading-relaxed text-muted sm:text-base">
        {profile.summary}
      </p>
    </Section>
  );
}
