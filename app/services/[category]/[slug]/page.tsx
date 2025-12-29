"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import FloatingContact from "../../../../components/FloatingContact";
import { container, fadeUp } from "../../../../lib/animations";
import { content, type Locale } from "../../../../lib/data";

type ServiceParams = {
  category: string;
  slug: string;
};

export default function ServiceDetailPage({ params }: { params: ServiceParams }) {
  const [locale, setLocale] = useState<Locale>("az");
  const copy = content[locale];
  const servicesPages = copy.servicesPages;
  const categoryKey = params.category as keyof typeof servicesPages.categories;
  const category = servicesPages.categories[categoryKey];
  const service = category?.items.find((item) => item.slug === params.slug);

  if (!category || !service) {
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
              <p className="text-sm text-text-secondary">Service not found.</p>
            </div>
          </section>
        </main>
        <Footer navLinks={copy.navLinks} content={copy.footer} />
        <FloatingContact label={copy.floating.whatsappLabel} />
      </>
    );
  }

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
                {servicesPages.breadcrumb.home}
              </Link>
              <span className="h-px w-6 bg-divider" aria-hidden="true" />
              <Link href="/#services" className="transition-colors hover:text-text-primary">
                {servicesPages.breadcrumb.services}
              </Link>
              <span className="h-px w-6 bg-divider" aria-hidden="true" />
              <span>{category.label}</span>
            </motion.nav>
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="mt-10 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
            >
              <motion.div variants={container}>
                <motion.h1
                  variants={fadeUp}
                  className="text-4xl font-semibold text-text-primary sm:text-5xl"
                >
                  {service.title}
                </motion.h1>
                <motion.div
                  variants={fadeUp}
                  className="mt-6 h-px w-full max-w-xl bg-divider"
                />
                <motion.p
                  variants={fadeUp}
                  className="mt-4 text-sm leading-relaxed text-text-secondary sm:text-base"
                >
                  {service.summary}
                </motion.p>
              </motion.div>
              <motion.div
                variants={fadeUp}
                className="mx-auto w-full max-w-sm sm:max-w-md lg:ml-auto"
              >
                <div className="relative aspect-[2/3] overflow-hidden rounded-[999px] border border-divider bg-surface shadow-soft">
                  <Image
                    src={servicesPages.image}
                    alt={service.title}
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 40vw, 80vw"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <section className="pb-20">
          <div className="container-base">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2 }}
              className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"
            >
              <motion.h2
                variants={fadeUp}
                className="text-3xl font-semibold text-text-primary sm:text-4xl"
              >
                {servicesPages.detailsTitle}
              </motion.h2>
              <motion.div
                variants={container}
                className="space-y-4 border-t border-divider pt-6 text-sm leading-relaxed text-text-secondary sm:text-base"
              >
                {service.details.map((detail) => (
                  <motion.p key={detail} variants={fadeUp}>
                    {detail}
                  </motion.p>
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
