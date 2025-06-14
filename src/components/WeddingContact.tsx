
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook, Camera } from 'lucide-react';
import { useState } from 'react';

const WeddingContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    weddingDate: '',
    venue: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    <section id="contact" className="py-20 bg-gradient-to-b from-amber-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-amber-900 mb-4">
            Let's <span className="font-serif italic">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-xl text-stone-700 max-w-3xl mx-auto leading-relaxed">
            Ready to capture your love story? We'd love to hear about your special day 
            and discuss how we can make your vision come to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h3 className="text-2xl font-medium text-amber-900 mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-stone-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-stone-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-stone-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
                <input
                  type="date"
                  name="weddingDate"
                  placeholder="Wedding Date"
                  value={formData.weddingDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-stone-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
              <input
                type="text"
                name="venue"
                placeholder="Wedding Venue"
                value={formData.venue}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-stone-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your vision..."
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-stone-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 transform hover:scale-105"
              >
                Send Message
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
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-medium text-amber-900 mb-6">Get in touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="p-3 bg-amber-100 rounded-full text-amber-700 mr-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-stone-900">Phone</p>
                    <p className="text-stone-600">+62 812-3456-7890</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="p-3 bg-amber-100 rounded-full text-amber-700 mr-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-stone-900">Email</p>
                    <p className="text-stone-600">hello@eternalmoments.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="p-3 bg-amber-100 rounded-full text-amber-700 mr-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-stone-900">Location</p>
                    <p className="text-stone-600">Jakarta, Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-200">
                <h4 className="text-lg font-medium text-amber-900 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 bg-amber-100 rounded-full text-amber-700 hover:bg-amber-200 transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="p-3 bg-amber-100 rounded-full text-amber-700 hover:bg-amber-200 transition-colors">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="p-3 bg-amber-100 rounded-full text-amber-700 hover:bg-amber-200 transition-colors">
                    <Camera className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-amber-900 text-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-light mb-4">Investment</h3>
              <p className="text-amber-100 mb-4">
                Our photography packages start from IDR 15,000,000 for pre-wedding sessions 
                and IDR 25,000,000 for full wedding day coverage.
              </p>
              <p className="text-amber-200 text-sm">
                *Custom packages available. Contact us for detailed pricing.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WeddingContact;
