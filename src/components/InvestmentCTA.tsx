
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export const InvestmentCTA = () => {
  return (
    <div className="w-full py-16 px-4 md:px-8 bg-[#002439]">
      <div className="max-w-4xl mx-auto text-center">
        <TrendingUp className="h-12 w-12 mx-auto mb-6 text-[#e73667]" />
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Investment Journey?</h2>
        <p className="text-lg text-white/80 mb-8 mx-auto">
          Join Steady Growth Insight today and let our experienced forex and binary trading professionals manage your investments while you enjoy the returns.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="https://broker.steadygrowthinsight.com/register" target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              className="bg-[#e73667] hover:bg-[#e73667]/90 text-white hover:translate-y-[-2px] transition-transform px-8"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <Link to="/investments">
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/20 bg-white/5 hover:bg-white/10 text-white"
            >
              View Investment Options
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
