
import { motion } from 'framer-motion';

const WeddingGallery = () => {
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Wedding couple portrait",
      category: "Portraits"
    },
    {
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Wedding ceremony",
      category: "Ceremony"
    },
    {
      url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Wedding details",
      category: "Details"
    },
    {
      url: "https://images.unsplash.com/photo-1525772764200-be829a350797?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Pre-wedding session",
      category: "Pre-Wedding"
    },
    {
      url: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Wedding reception",
      category: "Reception"
    },
    {
      url: "https://images.unsplash.com/photo-1470139953461-fd312e9e1266?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Couple in nature",
      category: "Outdoor"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-amber-50 to-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-amber-900 mb-4">
            Our <span className="font-serif italic">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-xl text-stone-700 max-w-3xl mx-auto leading-relaxed">
            A glimpse into the beautiful moments we've had the privilege to capture. 
            Each image tells a unique love story filled with emotion and joy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg shadow-lg aspect-square"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-light uppercase tracking-wider">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 border-2 border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white font-medium rounded-sm transition-all duration-300 transform hover:scale-105">
            View Full Portfolio
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingGallery;
