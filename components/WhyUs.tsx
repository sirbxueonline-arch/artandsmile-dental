"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { container, fadeUp, lineReveal } from "../lib/animations";

type WhyUsProps = {
  content: {
    label: string;
    title: string;
    image: { src: string; alt: string };
    reasons: { title: string; description?: string }[];
  };
};

export default function WhyUs({ content }: WhyUsProps) {
  return (
    <section id="why-us" className="bg-bg-primary section-padding scroll-mt-24">
      <div className="container-base">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-4xl font-semibold text-text-primary sm:text-5xl"
            >
              {content.label}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-3 text-3xl text-text-secondary sm:text-4xl"
            >
              {content.title}
            </motion.p>
            <motion.div
              variants={container}
              className="mt-10 grid gap-4 sm:grid-cols-2"
            >
              {content.reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  custom={index}
                  variants={lineReveal}
                  className="rounded-2xl border border-divider bg-surface px-6 py-5 shadow-[0_12px_26px_rgb(var(--text-primary)/0.06)]"
                >
                  <p className="text-base font-semibold text-text-secondary">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-base font-medium text-text-primary">
                    {reason.title}
                  </h3>
                  {reason.description ? (
                    <p className="mt-2 text-xs text-text-secondary">
                      {reason.description}
                    </p>
                  ) : null}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.4 }}
            className="relative overflow-hidden rounded-3xl border border-divider bg-surface shadow-soft"
          >
            <div className="relative aspect-[4/5]">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                fill
                unoptimized
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 90vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary/70 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
