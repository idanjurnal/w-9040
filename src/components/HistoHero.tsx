
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
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/lovable-uploads/3fecfd13-17ff-4f06-8781-901d678507a7.png')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          y: backgroundY,
        }}
      />
      
      {/* Scroll Indicator that fades out */}
      <motion.div
        style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0]) }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-stone-700"
      >
        <div className="animate-bounce">
            <p className="text-sm font-light tracking-wider">SCROLL</p>
            <div className="w-px h-12 bg-stone-700/50 mx-auto mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HistoHero;
