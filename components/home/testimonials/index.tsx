"use client";

import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
    id: number;
    text: string;
    author: string;
    role: string;
    image: string;
}

const patientTestimonials: Testimonial[] = [
    {
        id: 1,
        text: "Dr. Sonam's expertise in laparoscopic surgery is unmatched. My recovery was much faster than I expected, and the care I received at Emanate was exceptional. Precision and compassion in every step.",
        author: "Rajesh Kumar",
        role: "Bariatric Surgery Patient",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        id: 2,
        text: "The level of precision and compassion shown by Dr. Tyagi is truly reassuring. She explained the entire procedure clearly, making me feel comfortable and confident throughout my general surgery journey.",
        author: "Priyanka Sharma",
        role: "General Surgery Patient",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        id: 3,
        text: "I am grateful for the life-changing bariatric procedure. Dr. Sonam and her team provided support not just during the surgery, but throughout my long-term health journey. Truly life-altering care.",
        author: "Amit Singh",
        role: "Metabolic Surgery Patient",
        image: "https://randomuser.me/api/portraits/men/45.jpg"
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % patientTestimonials.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + patientTestimonials.length) % patientTestimonials.length);
    };

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 100 : -100,
            opacity: 0,
        }),
    };

    const testimonial = patientTestimonials[currentIndex];

    return (
        <section className="relative w-full bg-[#F4F8FB] py-16 md:py-32 overflow-hidden text-center">
            <div className="container mx-auto px-4 md:px-12 lg:px-20">
                {/* ───────── STATS ───────── */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
                    }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24"
                >
                    {[
                        { number: "250+", label: "Patients treated" },
                        { number: "15+", label: "Years of experience" },
                        { number: "100+", label: "Successful procedures" },
                        { number: "20k+", label: "Consultations delivered" },
                    ].map((item, i) => (
                        <motion.div 
                            key={i} 
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                            }}
                            className="text-center"
                        >
                            <h3 className="text-3xl md:text-4xl font-light text-[#1F3A4D]">
                                {item.number}
                            </h3>
                            <p className="text-[10px] uppercase tracking-[0.3em] text-[#7A97AA] mt-3">
                                {item.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* ───────── HEADING ───────── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <p className="text-xs uppercase tracking-[0.4em] text-[#5FA8E8] font-semibold mb-4">
                        Testimonials
                    </p>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#1F3A4D] mb-16">
                        Patient experiences
                        <br />
                        that build trust
                    </h2>
                </motion.div>

                {/* ───────── TESTIMONIAL CARD ───────── */}
                <div className="max-w-4xl mx-auto relative overflow-hidden">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.4 },
                            }}
                            className="w-full"
                        >
                            {/* Quote Icon */}
                            <FaQuoteLeft className="text-[#1F3A4D]/20 text-2xl mb-6 mx-auto" />

                            {/* Text */}
                            <p className="text-[#4A6575] text-lg md:text-xl leading-relaxed mb-10 min-h-[120px] flex items-center justify-center italic font-light">
                                "{testimonial.text}"
                            </p>

                            {/* Divider */}
                            <div className="h-[1px] bg-[#1F3A4D]/10 w-full mb-6 md:mb-10" />

                            <div className="flex justify-between items-center gap-8">
                                {/* Profile */}
                                <div className="flex items-center gap-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.author}
                                        className="w-14 h-14 rounded-full object-cover shadow-md"
                                    />
                                    <div className="text-left">
                                        <p className="text-[#1F3A4D] font-medium tracking-wide">
                                            {testimonial.author}
                                        </p>
                                        <p className="text-xs uppercase text-[#7A97AA]">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>

                                {/* ───────── NAVIGATION ───────── */}
                                <div className="flex items-center gap-6">
                                    <button
                                        onClick={prevSlide}
                                        className="
                                            w-12 h-12 flex items-center justify-center
                                            border border-[#1F3A4D]/30 text-[#1F3A4D]
                                            hover:bg-[#1F3A4D] hover:text-white hover:border-[#1F3A4D]
                                            transition-all duration-300
                                            outline-none focus:outline-none focus:ring-0
                                        "
                                        aria-label="Previous testimonial"
                                    >
                                        <IoArrowBack size={16} />
                                    </button>

                                    <button
                                        onClick={nextSlide}
                                        className="
                                            w-12 h-12 flex items-center justify-center
                                            border border-[#1F3A4D]/30 text-[#1F3A4D]
                                            hover:bg-[#1F3A4D] hover:text-white hover:border-[#1F3A4D]
                                            transition-all duration-300
                                            outline-none focus:outline-none focus:ring-0
                                        "
                                        aria-label="Next testimonial"
                                    >
                                        <IoArrowForward size={16} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
