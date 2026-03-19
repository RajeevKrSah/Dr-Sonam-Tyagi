"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

/* ─────────────── Data ─────────────── */
const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "Bariatric Surgery", href: "/services/bariatric-surgery" },
  { label: "General Surgery", href: "/services/general-surgery" },
  { label: "Metabolic Surgery", href: "/services/metabolic-surgery" },
  { label: "GI Surgery", href: "/services/gi-surgery" },
];

const hours = [
  { day: "Mon – Fri", time: "10:00 AM – 6:00 PM" },
  { day: "Saturday", time: "10:00 AM – 5:00 PM" },
];

const socials = [
  { Icon: FaFacebookF, href: "#", label: "Facebook" },
  { Icon: FaTwitter, href: "#", label: "Twitter" },
  { Icon: FaInstagram, href: "#", label: "Instagram" },
  { Icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
];

/* ─────────────── Component ─────────────── */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0d0d0d] text-white relative overflow-hidden">

      {/* ── Decorative top accent line ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5FA8E8] to-transparent" />

      {/* ── Subtle background texture blobs ── */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#5FA8E8]/[0.03] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#5FA8E8]/[0.04] rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

      {/* ─────── Newsletter Banner ─────── */}
      <div className="relative border-b border-white/[0.06]">
        <div className="container mx-auto px-4 md:px-12 lg:px-20 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {/* Left copy */}
            <div className="max-w-md">
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#5FA8E8] font-semibold mb-2">
                Stay informed
              </p>
              <h3 className="text-2xl text-white leading-snug">
                Subscribe to our health newsletter
              </h3>
            </div>

            {/* Email form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full md:w-auto md:min-w-[440px]"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                aria-label="Email address"
                className="
                  flex-1 bg-white/[0.05] border border-white/10
                  px-5 py-3.5 text-sm text-white placeholder:text-white/30
                  outline-none focus:border-[#5FA8E8]/50
                  transition-colors duration-200
                "
              />
              <button
                type="submit"
                className="
                  px-6 py-3.5 bg-[#5FA8E8] hover:bg-[#1C5C8C] text-white
                  text-xs tracking-[0.18em] font-semibold uppercase
                  transition-colors duration-300 shrink-0
                "
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ─────── Main Grid ─────── */}
      <div className="relative container mx-auto px-4 md:px-12 lg:px-20 pt-20 pb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14">

          {/* COL 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3 group mb-6">
              <span className="w-10 h-10 rounded-full border border-[#5FA8E8]/40 flex items-center justify-center text-base group-hover:border-[#5FA8E8] transition-all duration-300">
                🌿
              </span>
              <span className="text-lg font-semibold tracking-widest uppercase text-white">
                Dr Sonam Tyagi
              </span>
            </Link>
            {/* Contact details */}
            <ul className="space-y-3.5">
              {[
                { Icon: FaPhone, text: "+91 9266721515", href: "tel:+919266721515" },
                { Icon: FaEnvelope, text: "info@emanatedental.in", href: "mailto:info@emanatedental.in" },
                { Icon: FaMapMarkerAlt, text: "Ground Floor, B-5 Block, B5/122, Humayunpur, Safdarjung Enclave, New Delhi, Delhi 110029", href: "#" },
              ].map(({ Icon, text, href }) => (
                <li key={text}>
                  <a
                    href={href}
                    className="flex items-start gap-3 text-sm text-white/45 hover:text-white/80 transition-colors duration-200 group"
                  >
                    <Icon size={13} className="mt-0.5 text-[#5FA8E8]/60 group-hover:text-[#5FA8E8] transition-colors duration-200 shrink-0" />
                    <span>{text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 2 — Quick Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.3em] uppercase text-white/40 mb-7">
              Quick Links
            </h4>
            <ul className="space-y-3.5">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="group flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3 — Services */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.3em] uppercase text-white/40 mb-7">
              Our Services
            </h4>
            <ul className="space-y-3.5">
              {services.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="group flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 4 — Hours */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.3em] uppercase text-white/40 mb-7">
              Working Hours
            </h4>
            <ul className="space-y-0">
              {hours.map(({ day, time }) => (
                <li
                  key={day}
                  className="flex justify-between items-center py-3.5 border-b border-white/[0.06] last:border-none"
                >
                  <span className="text-sm text-white/55">{day}</span>
                  <span className="text-sm text-white/80 font-medium tabular-nums">{time}</span>
                </li>
              ))}
            </ul>

            {/* Book CTA */}
            <Link
              href="/book"
              className="
                mt-8 flex items-center justify-center gap-2
                w-full py-3.5 border border-[#5FA8E8]/40
                text-xs tracking-[0.2em] font-semibold uppercase
                text-[#5FA8E8] hover:bg-[#5FA8E8] hover:text-white hover:border-[#5FA8E8]
                transition-all duration-300 group
              "
            >
              Book Appointment
              <FaArrowRight
                size={10}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
          </div>

        </div>
      </div>

      {/* ─────── Bottom Bar ─────── */}
      <div className="relative border-t border-white/[0.06]">
        <div className="container mx-auto px-4 md:px-12 lg:px-20 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5">

            {/* Copyright */}
            <p className="text-xs text-white/30 tracking-wide">
              © {year} Dr Sonam Tyagi. All rights reserved.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              {socials.map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="
                    w-8 h-8 flex items-center justify-center
                    border border-white/10 text-white/30
                    hover:border-[#5FA8E8]/50 hover:text-[#5FA8E8]
                    transition-all duration-200
                  "
                >
                  <Icon size={12} />
                </Link>
              ))}
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}