"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  Camera,
  Sparkles,
  LayoutGrid,
  Heart,
  Cake,
  PartyPopper,
  Wine,
  Gem,
  HeartHandshake,
  Briefcase,
  ImageOff,
  ArrowUpRight,
} from "lucide-react";

const categories = [
  { label: "All", icon: LayoutGrid },
  { label: "Wedding", icon: Heart },
  { label: "Birthday", icon: Cake },
  { label: "Party", icon: PartyPopper },
  { label: "Reception", icon: Wine },
  { label: "Mandap", icon: Gem },
  { label: "Engagement", icon: HeartHandshake },
  { label: "Corporate", icon: Briefcase },
];

const galleryItems = [
  // ================= WEDDING =================
  {
    image: "/images/gallery/wedding-1.jpg",
    title: "Royal Wedding",
    category: "Wedding",
  },
  {
    image: "/images/gallery/wedding-2.jpg",
    title: "Wedding Celebration",
    category: "Wedding",
  },
  {
    image: "/images/gallery/wedding-3.jpg",
    title: "Wedding Celebration",
    category: "Wedding",
  },
  {
    image: "/images/gallery/wedding-10.jpg",
    title: "Wedding Celebration",
    category: "Wedding",
  },
  {
    image: "/images/gallery/wedding-11.jpg",
    title: "Wedding Celebration",
    category: "Wedding",
  },
  {
    image: "/images/gallery/mehndi-1.jpg",
    title: "Mehndi Celebration",
    category: "Wedding",
  },
  {
    image: "/images/gallery/mehndi-2.jpg",
    title: "Mehndi Celebration",
    category: "Wedding",
  },
  {
    image: "/images/gallery/mehndi-3.jpg",
    title: "Mehndi Celebration",
    category: "Wedding",
  },
  {
    image: "/images/gallery/haldi-1.jpg",
    title: "Haldi Celebration",
    category: "Wedding",
  },
  {
    image: "/images/gallery/haldi-2.jpg",
    title: "Haldi Celebration",
    category: "Wedding",
  },
  {
    image: "/images/gallery/mehndi-4.jpg",
    title: "Mehndi Celebration",
    category: "Wedding",
  },
  {
    image: "/images/gallery/wedding_gate.jpg",
    title: "Wedding Entrance",
    category: "Wedding",
  },
  {
    image: "/images/gallery/wedding-4.jpg",
    title: "Wedding Celebration",
    category: "Wedding",
  },

  // ================= BIRTHDAY =================
  {
    image: "/images/gallery/birthday/birthday-1.jpg",
    title: "Birthday Celebration",
    category: "Birthday",
  },
  {
    image: "/images/gallery/birthday/birthday-2.jpg",
    title: "Birthday Celebration",
    category: "Birthday",
  },
  {
    image: "/images/gallery/birthday/birthday-3.jpg",
    title: "Luxury Birthday",
    category: "Birthday",
  },
  {
    image: "/images/gallery/birthday/birthday-4.jpg",
    title: "Luxury Birthday",
    category: "Birthday",
  },
  {
    image: "/images/gallery/birthday/birthday-5.jpg",
    title: "Luxury Birthday",
    category: "Birthday",
  },
  {
    image: "/images/gallery/birthday/birthday-6.jpg",
    title: "Luxury Birthday",
    category: "Birthday",
  },

  // ================= PARTY =================
  // Add Party images here when available.

  // ================= RECEPTION =================
  {
    image: "/images/gallery/reception/reception-1.jpg",
    title: "Royal Reception",
    category: "Reception",
  },

  // ================= MANDAP =================
  // {
  //   image: "/images/gallery/mandap-1.png",
  //   title: "Grand Mandap",
  //   category: "Mandap",
  // },
  // {
  //   image: "/images/gallery/mandap-2.png",
  //   title: "Floral Mandap",
  //   category: "Mandap",
  // },

  // ================= ENGAGEMENT =================
  // {
  //   image: "/images/gallery/engagement-1.png",
  //   title: "Engagement",
  //   category: "Engagement",
  // },
  // {
  //   image: "/images/gallery/engagement-2.png",
  //   title: "Engagement Night",
  //   category: "Engagement",
  // },

  // ================= CORPORATE =================
  {
    image: "/images/gallery/corporate/corporate-1.jpg",
    title: "Corporate Event",
    category: "Corporate",
  },
  // {
  //   image: "/images/gallery/corporate/corporate-2.jpg",
  //   title: "Corporate Experience",
  //   category: "Corporate",
  // },
  {
    image: "/images/gallery/corporate/corporate-3.jpg",
    title: "Corporate Event",
    category: "Corporate",
  },
  {
    image: "/images/gallery/corporate/corporate-4.jpg",
    title: "Corporate Experience",
    category: "Corporate",
  },
  {
    image: "/images/gallery/corporate/corporate-5.jpg",
    title: "Corporate Event",
    category: "Corporate",
  },
  {
    image: "/images/gallery/corporate/corporate-6.jpg",
    title: "Corporate Experience",
    category: "Corporate",
  },
  {
    image: "/images/gallery/corporate/corporate-7.jpg",
    title: "Corporate Event",
    category: "Corporate",
  },
  {
    image: "/images/gallery/corporate/corporate-8.jpg",
    title: "Corporate Experience",
    category: "Corporate",
  },
  {
    image: "/images/gallery/corporate/corporate-9.jpg",
    title: "Corporate Event",
    category: "Corporate",
  },
  {
    image: "/images/gallery/corporate/corporate-10.jpg",
    title: "Corporate Experience",
    category: "Corporate",
  },
  {
    image: "/images/gallery/corporate/corporate-11.jpg",
    title: "Corporate Event",
    category: "Corporate",
  },
];

