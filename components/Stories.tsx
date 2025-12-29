"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { container, fadeUp, modalOverlay, modalPanel } from "../lib/animations";

type Story = {
  title: string;
  name: string;
  label: string;
  image: string;
  description: string;
};

type StoriesProps = {
  content: {
    label: string;
    title: string;
    openLabel: string;
    closeLabel: string;
    stories: Story[];
  };
};

export default function Stories({ content }: StoriesProps) {
  const [active, setActive] = useState<Story | null>(null);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="stories" className="bg-bg-secondary section-padding scroll-mt-24">
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
          <motion.div
            variants={container}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {content.stories.map((story) => (
              <motion.button
                key={story.title}
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 rounded-2xl border border-divider bg-surface p-4 text-left shadow-soft"
                onClick={() => setActive(story)}
                aria-label={`${content.openLabel}: ${story.name}`}
              >
                <div className="relative h-16 w-16 overflow-hidden rounded-full border border-divider">
                  <Image
                    src={story.image}
                    alt={story.name}
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="64px"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-surface/80 text-text-primary shadow-soft">
                      <Play size={12} />
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-text-secondary">
                    {story.label}
                  </p>
                  <p className="mt-1 text-base font-semibold text-text-primary">
                    {story.title}
                  </p>
                  <p className="mt-1 text-sm text-text-secondary">{story.name}</p>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-text-primary/60 p-6"
            variants={modalOverlay}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setActive(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={active.title}
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-surface shadow-lift"
              variants={modalPanel}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                aria-label={content.closeLabel}
                className="absolute right-5 top-5 rounded-full border border-divider bg-surface p-2 text-text-primary"
                onClick={() => setActive(null)}
              >
                <X size={16} />
              </button>
              <div className="grid gap-6 p-8 md:grid-cols-[0.9fr_1.1fr]">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src={active.image}
                    alt={active.name}
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="(min-width: 768px) 40vw, 80vw"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-xs uppercase tracking-[0.2em] text-text-secondary">
                    {active.label}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-text-primary">
                    {active.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary">{active.name}</p>
                  <p className="mt-6 text-sm leading-relaxed text-text-secondary">
                    {active.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
