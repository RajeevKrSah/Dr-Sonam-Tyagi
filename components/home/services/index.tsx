"use client"

import Image from "next/image"

const services = [
  {
    title: "Advanced bariatric surgery for effective weight management",
    image: "/service1.jpg",
  },
  {
    title: "Expert general surgical procedures with modern techniques",
    image: "/service1.jpg",
  },
  {
    title: "Personalized consultation and comprehensive patient care",
    image: "/service1.jpg",
  },
]

export default function Services() {
  return (
    <section className="relative bg-[#EAF1F6] py-16 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-12 lg:px-20 text-center">

        {/* Eyebrow */}
        <p className="text-xs uppercase tracking-[0.4em] text-[#5FA8E8] font-semibold mb-4">
          Our expertise
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#1F3A4D] max-w-3xl mx-auto">
          Specialized surgical services
        </h2>

        {/* Description */}
        <p className="mt-6 text-[#4A6575] max-w-xl mx-auto leading-relaxed">
          Advanced bariatric and general surgical care focused on precision,
          safety, and long-term patient wellbeing.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">

          {services.map((service, i) => (
            <div
              key={i}
              className="group relative h-[520px] overflow-hidden rounded-2xl"
            >
              {/* Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay (hero-style layered gradient) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">

                {/* Title */}
                <h3 className="
                  text-white text-xl md:text-2xl leading-snug font-light
                  transition-all duration-500
                  translate-y-4 opacity-90
                  group-hover:translate-y-0 group-hover:opacity-100
                ">
                  {service.title}
                </h3>

                {/* CTA */}
                <div className="
                  mt-6 opacity-0 translate-y-4
                  group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-500 delay-100
                ">
                  <span className="
                    inline-block text-xs tracking-[0.2em] uppercase font-semibold
                    text-white border-b border-white/40 pb-1
                    group-hover:border-white
                  ">
                    Learn More
                  </span>
                </div>
              </div>

              {/* Subtle hover border glow */}
              <div className="
                absolute inset-0 rounded-2xl border border-white/10
                group-hover:border-white/30 transition duration-500"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}