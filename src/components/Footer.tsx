import React from "react";

const Footer: React.FC = () => {
  const scrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#00357b] text-white">
      <div className="max-w-[1280px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
        <div>
          <div className="text-xl font-bold text-[#ffcf1e] mb-6">Edu Santos Energia Solar</div>
          <p className="text-sm leading-relaxed text-white/60">
            © {new Date().getFullYear()} Edu Santos Energia Solar. Engenharia de alto padrão em soluções residenciais de energia renovável.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Serviços</h4>
          <ul className="space-y-3">
            <li><a className="text-white/60 text-sm hover:text-[#ffcf1e] transition-colors" href="#como-funciona" onClick={(e) => scrollTo('como-funciona', e)}>Energia Solar Residencial</a></li>
            <li><a className="text-white/60 text-sm hover:text-[#ffcf1e] transition-colors" href="#contato" onClick={(e) => scrollTo('contato', e)}>Consultoria Energética</a></li>
            <li><a className="text-white/60 text-sm hover:text-[#ffcf1e] transition-colors" href="#faq" onClick={(e) => scrollTo('faq', e)}>Suporte e FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Parceiros</h4>
          <ul className="space-y-3">
            <li><a className="text-white/60 text-sm hover:text-[#ffcf1e] transition-colors" href="#diferencial" onClick={(e) => scrollTo('diferencial', e)}>Parceiros Arquitetos</a></li>
            <li><a className="text-white/60 text-sm hover:text-[#ffcf1e] transition-colors" href="#diferencial" onClick={(e) => scrollTo('diferencial', e)}>Unidade Construção</a></li>
            <li><a className="text-white/60 text-sm hover:text-[#ffcf1e] transition-colors" href="#beneficios" onClick={(e) => scrollTo('beneficios', e)}>Sustentabilidade ESG</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Contato</h4>
          <div className="space-y-3">
            <a href="https://wa.me/5511914277562" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 text-sm hover:text-[#ffcf1e] transition-colors">
              <span className="material-symbols-outlined text-[#ffcf1e]">phone</span>
              11 91427.7562
            </a>
            <a href="https://instagram.com/escola_solar_sp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 text-sm hover:text-[#ffcf1e] transition-colors">
              <span className="material-symbols-outlined text-[#ffcf1e]">photo_camera</span>
              @escola_solar_sp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;