"use client";
import { useState, useEffect } from "react";
import { BeerIcon, MenuIcon, XIcon } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleScroll = () => setIsMenuOpen(false);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Cervejas", href: "/cervejas" },
    { name: "Sobre", href: "/sobre" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-tavern border-b border-malt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="p-2 bg-hop/80 rounded-xl transition-transform group-hover:rotate-35">
              <BeerIcon className="text-soft-cream/90 w-12 h-12" />
            </div>
            <span className="font-bold text-3xl tracking-tight text-soft-cream">
              e<span className="text-hop">Tavern</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-soft-cream/70 hover:text-malt font-medium transition-colors duration-200 group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-malt transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-soft-cream hover:bg-section-backdround transition-colors"
              aria-label="Toggle menu">
              {isMenuOpen ? (
                <XIcon className="w-8 h-8" />
              ) : (
                <MenuIcon className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-tavern border-b border-malt/10 ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}>
        <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-3 rounded-xl text-lg font-medium text-soft-cream hover:bg-hop/20 hover:text-malt transition-all"
              onClick={() => setIsMenuOpen(false)}>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
