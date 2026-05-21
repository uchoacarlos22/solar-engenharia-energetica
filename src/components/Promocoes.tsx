/**
 * Promocoes.tsx — ATUALIZADO com dados reais dos orçamentos PHB Solar / DJG
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

import img8mod from "../assets/solar/images/promocoes/promo-500kw.jpeg";
import img10mod from "../assets/solar/images/promocoes/promo-650kw.jpeg";
import img16mod from "../assets/solar/images/promocoes/promo-1000kw.jpeg";
import img24mod from "../assets/solar/images/promocoes/promo-1500kw.jpeg";

import { trackWA, WA_BASE } from "../theme";
import {
  ZoomIn,
  ArrowLeft,
  ArrowRight,
  Star,
  ShieldCheck,
  Wrench,
  FileCheck,
  Clock,
  CreditCard,
  X,
  BadgeCheck,
} from "lucide-react";

// ─── Dados reais baseados nos orçamentos PHB Solar / DJG-Solar ────────────
interface Pacote {
  id: number;
  title: string;
  modulos: number;
  watts: number;
  kwp: number;
  geracao: string;
  economiaMensal: string;
  precoKit: string;
  precoInstalacao: string;
  precoTotal: string;
  parcelaMin: string;
  bestSeller: boolean;
  tag: string;
  img: string;
  inversor: string;
}

const pacotes: Pacote[] = [
  {
    id: 1,
    title: "Pacote Solar 500",
    modulos: 8,
    watts: 630,
    kwp: 5.04,
    geracao: "500 kWh",
    economiaMensal: "R$ 450",
    precoKit: "R$ 7.900",
    precoInstalacao: "R$ 6.000",
    precoTotal: "R$ 13.900",
    parcelaMin: "R$ 399/mês",
    bestSeller: false,
    tag: "Entrada",
    img: img8mod,
    inversor: "Inversor 3kW, 220V, com DPS",
  },
  {
    id: 2,
    title: "Pacote Solar 650",
    modulos: 10,
    watts: 630,
    kwp: 6.3,
    geracao: "650 kWh",
    economiaMensal: "R$ 590",
    precoKit: "R$ 9.500",
    precoInstalacao: "R$ 7.200",
    precoTotal: "R$ 16.700",
    parcelaMin: "R$ 495/mês",
    bestSeller: false,
    tag: "Popular",
    img: img10mod,
    inversor: "Inversor 4kW, 220V, DPS e AFCI",
  },
  {
    id: 3,
    title: "Pacote Solar 1000",
    modulos: 16,
    watts: 630,
    kwp: 10.08,
    geracao: "1.100 kWh",
    economiaMensal: "R$ 1.027",
    precoKit: "R$ 14.668",
    precoInstalacao: "R$ 11.800",
    precoTotal: "R$ 26.468",
    parcelaMin: "R$ 769/mês",
    bestSeller: true,
    tag: "Mais vendido",
    img: img16mod,
    inversor: "PHB6000D-YS 6kW, 2MPPT, DPS Nível II + AFCI",
  },
  {
    id: 4,
    title: "Pacote Solar 1500",
    modulos: 24,
    watts: 630,
    kwp: 15.12,
    geracao: "1.500 kWh",
    economiaMensal: "R$ 1.400",
    precoKit: "R$ 21.500",
    precoInstalacao: "R$ 13.500",
    precoTotal: "R$ 35.000",
    parcelaMin: "R$ 1.020/mês",
    bestSeller: false,
    tag: "Empresarial",
    img: img24mod,
    inversor: "Inversor 10kW trifásico, DPS e AFCI",
  },
];

// ─── Componente ────────────────────────────────────────────────────────────
export const Promocoes: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(2); // começa no "mais vendido"
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const activePromo = pacotes[activeIndex];
  const total = pacotes.length;

  const prevSlide = () => setActiveIndex((p) => (p === 0 ? total - 1 : p - 1));
  const nextSlide = () => setActiveIndex((p) => (p === total - 1 ? 0 : p + 1));

  useEffect(() => {
    if (lightboxOpen || showPayment) return;
    autoRef.current = setInterval(nextSlide, 6000);
    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, [activeIndex, lightboxOpen, showPayment]);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxOpen(false);
        setShowPayment(false);
      }
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightboxOpen || showPayment ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, showPayment]);

  const getCardStyles = (index: number) => {
    const mob = typeof window !== "undefined" && window.innerWidth < 768;
    const d = index - activeIndex;
    if (d === 0)
      return { x: 0, scale: 1, zIndex: 10, opacity: 1, filter: "blur(0px)" };
    if (d === 1 || (activeIndex === total - 1 && index === 0))
      return {
        x: mob ? "8%" : "45%",
        scale: 0.85,
        zIndex: 5,
        opacity: 0.55,
        filter: "blur(2px)",
      };
    if (d === -1 || (activeIndex === 0 && index === total - 1))
      return {
        x: mob ? "-8%" : "-45%",
        scale: 0.85,
        zIndex: 5,
        opacity: 0.55,
        filter: "blur(2px)",
      };
    return { x: 0, scale: 0.6, zIndex: 1, opacity: 0, filter: "blur(4px)" };
  };

  const waMsg = (p: Pacote) =>
    encodeURIComponent(
      `Olá! Tenho interesse no ${p.title} — ${p.modulos} módulos ${p.watts}Wp (${p.kwp} kWp). Geração: ${p.geracao}/mês. Valor: ${p.precoTotal}. Podem me atender?`,
    );

  return (
    <section
      id="promocoes"
      className="py-6 bg-[#001f4d] overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00357b]/30 to-[#001f4d] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-2">
          <span className="text-xs font-bold tracking-widest uppercase text-secondary mb-3 block">
            Oferta especial
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
            Pacotes em Promoção
          </h2>
          <p className="text-white/65 max-w-2xl mx-auto text-lg leading-relaxed">
            Módulos 630Wp bifaciais · Inversores PHB com DPS e AFCI · Instalação
            · Homologação · 25 anos de garantia
          </p>
        </div>

        {/* Carrossel */}
        <div className="relative w-full flex items-center justify-center group/nav">
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-0 md:-left-4 z-30 p-4 rounded-full bg-white/10 text-white backdrop-blur-md hover:bg-secondary hover:text-primary transition-all shadow-2xl border border-white/10 active:scale-95"
            aria-label="Anterior"
          >
            <ArrowLeft size={28} />
          </button>

          <div className="relative h-[630px] md:h-[660px] w-full flex items-center justify-center overflow-visible">
            {pacotes.map((promo, index) => {
              const isActive = index === activeIndex;
              return (
                <motion.div
                  key={promo.id}
                  animate={getCardStyles(index)}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  onClick={() => setActiveIndex(index)}
                  drag={isActive ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(_, info) => {
                    if (info.offset.x > 80) prevSlide();
                    if (info.offset.x < -80) nextSlide();
                  }}
                  className={`absolute w-[85vw] max-w-[400px] bg-white rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.5)] cursor-pointer flex flex-col transition-shadow duration-300 ${
                    isActive
                      ? "ring-2 ring-secondary/50 ring-offset-4 ring-offset-[#001f4d] rounded touch-pan-y"
                      : "pointer-events-none md:pointer-events-auto"
                  }`}
                >
                  {/* Imagem */}
                  <div
                    className="relative h-48 md:h-60 w-full overflow-hidden group"
                    onClick={(e) => {
                      if (isActive) {
                        setLightboxOpen(true);
                        e.stopPropagation();
                      }
                    }}
                  >
                    <img
                      src={promo.img}
                      alt={promo.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-5">
                      <div className="flex items-baseline gap-2">
                        <span className="text-secondary text-2xl font-black">
                          {promo.geracao}
                        </span>
                        <span className="text-white/80 text-xs uppercase font-bold tracking-wider">
                          /mês estimado
                        </span>
                      </div>
                    </div>
                    <div className="absolute top-3 left-3 bg-secondary text-primary text-[10px] font-black px-3 py-1 rounded-md uppercase tracking-wider">
                      {promo.tag}
                    </div>
                    {promo.bestSeller && (
                      <div className="absolute top-3 right-3 bg-primary text-secondary text-[9px] font-black px-2 py-1 rounded-md uppercase tracking-wide flex items-center gap-1">
                        <Star size={10} fill="currentColor" /> Mais vendido
                      </div>
                    )}
                    {isActive && !promo.bestSeller && (
                      <div className="absolute top-3 right-3 bg-black/40 rounded-full w-9 h-9 flex items-center justify-center text-white">
                        <ZoomIn size={18} />
                      </div>
                    )}
                  </div>

                  {/* Corpo */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-primary font-black text-lg leading-tight mb-1">
                      {promo.title}
                    </h3>
                    <p className="text-gray-400 text-xs mb-1">
                      {promo.modulos} módulos {promo.watts}Wp · {promo.kwp} kWp
                    </p>
                    <p className="text-gray-400 text-xs mb-3 leading-relaxed">
                      {promo.inversor}
                    </p>

                    {/* Economia mensal */}
                    <div className="bg-green-50 border border-green-200 rounded-lg px-3 py-2 mb-3">
                      <span className="text-[10px] text-green-700 font-bold uppercase tracking-wide block">
                        Economia estimada
                      </span>
                      <span className="text-green-700 font-black text-xl">
                        {promo.economiaMensal}/mês
                      </span>
                    </div>

                    <div className="mt-auto">
                      {/* Preço total */}
                      <div className="flex items-baseline gap-2 mb-0.5">
                        <span className="text-2xl font-black text-primary tracking-tighter">
                          {promo.precoTotal}
                        </span>
                        <span className="text-xs text-gray-400 font-bold uppercase">
                          completo
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 mb-2">
                        Kit: {promo.precoKit} · Instalação:{" "}
                        {promo.precoInstalacao}
                      </p>

                      {/* Parcela clicável */}
                      <button
                        onClick={(e) => {
                          if (isActive) {
                            setShowPayment(true);
                            e.stopPropagation();
                          }
                        }}
                        className={`w-full text-left mb-4 px-3 py-2.5 rounded-lg border transition-colors ${
                          isActive
                            ? "border-secondary/40 bg-secondary/5 hover:bg-secondary/10 cursor-pointer"
                            : "border-gray-100 bg-gray-50 cursor-default"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-gray-500 block uppercase font-bold tracking-wide">
                              A partir de
                            </span>
                            <span className="text-secondary font-black text-base">
                              {promo.parcelaMin}
                            </span>
                          </div>
                          {isActive && (
                            <CreditCard size={16} className="text-secondary" />
                          )}
                        </div>
                      </button>

                      {/* CTA WhatsApp */}
                      <a
                        href={`${WA_BASE}?text=${waMsg(promo)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          if (!isActive) e.preventDefault();
                          else trackWA("promo_package");
                        }}
                        className={`flex items-center justify-center gap-3 w-full py-3.5 rounded-xl font-bold transition-all text-sm ${
                          isActive
                            ? "bg-[#25D366] text-white hover:bg-[#1da851] shadow-[0_8px_24px_rgba(37,211,102,0.3)]"
                            : "bg-gray-100 text-gray-300 pointer-events-none"
                        }`}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          width="18"
                          height="18"
                          fill="white"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Quero este pacote
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-0 md:-right-4 z-30 p-4 rounded-full bg-white/10 text-white backdrop-blur-md hover:bg-secondary hover:text-primary transition-all shadow-2xl border border-white/10 active:scale-95"
            aria-label="Próximo"
          >
            <ArrowRight size={28} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-3 mt-4 mb-6">
          {pacotes.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? "w-10 bg-secondary"
                  : "w-3 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Pacote ${idx + 1}`}
            />
          ))}
        </div>

        {/* Barra Incluso + Garantias */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 max-w-4xl mx-auto">
          <p className="text-secondary text-xs font-bold uppercase tracking-widest text-center mb-5">
            ✓ Incluso em todos os pacotes
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
            {[
              { icon: <Wrench size={20} />, label: "Instalação completa" },
              {
                icon: <FileCheck size={20} />,
                label: "Homologação na concessionária",
              },
              {
                icon: <ShieldCheck size={20} />,
                label: "25 anos de garantia módulos",
              },
              { icon: <Clock size={20} />, label: "Instalação em 30 dias" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 text-center"
              >
                <span className="text-secondary">{item.icon}</span>
                <span className="text-white/80 text-xs font-bold">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Garantias em cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
            {[
              { anos: "25 anos", desc: "Módulos fotovoltaicos bifaciais" },
              { anos: "10 anos", desc: "Inversor On-Grid PHB" },
              { anos: "12 anos", desc: "Estrutura de fixação em alumínio" },
            ].map((g, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-3 text-center">
                <BadgeCheck size={18} className="text-secondary mx-auto mb-1" />
                <div className="text-white font-black text-lg">{g.anos}</div>
                <div className="text-white/50 text-xs">{g.desc}</div>
              </div>
            ))}
          </div>

          {/* Pagamento resumido */}
          <div className="pt-4 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-white/60 text-xs">
              <CreditCard size={16} className="text-secondary" />
              <span>
                Kit: até <strong className="text-white">24x no cartão</strong>
              </span>
            </div>
            <div className="text-white/20 hidden md:block">·</div>
            <div className="flex items-center gap-2 text-white/60 text-xs">
              <CreditCard size={16} className="text-secondary" />
              <span>
                Instalação:{" "}
                <strong className="text-white">50% entrada + 4x no Pix</strong>
              </span>
            </div>
            <div className="text-white/20 hidden md:block">·</div>
            <button
              onClick={() => setShowPayment(true)}
              className="text-secondary text-xs font-bold underline underline-offset-2 hover:opacity-70 transition-opacity"
            >
              Ver tabela de parcelamento →
            </button>
          </div>
        </div>
      </div>

      {/* ── Lightbox imagem ── */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95"
            onClick={() => setLightboxOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-4xl w-full mx-4 flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors"
              >
                <X size={32} />
              </button>
              <img
                src={activePromo.img}
                alt={activePromo.title}
                className="w-full max-h-[78vh] object-contain rounded-xl"
              />
              <div className="mt-3 text-center">
                <strong className="text-white text-xl block">
                  {activePromo.title}
                </strong>
                <span className="text-secondary font-black text-lg mt-1 block">
                  {activePromo.precoTotal}
                  <span className="text-white/40 text-sm font-normal ml-2">
                    completo
                  </span>
                </span>
                <span className="text-white/50 text-sm">
                  {activePromo.modulos} módulos {activePromo.watts}Wp ·{" "}
                  {activePromo.kwp} kWp · {activePromo.geracao}/mês
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Modal formas de pagamento ── */}
      <AnimatePresence>
        {showPayment && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 px-4"
            onClick={() => setShowPayment(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-primary font-black text-xl">
                    {activePromo.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Formas de pagamento disponíveis
                  </p>
                </div>
                <button
                  onClick={() => setShowPayment(false)}
                  className="text-gray-400 hover:text-gray-700 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="mb-4">
                <div className="text-xs font-bold uppercase tracking-wider text-secondary mb-2">
                  Kit Solar — {activePromo.precoKit}
                </div>
                <div className="bg-gray-50 rounded-xl p-4 space-y-2.5">
                  {[
                    ["À vista", activePromo.precoKit],
                    ["12x (sem juros Visa/MC)", "Consultar parcela"],
                    [
                      "24x no cartão Visa",
                      `${activePromo.parcelaMin} ★ Melhor opção`,
                    ],
                  ].map(([label, val]) => (
                    <div key={label} className="flex justify-between text-sm">
                      <span className="text-gray-600">{label}</span>
                      <span className="font-bold text-primary">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-5">
                <div className="text-xs font-bold uppercase tracking-wider text-secondary mb-2">
                  Instalação — {activePromo.precoInstalacao}
                </div>
                <div className="bg-gray-50 rounded-xl p-4 space-y-2.5">
                  {[
                    ["50% de entrada", "Pix ou Boleto"],
                    ["Saldo restante", "4x no Pix"],
                  ].map(([label, val]) => (
                    <div key={label} className="flex justify-between text-sm">
                      <span className="text-gray-600">{label}</span>
                      <span className="font-bold text-primary">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary text-white rounded-xl p-4 flex justify-between items-center mb-4">
                <div>
                  <div className="text-white/60 text-xs uppercase font-bold">
                    Total completo
                  </div>
                  <div className="font-black text-2xl">
                    {activePromo.precoTotal}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-white/60 text-xs uppercase font-bold">
                    Melhor parcela
                  </div>
                  <div className="font-black text-xl text-secondary">
                    {activePromo.parcelaMin}
                  </div>
                </div>
              </div>

              <p className="text-gray-400 text-xs text-center mb-5">
                Santander, Nubank e Itaú não aceitam parcelamento acima de 12x.
                Valores sujeitos a alteração após vistoria técnica.
              </p>

              <a
                href={`${WA_BASE}?text=${waMsg(activePromo)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackWA("payment_modal");
                  setShowPayment(false);
                }}
                className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white font-bold py-4 rounded-xl hover:bg-[#1da851] transition-colors shadow-lg"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Confirmar interesse via WhatsApp
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
