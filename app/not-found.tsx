"use client"

import Link from "next/link"

export default function NotFound() {
    return (
        <section className="relative min-h-screen bg-[#EAF1F6] flex items-center justify-center px-8 md:px-12 xl:px-20 overflow-hidden">

            <div className="text-center max-w-2xl">

                {/* Eyebrow */}
                <p className="text-xs uppercase tracking-[0.4em] text-[#5FA8E8] font-semibold mb-6">
                    Page not found
                </p>

                {/* 404 Number */}
                <h1 className="text-[80px] md:text-[120px] font-light text-[#1F3A4D]/10 leading-none mb-6">
                    404
                </h1>

                {/* Heading */}
                <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#1F3A4D] leading-tight">
                    This page doesn’t exist
                </h2>

                {/* Description */}
                <p className="mt-6 text-[#4A6575] leading-relaxed max-w-md mx-auto">
                    The page you’re looking for may have been moved or is no longer available.
                    Let us help you find what you need.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">

                    {/* Primary CTA */}
                    <Link
                        href="/"
                        className="
              px-10 py-4 text-xs tracking-[0.2em] font-semibold uppercase
              border border-[#1F3A4D]/40 text-[#1F3A4D]
              hover:bg-[#1F3A4D] hover:text-white hover:border-[#1F3A4D]
              transition-all duration-300
            "
                    >
                        Back to home
                    </Link>

                </div>

            </div>

            {/* Decorative subtle gradient (like hero feel) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/[0.03] to-transparent pointer-events-none" />

        </section>
    )
}