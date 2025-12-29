"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Instagram } from "lucide-react";
import Logo from "./Logo";
import { container, fadeUp } from "../lib/animations";

type NavLink = {
  label: string;
  href: string;
};

type FooterProps = {
  navLinks: ReadonlyArray<NavLink>;
  content: {
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    rights: string;
    developer: string;
  };
};

export default function Footer({ navLinks, content }: FooterProps) {
  return (
    <footer className="bg-bg-secondary pb-10 pt-16">
      <div className="container-base">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          className="rounded-3xl border border-divider bg-surface p-8 shadow-soft"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <motion.h2
                variants={fadeUp}
                className="text-2xl font-semibold text-text-primary"
              >
                {content.title}
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-2 text-sm text-text-secondary"
              >
                {content.description}
              </motion.p>
            </div>
            <motion.div variants={fadeUp} className="flex gap-4">
              <Link
                href="#contact"
                className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-text-primary transition-colors duration-300 hover:bg-accent-hover"
              >
                {content.primaryCta}
              </Link>
              <Link
                href="#services"
                className="rounded-full border border-divider px-6 py-3 text-sm font-medium text-text-primary transition-colors duration-300 hover:border-accent"
              >
                {content.secondaryCta}
              </Link>
            </motion.div>
          </div>
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col gap-6 border-t border-divider pt-8 text-sm text-text-secondary lg:flex-row lg:items-center lg:justify-between"
          >
            <div className="flex items-center">
              <Logo variant="full" className="h-10 w-48" />
            </div>
            <div className="flex flex-wrap gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors duration-300 hover:text-text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/artandsmiledental/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="rounded-full border border-divider p-2 text-text-primary transition-colors duration-300 hover:border-accent"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/artandsmiledental"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="rounded-full border border-divider p-2 text-text-primary transition-colors duration-300 hover:border-accent"
              >
                <Facebook size={16} />
              </a>
            </div>
          </motion.div>
        </motion.div>
        <div className="mt-8 text-center text-xs uppercase tracking-[0.2em] text-text-secondary">
          {content.rights}
        </div>
        <div className="mt-3 text-center text-xs text-text-secondary">
          {content.developer}
        </div>
      </div>
    </footer>
  );
}
