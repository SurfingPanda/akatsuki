"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

const EMBERS = Array.from({ length: 16 }, (_, i) => ({
  left: `${(i * 61) % 100}%`,
  duration: `${11 + (i % 7)}s`,
  delay: `${-(i * 1.7)}s`,
}));

export function Background() {
  const { scrollYProgress } = useScroll();

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      <motion.div
        style={{ scale: imageScale, y: imageY }}
        className="absolute inset-0"
      >
        <Image
          src="/images/akatsuki-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_30%]"
        />
      </motion.div>

      {/* legibility scrim — lighter near the top, solid by mid-page */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,color-mix(in_oklch,var(--background),transparent_35%)_0%,color-mix(in_oklch,var(--background),transparent_15%)_45%,var(--background)_85%)]" />

      <div className="absolute inset-0">
        {EMBERS.map((ember, i) => (
          <span
            key={i}
            className="animate-ember absolute bottom-0 block size-[3px] rounded-full bg-primary/70"
            style={{
              left: ember.left,
              animationDuration: ember.duration,
              animationDelay: ember.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
}
