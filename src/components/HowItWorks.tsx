import React from "react";

const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-16 md:py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-primary-brand">
          O Caminho para sua Independência Energética
        </h2>
        <div className="relative flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="hidden md:block absolute top-12 left-0 right-0 h-[2px] bg-surface-container-highest -z-10" />
          
          <div className="flex-1 text-center group">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-4 border-surface-container-highest flex items-center justify-center mx-auto mb-6 group-hover:border-[#ffcf1e] transition-colors z-10 relative">
              <span className="text-xl md:text-2xl font-bold text-primary-brand">01</span>
            </div>
            <h4 className="text-lg md:text-xl font-bold mb-2 text-primary-brand">Visita Técnica</h4>
            <p className="text-on-surface-variant px-4">Análise detalhada da estrutura e incidência solar.</p>
          </div>
          
          <div className="flex-1 text-center group">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-4 border-surface-container-highest flex items-center justify-center mx-auto mb-6 group-hover:border-[#ffcf1e] transition-colors z-10 relative">
              <span className="text-xl md:text-2xl font-bold text-primary-brand">02</span>
            </div>
            <h4 className="text-lg md:text-xl font-bold mb-2 text-primary-brand">Projeto</h4>
            <p className="text-on-surface-variant px-4">Dimensionamento exclusivo para sua necessidade energética.</p>
          </div>
          
          <div className="flex-1 text-center group">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-4 border-surface-container-highest flex items-center justify-center mx-auto mb-6 group-hover:border-[#ffcf1e] transition-colors z-10 relative">
              <span className="text-xl md:text-2xl font-bold text-primary-brand">03</span>
            </div>
            <h4 className="text-lg md:text-xl font-bold mb-2 text-primary-brand">Instalação</h4>
            <p className="text-on-surface-variant px-4">Execução limpa e rápida com equipe técnica qualificada.</p>
          </div>
          
          <div className="flex-1 text-center group">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-4 border-surface-container-highest flex items-center justify-center mx-auto mb-6 group-hover:border-[#ffcf1e] transition-colors z-10 relative">
              <span className="text-xl md:text-2xl font-bold text-primary-brand">04</span>
            </div>
            <h4 className="text-lg md:text-xl font-bold mb-2 text-primary-brand">Homologação</h4>
            <p className="text-on-surface-variant px-4">Cuidamos de toda a burocracia junto à concessionária.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;