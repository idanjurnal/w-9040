
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const HistoContact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 bg-cream-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-sage-800 mb-4">
            Let's Create Magic Together
          </h2>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto">
            Ready to preserve your love story? Get in touch with us today
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-sage-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-sage-800">Phone</h3>
                <p className="text-sage-600">+62 812-3456-7890</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-sage-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-sage-800">Email</h3>
                <p className="text-sage-600">hello@histoproject.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-sage-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-sage-800">Location</h3>
                <p className="text-sage-600">Bandung, West Java</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 bg-sage-600 hover:bg-sage-700 text-cream-50 px-8 py-4 rounded-lg transition-colors duration-300 font-medium"
            >
              <MessageCircle className="w-6 h-6" />
              <span>WhatsApp Us</span>
            </a>
            
            <a
              href="https://instagram.com/histoproject"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 bg-beige-600 hover:bg-beige-700 text-cream-50 px-8 py-4 rounded-lg transition-colors duration-300 font-medium"
            >
              <Instagram className="w-6 h-6" />
              <span>Follow @histoproject</span>
            </a>
            
            <a
              href="mailto:hello@histoproject.com"
              className="flex items-center justify-center space-x-3 border-2 border-sage-600 text-sage-600 hover:bg-sage-600 hover:text-cream-50 px-8 py-4 rounded-lg transition-colors duration-300 font-medium"
            >
              <Mail className="w-6 h-6" />
              <span>Send Email</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HistoContact;
