
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah & David",
    text: "Histo Project captured our wedding day perfectly. Every moment felt natural and beautiful. The earth-toned editing style made our photos timeless.",
    rating: 5,
    location: "Bandung"
  },
  {
    name: "Maya & Rizki",
    text: "From our prewedding to the wedding day, the team was professional and made us feel comfortable. The results exceeded our expectations.",
    rating: 5,
    location: "Jakarta"
  },
  {
    name: "Lila & Ahmad",
    text: "The honest and natural approach to photography made our special day even more memorable. Highly recommend for any couple!",
    rating: 5,
    location: "Yogyakarta"
  }
];

const HistoTestimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-beige-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-sage-800 mb-4">
            Stories from Our Couples
          </h2>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto">
            Real experiences from couples who trusted us with their most precious moments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-cream-50 p-8 rounded-lg hover:bg-cream-100 transition-colors duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-sage-500 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-sage-700 mb-6 font-light leading-relaxed">
                "{testimonial.text}"
              </blockquote>
              
              <div className="border-t border-sage-200 pt-4">
                <p className="font-medium text-sage-800">{testimonial.name}</p>
                <p className="text-sm text-sage-600">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistoTestimonials;
