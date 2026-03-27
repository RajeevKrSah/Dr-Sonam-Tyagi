"use client"

import Image from "next/image"
import { motion, Variants } from "framer-motion"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  },
}

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  },
}

export default function About() {
  return (
    <section className="relative bg-[#F4F8FB] py-16 md:py-32 overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-4 md:px-12 lg:px-20"
      >
        <div className="grid lg:grid-cols-3 gap-16 items-start">

          {/* LEFT */}
          <motion.div variants={itemVariants}>
            <p className="text-xs uppercase tracking-[0.4em] text-[#5FA8E8] font-semibold mb-4">
              About
            </p>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#1F3A4D] leading-tight">
              Expert surgical care designed around you
            </h2>
          </motion.div>

          {/* MIDDLE */}
          <motion.div variants={itemVariants} className="text-[#4A6575] leading-relaxed text-[15px]">
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
          </motion.div>

          {/* RIGHT */}
          <motion.div variants={itemVariants} className="text-[#4A6575] leading-relaxed text-[15px]">
            <p>
              Practicing at Emanate Polyclinic in Safdarjung Enclave, 
              offering advanced bariatric and general surgical care
              within a modern medical environment.
            </p>

            <p className="mt-6">
              The goal is simple — helping patients achieve healthier
              lives through safe and effective surgical solutions.
            </p>
          </motion.div>

        </div>
        <div className="grid lg:grid-cols-2 gap-20 items-center mt-14 md:mt-28">

          {/* LEFT SIDE */}
          <motion.div variants={itemVariants}>

            {/* Main Image */}
            <motion.div 
              variants={imageVariants}
              className="relative h-[460px] rounded-lg overflow-hidden group"
            >
              <Image
                src="/images/Dr Sonam Tyagi.jpeg"
                alt="clinic"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              {/* subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>

            {/* Text */}
            <p className="mt-8 text-[#4A6575] leading-relaxed max-w-lg">
              Our practice combines modern surgical expertise with a
              patient-first approach, delivering safe, precise, and
              personalized treatment for lasting health outcomes.
            </p>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div variants={itemVariants}>

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
            <motion.div 
              variants={imageVariants}
              className="relative h-[240px] rounded-lg overflow-hidden mt-12 group"
            >
              <Image
                src="/images/Dr Sonam in OPD.jpeg"
                alt="patients"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}