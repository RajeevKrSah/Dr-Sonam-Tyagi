import Image from "next/image";
import Link from "next/link";
import { Service } from "@/lib/services";
import { FaArrowRight } from "react-icons/fa";

interface ServiceCardProps {
    service: Service;
    index?: number;
}

const ServiceCard = ({ service, index = 0 }: ServiceCardProps) => {
    return (
        <Link
            href={`/services/${service.slug}`}
            className="group relative h-[550px] overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-2xl transition-all duration-700 animate-fade-up"
            style={{ animationDelay: `${0.1 * (index + 1)}s` }}
        >
            {/* Background Image & Overlay */}
            <div className="absolute inset-0">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F3A4D] via-[#1F3A4D]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-700" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-light text-white mb-4 group-hover:text-[#5FA8E8] transition-colors duration-300 leading-tight">
                    {service.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
                    {service.shortDescription}
                </p>

                {/* Footer / CTA */}
                <div className="flex items-center gap-3 group/cta">
                    <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-white/50 group-hover:text-white transition-colors duration-300">
                        Learn More
                    </span>
                    <div className="relative flex items-center justify-center w-8 h-8 rounded-full border border-white/20 group-hover:border-[#5FA8E8] group-hover:bg-[#5FA8E8] transition-all duration-500 overflow-hidden">
                        <FaArrowRight
                            className="text-white transition-transform duration-500 -translate-x-8 group-hover:translate-x-0"
                            size={10}
                        />
                        <FaArrowRight
                            className="absolute text-white transition-transform duration-500 translate-x-0 group-hover:translate-x-8"
                            size={10}
                        />
                    </div>
                </div>
            </div>

            {/* Subtle border glow */}
            <div className="absolute inset-0 rounded-lg border border-white/5 group-hover:border-[#5FA8E8]/20 transition-colors duration-500" />
        </Link>
    );
};

export default ServiceCard;
