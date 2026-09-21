import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const projects = [
  {
    number: "01",
    category: "Weddings",
    title: "Timeless Celebrations",
    image: "/images/work/wedding.jpg",
  },
  {
    number: "02",
    category: "Receptions",
    title: "Grand Evenings",
    image: "/images/work/reception.jpg",
  },
  {
    number: "03",
    category: "Mandaps",
    title: "Sacred Spaces",
    image: "/images/work/mandap11.jpg",
  },
  {
    number: "04",
    category: "Engagements",
    title: "Intimate Moments",
    image: "/images/work/engagement.jpg",
  },
  {
    number: "05",
    category: "Corporate",
    title: "Professional Experiences",
    image: "/images/work/corporate.jpg",
  },
  {
    number: "06",
    category: "Celebrations",
    title: "Moments Worth Remembering",
    image: "/images/work/celebration.jpg",
  },
];

export default function Work() {
  return (
    <main className="min-h-screen bg-[#FFFDF8]">
      <Navbar />

      {/* HERO */}
      <section className="px-8 pb-24 pt-40 md:px-14 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 flex items-center gap-4">
            <span className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[#6B0F1A]">
              02 — Selected Work
            </span>

            <span className="h-px w-14 bg-[#C9A24A]" />
          </div>

          <h1 className="max-w-5xl font-serif text-6xl leading-[0.85] tracking-[-0.04em] text-[#5A4636] md:text-8xl lg:text-[9rem]">
            Moments
            <br />
            <span className="italic text-[#6B0F1A]">We Create.</span>
          </h1>

          <div className="mt-10 flex max-w-2xl justify-between gap-10">
            <p className="text-sm leading-7 text-[#5A4636]/70">
              A collection of celebrations, spaces and experiences crafted by
              Aarambh Events & Production.
            </p>

            <span className="hidden font-serif text-5xl text-[#C9A24A] md:block">
              06
            </span>
          </div>
        </div>
      </section>

      {/* WORK GRID */}
      <section className="px-8 pb-32 md:px-14 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-x-8 gap-y-20 md:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.number}
                className={`group ${index % 2 === 1 ? "md:mt-24" : ""}`}
              >
                {/* IMAGE */}
                <div className="relative h-[520px] overflow-hidden bg-[#F7E7E2]">
                  <Image
                    src={project.image}
                    alt={`Aarambh ${project.category} setup`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* NUMBER */}
                  <div className="absolute right-7 top-7">
                    <span className="font-serif text-7xl text-white/80">
                      {project.number}
                    </span>
                  </div>

                  {/* BOTTOM OVERLAY */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent px-8 pb-8 pt-24">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#C9A24A]">
                      {project.category}
                    </p>

                    <h2 className="mt-2 font-serif text-4xl leading-none text-white md:text-5xl">
                      {project.title}
                    </h2>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <div className="flex items-center justify-between border-b border-[#C9A24A]/30 py-6">
                  <p className="text-[11px] uppercase tracking-[0.15em] text-[#5A4636]/60">
                    Explore {project.category}
                  </p>

                  <span className="text-xl text-[#6B0F1A] transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNATURE */}
      <section className="bg-[#F7E7E2] px-8 py-32 md:px-14 lg:px-20">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-7 flex items-center gap-4">
              <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#6B0F1A]">
                Signature Setups
              </span>

              <span className="h-px w-14 bg-[#C9A24A]" />
            </div>

            <h2 className="font-serif text-6xl leading-[0.9] text-[#5A4636] md:text-7xl">
              Designed
              <br />
              to <span className="italic text-[#6B0F1A]">Impress.</span>
            </h2>

            <p className="mt-8 max-w-lg text-sm leading-8 text-[#5A4636]/70">
              From grand reception stages to statement mandaps and luxury
              lounges, every setup is designed to create a distinctive visual
              experience.
            </p>

            <Link
              href="/services"
              className="mt-8 inline-block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5A4636] underline decoration-[#C9A24A] underline-offset-8"
            >
              Explore Our Services →
            </Link>
          </div>

          {/* FEATURE IMAGE */}
          <div className="relative h-[520px] overflow-hidden">
            <Image
              src="/images/work/aarambh_signature.jpg"
              alt="Aarambh Signature Mandap"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#6B0F1A] px-8 py-32 text-center">
        <p className="text-[9px] uppercase tracking-[0.4em] text-[#C9A24A]">
          Have An Occasion In Mind?
        </p>

        <h2 className="mx-auto mt-6 max-w-4xl font-serif text-5xl leading-tight text-white md:text-7xl">
          Let&apos;s Create
          <br />
          Something Beautiful.
        </h2>

        <Link
          href="/contact"
          className="mt-10 inline-block rounded-full border border-[#C9A24A] px-9 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#C9A24A]"
        >
          Start A Conversation →
        </Link>
      </section>
    </main>
  );
}
