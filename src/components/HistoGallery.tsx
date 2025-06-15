import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ScrollQuoteReveal from './ScrollQuoteReveal';

const HistoGallery = () => {
  // Updated gallery images with new traditional wedding photo
  const galleryImages = [{
    url: "/lovable-uploads/20218d11-3345-48b5-815e-def6b465fc76.png",
    // Couple + anak-anak
    alt: "Engagement Session (anak-anak)",
    category: "Engagement"
  }, {
    url: "/lovable-uploads/297db747-1773-454e-9067-fd550b11ee79.png",
    // Couple minum kopi + detail cappuccino
    alt: "Coffee Engagement Details",
    category: "Prewedding"
  }, {
    url: "/lovable-uploads/09571b0f-fe63-43fd-9373-fc827bff8a2c.png",
    // New traditional wedding image with couple in traditional attire
    alt: "Traditional wedding couple",
    category: "Traditional"
  }, {
    url: "/lovable-uploads/48ce83d9-42b7-4d95-9cbb-b918e3b63efc.png",
    // Couple in field of yellow flowers
    alt: "Prewedding field flowers",
    category: "Prewedding"
  }];
  return <section id="gallery" className="py-20 bg-gradient-to-b from-stone-100 to-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="text-center mb-16">
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
            {galleryImages.map((image, index) => <CarouselItem key={index}>
                <motion.div className="group relative overflow-hidden rounded-xl shadow-md aspect-[4/5] bg-white hover:scale-105 hover:shadow-amber-100/70 transition duration-300" initial={{
              opacity: 0,
              scale: 0.95
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.6
            }} viewport={{
              once: true
            }}>
                  <img src={image.url} alt={image.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>)}
          </CarouselContent>
          <div className="flex justify-center mt-6 space-x-2">
            <CarouselPrevious className="bg-stone-200 hover:bg-stone-300 border-stone-300 text-stone-700" />
            <CarouselNext className="bg-stone-200 hover:bg-stone-300 border-stone-300 text-stone-700" />
          </div>
        </Carousel>
        {/* Tambahkan Scroll-triggered Quote Reveal */}
        <div className="my-16">
          <ScrollQuoteReveal quote="Moments may fade, but the story stays—hidden in the light, discovered in your smile." author="Histo Project" />
        </div>
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.3
      }} viewport={{
        once: true
      }} className="text-center mt-8">
          <button className="px-10 py-4 border border-stone-600 text-stone-700 hover:bg-stone-600 hover:text-cream-100 font-light rounded-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            View Complete Portfolio
          </button>
        </motion.div>
      </div>
    </section>;
};

export default HistoGallery;
