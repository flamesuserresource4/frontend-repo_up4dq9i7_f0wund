import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      {/* 3D Spline cover background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/OIGfFUmCnZ3VD8gH/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient and vignette overlays (don't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-neutral-950" />
      <div className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_120px_40px_rgba(0,0,0,0.45)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-1 text-xs uppercase tracking-widest text-amber-300/90 backdrop-blur">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-amber-300" />
          Retro Mode: Mario Vibes
        </div>

        <h1 className="font-extrabold tracking-tight text-white drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]" style={{ fontFamily: 'Mona Sans, Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif' }}>
          <span className="block text-4xl sm:text-5xl md:text-6xl">Full‑Stack .NET Developer</span>
          <span className="mt-2 block text-2xl font-semibold text-amber-300 sm:text-3xl md:text-4xl">Blazor • .NET MAUI • Test Automation • Unity</span>
        </h1>

        <p className="mt-4 max-w-2xl text-balance text-sm text-white/80 md:text-base">
          Building end‑to‑end apps with ASP.NET Core, Blazor, and MAUI. Automating quality with Selenium, Appium, and Playwright. Crafting playful experiences in Unity with a nostalgic, pixel‑perfect touch.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-md bg-amber-400 px-5 py-3 font-semibold text-neutral-900 shadow-[0_4px_0_#8a5a00] transition hover:translate-y-[1px] hover:shadow-[0_3px_0_#8a5a00] active:translate-y-[2px] active:shadow-[0_2px_0_#8a5a00]"
          >
            <Rocket className="h-5 w-5 transition-transform group-hover:-rotate-12" />
            View Projects
          </a>
          <a
            href="https://github.com/" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-black/50 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-black/70"
          >
            <Github className="h-5 w-5" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-black/50 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-black/70"
          >
            <Linkedin className="h-5 w-5" /> LinkedIn
          </a>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-black/50 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-black/70"
          >
            <Mail className="h-5 w-5" /> Contact
          </a>
        </div>
      </div>
    </section>
  );
}
