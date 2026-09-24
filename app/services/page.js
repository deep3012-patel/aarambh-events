import Link from "next/link";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import {
  Sparkles,
  MessageCircle,
  Palette,
  LayoutTemplate,
  Sun,
  Lightbulb,
  Armchair,
  Flower2,
  Wand2,
  ClipboardCheck,
  ArrowUpRight,
} from "lucide-react";

const process = [
  {
    number: "01",
    title: "The First Meeting",
    subtitle: "Let's Meet & Understand",
    description:
      "Everything begins with a conversation. Our team meets you to understand your occasion, expectations, style and the experience you want to create.",
    image: "/images/process/meeting.png",
    side: "left",
  },
  {
    number: "02",
    title: "Understanding Your Vision",
    subtitle: "Your Ideas Matter",
    description:
      "We discuss your requirements, preferences, occasion, guest experience and overall direction to understand what makes your event unique.",
    image: "/images/process/discussion.png",
    side: "right",
  },
  {
    number: "03",
    title: "The Aarambh Showcase",
    subtitle: "Ideas Come Alive",
    description:
      "Our team presents previous work, concepts, décor ideas, stage designs and possibilities through a curated visual presentation.",
    image: "/images/process/showcase.png",
    side: "left",
  },
  {
    number: "04",
    title: "Concept & Approval",
    subtitle: "Let's Make It Official",
    description:
      "Once the creative direction is finalised, we discuss the plan and move forward with the selected concept and event requirements.",
    image: "/images/process/approval.png",
    side: "right",
  },
  {
    number: "05",
    title: "Venue Visit",
    subtitle: "See The Space",
    description:
      "Our team visits the venue to understand dimensions, entry points, stage area, electrical requirements and every practical detail.",
    image: "/images/process/venue.png",
    side: "left",
  },
  {
    number: "06",
    title: "Planning & Production",
    subtitle: "Behind The Scenes",
    description:
      "The creative plan becomes a production plan. Décor, stage, lighting, furniture, flowers, materials and manpower are carefully coordinated.",
    image: "/images/process/planning.png",
    side: "right",
  },
  {
    number: "07",
    title: "Setup Day",
    subtitle: "Building The Experience",
    description:
      "Our production team reaches the venue and begins transforming the space according to the approved design and production plan.",
    image: "/images/process/setup.png",
    side: "left",
  },
  {
    number: "08",
    title: "Event Day",
    subtitle: "Everything Comes Together",
    description:
      "On the big day, our team coordinates the setup, production and execution so that every important detail is ready for your guests.",
    image: "/images/process/event.png",
    side: "right",
  },
  {
    number: "09",
    title: "The Moment",
    subtitle: "You Celebrate. We Handle The Rest.",
    description:
      "The final result is more than a setup. It is the experience you imagined — brought to life for you and your guests.",
    image: "/images/process/celebration.png",
    side: "left",
  },
];

const handleItems = [
  { label: "Concept & Design", icon: Palette },
  { label: "Stage & Mandap", icon: LayoutTemplate },
  { label: "Décor & Styling", icon: Sparkles },
  { label: "Lighting", icon: Lightbulb },
  { label: "Furniture & Seating", icon: Armchair },
  { label: "Floral Styling", icon: Flower2 },
  { label: "Production", icon: Wand2 },
  { label: "Event Coordination", icon: ClipboardCheck },
];

