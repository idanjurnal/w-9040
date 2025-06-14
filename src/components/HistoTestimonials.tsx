
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
    <section id="testimonials" className="py-20 relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/06849598-4d8a-4553-a9fc-eb2a862f976f.png"
          alt="Elegant botanical pattern background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/85 via-orange-50/75 to-red-50/85"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-amber-900 mb-4">
            Stories from Our <span className="font-serif italic">Couples</span>
          </h2>
          <div className="w-24 h-px bg-amber-700 mx-auto mb-6"></div>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed font-light">
            The greatest joy comes from seeing our couples relive their most precious moments 
            through the memories we've preserved together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white/70 backdrop-blur-sm rounded-lg shadow-sm border border-amber-200/50 overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 mx-2">
                    <div className="p-6">
                      <div className="text-amber-600 mb-4">
                        <Quote className="w-6 h-6" />
                      </div>
                      
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
                        ))}
                      </div>

                      <p className="text-amber-900 italic mb-6 leading-relaxed font-light text-sm">
                        "{testimonial.text}"
                      </p>

                      <div className="flex items-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-10 h-10 rounded-full object-cover mr-3"
                        />
                        <div>
                          <h4 className="font-medium text-amber-900 text-sm">{testimonial.name}</h4>
                          <p className="text-xs text-amber-700 font-light">{testimonial.wedding}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 space-x-2">
              <CarouselPrevious className="bg-amber-100 hover:bg-amber-200 border-amber-300 text-amber-800" />
              <CarouselNext className="bg-amber-100 hover:bg-amber-200 border-amber-300 text-amber-800" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default HistoTestimonials;
