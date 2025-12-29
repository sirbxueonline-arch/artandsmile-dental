"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { container, fadeUp } from "../lib/animations";

const cardVariants = {
  rest: { y: 0 },
  hover: { y: -8 },
};

const overlayVariants = {
  rest: { opacity: 0, pointerEvents: "none" as const },
  hover: { opacity: 1, pointerEvents: "auto" as const },
};

type TeamProps = {
  content: {
    label: string;
    title: string;
    socialLabels: {
      email: string;
      instagram: string;
      facebook: string;
      linkedin: string;
    };
    members: ReadonlyArray<{
      name: string;
      role: string;
      image: string;
      socials?: {
        instagram?: string;
        facebook?: string;
        linkedin?: string;
      };
    }>;
  };
};

export default function Team({ content }: TeamProps) {
  return (
    <section id="team" className="bg-bg-primary section-padding scroll-mt-24">
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
            className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {content.members.map((member) => {
              const hasSocials = Boolean(
                member.socials?.instagram ||
                  member.socials?.facebook ||
                  member.socials?.linkedin
              );

              return (
                <motion.article
                  key={member.name}
                  variants={fadeUp}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  className="group relative overflow-hidden rounded-3xl border border-divider bg-surface p-4 shadow-soft"
                >
                  <motion.div
                    variants={cardVariants}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        unoptimized
                        className="object-cover"
                        sizes="(min-width: 1024px) 20vw, (min-width: 768px) 40vw, 90vw"
                      />
                    </div>
                    <div className="mt-5">
                      <h3 className="text-lg font-semibold text-text-primary">
                        {member.name}
                      </h3>
                      {member.role ? (
                        <p className="mt-1 text-sm text-text-secondary">
                          {member.role}
                        </p>
                      ) : null}
                    </div>
                  </motion.div>
                  {hasSocials ? (
                    <motion.div
                      variants={overlayVariants}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex items-end justify-between rounded-3xl bg-text-primary/70 p-5"
                    >
                      <div className="flex gap-3">
                        {member.socials?.instagram && (
                          <a
                            href={member.socials.instagram}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${content.socialLabels.instagram}: ${member.name}`}
                            className="rounded-full bg-surface/90 p-2 text-text-primary"
                          >
                            <Instagram size={16} />
                          </a>
                        )}
                        {member.socials?.facebook && (
                          <a
                            href={member.socials.facebook}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${content.socialLabels.facebook}: ${member.name}`}
                            className="rounded-full bg-surface/90 p-2 text-text-primary"
                          >
                            <Facebook size={16} />
                          </a>
                        )}
                        {member.socials?.linkedin && (
                          <a
                            href={member.socials.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${content.socialLabels.linkedin}: ${member.name}`}
                            className="rounded-full bg-surface/90 p-2 text-text-primary"
                          >
                            <Linkedin size={16} />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ) : null}
                </motion.article>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
