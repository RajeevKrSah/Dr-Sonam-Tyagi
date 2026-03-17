"use client";

import { FaQuoteLeft } from "react-icons/fa";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

export default function Testimonials() {
    return (
        <section className="relative w-full bg-[#F4F8FB] py-16 md:py-32 overflow-hidden text-center">
            <div className="container mx-auto px-4 md:px-12 lg:px-20">
                {/* ───────── STATS ───────── */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
                    {[
                        { number: "250+", label: "Patients treated" },
                        { number: "15+", label: "Years of experience" },
                        { number: "100+", label: "Successful procedures" },
                        { number: "20k+", label: "Consultations delivered" },
                    ].map((item, i) => (
                        <div key={i} className="text-center">

                            <h3 className="text-3xl md:text-4xl font-light text-[#1F3A4D]">
                                {item.number}
                            </h3>

                            <p className="text-[10px] uppercase tracking-[0.3em] text-[#7A97AA] mt-3">
                                {item.label}
                            </p>

                        </div>
                    ))}
                </div>

                {/* ───────── HEADING ───────── */}
                <p className="text-xs uppercase tracking-[0.4em] text-[#5FA8E8] font-semibold mb-4">
                    Testimonials
                </p>

                <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#1F3A4D] mb-16">
                    Patient experiences
                    <br />
                    that build trust
                </h2>

                {/* ───────── TESTIMONIAL CARD ───────── */}
                <div className="max-w-3xl mx-auto relative">

                    {/* Quote */}
                    <FaQuoteLeft className="text-[#1F3A4D]/20 text-2xl mb-6 mx-auto" />

                    {/* Text */}
                    <p className="text-[#4A6575] text-lg leading-relaxed mb-10">
                        We felt reassured knowing our family member was receiving such attentive
                        and professional care. The guidance, support, and expertise made a
                        meaningful difference in their recovery and overall wellbeing.
                    </p>

                    {/* Divider */}
                    <div className="h-[1px] bg-[#1F3A4D]/10 w-full mb-6 md:mb-10" />

                    <div className="flex justify-between items-center">
                        {/* Profile */}
                        <div className="flex items-center justify-center gap-4">

                            <img
                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                alt="client"
                                className="w-14 h-14 rounded-full object-cover"
                            />

                            <div className="text-left">
                                <p className="text-[#1F3A4D] font-medium tracking-wide">
                                    Catherine McDaniel
                                </p>
                                <p className="text-xs uppercase tracking-[0.2em] text-[#7A97AA]">
                                    Patient relative
                                </p>
                            </div>

                        </div>

                        {/* ───────── NAVIGATION ───────── */}
                        <div className="flex justify-center gap-6">

                            <button
                                className="
              w-12 h-12 flex items-center justify-center
              border border-[#1F3A4D]/30 text-[#1F3A4D]
              hover:bg-[#1F3A4D] hover:text-white hover:border-[#1F3A4D]
              transition-all duration-300
              outline-none focus:outline-none focus:ring-0 focus:ring-offset-0
            "
                            >
                                <IoArrowBack size={16} />
                            </button>

                            <button
                                className="
              w-12 h-12 flex items-center justify-center
              border border-[#1F3A4D]/30 text-[#1F3A4D]
              hover:bg-[#1F3A4D] hover:text-white hover:border-[#1F3A4D]
              transition-all duration-300
              outline-none focus:outline-none focus:ring-0 focus:ring-offset-0
            "
                            >
                                <IoArrowForward size={16} />
                            </button>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}