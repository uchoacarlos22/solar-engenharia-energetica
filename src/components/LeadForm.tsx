import React, { useState } from "react";
import { WEB3FORMS_KEY } from "../theme";

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    bill: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const endpoint = "https://api.web3forms.com/submit";
    const data = {
      access_key: WEB3FORMS_KEY,
      subject: "Novo Lead - Energia Solar (LP Tailwind)",
      from_name: "Simulador Edu Santos Energia Solar",
      Nome: formData.name,
      WhatsApp: formData.phone,
      ContaLuz: `R$ ${formData.bill}`,
    };

    try {
      const resp = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });

      if (resp.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", bill: "" });
        window.gtag('event', 'form_submit', {
          event_category: 'lead',
          event_label: 'solar_lp_tailwind'
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contato" className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f0f3ff] -skew-x-12 transform translate-x-24 pointer-events-none" />
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white shadow-lg grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden">
          <div className="p-10 md:p-12 bg-[#00357b] text-white flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
              Comece sua transformação hoje
            </h2>
            <p className="text-white/70 mb-8">
              Nossos consultores realizarão um estudo de viabilidade técnico-financeira personalizado para seu perfil de consumo.
            </p>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-[#ffcf1e] text-4xl">support_agent</span>
              <span className="text-white font-bold">Atendimento especializado em até 24h.</span>
            </div>
          </div>
          <div className="p-10 md:p-12">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-primary-brand mb-2">
                  Nome Completo
                </label>
                <input 
                  className="w-full bg-surface-container-low border-b-2 border-outline-variant focus:border-[#ffcf1e] focus:ring-0 transition-all p-3 text-on-surface" 
                  placeholder="Ex: Ricardo Almeida" 
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  disabled={status === 'submitting'}
                />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-primary-brand mb-2">
                  WhatsApp
                </label>
                <input 
                  className="w-full bg-surface-container-low border-b-2 border-outline-variant focus:border-[#ffcf1e] focus:ring-0 transition-all p-3 text-on-surface" 
                  placeholder="(11) 99999-9999" 
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  disabled={status === 'submitting'}
                />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-primary-brand mb-2">
                  Gasto Mensal de Luz (R$)
                </label>
                <input 
                  className="w-full bg-surface-container-low border-b-2 border-outline-variant focus:border-[#ffcf1e] focus:ring-0 transition-all p-3 text-on-surface" 
                  placeholder="Ex: 850,00" 
                  type="number"
                  required
                  value={formData.bill}
                  onChange={(e) => setFormData({ ...formData, bill: e.target.value })}
                  disabled={status === 'submitting'}
                />
              </div>
              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-[#ffcf1e] text-[#705900] font-bold uppercase tracking-wider py-4 rounded-xl shadow-lg hover:bg-[#ffe087] transition-all disabled:opacity-50"
              >
                {status === 'submitting' ? 'Enviando...' : 'Quero uma simulação'}
              </button>

              {status === "success" && (
                <div className="text-green-600 font-bold bg-green-50 p-4 border border-green-200 mt-4 text-center text-sm rounded-xl">
                  Recebemos seus dados! Nossa equipe entrará em contato comercialmente via WhatsApp.
                </div>
              )}
              {status === "error" && (
                <div className="text-red-500 font-bold bg-red-50 p-4 border border-red-200 mt-4 text-center text-sm rounded-xl">
                  Ocorreu um erro ao enviar. Por favor, tente novamente ou nos chame no WhatsApp!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;