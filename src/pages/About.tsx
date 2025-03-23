
import { Footer } from "@/components/Footer";
import { ArrowRight, BarChart, Building, Shield, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#003049] text-white">
      {/* Hero Section */}
      <div className="w-full py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Steady Growth Insight</h1>
              <p className="text-lg text-white/80 mb-8">
                We are a professional investment management firm specializing in forex, binary trading, and real estate investments. 
                Our mission is to make wealth-building accessible to everyone through transparent, managed investment opportunities.
              </p>
              <a href="https://broker.steadygrowthinsight.com/register" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="bg-[#e73667] hover:bg-[#e73667]/90 text-white hover:translate-y-[-2px] transition-transform px-8"
                >
                  Start Investing Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Professional investment team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="w-full py-16 px-4 md:px-8 bg-[#002439]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              At Steady Growth Insight, we operate with unwavering commitment to our core principles,
              ensuring the best experience for our investors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#00395b] rounded-lg p-6 border border-white/10">
              <Shield className="h-12 w-12 text-[#e73667] mb-4" />
              <h3 className="text-xl font-bold mb-3">Security & Trust</h3>
              <p className="text-white/80">
                Your investments are secure with us. We employ industry-standard security measures and transparent reporting to build and maintain trust.
              </p>
            </div>
            
            <div className="bg-[#00395b] rounded-lg p-6 border border-white/10">
              <BarChart className="h-12 w-12 text-[#e73667] mb-4" />
              <h3 className="text-xl font-bold mb-3">Consistent Growth</h3>
              <p className="text-white/80">
                Our professional team of forex and binary trading experts work diligently to deliver consistent returns on your investments.
              </p>
            </div>
            
            <div className="bg-[#00395b] rounded-lg p-6 border border-white/10">
              <Users className="h-12 w-12 text-[#e73667] mb-4" />
              <h3 className="text-xl font-bold mb-3">Client Focus</h3>
              <p className="text-white/80">
                We prioritize our investors' needs, offering personalized service and responsive support throughout your investment journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Expertise */}
      <div className="w-full py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Investment Expertise</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              We specialize in creating diversified investment portfolios across multiple high-performing asset classes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-8">
                <TrendingUp className="h-10 w-10 text-[#e73667] mb-3" />
                <h3 className="text-2xl font-bold mb-3">Forex Trading</h3>
                <p className="text-white/80">
                  Our team of experienced forex traders navigate the currency markets with strategic precision, 
                  capitalizing on global economic trends to generate consistent returns for our investors.
                </p>
              </div>
              
              <div className="mb-8">
                <BarChart className="h-10 w-10 text-[#e73667] mb-3" />
                <h3 className="text-2xl font-bold mb-3">Binary Options</h3>
                <p className="text-white/80">
                  We employ sophisticated binary trading strategies and technical analysis to make accurate predictions
                  in the binary options market, maximizing profit opportunities.
                </p>
              </div>
              
              <div>
                <Building className="h-10 w-10 text-[#e73667] mb-3" />
                <h3 className="text-2xl font-bold mb-3">Real Estate</h3>
                <p className="text-white/80">
                  Our real estate portfolio includes premium properties in strategic locations, 
                  providing stable returns through appreciation and rental income.
                </p>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Professional traders at work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full py-16 px-4 md:px-8 bg-[#002439]">
        <div className="max-w-4xl mx-auto text-center">
          <TrendingUp className="h-12 w-12 mx-auto mb-6 text-[#e73667]" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Investment Journey?</h2>
          <p className="text-lg text-white/80 mb-8 mx-auto">
            Join Steady Growth Insight today and let our experienced forex and binary trading professionals manage your investments while you enjoy the returns.
          </p>
          <a href="https://broker.steadygrowthinsight.com/register" target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              className="bg-[#e73667] hover:bg-[#e73667]/90 text-white hover:translate-y-[-2px] transition-transform px-8"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
