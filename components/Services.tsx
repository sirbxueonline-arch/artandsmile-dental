"use client";

import { motion } from "framer-motion";
import { container, fadeUp } from "../lib/animations";

type ServicesProps = {
  content: {
    label: string;
    title: string;
    items: { title: string; description: string }[];
  };
};

export default function Services({ content }: ServicesProps) {
  return (
    <section id="services" className="bg-bg-primary section-padding scroll-mt-24">
      <div className="container-base">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          <div className="text-center">
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-semibold text-text-primary sm:text-4xl"
            >
              {content.label}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-3 text-lg text-text-secondary"
            >
              {content.title}
            </motion.p>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="mt-12 overflow-hidden rounded-3xl bg-divider shadow-soft"
          >
            <div className="grid gap-px md:grid-cols-2 lg:grid-cols-3">
              {content.items.map((service, index) => (
                <motion.article
                  key={service.title}
                  variants={fadeUp}
                  className="bg-surface p-8 transition-colors duration-300 hover:bg-bg-secondary sm:p-10"
                >
                  <p className="text-2xl font-light text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-6 text-lg font-semibold text-text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {service.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
