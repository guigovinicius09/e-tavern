import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks: { icon: React.ReactNode; href: string; label: string }[] =
    [
      {
        icon: <FaGithub size={24} />,
        href: "https://github.com/guigovinicius09",
        label: "GitHub",
      },
      {
        icon: <FaLinkedin size={24} />,
        href: "https://www.linkedin.com/in/guigovinicius09",
        label: "LinkedIn",
      },
      {
        icon: <FaInstagram size={24} />,
        href: "https://www.instagram.com/guigovinicius09",
        label: "instagram",
      },
    ];

  return (
    <footer className="bg-tavern botder-t border-malt/20 pt-4 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-4">
          {/*Brand Section*/}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-2xl tracking-tight text-soft-cream">
                e<span className="text-hop">Tavern</span>
              </span>
            </div>
            <div className="text-soft-cream/60 max-w-xs leading-relaxed">
              <p>
                Sua enciclopédia definitiva de bebidas. Descubra, aprenda,
                aprecie a arte e vá além.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-malt font-semibold uppercase tracking-wider text-sm">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-soft-cream/70 hover:text-malt transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a
                  href="/cervejas"
                  className="text-soft-cream/70 hover:text-malt transition-colors">
                  Cervejas
                </a>
              </li>
              <li>
                <a
                  href="/sobre"
                  className="text-soft-cream/70 hover:text-malt transition-colors">
                  Sobre Nós
                </a>
              </li>
            </ul>
          </div>

          {/* Social Contact */}
          <div className="space-y-4">
            <h3 className="text-malt font-semibold uppercase tracking-wider text-sm">
              Contatos
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-soft-cream/60 hover:text-hop transition-colors">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="border-t border-malt/10 pt-4 text-center text-soft-cream/40 text-sm">
          <p>© {currentYear} eTavern. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
