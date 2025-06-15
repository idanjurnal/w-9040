
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const HistoHero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  return (
    <section 
      id="hero" 
      ref={ref}
      className="relative h-screen overflow-hidden bg-cream-50"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
        {/* Left side - Image */}
        <motion.div
          className="relative overflow-hidden"
          style={{
            backgroundImage: `url('/lovable-uploads/3fecfd13-17ff-4f06-8781-901d678507a7.png')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            y: backgroundY,
          }}
        />
        
        {/* Right side - Quote */}
        <div className="flex items-center justify-center p-8 lg:p-16 bg-cream-50">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center max-w-md"
          >
            <blockquote className="text-2xl lg:text-3xl font-serif italic text-sage-700 leading-relaxed mb-8">
              "Life is like a camera. Just focus on what's important and capture the good times, develop from the negatives, and if things don't work out, just take another shot."
            </blockquote>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-4"
            >
              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-3 bg-sage-600 hover:bg-sage-700 text-cream-50 font-medium rounded-sm transition-colors duration-300"
              >
                Book Your Session
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator that fades out */}
      <motion.div
        style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0]) }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-sage-700"
      >
        <div className="animate-bounce">
            <p className="text-sm font-light tracking-wider">SCROLL</p>
            <div className="w-px h-12 bg-sage-700/50 mx-auto mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HistoHero;
