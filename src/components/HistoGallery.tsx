
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const galleryImages = [
  '/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png',
  '/lovable-uploads/3fecfd13-17ff-4f06-8781-901d678507a7.png',
  '/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png',
  '/lovable-uploads/3fecfd13-17ff-4f06-8781-901d678507a7.png',
  '/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png',
  '/lovable-uploads/3fecfd13-17ff-4f06-8781-901d678507a7.png'
];

const HistoGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="py-20 bg-beige-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-sage-800 mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto">
            A collection of beautiful moments we've captured for our couples
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistoGallery;
