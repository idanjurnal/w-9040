
import { motion } from 'framer-motion';
import { Camera, Heart, Star } from 'lucide-react';

const WeddingHero = () => {
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
          backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/70 via-amber-800/60 to-amber-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="flex items-center justify-center mb-4">
              <Heart className="text-amber-200 w-8 h-8 mr-2" />
              <span className="text-amber-200 text-lg font-light tracking-wider">ETERNAL MOMENTS</span>
              <Heart className="text-amber-200 w-8 h-8 ml-2" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-light text-cream-100 mb-6 leading-tight"
          >
            Capturing Your
            <span className="block font-serif italic text-amber-200">Love Story</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-cream-200 mb-8 font-light leading-relaxed"
          >
            Professional pre-wedding and wedding day photography
            <br />with timeless elegance and artistic vision
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-sm transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book Your Session
            </button>
            <button
              onClick={() => {
                const gallerySection = document.getElementById('gallery');
                if (gallerySection) {
                  gallerySection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-4 border-2 border-amber-200 text-amber-200 hover:bg-amber-200 hover:text-amber-900 font-medium rounded-sm transition-all duration-300"
            >
              View Our Work
            </button>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 text-amber-300/30"
          >
            <Camera className="w-16 h-16" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/3 right-1/4 text-amber-300/30"
          >
            <Star className="w-12 h-12" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-amber-200"
      >
        <div className="w-6 h-10 border-2 border-amber-200 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-200 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default WeddingHero;
