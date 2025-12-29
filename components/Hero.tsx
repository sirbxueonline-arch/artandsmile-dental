"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { animate, motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { container, ease, fadeUp } from "../lib/animations";
import type { Locale } from "../lib/data";

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
      duration: 1.6,
      ease,
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [isInView, value]);

  const formatLocale =
    locale === "az" ? "az-AZ" : locale === "ru" ? "ru-RU" : "en-US";

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString(formatLocale)}
      {suffix}
    </span>
  );
}

type HeroProps = {
  content: {
    badge?: string;
    title: string;
    description?: string;
    primaryCta?: string;
    secondaryCta?: string;
    scrollLabel?: string;
    quickLinks?: { label: string; href: string }[];
    image: {
      src: string;
      alt: string;
    };
  };
  stats?: { value: number; suffix: string; label: string }[];
  locale?: Locale;
};

export default function Hero({ content, stats = [], locale = "az" }: HeroProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 60]);
  const statItems = stats.slice(0, 3);

  return (
    <section id="hero" className="relative min-h-[100svh] bg-bg-primary pt-20">
      <div className="mx-auto w-full px-2 pb-10 sm:px-3 lg:px-4">
        <motion.div
          style={{ y }}
          className="relative min-h-[calc(100svh-96px)] overflow-hidden rounded-[32px] shadow-[0_30px_80px_rgb(var(--text-primary)/0.18)]"
        >
          <Image
            src={content.image.src}
            alt={content.image.alt}
            fill
            priority
            unoptimized
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-text-primary/85 via-text-primary/45 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgb(var(--text-primary)_/_0.28),_transparent_55%)]" />
          <div className="absolute bottom-10 left-6 right-6 sm:bottom-14 sm:left-12 sm:right-auto">
            {content.badge ? (
              <div className="inline-flex rounded-full border border-divider bg-surface/80 px-4 py-1 text-xs uppercase tracking-[0.2em] text-text-secondary shadow-soft backdrop-blur">
                {content.badge}
              </div>
            ) : null}
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="mt-4 max-w-3xl"
            >
              <motion.h1
                variants={fadeUp}
                className="font-heading text-5xl font-medium leading-[1.03] text-surface drop-shadow-[0_12px_30px_rgba(43,43,43,0.55)] sm:text-6xl lg:text-7xl xl:text-8xl"
              >
                {content.title}
              </motion.h1>
              {content.description ? (
                <motion.p
                  variants={fadeUp}
                  className="mt-4 text-sm leading-relaxed text-surface/85 sm:text-base"
                >
                  {content.description}
                </motion.p>
              ) : null}
              {(content.primaryCta || content.secondaryCta) && (
                <motion.div
                  variants={fadeUp}
                  className="mt-6 flex flex-wrap gap-3"
                >
                  {content.primaryCta ? (
                    <a
                      href="#contact"
                      className="rounded-full bg-accent px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-text-primary transition-colors duration-300 hover:bg-accent-hover"
                    >
                      {content.primaryCta}
                    </a>
                  ) : null}
                  {content.secondaryCta ? (
                    <a
                      href="#contact"
                      className="rounded-full border border-surface/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-surface transition-colors duration-300 hover:border-surface"
                    >
                      {content.secondaryCta}
                    </a>
                  ) : null}
                </motion.div>
              )}
              {content.quickLinks && content.quickLinks.length > 0 ? (
                <motion.div
                  variants={fadeUp}
                  className="mt-8 flex flex-wrap gap-8 text-xs uppercase tracking-[0.2em] text-surface/90"
                >
                  {content.quickLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="group flex items-center gap-3"
                    >
                      <span className="border-b border-surface/40 pb-2 transition-colors group-hover:border-surface/70">
                        {link.label}
                      </span>
                      <ArrowUpRight
                        size={14}
                        className="text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  ))}
                </motion.div>
              ) : null}
            </motion.div>
          </div>
          {statItems.length > 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="mt-8 px-6 pb-6 sm:absolute sm:bottom-8 sm:right-8 sm:mt-0 sm:max-w-[min(620px,60vw)] sm:px-0 sm:pb-0"
            >
              <div className="grid grid-cols-3 gap-4 rounded-[28px] border border-divider bg-surface/95 px-6 py-5 text-center shadow-[0_24px_60px_rgb(var(--text-primary)/0.14)] backdrop-blur">
                {statItems.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col gap-2 border-divider sm:px-2 [&:not(:last-child)]:border-r"
                  >
                    <div className="text-2xl font-semibold text-text-primary sm:text-3xl lg:text-4xl">
                      <Counter value={stat.value} suffix={stat.suffix} locale={locale} />
                    </div>
                    <p className="text-xs text-text-secondary sm:text-sm">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
