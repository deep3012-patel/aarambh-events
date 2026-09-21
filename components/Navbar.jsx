"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Our Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full bg-[#FFFDF8]/90 backdrop-blur-md">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-10">

          {/* LOGO */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="leading-none"
          >
            <div className="font-serif text-3xl tracking-[0.12em] text-[#5A4636]">
              AARAMBH
            </div>

            <div className="mt-1 text-[8px] font-medium tracking-[0.35em] text-[#C9A24A]">
              EVENTS & PRODUCTION
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#5A4636] transition hover:text-[#C9A24A]"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* DESKTOP CONTACT */}
          <Link
            href="/contact"
            className="hidden rounded-full border border-[#C9A24A] px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5A4636] transition duration-300 hover:bg-[#6B0F1A] hover:text-white md:block"
          >
            Let&apos;s Talk
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="text-[#5A4636] md:hidden"
          >
            {menuOpen ? (
              <X size={25} strokeWidth={1.5} />
            ) : (
              <Menu size={25} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 bg-[#FFFDF8] transition-all duration-500 md:hidden ${
          menuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-full opacity-0"
        }`}
      >
        <div className="flex min-h-screen flex-col justify-center px-8">

          {/* SMALL LABEL */}
          <div className="mb-10 flex items-center gap-4">
            <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#6B0F1A]">
              Aarambh Events & Production
            </span>

            <span className="h-px w-12 bg-[#C9A24A]" />
          </div>

          {/* MOBILE LINKS */}
          <div className="flex flex-col">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="group flex items-center justify-between border-b border-[#C9A24A]/20 py-5"
              >
                <div className="flex items-center gap-5">
                  <span className="text-[9px] text-[#C9A24A]">
                    0{index + 1}
                  </span>

                  <span className="font-serif text-4xl text-[#5A4636] transition group-hover:text-[#6B0F1A]">
                    {item.name}
                  </span>
                </div>

                <span className="text-xl text-[#C9A24A] transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </Link>
            ))}
          </div>

          {/* CONTACT */}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-10 inline-flex w-fit rounded-full bg-[#6B0F1A] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white"
          >
            Let&apos;s Create Something →
          </Link>

          {/* FOOTER TEXT */}
          <p className="mt-12 text-[9px] uppercase tracking-[0.3em] text-[#5A4636]/40">
            We Create • You Celebrate
          </p>
        </div>
      </div>
    </>
  );
}