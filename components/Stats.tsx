"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import { ShieldCheck, Sparkles, Users } from "lucide-react";
import { container, fadeUp, ease } from "../lib/animations";
import type { Locale } from "../lib/data";

const icons = [Sparkles, ShieldCheck, Users];

function Counter({
  value,
  suffix,
  locale,
}: {
  value: number;
  suffix: string;
  locale: Locale;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease,
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString(locale === "az" ? "az-AZ" : "en-US")}
      {suffix}
    </span>
  );
}

type StatsProps = {
  stats: ReadonlyArray<{ value: number; suffix: string; label: string }>;
  locale: Locale;
};

export default function Stats({ stats, locale }: StatsProps) {
  return (
    <section className="bg-bg-secondary section-padding">
      <div className="container-base">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4 }}
          className="grid gap-8 divide-y divide-divider lg:grid-cols-3 lg:divide-x lg:divide-y-0"
        >
          {stats.map((stat, index) => {
            const Icon = icons[index] ?? Sparkles;
            return (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="flex flex-col gap-3 px-0 py-6 text-center lg:px-6"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-divider bg-surface">
                  <Icon className="text-accent" size={18} aria-hidden="true" />
                </div>
                <div className="text-3xl font-semibold text-text-primary sm:text-4xl">
                  <Counter value={stat.value} suffix={stat.suffix} locale={locale} />
                </div>
                <p className="text-sm uppercase tracking-[0.2em] text-text-secondary">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
