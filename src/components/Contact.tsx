"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, FormEvent } from "react";
import { waLink, INSTAGRAM } from "@/lib/constants";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name") as string;
    const phone = fd.get("phone") as string;
    const program = fd.get("program") as string;
    const goal = fd.get("goal") as string;
    const msg = `Hi Mariya! My name is ${name}.\n\nI'm interested in: ${program || "your coaching programs"}\n\nMy goal: ${goal}\n\nMy number: ${phone}`;
    window.open(waLink(msg), "_blank");
  }

  return (
    <section id="contact" ref={ref} className="grid md:grid-cols-2">
      {/* Left — image + info */}
      <motion.div
        className="relative min-h-[600px]"
        initial={{ opacity: 0, x: -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=1000&q=85"
          alt="Contact Mariya"
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Strong overlay so ALL text is readable */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/60" />

        <div className="absolute inset-0 z-10 p-14 md:p-16 flex flex-col justify-center">
          <div className="flex items-center gap-3.5 mb-4">
            <span className="w-8 h-px bg-[#C9A96E]" />
            <span className="text-[0.62rem] uppercase tracking-[0.22em] text-[#C9A96E]">
              Get Started
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.2rem,4vw,3.5rem)] font-light leading-[1.1] mb-5 text-white">
            Let&apos;s Build Your{" "}
            <em className="italic text-[#E8D5A3]">Best Body.</em>
          </h2>
          <p className="text-sm leading-relaxed text-white/70 mb-10 max-w-xs">
            Ready to transform? Book a free 30-minute consultation and let&apos;s
            map out exactly what it takes to reach your goals.
          </p>

          <div className="flex flex-col gap-5">
            <ContactItem icon={<WhatsAppIcon />} label="WhatsApp">
              <a
                href={waLink("Hi Mariya! I'd like to book a free consultation.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white hover:text-[#C9A96E] transition-colors"
              >
                Message Mariya Now
              </a>
            </ContactItem>
            <ContactItem icon={<InstagramIcon />} label="Instagram">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white hover:text-[#C9A96E] transition-colors"
              >
                @mariya.fit.dxb
              </a>
            </ContactItem>
            <ContactItem icon={<LocationIcon />} label="Location">
              <p className="text-sm text-white">Dubai, United Arab Emirates</p>
            </ContactItem>
          </div>
        </div>
      </motion.div>

      {/* Right — form */}
      <motion.div
        className="bg-[#1A1A1A] p-14 md:p-16 flex flex-col justify-center"
        initial={{ opacity: 0, x: 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-light mb-9 text-white">
          Book a Free Consultation
        </h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-4">
            <Field label="First Name" name="name" placeholder="Sarah" required />
            <Field label="Last Name" name="lastname" placeholder="Al Rashid" required />
          </div>
          <Field label="WhatsApp Number" name="phone" type="tel" placeholder="+971 50 000 0000" required />
          <div>
            <label className="block text-[0.63rem] uppercase tracking-[0.15em] text-white/50 mb-2">
              Program Interest
            </label>
            <select
              name="program"
              className="w-full bg-white/[0.06] border border-white/15 px-4 py-3.5 text-white text-sm outline-none focus:border-[#C9A96E] transition-colors appearance-none cursor-pointer"
            >
              <option value="" className="bg-[#1A1A1A]">Select a program</option>
              <option className="bg-[#1A1A1A]">1-on-1 Personal Training</option>
              <option className="bg-[#1A1A1A]">Online Coaching</option>
              <option className="bg-[#1A1A1A]">Nutrition &amp; Meal Planning</option>
              <option className="bg-[#1A1A1A]">12-Week Transformation</option>
              <option className="bg-[#1A1A1A]">Bridal &amp; Event Prep</option>
              <option className="bg-[#1A1A1A]">Group Training</option>
            </select>
          </div>
          <div>
            <label className="block text-[0.63rem] uppercase tracking-[0.15em] text-white/50 mb-2">
              Your Goal
            </label>
            <textarea
              name="goal"
              rows={4}
              placeholder="Tell me about your fitness goals and current situation..."
              className="w-full bg-white/[0.06] border border-white/15 px-4 py-3.5 text-white text-sm outline-none focus:border-[#C9A96E] transition-colors resize-none placeholder:text-white/25"
            />
          </div>
          <motion.button
            type="submit"
            className="w-full py-4 bg-[#C9A96E] text-black text-[0.72rem] uppercase tracking-wider font-semibold mt-1"
            whileHover={{ scale: 1.02, backgroundColor: "#E8D5A3" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Send Message on WhatsApp →
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, required }: {
  label: string; name: string; type?: string; placeholder: string; required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[0.63rem] uppercase tracking-[0.15em] text-white/50 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full bg-white/[0.06] border border-white/15 px-4 py-3.5 text-white text-sm outline-none focus:border-[#C9A96E] transition-colors placeholder:text-white/25"
      />
    </div>
  );
}

function ContactItem({ icon, label, children }: {
  icon: React.ReactNode; label: string; children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-11 h-11 border border-[#C9A96E]/40 flex items-center justify-center text-[#C9A96E] flex-shrink-0">
        {icon}
      </div>
      <div>
        <span className="block text-[0.62rem] uppercase tracking-wider text-white/40 mb-0.5">{label}</span>
        {children}
      </div>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
