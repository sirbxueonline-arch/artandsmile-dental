"use client";

import { useState } from "react";
import Header from "../../components/Header";
import Team from "../../components/Team";
import Footer from "../../components/Footer";
import FloatingContact from "../../components/FloatingContact";
import { content, type Locale } from "../../lib/data";

export default function StaffPage() {
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
        <Team key={`staff-${locale}`} content={copy.staff} />
      </main>
      <Footer navLinks={copy.navLinks} content={copy.footer} />
      <FloatingContact label={copy.floating.whatsappLabel} />
    </>
  );
}
