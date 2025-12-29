"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { container, fadeUp } from "../lib/animations";

type BlogProps = {
  content: {
    label?: string;
    title: string;
    subtitle?: string;
    controls?: {
      previous: string;
      next: string;
    };
    posts: ReadonlyArray<{ title: string; date: string; excerpt: string; image: string }>;
  };
};

export default function Blog({ content }: BlogProps) {
  return (
    <section id="blog" className="bg-bg-primary section-padding scroll-mt-24">
      <div className="container-base">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          {content.label ? (
            <motion.p
              variants={fadeUp}
              className="text-xs uppercase tracking-[0.3em] text-text-secondary"
            >
              {content.label}
            </motion.p>
          ) : null}
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <motion.h2
                variants={fadeUp}
                className="text-3xl font-semibold leading-[1.2] text-text-primary sm:text-4xl"
              >
                {content.title}
              </motion.h2>
              {content.subtitle ? (
                <motion.p
                  variants={fadeUp}
                  className="mt-3 text-2xl font-light text-text-secondary sm:text-3xl"
                >
                  {content.subtitle}
                </motion.p>
              ) : null}
            </div>
            <motion.div variants={fadeUp} className="flex items-center gap-2">
              <button
                type="button"
                aria-label={content.controls?.previous ?? "Previous"}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-divider bg-surface text-accent shadow-[0_10px_24px_rgb(var(--accent)/0.2)] transition hover:-translate-y-0.5 hover:bg-bg-secondary"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                type="button"
                aria-label={content.controls?.next ?? "Next"}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-divider bg-surface text-accent shadow-[0_10px_24px_rgb(var(--accent)/0.2)] transition hover:-translate-y-0.5 hover:bg-bg-secondary"
              >
                <ArrowRight size={16} />
              </button>
            </motion.div>
          </div>
          <motion.div
            variants={container}
            className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {content.posts.map((post) => (
              <motion.article
                key={post.title}
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: "0 24px 60px rgb(var(--accent) / 0.35)" }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="overflow-hidden rounded-3xl border border-divider bg-surface shadow-soft"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 40vw, 90vw"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-accent">
                    {post.date}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {post.excerpt}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
