import Image from "next/image";
import beerMapImage from "@/public/img/beermap.jpg";

export default function PageSobre() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-malt/40 overflow-hidden">
      <Image
        src={beerMapImage}
        alt="Mapa de Cervejas"
        fill
        priority
        className="object-cover brightness-[0.3]"
        quality={90}
      />
      <div className="absolute inset-0 bg-linear-to-b from-tavern/40 via-transparent to-tavern/40" />

      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-soft-cream tracking-tight">
          Página<span className="text-hop">Sobre</span>
        </h1>
        <p className="mt-4 text-soft-cream/70 max-w-lg mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          accusantium error sequi delectus voluptate natus aspernatur itaque
          harum soluta aliquid aut iste pariatur dolor dicta exercitationem illo
          corrupti, tempora corporis tenetur. Temporibus cumque porro nulla, est
          error fuga corporis consequatur ipsam? Ipsum vero id cumque.
        </p>
      </div>
    </div>
  );
}
