import { INSTAGRAM } from "@/lib/constants";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#results", label: "Results" },
  { href: "#testimonials", label: "Reviews" },
  { href: INSTAGRAM, label: "Instagram", external: true },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#C9A96E]/12 px-10 py-12 flex flex-wrap items-center justify-between gap-6">
      <a
        href="#hero"
        className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold tracking-wider text-[#C9A96E]"
      >
        Mariya.fit
      </a>
      <ul className="flex flex-wrap gap-8 list-none">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              className="text-[0.68rem] uppercase tracking-wider text-white/40 hover:text-[#C9A96E] transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-[0.68rem] text-white/25">
        © {new Date().getFullYear()} Mariya Fit Dubai. All rights reserved.
      </p>
    </footer>
  );
}
