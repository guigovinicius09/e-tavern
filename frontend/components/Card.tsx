import { ArrowBigRightDash } from "lucide-react";
import Image from "next/image";

interface CardProps {
  title: string;
  imageSrc: string;
  description: string;
}

export default function Card({ title, description, imageSrc }: CardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-tavern/40 border border-malt/20 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-malt/10 hover:border-malt/50">
      {/* Image Container */}
      <div className="aspect-4/3 overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 "
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-tavern via-transparent to-transparent opacity-60"></div>
      </div>

      {/* Content */}
      <div className="p-6 relative">
        <h3 className="text-2xl font-bold text-soft-cream mb-2 group-hover:text-malt transition-colors lg:text-4xl">
          {title}
        </h3>
        <p className="text-soft-cream/70 text-sm leading-relaxed">
          {description}
        </p>

        {/* Bottom indicator */}
        <div className="mt-4 flex items-center gap-2 text-malt font-medium text-lg uppercase tracking-widest opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
          <span>Ver Mais</span>
          <ArrowBigRightDash size={24} />
        </div>
      </div>
    </div>
  );
}
