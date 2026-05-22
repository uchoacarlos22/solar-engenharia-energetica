import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SolarHeroSlider from "./components/SolarHeroSlider";
import { NewBenefits } from "./components/NewBenefits";
import Savings from "./components/Savings";
import { Portfolio } from "./components/Portfolio";
import { Promocoes } from "./components/Promocoes";
import { GarantiasPagamento } from "./components/GarantiasPagamento";
import HowItWorks from "./components/HowItWorks";
import WhyEduSantos from "./components/WhyEduSantos";
import FAQ from "./components/FAQ";
import LeadForm from "./components/LeadForm";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import VideoSection from "./components/VideoSection";

const App: React.FC = () => {
  const [portfolioFilter, setPortfolioFilter] = useState<string | undefined>(undefined);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#portfolio-")) {
        const filter = hash.replace("#portfolio-", "");
        setPortfolioFilter(filter);
      } else {
        setPortfolioFilter(undefined);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden w-full relative">
      <Header />
      <main>
        <SolarHeroSlider />
        <NewBenefits />
        <VideoSection />
        <Savings />
        <Portfolio initialFilter={portfolioFilter} />
        <Promocoes />
        <GarantiasPagamento />
        <HowItWorks />
        <WhyEduSantos />
        <FAQ />
        <LeadForm />
        <FinalCTA />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;
