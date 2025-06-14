
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
          description: "Photo documentation",
          price: "IDR 2,000,000",
          features: ["1 Photographer", "1 Assistant", "5 Hours Photo Session", "Unlimited Shoots", "Free Edit 100+ Photos", "All Files via Google Drive"],
          image: "https://images.unsplash.com/photo-1608914873398-3a211fc5e219?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Sequence II", 
          description: "Photo + Video documentation",
          price: "IDR 3,000,000",
          features: ["1 Photographer", "1 Videographer", "1 Assistant", "5 Hours Photo Session", "Unlimited Shoots", "Cinematic Video 1-3 Minutes", "Free Edit 100+ Photos", "All Files via Google Drive"],
          image: "https://images.unsplash.com/photo-1595393498310-2d826a79a07a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
          features: ["1 Photographer", "1 Assistant", "4 Hours Photo Session", "Unlimited Shoots", "Free Edit 150+ Photos Selected by Editor"],
          image: "https://images.unsplash.com/photo-1531818357353-e5b1a5d063a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Sequence II",
          description: "Complete package with prints",
          price: "IDR 3,500,000",
          features: ["1 Photographer", "1 Videographer", "1 Assistant", "6 Hours Photo Session", "Unlimited Shoots", "Cinematic Video 1-2 Minutes", "1 Printed Photo + Frame 16R", "5 Printed Photo + Frame 5R", "Free Potrait video for medsos 15-30 Second", "Free Edit 150+ Photos Selected by Editor"],
          image: "https://images.unsplash.com/photo-1520338258442-bd94a3506085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
          features: ["1 Photographer", "1 Cinematic Videographer", "1 Assistant", "8 Hours Photo Session", "Unlimited Shoots", "Cinematic Video 1-3 Minutes", "1 Magazine Album", "1 Printed Photo + Frame 16R", "Files via Google Drive", "Free Edit 300+ Photos Selected by Editor"],
          image: "https://images.unsplash.com/photo-1629865181126-17e4a13f63e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Sequence II", 
          description: "Extended coverage",
          price: "IDR 5,000,000",
          features: ["1 Photographer", "1 Candid Photographer", "1 Cinematic Videographer", "1 Assistant", "8 Hours Photo Session", "Unlimited Shoots", "Cinematic Video 1-3 Minutes", "1 Magazine Album", "1 Printed Photo + Frame 16R", "Free Flashdisk 32 GB", "Free Potrait Video for Social Media 15-30 Second", "Free Edit 300+ Photos Selected by Editor"],
          image: "https://images.unsplash.com/photo-1616134259837-142274474773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Sequence III",
          description: "Premium documentation", 
          price: "IDR 6,000,000",
          features: ["1 Photographer", "1 Candid Photographer", "2 Videographer", "1 Assistant", "8 Hours Photo Session", "Unlimited Shoots", "Clip Video 1-3 Minutes", "Full Video 7-10 minutes", "1 Magazine Album", "1 Printed Photo + Frame 16R", "Free Flashdisk 32 GB", "Free Potrait Video for Social Media 15-30 Second", "Free Edit 300+ Photos Selected by Editor"],
          image: "https://images.unsplash.com/photo-1611175657329-75382181339b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
          features: ["1 Photographer", "1 Candid Photographer", "1 Videographer", "1 Assistant", "Unlimited Shoots", "Clip Video 2-3 Minutes", "1 Album Magazine", "Free Flashdisk 16 GB", "Free Potrait Video for Social Media 15-30 Second", "Free Edit 300+ Photos Selected by Editor"],
          image: "https://images.unsplash.com/photo-1597855510719-21ab6d302912?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Sequence II",
          description: "Luxury wedding documentation", 
          price: "IDR 11,000,000",
          features: ["Full day coverage", "Cinematic video", "Drone footage", "Premium prints", "Social media content", "Raw files"],
          image: "https://images.unsplash.com/photo-1522075469751-3847961dcc6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
      ]
    }
  ];

  const bundlePackages = [
    {
      name: "Premium Bundle",
      title: "PREMIUM",
      description: "Prewedding + Wedding Day package",
      price: "IDR 7,500,000",
      features: ["Photo documentation", "Video highlights", "Premium prints", "Custom album", "Free makeup consultation", "Free prewedding attire"],
      images: [
        "https://images.unsplash.com/photo-1520854221256-17452cc3da25?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1523438943918-3c9592409b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1629865181126-17e4a13f63e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ]
    },
    {
      name: "Luxurious Bundle", 
      title: "LUXURIOUS",
      description: "Complete cinematic experience",
      price: "IDR 8,500,000",
      features: ["Full cinematic video", "Complete prints collection", "Premium album design", "Drone footage", "Same day editing", "Social media package", "Free makeup & styling", "Free prewedding attire"],
      images: [
        "https://images.unsplash.com/photo-1532702824322-75c102758826?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1511285560921-50b39f4f2f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1616041158641-7a6305a46835?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-cream-50 via-olive-100 to-cream-50">
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
        <div className="space-y-24">
          {packages.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-light text-stone-800">{category.category}</h3>
                <p className="text-stone-600 font-light mt-2 max-w-2xl mx-auto">{category.description}</p>
                <div className="w-20 h-px bg-stone-400 mx-auto mt-4"></div>
              </div>
              
              <div className="space-y-16">
                {category.packages.map((pkg, pkgIndex) => (
                  <motion.div
                    key={pkgIndex}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: pkgIndex * 0.2 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="grid md:grid-cols-5 gap-8 lg:gap-12 items-center transition-all duration-300 group-hover:scale-[1.02]">
                      <div className={`md:col-span-2 ${pkgIndex % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                        <img src={pkg.image} alt={pkg.name} className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[4/5]"/>
                      </div>
                      <div className={`md:col-span-3 ${pkgIndex % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                        <div className="border-t border-b border-stone-300 py-4 mb-4 flex justify-between items-center">
                            <div>
                                <h4 className="text-2xl font-serif italic text-stone-700">{pkg.name}</h4>
                                <p className="text-stone-500 text-sm font-light">{category.category}</p>
                            </div>
                            <p className="text-3xl font-light text-stone-800">{pkg.price}</p>
                        </div>
                        <p className="italic text-stone-500 mb-6 font-light text-sm">check the contents of the package</p>
                        <ul className="columns-1 sm:columns-2 gap-x-8 space-y-2">
                          {pkg.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-sm text-stone-600 flex font-light break-inside-avoid">
                              <span className="text-stone-400 mr-2">&ndash;</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
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
          className="mt-24"
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

          <div className="space-y-20">
            {bundlePackages.map((bundle, index) => (
              <div key={index} className="group transition-all duration-300 hover:scale-[1.02]">
                <div className="text-center mb-6">
                    <h4 className="text-4xl lg:text-5xl font-serif text-stone-700 tracking-widest uppercase">{bundle.title}</h4>
                    <div className="flex justify-between items-center max-w-sm mx-auto border-t border-b border-stone-300 py-2 mt-4">
                        <p className="text-stone-600">{bundle.name}</p>
                        <p className="text-2xl text-stone-800">{bundle.price}</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    {bundle.images.map((img, imgIndex) => (
                    <img key={imgIndex} src={img} alt={`${bundle.name} collage ${imgIndex + 1}`} className="rounded-lg shadow-lg w-full h-auto object-cover aspect-square"/>
                    ))}
                </div>
                <ul className="columns-1 sm:columns-2 md:columns-3 gap-x-8 space-y-2 text-center">
                    {bundle.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-stone-600 font-light break-inside-avoid">
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
          className="text-center mt-24"
        >
          <div className="bg-white/50 rounded-lg p-8 border border-stone-200 backdrop-blur-sm">
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
