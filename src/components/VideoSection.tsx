import React, { useState } from "react";
import {
  Play,
  CheckCircle2,
  TrendingUp,
  Shield,
  Wrench,
  Zap,
  Phone,
} from "lucide-react";

const videoId = "LkrKLLdKm-g";
const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

const bullets = [
  { icon: TrendingUp, text: "Economia imediata" },
  { icon: CheckCircle2, text: "Retorno de investimento" },
  { icon: Shield, text: "Instalação homologada" },
  { icon: Wrench, text: "Garantia de 25 anos" },
];

const floatingCards = [
  { icon: Zap, value: "95%", label: "Economia média" },
  { icon: Shield, value: "500+", label: "Projetos realizados" },
];

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSimulate = () => {
    const element = document.getElementById("lead-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-16 md:py-20 bg-surface-container-low overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e4c9a]/10 to-transparent" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#00357b 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="order-2 lg:order-1 lg:sticky lg:top-32">
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#daa520] mb-4 block">
              ENTENDA O PROCESSO
            </span>
            <h1 className="text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6 leading-tight font-bold text-primary-brand">
              Como funciona a instalação de{" "}
              <span className="text-[#daa520] font-black">
                energia solar residencial e empresarial
              </span>{" "}
              em São Paulo
            </h1>
            <p className="text-on-surface-variant text-base md:text-lg mb-8 leading-relaxed">
              Veja na prática como funciona um projeto fotovoltaico moderno e
              como empresas e residências em São Paulo estão reduzindo
              drasticamente os custos com energia.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {bullets.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.text}
                    className="flex items-center gap-3 bg-white/60 p-3 rounded-xl border border-outline-variant/30"
                  >
                    <div className="w-9 h-9 bg-[#1e4c9a]/10 flex items-center justify-center rounded-lg flex-shrink-0">
                      <Icon size={16} className="text-[#daa520]" />
                    </div>
                    <span className="text-sm font-medium text-on-surface">{item.text}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-4 text-xs text-on-surface-variant mb-6">
              <span className="flex items-center gap-1">
                <CheckCircle2 size={14} className="text-[#daa520]" />
                Simulação gratuita
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 size={14} className="text-[#daa520]" />
                Retorno em até 24h
              </span>
            </div>

            <button
              onClick={handleSimulate}
              className="w-full sm:w-auto bg-[#ffcf1e] text-[#705900] font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl hover:bg-[#ffe087] transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <Phone size={16} />
              Solicitar estudo solar
            </button>
          </div>

          <div className="order-1 lg:order-2">
            <div
              className="relative rounded-2xl overflow-hidden group"
              style={{
                boxShadow:
                  "0 0 0 1px rgba(255, 207, 30, 0.2), 0 0 40px rgba(255, 207, 30, 0.1), 0 25px 50px -12px rgba(0, 0, 0, 0.4)",
              }}
            >
              <div className="aspect-video bg-[#00357b] relative">
                {!isPlaying ? (
                  <>
                    <iframe
                      className="w-full h-full absolute inset-0 opacity-0 pointer-events-none"
                      src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1`}
                      title="Energia Solar Edu Santos"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <img
                      src={thumbnailUrl}
                      alt="Thumbnail do vídeo sobre energia solar"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      {floatingCards.map((card) => {
                        const Icon = card.icon;
                        return (
                          <div
                            key={card.label}
                            className="bg-black/60 backdrop-blur-md px-3 py-2 rounded-lg border border-white/10"
                          >
                            <div className="flex items-center gap-2">
                              <Icon size={14} className="text-[#ffcf1e]" />
                              <span className="text-white/70 text-[10px] uppercase tracking-wider">
                                {card.label}
                              </span>
                            </div>
                            <p className="text-white font-bold text-sm">
                              {card.value}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    <button
                      onClick={() => setIsPlaying(true)}
                      className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-500"
                      aria-label="Reproduzir vídeo"
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#ffcf1e]/30 rounded-full animate-ping" />
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-[#ffcf1e]/90 rounded-full flex items-center justify-center backdrop-blur-sm transition-all group-hover:bg-[#ffe087] group-hover:shadow-[0_0_60px_rgba(255,207,30,0.5)]">
                          <Play
                            size={36}
                            className="text-[#705900] ml-1"
                            fill="currentColor"
                          />
                        </div>
                      </div>
                    </button>

                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                      <span className="text-white/80 text-xs font-medium uppercase tracking-wider">
                        Assista ao vídeo explicativo
                      </span>
                      <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-white/60 text-[10px] uppercase tracking-wider">
                        2:30 min
                      </span>
                    </div>
                  </>
                ) : (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title="Energia Solar Edu Santos"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-[#ffcf1e]/10 via-[#ffcf1e]/5 to-transparent border border-[#ffcf1e]/20 rounded-xl p-6">
              <p className="text-lg font-medium text-primary-brand mb-2">
                Pronto para descobrir quanto sua empresa pode economizar?
              </p>
              <p className="text-on-surface-variant text-sm mb-4">
                Nossa equipe analisa seu consumo e apresenta a melhor solução em
                até 24h.
              </p>
              <button
                onClick={handleSimulate}
                className="w-full bg-[#ffcf1e] text-[#705900] font-bold text-sm uppercase tracking-wider py-4 rounded-xl hover:bg-[#ffe087] transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <TrendingUp size={18} />
                Simular economia
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