export default function Services() {
  return (
    <main className="min-h-screen bg-[#FFFDF8]">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="px-8 pb-28 pt-40 md:px-14 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center gap-4">
            <Sun className="h-4 w-4 text-[#C9A24A]" strokeWidth={1.5} />
            <span className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[#6B0F1A]">
              The Aarambh Experience
            </span>
            <span className="h-px w-14 bg-[#C9A24A]" />
          </div>

          <h1 className="max-w-6xl font-serif text-6xl leading-[0.82] tracking-[-0.04em] text-[#5A4636] md:text-8xl lg:text-[9rem]">
            From First
            <br />
            <span className="italic text-[#6B0F1A]">Conversation</span>
            <br />
            To Celebration.
          </h1>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <p className="max-w-xl text-sm leading-8 text-[#5A4636]/70">
              Every beautiful event begins long before the guests arrive. At
              Aarambh, we take you through a carefully planned journey — from
              the first conversation to the final celebration.
            </p>

            <div className="md:flex md:justify-end">
              <div className="max-w-xs border-l border-[#C9A24A] pl-6">
                <p className="font-serif text-4xl text-[#5A4636]">09</p>
                <p className="mt-2 text-[9px] uppercase tracking-[0.25em] text-[#5A4636]/60">
                  Steps to Your Perfect Event
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="bg-[#F7E7E2] px-8 py-24 md:px-14 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 text-[#6B0F1A]" strokeWidth={1.5} />
                <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#6B0F1A]">
                  How It Works
                </span>
              </div>

              <h2 className="mt-5 font-serif text-5xl leading-[0.9] text-[#5A4636] md:text-7xl">
                A Thoughtful
                <br />
                <span className="italic text-[#6B0F1A]">Journey.</span>
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-8 text-[#5A4636]/70">
              We believe great events are created through collaboration. That is
              why every stage of the journey is planned, discussed and executed
              with attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="px-8 py-32 md:px-14 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="relative">
            {/* CENTER LINE */}
            <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-[#C9A24A]/40 lg:block" />

            <div className="space-y-28 lg:space-y-40">
              {process.map((step) => (
                <div
                  key={step.number}
                  className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-24"
                >
                  {/* CENTER NUMBER */}
                  <div className="absolute left-1/2 top-1/2 z-20 hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#C9A24A] bg-[#FFFDF8] lg:flex">
                    <span className="font-serif text-xl text-[#6B0F1A]">
                      {step.number}
                    </span>
                  </div>

                  {/* IMAGE */}
                  <div
                    className={`relative h-[320px] w-full overflow-hidden bg-[#F7E7E2] sm:h-[400px] lg:h-[480px] ${
                      step.side === "right" ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <Image
                      src={step.image}
                      alt={`Aarambh ${step.title}`}
                      fill
                      unoptimized
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition duration-700 hover:scale-105"
                    />

                    <div className="absolute left-6 top-6 z-10 bg-[#FFFDF8]/90 px-5 py-3 backdrop-blur-sm">
                      <span className="font-serif text-3xl text-[#6B0F1A]">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* TEXT */}
                  <div
                    className={`${
                      step.side === "right"
                        ? "lg:order-1 lg:text-right"
                        : "lg:order-2"
                    }`}
                  >
                    <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#6B0F1A]">
                      {step.subtitle}
                    </p>

                    <h2 className="mt-4 font-serif text-5xl leading-[0.9] text-[#5A4636] md:text-6xl">
                      {step.title}
                    </h2>

                    <div
                      className={`mt-6 h-px w-16 bg-[#C9A24A] ${
                        step.side === "right" ? "lg:ml-auto" : ""
                      }`}
                    />

                    <p className="mt-7 max-w-lg text-sm leading-8 text-[#5A4636]/70 lg:text-[15px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE HANDLE ================= */}
      <section className="bg-[#F7E7E2] px-8 py-28 md:px-14 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <div className="flex items-center gap-4">
              <Wand2 className="h-4 w-4 text-[#C9A24A]" strokeWidth={1.5} />
              <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#6B0F1A]">
                What We Bring Together
              </span>
              <span className="h-px w-14 bg-[#C9A24A]" />
            </div>

            <h2 className="mt-5 max-w-3xl font-serif text-5xl leading-[0.9] text-[#5A4636] md:text-7xl">
              Every Element.
              <br />
              <span className="italic text-[#6B0F1A]">One Experience.</span>
            </h2>
          </div>

          <div className="grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
            {handleItems.map((item) => (
              <div
                key={item.label}
                className="group border-t border-[#C9A24A]/40 pt-5"
              >
                <item.icon
                  className="h-7 w-7 text-[#C9A24A] transition duration-500 group-hover:text-[#6B0F1A]"
                  strokeWidth={1.4}
                />
                <h3 className="mt-4 font-serif text-2xl text-[#5A4636]">
                  {item.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-[#6B0F1A] px-8 py-32 text-center">
        <div className="flex items-center justify-center gap-2.5">
          <Sparkles className="h-4 w-4 text-[#C9A24A]" strokeWidth={1.5} />
          <p className="text-[9px] uppercase tracking-[0.4em] text-[#C9A24A]">
            Your Event Starts Here
          </p>
        </div>

        <h2 className="mx-auto mt-7 max-w-5xl font-serif text-5xl leading-[0.95] text-white md:text-7xl lg:text-8xl">
          Let&apos;s Begin
          <br />
          With A Conversation.
        </h2>

        <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/65">
          Tell us about your occasion and let&apos;s start creating an
          experience worth remembering.
        </p>

        <Link
          href="/contact"
          className="group mt-10 inline-flex items-center gap-2 rounded-full border border-[#C9A24A] px-9 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-[#C9A24A]"
        >
          Start A Conversation
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </section>
    </main>
  );
}
