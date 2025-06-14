
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HistoTestimonials = () => {
  const testimonials = [
    {
      name: "Dini & Arif",
      wedding: "Traditional Sundanese Wedding, Bandung",
      text: "Histo Project tidak hanya mendokumentasi, tapi benar-benar merasakan momen kami. Setiap foto dan video menangkap emosi yang sesungguhnya. Hasilnya sangat natural dan cinematic.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1522075469751-3847961dcc6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Sari & Budi",
      wedding: "Prewedding Session, Lembang",
      text: "Tim yang sangat profesional dan hangat. Mereka membuat kami merasa nyaman sepanjang sesi. Cerita cinta kami tergambar sempurna dalam setiap frame yang mereka ciptakan.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1520338258442-bd94a3506085?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Maya & Rian",
      wedding: "Bundle Package - Complete Wedding",
      text: "Dari prewedding hingga hari H, Histo Project konsisten memberikan yang terbaik. Bonus makeup dan attire-nya juga sangat membantu. Truly a space to preserve memories!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Rina & Anton",
      wedding: "Traditional Javanese Wedding, Yogyakarta",
      text: "Dokumentasi yang luar biasa! Setiap momen sakral tertangkap dengan sempurna. Tim Histo sangat mengerti budaya dan tradisi kami.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1531618242645-aa549cea89fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dewi & Fajar",
      wedding: "Modern Minimalist Wedding, Jakarta",
      text: "Konsep minimalis kami dipahami dengan baik. Hasil foto dan video sangat elegan dan sesuai dengan visi kami. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50">
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/06849598-4d8a-4553-a9fc-eb2a862f976f.png"
          alt="Elegant botanical pattern background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-50/85 via-amber-50/75 to-orange-50/85"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-4">
            Our <span className="font-serif italic">Stories</span>
          </h2>
          <div className="w-24 h-px bg-stone-700 mx-auto mb-6"></div>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed font-light">
            Every couple has a unique story. Here are some precious moments 
            we've had the honor to preserve.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="bg-white/70 backdrop-blur-sm rounded-lg shadow-sm border border-stone-200/50 overflow-hidden mx-4 p-8">
                    <div className="text-center">
                      <div className="text-stone-600 mb-6 flex justify-center">
                        <Quote className="w-8 h-8" />
                      </div>
                      
                      <div className="flex justify-center items-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-amber-500 fill-current mx-1" />
                        ))}
                      </div>

                      <p className="text-stone-700 italic mb-8 leading-relaxed font-light text-lg max-w-2xl mx-auto">
                        "{testimonial.text}"
                      </p>

                      <div className="flex items-center justify-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div className="text-left">
                          <h4 className="font-medium text-stone-800 text-lg">{testimonial.name}</h4>
                          <p className="text-stone-600 font-light">{testimonial.wedding}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 space-x-2">
              <CarouselPrevious className="bg-stone-100 hover:bg-stone-200 border-stone-300 text-stone-800" />
              <CarouselNext className="bg-stone-100 hover:bg-stone-200 border-stone-300 text-stone-800" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default HistoTestimonials;
