import Image from "next/image";
import beerMapImage from "@/public/img/beermap.jpg";

export default function Cervejas() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-malt/40 overflow-hidden">
      {/* Background Image */}
      {/* <div className="absolute inset-0 -z-10"> */}
      <Image
        src={beerMapImage}
        alt="Mapa de Cervejas"
        fill
        priority
        className="object-cover brightness-[0.3]"
        quality={90}
      />
      {/* Overlay opcional para dar profundidade, similar ao seu card */}
      <div className="absolute inset-0 bg-linear-to-b from-tavern/40 via-transparent to-tavern/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-soft-cream tracking-tight">
          Página de <span className="text-hop">Cervejas</span>
        </h1>
        <p className="mt-4 text-soft-cream/70 max-w-lg mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dignissimos necessitatibus
          recusandae voluptatem quia itaque nesciunt vitae tenetur omnis fuga qui eius, magnam
          accusantium optio placeat laboriosam soluta, numquam doloribus consequuntur assumenda.
          Numquam cum cumque animi voluptatibus provident tempora in! Eius atque, a quam alias
          aspernatur officiis repellendus et! Minus, aliquam quis, debitis necessitatibus corporis
          unde temporibus laboriosam quo autem rerum rem labore ad! Quo, molestiae.
        </p>
      </div>
    </div>
  );
}
