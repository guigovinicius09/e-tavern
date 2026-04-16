"use client";
// import React from "react";
import Image from "next/image";
import heroImage from "@/public/img/hero_img.png";
import { SearchIcon } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full flex flex-col items-center justify-center text-center overflow-hidden py-20 px-4">
      {/* Background Image Container */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroImage}
          alt="Cultura Cervejeira Background"
          fill
          priority // Carregar a imagem com prioridade (LCP)
          className="object-cover brightness-[0.3]" // 'object-cover' mantém a proporção; 'brightness' ajuda no contraste do texto
          quality={90}
        />
      </div>
      {/* Backdrop Blur Container */}
      <div className="absolute inset-0 -z-10 backdrop-blur-[2px] bg-malt/10"></div>

      {/* Headline Section */}
      <div className="max-w-4xl mb-12 relative z-10">
        <h1 className="text-4xl md:text-7xl font-extrabold text-soft-cream mb-6 tracking-tight leading-tight">
          Curadoria <span className="text-hop">Técnica</span> Para Paladares{" "}
          <span className="text-malt">Exigentes</span>
        </h1>
        <p className="text-lg md:text-xl text-soft-cream/80 max-w-2xl mx-auto leading-relaxed">
          O ecossistema definitivo que conecta você à essência da cultura
          cervejeira.
        </p>
      </div>

      {/* Search Bar Section */}
      <div className="w-full max-w-2xl relative group z-10">
        <div className="absolute -inset-1 from-hop via-malt to-hop rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative flex flex-col md:flex-row gap-3 bg-tavern p-2 rounded-2xl border border-malt/20 shadow-2xl">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-soft-cream/40" />
            <input
              type="text"
              placeholder="Pesquise por estilos, cervejas, marcas..."
              className="w-full h-14 pl-12 pr-4 bg-transparent text-soft-cream placeholder:text-soft-cream/30 focus:outline-none text-lg"
            />
          </div>
          <button className="h-14 px-10 bg-hop hover:bg-hop/80 text-soft-cream font-bold text-lg rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-hop/20">
            Pesquisar
          </button>
        </div>
      </div>

      {/* Subtle Divider */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[150%] h-32 bg-linear-to-t from-malt/40 to-transparent blur-2xl opacity-30"></div>
    </section>
  );
}
