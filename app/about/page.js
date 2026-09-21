"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FFFDF8]">
      <Navbar />

      {/* =========================================================
          HERO / THE VISION
      ========================================================= */}
      <section className="relative min-h-screen overflow-hidden pt-24">
        <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-[1400px] flex-col justify-center px-8 py-16 lg:px-16 xl:px-20">
          {/* MAIN HERO GRID */}
          <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            {/* =====================================================
                LEFT — TYPOGRAPHY
            ===================================================== */}
            <div className="relative z-20">
              <Reveal direction="right">
                <div className="mb-8 flex items-center gap-4">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[#6B0F1A]">
                    01 — The Vision
                  </span>

                  <span className="h-px w-14 bg-[#C9A24A]" />
                </div>
              </Reveal>

              <Reveal direction="right" delay={0.08} duration={1}>
                <h1 className="font-serif text-[58px] leading-[0.83] tracking-[-0.035em] text-[#5A4636] sm:text-7xl md:text-8xl lg:text-[86px] xl:text-[96px]">
                  We Don&apos;t
                  <br />
                  Just Create
                  <br />
                  Events.
                  <br />
                  <span className="italic text-[#6B0F1A]">
                    We Create
                    <br />
                    Experiences.
                  </span>
                </h1>
              </Reveal>

              <Reveal direction="right" delay={0.2}>
                <p className="mt-9 max-w-[560px] text-[14px] leading-7 text-[#5A4636]/65 md:text-[15px]">
                  Aarambh Events & Production brings together creativity,
                  design, décor and production to transform every celebration
                  into a memorable experience.
                </p>
              </Reveal>

              <Reveal direction="right" delay={0.3}>
                <p className="mt-4 max-w-[560px] text-[14px] leading-7 text-[#5A4636]/65 md:text-[15px]">
                  From intimate celebrations to grand productions, every detail
                  is thoughtfully designed to reflect the occasion and the
                  people behind it.
                </p>
              </Reveal>

              <Reveal direction="right" delay={0.42}>
                <div className="mt-9 flex items-center gap-7">
                  <Link
                    href="/work"
                    className="rounded-full bg-[#6B0F1A] px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#5A4636]"
                  >
                    Explore Our Work →
                  </Link>

                  <Link
                    href="/contact"
                    className="border-b border-[#C9A24A] pb-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#5A4636] transition-colors duration-300 hover:text-[#6B0F1A]"
                  >
                    Let&apos;s Talk
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* =====================================================
                RIGHT — AARAMBH LOGO ARTWORK
            ===================================================== */}
            <Reveal direction="left" delay={0.12} duration={1.15}>
              <div className="relative mx-auto flex h-[540px] w-full max-w-[680px] items-center justify-center lg:h-[620px]">
                {/* HUGE BACKGROUND A */}
                <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none font-serif text-[390px] leading-none text-[#C9A24A]/[0.045]">
                  A
                </div>

                {/* LARGE GOLD CIRCLE */}
                <div className="pointer-events-none absolute left-[8%] top-[10%] h-[430px] w-[430px] rounded-full border border-[#C9A24A]/30 lg:h-[500px] lg:w-[500px]" />

                {/* SECOND PARTIAL CIRCLE */}
                <div className="pointer-events-none absolute bottom-[8%] right-[5%] h-[280px] w-[280px] rounded-full border border-[#C9A24A]/15" />

                {/* SOFT BACKGROUND GLOW */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F7E7E2]/40 blur-3xl" />

                {/* =================================================
                    ACTUAL LOGO
                ================================================= */}
                <div className="relative z-10 h-[430px] w-[560px] sm:h-[470px] sm:w-[600px] lg:h-[500px] lg:w-[640px]">
                  <Image
                    src="/images/about/aarambh2.png"
                    alt="Aarambh Events & Production"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 55vw"
                    className="object-contain mix-blend-multiply"
                  />
                </div>

                {/* =================================================
                    RIGHT VERTICAL TEXT
                ================================================= */}
                <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 lg:block">
                  <div className="flex flex-col items-center gap-4">
                    <span className="h-14 w-px bg-[#C9A24A]" />

                    <span className="text-[8px] font-medium uppercase tracking-[0.35em] text-[#5A4636]/60 [writing-mode:vertical-rl]">
                      Moments
                    </span>

                    <span className="text-[8px] font-medium uppercase tracking-[0.35em] text-[#5A4636]/60 [writing-mode:vertical-rl]">
                      People
                    </span>

                    <span className="text-[8px] font-medium uppercase tracking-[0.35em] text-[#5A4636]/60 [writing-mode:vertical-rl]">
                      Celebrations
                    </span>

                    <span className="text-[8px] font-medium uppercase tracking-[0.35em] text-[#5A4636]/60 [writing-mode:vertical-rl]">
                      Beyond Ordinary
                    </span>

                    <span className="h-14 w-px bg-[#C9A24A]" />
                  </div>
                </div>

                {/* =================================================
                    SMALL GOLD STATEMENT
                ================================================= */}
                <div className="absolute bottom-5 right-4 z-20 hidden md:block">
                  <p className="font-serif text-4xl italic leading-none text-[#C9A24A]/75">
                    More
                    <br />
                    Than
                    <br />
                    Events.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* =======================================================
              BOTTOM EDITORIAL BAR
          ======================================================= */}
          <Reveal delay={0.45}>
            <div className="mt-8 flex items-center gap-6 border-t border-[#5A4636]/15 pt-5">
              <div className="flex items-center gap-3">
                <span className="text-[9px] font-semibold tracking-[0.3em] text-[#6B0F1A]">
                  01
                </span>

                <span className="text-[9px] text-[#5A4636]/30">/</span>

                <span className="text-[9px] tracking-[0.3em] text-[#5A4636]/35">
                  04
                </span>
              </div>

              <div className="h-px flex-1 bg-[#5A4636]/15" />

              <span className="hidden text-[8px] font-medium uppercase tracking-[0.35em] text-[#5A4636]/50 sm:block">
                Designed With Purpose
              </span>

              <span className="h-px w-12 bg-[#C9A24A]" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          OUR APPROACH
      ========================================================= */}
      <section className="relative bg-[#F7E7E2] px-8 py-28 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <Reveal direction="right">
            <div className="mb-16 flex items-center gap-4">
              <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#6B0F1A]">
                02 — Our Approach
              </span>

              <span className="h-px w-14 bg-[#C9A24A]" />
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <h2 className="mb-16 max-w-4xl font-serif text-5xl leading-[0.9] text-[#5A4636] md:text-7xl">
              Every Celebration
              <br />
              Begins With A
              <br />
              <span className="italic text-[#6B0F1A]">Thoughtful Idea.</span>
            </h2>
          </Reveal>

          <div className="grid gap-14 border-t border-[#5A4636]/15 pt-12 md:grid-cols-3">
            {/* 01 */}
            <Reveal delay={0}>
              <div className="group">
                <span className="font-serif text-6xl text-[#C9A24A] transition duration-500 group-hover:text-[#6B0F1A]">
                  01
                </span>

                <h2 className="mt-5 font-serif text-3xl text-[#5A4636]">
                  Creative Vision
                </h2>

                <p className="mt-4 max-w-sm text-sm leading-7 text-[#5A4636]/70">
                  Concepts that combine aesthetics, atmosphere and personality.
                </p>

                <div className="mt-7 h-px w-0 bg-[#6B0F1A] transition-all duration-500 group-hover:w-16" />
              </div>
            </Reveal>

            {/* 02 */}
            <Reveal delay={0.12}>
              <div className="group">
                <span className="font-serif text-6xl text-[#C9A24A] transition duration-500 group-hover:text-[#6B0F1A]">
                  02
                </span>

                <h2 className="mt-5 font-serif text-3xl text-[#5A4636]">
                  Premium Production
                </h2>

                <p className="mt-4 max-w-sm text-sm leading-7 text-[#5A4636]/70">
                  Thoughtful production and execution designed around every
                  detail.
                </p>

                <div className="mt-7 h-px w-0 bg-[#6B0F1A] transition-all duration-500 group-hover:w-16" />
              </div>
            </Reveal>

            {/* 03 */}
            <Reveal delay={0.24}>
              <div className="group">
                <span className="font-serif text-6xl text-[#C9A24A] transition duration-500 group-hover:text-[#6B0F1A]">
                  03
                </span>

                <h2 className="mt-5 font-serif text-3xl text-[#5A4636]">
                  Seamless Execution
                </h2>

                <p className="mt-4 max-w-sm text-sm leading-7 text-[#5A4636]/70">
                  From the first idea to the final moment, everything works
                  together seamlessly.
                </p>

                <div className="mt-7 h-px w-0 bg-[#6B0F1A] transition-all duration-500 group-hover:w-16" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          AARAMBH STATEMENT
      ========================================================= */}
      <section className="bg-[#5A4636] px-8 py-32 text-[#FFFDF8] lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <Reveal direction="right">
              <div>
                <span className="text-[9px] uppercase tracking-[0.35em] text-[#C9A24A]">
                  03 — Our Belief
                </span>

                <p className="mt-6 font-serif text-5xl leading-[0.9] md:text-6xl">
                  Details
                  <br />
                  Matter.
                </p>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.15}>
              <div>
                <p className="font-serif text-4xl leading-[1.05] md:text-6xl">
                  “The most memorable celebrations are not just seen.
                  <span className="italic text-[#C9A24A]"> They are felt.</span>
                  ”
                </p>

                <div className="mt-9 h-px w-20 bg-[#C9A24A]" />

                <p className="mt-6 max-w-xl text-sm leading-7 text-white/55">
                  That is the experience Aarambh strives to create through
                  thoughtful design, careful planning and seamless execution.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          PEOPLE BEHIND AARAMBH
      ========================================================= */}
      <section className="bg-[#FFFDF8] px-8 py-28 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <Reveal direction="right">
            <div className="mb-16">
              <div className="flex items-center gap-4">
                <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#6B0F1A]">
                  04 — People Behind Aarambh
                </span>

                <span className="h-px w-14 bg-[#C9A24A]" />
              </div>

              <h2 className="mt-6 font-serif text-5xl leading-[0.9] text-[#5A4636] md:text-7xl">
                The People
                <br />
                Behind Aarambh.
              </h2>
            </div>
          </Reveal>

          <div className="grid border-t border-[#C9A24A]/30 md:grid-cols-3">
            {/* DEEP */}
            <Reveal delay={0}>
              <div className="group border-b border-[#C9A24A]/30 py-10 md:border-b-0 md:border-r md:pr-10">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#C9A24A]">
                  Founder
                </span>

                <h3 className="mt-5 font-serif text-5xl text-[#5A4636] transition duration-500 group-hover:text-[#6B0F1A]">
                  Deep
                </h3>

                <div className="mt-6 h-px w-10 bg-[#C9A24A] transition-all duration-500 group-hover:w-20" />
              </div>
            </Reveal>

            {/* JAY */}
            <Reveal delay={0.12}>
              <div className="group border-b border-[#C9A24A]/30 py-10 md:border-b-0 md:border-r md:px-10">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#C9A24A]">
                  Co-Founder
                </span>

                <h3 className="mt-5 font-serif text-5xl text-[#5A4636] transition duration-500 group-hover:text-[#6B0F1A]">
                  Jay
                </h3>

                <div className="mt-6 h-px w-10 bg-[#C9A24A] transition-all duration-500 group-hover:w-20" />
              </div>
            </Reveal>

            {/* BHAVIN */}
            <Reveal delay={0.24}>
              <div className="group py-10 md:pl-10">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#C9A24A]">
                  Co-Founder
                </span>

                <h3 className="mt-5 font-serif text-5xl text-[#5A4636] transition duration-500 group-hover:text-[#6B0F1A]">
                  Bhavin
                </h3>

                <div className="mt-6 h-px w-10 bg-[#C9A24A] transition-all duration-500 group-hover:w-20" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="bg-[#6B0F1A] px-8 py-32 text-center">
        <Reveal>
          <p className="text-[9px] uppercase tracking-[0.35em] text-[#C9A24A]">
            Let&apos;s Create Something Beautiful
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-5xl leading-[0.9] text-white md:text-7xl">
            Your Moment.
            <br />
            <span className="italic">Our Craft.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mx-auto mt-7 max-w-lg text-sm leading-7 text-white/60">
            Tell us what you&apos;re imagining. We&apos;ll take care of the
            details.
          </p>
        </Reveal>

        <Reveal delay={0.38}>
          <Link
            href="/contact"
            className="mt-10 inline-block rounded-full border border-[#C9A24A] px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#C9A24A] hover:text-[#5A4636]"
          >
            Start A Conversation →
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
