import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ScrollQuoteReveal from './ScrollQuoteReveal';

const HistoGallery = () => {
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Intimate couple portrait",
      category: "Prewedding"
    },
    {
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Traditional wedding ceremony",
      category: "Traditional"
    },
    {
      url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Wedding details and rings",
      category: "Details"
    },
    {
      url: "https://images.unsplash.com/photo-1525772764200-be829a350797?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Engagement session",
      category: "Engagement"
    },
    {
      url: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Wedding day celebration",
      category: "Wedding Day"
    },
    {
      url: "https://images.unsplash.com/photo-1470139953461-fd312e9e1266?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Cinematic couple portrait",
      category: "Cinematic"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-stone-100 to-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-4">
            Our <span className="font-serif italic">Portfolio</span>
          </h2>
          <div className="w-24 h-px bg-stone-600 mx-auto mb-6"></div>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed font-light">
            Each frame tells a story. Each moment preserved becomes a memory. 
            Here are glimpses of the love stories we've had the honor to document in Bandung.
          </p>
        </motion.div>

        <Carousel className="max-w-xl mx-auto mb-12">
          <CarouselContent>
            {galleryImages.map((image, index) => (
              <CarouselItem key={index}>
                <motion.div
                  className="group relative overflow-hidden rounded-xl shadow-md aspect-[4/5] bg-white hover:scale-105 hover:shadow-amber-100/70 transition duration-300"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-light uppercase tracking-wider">{image.category}</p>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6 space-x-2">
            <CarouselPrevious className="bg-stone-200 hover:bg-stone-300 border-stone-300 text-stone-700" />
            <CarouselNext className="bg-stone-200 hover:bg-stone-300 border-stone-300 text-stone-700" />
          </div>
        </Carousel>
        {/* Tambahkan Scroll-triggered Quote Reveal */}
        <div className="my-16">
          <ScrollQuoteReveal
            quote="Moments may fade, but the story stays—hidden in the light, discovered in your smile."
            author="Histo Project"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <button className="px-10 py-4 border border-stone-600 text-stone-700 hover:bg-stone-600 hover:text-cream-100 font-light rounded-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            View Complete Portfolio
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HistoGallery;
