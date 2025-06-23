import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoImage from "@assets/logo_transparent_1750680692652.png";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src={logoImage} alt="Zorayn Technologies Logo" className="h-8 w-auto" />
            <span className="ml-3 text-xl font-bold text-gray-900">Zorayn Technologies</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[var(--zorayn-gold)] transition-colors duration-300">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[var(--zorayn-gold)] transition-colors duration-300">About</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-[var(--zorayn-gold)] transition-colors duration-300">Services</button>
              <button onClick={() => scrollToSection('team')} className="text-gray-700 hover:text-[var(--zorayn-gold)] transition-colors duration-300">Team</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[var(--zorayn-gold)] transition-colors duration-300">Contact</button>
              <button onClick={() => scrollToSection('careers')} className="text-gray-700 hover:text-[var(--zorayn-gold)] transition-colors duration-300">Careers</button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[var(--zorayn-gold)]"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-gray-700 hover:text-[var(--zorayn-gold)]">Home</button>
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-gray-700 hover:text-[var(--zorayn-gold)]">About</button>
              <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-gray-700 hover:text-[var(--zorayn-gold)]">Services</button>
              <button onClick={() => scrollToSection('team')} className="block px-3 py-2 text-gray-700 hover:text-[var(--zorayn-gold)]">Team</button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-gray-700 hover:text-[var(--zorayn-gold)]">Contact</button>
              <button onClick={() => scrollToSection('careers')} className="block px-3 py-2 text-gray-700 hover:text-[var(--zorayn-gold)]">Careers</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
