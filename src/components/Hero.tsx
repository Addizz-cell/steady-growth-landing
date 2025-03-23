
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="w-full py-16 md:py-24 lg:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/20 bg-white/5 text-sm font-medium">
            <TrendingUp className="mr-2 h-4 w-4" />
            Simplified Investment for Everyone
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl">
            Steady Growth Insight
            <span className="block mt-2 text-[#e73667]">Investment For All</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl">
            Invest confidently without prior experience. Our team of professional forex traders, binary options specialists, and real estate experts manage your investments to deliver consistent returns.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a href="https://broker.steadygrowthinsight.com/register" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="bg-[#e73667] hover:bg-[#e73667]/90 text-white hover:translate-y-[-2px] transition-transform px-8"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <Link to="/about">
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/20 bg-white/5 hover:bg-white/10 text-white"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
