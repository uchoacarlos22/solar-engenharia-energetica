const Icon = ({ name, className = "", filled = false }: { name: string; className?: string; filled?: boolean }) => (
  <span
    className={`material-symbols-outlined ${className}`}
    style={filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
  >
    {name}
  </span>
);

export function NewBenefits() {
  return (
    <section className="py-16 md:py-24 bg-surface" id="beneficios">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-[32px] leading-10 font-bold text-primary-brand mb-4">
            Investimento com Inteligência
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            Mude para o solar e experimente a liberdade de produzir sua própria energia com tecnologia de ponta.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white p-8 md:p-10 rounded-2xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-14 h-14 bg-[#ffcf1e]/20 rounded-xl flex items-center justify-center mb-6 text-[#daa520] group-hover:scale-110 transition-transform">
              <Icon name="savings" className="text-4xl" filled />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-primary-brand mb-4">Economia de até 95%</h3>
            <p className="text-on-surface-variant mb-6">
              Reduza drasticamente seus custos fixos e proteja-se contra os aumentos frequentes nas tarifas de energia elétrica.
            </p>
            <div className="bg-surface-container-low p-4 rounded-xl inline-flex items-center gap-3">
              <span className="text-[#daa520] font-bold text-xl md:text-2xl">ROI rápido</span>
              <span className="text-on-surface-variant">Payback médio em 4 anos</span>
            </div>
          </div>
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-14 h-14 bg-primary-container/10 rounded-xl flex items-center justify-center mb-6 text-primary-brand group-hover:scale-110 transition-transform">
              <Icon name="eco" className="text-4xl" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-primary-brand mb-4">Sustentabilidade</h3>
            <p className="text-on-surface-variant">
              Contribua para um planeta mais limpo reduzindo sua pegada de carbono com energia 100% renovável.
            </p>
          </div>
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-14 h-14 bg-primary-container/10 rounded-xl flex items-center justify-center mb-6 text-primary-brand group-hover:scale-110 transition-transform">
              <Icon name="home_work" className="text-4xl" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-primary-brand mb-4">Valorização</h3>
            <p className="text-on-surface-variant">
              Imóveis com sistema solar próprio são vendidos até 10% mais rápido e possuem maior valor de mercado.
            </p>
          </div>
          <div className="md:col-span-2 bg-primary-brand text-on-primary p-8 md:p-10 rounded-2xl shadow-lg relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <Icon name="bolt" className="text-4xl" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Independência Energética</h3>
              <p className="opacity-90 max-w-lg">
                Não dependa mais exclusivamente da rede. Tenha controle total sobre sua geração de energia e monitore tudo em tempo real pelo seu smartphone.
              </p>
            </div>
            <div className="absolute right-0 bottom-0 opacity-10 translate-x-10 translate-y-10">
              <Icon name="solar_power" className="text-[200px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}