import React from "react";
import { trackWA, WA_BASE } from "../theme";

const FinalCTA: React.FC = () => {
  const waMsg = encodeURIComponent(
    "Olá! Quero falar com um especialista sobre meu projeto de energia solar.",
  );

  return (
    <section className="py-16 md:py-20 bg-[#00357b] text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1e4c9a]/30 to-transparent pointer-events-none" />
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 md:mb-8">
          Pare de pagar caro pela energia
        </h2>
        <p className="text-lg text-white/60 mb-10 md:mb-12 max-w-2xl mx-auto">
          Junte-se às centenas de famílias que já transformaram seus telhados em
          usinas de economia e sustentabilidade com a Edu Santos Energia Solar.
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
          <a
            href={`${WA_BASE}?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWA("final_cta")}
            className="flex items-center justify-center bg-[#ffcf1e] text-[#705900] font-bold uppercase tracking-wider px-10 md:px-12 py-4 md:py-5 shadow-xl hover:scale-105 transition-transform rounded-xl"
          >
            Falar com Especialista
          </a>
          <button
            onClick={() =>
              document
                .getElementById("portfolio")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="border-2 border-white/30 text-white font-bold uppercase tracking-wider px-10 md:px-12 py-4 md:py-5 hover:bg-white hover:text-[#00357b] transition-all rounded-xl"
          >
            Ver Projetos
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;