function GalleryContent() {
  const searchParams = useSearchParams();
  const [managedGalleryItems, setManagedGalleryItems] = useState(galleryItems);

  const urlCategory = searchParams.get("category");

  useEffect(() => {
    let isActive = true;

    async function loadGallery() {
      try {
        const response = await fetch("/api/gallery", { cache: "no-store" });
        if (!response.ok) {
          return;
        }

        const data = await response.json();
        if (isActive && Array.isArray(data.items)) {
          setManagedGalleryItems(data.items);
        }
      } catch {
        // Keep the built-in gallery visible if the CMS data is unavailable.
      }
    }

    loadGallery();

    return () => {
      isActive = false;
    };
  }, []);

  const activeCategory =
    categories.find(
      (category) => category.label.toLowerCase() === urlCategory?.toLowerCase(),
    )?.label || "All";

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") {
      return managedGalleryItems;
    }

    return managedGalleryItems.filter(
      (item) => item.category === activeCategory,
    );
  }, [activeCategory, managedGalleryItems]);

  return (
    <main className="min-h-screen bg-[#FFFDF8]">
      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="px-8 pb-16 pt-44 md:px-14 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-4">
            <Camera className="h-4 w-4 text-[#C9A24A]" strokeWidth={1.5} />
            <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#6B0F1A]">
              Aarambh Gallery
            </span>
            <span className="h-px w-14 bg-[#C9A24A]" />
          </div>

          <h1 className="mt-7 max-w-5xl font-serif text-6xl leading-[0.85] text-[#5A4636] md:text-8xl">
            Moments.
            <br />
            <span className="italic text-[#6B0F1A]">Captured.</span>
          </h1>

          <p className="mt-8 max-w-xl text-sm leading-7 text-[#5A4636]/65">
            A collection of celebrations, spaces and experiences created by
            Aarambh Events & Production.
          </p>
        </div>
      </section>

      {/* =====================================================
          CATEGORY FILTER
      ===================================================== */}
      <section className="sticky top-24 z-30 border-y border-[#C9A24A]/20 bg-[#FFFDF8]/95 px-8 py-5 backdrop-blur-md md:px-14 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3">
          {categories.map((category) => {
            const isActive = activeCategory === category.label;

            return (
              <Link
                key={category.label}
                href={`/gallery?category=${category.label.toLowerCase()}`}
                scroll={false}
                className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-[9px] font-semibold uppercase tracking-[0.18em] transition duration-300 ${
                  isActive
                    ? "border-[#6B0F1A] bg-[#6B0F1A] text-white"
                    : "border-[#C9A24A]/50 text-[#5A4636] hover:border-[#6B0F1A] hover:bg-[#6B0F1A] hover:text-white"
                }`}
              >
                <category.icon className="h-3.5 w-3.5" strokeWidth={1.6} />
                {category.label}
              </Link>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          GALLERY
      ===================================================== */}
      <section className="px-8 py-20 md:px-14 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-center justify-between">
            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#5A4636]/50">
              {activeCategory} — {filteredItems.length} Moments
            </p>

            <Link
              href="/work"
              className="hidden items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#5A4636] underline decoration-[#C9A24A] underline-offset-8 md:flex"
            >
              Explore Our Work <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>

          {/* IMAGE GRID */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item, index) => (
              <div
                key={item.id || `${item.category}-${index}`}
                className="group relative h-[320px] overflow-hidden sm:h-[380px] lg:h-[460px]"
              >
                <Image
                  src={item.image}
                  alt={item.alt || item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#C9A24A]">
                    {item.category}
                  </p>
                  <h2 className="mt-2 font-serif text-3xl text-white">
                    {item.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>

          {/* EMPTY CATEGORY */}
          {filteredItems.length === 0 && (
            <div className="flex flex-col items-center py-32 text-center">
              <ImageOff className="h-8 w-8 text-[#C9A24A]" strokeWidth={1.3} />
              <p className="mt-6 font-serif text-4xl text-[#5A4636]">
                More moments coming soon.
              </p>
              <p className="mt-4 text-sm text-[#5A4636]/50">
                We are adding more experiences to this collection.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="bg-[#6B0F1A] px-8 py-28 text-center">
        <div className="flex items-center justify-center gap-2.5">
          <Sparkles className="h-4 w-4 text-[#C9A24A]" strokeWidth={1.5} />
          <p className="text-[9px] uppercase tracking-[0.35em] text-[#C9A24A]">
            Create Your Own Moment
          </p>
        </div>

        <h2 className="mx-auto mt-6 max-w-4xl font-serif text-5xl leading-[0.9] text-white md:text-7xl">
          Your Celebration.
          <br />
          <span className="italic">Our Craft.</span>
        </h2>

        <Link
          href="/contact"
          className="group mt-10 inline-flex items-center gap-2 rounded-full border border-[#C9A24A] px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#C9A24A] hover:text-[#5A4636]"
        >
          Start A Conversation
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </section>
    </main>
  );
}

export default function GalleryPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-[#FFFDF8]" />}>
      <GalleryContent />
    </Suspense>
  );
}
