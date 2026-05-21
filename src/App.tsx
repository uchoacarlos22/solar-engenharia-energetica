import React from "react";
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

const App: React.FC = () => (
  <div className="bg-background text-on-surface font-body-md overflow-x-hidden w-full relative">
    <Header />
    <main>
      <SolarHeroSlider />
      <NewBenefits />
      <VideoSection />
      <Savings />
      <Portfolio />
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

export default App;
