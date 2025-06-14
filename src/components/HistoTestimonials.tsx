import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

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
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-cream-50 to-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-4">
            Stories from Our <span className="font-serif italic">Couples</span>
          </h2>
          <div className="w-24 h-px bg-stone-600 mx-auto mb-6"></div>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed font-light">
            The greatest joy comes from seeing our couples relive their most precious moments 
            through the memories we've preserved together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-sm border border-stone-200 overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-8">
                <div className="text-stone-600 mb-4">
                  <Quote className="w-7 h-7" />
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-stone-500 fill-current" />
                  ))}
                </div>

                <p className="text-stone-600 italic mb-6 leading-relaxed font-light">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-medium text-stone-800">{testimonial.name}</h4>
                    <p className="text-sm text-stone-500 font-light">{testimonial.wedding}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistoTestimonials;
