"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Mental Health", href: "/services/mental-health" },
      { label: "Wellness Programs", href: "/services/wellness" },
      { label: "Therapy Sessions", href: "/services/therapy" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

function DropdownMenu({ items }: { items: { label: string; href: string }[] }) {
  return (
    <div
      className="
        absolute top-full left-1/2 -translate-x-1/2 mt-4
        bg-white shadow-2xl border border-gray-100
        min-w-[200px] py-2 rounded-sm
        opacity-0 invisible group-hover:opacity-100 group-hover:visible
        translate-y-2 group-hover:translate-y-0
        transition-all duration-300 ease-out z-50
      "
    >
      {/* hover bridge so cursor can travel from link to dropdown */}
      <div className="absolute -top-4 left-0 right-0 h-4 bg-transparent" />
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="
            block px-5 py-2.5 text-sm text-gray-700 font-medium
            hover:text-[#5FA8E8] hover:bg-gray-50
            transition-colors duration-200
          "
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

/* ─────────────── Mobile Drawer (portalled) ─────────────── */
interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  openSubmenu: string | null;
  setOpenSubmenu: (v: string | null) => void;
}

function MobileDrawer({
  open,
  onClose,
  openSubmenu,
  setOpenSubmenu,
}: MobileDrawerProps) {
  /* Only portal-mount on client */
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const drawer = (
    <>
      {/* Backdrop — always rendered so it can fade out */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`
          fixed inset-0 z-[9998] bg-black/60
          transition-opacity duration-500
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`
          fixed top-0 right-0 bottom-0 z-[9999]
          w-full sm:max-w-sm
          bg-[#111111] text-white
          flex flex-col
          shadow-[-12px_0_50px_rgba(0,0,0,0.5)]
          transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.18,1)]
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* ── Drawer Header ── */}
        <div className="flex items-center justify-between px-7 py-6 border-b border-white/10 shrink-0">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-white/50">
            Navigation
          </span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="
              w-9 h-9 flex items-center justify-center
              border border-white/20 hover:border-white/50
              text-white/50 hover:text-white
              transition-all duration-200
            "
          >
            <FaTimes size={14} />
          </button>
        </div>

        {/* ── Nav Links ── */}
        <nav className="flex-1 overflow-y-auto px-7 py-8" aria-label="Mobile navigation">
          <ul className="space-y-0">
            {navItems.map((item, i) => (
              <li key={item.label} className="border-b border-white/[0.07] last:border-none">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="
                      flex-1 flex items-center gap-4 py-4
                      text-sm font-medium tracking-wide
                      text-white/65 hover:text-white
                      transition-colors duration-200
                    "
                  >
                    <span className="text-[10px] font-mono text-[#5FA8E8]/50 w-5 shrink-0 tabular-nums">
                      0{i + 1}
                    </span>
                    {item.label}
                  </Link>

                  {item.children && (
                    <button
                      onClick={() =>
                        setOpenSubmenu(openSubmenu === item.label ? null : item.label)
                      }
                      aria-label={`Toggle ${item.label} submenu`}
                      aria-expanded={openSubmenu === item.label}
                      className="
                        ml-2 w-8 h-8 flex items-center justify-center shrink-0
                        text-white/25 hover:text-white/70
                        transition-colors duration-200
                      "
                    >
                      <FaChevronDown
                        size={11}
                        className={`transition-transform duration-300 ${openSubmenu === item.label ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                  )}
                </div>

                {/* Sub-items */}
                {item.children && (
                  <div
                    className={`
                      overflow-hidden transition-all duration-300
                      ${openSubmenu === item.label ? "max-h-48 pb-3" : "max-h-0"}
                    `}
                  >
                    <ul className="ml-9 space-y-0.5">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            onClick={onClose}
                            className="
                              flex items-center gap-2.5 py-2 text-[13px]
                              text-white/35 hover:text-[#5FA8E8]
                              transition-colors duration-200
                            "
                          >
                            <span className="w-4 h-px bg-white/15 shrink-0" />
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Bottom CTA ── */}
        <div className="px-7 py-6 space-y-3 border-t border-white/10 shrink-0">
          <a
            href="tel:18004585697"
            className="
              flex items-center justify-center gap-2.5 w-full py-3
              border border-white/15 hover:border-white/35
              text-xs tracking-widest font-medium
              text-white/50 hover:text-white
              transition-all duration-200
            "
          >
            <FaPhone size={11} />
            <span>1 800 458 56 97</span>
          </a>

          <Link
            href="/book"
            onClick={onClose}
            className="
              block w-full py-3.5 text-center
              text-xs tracking-[0.2em] font-semibold uppercase
              bg-[#5FA8E8] hover:bg-[#1C5C8C] text-white
              transition-colors duration-300
            "
          >
            Book Now
          </Link>

          {/* Social icons */}
          <div className="flex items-center justify-center gap-3 pt-1">
            {[
              { Icon: FaFacebookF, href: "#", label: "Facebook" },
              { Icon: FaTwitter, href: "#", label: "Twitter" },
              { Icon: FaInstagram, href: "#", label: "Instagram" },
            ].map(({ Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="
                  w-8 h-8 flex items-center justify-center
                  border border-white/15 text-white/30
                  hover:border-white/40 hover:text-white/70
                  transition-all duration-200
                "
              >
                <Icon size={11} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  return createPortal(drawer, document.body);
}

/* ─────────────── Main Navbar ─────────────── */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  /* Close drawer on Escape */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 w-full z-50
          transition-all duration-500 ease-in-out
          ${scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_2px_24px_rgba(0,0,0,0.08)]"
            : "bg-transparent"
          }
        `}
      >
        {/* ── Top Info Bar (hides on scroll) ── */}
        <div
          className={`
            overflow-hidden transition-all duration-500
            ${scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"}
            bg-white/10 backdrop-blur-sm border-b border-white/10
          `}
        >
          <div className="container mx-auto px-4 md:px-12 lg:px-20">
            <div className="flex justify-between items-center py-2">
              <div className="flex items-center gap-6 text-xs text-white/80">
                <span className="flex items-center gap-1.5">
                  <FaClock size={10} className="opacity-70" />
                  Mon – Fri&nbsp;8:00–18:00&nbsp;/&nbsp;Sun&nbsp;8:00–14:00
                </span>
                <span className="hidden sm:flex items-center gap-1.5">
                  <FaPhone size={10} className="opacity-70" />
                  1-800-458-56987
                </span>
                <span className="hidden lg:flex items-center gap-1.5">
                  <FaMapMarkerAlt size={10} className="opacity-70" />
                  47 Bakery Street, London, UK
                </span>
              </div>
              <div className="flex items-center gap-3">
                {[
                  { Icon: FaFacebookF, href: "#", label: "Facebook" },
                  { Icon: FaTwitter, href: "#", label: "Twitter" },
                  { Icon: FaInstagram, href: "#", label: "Instagram" },
                ].map(({ Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    className="
                      w-7 h-7 flex items-center justify-center rounded-full
                      text-white/70 hover:text-white
                      border border-white/20 hover:border-white/60
                      transition-all duration-300
                    "
                  >
                    <Icon size={10} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Main Nav Row ── */}
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex justify-between items-center py-4 md:py-5">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label="Asclepius Home"
            >
              <span
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center text-base
                  border transition-all duration-300 group-hover:scale-105
                  ${scrolled ? "border-gray-300 text-gray-700" : "border-white/60 text-white"}
                `}
              >
                🌿
              </span>
              <span
                className={`
                  text-lg font-semibold tracking-widest uppercase
                  transition-colors duration-300
                  ${scrolled ? "text-gray-900" : "text-white"}
                `}
              >
                Asclepius
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <nav
              className="hidden lg:flex items-center gap-1"
              role="navigation"
              aria-label="Main navigation"
            >
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  <Link
                    href={item.href}
                    className={`
                      flex items-center gap-1
                      px-4 py-2 text-sm font-medium tracking-wide
                      relative overflow-hidden rounded-sm
                      transition-colors duration-300
                      ${scrolled ? "text-gray-700 hover:text-gray-900" : "text-white/90 hover:text-white"}
                      after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
                      after:w-0 after:h-[2px] after:bg-[#5FA8E8]
                      after:transition-all after:duration-300
                      hover:after:w-4/5
                    `}
                  >
                    {item.label}
                    {item.children && (
                      <FaChevronDown
                        size={9}
                        className="opacity-60 mt-0.5 transition-transform duration-300 group-hover:rotate-180"
                      />
                    )}
                  </Link>
                  {item.children && <DropdownMenu items={item.children} />}
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href="tel:18004585697"
                className={`
                  flex items-center gap-2 text-sm font-medium
                  transition-colors duration-300
                  ${scrolled ? "text-gray-700 hover:text-gray-900" : "text-white/90 hover:text-white"}
                `}
              >
                <FaPhone size={12} className="opacity-70" />
                <span>1 800 458 56 97</span>
              </a>

              <Link
                href="/book"
                className="
                  relative overflow-hidden group
                  px-6 py-2.5 text-xs tracking-[0.18em] font-semibold uppercase
                  bg-[#5FA8E8] text-white
                  before:absolute before:inset-0 before:bg-[#1a1a1a]
                  before:translate-x-[-101%] before:transition-transform before:duration-300
                  hover:before:translate-x-0
                  transition-colors duration-300
                "
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Book Now
                </span>
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className={`
                lg:hidden flex items-center justify-center
                w-10 h-10 border
                transition-all duration-300
                ${scrolled
                  ? "border-gray-300 text-gray-700 hover:bg-gray-100"
                  : "border-white/40 text-white hover:bg-white/10"
                }
              `}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
            </button>
          </div>
        </div>
      </header>
      <MobileDrawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        openSubmenu={openSubmenu}
        setOpenSubmenu={setOpenSubmenu}
      />
    </>
  );
}
