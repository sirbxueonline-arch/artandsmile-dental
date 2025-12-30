"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { container, fadeUp } from "../lib/animations";

type ContactProps = {
  content: {
    label: string;
    title: string;
    description: string;
    statusMessages: {
      sending: string;
      success: string;
      error: string;
      genericError: string;
    };
    form: {
      nameLabel: string;
      namePlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      cta: string;
    };
    details: {
      title: string;
      address: string;
      hours: string;
      phone: string;
      email: string;
      note: string;
    };
  };
};

export default function Contact({ content }: ContactProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [statusMessage, setStatusMessage] = useState("");
  const { statusMessages } = content;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setStatusMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        setStatus("error");
        setStatusMessage(statusMessages.error);
        return;
      }

      event.currentTarget.reset();
      setStatus("success");
      setStatusMessage(statusMessages.success);
    } catch (error) {
      setStatus("error");
      setStatusMessage(statusMessages.genericError);
    }
  };

  return (
    <section id="contact" className="bg-bg-secondary section-padding scroll-mt-24">
      <div className="container-base">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div>
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
          <motion.p
            variants={fadeUp}
            className="mt-4 text-sm leading-relaxed text-text-secondary"
          >
            {content.description}
          </motion.p>
            <motion.form
              variants={container}
              className="mt-10 space-y-5"
              onSubmit={handleSubmit}
            >
              <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-text-secondary">
                  {content.form.nameLabel}
                  <input
                    type="text"
                    name="name"
                    placeholder={content.form.namePlaceholder}
                    required
                    className="mt-2 w-full rounded-full border border-divider bg-surface px-4 py-3 text-sm text-text-primary outline-none transition focus:border-accent"
                  />
                </label>
                <label className="text-sm text-text-secondary">
                  {content.form.phoneLabel}
                  <input
                    type="tel"
                    name="phone"
                    placeholder={content.form.phonePlaceholder}
                    className="mt-2 w-full rounded-full border border-divider bg-surface px-4 py-3 text-sm text-text-primary outline-none transition focus:border-accent"
                  />
                </label>
              </motion.div>
              <motion.div variants={fadeUp}>
                <label className="text-sm text-text-secondary">
                  {content.form.emailLabel}
                  <input
                    type="email"
                    name="email"
                    placeholder={content.form.emailPlaceholder}
                    required
                    className="mt-2 w-full rounded-full border border-divider bg-surface px-4 py-3 text-sm text-text-primary outline-none transition focus:border-accent"
                  />
                </label>
              </motion.div>
              <motion.div variants={fadeUp}>
                <label className="text-sm text-text-secondary">
                  {content.form.messageLabel}
                  <textarea
                    name="message"
                    rows={4}
                    placeholder={content.form.messagePlaceholder}
                    required
                    className="mt-2 w-full rounded-3xl border border-divider bg-surface px-4 py-3 text-sm text-text-primary outline-none transition focus:border-accent"
                  />
                </label>
              </motion.div>
              <motion.button
                variants={fadeUp}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-text-primary shadow-soft transition-colors duration-300 hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-70"
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? statusMessages.sending : content.form.cta}
              </motion.button>
              {statusMessage ? (
                <p
                  className={`text-sm ${
                    status === "error" ? "text-red-600" : "text-text-secondary"
                  }`}
                  role="status"
                >
                  {statusMessage}
                </p>
              ) : null}
            </motion.form>
          </div>
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-divider bg-surface p-8 shadow-soft"
          >
            <h3 className="text-xl font-semibold text-text-primary">
              {content.details.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              {content.details.address}
              <br />
              {content.details.hours}
            </p>
            <div className="mt-6 space-y-3 text-sm text-text-secondary">
              <p>{content.details.phone}</p>
              <p>{content.details.email}</p>
            </div>
            <div className="mt-8 rounded-2xl bg-bg-secondary p-6">
              <p className="text-sm text-text-secondary">
                {content.details.note}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
