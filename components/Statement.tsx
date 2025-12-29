"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { container, fadeUp } from "../lib/animations";

type StatementProps = {
  content: {
    text: string;
    cta: string;
    ctaHref: string;
  };
};

export default function Statement({ content }: StatementProps) {
  return (
    <section className="bg-bg-primary section-padding">
      <div className="container-base">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
        >
          <motion.h2
            variants={fadeUp}
            className="max-w-3xl text-3xl font-semibold leading-[1.2] text-text-primary sm:text-4xl lg:text-5xl"
          >
            {content.text}
          </motion.h2>
          <motion.div variants={fadeUp} className="shrink-0">
            <Link
              href={content.ctaHref}
              className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-medium text-text-primary shadow-soft transition hover:bg-accent-hover"
            >
              {content.cta}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
