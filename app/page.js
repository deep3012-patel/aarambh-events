import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FFFDF8]">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-screen overflow-hidden pt-24">
        {/* HERO IMAGE */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero.png"
            alt="Aarambh Events & Production"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#FFFDF8] via-[#FFFDF8]/90 via-[30%] via-[#FFFDF8]/45 via-[48%] to-transparent" />
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10 flex min-h-[calc(100vh-6rem)] items-center">
          <div className="w-full px-8 md:px-14 lg:px-20 xl:px-24">
            <div className="max-w-[590px]">
              {/* LABEL */}
              <Reveal direction="left" duration={0.9}>
                <div className="mb-6 flex items-center gap-4">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[#6B0F1A]">
                    Aarambh Events & Production
                  </span>

                  <span className="h-px w-14 bg-[#C9A24A]" />
                </div>
              </Reveal>

              {/* MAIN TITLE */}
              <Reveal direction="left" delay={0.12} duration={1}>
                <h1 className="font-serif text-[4.5rem] leading-[0.82] tracking-[-0.04em] text-[#5A4636] md:text-[6rem] lg:text-[7rem]">
                  Moments
                  <br />
                  Made
                  <br />
                  <span className="italic text-[#6B0F1A]">Beautiful.</span>
                </h1>
              </Reveal>

              {/* DESCRIPTION */}
              <Reveal delay={0.28}>
                <p className="mt-7 max-w-[390px] text-[14px] leading-7 text-[#5A4636]/75">
                  We design celebrations that bring together creativity,
                  elegance and unforgettable experiences.
                </p>
              </Reveal>

              {/* BUTTONS */}
              <Reveal delay={0.42}>
                <div className="mt-7 flex items-center gap-5">
                  <Link
                    href="/work"
                    className="rounded-full bg-[#6B0F1A] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#5A4636]"
                  >
                    Explore Our Work →
                  </Link>

                  <Link
                    href="/about"
                    className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5A4636] underline decoration-[#C9A24A] underline-offset-8 transition hover:text-[#6B0F1A]"
                  >
                    Discover Aarambh
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT PREVIEW
      ========================================================= */}
      <section className="bg-[#FFFDF8] px-8 py-28 md:px-14 lg:px-20">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          {/* TEXT */}
          <div>
            <Reveal direction="right">
              <div className="mb-6 flex items-center gap-4">
                <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#6B0F1A]">
                  01 — The Vision
                </span>

                <span className="h-px w-14 bg-[#C9A24A]" />
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.08}>
              <h2 className="font-serif text-5xl leading-[0.9] text-[#5A4636] md:text-6xl lg:text-7xl">
                We Don&apos;t Just
                <br />
                Create Events.
                <br />
                <span className="italic text-[#6B0F1A]">
                  We Create Experiences.
                </span>
              </h2>
            </Reveal>

            <Reveal direction="right" delay={0.2}>
              <p className="mt-8 max-w-lg text-[15px] leading-8 text-[#5A4636]/70">
                From intimate celebrations to grand productions, Aarambh brings
                together design, décor, production and execution to create
                experiences that feel uniquely yours.
              </p>
            </Reveal>

            <Reveal direction="right" delay={0.32}>
              <Link
                href="/about"
                className="mt-8 inline-block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5A4636] underline decoration-[#C9A24A] underline-offset-8 transition hover:text-[#6B0F1A]"
              >
                Discover Aarambh →
              </Link>
            </Reveal>
          </div>

          {/* IMAGE */}
          <Reveal direction="left" delay={0.15} duration={1}>
            <div className="group relative h-[500px] overflow-hidden">
              <Image
                src="/images/about/aarambh2.png"
                alt="Aarambh Event Experience"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition duration-1000 group-hover:scale-105"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          SELECTED WORK
      ========================================================= */}
      <section className="bg-[#F7E7E2] px-8 py-28 md:px-14 lg:px-20">
        <div className="mx-auto max-w-7xl">
          {/* HEADER */}
          <Reveal>
            <div className="mb-14 flex items-end justify-between">
              <div>
                <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#6B0F1A]">
                  02 — Selected Work
                </span>

                <h2 className="mt-4 font-serif text-5xl text-[#5A4636] md:text-6xl">
                  Moments We Create
                </h2>
              </div>

              <Link
                href="/work"
                className="hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5A4636] underline decoration-[#C9A24A] underline-offset-8 transition hover:text-[#6B0F1A] md:block"
              >
                View All Work →
              </Link>
            </div>
          </Reveal>

          {/* CARDS */}
          <div className="grid gap-6 md:grid-cols-3">
            {/* WEDDING */}
            <Reveal delay={0}>
              <Link
                href="/work"
                className="group relative block h-[430px] overflow-hidden"
              >
                <Image
                  src="/images/work/wedding.jpg"
                  alt="Wedding"
                  fill
                  sizes="33vw"
                  className="object-cover transition duration-1000 group-hover:scale-105"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-7">
                  <p className="font-serif text-3xl text-white">Weddings</p>
                </div>
              </Link>
            </Reveal>

            {/* RECEPTION */}
            <Reveal delay={0.12}>
              <Link
                href="/work"
                className="group relative block h-[430px] overflow-hidden"
              >
                <Image
                  src="/images/work/reception.jpg"
                  alt="Reception"
                  fill
                  sizes="33vw"
                  className="object-cover transition duration-1000 group-hover:scale-105"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-7">
                  <p className="font-serif text-3xl text-white">Receptions</p>
                </div>
              </Link>
            </Reveal>

            {/* MANDAP */}
            <Reveal delay={0.24}>
              <Link
                href="/work"
                className="group relative block h-[430px] overflow-hidden"
              >
                <Image
                  src="/images/work/mandap.jpg"
                  alt="Mandap"
                  fill
                  sizes="33vw"
                  className="object-cover transition duration-1000 group-hover:scale-105"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-7">
                  <p className="font-serif text-3xl text-white">Mandaps</p>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          SIGNATURE SETUPS
      ========================================================= */}
      <section className="bg-[#FFFDF8] px-8 py-28 md:px-14 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <Reveal direction="right">
            <div className="mb-14">
              <div className="flex items-center gap-4">
                <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#6B0F1A]">
                  03 — Signature Setups
                </span>

                <span className="h-px w-14 bg-[#C9A24A]" />
              </div>

              <h2 className="mt-5 max-w-3xl font-serif text-5xl leading-[0.9] text-[#5A4636] md:text-7xl">
                Designed To Be
                <br />
                <span className="italic text-[#6B0F1A]">Remembered.</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {/* ROYAL RECEPTION */}
            <Reveal delay={0}>
              <Link
                href="/work"
                className="group relative block h-[520px] overflow-hidden"
              >
                <Image
                  src="/images/work/reception.jpg"
                  alt="Royal Reception"
                  fill
                  sizes="33vw"
                  className="object-cover transition duration-1000 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />

                <div className="absolute bottom-0 p-8">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#C9A24A]">
                    Signature Setup 01
                  </p>

                  <h3 className="mt-3 font-serif text-4xl text-white">
                    Royal Reception
                  </h3>
                </div>
              </Link>
            </Reveal>

            {/* GRAND MANDAP */}
            <Reveal delay={0.12}>
              <Link
                href="/work"
                className="group relative block h-[520px] overflow-hidden"
              >
                <Image
                  src="/images/work/mandap.jpg"
                  alt="Grand Mandap"
                  fill
                  sizes="33vw"
                  className="object-cover transition duration-1000 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />

                <div className="absolute bottom-0 p-8">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#C9A24A]">
                    Signature Setup 02
                  </p>

                  <h3 className="mt-3 font-serif text-4xl text-white">
                    Grand Mandap
                  </h3>
                </div>
              </Link>
            </Reveal>

            {/* LUXURY LOUNGE */}
            <Reveal delay={0.24}>
              <Link
                href="/work"
                className="group relative block h-[520px] overflow-hidden"
              >
                <Image
                  src="/images/work/wedding.jpg"
                  alt="Luxury Lounge"
                  fill
                  sizes="33vw"
                  className="object-cover transition duration-1000 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />

                <div className="absolute bottom-0 p-8">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#C9A24A]">
                    Signature Setup 03
                  </p>

                  <h3 className="mt-3 font-serif text-4xl text-white">
                    Luxury Lounge
                  </h3>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY AARAMBH
      ========================================================= */}
      <section className="bg-[#5A4636] px-8 py-28 text-[#FFFDF8] md:px-14 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            {/* LEFT */}
            <Reveal direction="right">
              <div>
                <div className="flex items-center gap-4">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#C9A24A]">
                    04 — Why Aarambh
                  </span>

                  <span className="h-px w-14 bg-[#C9A24A]" />
                </div>

                <h2 className="mt-6 font-serif text-6xl leading-[0.88] md:text-7xl">
                  More Than
                  <br />
                  An Event.
                </h2>

                <p className="mt-7 max-w-md text-sm leading-7 text-white/60">
                  Every celebration deserves a team that understands the
                  importance of every detail.
                </p>
              </div>
            </Reveal>

            {/* RIGHT */}
            <div className="grid border-t border-white/15 md:grid-cols-2">
              <Reveal delay={0}>
                <div className="border-b border-white/15 py-8 md:border-r md:pr-10">
                  <span className="text-[10px] text-[#C9A24A]">01</span>

                  <h3 className="mt-5 font-serif text-4xl">Creative Vision</h3>

                  <p className="mt-4 text-sm leading-7 text-white/55">
                    Concepts shaped around your occasion, personality and
                    celebration.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="border-b border-white/15 py-8 md:pl-10">
                  <span className="text-[10px] text-[#C9A24A]">02</span>

                  <h3 className="mt-5 font-serif text-4xl">
                    Premium Production
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/55">
                    Décor, lighting, furniture, staging and production brought
                    together seamlessly.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.24}>
                <div className="border-b border-white/15 py-8 md:border-b-0 md:border-r md:pr-10">
                  <span className="text-[10px] text-[#C9A24A]">03</span>

                  <h3 className="mt-5 font-serif text-4xl">
                    Attention To Detail
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/55">
                    From the smallest element to the complete venue experience.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.36}>
                <div className="py-8 md:pl-10">
                  <span className="text-[10px] text-[#C9A24A]">04</span>

                  <h3 className="mt-5 font-serif text-4xl">
                    Seamless Execution
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/55">
                    Our team handles the details so you can be present in the
                    moment.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          GALLERY PREVIEW
      ========================================================= */}
      <section className="bg-[#FFFDF8] px-8 py-28 md:px-14 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <Reveal direction="right">
            <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <div className="flex items-center gap-4">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#6B0F1A]">
                    05 — Gallery
                  </span>

                  <span className="h-px w-14 bg-[#C9A24A]" />
                </div>

                <h2 className="mt-5 font-serif text-6xl leading-[0.88] text-[#5A4636] md:text-7xl">
                  Moments.
                  <br />
                  <span className="italic text-[#6B0F1A]">Captured.</span>
                </h2>
              </div>

              <Link
                href="/gallery"
                className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5A4636] underline decoration-[#C9A24A] underline-offset-8 transition hover:text-[#6B0F1A]"
              >
                Explore Full Gallery →
              </Link>
            </div>
          </Reveal>

          {/* CATEGORY LINKS */}
          <Reveal delay={0.1}>
            <div className="mb-10 flex flex-wrap gap-3">
              {[
                "All",
                "Wedding",
                "Birthday",
                "Party",
                "Reception",
                "Mandap",
                "Engagement",
                "Corporate",
              ].map((category, index) => (
                <Link
                  key={category}
                  href={`/gallery?category=${category.toLowerCase()}`}
                  className={`rounded-full border px-5 py-2.5 text-[9px] font-semibold uppercase tracking-[0.18em] transition duration-300 ${
                    index === 0
                      ? "border-[#6B0F1A] bg-[#6B0F1A] text-white"
                      : "border-[#C9A24A]/50 text-[#5A4636] hover:border-[#6B0F1A] hover:bg-[#6B0F1A] hover:text-white"
                  }`}
                >
                  {category}
                </Link>
              ))}
            </div>
          </Reveal>

          {/* GALLERY IMAGES */}
          <div className="grid gap-5 md:grid-cols-12">
            <Reveal direction="right" className="md:col-span-7">
              <div className="group relative h-[500px] overflow-hidden">
                <Image
                  src="/images/gallery/mehndi-3.jpg"
                  alt="Aarambh Wedding"
                  fill
                  sizes="58vw"
                  className="object-cover transition duration-1000 group-hover:scale-105"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-7">
                  <p className="font-serif text-3xl text-white">Wedding</p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.15} className="md:col-span-5">
              <div className="group relative h-[500px] overflow-hidden">
                <Image
                  src="/images/gallery/haldi-2.jpg"
                  alt="Aarambh Celebration"
                  fill
                  sizes="42vw"
                  className="object-cover transition duration-1000 group-hover:scale-105"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-7">
                  <p className="font-serif text-3xl text-white">Celebration</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
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

        <Reveal delay={0.24}>
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
