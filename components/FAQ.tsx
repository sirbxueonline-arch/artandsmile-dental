"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { container, fadeUp } from "../lib/animations";

type FAQProps = {
  content: {
    label: string;
    title: string;
    items: { question: string; answer: string }[];
  };
};

export default function FAQ({ content }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-bg-primary section-padding scroll-mt-24">
      <div className="container-base">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
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
          <motion.div variants={container} className="mt-12 space-y-4">
            {content.items.map((faq, index) => {
              const isOpen = openIndex === index;
              const contentId = `faq-panel-${index}`;
              return (
                <motion.div
                  key={faq.question}
                  variants={fadeUp}
                  className="rounded-2xl border border-divider bg-surface"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                  >
                    <span className="text-base font-medium text-text-primary">
                      {faq.question}
                    </span>
                    <span className="relative h-4 w-4">
                      <motion.span
                        className="absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-text-primary"
                        initial={false}
                        animate={{ opacity: isOpen ? 1 : 1 }}
                      />
                      <motion.span
                        className="absolute left-1/2 top-0 h-full w-[1.5px] -translate-x-1/2 bg-text-primary"
                        initial={false}
                        animate={{ scaleY: isOpen ? 0 : 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={contentId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden px-6"
                      >
                        <p className="pb-5 text-sm leading-relaxed text-text-secondary">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
