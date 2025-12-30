"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { container, fadeUp, modalOverlay, modalPanel } from "../lib/animations";

type VideoItem = {
  src: string;
  label: string;
  poster?: string;
};

type VideoStoriesProps = {
  content: {
    label: string;
    title: string;
    subtitle: string;
    description: string;
    openLabel: string;
    closeLabel: string;
    items: ReadonlyArray<VideoItem>;
  };
};

export default function VideoStories({ content }: VideoStoriesProps) {
  const [active, setActive] = useState<VideoItem | null>(null);

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
    <section id="experiences" className="bg-surface section-padding">
      <div className="container-base">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <motion.p
                variants={fadeUp}
                className="text-xs uppercase tracking-[0.3em] text-text-secondary"
              >
                {content.label}
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="mt-4 text-3xl font-semibold leading-[1.15] text-text-primary sm:text-4xl"
              >
                <span className="block">{content.title}</span>
                <span className="block font-light text-text-secondary">
                  {content.subtitle}
                </span>
              </motion.h2>
            </div>
            <motion.p
              variants={fadeUp}
              className="max-w-md text-xs leading-relaxed text-text-secondary"
            >
              {content.description}
            </motion.p>
          </div>
          <motion.ul
            variants={container}
            className="scrollbar-none mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 sm:gap-6 lg:mt-12"
            role="list"
          >
            {content.items.map((item) => (
              <motion.li
                key={item.src}
                variants={fadeUp}
                className="shrink-0 snap-center"
              >
                <button
                  type="button"
                  onClick={() => setActive(item)}
                  aria-label={`${content.openLabel}: ${item.label}`}
                  className="group relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-divider bg-bg-secondary shadow-soft transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:h-28 sm:w-28 lg:h-32 lg:w-32"
                >
                  <video
                    src={item.src}
                    poster={item.poster}
                    muted
                    playsInline
                    preload="metadata"
                    aria-hidden="true"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute inset-0 bg-text-primary/10 opacity-0 transition-opacity group-hover:opacity-100" />
                  <span className="absolute flex h-9 w-9 items-center justify-center rounded-full bg-surface/90 text-text-primary shadow-soft">
                    <Play size={14} />
                  </span>
                </button>
              </motion.li>
            ))}
          </motion.ul>
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
              aria-label={active.label}
              className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-surface shadow-lift"
              variants={modalPanel}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                aria-label={content.closeLabel}
                className="absolute right-5 top-5 z-10 rounded-full border border-divider bg-surface p-2 text-text-primary"
                onClick={() => setActive(null)}
              >
                <X size={16} />
              </button>
              <div className="p-4 sm:p-6">
                <video
                  src={active.src}
                  controls
                  autoPlay
                  playsInline
                  className="h-auto w-full rounded-2xl"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
