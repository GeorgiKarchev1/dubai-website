"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const photos = [
  { src: "/img1.jpg", label: "Dubai Active Summit" },
  { src: "/img2.jpg", label: "In Motion" },
];

const videos = [
  { src: "/jenavideo2.mp4", label: "Strength Session" },
  { src: "/jenavideo3.mp4", label: "Full Body Burn" },
];

export default function PhotoReel() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 px-6 md:px-16 bg-[#111111]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex items-end justify-between mb-12 flex-wrap gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="flex items-center gap-3.5 mb-3">
              <span className="w-8 h-px bg-[#C9A96E]" />
              <span className="text-[0.62rem] uppercase tracking-[0.22em] text-[#C9A96E]">
                Mariya in Action
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2rem,3.5vw,3.2rem)] font-light">
              See the <em className="italic text-[#E8D5A3]">Energy</em>
            </h2>
          </div>
        </motion.div>

        {/* Grid: 2 photos + 2 videos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {photos.map((p, i) => (
            <motion.div
              key={p.src}
              className="group relative overflow-hidden aspect-[3/4]"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={p.src}
                alt={p.label}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <span className="text-[0.68rem] uppercase tracking-wider text-[#C9A96E]">
                  {p.label}
                </span>
              </div>
              {/* Gold corner accent */}
              <div className="absolute top-0 left-0 w-8 h-px bg-[#C9A96E] opacity-60" />
              <div className="absolute top-0 left-0 w-px h-8 bg-[#C9A96E] opacity-60" />
            </motion.div>
          ))}

          {videos.map((v, i) => (
            <motion.div
              key={v.src}
              className="group relative overflow-hidden aspect-[3/4]"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              >
                <source src={v.src} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              {/* Play badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/30 flex items-center justify-center backdrop-blur-sm opacity-70 group-hover:opacity-0 transition-opacity">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-5 flex items-center justify-between">
                <span className="text-[0.68rem] uppercase tracking-wider text-[#C9A96E]">
                  {v.label}
                </span>
                <span className="text-[0.6rem] text-white/50 uppercase tracking-wider">Live</span>
              </div>
              {/* Gold corner */}
              <div className="absolute top-0 right-0 w-8 h-px bg-[#C9A96E] opacity-60" />
              <div className="absolute top-0 right-0 w-px h-8 bg-[#C9A96E] opacity-60" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
