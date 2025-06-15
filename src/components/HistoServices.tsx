
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Camera, Video, Heart, Users } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: "Pre-Wedding Photography",
    description: "Capture your love story before the big day with romantic and intimate pre-wedding sessions.",
    price: "Starting from 2.5jt"
  },
  {
    icon: Camera,
    title: "Wedding Photography",
    description: "Comprehensive wedding day coverage with honest, natural, and cinematic documentation.",
    price: "Starting from 5jt"
  },
  {
    icon: Video,
    title: "Wedding Videography",
    description: "Cinematic wedding films that tell your unique love story with earth-toned elegance.",
    price: "Starting from 3.5jt"
  },
  {
    icon: Users,
    title: "Complete Wedding Package",
    description: "Full day coverage including photography, videography, and special moments documentation.",
    price: "Starting from 8jt"
  }
];

const HistoServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 bg-cream-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-sage-800 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto">
            Professional wedding documentation with honest, cinematic, and natural approach
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-beige-50 p-6 rounded-lg text-center hover:bg-beige-100 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-8 h-8 text-sage-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-sage-800 mb-3">
                {service.title}
              </h3>
              
              <p className="text-sage-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <p className="text-sage-700 font-medium">
                {service.price}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistoServices;
