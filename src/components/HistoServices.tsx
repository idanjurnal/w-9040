
import { motion } from 'framer-motion';
import { Heart, Camera, Users, Gift, Film, Image } from 'lucide-react';

const HistoServices = () => {
  const services = [
    {
      icon: <Heart className="w-7 h-7" />,
      title: "Engagement / Sanjit",
      startPrice: "IDR 2,000,000",
      description: "Intimate moments captured with warmth and authenticity, perfect for celebrating your commitment.",
      packages: [
        { name: "Sequence I", price: "IDR 3,000,000", features: "Photo + Video documentation" },
        { name: "Sequence II", price: "IDR 2,000,000", features: "Photo documentation only" }
      ]
    },
    {
      icon: <Camera className="w-7 h-7" />,
      title: "Prewedding",
      startPrice: "IDR 2,000,000",
      description: "Romantic storytelling sessions that capture your unique love story before the big day.",
      packages: [
        { name: "Sequence I", price: "IDR 2,000,000", features: "Photo documentation" },
        { name: "Sequence II", price: "IDR 3,500,000", features: "Photo + Video + Prints" }
      ]
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Traditional Wedding",
      startPrice: "IDR 4,000,000",
      description: "Honoring cultural heritage with cinematic documentation of your traditional ceremonies.",
      packages: [
        { name: "Sequence I", price: "IDR 4,500,000", features: "Essential coverage" },
        { name: "Sequence II", price: "IDR 5,000,000", features: "Extended coverage" },
        { name: "Sequence III", price: "IDR 6,000,000", features: "Premium coverage" }
      ]
    },
    {
      icon: <Film className="w-7 h-7" />,
      title: "Wedding Day",
      startPrice: "IDR 4,000,000",
      description: "Complete documentation of your special day from dawn to dusk with cinematic storytelling.",
      packages: [
        { name: "Sequence I", price: "IDR 9,000,000", features: "Full day coverage" },
        { name: "Sequence II", price: "IDR 11,000,000", features: "Premium full coverage" }
      ]
    }
  ];

  const bundlePackages = [
    {
      icon: <Gift className="w-7 h-7" />,
      title: "Premium Bundle",
      price: "IDR 7,500,000",
      description: "Prewedding + Wedding Day with complete photo, video, and print documentation.",
      features: ["Photo documentation", "Video documentation", "Printed frames & albums", "Bonus portrait videos"]
    },
    {
      icon: <Image className="w-7 h-7" />,
      title: "Luxurious Bundle",
      price: "IDR 8,500,000",
      description: "The complete experience with full cinematic videos and premium prints.",
      features: ["Full cinematic video", "Complete print collection", "Free makeup & attire", "Social media content"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-cream-50 to-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-4">
            Our <span className="font-serif italic">Services</span>
          </h2>
          <div className="w-24 h-px bg-stone-600 mx-auto mb-6"></div>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed font-light">
            Every love story deserves to be told beautifully. We offer comprehensive packages 
            designed to capture every precious moment of your journey.
          </p>
        </motion.div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-sm border border-stone-200 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-stone-100 rounded-full text-stone-600 mr-4">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-light text-stone-800">{service.title}</h3>
                    <p className="text-stone-500 text-sm">Starting from {service.startPrice}</p>
                  </div>
                </div>
                <p className="text-stone-600 mb-6 leading-relaxed font-light">{service.description}</p>
                <div className="space-y-3">
                  {service.packages.map((pkg, pkgIndex) => (
                    <div key={pkgIndex} className="flex justify-between items-center py-2 border-b border-stone-100 last:border-b-0">
                      <div>
                        <span className="font-medium text-stone-700">{pkg.name}</span>
                        <p className="text-sm text-stone-500">{pkg.features}</p>
                      </div>
                      <span className="text-stone-600 font-light">{pkg.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bundle Packages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-light text-stone-800 mb-4">
            <span className="font-serif italic">Bundle</span> Packages
          </h3>
          <div className="w-16 h-px bg-stone-600 mx-auto mb-6"></div>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed font-light">
            Complete your love story with our thoughtfully curated bundle packages, 
            including complimentary makeup and attire for the full experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bundlePackages.map((bundle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-stone-800 text-cream-100 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-stone-700 rounded-full text-cream-200 mr-4">
                    {bundle.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-light text-cream-100">{bundle.title}</h4>
                    <p className="text-cream-300 text-lg font-light">{bundle.price}</p>
                  </div>
                </div>
                <p className="text-cream-200 mb-6 leading-relaxed font-light">{bundle.description}</p>
                <ul className="space-y-2">
                  {bundle.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-cream-200 font-light">
                      <div className="w-1.5 h-1.5 bg-cream-300 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-cream-100 rounded-lg border border-stone-200"
        >
          <p className="text-stone-700 text-lg font-light leading-relaxed">
            All packages include full-edited photos, cinematic videos, printed frames, albums, 
            and bonus short portrait videos for social media. 
            <span className="block mt-2 text-stone-600">
              Full package clients receive complimentary makeup & prewedding attire.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HistoServices;
