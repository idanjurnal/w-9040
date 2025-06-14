
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const WeddingTestimonials = () => {
  const testimonials = [
    {
      name: "Sarah & Michael",
      wedding: "Autumn Garden Wedding",
      text: "The photos are absolutely breathtaking! They captured every emotion and detail perfectly. We couldn't be happier with our wedding memories.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1522075469751-3847961dcc6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Amanda & David",
      wedding: "Beach Wedding Ceremony",
      text: "Professional, creative, and so easy to work with. The pre-wedding session helped us feel comfortable, and the wedding day photos are magical.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1520338258442-bd94a3506085?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Lisa & James",
      wedding: "Rustic Barn Wedding",
      text: "They have an incredible eye for detail and emotion. Every photo tells our story beautifully. We treasure these memories forever.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-stone-100 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-amber-900 mb-4">
            What Our <span className="font-serif italic">Couples</span> Say
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-xl text-stone-700 max-w-3xl mx-auto leading-relaxed">
            The greatest reward is seeing the joy and satisfaction of our couples 
            when they receive their precious memories captured in time.
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
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="p-8">
                <div className="text-amber-600 mb-4">
                  <Quote className="w-8 h-8" />
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                  ))}
                </div>

                <p className="text-stone-600 italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-medium text-amber-900">{testimonial.name}</h4>
                    <p className="text-sm text-stone-500">{testimonial.wedding}</p>
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

export default WeddingTestimonials;
