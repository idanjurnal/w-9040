
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const HistoNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      )}
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('hero')}
              className="flex items-center"
            >
              <span className={cn(
                "text-2xl font-serif italic transition-colors",
                isScrolled ? "text-stone-800" : "text-cream-100"
              )}>
                Histo Project
              </span>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className={cn(
                "text-sm font-light transition-colors hover:opacity-80",
                isScrolled ? "text-stone-700" : "text-cream-100"
              )}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={cn(
                "text-sm font-light transition-colors hover:opacity-80",
                isScrolled ? "text-stone-700" : "text-cream-100"
              )}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className={cn(
                "text-sm font-light transition-colors hover:opacity-80",
                isScrolled ? "text-stone-700" : "text-cream-100"
              )}
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className={cn(
                "text-sm font-light transition-colors hover:opacity-80",
                isScrolled ? "text-stone-700" : "text-cream-100"
              )}
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={cn(
                "px-6 py-2 border border-stone-600 rounded-sm text-sm font-light transition-all hover:bg-stone-600 hover:text-cream-100",
                isScrolled 
                  ? "text-stone-700 border-stone-600" 
                  : "text-cream-100 border-cream-100 hover:bg-cream-100 hover:text-stone-800"
              )}
            >
              Contact Us
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className={cn(
                "focus:outline-none",
                isScrolled ? "text-stone-700" : "text-cream-100"
              )}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn(
        "md:hidden transition-all duration-300 overflow-hidden w-full",
        isMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className={cn(
          "px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-sm",
          isScrolled ? "bg-white/95 backdrop-blur-sm" : "bg-stone-900/90 backdrop-blur-sm"
        )}>
          <button 
            onClick={() => scrollToSection('hero')}
            className={cn(
              "block w-full text-left px-3 py-2 rounded-md text-sm font-light",
              isScrolled ? "text-stone-700 hover:bg-stone-100" : "text-cream-100 hover:bg-stone-800"
            )}
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className={cn(
              "block w-full text-left px-3 py-2 rounded-md text-sm font-light",
              isScrolled ? "text-stone-700 hover:bg-stone-100" : "text-cream-100 hover:bg-stone-800"
            )}
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('gallery')}
            className={cn(
              "block w-full text-left px-3 py-2 rounded-md text-sm font-light",
              isScrolled ? "text-stone-700 hover:bg-stone-100" : "text-cream-100 hover:bg-stone-800"
            )}
          >
            Portfolio
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')}
            className={cn(
              "block w-full text-left px-3 py-2 rounded-md text-sm font-light",
              isScrolled ? "text-stone-700 hover:bg-stone-100" : "text-cream-100 hover:bg-stone-800"
            )}
          >
            Testimonials
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className={cn(
              "block w-full text-left px-3 py-2 rounded-md text-sm font-light",
              isScrolled ? "text-stone-700 bg-stone-200 hover:bg-stone-300" : "text-cream-100 bg-stone-700 hover:bg-stone-600"
            )}
          >
            Contact Us
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default HistoNavbar;
