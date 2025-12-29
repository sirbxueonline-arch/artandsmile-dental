"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { ease } from "../lib/animations";
import type { Locale } from "../lib/data";
import { locales } from "../lib/data";

type NavLink = {
  label: string;
  href: string;
};

type HeaderProps = {
  navLinks: ReadonlyArray<NavLink>;
  cta: string;
  tagline?: string;
  onTaglineClick?: () => void;
  labels: {
    menu: string;
    language: string;
  };
  teamMenu?: {
    items: ReadonlyArray<NavLink>;
  };
  servicesMenu?: {
    groups: ReadonlyArray<{ title: string; items: ReadonlyArray<string> }>;
  };
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
};

export default function Header({
  navLinks,
  cta,
  tagline,
  onTaglineClick,
  labels,
  teamMenu,
  servicesMenu,
  locale,
  onLocaleChange,
}: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [languageOpen, setLanguageOpen] = useState(false);
  const flagMap: Record<Locale, { src: string; alt: string }> = {
    az: { src: "/brand/AZ.png", alt: "Azerbaijan flag" },
    en: { src: "/brand/EN.png", alt: "United Kingdom flag" },
    ru: { src: "/brand/RU.png", alt: "Russia flag" },
  };
  const handleLocaleChange = (nextLocale: Locale) => {
    onLocaleChange(nextLocale);
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease }}
      className="fixed top-0 z-50 w-full border-b border-divider bg-surface shadow-[0_12px_30px_rgb(var(--text-primary)/0.08)]"
    >
      <div className="container-base flex h-[72px] items-center gap-6 lg:h-[80px]">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center">
            <Logo variant="full" className="h-10 w-44 sm:h-12 sm:w-52" priority />
          </Link>
          {tagline ? (
            <>
              <span className="hidden h-6 w-px bg-divider sm:inline-block" />
              {onTaglineClick ? (
                <button
                  type="button"
                  onClick={onTaglineClick}
                  className="hidden text-xs uppercase tracking-[0.24em] text-text-secondary transition hover:text-text-primary sm:inline-block"
                >
                  {tagline}
                </button>
              ) : (
                <span className="hidden text-xs uppercase tracking-[0.24em] text-text-secondary sm:inline-block">
                  {tagline}
                </span>
              )}
            </>
          ) : null}
        </div>
        <div className="ml-auto hidden items-center gap-6 lg:flex">
          <nav className="flex items-center gap-7 text-sm text-text-secondary">
            {navLinks.map((link) => {
              const isServices = link.href.includes("#services");
              const isTeam = link.href.includes("#team");
              const hasMenu = (isServices && servicesMenu) || (isTeam && teamMenu);
              const isOpen = activeMenu === link.href;

              if (!hasMenu) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group relative whitespace-nowrap px-1 py-1 transition-colors duration-300 hover:text-text-primary"
                  >
                    {link.label}
                    <span className="absolute left-0 right-0 -bottom-1 h-px bg-accent/0 transition-colors duration-300 group-hover:bg-accent/70" />
                  </Link>
                );
              }

              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(link.href)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    href={link.href}
                    aria-expanded={isOpen}
                    className={`group relative flex items-center gap-1 whitespace-nowrap px-1 py-1 transition-colors duration-300 ${
                      isOpen ? "text-accent" : "hover:text-text-primary"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-accent" : ""
                      }`}
                    />
                    <span className="absolute left-0 right-0 -bottom-1 h-px bg-accent/0 transition-colors duration-300 group-hover:bg-accent/70" />
                  </Link>
                  <AnimatePresence>
                    {isOpen && isServices && servicesMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.25, ease }}
                        className="absolute left-0 top-full z-50 mt-4 w-[min(760px,90vw)] rounded-[26px] border border-divider bg-bg-secondary/95 p-6 shadow-[0_30px_80px_rgb(var(--text-primary)/0.14)] backdrop-blur"
                      >
                        <div className="grid gap-6 sm:grid-cols-3">
                          {servicesMenu.groups.map((group) => (
                            <div key={group.title} className="space-y-3">
                              <h3 className="text-sm font-semibold text-text-primary">
                                {group.title}
                              </h3>
                              <ul className="space-y-2 text-xs text-text-secondary">
                                {group.items.map((item) => (
                                  <li
                                    key={item}
                                    className="rounded-lg px-2 py-1 transition-colors hover:bg-surface/80 hover:text-text-primary"
                                  >
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                    {isOpen && isTeam && teamMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.2, ease }}
                        className="absolute left-0 top-full z-50 mt-3 w-44 rounded-2xl border border-divider bg-surface p-2 shadow-[0_24px_60px_rgb(var(--text-primary)/0.12)]"
                      >
                        <div className="space-y-1 text-sm text-text-secondary">
                          {teamMenu.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block rounded-xl px-3 py-2 transition-colors hover:bg-bg-secondary hover:text-text-primary"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>
          <div
            className="relative"
            onMouseEnter={() => setLanguageOpen(true)}
            onMouseLeave={() => setLanguageOpen(false)}
          >
            <button
              type="button"
              aria-label={labels.language}
              aria-expanded={languageOpen}
              onClick={() => setLanguageOpen((prev) => !prev)}
              className="flex items-center gap-2 rounded-full border border-divider bg-surface px-3 py-1 text-sm text-text-secondary shadow-[0_10px_24px_rgb(var(--text-primary)/0.08)] transition hover:text-text-primary"
            >
              <span className="relative h-4 w-4 overflow-hidden rounded-full">
                <Image
                  src={flagMap[locale].src}
                  alt={flagMap[locale].alt}
                  fill
                  sizes="16px"
                  className="object-cover"
                />
              </span>
              <span className="text-sm">{locale.toLowerCase()}</span>
              <ChevronDown size={12} />
            </button>
            <AnimatePresence>
              {languageOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-full z-50 mt-3 w-24 rounded-2xl border border-divider bg-surface p-1 shadow-[0_18px_40px_rgb(var(--text-primary)/0.12)]"
                >
                  {locales
                    .filter((language) => language.code !== locale)
                    .map((language) => {
                      const isActive = locale === language.code;
                      return (
                        <button
                          key={language.code}
                          type="button"
                          onClick={() => handleLocaleChange(language.code)}
                          aria-pressed={isActive}
                          className={`flex w-full items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm transition ${
                            isActive
                              ? "bg-accent text-text-primary"
                              : "text-text-secondary hover:bg-bg-secondary hover:text-text-primary"
                          }`}
                        >
                          <span className="relative h-4 w-4 overflow-hidden rounded-full">
                            <Image
                              src={flagMap[language.code].src}
                              alt={flagMap[language.code].alt}
                              fill
                              sizes="16px"
                              className="object-cover"
                            />
                          </span>
                          {language.label}
                        </button>
                      );
                    })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link
            href="#contact"
            className="rounded-full bg-accent px-5 py-2 text-sm text-text-primary shadow-soft transition-all duration-300 hover:bg-accent-hover hover:shadow-lift"
          >
            {cta}
          </Link>
        </div>
        <button
          type="button"
          aria-label={labels.menu}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex items-center justify-center rounded-full border border-divider p-2 text-text-primary transition-colors duration-300 hover:border-accent lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="border-t border-divider bg-bg-primary/95 shadow-[0_8px_24px_rgb(var(--accent)/0.18)] backdrop-blur lg:hidden"
          >
            <div className="container-base flex flex-col gap-4 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base text-text-secondary transition-colors duration-300 hover:text-text-primary"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {teamMenu?.items?.length
                ? teamMenu.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="pl-2 text-sm text-text-secondary transition-colors duration-300 hover:text-text-primary"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))
                : null}
              <div className="flex items-center justify-between rounded-full border border-divider bg-surface px-4 py-2">
                <span className="text-xs uppercase tracking-[0.2em] text-text-secondary">
                  {labels.language}
                </span>
                <div className="flex items-center gap-2">
                  {locales.map((language) => {
                    const isActive = locale === language.code;
                    return (
                      <button
                        key={language.code}
                        type="button"
                        onClick={() => handleLocaleChange(language.code)}
                        aria-pressed={isActive}
                        className={`flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium transition ${
                          isActive
                            ? "bg-accent text-text-primary"
                            : "text-text-secondary hover:text-text-primary"
                        }`}
                      >
                        <span className="relative h-4 w-4 overflow-hidden rounded-full">
                          <Image
                            src={flagMap[language.code].src}
                            alt={flagMap[language.code].alt}
                            fill
                            sizes="16px"
                            className="object-cover"
                          />
                        </span>
                        {language.label}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-3 pt-2">
                <Link
                  href="#contact"
                  className="rounded-full bg-accent px-5 py-2 text-center text-sm text-text-primary transition-colors duration-300 hover:bg-accent-hover"
                  onClick={() => setOpen(false)}
                >
                  {cta}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
