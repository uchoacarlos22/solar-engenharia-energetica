import React, { useState } from 'react';
import { trackWA, WA_BASE } from '../theme';
import { Calculator, TrendingUp, Clock, Zap } from 'lucide-react';

const TARIFA_KWH = 0.80;
const REAJUSTE_ANUAL = 0.06;
const ECONOMIA_PERCENT = 0.95;
const CUSTO_POR_KWP = 2625;
const ANOS_VIDA = 25;

function calcEconomia25Anos(economiaMensal: number): number {
  let total = 0;
  let mensal = economiaMensal;
  for (let ano = 0; ano < ANOS_VIDA; ano++) {
    total += mensal * 12;
    mensal *= 1 + REAJUSTE_ANUAL;
  }
  return total;
}

const Savings: React.FC = () => {
  const [bill, setBill] = useState(800);

  const economiaMensal = Math.round(bill * ECONOMIA_PERCENT);
  const economiaAnual  = economiaMensal * 12;
  const kwh = bill / TARIFA_KWH;
  const kwpNecessario = kwh / 130;
  const investimentoEstimado = Math.round(kwpNecessario * CUSTO_POR_KWP);

  const paybackAnos = economiaAnual > 0
    ? (investimentoEstimado / economiaAnual).toFixed(1)
    : "—";

  const economia25Anos = Math.round(calcEconomia25Anos(economiaMensal));

  const TAXA_MENSAL = 0.013;
  const parcela24x = Math.round(
    (investimentoEstimado * TAXA_MENSAL) / (1 - Math.pow(1 + TAXA_MENSAL, -24))
  );
  const economiaSobreParcela = economiaMensal - parcela24x;

  const fmt = (v: number) =>
    v.toLocaleString('pt-BR', { maximumFractionDigits: 0 });

  const waMsg = encodeURIComponent(
    `Olá! Quero simular um projeto solar. Minha conta média é R$ ${bill},00 por mês.`
  );

  return (
    <section id="simulador" className="py-16 md:py-20 bg-surface-container">
      <div className="max-w-[1280px] mx-auto px-6">

        <div className="text-center mb-12">
          <span className="text-sm font-bold uppercase tracking-wider text-[#daa520] block mb-2">
            Simulador de economia
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-primary-brand leading-tight mb-4">
            Quanto você vai economizar?
          </h2>
          <p className="text-lg text-on-surface-variant max-w-xl mx-auto">
            Baseado na tarifa real de R$ 0,80/kWh com reajuste de 6% ao ano — os mesmos parâmetros usados nos nossos orçamentos.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10">

          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="text-[#daa520]" size={32} />
              <h3 className="text-xl md:text-2xl font-bold text-primary-brand">
                Calculadora de Economia
              </h3>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant/30 mb-6">
              <label className="block font-bold text-primary-brand mb-4 flex justify-between items-center">
                <span>Sua conta de luz mensal</span>
                <span className="text-[#daa520] text-xl border-b-2 border-[#daa520]">
                  R$ {bill.toLocaleString('pt-BR')}
                </span>
              </label>
              <input
                type="range"
                min="200"
                max="5000"
                step="50"
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
                className="w-full h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-[#ffcf1e]"
              />
              <div className="flex justify-between text-xs text-outline mt-2">
                <span>R$ 200</span>
                <span>R$ 5.000+</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-outline-variant/30">
                <div className="flex items-center gap-2 mb-2">
                  <Zap size={16} className="text-[#daa520]" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-outline">Economia mensal</span>
                </div>
                <div className="text-2xl font-black text-green-600">
                  R$ {fmt(economiaMensal)}
                </div>
                <div className="text-xs text-outline mt-1">95% da conta atual</div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-outline-variant/30">
                <div className="flex items-center gap-2 mb-2">
                  <Clock size={16} className="text-[#daa520]" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-outline">Payback estimado</span>
                </div>
                <div className="text-2xl font-black text-primary-brand">
                  {paybackAnos} anos
                </div>
                <div className="text-xs text-outline mt-1">Retorno do investimento</div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-outline-variant/30">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp size={16} className="text-[#daa520]" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-outline">Em 25 anos*</span>
                </div>
                <div className="text-2xl font-black text-primary-brand">
                  R$ {fmt(economia25Anos)}
                </div>
                <div className="text-xs text-outline mt-1">*com reajuste de 6% ao ano</div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-outline-variant/30">
                <div className="flex items-center gap-2 mb-2">
                  <Calculator size={16} className="text-[#daa520]" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-outline">Investimento estimado</span>
                </div>
                <div className="text-2xl font-black text-primary-brand">
                  R$ {fmt(investimentoEstimado)}
                </div>
                <div className="text-xs text-outline mt-1">Kit + instalação</div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-6">

            <div className="bg-[#00357b] text-white p-10 rounded-2xl shadow-lg relative overflow-hidden group">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#ffcf1e]/10 rounded-full blur-3xl group-hover:bg-[#ffcf1e]/20 transition-all duration-700" />

              <p className="text-sm font-bold uppercase tracking-widest text-[#ffcf1e] mb-2">
                Economia acumulada em 25 anos
              </p>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                R$ {fmt(economia25Anos)}
              </h3>

              <p className="text-white/70 mb-6 border-l-4 border-[#ffcf1e] pl-4 text-sm leading-relaxed">
                Considerando tarifa de R$ 0,80/kWh com reajuste de 6% ao ano. Após o payback de ~{paybackAnos} anos, a energia é praticamente gratuita pelo restante da vida útil.
              </p>

              <a
                href={`${WA_BASE}?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWA('simulador')}
                className="inline-flex w-full md:w-auto items-center justify-center bg-[#ffcf1e] text-[#705900] font-bold px-8 py-4 shadow-lg hover:bg-[#ffe087] transition-all rounded-xl"
              >
                Pedir detalhamento no WhatsApp
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant/30">
              <h4 className="font-bold text-primary-brand text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <CreditCardIcon size={16} className="text-[#daa520]" />
                Financiamento vs Conta de Luz
              </h4>

              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-outline-variant/30">
                  <span className="text-sm text-on-surface-variant">Sua conta atual</span>
                  <span className="font-black text-red-500 text-base">- R$ {fmt(bill)}/mês</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-outline-variant/30">
                  <span className="text-sm text-on-surface-variant">Parcela estimada (24x)</span>
                  <span className="font-black text-primary-brand text-base">R$ {fmt(parcela24x)}/mês</span>
                </div>
                <div className={`flex justify-between items-center py-3 px-3 rounded-xl ${economiaSobreParcela >= 0 ? 'bg-green-50 border border-green-200' : 'bg-orange-50 border border-orange-200'}`}>
                  <span className={`text-sm font-bold ${economiaSobreParcela >= 0 ? 'text-green-700' : 'text-orange-700'}`}>
                    {economiaSobreParcela >= 0 ? '✓ Você economiza já no 1º mês' : 'Diferença pequena vs conta atual'}
                  </span>
                  <span className={`font-black text-lg ${economiaSobreParcela >= 0 ? 'text-green-700' : 'text-orange-600'}`}>
                    {economiaSobreParcela >= 0 ? '+' : ''}R$ {fmt(Math.abs(economiaSobreParcela))}/mês
                  </span>
                </div>
              </div>

              <p className="text-xs text-outline mt-3">
                * Parcela estimada para financiamento de 24x com taxa de 1,3% a.m. Condições reais sujeitas a análise.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

function CreditCardIcon({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

export default Savings;