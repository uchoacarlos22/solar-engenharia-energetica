import React from "react";
import {
  ShieldCheck,
  CreditCard,
  BadgeCheck,
  Zap,
  Lock,
  Calendar,
  Building2,
  FileCheck2,
} from "lucide-react";

export const GarantiasPagamento: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-visible">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Coluna 1: Garantias e Engenharia */}
          <div>
            <div className="mb-10">
              <span className="text-secondary font-black text-xs uppercase tracking-widest mb-4 block">
                Padrão de Qualidade Edu Santos
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight">
                Garantia Triple-A e Responsabilidade Técnica
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Não apenas instalamos painéis; entregamos uma infraestrutura de
                engenharia projetada para durar décadas, com todos os sistemas
                auditados por engenheiros civis e eletricistas.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "25 Anos de Desempenho",
                  desc: "Garantia de geração linear nos módulos fotovoltaicos bifaciais de alto rendimento.",
                  icon: <ShieldCheck size={28} className="text-secondary" />,
                },
                {
                  title: "10 Anos no Inversor",
                  desc: "Cobertura total contra defeitos de fabricação em inversores PHB On-Grid de última geração.",
                  icon: <Zap size={28} className="text-secondary" />,
                },
                {
                  title: "12 Anos na Estrutura",
                  desc: "Fixação em alumínio anodizado e aço inox, resistente a corrosão e ventos fortes.",
                  icon: <Building2 size={28} className="text-secondary" />,
                },
                {
                  title: "ART Responsável",
                  desc: "Todo projeto acompanha ART (Anotação de Responsabilidade Técnica) do engenheiro responsável.",
                  icon: <FileCheck2 size={28} className="text-secondary" />,
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-primary text-lg mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna 2: Formas de Pagamento */}
          <div className="bg-[#00357b] rounded-[32px] p-8 md:p-12 shadow-2xl relative overflow-hidden text-white min-h-[500px] lg:min-h-0">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <CreditCard size={120} />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-8 flex items-center gap-4">
                <Lock className="text-secondary" size={28} />
                Facilidade no Pagamento
              </h3>

              <div className="space-y-8">
                {/* Opção 1: Cartão */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <CreditCard className="text-secondary" size={20} />
                    </div>
                    <span className="font-bold text-lg">Kit Solar em 24x</span>
                  </div>
                  <p className="text-white/60 text-sm mb-4">
                    Parceria com PHB Solar permite parcelamento estendido em
                    cartões Visa e Mastercard.
                  </p>
                  <div className="flex items-center gap-2">
                    <BadgeCheck size={16} className="text-secondary" />
                    <span className="text-xs font-bold uppercase tracking-wide">
                      Aprovação imediata
                    </span>
                  </div>
                </div>

                {/* Opção 2: Pix */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <Zap className="text-secondary" size={20} />
                    </div>
                    <span className="font-bold text-lg">
                      Entrada + Saldo no Pix
                    </span>
                  </div>
                  <p className="text-white/60 text-sm mb-4">
                    Instalação: 50% de entrada e o saldo restante parcelado em
                    até 4x via Pix sem juros.
                  </p>
                  <div className="flex items-center gap-2 text-secondary">
                    <BadgeCheck size={16} />
                    <span className="text-xs font-bold uppercase tracking-wide">
                      Melhor desconto à vista
                    </span>
                  </div>
                </div>

                {/* Prazo */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <Calendar className="text-secondary" size={24} />
                  <div>
                    <div className="text-sm font-bold">Prazo de Entrega</div>
                    <div className="text-white/50 text-xs leading-relaxed">
                      Instalação em 30 dias. Homologação completa em 30 a 60
                      dias conforme concessionária.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 bg-white/10 p-6 rounded-2xl flex flex-col items-center text-center">
                <p className="text-white/70 text-sm mb-4">
                  Trabalhamos com os principais bancos para financiamento solar
                  (Santander, BV, Sicredi).
                </p>
                <div className="flex flex-wrap justify-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                  <span className="text-xs font-bold font-serif italic">
                    SANTANDER
                  </span>
                  <span className="text-xs font-bold font-serif italic">
                    BV
                  </span>
                  <span className="text-xs font-bold font-serif italic">
                    SICREDI
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
