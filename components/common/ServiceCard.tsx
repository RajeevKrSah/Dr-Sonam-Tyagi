"use client";

import Image from "next/image";
import Link from "next/link";
import { Service } from "@/lib/services";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  service: Service;
  index?: number;
}

const ServiceCard = ({ service, index = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 * index, ease: "easeOut" }}
      className="group relative h-[500px] md:h-[550px] w-full perspective-1000"
    >
      <Link href={`/services/${service.slug}`} className="block h-full w-full">
        {/* Main Card Container */}
        <div className="relative h-full w-full overflow-hidden rounded-lg bg-slate-900 shadow-2xl transition-all duration-700 hover:shadow-[#5FA8E8]/20">

          {/* Parallax Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
            />
            {/* Dynamic Overlay - gets deeper on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#5FA8E8]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          </div>

          {/* Content Container - Glassmorphic */}
          <div className="absolute inset-x-4 bottom-4 z-10 p-6 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden transform group-hover:translate-y-[-8px] transition-transform duration-500">

            {/* Glassmorphism Inner Glow */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-[#5FA8E8]/20 via-transparent to-white/10 opacity-30 blur-xl" />

            <div className="relative z-10">

              <h3 className="text-2xl md:text-3xl font-normal font-raleway text-white mb-3 tracking-tight group-hover:text-[#5FA8E8] transition-colors duration-300 leading-tight">
                {service.title}
              </h3>

              {/* Call to Action */}
              <div className="flex items-center justify-between mt-2 pt-4 border-t border-white/10">
                <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-white/40 group-hover:text-white transition-colors duration-500">
                  Explore Details
                </span>

                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#5FA8E8]/10 border border-[#5FA8E8]/30 group-hover:bg-[#5FA8E8] group-hover:border-[#5FA8E8] transition-all duration-500 transform group-hover:rotate-[-45deg]">
                  <ArrowRight className="text-white transform group-hover:scale-110" size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
