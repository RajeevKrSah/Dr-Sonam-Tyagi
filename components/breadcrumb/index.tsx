"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaHome, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

interface PageHeaderProps {
  title: string;
}

const Breadcrumb = ({ title }: PageHeaderProps) => {
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <section className="relative pt-48 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-[#111]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 scale-105 animate-slow-zoom">
        <Image
          src="/images/breadcrumb.jpg"
          alt="Dr Sonam Tyagi Clinic"
          fill
          priority
          className="object-cover object-center opacity-60"
        />
      </div>

      {/* Gradients for depth and readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/60 via-transparent to-black/20" />

      <div className="container mx-auto px-4 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-4xl">
          {/* Page Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white mb-8 animate-fade-up">
            {title}
          </h1>

          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <ol className="flex items-center flex-wrap gap-y-2 text-xs md:text-sm font-medium tracking-widest uppercase">
              <li className="flex items-center">
                <Link
                  href="/"
                  className="flex items-center text-white/60 hover:text-[#5FA8E8] transition-all duration-300 group"
                >
                  <FaHome className="mr-2.5 transition-transform duration-300 group-hover:scale-110" size={14} />
                  <span>Home</span>
                </Link>
              </li>

              {pathnames.length > 0 && (
                <li className="flex items-center" aria-hidden="true">
                  <span className="mx-3 text-white/20 text-[10px]">/</span>
                </li>
              )}

              {pathnames.map((value, index) => {
                const isLast = index === pathnames.length - 1;
                const href = `/${pathnames.slice(0, index + 1).join("/")}`;
                const label = value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, " ");

                return (
                  <li key={href} className="flex items-center">
                    {isLast ? (
                      <span
                        className="text-[#5FA8E8] font-semibold"
                        aria-current="page"
                      >
                        {label}
                      </span>
                    ) : (
                      <>
                        <Link
                          href={href}
                          className="text-white/60 hover:text-white transition-all duration-300"
                        >
                          {label}
                        </Link>
                        <span className="mx-3 text-white/20 text-[10px]" aria-hidden="true">/</span>
                      </>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>
      </div>

      {/* Decorative accent line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5FA8E8]/30 to-transparent" />

      {/* Decorative vertical label for desktop */}
      <div className="absolute right-8 bottom-12 z-10 hidden xl:flex flex-col items-center gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
        <span className="[writing-mode:vertical-lr] text-[9px] tracking-[0.5em] uppercase text-white/20 font-medium">
          Navigation
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
};

export default Breadcrumb;
