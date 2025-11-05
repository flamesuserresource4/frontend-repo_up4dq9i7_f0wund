import React from 'react';
import { Rocket } from 'lucide-react';

export default function RetroFooter() {
  return (
    <footer className="relative z-10 mt-20 w-full border-t border-white/10 bg-gradient-to-b from-neutral-900 to-neutral-950">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-amber-400 text-neutral-900 shadow-[0_3px_0_#8a5a00]">
              <Rocket className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold text-white">.NET Portfolio</p>
              <p className="text-xs text-white/60">Built with love, pixels, and pipeline green checks.</p>
            </div>
          </div>
          <p className="text-xs text-white/50">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
