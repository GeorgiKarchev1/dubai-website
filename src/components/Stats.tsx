"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { num: 200, suffix: "+", label: "Clients Transformed" },
  { num: 5, suffix: "+", label: "Years in Dubai" },
  { num: 98, suffix: "%", label: "Client Retention" },
  { num: 3, suffix: "", label: "Certified Specializations" },
];

function Counter({ target, suffix, start }: { target: number; suffix: string; start: boolean }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!start || started.current) return;
    started.current = true;
    let current = 0;
    const step = Math.ceil(target / 50);
    const id = setInterval(() => {
      current = Math.min(current + step, target);
      setCount(current);
      if (current >= target) clearInterval(id);
    }, 28);
    return () => clearInterval(id);
  }, [start, target]);

  return <>{count}{suffix}</>;
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      className="bg-[#111111] border-y border-[#C9A96E]/15 py-12 px-10 flex flex-wrap justify-around gap-8"
    >
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="font-[family-name:var(--font-cormorant)] text-5xl font-light text-[#C9A96E] leading-none tabular-nums">
            <Counter target={s.num} suffix={s.suffix} start={inView} />
          </div>
          <div className="text-[0.68rem] uppercase tracking-[0.15em] text-white/45 mt-2">
            {s.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
