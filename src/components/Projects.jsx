import React from 'react';
import { Code, Smartphone, TestTube, Gamepad2 } from 'lucide-react';

const projects = [
  {
    title: 'Full‑Stack .NET Platform',
    icon: Code,
    description:
      'Modular ASP.NET Core + EF Core + Azure deployment. Clean Architecture with CQRS and Domain Events.',
    tags: ['ASP.NET Core', 'EF Core', 'Azure', 'CI/CD'],
    link: '#',
  },
  {
    title: 'Blazor UI Components',
    icon: Code,
    description:
      'Reusable Blazor components with server + WebAssembly hosting, SSR hydration, and dark mode themes.',
    tags: ['Blazor', 'Razor', 'SignalR', 'SSR'],
    link: '#',
  },
  {
    title: '.NET MAUI Mobile Suite',
    icon: Smartphone,
    description:
      'Cross‑platform iOS/Android apps with native features, offline sync, and MVVM architecture.',
    tags: ['.NET MAUI', 'MVVM', 'SQLite', 'Notifications'],
    link: '#',
  },
  {
    title: 'Test Automation Lab',
    icon: TestTube,
    description:
      'Unified QA framework running Selenium, Appium, and Playwright with rich reporting and parallel runs.',
    tags: ['Selenium', 'Appium', 'Playwright', 'Allure'],
    link: '#',
  },
  {
    title: 'Unity Retro Mini‑Games',
    icon: Gamepad2,
    description:
      '8‑bit inspired micro experiences with tilemaps, pixel shaders, and satisfying juice.',
    tags: ['Unity', 'C#', 'Shader Graph', '2D'],
    link: '#',
  },
];

function ProjectCard({ title, icon: Icon, description, tags, link }) {
  return (
    <a
      href={link}
      className="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5 text-left shadow-[0_6px_0_#1f1f1f] transition will-change-transform hover:-translate-y-0.5 hover:shadow-[0_8px_0_#1f1f1f]"
    >
      <div>
        <div className="mb-4 inline-flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-lg bg-amber-400/20 text-amber-300 ring-1 ring-amber-300/30">
            <Icon className="h-6 w-6" />
          </span>
          <h3 className="text-lg font-extrabold tracking-tight text-white">{title}</h3>
        </div>
        <p className="text-sm text-white/80">{description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-white/10 bg-black/40 px-2.5 py-1 text-xs text-white/70"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 transition-opacity group-hover:opacity-100" />
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">Highlighted Work</h2>
          <p className="mt-1 text-sm text-white/70">A selection across web, mobile, automation, and game development.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
