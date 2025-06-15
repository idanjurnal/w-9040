
import { motion } from 'framer-motion';
import { Instagram, Mail, Phone, MapPin, MessageCircle, Heart } from 'lucide-react';

const HistoContact = () => {
  const whatsappNumber = "+62 895-1829-7897";
  const instagramHandle = "histo.project";
  const email = "histoproject@gmail.com";

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in learning more about Histo Project's photography services. Could you please share more information?");
    window.open(`https://wa.me/${whatsappNumber.replace(/[-\s]/g, '')}?text=${message}`, '_blank');
  };

  const handleInstagramClick = () => {
    window.open(`https://www.instagram.com/histo.project?utm_source=ig_web_button_share_sheet&igsh=MWtlNmVwbzY3eGZuaw==`, '_blank');
  };

  const handleEmailClick = () => {
    window.open(`mailto:${email}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/60 via-teal-100/50 to-cyan-100/60"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-emerald-900 mb-4">
            Let's <span className="font-serif italic">Connect</span>
          </h2>
          <div className="w-24 h-px bg-emerald-700 mx-auto mb-6"></div>
          <p className="text-xl text-emerald-800 max-w-3xl mx-auto leading-relaxed font-light">
            Ready to preserve your love story? We'd love to hear about your special moments 
            and create something beautiful together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-lg shadow-sm border border-emerald-200/50 p-8">
              <div className="flex items-center mb-6">
                <Heart className="w-8 h-8 text-emerald-600 mr-3" />
                <h3 className="text-2xl font-medium text-emerald-900">Get in Touch</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="p-3 bg-emerald-100 rounded-full text-emerald-700 mr-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-emerald-900">Location</p>
                    <p className="text-emerald-700 font-light">Bandung, Indonesia</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="p-3 bg-emerald-100 rounded-full text-emerald-700 mr-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-emerald-900">Phone</p>
                    <p className="text-emerald-700 font-light">{whatsappNumber}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 bg-emerald-100 rounded-full text-emerald-700 mr-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-emerald-900">Email</p>
                    <p className="text-emerald-700 font-light">{email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-800 text-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-light mb-4 text-emerald-100">Investment Starting From</h3>
              <div className="space-y-2 text-emerald-200 font-light">
                <p>• Engagement Sessions: IDR 2,000,000</p>
                <p>• Prewedding Packages: IDR 2,000,000</p>
                <p>• Wedding Day Coverage: IDR 9,000,000</p>
                <p>• Complete Bundle: IDR 7,500,000</p>
              </div>
              <p className="text-emerald-300 text-sm mt-4">
                *Custom packages available to suit your needs
              </p>
            </div>
          </motion.div>

          {/* Contact Actions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-lg shadow-sm border border-emerald-200/50 p-8">
              <h3 className="text-2xl font-medium text-emerald-900 mb-6 text-center">Start Your Journey</h3>
              
              {/* WhatsApp Primary CTA */}
              <motion.button
                onClick={handleWhatsAppClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-4 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center mb-6 shadow-lg"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Chat on WhatsApp
              </motion.button>

              <div className="text-center mb-6">
                <p className="text-emerald-700 font-light">or connect with us on</p>
              </div>

              {/* Social Media Links */}
              <div className="grid grid-cols-2 gap-4">
                <motion.button
                  onClick={handleInstagramClick}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                >
                  <Instagram className="w-6 h-6 mr-2" />
                  Instagram
                </motion.button>

                <motion.button
                  onClick={handleEmailClick}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center p-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors duration-300"
                >
                  <Mail className="w-6 h-6 mr-2" />
                  Email
                </motion.button>
              </div>

              <div className="mt-8 p-6 bg-emerald-50 rounded-lg border border-emerald-200">
                <h4 className="text-lg font-medium text-emerald-900 mb-3 text-center">Why Choose Histo Project?</h4>
                <ul className="space-y-2 text-emerald-800 font-light text-sm">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    Honest, cinematic, and natural documentation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    Professional team with artistic vision
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    Complete packages with bonus services
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    Preserving memories that last a lifetime
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HistoContact;
