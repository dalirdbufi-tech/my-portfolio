"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

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
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const [intersecting, setIntersecting] = useState(false);
  const visible = reducedMotion || intersecting;

  useEffect(() => {
    const node = ref.current;
    if (!node || reducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <section
      id={id}
      ref={ref}
      className={`mx-auto w-full max-w-4xl scroll-mt-20 px-6 py-12 transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <div className="mb-6 flex items-center gap-3">
        <span className="text-sm text-accent">{index}</span>
        <span className="text-sm text-muted">{"//"}</span>
        <h2 className="text-base font-semibold tracking-wide text-foreground sm:text-lg">
          {title}
        </h2>
        <span className="h-px flex-1 bg-surface-border" />
      </div>
      {children}
    </section>
  );
}
