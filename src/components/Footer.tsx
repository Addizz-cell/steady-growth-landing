
import { Link } from "react-router-dom";
import { Facebook } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-[#002439] text-white pt-12 pb-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Steady Growth Insight</h3>
            <p className="text-white/70 mb-4">
              Professional investment solutions for everyone. Making wealth growth accessible through forex, binary trading, and real estate.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/share/161DhJERki/?mibextid=LQQJ4d" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-[#e73667] transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/70 hover:text-[#e73667] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/investments" className="text-white/70 hover:text-[#e73667] transition-colors">
                  Investment Options
                </Link>
              </li>
              <li>
                <Link to="/investments" className="text-white/70 hover:text-[#e73667] transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-white/70 hover:text-[#e73667] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-white/70 hover:text-[#e73667] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/legal-disclaimer" className="text-white/70 hover:text-[#e73667] transition-colors">
                  Legal Disclaimer
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-white/70">
              <li>contact@steadygrowthinsight.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Investment Avenue, Financial District</li>
              <li>New York, NY 10001</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p>© {currentYear} Steady Growth Insight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
