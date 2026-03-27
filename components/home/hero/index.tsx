"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { FaPlay, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

/* ─────────────── Types ─────────────── */
interface Slide {
  id: number;
  eyebrow: string;
  title: string;
  subtitle: string;
  cta: { label: string; href: string };
  image: string;
  position?: string;
}

/* ─────────────── Data ─────────────── */
const slides: Slide[] = [
  {
    id: 1,
    eyebrow: "Trusted Surgical Excellence",
    title: "Advanced Surgical Care",
    subtitle:
      "Expert Laparoscopic and Bariatric surgery focused on precision, safety, and your long-term health at Emanate Polyclinic.",
    cta: { label: "Learn More", href: "/about" },
    image: "/hero.jpg",
    position: "center",
  },
  {
    id: 2,
    eyebrow: "Patient-Centered Precision",
    title: "Expertise You Can Trust",
    subtitle:
      "Dr. Sonam Tyagi combines years of clinical experience with modern technology to deliver safe surgical outcomes.",
    cta: { label: "Our Services", href: "/services" },
    image: "/images/Dr Sonam in OPD.jpeg",
    position: "50% 30%",
  },
];

const AUTOPLAY_MS = 6500;

/* ─────────────── Helpers ─────────────── */
function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback);
  useEffect(() => { savedCallback.current = callback; }, [callback]);
  useEffect(() => {
    if (delay === null) return;
    const id = setInterval(() => savedCallback.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
}

function NavButton({
  direction,
  onClick,
  scrolled,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  scrolled: boolean;
}) {
  const Icon = direction === "prev" ? FaArrowLeft : FaArrowRight;
  return (
    <button
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
      className={`
        group w-12 h-12 flex items-center justify-center
        border transition-all duration-300
        ${scrolled
          ? "border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400"
          : "border-white/40 text-white hover:bg-white hover:text-gray-900 hover:border-white"
        }
      `}
    >
      <Icon size={13} className="transition-transform duration-200 group-hover:scale-110" />
    </button>
  );
}

/* ─────────────── Main Component ─────────────── */
export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [paused, setPaused] = useState(false);
  const [elapsed, setElapsed] = useState(0);

  /* progress tick every 50ms */
  useInterval(
    () => setElapsed((e) => Math.min(e + 50, AUTOPLAY_MS)),
    !paused && !animating ? 50 : null
  );

  const goTo = useCallback(
    (index: number) => {
      if (animating) return;
      setAnimating(true);
      setElapsed(0);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 700);
    },
    [animating]
  );

  const goPrev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  const goNext = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  /* autoplay */
  useInterval(goNext, !paused && elapsed >= AUTOPLAY_MS ? 0 : null);

  /* keyboard nav */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goPrev, goNext]);

  const slide = slides[current];

  return (
    <section
      className="relative w-full h-screen overflow-hidden select-none"
      aria-label="Hero carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Background Images ── */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          aria-hidden={i !== current}
          className={`
            absolute inset-0 transition-all duration-700 ease-in-out
            ${i === current ? "opacity-100 scale-100" : "opacity-0 scale-[1.03]"}
          `}
        >
          <Image
            src={s.image}
            alt={s.title}
            fill
            priority={i === 0}
            className="object-cover object-center"
            sizes="100vw"
            style={{ objectPosition: s.position || "center" }}
          />
        </div>
      ))}

      {/* ── Layered Overlay ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

      {/* ── Slide Content ── */}
      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="container mx-auto px-4 md:px-12 lg:px-20 w-full">
          <div className="max-w-2xl xl:max-w-3xl">

            {/* Eyebrow */}
            <motion.p
              key={`eyebrow-${current}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: animating ? 0 : 1, y: animating ? -20 : 0 }}
              transition={{ duration: 0.7, delay: animating ? 0 : 0.1, ease: "easeOut" }}
              className="text-xs uppercase tracking-[0.4em] text-[#5FA8E8] font-semibold mb-4"
            >
              {slide.eyebrow}
            </motion.p>

            {/* Headline */}
            <motion.h1
              key={`title-${current}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: animating ? 0 : 1, y: animating ? 30 : 0 }}
              transition={{ duration: 0.7, delay: animating ? 0 : 0.2, ease: "easeOut" }}
              className="text-3xl md:text-5xl lg:text-7xl font-light tracking-tight text-white mb-6"
            >
              {slide.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              key={`sub-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: animating ? 0 : 1, y: animating ? 20 : 0 }}
              transition={{ duration: 0.7, delay: animating ? 0 : 0.3, ease: "easeOut" }}
              className="text-base md:text-lg text-white/70 max-w-lg leading-relaxed mb-12"
            >
              {slide.subtitle}
            </motion.p>

            {/* Action Row */}
            <motion.div
              key={`actions-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: animating ? 0 : 1, y: animating ? 20 : 0 }}
              transition={{ duration: 0.7, delay: animating ? 0 : 0.4, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-6"
            >
              <a
                href={slide.cta.href}
                className="
                  group px-8 py-4 text-xs tracking-[0.2em] font-semibold uppercase
                  border border-white/50 hover:border-white text-white
                  transition-all duration-300 hover:bg-white/10
                "
              >
                {slide.cta.label}
              </a>

              {/* Play */}
              <button
                aria-label="Watch intro video"
                className="flex items-center gap-3 group cursor-pointer"
              >
                <span className="
                  relative w-12 h-12 flex items-center justify-center
                  rounded-full border border-white/50
                  group-hover:border-white group-hover:bg-white
                  transition-all duration-300
                ">
                  {/* Ripple ring */}
                  <span className="absolute inset-0 rounded-full border border-white/30 animate-ping opacity-40" />
                  <FaPlay
                    size={11}
                    className="ml-0.5 text-white group-hover:text-[#5FA8E8] transition-colors duration-300"
                  />
                </span>
                <span className="text-xs tracking-[0.2em] uppercase text-white/80 group-hover:text-white transition-colors duration-300">
                  Watch Intro
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Bottom Controls Bar ── */}
      <div className="absolute bottom-12 md:bottom-0 left-0 right-0 z-20">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex items-center gap-6 pb-10">
            {/* Slide counter */}
            <span className="text-white/50 text-xs font-medium tracking-widest min-w-[3rem]">
              {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>

            {/* Arrow controls */}
            <div className="flex items-center gap-2 ml-auto">
              <NavButton direction="prev" onClick={goPrev} scrolled={false} />
              <NavButton direction="next" onClick={goNext} scrolled={false} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Vertical label (decorative) ── */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden xl:flex flex-col items-center gap-3">
        <span className="[writing-mode:vertical-lr] text-[10px] tracking-[0.4em] uppercase text-white/30 font-medium">
          Scroll to explore
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}