"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "How can I schedule a consultation with Dr. Sonam Tyagi?",
    answer:
      "You can schedule a consultation by contacting The Clinics in G32, New Delhi or by booking an appointment through our online contact form.",
  },
  {
    question: "Does Dr. Sonam Tyagi offer bariatric surgery consultations?",
    answer:
      "Yes. Dr. Sonam Tyagi specializes in bariatric and general surgical procedures and provides detailed consultations to determine the most suitable treatment plan.",
  },
  {
    question: "What conditions are treated during consultation?",
    answer:
      "Consultations cover bariatric surgery, weight management procedures, and a range of general surgical conditions requiring expert evaluation.",
  },
  {
    question: "Are new patients welcome for consultation?",
    answer:
      "Absolutely. New patients are welcome and receive personalized guidance, clear treatment planning, and dedicated surgical care.",
  },
]

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(1)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="relative bg-[#EAF1F6] py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-12 lg:px-20 grid lg:grid-cols-2 gap-24">

        {/* ───────── LEFT SIDE ───────── */}
        <div>

          {/* Eyebrow */}
          <p className="text-xs uppercase tracking-[0.4em] text-[#5FA8E8] font-semibold mb-4">
            Patient support
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#1F3A4D] leading-tight">
            Frequently asked
            <br />
            questions
          </h2>

          {/* Description */}
          <p className="mt-6 text-[#4A6575] max-w-md leading-relaxed">
            Find answers to common questions about consultations,
            surgical care, and treatment options.
          </p>

        </div>

        {/* ───────── RIGHT SIDE ───────── */}
        <div className="space-y-8">

          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-b border-[#1F3A4D]/10 pb-6"
            >

              {/* Question */}
              <button
                onClick={() => toggle(i)}
                className="
                  flex w-full items-center justify-between text-left
                  group
                  outline-none focus:outline-none
                  focus:ring-0 focus:ring-offset-0
                "
              >
                <span className="
                  text-[#1F3A4D] text-lg font-light
                  transition-colors duration-300
                  group-hover:text-black
                ">
                  {faq.question}
                </span>

                <span className="
                  text-[#7A97AA]
                  transition-all duration-300
                  group-hover:text-[#1F3A4D]
                ">
                  {openIndex === i ? (
                    <Minus size={18} />
                  ) : (
                    <Plus size={18} />
                  )}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`
                  overflow-hidden transition-all duration-500
                  ${openIndex === i ? "max-h-40 mt-4" : "max-h-0"}
                `}
              >
                <p className="text-[#4A6575] leading-relaxed max-w-xl">
                  {faq.answer}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}