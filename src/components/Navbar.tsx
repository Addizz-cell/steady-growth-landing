
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, TrendingUp } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-[#002439] border-b border-white/10 fixed top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <TrendingUp className="h-6 w-6 text-[#e73667]" />
              <span className="text-xl font-bold text-white">Steady Growth</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white/80 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/investments" className="text-white/80 hover:text-white transition-colors">
              Investments
            </Link>
            <Link to="/about" className="text-white/80 hover:text-white transition-colors">
              About Us
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center">
            <a href="https://broker.steadygrowthinsight.com/register" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#e73667] hover:bg-[#e73667]/90 text-white hover:translate-y-[-2px] transition-transform">
                Get Started
              </Button>
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#002439] border-t border-white/10">
          <div className="px-4 py-3 space-y-3">
            <Link 
              to="/" 
              className="block text-white/80 hover:text-white py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/investments" 
              className="block text-white/80 hover:text-white py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Investments
            </Link>
            <Link 
              to="/about" 
              className="block text-white/80 hover:text-white py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <div className="pt-2">
              <a 
                href="https://broker.steadygrowthinsight.com/register" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="w-full bg-[#e73667] hover:bg-[#e73667]/90 text-white hover:translate-y-[-2px] transition-transform">
                  Get Started
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
