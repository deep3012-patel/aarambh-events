"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronDown,
  Sparkles,
  Sofa,
  Lamp,
  Flower2,
  Building2,
  PartyPopper,
  MessageCircle,
} from "lucide-react";

const categories = [
  "All",
  "Furniture",
  "Structures",
  "Lighting",
  "Décor",
  "Event Essentials",
];

const products = [
  {
    id: 1,
    name: "Luxury Lounge Sofa",
    category: "Furniture",
    image: "/images/work/reception.jpg",
    description:
      "Elegant lounge seating designed for premium wedding and celebration setups.",
    price: "Enquire",
  },
  {
    id: 2,
    name: "Royal Mandap Structure",
    category: "Structures",
    image: "/images/work/mandap.jpg",
    description:
      "Statement structure for mandap, stage and traditional ceremony setups.",
    price: "Enquire",
  },
  {
    id: 3,
    name: "Grand Wedding Setup",
    category: "Décor",
    image: "/images/work/wedding.jpg",
    description:
      "A curated décor setup designed to transform your celebration space.",
    price: "Enquire",
  },
  {
    id: 4,
    name: "Elegant Reception Setup",
    category: "Furniture",
    image: "/images/gallery/mehndi-3.jpg",
    description:
      "Sophisticated furniture and styling elements for reception environments.",
    price: "Enquire",
  },
  {
    id: 5,
    name: "Celebration Décor",
    category: "Décor",
    image: "/images/gallery/haldi-2.jpg",
    description:
      "Beautiful decorative elements for haldi, mehndi and intimate celebrations.",
    price: "Enquire",
  },
  {
    id: 6,
    name: "Event Lighting",
    category: "Lighting",
    image: "/images/work/reception.jpg",
    description:
      "Lighting elements to create atmosphere and highlight your event design.",
    price: "Enquire",
  },
];

const categoryIcons = {
  Furniture: Sofa,
  Structures: Building2,
  Lighting: Lamp,
  Décor: Flower2,
  "Event Essentials": PartyPopper,
};

