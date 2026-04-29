import Image from "next/image";
import FadeUp from "./FadeUp";

const cards = [
  {
    src: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=700&q=85",
    alt: "12-week transformation",
    weeks: "12 Weeks",
    result: "-14 kg · Redefined",
  },
  {
    src: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=700&q=85",
    alt: "Body recomposition",
    weeks: "8 Weeks",
    result: "Body Recomp · Stronger",
  },
  {
    src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=700&q=85",
    alt: "Total transformation",
    weeks: "16 Weeks",
    result: "-18 kg · Total Transformation",
  },
];

export default function Transformations() {
  return (
    <section id="results" className="py-28 px-6 md:px-16 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-3.5 mb-4">
            <span className="w-8 h-px bg-[#C9A96E]" />
            <span className="text-[0.62rem] uppercase tracking-[0.22em] text-[#C9A96E]">
              Transformations
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.4rem,4.5vw,4rem)] font-light leading-[1.1]">
            The Results <em className="italic text-[#E8D5A3]">Speak.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {cards.map((c, i) => (
            <FadeUp key={c.alt} delay={i * 100}>
              <div className="group relative overflow-hidden aspect-[3/4]">
                <Image
                  src={c.src}
                  alt={c.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-7">
                  <span className="text-[0.68rem] uppercase tracking-wider text-[#C9A96E] mb-1.5">
                    {c.weeks}
                  </span>
                  <p className="font-[family-name:var(--font-cormorant)] text-xl font-light">
                    {c.result}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
