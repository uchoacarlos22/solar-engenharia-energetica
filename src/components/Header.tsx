import React, { useState } from "react";
import { trackWA, WA_BASE } from "../theme";
import logo from "../assets/images/es-logo-sf.png";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Benefícios", id: "beneficios" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Promoções", id: "promocoes" },
    { label: "Processo", id: "como-funciona" },
    { label: "Diferencial", id: "diferencial" },
  ];

  const waMsg = encodeURIComponent(
    "Olá, Edu Santos! 👋 Vi o site de energia solar e gostaria de solicitar uma simulação gratuita. Podem me atender?",
  );

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white top-0 sticky z-50 border-b border-gray-100 py-2 shadow-[0_20px_50px_rgba(0,0,0,0.05)] w-full w-full">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center h-18.5 px-8 w-full">
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => scrollTo("hero")}
        >
          <img src={logo} alt="Edu Santos Energia Solar" className="h-24 w-32 pt-2" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 mt-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-[#00357b] uppercase text-sm font-bold hover:text-[#daa520] transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4 items-center">
          <button
            onClick={() => scrollTo("contato")}
            className="text-[#00357b] uppercase text-sm font-bold px-6 py-3 border-2 border-[#00357b] hover:bg-[#daa520] hover:text-white hover:border-[#daa520] transition-all select-none"
          >
            Orçamento
          </button>
          <a
            href={`${WA_BASE}?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWA("header")}
            className="bg-[#ffcf1e] text-[#705900] uppercase text-sm font-bold px-6 py-3 hover:bg-[#ffe087] transition-all shadow-lg select-none flex items-center justify-center"
          >
            Simulação Grátis
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#00357b]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col p-6 animate-in slide-in-from-top-4">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-[#00357b] tracking-widest uppercase text-sm font-bold hover:text-[#daa520] text-left"
              >
                {link.label}
              </button>
            ))}
            <div className="flex flex-col gap-4 mt-6">
              <button
                onClick={() => scrollTo("contato")}
                className="text-center font-headline-md tracking-widest uppercase text-sm font-bold px-6 py-4 border border-primary text-primary"
              >
                Orçamento
              </button>
              <a
                href={`${WA_BASE}?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWA("header_mobile")}
                className="text-center bg-[#ffcf1e] text-[#705900] uppercase text-sm font-bold px-6 py-4 shadow-lg"
              >
                Simulação Grátis
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
