
import { motion } from 'framer-motion';
import { Camera, Heart, Film } from 'lucide-react';

const HistoHero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-stone-800/70 via-stone-700/50 to-stone-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-px bg-cream-200 mr-4"></div>
              <span className="text-cream-200 text-lg font-light tracking-[0.3em] uppercase">Histo Project</span>
              <div className="w-16 h-px bg-cream-200 ml-4"></div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-light text-cream-100 mb-8 leading-tight"
          >
            Preserving Your
            <span className="block font-serif italic text-cream-200">Love Stories</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-cream-200 mb-12 font-light leading-relaxed max-w-3xl mx-auto"
          >
            We are not just a service — we are a space to preserve memories. 
            <br />Through honest, cinematic, and natural documentation in Bandung.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button
              onClick={scrollToContact}
              className="px-10 py-4 bg-stone-700 hover:bg-stone-600 text-cream-100 font-light rounded-sm transition-all duration-300 transform hover:scale-105 shadow-lg border border-stone-600"
            >
              Start Your Story
            </button>
            <button
              onClick={() => {
                const gallerySection = document.getElementById('gallery');
                if (gallerySection) {
                  gallerySection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-10 py-4 border border-cream-200 text-cream-200 hover:bg-cream-200 hover:text-stone-800 font-light rounded-sm transition-all duration-300"
            >
              View Our Work
            </button>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/4 left-1/6 text-cream-300/20"
          >
            <Camera className="w-12 h-12" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-1/3 right-1/5 text-cream-300/20"
          >
            <Film className="w-10 h-10" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="absolute bottom-1/3 left-1/5 text-cream-300/20"
          >
            <Heart className="w-8 h-8" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cream-200"
      >
        <div className="w-6 h-10 border border-cream-200 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cream-200 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HistoHero;
