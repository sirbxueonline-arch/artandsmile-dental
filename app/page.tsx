"use client";

import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import ForeignPatients from "../components/ForeignPatients";
import Statement from "../components/Statement";
import Team from "../components/Team";
import Stories from "../components/Stories";
import Blog from "../components/Blog";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import { content, type Locale } from "../lib/data";

export default function Home() {
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
      <main>
        <Hero key={`hero-${locale}`} content={copy.hero} stats={copy.stats} locale={locale} />
        <Services key={`services-${locale}`} content={copy.services} />
        <WhyUs key={`whyus-${locale}`} content={copy.whyUs} />
        <ForeignPatients key={`foreign-${locale}`} content={copy.foreignPatients} />
        <Statement key={`statement-${locale}`} content={copy.statement} />
        <Team key={`team-${locale}`} content={copy.team} />
        <Stories key={`stories-${locale}`} content={copy.stories} />
        <Blog key={`blog-${locale}`} content={copy.blog} />
        <FAQ key={`faq-${locale}`} content={copy.faq} />
        <Contact key={`contact-${locale}`} content={copy.contact} />
      </main>
      <Footer key={`footer-${locale}`} navLinks={copy.navLinks} content={copy.footer} />
      <FloatingContact key={`floating-${locale}`} label={copy.floating.whatsappLabel} />
    </>
  );
}
