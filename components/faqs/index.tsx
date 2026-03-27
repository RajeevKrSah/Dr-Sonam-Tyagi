"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "How can I schedule a consultation with Dr. Sonam Tyagi?",
    answer:
      "You can schedule a consultation by visiting Emanate Polyclinic in Safdarjung Enclave, New Delhi, or by calling us at +91 9266721515. Online bookings are also available via our contact form.",
  },
  {
    question: "What surgical specializations does Dr. Sonam Tyagi offer?",
    answer:
      "Dr. Sonam Tyagi specializes in Advanced Bariatric (Weight Loss) Surgery, Laparoscopic GI Surgery, and Metabolic Surgery for Diabetes control, alongside expert general surgical care.",
  },
  {
    question: "Are laparoscopic (minimally invasive) options available?",
    answer:
      "Yes, the majority of our procedures, including hernia repairs, gallbladder removals, and bariatric surgeries, are performed using advanced laparoscopic techniques to ensure faster recovery and minimal scarring.",
  },
  {
    question: "What should I bring for my first surgical consultation?",
    answer:
      "Please bring any recent medical reports, blood work results, or imaging (Ultrasounds/CT scans) related to your condition. This helps Dr. Tyagi provide a more accurate evaluation during your visit.",
  },
]

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="relative bg-[#EAF1F6] py-16 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-12 lg:px-20 grid lg:grid-cols-2 gap-12 md:gap-24">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

          {/* Eyebrow */}
          <p className="text-xs uppercase tracking-[0.4em] text-[#5FA8E8] font-semibold mb-4">
            Patient Support
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#1F3A4D] leading-tight">
            Frequently Asked
            <br />
            Questions
          </h2>

          {/* Description */}
          <p className="mt-6 text-[#4A6575] max-w-md leading-relaxed">
            Find expert answers to common questions about our clinical services,
            surgical procedures, and patient care protocols.
          </p>

        </motion.div>

        {/* ───────── RIGHT SIDE ───────── */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-b border-[#1F3A4D]/10 pb-4"
            >
              {/* Question */}
              <button
                onClick={() => toggle(i)}
                className="
                  flex w-full items-center justify-between text-left
                  group py-4
                  outline-none focus:outline-none
                  focus:ring-0 focus:ring-offset-0
                "
              >
                <span className={`
                  text-lg font-medium transition-colors duration-300
                  ${openIndex === i ? "text-[#5FA8E8]" : "text-[#1F3A4D] group-hover:text-black"}
                `}>
                  {faq.question}
                </span>

                <span className={`
                  transition-all duration-300
                  ${openIndex === i ? "text-[#5FA8E8] rotate-180" : "text-[#7A97AA] group-hover:text-[#1F3A4D]"}
                `}>
                  {openIndex === i ? (
                    <Minus size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                </span>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-[#4A6575] leading-relaxed max-w-xl pb-6">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}