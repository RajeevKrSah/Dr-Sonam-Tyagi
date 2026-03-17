"use client"

export default function Contact() {

  return (
    <section className="relative bg-[#F4F8FB] py-16 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-12 lg:px-20 grid lg:grid-cols-2 gap-24 items-center">

        {/* ───────── LEFT SIDE ───────── */}
        <div>

          {/* Eyebrow */}
          <p className="text-xs uppercase tracking-[0.4em] text-[#5FA8E8] font-semibold mb-4">
            Contact
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#1F3A4D] leading-tight">
            We’re here to help you
          </h2>

          {/* Description */}
          <p className="text-[#4A6575] mt-6 max-w-md leading-relaxed">
            Whether you have a question or need guidance, reach out and
            we’ll respond with care and clarity.
          </p>

          {/* ───────── FORM ───────── */}
          <form className="mt-12 space-y-8">

            {/* Name */}
            <input
              type="text"
              placeholder="Full name *"
              className="
                w-full bg-transparent border-b border-[#1F3A4D]/20
                pb-3 text-[#1F3A4D] placeholder:text-[#7A97AA]
                outline-none focus:outline-none
                focus:ring-0 focus:ring-offset-0
                focus:border-[#1F3A4D]
                transition-all
              "
            />

            {/* Row */}
            <div className="grid grid-cols-2 gap-8">
              <input
                type="text"
                placeholder="Phone number *"
                className="
                  bg-transparent border-b border-[#1F3A4D]/20
                  pb-3 text-[#1F3A4D] placeholder:text-[#7A97AA]
                  outline-none focus:outline-none
                  focus:ring-0 focus:ring-offset-0
                  focus:border-[#1F3A4D]
                  transition-all
                "
              />

              <input
                type="email"
                placeholder="Email address"
                className="
                  bg-transparent border-b border-[#1F3A4D]/20
                  pb-3 text-[#1F3A4D] placeholder:text-[#7A97AA]
                  outline-none focus:outline-none
                  focus:ring-0 focus:ring-offset-0
                  focus:border-[#1F3A4D]
                  transition-all
                "
              />
            </div>

            {/* Message */}
            <textarea
              rows={3}
              placeholder="Anything else you would like us to know?"
              className="
                w-full bg-transparent border-b border-[#1F3A4D]/20
                pb-3 text-[#1F3A4D] placeholder:text-[#7A97AA]
                outline-none focus:outline-none
                focus:ring-0 focus:ring-offset-0
                focus:border-[#1F3A4D]
                transition-all resize-none
              "
            />

            {/* Checkbox */}
            <label className="flex items-start gap-3 text-sm text-[#6B8797]">
              <input
                type="checkbox"
                className="
                  mt-1 accent-[#1F3A4D]
                  outline-none focus:outline-none
                  focus:ring-0 focus:ring-offset-0
                "
              />
              I understand and agree to the privacy policy.
            </label>

            {/* CTA */}
            <div className="pt-4">
              <button
                type="submit"
                className="
                  group px-10 py-4 text-xs tracking-[0.2em] font-semibold uppercase
                  border border-[#1F3A4D]/40 text-[#1F3A4D]
                  hover:bg-[#1F3A4D] hover:text-white hover:border-[#1F3A4D]
                  transition-all duration-300
                "
              >
                Submit request
              </button>
            </div>

          </form>
        </div>

        {/* ───────── RIGHT SIDE (MAP) ───────── */}
        <div className="relative h-[620px] overflow-hidden group">

          <iframe
            src="https://www.google.com/maps?q=New+York&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
        </div>

      </div>
    </section>
  )
}