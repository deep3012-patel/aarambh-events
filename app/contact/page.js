import Link from "next/link";
import Navbar from "@/components/Navbar";
import { MessageCircle, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#FFFDF8]">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="px-8 pb-24 pt-40 md:px-14 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center gap-4">
            <span className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[#6B0F1A]">
              04 — Let&apos;s Connect
            </span>

            <span className="h-px w-14 bg-[#C9A24A]" />
          </div>

          <div className="grid gap-16 lg:grid-cols-2 lg:items-end">
            {/* LEFT */}
            <div>
              <h1 className="font-serif text-7xl leading-[0.8] tracking-[-0.04em] text-[#5A4636] md:text-8xl lg:text-[9rem]">
                Let&apos;s
                <br />
                Create
                <br />
                <span className="italic text-[#6B0F1A]">Something.</span>
              </h1>
            </div>

            {/* RIGHT */}
            <div className="max-w-xl lg:pb-4">
              <p className="text-lg leading-8 text-[#5A4636]/70">
                Have an event in mind? Tell us about it. Whether it&apos;s an
                intimate celebration or a grand production, we&apos;d love to
                hear your vision.
              </p>

              <p className="mt-5 text-sm leading-7 text-[#5A4636]/55">
                Let&apos;s meet, discuss your ideas and turn them into an
                experience worth remembering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT PANEL ================= */}
      <section className="px-8 pb-28 md:px-14 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden bg-[#6B0F1A] lg:grid-cols-2">
            {/* ================= LEFT ================= */}
            <div className="px-8 py-14 md:px-14 md:py-20">
              <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#C9A24A]">
                Start A Conversation
              </p>

              <h2 className="mt-6 max-w-lg font-serif text-5xl leading-[0.9] text-white md:text-6xl">
                Your Moment.
                <br />
                Our Craft.
              </h2>

              <p className="mt-8 max-w-md text-sm leading-7 text-white/65">
                Reach out to our team directly and let&apos;s start planning
                your next celebration.
              </p>

              {/* ================= WHATSAPP ================= */}
              <a
                href="https://wa.me/917285883168"
                target="_blank"
                rel="noreferrer"
                className="mt-10 flex max-w-md items-center justify-between border border-[#C9A24A]/50 px-6 py-5 text-white transition hover:bg-[#C9A24A] hover:text-[#5A4636]"
              >
                <div className="flex items-center gap-4">
                  <MessageCircle size={22} strokeWidth={1.5} />

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.25em] text-[#C9A24A]">
                      WhatsApp
                    </p>

                    <p className="mt-1 text-sm">+91 72858 83168</p>
                  </div>
                </div>

                <ArrowUpRight size={20} />
              </a>
            </div>

            {/* ================= RIGHT ================= */}
            <div className="bg-[#F7E7E2] px-8 py-14 md:px-14 md:py-20">
              <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#6B0F1A]">
                Connect With Us
              </p>

              <div className="mt-10 space-y-8">
                {/* ================= INSTAGRAM ================= */}
                <a
                  href="https://www.instagram.com/aarambh_events_and_production/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between border-b border-[#C9A24A]/40 pb-7"
                >
                  <div className="flex items-center gap-5">
                    <div className="flex h-6 w-6 items-center justify-center text-[#6B0F1A]">
                      <span className="text-xl">◎</span>
                    </div>

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.25em] text-[#6B0F1A]/60">
                        Instagram
                      </p>

                      <p className="mt-1 font-serif text-2xl text-[#5A4636]">
                        @aarambh_events_and_production
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="text-[#6B0F1A] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>

                {/* ================= PHONE NUMBERS ================= */}

                <div className="space-y-6">
                  {/* NUMBER 1 */}
                  <a
                    href="tel:+917285883168"
                    className="group flex items-center justify-between border-b border-[#C9A24A]/40 pb-6"
                  >
                    <div className="flex items-center gap-5">
                      <Phone
                        size={23}
                        strokeWidth={1.5}
                        className="text-[#6B0F1A]"
                      />

                      <div>
                        <p className="text-[9px] uppercase tracking-[0.25em] text-[#6B0F1A]/60">
                          Call Us
                        </p>

                        <p className="mt-1 font-serif text-2xl text-[#5A4636]">
                          +91 72858 83168
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={19}
                      className="text-[#6B0F1A] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>

                  {/* NUMBER 2 */}
                  <a
                    href="tel:+919662035111"
                    className="group flex items-center justify-between border-b border-[#C9A24A]/40 pb-6"
                  >
                    <div className="flex items-center gap-5">
                      <Phone
                        size={23}
                        strokeWidth={1.5}
                        className="text-[#6B0F1A]"
                      />

                      <div>
                        <p className="text-[9px] uppercase tracking-[0.25em] text-[#6B0F1A]/60">
                          Call Us
                        </p>

                        <p className="mt-1 font-serif text-2xl text-[#5A4636]">
                          +91 96620 35111
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={19}
                      className="text-[#6B0F1A] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>

                  {/* NUMBER 3 */}
                  <a
                    href="tel:+919727097749"
                    className="group flex items-center justify-between border-b border-[#C9A24A]/40 pb-6"
                  >
                    <div className="flex items-center gap-5">
                      <Phone
                        size={23}
                        strokeWidth={1.5}
                        className="text-[#6B0F1A]"
                      />

                      <div>
                        <p className="text-[9px] uppercase tracking-[0.25em] text-[#6B0F1A]/60">
                          Call Us
                        </p>

                        <p className="mt-1 font-serif text-2xl text-[#5A4636]">
                          +91 97270 97749
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={19}
                      className="text-[#6B0F1A] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>
                </div>

                {/* ================= LOCATION ================= */}
                <div className="flex items-center gap-5">
                  <MapPin
                    size={25}
                    strokeWidth={1.5}
                    className="text-[#6B0F1A]"
                  />

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.25em] text-[#6B0F1A]/60">
                      Based In
                    </p>

                    <p className="mt-1 font-serif text-2xl text-[#5A4636]">
                      Surat, Gujarat
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OWNERS ================= */}
      <section className="bg-[#F7E7E2] px-8 py-28 md:px-14 lg:px-20">
        <div className="mx-auto max-w-7xl">
          {/* HEADER */}
          <div className="mb-16">
            <div className="flex items-center gap-4">
              <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#6B0F1A]">
                The People Behind Aarambh
              </span>

              <span className="h-px w-16 bg-[#C9A24A]" />
            </div>

            <h2 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.9] text-[#5A4636] md:text-7xl lg:text-8xl">
              The People
              <br />
              Behind The{" "}
              <span className="italic text-[#6B0F1A]">Experience.</span>
            </h2>
          </div>

          {/* FOUNDERS */}
          <div className="grid border-t border-[#C9A24A] md:grid-cols-3">
            {/* ================= DEEP ================= */}
            <div className="group border-b border-[#C9A24A] py-10 md:border-b-0 md:border-r md:pr-10">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#6B0F1A]">
                  Founder
                </span>

                <span className="font-serif text-2xl text-[#C9A24A] transition-transform duration-500 group-hover:rotate-45">
                  +
                </span>
              </div>

              <h3 className="font-serif text-6xl leading-none text-[#5A4636] transition-colors duration-300 group-hover:text-[#6B0F1A] md:text-7xl">
                Deep
              </h3>

              <div className="mt-7 h-px w-12 bg-[#C9A24A] transition-all duration-500 group-hover:w-24" />

              <p className="mt-6 max-w-xs text-[13px] leading-7 text-[#5A4636]/65">
                Creative direction, vision and the driving force behind Aarambh
                Events & Production.
              </p>
            </div>

            {/* ================= JAY ================= */}
            <div className="group border-b border-[#C9A24A] py-10 md:border-b-0 md:border-r md:px-10">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#6B0F1A]">
                  Co-Founder
                </span>

                <span className="font-serif text-2xl text-[#C9A24A] transition-transform duration-500 group-hover:rotate-45">
                  +
                </span>
              </div>

              <h3 className="font-serif text-6xl leading-none text-[#5A4636] transition-colors duration-300 group-hover:text-[#6B0F1A] md:text-7xl">
                Jay
              </h3>

              <div className="mt-7 h-px w-12 bg-[#C9A24A] transition-all duration-500 group-hover:w-24" />

              <p className="mt-6 max-w-xs text-[13px] leading-7 text-[#5A4636]/65">
                Production, coordination and execution that transforms every
                concept into reality.
              </p>
            </div>

            {/* ================= BHAVIN ================= */}
            <div className="group py-10 md:pl-10">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#6B0F1A]">
                  Co-Founder
                </span>

                <span className="font-serif text-2xl text-[#C9A24A] transition-transform duration-500 group-hover:rotate-45">
                  +
                </span>
              </div>

              <h3 className="font-serif text-6xl leading-none text-[#5A4636] transition-colors duration-300 group-hover:text-[#6B0F1A] md:text-7xl">
                Bhavin
              </h3>

              <div className="mt-7 h-px w-12 bg-[#C9A24A] transition-all duration-500 group-hover:w-24" />

              <p className="mt-6 max-w-xs text-[13px] leading-7 text-[#5A4636]/65">
                Production, coordination and execution that brings every Aarambh
                experience to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SOCIAL CTA ================= */}
      <section className="px-8 py-28 text-center md:px-14 lg:px-20">
        <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[#6B0F1A]">
          Follow The Journey
        </p>

        <h2 className="mx-auto mt-6 max-w-4xl font-serif text-5xl leading-[0.95] text-[#5A4636] md:text-7xl">
          Follow Aarambh.
          <br />
          <span className="italic text-[#6B0F1A]">See What We Create.</span>
        </h2>

        <a
          href="https://www.instagram.com/aarambh_events_and_production/"
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#6B0F1A] px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#5A4636]"
        >
          <div className="flex h-6 w-6 items-center justify-center">
            <span className="text-xl">◎</span>
          </div>
          Follow On Instagram
        </a>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-[#C9A24A]/30 bg-[#FFFDF8] px-8 py-10 md:px-14 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-serif text-3xl tracking-[0.12em] text-[#5A4636]">
              AARAMBH
            </p>

            <p className="mt-1 text-[8px] uppercase tracking-[0.35em] text-[#C9A24A]">
              Events & Production
            </p>
          </div>

          <p className="text-[9px] uppercase tracking-[0.2em] text-[#5A4636]/50">
            We Create | You Celebrate
          </p>

          <Link
            href="/"
            className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#6B0F1A]"
          >
            Back To Home ↑
          </Link>
        </div>
      </footer>
    </main>
  );
}
