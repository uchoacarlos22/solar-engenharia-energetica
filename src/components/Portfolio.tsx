import React, { useState, useEffect } from "react";
import hospital from "../assets/solar/images/portfolio/solar-hospital.webp";
import galpao from "../assets/solar/images/portfolio/solar-instalacao-galpao-urbano.webp";
import predioComercial from "../assets/solar/images/portfolio/solar-comercial-predio.jpg";
import salaoResidencial from "../assets/solar/images/portfolio/solar-residencial-salao.jpeg";
import telhadoResidencial from "../assets/solar/images/portfolio/solar-residencial-telhado-1.jpg";
import telhadoResidencial2 from "../assets/solar/images/portfolio/solar-residencial-telhado-2.jpg";
import chacara from "../assets/solar/images/portfolio/solar-residencial-chacara.jpeg";
import mobCond from "../assets/solar/images/portfolio/mobilidade-cond.png";
import mobPosto from "../assets/solar/images/portfolio/mobilidade-posto.png";
import mobShop from "../assets/solar/images/portfolio/mobilidade-shop.png";
import { X, ArrowLeft, ArrowRight, ZoomIn } from "lucide-react";
import { trackWA, WA_BASE } from "../theme";

const projects = [
  {
    id: 1,
    type: "comercial",
    location: "Hospital Central",
    economy: "R$ 9.260/mês",
    power: "180 Módulos · 72 kWp",
    img: hospital,
  },
  {
    id: 2,
    type: "industrial",
    location: "Galpão Industrial Urbano",
    economy: "R$ 7.445/mês",
    power: "144 Módulos · 57 kWp",
    img: galpao,
  },
  {
    id: 3,
    type: "comercial",
    location: "Complexo Comercial",
    economy: "R$ 5.400/mês",
    power: "94 Módulos · 37 kWp",
    img: predioComercial,
  },
  {
    id: 4,
    type: "residencial",
    location: "Residência Alto Padrão",
    economy: "R$ 1.900/mês",
    power: "18 Módulos · 7,2 kWp",
    img: telhadoResidencial2,
  },
  {
    id: 5,
    type: "residencial",
    location: "Casa com Área Verde",
    economy: "R$ 980/mês",
    power: "12 Módulos · 4,8 kWp",
    img: salaoResidencial,
  },
  {
    id: 6,
    type: "residencial",
    location: "Casa com Piscina",
    economy: "R$ 1.100/mês",
    power: "10 Módulos · 4 kWp",
    img: telhadoResidencial,
  },
  {
    id: 7,
    type: "condominio",
    location: "Condomínio Mont Blanc",
    economy: "R$ 4.850/mês",
    power: "82 Módulos · 32 kWp",
    img: chacara,
  },
  {
    id: 8,
    type: "mobilidade",
    location: "Estacionamento EV - Shopping Plaza",
    economy: "R$ 3.200/mês",
    power: "12 Eletropostos · 22 kW",
    img: mobShop,
  },
  {
    id: 9,
    type: "mobilidade",
    location: "Condomínio Green Living - Wallbox",
    economy: "R$ 1.800/mês",
    power: "8 Wallbox · 7,4 kW cada",
    img: mobCond,
  },
  {
    id: 10,
    type: "mobilidade",
    location: "Posto de Combustível - Eletro Posto",
    economy: "R$ 5.600/mês",
    power: "6 Carregadores Rápidos · 50 kW",
    img: mobPosto,
  },
];

