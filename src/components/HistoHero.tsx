
import { motion } from 'framer-motion';

const HistoHero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Wedding couple in natural setting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-cream-100 mb-6 leading-tight">
            Preserving <span className="font-serif italic">Love Stories</span>
          </h1>
          <div className="w-32 h-px bg-cream-100 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-cream-200 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
            Honest, cinematic, and natural documentation of your most precious moments. 
            We are not just a service — we are a space to preserve memories.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-10 py-4 bg-cream-100 text-stone-800 hover:bg-cream-200 font-light rounded-sm transition-all duration-300 transform hover:scale-105"
            >
              Start Your Story
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="px-10 py-4 border border-cream-100 text-cream-100 hover:bg-cream-100 hover:text-stone-800 font-light rounded-sm transition-all duration-300 transform hover:scale-105"
            >
              View Our Work
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-px h-16 bg-cream-100/50 mb-2"></div>
        <p className="text-cream-200 text-sm font-light tracking-wider">SCROLL</p>
      </motion.div>
    </section>
  );
};

export default HistoHero;
