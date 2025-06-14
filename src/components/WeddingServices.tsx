
import { motion } from 'framer-motion';
import { Camera, Heart, Users, Gift } from 'lucide-react';

const WeddingServices = () => {
  const services = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Pre-Wedding Photography",
      description: "Intimate and romantic pre-wedding sessions to capture your love story before the big day. Perfect for save-the-dates and engagement announcements.",
      features: ["Multiple locations", "Outfit changes", "50+ edited photos", "Online gallery"]
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Wedding Day Coverage",
      description: "Complete wedding day documentation from getting ready to the last dance. Professional, unobtrusive coverage of your most important day.",
      features: ["8-12 hours coverage", "Two photographers", "500+ edited photos", "Highlight video"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Family & Group Photos",
      description: "Beautiful family portraits and group shots that will become treasured keepsakes for generations to come.",
      features: ["Formal portraits", "Candid moments", "Large group coordination", "Individual family shots"]
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Custom Packages",
      description: "Tailored photography packages to meet your specific needs and budget. Every love story is unique.",
      features: ["Flexible hours", "Custom locations", "Add-on services", "Payment plans available"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-stone-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-amber-900 mb-4">
            Our <span className="font-serif italic">Services</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-xl text-stone-700 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive photography services to capture every precious moment 
            of your journey together, from engagement to your wedding day and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-amber-100 rounded-full text-amber-700 mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-medium text-amber-900">{service.title}</h3>
                </div>
                <p className="text-stone-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-stone-700">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingServices;
