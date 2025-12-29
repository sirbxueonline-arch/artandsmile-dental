"use client";

import { motion } from "framer-motion";
import { Globe, Plane, ShieldCheck, MessageCircle } from "lucide-react";
import { container, fadeUp } from "../lib/animations";

const icons = [Globe, Plane, ShieldCheck, MessageCircle];

type ForeignPatientsProps = {
  content: {
    label: string;
    title: string;
    description: string;
    highlights: string[];
    cta: string;
  };
};

export default function ForeignPatients({ content }: ForeignPatientsProps) {
  return (
    <section
      id="foreign-patients"
      className="bg-bg-secondary section-padding scroll-mt-24"
    >
      <div className="container-base">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="text-xs uppercase tracking-[0.3em] text-text-secondary"
            >
              {content.label}
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-3xl font-semibold leading-[1.2] text-text-primary sm:text-4xl"
            >
              {content.title}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-sm leading-relaxed text-text-secondary"
            >
              {content.description}
            </motion.p>
            <motion.a
              variants={fadeUp}
              href="#contact"
              className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-medium text-text-primary transition-colors duration-300 hover:bg-accent-hover"
            >
              {content.cta}
            </motion.a>
          </div>
          <motion.div
            variants={container}
            className="rounded-3xl border border-divider bg-surface p-8 shadow-soft"
          >
            <div className="space-y-5">
              {content.highlights.map((item, index) => {
                const Icon = icons[index] ?? Globe;
                return (
                  <motion.div
                    key={item}
                    variants={fadeUp}
                    className="flex items-center gap-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-divider bg-bg-secondary">
                      <Icon className="text-accent" size={18} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="text-sm text-text-secondary">{item}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
