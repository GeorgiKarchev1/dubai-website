"use client";

import { motion } from "framer-motion";
import { waLink } from "@/lib/constants";

const words = ["Train Hard.", "Live Beautifully.", "Own Dubai."];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[700px] flex items-end overflow-hidden"
    >
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/jenavideo.mp4" type="video/mp4" />
        </video>
        {/* Dark overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/96" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/15 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-10 md:px-16 pb-20 md:pb-24 max-w-3xl">
        <motion.div
          className="flex items-center gap-4 mb-5"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.span
            className="h-px bg-[#C9A96E]"
            initial={{ width: 0 }}
            animate={{ width: 40 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          <span className="text-[0.65rem] uppercase tracking-[0.22em] text-[#C9A96E]">
            Elite Personal Training · Dubai
          </span>
        </motion.div>

        <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(3rem,7vw,6.5rem)] font-light leading-[1.05] mb-6">
          {words.map((word, i) => (
            <motion.span
              key={word}
              className={`block ${i === 1 ? "italic text-[#E8D5A3]" : ""}`}
              initial={{ opacity: 0, y: 60, skewY: 4 }}
              animate={{ opacity: 1, y: 0, skewY: 0 }}
              transition={{ duration: 0.9, delay: 0.6 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="text-base leading-relaxed text-white/65 max-w-md mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          Personalized coaching built around your goals, your lifestyle, and the
          standard Dubai demands. Nutrition, training, and mindset — all in one.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.25 }}
        >
          <motion.a
            href={waLink("Hi Mariya! I'd like to start my fitness journey with you.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#C9A96E] text-black text-[0.72rem] uppercase tracking-wider font-semibold"
            whileHover={{ scale: 1.03, backgroundColor: "#E8D5A3" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <WhatsAppIcon />
            Start Now — Free Consult
          </motion.a>
          <motion.a
            href="#services"
            className="inline-flex items-center gap-2.5 px-8 py-4 border border-white/40 text-white text-[0.72rem] uppercase tracking-wider"
            whileHover={{ borderColor: "#C9A96E", color: "#C9A96E", x: 4 }}
            transition={{ duration: 0.2 }}
          >
            View Programs ↓
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-9 right-10 flex flex-col items-center gap-2 opacity-50">
        <div
          className="w-px h-14 bg-gradient-to-b from-[#C9A96E] to-transparent"
          style={{ animation: "scrollLine 2s ease-in-out infinite" }}
        />
        <span
          className="text-[0.58rem] uppercase tracking-[0.2em] text-white/60"
          style={{ writingMode: "vertical-lr" }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
