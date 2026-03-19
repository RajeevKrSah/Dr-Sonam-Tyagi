import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/breadcrumb";
import { services } from "@/lib/services";
import { FaCheckCircle, FaArrowRight, FaStethoscope } from "react-icons/fa";
import Contact from "@/components/home/contact";

export default async function ServiceDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <main className="bg-white">
      <Breadcrumb title={service.title} />

      <section className="py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-16 xl:gap-24">

            {/* ───────── Left: Main Content ───────── */}
            <div className="lg:col-span-8 space-y-20">

              {/* Introduction */}
              <div className="animate-fade-up">
                <p className="text-xs uppercase tracking-[0.4em] text-[#5FA8E8] font-semibold mb-6">
                  Service Excellence
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#1F3A4D] leading-tight mb-10">
                  {service.title}
                </h2>
                <div className="text-[#4A6575] text-lg leading-relaxed space-y-6 max-w-3xl">
                  {service.fullDescription.split("\n\n").map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Main Visual */}
              <div className="relative h-[400px] md:h-[550px] rounded-lg overflow-hidden group animate-fade-up " style={{ animationDelay: "0.2s" }}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Procedures & Benefits Grid */}
              <div className="grid md:grid-cols-2 gap-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>

                {/* Procedures */}
                <div className="bg-[#F8FAFC] p-10 rounded-lg border border-[#E2E8F0]/50 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#5FA8E8]/5 rounded-full translate-x-8 -translate-y-8" />
                  <h3 className="text-xl font-light text-[#1F3A4D] mb-8 flex items-center gap-4 relative z-10">
                    <div className="w-10 h-10 flex items-center justify-center bg-white rounded-2xl  text-[#5FA8E8]">
                      <FaStethoscope size={16} />
                    </div>
                    Core Procedures
                  </h3>
                  <ul className="space-y-4 relative z-10">
                    {service.procedures.map((proc, i) => (
                      <li key={i} className="flex items-start gap-4 text-[#4A6575] group/item">
                        <FaArrowRight className="text-[#5FA8E8]/50 mt-1.5 transition-transform group-hover/item:translate-x-1" size={10} />
                        <span className="text-[15px] font-medium">{proc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="bg-[#F8FAFC] p-10 rounded-lg border border-[#E2E8F0]/50 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#5FA8E8]/5 rounded-full translate-x-8 -translate-y-8" />
                  <h3 className="text-xl font-light text-[#1F3A4D] mb-8 flex items-center gap-4 relative z-10">
                    <div className="w-10 h-10 flex items-center justify-center bg-white rounded-2xl  text-[#5FA8E8]">
                      <FaCheckCircle size={16} />
                    </div>
                    Key Benefits
                  </h3>
                  <ul className="space-y-4 relative z-10">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-4 text-[#4A6575]">
                        <FaCheckCircle className="text-[#5FA8E8] mt-1.5 shrink-0" size={12} />
                        <span className="text-[15px]">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* ───────── Right: Sidebar ───────── */}
            <div className="lg:col-span-4">
              <aside className="sticky top-32 space-y-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>

                {/* Appointment Card */}
                <div className="bg-[#1F3A4D] text-white p-5 md:p-8 rounded-lg relative overflow-hidden group ">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#5FA8E8]/20 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl group-hover:scale-150 transition-transform duration-700" />

                  <h3 className="text-2xl font-light mb-6 relative z-10 leading-tight">
                    Start Your <br /> Healing Journey
                  </h3>
                  <p className="text-white/60 mb-10 relative z-10 text-[14px] leading-relaxed">
                    Consult with Dr. Sonam Tyagi for a personalized assessment
                    of your health and surgical requirements.
                  </p>

                  <Link
                    href="/contact"
                    className="
                      block w-full py-4 text-center bg-[#5FA8E8] text-white
                      text-[11px] tracking-[0.3em] font-bold uppercase hover:bg-white hover:text-[#1F3A4D]
                      transition-all duration-500 relative z-10
                    "
                  >
                    Request Consultation
                  </Link>
                </div>

                {/* Service Navigation */}
                <div className="bg-white border border-gray-100 p-5 md:p-8 rounded-lg">
                  <h4 className="text-xl font-semibold uppercase text-[#7A97AA] mb-8">
                    Clinical Services
                  </h4>
                  <nav className="space-y-1">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className={`
                          group flex items-center justify-between py-4 border-b border-gray-50 last:border-none
                          transition-all duration-300
                          ${s.slug === slug ? "text-[#5FA8E8]" : "text-[#1F3A4D] hover:text-[#5FA8E8]"}
                        `}
                      >
                        <span className={`text-[15px] font-medium ${s.slug === slug ? "translate-x-1" : "transition-transform group-hover:translate-x-1"}`}>
                          {s.title}
                        </span>
                        <FaArrowRight
                          className={`
                            transition-all duration-300 
                            ${s.slug === slug ? "opacity-100 translate-x-0 text-[#5FA8E8]" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"}
                          `}
                          size={10}
                        />
                      </Link>
                    ))}
                  </nav>
                </div>
              </aside>
            </div>

          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