export const Portfolio: React.FC<{ initialFilter?: string }> = ({ initialFilter }) => {
  const [filter, setFilter] = useState("todos");

  useEffect(() => {
    if (initialFilter) {
      setFilter(initialFilter);
    }
  }, [initialFilter]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const filteredProjects =
    filter === "todos" ? projects : projects.filter((p) => p.type === filter);

  const openLightbox = (index: number) => {
    setCurrentImgIndex(index);
    setLightboxOpen(true);
  };

  const nextImg = () =>
    setCurrentImgIndex((prev) =>
      prev === filteredProjects.length - 1 ? 0 : prev + 1,
    );
  const prevImg = () =>
    setCurrentImgIndex((prev) =>
      prev === 0 ? filteredProjects.length - 1 : prev - 1,
    );

  return (
    <section id="portfolio" className="py-16 md:py-20 bg-surface-container-low overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-sm font-bold tracking-widest uppercase text-[#daa520] mb-3 block">
            Cases de Sucesso
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-primary-brand mb-4">
            Engenharia que entrega{" "}
            <span className="text-[#daa520]">resultado</span>
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
            Alguns dos projetos realizados com corpo técnico homologado, entregando ROI real e segurança operacional.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {["todos", "residencial", "comercial", "industrial", "condominio", "mobilidade"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border-2 ${
                filter === f
                  ? "bg-[#00357b] text-white border-[#00357b]"
                  : "bg-white text-on-surface-variant border-outline-variant hover:border-[#00357b] hover:text-[#00357b]"
              }`}
            >
              {f === "todos" ? "Todos" : f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => openLightbox(idx)}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500 cursor-pointer group"
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.location}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#00357b]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <div className="bg-[#ffcf1e] rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-[#705900] shadow-xl">
                    <ZoomIn className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                </div>
                <div
                  className={`absolute top-3 left-3 text-[10px] font-bold uppercase px-3 py-1 rounded-full text-white shadow-lg ${
                    project.type === "residencial"
                      ? "bg-green-500"
                      : project.type === "comercial"
                        ? "bg-blue-600"
                        : project.type === "condominio"
                          ? "bg-sky-500"
                          : project.type === "mobilidade"
                            ? "bg-purple-600"
                            : "bg-slate-800"
                  }`}
                >
                  {project.type}
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-bold text-lg text-primary-brand mb-1">
                  {project.location}
                </h4>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-outline-variant/30">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-on-surface-variant font-bold tracking-wider">
                      Economia Mensal
                    </span>
                    <span className="text-lg font-black text-green-600">
                      {project.economy}
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] uppercase text-on-surface-variant font-bold tracking-wider">
                      Tamanho
                    </span>
                    <span className="text-sm font-bold text-on-surface">
                      {project.power}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-on-surface-variant mb-6 text-lg italic">
            "Instalações realizadas por corpo técnico parceiro e homologado"
          </p>
          <a
            href={`${WA_BASE}?text=${encodeURIComponent("Olá! Gostaria de ter um projeto solar como os do portfólio.")}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWA("portfolio_cta")}
            className="inline-flex items-center gap-3 bg-[#ffcf1e] text-[#705900] font-bold text-sm uppercase tracking-wider px-10 py-4 rounded-full hover:scale-105 transition-all shadow-lg"
          >
            Seu projeto começa aqui <ArrowRight size={20} />
          </a>
        </div>
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95">
          <div className="relative max-w-5xl w-full mx-4 flex flex-col items-center">
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute -top-16 right-0 text-white/50 hover:text-white transition-colors p-2"
            >
              <X size={40} />
            </button>
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={filteredProjects[currentImgIndex].img}
                alt="Projeto realizado"
                className="w-full max-h-[80vh] object-contain bg-slate-900"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent text-white">
                <h3 className="text-2xl font-bold mb-2">
                  {filteredProjects[currentImgIndex].location}
                </h3>
                <p className="text-white/70 font-bold uppercase tracking-wider text-xs">
                  {filteredProjects[currentImgIndex].power} • {filteredProjects[currentImgIndex].economy}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-10 mt-8">
              <button
                onClick={prevImg}
                className="flex items-center gap-3 text-white font-bold text-sm uppercase tracking-wider hover:text-[#ffcf1e] transition-colors"
              >
                <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center hover:border-[#ffcf1e] transition-colors">
                  <ArrowLeft size={20} />
                </div>
                Anterior
              </button>
              <div className="text-white/40 font-bold tracking-wider text-lg">
                {currentImgIndex + 1} <span className="text-white/10 mx-2">/</span> {filteredProjects.length}
              </div>
              <button
                onClick={nextImg}
                className="flex items-center gap-3 text-white font-bold text-sm uppercase tracking-wider hover:text-[#ffcf1e] transition-colors"
              >
                Próximo
                <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center hover:border-[#ffcf1e] transition-colors">
                  <ArrowRight size={20} />
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};