"use client"

import Image from "next/image"

export default function About() {
  return (
    <section className="relative bg-[#F4F8FB] py-16 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-3 gap-16 items-start">

          {/* LEFT */}
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#5FA8E8] font-semibold mb-4">
              About
            </p>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#1F3A4D] leading-tight">
              Expert surgical care designed around you
            </h2>
          </div>

          {/* MIDDLE */}
          <div className="text-[#4A6575] leading-relaxed text-[15px]">
            <p>
              Dr. Sonam Tyagi delivers specialized surgical care with a
              strong focus on patient safety and minimally invasive
              techniques.
            </p>

            <p className="mt-6">
              Each consultation emphasizes transparency, compassion,
              and empowering patients to make confident healthcare
              decisions.
            </p>
          </div>

          {/* RIGHT */}
          <div className="text-[#4A6575] leading-relaxed text-[15px]">
            <p>
              Practicing at Emanate Polyclinic in Safdarjung Enclave, 
              offering advanced bariatric and general surgical care
              within a modern medical environment.
            </p>

            <p className="mt-6">
              The goal is simple — helping patients achieve healthier
              lives through safe and effective surgical solutions.
            </p>
          </div>

        </div>
        <div className="grid lg:grid-cols-2 gap-20 items-center mt-14 md:mt-28">

          {/* LEFT SIDE */}
          <div>

            {/* Main Image */}
            <div className="relative h-[460px] rounded-lg overflow-hidden group">
              <Image
                src="/images/Dr Sonam Tyagi.jpeg"
                alt="clinic"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Text */}
            <p className="mt-8 text-[#4A6575] leading-relaxed max-w-lg">
              Our practice combines modern surgical expertise with a
              patient-first approach, delivering safe, precise, and
              personalized treatment for lasting health outcomes.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div>

            {/* Eyebrow */}
            <p className="text-xs uppercase tracking-[0.4em] text-[#5FA8E8] font-semibold mb-4">
              Advanced surgical care
            </p>

            {/* Heading */}
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#1F3A4D] leading-tight">
              Transforming health,
              restoring confidence
            </h3>

            {/* Description */}
            <p className="mt-6 text-[#4A6575] max-w-lg leading-relaxed">
              Combining medical expertise with modern techniques,
              treatments are focused on improving long-term health
              and enhancing overall quality of life.
            </p>

            {/* Image */}
            <div className="relative h-[240px] rounded-lg overflow-hidden mt-12 group">
              <Image
                src="/images/Dr Sonam in OPD.jpeg"
                alt="patients"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}