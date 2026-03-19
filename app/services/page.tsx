import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/breadcrumb";
import { services } from "@/lib/services";
import FAQs from "@/components/faqs";
import Contact from "@/components/home/contact";
import ServiceCard from "@/components/common/ServiceCard";
export default function ServicesPage() {
  return (
    <main className="bg-white">
      <Breadcrumb title="Our Services" />

      {/* ───────── Intro Section ───────── */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-xl">
              <p className="text-[#5FA8E8] text-xs font-semibold tracking-[0.4em] uppercase mb-6 animate-fade-in">
                World-Class Surgical Care
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#1F3A4D] leading-tight mb-8 animate-fade-up">
                Precision Surgery. <br /> Compassionate Care.
              </h2>
              <p className="text-[#4A6575] text-lg leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
                Dr. Sonam Tyagi combines years of clinical expertise with the latest
                technological advancements in laparoscopic and bariatric surgery.
                Our mission is to provide safe, effective, and minimally invasive
                solutions that restore long-term health and vitality.
              </p>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Image
                src="/images/breadcrumb.jpg"
                alt="Modern Clinic"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1F3A4D]/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Services Grid ───────── */}
      <section className="py-24 bg-[#F4F8FB]">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-[#5FA8E8] text-xs font-semibold tracking-[0.4em] uppercase mb-4">
              Our Expertise
            </p>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#1F3A4D]">
              Specialized Surgical Procedures
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <FAQs />
      <Contact />
    </main>
  );
}
