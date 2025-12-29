"use client";

import { motion } from "framer-motion";

type FloatingContactProps = {
  label: string;
};

export default function FloatingContact({ label }: FloatingContactProps) {
  return (
    <motion.a
      href="https://api.whatsapp.com/send/?phone=994993568737&text&type=phone_number&app_absent=0"
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-text-primary shadow-lift"
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 10 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6"
        fill="currentColor"
      >
        <path d="M20.52 3.451A11.94 11.94 0 0 0 12.06 0C5.482 0 .152 5.331.151 11.908c0 2.096.547 4.14 1.588 5.945L0 24l6.303-1.654a11.92 11.92 0 0 0 5.757 1.468h.005c6.578 0 11.908-5.331 11.908-11.909 0-3.183-1.24-6.173-3.473-8.454zm-8.46 18.252h-.004a9.87 9.87 0 0 1-5.031-1.379l-.36-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.89-9.884 2.641 0 5.122 1.03 6.988 2.897a9.825 9.825 0 0 1 2.901 6.994c-.003 5.45-4.439 9.885-9.891 9.885zm5.412-7.21c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.149-.198.297-.77.967-.943 1.166-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.074-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.123-.272-.198-.57-.347" />
      </svg>
    </motion.a>
  );
}
