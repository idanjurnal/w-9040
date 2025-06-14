import { motion } from 'framer-motion';
import { Camera, Video, Heart, Gift } from 'lucide-react';

const HistoServices = () => {
  const packages = [
    {
      category: "Engagement / Sanjit",
      description: "Intimate moments that mark the beginning of your journey together",
      icon: Heart,
      packages: [
        {
          name: "Sequence I",
          description: "Photo + Video documentation",
          price: "IDR 3,000,000",
          features: ["Professional photography", "Cinematic videography", "Full edited photos", "Short video highlights"]
        },
        {
          name: "Sequence II", 
          description: "Photo documentation only",
          price: "IDR 2,000,000",
          features: ["Professional photography", "Full edited photos", "Online gallery", "Print-ready files"]
        }
      ]
    },
    {
      category: "Prewedding",
      description: "Capturing your love story before the big day",
      icon: Camera,
      packages: [
        {
          name: "Sequence I",
          description: "Photo documentation",
          price: "IDR 2,000,000", 
          features: ["Professional photography", "Multiple outfit changes", "Location shooting", "Full edited photos"]
        },
        {
          name: "Sequence II",
          description: "Complete package with prints",
          price: "IDR 3,500,000",
          features: ["Photo + Video", "Premium prints", "Custom album", "Online gallery", "Social media content"]
        }
      ]
    },
    {
      category: "Traditional Wedding",
      description: "Honoring cultural traditions with artistic documentation",
      icon: Gift,
      packages: [
        {
          name: "Sequence I",
          description: "Essential coverage",
          price: "IDR 4,500,000",
          features: ["6-hour coverage", "Traditional ceremony", "Family portraits", "Edited photos"]
        },
        {
          name: "Sequence II", 
          description: "Extended coverage",
          price: "IDR 5,000,000",
          features: ["8-hour coverage", "Video highlights", "Additional prints", "Custom album"]
        },
        {
          name: "Sequence III",
          description: "Premium documentation", 
          price: "IDR 6,000,000",
          features: ["Full day coverage", "Cinematic video", "Premium album", "Social media package"]
        }
      ]
    },
    {
      category: "Wedding Day",
      description: "Complete documentation of your special day",
      icon: Video,
      packages: [
        {
          name: "Sequence I",
          description: "Complete wedding coverage",
          price: "IDR 9,000,000",
          features: ["12-hour coverage", "Photo + Video", "Same day highlights", "Premium album", "Online gallery"]
        },
        {
          name: "Sequence II",
          description: "Luxury wedding documentation", 
          price: "IDR 11,000,000",
          features: ["Full day coverage", "Cinematic video", "Drone footage", "Premium prints", "Social media content", "Raw files"]
        }
      ]
    }
  ];

  const bundlePackages = [
    {
      name: "Premium Bundle",
      description: "Prewedding + Wedding Day package",
      price: "IDR 7,500,000",
      features: ["Photo documentation", "Video highlights", "Premium prints", "Custom album", "Free makeup consultation", "Free prewedding attire"]
    },
    {
      name: "Luxurious Bundle", 
      description: "Complete cinematic experience",
      price: "IDR 8,500,000",
      features: ["Full cinematic video", "Complete prints collection", "Premium album design", "Drone footage", "Same day editing", "Social media package", "Free makeup & styling", "Free prewedding attire"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-cream-50 to-stone-100">
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
            Every love story is unique. Choose the perfect package to preserve your most precious moments 
            with our honest, cinematic, and natural approach to wedding documentation.
          </p>
        </motion.div>

        {/* Service Categories */}
        <div className="space-y-16">
          {packages.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-sm border border-stone-200 overflow-hidden"
            >
              <div className="p-8 border-b border-stone-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-stone-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-light text-stone-800">{category.category}</h3>
                    <p className="text-stone-600 font-light">{category.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
                {category.packages.map((pkg, pkgIndex) => (
                  <div key={pkgIndex} className="border border-stone-200 rounded-lg p-6 hover:shadow-md transition-all duration-300">
                    <h4 className="text-xl font-medium text-stone-800 mb-2">{pkg.name}</h4>
                    <p className="text-stone-600 text-sm mb-4 font-light">{pkg.description}</p>
                    <p className="text-2xl font-light text-stone-800 mb-4">{pkg.price}</p>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-stone-600 flex items-center font-light">
                          <div className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
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
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-light text-stone-800 mb-4">
              Bundle <span className="font-serif italic">Packages</span>
            </h3>
            <div className="w-20 h-px bg-stone-600 mx-auto mb-6"></div>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto font-light">
              Complete packages that combine multiple services for the best value and experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bundlePackages.map((bundle, index) => (
              <div key={index} className="bg-gradient-to-br from-stone-50 to-cream-50 border border-stone-200 rounded-lg p-8 hover:shadow-lg transition-all duration-300">
                <h4 className="text-2xl font-medium text-stone-800 mb-2">{bundle.name}</h4>
                <p className="text-stone-600 mb-4 font-light">{bundle.description}</p>
                <p className="text-3xl font-light text-stone-800 mb-6">{bundle.price}</p>
                <ul className="space-y-3">
                  {bundle.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-stone-600 flex items-center font-light">
                      <div className="w-2 h-2 bg-stone-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-stone-50 rounded-lg p-8 border border-stone-200">
            <h4 className="text-xl font-medium text-stone-800 mb-3">Special Bonus</h4>
            <p className="text-stone-600 font-light">
              Clients who choose our full packages receive complimentary makeup consultation and prewedding attire 
              to make your experience even more complete and comfortable.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HistoServices;
