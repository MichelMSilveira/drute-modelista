"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/20 bg-[#F7F4EF]/35 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div>
              <span className="block font-serif text-2xl tracking-wide text-[#111111]">
                D&apos;Rute
              </span>

              <span className="block text-[10px] uppercase tracking-[0.35em] text-[#7A5D3A]">
                Atelier
              </span>
            </div>
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden items-center gap-8 md:flex">
            {[
              ["Experiência", "#experiencia"],
              ["Serviços", "#servicos"],
              ["Processo", "#processo"],
              ["Portfólio", "#portfolio"],
              ["Contato", "#contato"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="text-xs uppercase tracking-[0.25em] text-[#3A3A3A] transition hover:text-[#111111]"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile Button */}
          <button
            type="button"
            className="rounded-full border border-[#B99A6A]/50 bg-[#F7F2EA]/40 p-3 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="space-y-1">
              <span className="block h-px w-5 bg-[#111111]" />
              <span className="block h-px w-5 bg-[#111111]" />
              <span className="block h-px w-5 bg-[#111111]" />
            </div>
          </button>
        </div>

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <div className="absolute left-0 right-0 top-20 border-b border-black/10 bg-[#F7F4EF]/80 p-6 backdrop-blur-md md:hidden">
            <nav className="flex flex-col gap-5">
              {[
                ["Experiência", "#experiencia"],
                ["Serviços", "#servicos"],
                ["Processo", "#processo"],
                ["Portfólio", "#portfolio"],
                ["Contato", "#contato"],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm uppercase tracking-[0.25em] text-[#3A3A3A]"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        )}

      </div>
    </header>
  );
}