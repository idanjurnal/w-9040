
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Camera, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const HistoContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    weddingDate: '',
    venue: '',
    serviceType: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-stone-100 to-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-4">
            Let's Preserve Your <span className="font-serif italic">Story</span>
          </h2>
          <div className="w-24 h-px bg-stone-600 mx-auto mb-6"></div>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed font-light">
            Ready to begin your journey with us? Share your story and let's create 
            something beautiful together. We're here to understand, support, and preserve your most precious moments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-sm border border-stone-200 p-8"
          >
            <h3 className="text-2xl font-light text-stone-800 mb-6">Tell us your story</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:ring-1 focus:ring-stone-500 focus:border-stone-500 font-light"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:ring-1 focus:ring-stone-500 focus:border-stone-500 font-light"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:ring-1 focus:ring-stone-500 focus:border-stone-500 font-light"
                />
                <input
                  type="date"
                  name="weddingDate"
                  placeholder="Wedding Date"
                  value={formData.weddingDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:ring-1 focus:ring-stone-500 focus:border-stone-500 font-light"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="venue"
                  placeholder="Wedding Venue"
                  value={formData.venue}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:ring-1 focus:ring-stone-500 focus:border-stone-500 font-light"
                />
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:ring-1 focus:ring-stone-500 focus:border-stone-500 font-light"
                >
                  <option value="">Select Service</option>
                  <option value="engagement">Engagement / Sanjit</option>
                  <option value="prewedding">Prewedding</option>
                  <option value="traditional">Traditional Wedding</option>
                  <option value="wedding-day">Wedding Day</option>
                  <option value="bundle-premium">Bundle - Premium</option>
                  <option value="bundle-luxurious">Bundle - Luxurious</option>
                </select>
              </div>
              <textarea
                name="message"
                rows={4}
                placeholder="Share your vision and story with us..."
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:ring-1 focus:ring-stone-500 focus:border-stone-500 resize-none font-light"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-stone-700 hover:bg-stone-600 text-cream-100 font-light py-3 px-6 rounded-sm transition-colors duration-300 transform hover:scale-105"
              >
                Begin Our Journey Together
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-8">
              <h3 className="text-2xl font-light text-stone-800 mb-6">Connect with us</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="p-3 bg-stone-100 rounded-full text-stone-600 mr-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-light text-stone-800">WhatsApp</p>
                    <p className="text-stone-600 font-light">+62 812-3456-7890</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="p-3 bg-stone-100 rounded-full text-stone-600 mr-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-light text-stone-800">Email</p>
                    <p className="text-stone-600 font-light">hello@histoproject.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="p-3 bg-stone-100 rounded-full text-stone-600 mr-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-light text-stone-800">Based in</p>
                    <p className="text-stone-600 font-light">Bandung, West Java</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-200">
                <h4 className="text-lg font-light text-stone-800 mb-4">Follow our stories</h4>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 bg-stone-100 rounded-full text-stone-600 hover:bg-stone-200 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-3 bg-stone-100 rounded-full text-stone-600 hover:bg-stone-200 transition-colors">
                    <Camera className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-3 bg-stone-100 rounded-full text-stone-600 hover:bg-stone-200 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-stone-800 text-cream-100 rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-light mb-4">Investment Range</h3>
              <div className="space-y-3 text-cream-200 font-light">
                <p>• Engagement/Sanjit: IDR 2,000,000 - 3,000,000</p>
                <p>• Prewedding: IDR 2,000,000 - 3,500,000</p>
                <p>• Traditional Wedding: IDR 4,500,000 - 6,000,000</p>
                <p>• Wedding Day: IDR 9,000,000 - 11,000,000</p>
                <p>• Bundle Packages: IDR 7,500,000 - 8,500,000</p>
              </div>
              <p className="text-cream-300 text-sm mt-4 font-light">
                *All packages include edited photos, videos, prints & albums. 
                Bundle packages include complimentary makeup & attire.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HistoContact;
