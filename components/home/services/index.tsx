"use client"

import ServiceCard from "@/components/common/ServiceCard"
import { services } from "@/lib/services";

export default function Services() {
  return (
    <section className="relative bg-[#EAF1F6] py-16 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-12 lg:px-20 text-center">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-12">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}