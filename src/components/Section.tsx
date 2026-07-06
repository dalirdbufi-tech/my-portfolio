import { ReactNode } from "react";

export function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-4xl scroll-mt-20 px-6 py-12">
      <div className="mb-6 flex items-center gap-3">
        <span className="text-sm text-accent">{index}</span>
        <span className="text-sm text-muted">//</span>
        <h2 className="text-base font-semibold tracking-wide text-foreground sm:text-lg">
          {title}
        </h2>
        <span className="h-px flex-1 bg-surface-border" />
      </div>
      {children}
    </section>
  );
}
