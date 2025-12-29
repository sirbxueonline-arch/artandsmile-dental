"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingContact from "../../components/FloatingContact";
import { container, fadeUp } from "../../lib/animations";
import { content, type Locale } from "../../lib/data";

export default function EducationPage() {
  const [locale, setLocale] = useState<Locale>("az");
  const copy = content[locale];

  return (
    <>
      <Header
        navLinks={copy.navLinks}
        cta={copy.header.cta}
        tagline={copy.header.tagline}
        onTaglineClick={() => setLocale("en")}
        labels={{ menu: copy.header.menuLabel, language: copy.header.languageLabel }}
        teamMenu={copy.header.teamMenu}
        servicesMenu={copy.header.servicesMenu}
        locale={locale}
        onLocaleChange={setLocale}
      />
      <main className="bg-bg-primary pt-24">
        <section className="pb-20">
          <div className="container-base">
            <motion.nav
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              aria-label="Breadcrumb"
              className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-text-secondary"
            >
              <Link href="/" className="transition-colors hover:text-text-primary">
                {copy.educationPage.breadcrumb.home}
              </Link>
              <span className="h-px w-6 bg-divider" aria-hidden="true" />
              <span>{copy.educationPage.breadcrumb.current}</span>
            </motion.nav>
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="mt-10"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <motion.h1
                    variants={fadeUp}
                    className="text-4xl font-semibold text-text-primary sm:text-5xl"
                  >
                    {copy.blog.title}
                  </motion.h1>
                  {copy.blog.subtitle ? (
                    <motion.p
                      variants={fadeUp}
                      className="mt-4 text-3xl font-light text-text-secondary sm:text-4xl"
                    >
                      {copy.blog.subtitle}
                    </motion.p>
                  ) : null}
                </div>
                <motion.div variants={fadeUp} className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label={copy.blog.controls?.previous ?? "Previous"}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-divider bg-surface text-accent shadow-[0_10px_24px_rgb(var(--accent)/0.2)] transition hover:-translate-y-0.5 hover:bg-bg-secondary"
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <button
                    type="button"
                    aria-label={copy.blog.controls?.next ?? "Next"}
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
                {copy.blog.posts.map((post) => (
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
                        sizes="(min-width: 1024px) 28vw, (min-width: 768px) 45vw, 100vw"
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
      </main>
      <Footer navLinks={copy.navLinks} content={copy.footer} />
      <FloatingContact label={copy.floating.whatsappLabel} />
    </>
  );
}
