import Hero from "@/components/layout/Hero";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold text-soft-cream- mb-8">
          Nossos Destaques
        </h2>
        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="cursor-pointer">
            <Card
              title="Pilsen"
              imageSrc="/img/pilsen_card.png"
              description="This is a description of the card Pilsen."
            />
          </div>
          <div className="cursor-pointer">
            <Card
              title="IPA"
              imageSrc="/img/ipa_card.png"
              description="This is a description of the card IPA."
            />
          </div>
          <div className="cursor-pointer">
            <Card
              title="Stout"
              imageSrc="/img/stout_card.png"
              description="This is a description of the card Stout."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
