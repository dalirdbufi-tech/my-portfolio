"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

type Step = {
  command: string;
  output: React.ReactNode;
};

const STEPS: Step[] = [
  {
    command: "whoami",
    output: (
      <>
        <p className="mt-1 text-2xl font-bold text-accent sm:text-3xl">
          {profile.name}
        </p>
        <p className="text-muted">
          {profile.title} — {profile.tagline}
        </p>
      </>
    ),
  },
  {
    command: "cat contact.txt",
    output: (
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
    ),
  },
  {
    command: "echo $STATUS",
    output: (
      <p className="mt-1 text-muted">
        Open to DevOps / Platform Engineering roles{" "}
        <span className="text-accent">●</span> Available now
      </p>
    ),
  },
];

const TYPE_SPEED_MS = 45;
const PAUSE_AFTER_TYPING_MS = 300;
const PAUSE_BEFORE_NEXT_MS = 500;

export function Hero() {
  const [stepIndex, setStepIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStepIndex(STEPS.length - 1);
      setCharIndex(STEPS[STEPS.length - 1].command.length);
      setCompletedSteps(STEPS.length);
      setFinished(true);
    }
  }, []);

  useEffect(() => {
    if (finished || stepIndex >= STEPS.length) {
      setFinished(true);
      return;
    }

    const command = STEPS[stepIndex].command;

    if (charIndex < command.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), TYPE_SPEED_MS);
      return () => clearTimeout(t);
    }

    const revealTimer = setTimeout(() => {
      setCompletedSteps((c) => c + 1);
    }, PAUSE_AFTER_TYPING_MS);

    const nextTimer = setTimeout(() => {
      setStepIndex((s) => s + 1);
      setCharIndex(0);
    }, PAUSE_AFTER_TYPING_MS + PAUSE_BEFORE_NEXT_MS);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(nextTimer);
    };
  }, [stepIndex, charIndex, finished]);

  return (
    <section className="mx-auto w-full max-w-4xl px-6 pt-10 pb-6 sm:pt-16">
      <div className="overflow-hidden rounded-lg border border-surface-border bg-surface shadow-2xl shadow-black/40">
        <div className="flex items-center gap-2 border-b border-surface-border bg-black/30 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-500/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
          <span className="h-3 w-3 rounded-full bg-green-500/70" />
          <span className="ml-3 text-xs text-muted">dalird@devops: ~</span>
        </div>
        <div className="min-h-[340px] px-5 py-8 text-sm leading-relaxed sm:px-8 sm:text-base">
          {STEPS.map((step, i) => {
            if (i > stepIndex) return null;
            const isActiveLine = i === stepIndex && !finished;
            const typedCommand = isActiveLine
              ? step.command.slice(0, charIndex)
              : step.command;

            return (
              <div key={step.command} className={i > 0 ? "mt-6" : ""}>
                <p className="prompt text-foreground">
                  {typedCommand}
                  {isActiveLine && (
                    <span className="cursor ml-0.5 inline-block h-[1em] w-[0.5em] translate-y-[2px] bg-accent align-middle" />
                  )}
                </p>
                {i < completedSteps && step.output}
              </div>
            );
          })}
          {finished && (
            <p className="prompt mt-6 text-foreground">
              <span className="cursor ml-0.5 inline-block h-[1em] w-[0.5em] translate-y-[2px] bg-accent align-middle" />
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
