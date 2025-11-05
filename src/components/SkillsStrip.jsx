import React from 'react';
import { motion } from 'framer-motion';

const items = [
  'C#',
  '.NET 8',
  'ASP.NET Core',
  'Blazor',
  '.NET MAUI',
  'Entity Framework',
  'Azure',
  'SQL Server',
  'Selenium',
  'Appium',
  'Playwright',
  'Unity',
  'Shader Graph',
  'Docker',
  'GitHub Actions',
];

function Row({ reverse = false, speed = 22 }) {
  const sequence = reverse ? [...items].reverse() : items;
  // Duplicate to create seamless loop
  const loop = [...sequence, ...sequence];

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex gap-6 whitespace-nowrap py-2 text-sm text-white/80"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
      >
        {loop.map((item, idx) => (
          <span
            key={`${item}-${idx}`}
            className="rounded-md border border-white/10 bg-black/40 px-3 py-1"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function SkillsStrip() {
  return (
    <section className="relative z-10 border-y border-white/10 bg-neutral-950/80">
      <div className="mx-auto max-w-6xl px-6 py-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-violet-300/90">Core Stack</p>
        <Row />
        <Row reverse speed={26} />
      </div>
    </section>
  );
}
