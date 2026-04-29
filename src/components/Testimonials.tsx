"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const screenshots = [
  {
    src: "/dovolni1.jpg",
    alt: "Client feedback — meal plan appreciation",
  },
  {
    src: "/dovolni2.jpg",
    alt: "Client feedback — training results",
  },
  {
    src: "/dovolni3.jpg",
    alt: "Client feedback — gym excitement",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" ref={ref} className="py-28 px-6 md:px-16 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3.5 mb-4">
            <span className="w-8 h-px bg-[#C9A96E]" />
            <span className="text-[0.62rem] uppercase tracking-[0.22em] text-[#C9A96E]">
              Client Love
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.4rem,4.5vw,4rem)] font-light leading-[1.1]">
            Real Messages,{" "}
            <em className="italic text-[#E8D5A3]">Real Results.</em>
          </h2>
          <p className="text-sm text-white/45 mt-4 max-w-md">
            Unfiltered feedback from women Mariya has trained — straight from WhatsApp.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {screenshots.map((s, i) => (
            <motion.div
              key={s.src}
              className="group relative"
              initial={{ opacity: 0, y: 50, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
              animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ duration: 0.75, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, rotate: 0 }}
            >
              {/* Phone frame */}
              <div className="relative rounded-[28px] overflow-hidden border border-[#C9A96E]/20 shadow-[0_8px_60px_rgba(0,0,0,0.6)] bg-white">
                {/* Notch bar */}
                <div className="bg-white px-6 pt-3 pb-1 flex items-center justify-between">
                  <span className="text-[0.55rem] text-black/30 font-medium">9:41</span>
                  <div className="w-16 h-3 bg-black rounded-full" />
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, j) => (
                      <div key={j} className="w-1 h-1 rounded-full bg-black/30" />
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <Image
                    src={s.src}
                    alt={s.alt}
                    width={400}
                    height={520}
                    className="w-full h-auto object-contain"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>

              {/* Gold glow on hover */}
              <div className="absolute inset-0 rounded-[28px] border border-[#C9A96E]/0 group-hover:border-[#C9A96E]/40 transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
