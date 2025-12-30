"use client";

import useLocale from "../../lib/useLocale";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingContact from "../../components/FloatingContact";
import { container, fadeUp, lineReveal } from "../../lib/animations";
import { content } from "../../lib/data";

export default function AboutPage() {
  const [locale, setLocale] = useLocale();
  const copy = content[locale];
  const about = copy.aboutPage;

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
        <section className="pb-16">
          <div className="container-base">
            <motion.nav
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              aria-label="Breadcrumb"
              className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-text-secondary"
            >
              <Link href="/" className="transition-colors hover:text-text-primary">
                {about.breadcrumb.home}
              </Link>
              <span className="h-px w-6 bg-divider" aria-hidden="true" />
              <span>{about.breadcrumb.current}</span>
            </motion.nav>
            <div className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
              <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
              >
                <motion.h1
                  variants={fadeUp}
                  className="text-4xl font-semibold text-text-primary sm:text-5xl"
                >
                  {about.hero.title}
                </motion.h1>
                <motion.p
                  variants={fadeUp}
                  className="mt-3 text-3xl font-light text-text-secondary sm:text-4xl"
                >
                  {about.hero.subtitle}
                </motion.p>
                <motion.div
                  variants={container}
                  className="mt-6 space-y-4 text-sm leading-relaxed text-text-secondary"
                >
                  {about.hero.description.map((paragraph) => (
                    <motion.p key={paragraph} variants={fadeUp}>
                      {paragraph}
                    </motion.p>
                  ))}
                </motion.div>
              </motion.div>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="relative overflow-hidden rounded-3xl border border-divider bg-surface shadow-soft"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={about.hero.image.src}
                    alt={about.hero.image.alt}
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="(min-width: 1024px) 36vw, 90vw"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-bg-secondary py-16">
          <div className="container-base">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2 }}
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <motion.h2
                    variants={fadeUp}
                    className="text-3xl font-semibold text-text-primary sm:text-4xl"
                  >
                    {about.advantages.title}
                  </motion.h2>
                  <motion.p
                    variants={fadeUp}
                    className="mt-3 text-2xl text-text-secondary sm:text-3xl"
                  >
                    {about.advantages.subtitle}
                  </motion.p>
                </div>
                <motion.div
                  variants={fadeUp}
                  className="max-w-xl space-y-4 text-sm leading-relaxed text-text-secondary"
                >
                  {about.advantages.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </motion.div>
              </div>
              <motion.div
                variants={container}
                className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6"
              >
                {about.advantages.items.map((item, index) => (
                  <motion.div
                    key={item.title}
                    custom={index}
                    variants={lineReveal}
                    className="rounded-2xl border border-divider bg-surface px-4 py-5 shadow-[0_12px_26px_rgb(var(--text-primary)/0.06)]"
                  >
                    <p className="text-sm font-semibold text-text-secondary">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 text-sm font-medium text-text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-text-secondary">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="bg-bg-primary py-16">
          <div className="container-base">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2 }}
              className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
            >
              <div>
                <motion.h2
                  variants={fadeUp}
                  className="text-3xl font-semibold text-text-primary sm:text-4xl"
                >
                  {about.video.title}
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  className="mt-3 text-2xl text-text-secondary sm:text-3xl"
                >
                  {about.video.subtitle}
                </motion.p>
                <motion.p
                  variants={fadeUp}
                  className="mt-4 text-sm leading-relaxed text-text-secondary"
                >
                  {about.video.description}
                </motion.p>
              </div>
              <motion.div
                variants={fadeUp}
                className="rounded-3xl border border-divider bg-surface p-3 shadow-soft"
              >
                <video
                  src={about.video.src}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full rounded-2xl"
                >
                  Your browser does not support the video tag.
                </video>
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
