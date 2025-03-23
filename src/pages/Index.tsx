
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { InvestmentCTA } from "@/components/InvestmentCTA";
import { MarketPrices } from "@/components/MarketPrices";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#003049] text-white">
      <Hero />
      <Features />
      <MarketPrices />
      <Testimonials />
      <InvestmentCTA />
      <Footer />
    </div>
  );
};

export default Index;
