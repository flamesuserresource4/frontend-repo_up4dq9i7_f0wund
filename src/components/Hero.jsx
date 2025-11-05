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
      <div className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_140px_50px_rgba(0,0,0,0.55)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-1 text-xs uppercase tracking-widest text-violet-300/90 backdrop-blur">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-violet-300" />
          Modern Magic World
        </div>

        <h1 className="font-extrabold tracking-tight text-white drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]" style={{ fontFamily: 'Mona Sans, Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif' }}>
          <span className="block text-3xl sm:text-5xl md:text-6xl">Linggar Bhakti Pratama</span>
          <span className="mt-2 block text-xl font-semibold text-violet-300 sm:text-2xl md:text-3xl">Full‑Stack .NET Engineer • Blazor • .NET MAUI • Automation • Unity</span>
        </h1>

        <p className="mt-4 max-w-2xl text-balance text-sm text-white/85 md:text-base">
          Crafting responsive, production‑ready experiences with ASP.NET Core, Blazor, and MAUI. Bringing quality to life with Selenium, Appium, and Playwright — and a sprinkle of game‑like magic.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-md bg-violet-400 px-5 py-3 font-semibold text-neutral-900 shadow-[0_4px_0_#4c2b8b] transition hover:translate-y-[1px] hover:shadow-[0_3px_0_#4c2b8b] active:translate-y-[2px] active:shadow-[0_2px_0_#4c2b8b]"
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
