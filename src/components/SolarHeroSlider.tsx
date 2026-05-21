import React, { useState, useEffect, useCallback, useRef } from "react";
import { trackWA, WA_BASE } from "../theme";

// Import images exactly as requested from existing assets
import heroRes from "../assets/solar/images/hero/solar_hero_residencial.webp";
import heroEmp from "../assets/solar/images/hero/solar_hero_empresas.webp";
import heroCondo from "../assets/solar/images/hero/solar_hero_condominios.webp";
import heroMob from "../assets/solar/images/hero/solar_hero_mobilidade_1.webp";

const AUTOPLAY_MS = 6000;

const slides = [
  {
    id: "residencial",
    img: heroRes,
    eyebrow: "Energia Solar · Residencial",
    headline: "Economize até 95% na sua conta de luz",
    sub: "Soluções de alto padrão para residências em São Paulo. Eficiência técnica e estética arquitetônica.",
    cta: {
      label: "Simular Minha Economia",
      path: "/energia-solar/residencial",
      waMsg:
        "Olá! 👋 Vi o site e quero uma simulação para minha residência.",
    },
  },
  {
    id: "empresas",
    img: heroEmp,
    eyebrow: "B2B · Industrial",
    headline: "Reduza o OPEX do seu negócio AGORA",
    sub: "Sistemas fotovoltaicos de alta escala para empresas e indústrias com ROI acelerado em SP.",
    cta: {
      label: "Solicitar Análise B2B",
      path: "/energia-solar/empresas",
      waMsg:
        "Olá! 👋 Gostaria de uma análise estratégica de economia solar para minha empresa.",
    },
  },
  {
    id: "condominios",
    img: heroCondo,
    eyebrow: "Condomínios · Gestão Eficiente",
    headline: "Redução Real na Taxa Condominial",
    sub: "Energia solar para áreas comuns com gestão de rateio e aprovação garantida por especialistas.",
    cta: {
      label: "Falar com Consultor",
      path: "/energia-solar/condominios",
      waMsg:
        "Olá! 👋 Sou síndico/administrador e quero saber sobre solar para condomínios.",
    },
  },
  {
    id: "mobilidade",
    img: heroMob,
    eyebrow: "E-Mobility · Mobilidade Elétrica",
    headline: "Eletropostos e Wallbox com Inteligência Solar",
    sub: "Infraestrutura de recarga para veículos elétricos sincronizada com sua geração fotovoltaica.",
    cta: {
      label: "Ver Soluções EV",
      path: "/energia-solar/mobilidade-eletrica",
      waMsg:
        "Olá! 👋 Tenho interesse na instalação de carregadores EV (Wallbox/Eletroposto).",
    },
  },
];

const SolarHeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((idx: number) => {
    setCurrent(idx);
    setProgress(0);
  }, []);

  const next = useCallback(
    () => goTo((current + 1) % slides.length),
    [current, goTo],
  );

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(intervalRef.current!);
  }, [isPaused, next]);

  useEffect(() => {
    if (isPaused) return;
    progressRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + 100 / (AUTOPLAY_MS / 60), 100));
    }, 60);
    return () => clearInterval(progressRef.current!);
  }, [isPaused, current]);

  useEffect(() => {
    setProgress(0);
  }, [current]);

  const slide = slides[current];

  return (
    <section
      className="relative h-[85.5vh] min-h-[380px] flex items-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background with Ken Burns & Overlay */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0, zIndex: 0 }}
        >
          <img
            src={s.img}
            alt={s.eyebrow}
            className="w-full h-full object-cover"
            style={{
              transform: i === current ? "scale(1.08)" : "scale(1)",
              transition: "transform 8s ease-out",
              filter: "brightness(1.3)",
            }}
          />
          <div className="absolute inset-0 bg-primary/25" />
        </div>
      ))}

      {/* Content */}
      <div className="container-max mx-auto px-4 md:px-8 relative z-10 w-full">
        <div className="max-w-xl md:max-w-2xl">
          <p
            key={`ey-${current}`}
            className="font-body text-sm md:text-base uppercase tracking-[0.2em] text-secondary-container font-semibold mb-3 md:mb-4 animate-[fadeSlide_0.5s_ease_forwards] drop-shadow-lg"
          >
            {slide.eyebrow}
          </p>
          <h1
            key={`h-${current}`}
            className="font-headline text-[32px] md:text-5xl lg:text-6xl font-extrabold text-white mb-6 md:mb-8 leading-[1.1] animate-[fadeSlide_0.5s_0.1s_ease_both] drop-shadow-lg"
          >
            {slide.headline}
          </h1>
          <p
            key={`s-${current}`}
            className="font-body text-base md:text-lg text-white/90 mb-6 md:mb-8 animate-[fadeSlide_0.5s_0.2s_ease_both] leading-relaxed max-w-lg drop-shadow"
          >
            {slide.sub}
          </p>

          <div
            key={`cta-${current}`}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-[fadeSlide_0.5s_0.3s_ease_both]"
          >
            <button
              onClick={() => {
                trackWA("solar_hub_slider_cta");
              }}
              className="bg-secondary-container text-on-secondary-container font-headline text-sm md:text-base font-bold px-6 md:px-8 py-4 md:py-5 hover:scale-[1.02] transition-transform active:scale-95 shadow-xl rounded-lg"
            >
              Conhecer Solução
            </button>
            <a
              href={`${WA_BASE}?text=${encodeURIComponent(slide.cta.waMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWA("solar_hub_slider_whatsapp")}
              className="border-2 border-white/50 text-white font-headline text-sm md:text-base font-semibold px-6 md:px-8 py-4 md:py-5 hover:bg-white/10 transition-all flex items-center justify-center gap-2 rounded-lg backdrop-blur-sm"
            >
              {slide.cta.label}
            </a>
          </div>
        </div>
      </div>

      {/* Dots & Progress */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 md:gap-4">
        <div className="w-24 md:w-32 h-0.5 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-secondary rounded-full transition-none"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex gap-3">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all ${i === current ? "w-4 md:w-6 h-1.5 md:h-2 bg-secondary" : "w-2 h-2 bg-white/30 hover:bg-white/60"}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default SolarHeroSlider;
