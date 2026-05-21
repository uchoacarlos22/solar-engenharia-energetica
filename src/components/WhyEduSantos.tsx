import React from "react";

const WhyEduSantos: React.FC = () => {
  return (
    <section id="diferencial" className="py-16 md:py-20 bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <img
              className="w-full shadow-2xl rounded-2xl"
              alt="Architectural construction site showing steel frame structure and precise engineering work"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvAWgHyCoCoq0BLZxuvfFqFiQVLkOCdeZRLOGGNoQAXaYFbtXQRnx_l6FxifiEDyma53gE3g9S8KX3jwTfzM3Ffz3c6tM_OjWhheVVzjV4_uqBUqIXryWzNPYvJ0VPVqnTKbkvsIiZuIyhqazvukF790-YscpU4iREKnGecIEP0tKEeKjUXWfKjTTMUMVfVFDGOsPGAFihkuRZmYgBAbuMs9iTIrjZ0FTUVOeaz-Oj1gQd7qfqA41pKDUWRnPzImXD9E2oD3zH6UF6"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <span className="text-sm font-bold uppercase tracking-wider text-[#daa520] block mb-2">Diferencial Edu Santos</span>
            <h2 className="text-2xl md:text-4xl font-bold text-primary-brand mt-4 mb-6 leading-tight">
              Muito além da instalação: Somos especialistas em construção civil
            </h2>
            <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
              Diferente de instaladores comuns, entendemos a integridade estrutural do seu imóvel. Nossa equipe de engenharia civil garante que a instalação solar respeite a arquitetura e a segurança do seu patrimônio.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#daa520]">check_circle</span>
                <span className="font-bold text-on-surface">Respeito à estética arquitetônica</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#daa520]">check_circle</span>
                <span className="font-bold text-on-surface">Garantia estrutural de engenharia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEduSantos;
