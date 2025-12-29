"use client";

import Image from "next/image";

type LogoVariant = "full" | "mark";

type LogoProps = {
  variant?: LogoVariant;
  className?: string;
  priority?: boolean;
};

const logoMap: Record<LogoVariant, { src: string; alt: string }> = {
  full: {
    src: "/brand/art-smile-logo-full.png",
    alt: "Art & Smile Dental Clinic logo",
  },
  mark: {
    src: "/brand/art-smile-logo-mark.png",
    alt: "Art & Smile logo",
  },
};

export default function Logo({
  variant = "mark",
  className = "h-10 w-40",
  priority = false,
}: LogoProps) {
  const { src, alt } = logoMap[variant];

  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        unoptimized
        className="object-contain"
        sizes="(min-width: 1024px) 180px, 140px"
      />
    </div>
  );
}