export default function RentalPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openProduct, setOpenProduct] = useState(null);

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <main className="min-h-screen overflow-hidden bg-[#FFFDF8] text-[#5A4636]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden px-6 pb-24 pt-36 md:px-12 lg:px-20 lg:pb-32 lg:pt-44">
        {/* Editorial background */}
        <div className="pointer-events-none absolute right-[-120px] top-[-80px] h-[420px] w-[420px] rounded-full border border-[#C9A24A]/30" />

        <div className="pointer-events-none absolute right-[-40px] top-[20px] h-[300px] w-[300px] rounded-full bg-[#F7E7E2]/60 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left */}
            <div>
              <div className="mb-7 flex items-center gap-4">
                <Sparkles
                  className="h-4 w-4 text-[#C9A24A]"
                  strokeWidth={1.5}
                />

                <span className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[#6B0F1A]">
                  Aarambh Rental Collection
                </span>

                <span className="h-px w-14 bg-[#C9A24A]" />
              </div>

              <h1 className="max-w-5xl font-serif text-[4.5rem] leading-[0.82] tracking-[-0.04em] text-[#5A4636] md:text-[6.5rem] lg:text-[8rem]">
                Beautiful
                <br />
                Elements.
                <br />
                <span className="italic text-[#6B0F1A]">Ready To Rent.</span>
              </h1>

              <p className="mt-8 max-w-xl text-[14px] leading-7 text-[#5A4636]/70 md:text-[15px]">
                A curated collection of furniture, structures, lighting, décor
                and event essentials — available to elevate your next
                celebration.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-5">
                <a
                  href="#collection"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#6B0F1A] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#5A4636]"
                >
                  Explore Collection
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href="https://wa.me/917285883168"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5A4636] underline decoration-[#C9A24A] underline-offset-8 transition hover:text-[#6B0F1A]"
                >
                  Enquire For Rental
                </a>
              </div>
            </div>

            {/* Right editorial visual */}
            <div className="relative hidden h-[520px] lg:block">
              <div className="absolute right-0 top-0 h-[430px] w-[78%] overflow-hidden">
                <Image
                  src="/images/work/reception.jpg"
                  alt="Aarambh Rental Collection"
                  fill
                  priority
                  sizes="40vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                <div className="absolute bottom-7 left-7">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#C9A24A]">
                    Curated For
                  </p>

                  <p className="mt-2 font-serif text-3xl text-white">
                    Memorable Celebrations
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 flex h-40 w-40 items-center justify-center rounded-full bg-[#F7E7E2]">
                <div className="text-center">
                  <span className="block font-serif text-4xl text-[#6B0F1A]">
                    01
                  </span>

                  <span className="mt-1 block text-[8px] uppercase tracking-[0.25em] text-[#5A4636]/60">
                    Collection
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO STRIP
      ========================================================= */}
      <section className="border-y border-[#5A4636]/10 bg-[#F7E7E2]/45 px-6 py-14 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#C9A24A]">
              01
            </span>

            <h3 className="mt-3 font-serif text-3xl text-[#5A4636]">
              Curated Pieces
            </h3>

            <p className="mt-3 text-xs leading-6 text-[#5A4636]/65">
              Selected elements that complement modern and traditional event
              aesthetics.
            </p>
          </div>

          <div>
            <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#C9A24A]">
              02
            </span>

            <h3 className="mt-3 font-serif text-3xl text-[#5A4636]">
              Flexible Rental
            </h3>

            <p className="mt-3 text-xs leading-6 text-[#5A4636]/65">
              Choose individual pieces or combine multiple elements for a
              complete event setup.
            </p>
          </div>

          <div>
            <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#C9A24A]">
              03
            </span>

            <h3 className="mt-3 font-serif text-3xl text-[#5A4636]">
              Event Ready
            </h3>

            <p className="mt-3 text-xs leading-6 text-[#5A4636]/65">
              Designed to work beautifully across weddings, celebrations and
              corporate events.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          COLLECTION
      ========================================================= */}
      <section
        id="collection"
        className="bg-[#FFFDF8] px-6 py-28 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <div className="mb-12 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <div className="flex items-center gap-4">
                <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#6B0F1A]">
                  The Collection
                </span>

                <span className="h-px w-14 bg-[#C9A24A]" />
              </div>

              <h2 className="mt-5 font-serif text-5xl leading-[0.9] text-[#5A4636] md:text-7xl">
                Find Your
                <br />
                <span className="italic text-[#6B0F1A]">Event Essentials.</span>
              </h2>
            </div>

            <p className="max-w-sm text-xs leading-6 text-[#5A4636]/60 md:text-right">
              Browse our collection and tell us what you need for your
              celebration. Availability and rental pricing can be confirmed for
              your event date.
            </p>
          </div>

          {/* Categories */}
          <div className="mb-12 flex gap-2 overflow-x-auto pb-3">
            {categories.map((category) => {
              const Icon = categoryIcons[category];

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`flex shrink-0 items-center gap-2 rounded-full border px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.15em] transition duration-300 ${
                    activeCategory === category
                      ? "border-[#6B0F1A] bg-[#6B0F1A] text-white"
                      : "border-[#C9A24A]/40 text-[#5A4636] hover:border-[#6B0F1A] hover:bg-[#6B0F1A] hover:text-white"
                  }`}
                >
                  {Icon && <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />}

                  {category}
                </button>
              );
            })}
          </div>

          {/* Products */}
          <div className="grid gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product, index) => (
              <article key={product.id} className="group">
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#F7E7E2]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* Number */}
                  <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#FFFDF8]/90">
                    <span className="text-[9px] font-semibold text-[#6B0F1A]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Category */}
                  <div className="absolute bottom-5 left-5">
                    <span className="rounded-full bg-[#FFFDF8]/90 px-4 py-2 text-[8px] font-semibold uppercase tracking-[0.2em] text-[#6B0F1A]">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="pt-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-3xl leading-none text-[#5A4636]">
                        {product.name}
                      </h3>

                      <p className="mt-3 max-w-sm text-xs leading-6 text-[#5A4636]/60">
                        {product.description}
                      </p>
                    </div>

                    <span className="shrink-0 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#6B0F1A]">
                      {product.price}
                    </span>
                  </div>

                  <button
                    onClick={() => setOpenProduct(product)}
                    className="mt-5 inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#5A4636] underline decoration-[#C9A24A] underline-offset-7 transition hover:text-[#6B0F1A]"
                  >
                    View Details
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Empty */}
          {filteredProducts.length === 0 && (
            <div className="py-24 text-center">
              <p className="font-serif text-4xl text-[#5A4636]">
                More pieces coming soon.
              </p>

              <p className="mt-3 text-sm text-[#5A4636]/60">
                Contact us for custom rental requirements.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          HOW IT WORKS
      ========================================================= */}
      <section className="bg-[#5A4636] px-6 py-28 text-[#FFFDF8] md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#C9A24A]">
                Simple Process
              </span>

              <h2 className="mt-6 font-serif text-6xl leading-[0.88] md:text-7xl">
                Rent.
                <br />
                Setup.
                <br />
                <span className="italic">Celebrate.</span>
              </h2>

              <p className="mt-7 max-w-md text-sm leading-7 text-white/60">
                Tell us what you are planning, choose the pieces you love and
                let our team help you coordinate the rental requirements.
              </p>
            </div>

            <div className="border-t border-white/15">
              {[
                {
                  no: "01",
                  title: "Choose Your Pieces",
                  text: "Browse the collection and select the elements that fit your event.",
                },
                {
                  no: "02",
                  title: "Share Your Requirements",
                  text: "Tell us your event date, venue and rental requirements.",
                },
                {
                  no: "03",
                  title: "Confirm Availability",
                  text: "Our team checks availability and shares the rental details with you.",
                },
                {
                  no: "04",
                  title: "Make Your Event Happen",
                  text: "Your selected pieces become part of the celebration you imagined.",
                },
              ].map((step) => (
                <div
                  key={step.no}
                  className="grid grid-cols-[55px_1fr] border-b border-white/15 py-8 md:grid-cols-[80px_1fr]"
                >
                  <span className="text-[9px] tracking-[0.2em] text-[#C9A24A]">
                    {step.no}
                  </span>

                  <div>
                    <h3 className="font-serif text-3xl md:text-4xl">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-lg text-sm leading-7 text-white/55">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="bg-[#F7E7E2] px-6 py-28 text-center md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center justify-center gap-3">
            <Sparkles className="h-4 w-4 text-[#C9A24A]" strokeWidth={1.5} />

            <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#6B0F1A]">
              Planning Something Beautiful?
            </span>
          </div>

          <h2 className="mt-6 font-serif text-5xl leading-[0.9] text-[#5A4636] md:text-7xl">
            Let&apos;s Find The
            <br />
            <span className="italic text-[#6B0F1A]">Perfect Pieces.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-lg text-sm leading-7 text-[#5A4636]/65">
            Share your event date and requirements with us. We&apos;ll help you
            find the right rental elements for your celebration.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/917285883168"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#6B0F1A] px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#5A4636]"
            >
              <MessageCircle className="h-4 w-4" />
              Enquire on WhatsApp
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#C9A24A] px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5A4636] transition duration-300 hover:bg-[#C9A24A]"
            >
              Contact Aarambh
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRODUCT MODAL
      ========================================================= */}
      {openProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#5A4636]/60 p-5 backdrop-blur-sm">
          <div className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden bg-[#FFFDF8]">
            <button
              onClick={() => setOpenProduct(null)}
              className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFFDF8]/90 text-[#5A4636] shadow-sm"
              aria-label="Close"
            >
              <span className="text-xl leading-none">×</span>
            </button>

            <div className="grid max-h-[90vh] overflow-auto md:grid-cols-2">
              <div className="relative min-h-[350px] bg-[#F7E7E2] md:min-h-[550px]">
                <Image
                  src={openProduct.image}
                  alt={openProduct.name}
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-center p-8 md:p-12">
                <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#C9A24A]">
                  {openProduct.category}
                </span>

                <h2 className="mt-4 font-serif text-5xl leading-[0.9] text-[#5A4636]">
                  {openProduct.name}
                </h2>

                <p className="mt-6 text-sm leading-7 text-[#5A4636]/65">
                  {openProduct.description}
                </p>

                <div className="mt-8 border-t border-[#5A4636]/10 pt-6">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#5A4636]/50">
                    Rental Pricing
                  </p>

                  <p className="mt-2 font-serif text-3xl text-[#6B0F1A]">
                    On Enquiry
                  </p>
                </div>

                <a
                  href={`https://wa.me/917285883168?text=${encodeURIComponent(
                    `Hi Aarambh, I am interested in renting "${openProduct.name}". Please share availability and pricing.`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#6B0F1A] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#5A4636]"
                >
                  Enquire For This Product
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
