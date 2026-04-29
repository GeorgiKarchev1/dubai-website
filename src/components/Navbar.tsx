"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { waLink, INSTAGRAM } from "@/lib/constants";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#results", label: "Results" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "px-10 py-3.5 bg-[#0a0a0a]/96 backdrop-blur-md border-b border-[#C9A96E]/15"
            : "px-10 py-5"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link
          href="#hero"
          className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold tracking-wider text-[#C9A96E]"
        >
          Mariya
        </Link>

        <ul className="hidden md:flex gap-9 list-none">
          {links.map((l, i) => (
            <motion.li
              key={l.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.07 }}
            >
              <a
                href={l.href}
                className="text-[0.72rem] uppercase tracking-widest text-white/65 hover:text-[#C9A96E] transition-colors"
              >
                {l.label}
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.a
          href={waLink("Hi Mariya! I'd like to book a free consultation.")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex text-[0.72rem] uppercase tracking-wider px-6 py-2.5 border border-[#C9A96E] text-[#C9A96E]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          whileHover={{ backgroundColor: "#C9A96E", color: "#000" }}
        >
          Book Now
        </motion.a>

        <button
          className="md:hidden flex flex-col gap-[5px] cursor-pointer"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <span className="w-6 h-px bg-white block" />
          <span className="w-6 h-px bg-white block" />
          <span className="w-6 h-px bg-white block" />
        </button>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[99] bg-[#0a0a0a] flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-6 right-8 text-3xl text-white bg-transparent border-none cursor-pointer"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-[family-name:var(--font-cormorant)] text-5xl font-light text-white hover:text-[#C9A96E] transition-colors"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.07 }}
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-widest text-[#C9A96E]/60 uppercase mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              @mariya.fit.dxb
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
