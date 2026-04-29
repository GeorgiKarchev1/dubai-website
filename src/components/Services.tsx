"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  { num: "01", title: "1-on-1 Personal Training", desc: "Fully customized sessions at premium Dubai gyms or your preferred location. Every rep, every set — designed around you." },
  { num: "02", title: "Online Coaching", desc: "Transform from anywhere in the world. Complete training plans, nutrition guides, and weekly check-ins with Mariya directly." },
  { num: "03", title: "Nutrition & Meal Planning", desc: "No bland diets. Personalized macros, flexible eating strategies, and cultural foods you love — built into your plan." },
  { num: "04", title: "Body Transformation", desc: "12-week intensive programs engineered for maximum change. Fat loss, muscle tone, posture correction — a complete reinvention." },
  { num: "05", title: "Bridal & Event Prep", desc: "Look and feel your absolute best for the most important moments. Targeted programs starting 8–16 weeks before your event." },
  { num: "06", title: "Group Training", desc: "Small, intimate group sessions with the energy of a community. Train alongside like-minded women in Dubai's best venues." },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-28 px-6 md:px-16 bg-[#111111]">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-16 flex-wrap gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3.5 mb-4">
              <span className="w-8 h-px bg-[#C9A96E]" />
              <span className="text-[0.62rem] uppercase tracking-[0.22em] text-[#C9A96E]">Programs</span>
            </div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.4rem,4.5vw,4rem)] font-light leading-[1.1]">
              Built For<br /><em className="italic text-[#E8D5A3]">Real Results</em>
            </h2>
          </motion.div>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 border border-white/25 text-white text-[0.72rem] uppercase tracking-wider"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ borderColor: "#C9A96E", color: "#C9A96E", x: 4 }}
          >
            View All →
          </motion.a>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#C9A96E]/5">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              className="group bg-[#1A1A1A] hover:bg-[#222] p-12 relative overflow-hidden cursor-default"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Gold reveal line on hover */}
              <motion.div
                className="absolute bottom-0 left-0 h-px bg-[#C9A96E] w-full origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
              />
              <div className="font-[family-name:var(--font-cormorant)] text-6xl font-light text-[#C9A96E]/10 leading-none mb-6 transition-colors group-hover:text-[#C9A96E]/20">
                {s.num}
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-[1.55rem] font-normal mb-3.5 text-white">
                {s.title}
              </h3>
              <p className="text-sm leading-[1.75] text-white/50 group-hover:text-white/65 transition-colors">
                {s.desc}
              </p>
              <motion.div
                className="mt-8 flex items-center gap-2.5 text-[0.68rem] uppercase tracking-wider text-[#C9A96E]"
                initial={{ opacity: 0, x: -8 }}
                whileHover={{ opacity: 1, x: 0 }}
                // shown only inside group via CSS too
              >
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More →
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
