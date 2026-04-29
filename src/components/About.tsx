"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  "NASM Certified Personal Trainer",
  "Precision Nutrition Coach",
  "Strength & Body Recomposition Specialist",
  "Online & In-Person Training (Dubai)",
  "Arabic & English — بالعربي والإنجليزي",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-28 px-6 md:px-16 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* Images — стак от 3 снимки */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Main portrait */}
          <div className="relative w-full h-[580px]">
            <Image
              src="/img3.jpg"
              alt="Mariya — Elite Fitness Coach Dubai"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Floating small image — bottom right */}
          <motion.div
            className="absolute -bottom-8 -right-8 w-44 h-56 border-4 border-[#0A0A0A] overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/img4.jpg"
              alt="Mariya coaching"
              fill
              className="object-cover object-top"
              sizes="176px"
            />
          </motion.div>

          {/* Gold badge */}
          <motion.div
            className="absolute -top-6 -left-6 w-32 h-32 bg-[#C9A96E] flex flex-col items-center justify-center text-center z-10"
            initial={{ opacity: 0, scale: 0, rotate: -15 }}
            animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200 }}
          >
            <span className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-black leading-none">5★</span>
            <span className="text-[0.5rem] uppercase tracking-wider text-black/70 mt-1 leading-tight px-2">
              Rated Coach<br />in Dubai
            </span>
          </motion.div>

          {/* Gold accent line */}
          <motion.div
            className="absolute top-0 left-0 w-1 bg-[#C9A96E]"
            initial={{ height: 0 }}
            animate={inView ? { height: "40%" } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3.5 mb-4">
            <span className="w-8 h-px bg-[#C9A96E]" />
            <span className="text-[0.62rem] uppercase tracking-[0.22em] text-[#C9A96E]">About Mariya</span>
          </div>

          <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.4rem,4.5vw,4rem)] font-light leading-[1.1] mb-6">
            Your Goals Are{" "}
            <em className="italic text-[#E8D5A3]">Non-Negotiable.</em>
          </h2>

          <p className="text-sm leading-[1.85] text-white/55 mb-4">
            I&apos;m Mariya — Dubai-based certified fitness coach, nutritionist, and
            transformation specialist. I work with women who are serious about
            results without sacrificing balance, beauty, or their lifestyle.
          </p>
          <p className="text-sm leading-[1.85] text-white/55 mb-8">
            Whether you&apos;re starting from zero or breaking through a plateau, my
            approach combines science-backed training with sustainable nutrition
            and real accountability.
          </p>

          <ul className="flex flex-col gap-3.5 mb-10">
            {features.map((f, i) => (
              <motion.li
                key={f}
                className="flex items-center gap-3.5 text-sm text-white/75"
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
              >
                <span className="w-5 h-px bg-[#C9A96E] flex-shrink-0" />
                {f}
              </motion.li>
            ))}
          </ul>

          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#C9A96E] text-black text-[0.72rem] uppercase tracking-wider font-semibold"
            whileHover={{ scale: 1.03, backgroundColor: "#E8D5A3" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Work With Me →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
