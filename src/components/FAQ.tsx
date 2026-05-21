import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Qual é o valor do investimento?',
    a: 'O investimento médio para uma residência de alto padrão (sistema de ~10kWp) gira em torno de R$ 26.000 completo. Com as opções de parcelamento em até 24x, a parcela muitas vezes é menor que a conta de luz atual, gerando fluxo de caixa positivo desde o primeiro mês.',
  },
  {
    q: 'Meu telhado suporta os painéis?',
    a: 'Sim, na maioria dos casos. Como somos especialistas em construção e reformas, realizamos uma vistoria estrutural técnica inclusa no orçamento. Caso o telhado precise de reforço, nossa equipe de engenharia civil já apresenta a solução integrada.',
  },
  {
    q: 'Qual a garantia real do sistema?',
    a: 'Oferecemos 25 anos de garantia de desempenho nos módulos fotovoltaicos, 10 anos no inversor PHB e 12 anos na estrutura de fixação em alumínio. Tudo documentado via ART por engenheiro responsável.',
  },
  {
    q: 'Como funciona a manutenção?',
    a: 'A manutenção é mínima, consistindo basicamente na limpeza periódica dos painéis com água. Recomenda-se uma revisão técnica anual para garantir que o sistema continue operando em pico de eficiência.',
  },
  {
    q: 'O que acontece em dias nublados ou à noite?',
    a: 'O sistema on-grid utiliza a rede da concessionária como "bateria". Durante o dia, você gera excesso e envia para a rede; à noite ou em dias nublados, você consome os créditos gerados. O saldo final reduz sua conta em até 95%.',
  },
  {
    q: 'Qual o prazo para começar a gerar?',
    a: 'Após a assinatura do contrato, a instalação ocorre em até 30 dias. A homologação final com a concessionária de energia leva entre 30 a 60 dias adicionais, dependendo da agilidade da rede local.',
  },
];

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-20 bg-[#00357b] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,_rgba(255,207,30,0.05),transparent_40%)] pointer-events-none" />
      
      <div className="max-w-[800px] mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="text-[#ffcf1e] font-bold text-xs uppercase tracking-widest mb-4 block">
            Dúvidas Frequentes
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
            Transparência em <br/> cada detalhe
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div 
              key={i} 
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                open === i 
                  ? 'border-[#ffcf1e]/30 bg-white/5' 
                  : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.04]'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-5 flex justify-between items-center gap-4 text-left group"
              >
                <span className={`text-base md:text-lg font-bold transition-colors duration-300 ${
                  open === i ? 'text-[#ffcf1e]' : 'text-white'
                }`}>
                  {item.q}
                </span>
                <ChevronDown 
                  size={20} 
                  className={`flex-shrink-0 text-[#ffcf1e] transition-transform duration-500 ${
                    open === i ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-6 pb-5 text-white/60 text-base leading-relaxed">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/40 text-sm italic">
            Ainda tem dúvidas? Fale diretamente com um consultor técnico via WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;