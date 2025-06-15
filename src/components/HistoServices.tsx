
import { motion } from 'framer-motion';
import { packages, bundlePackages } from '@/data/servicesData';
import ServiceCategory from './ServiceCategory';
import BundlePackageCard from './BundlePackageCard';

const HistoServices = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50">
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
          <div className="w-24 h-px bg-amber-700 mx-auto mb-6"></div>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed font-light">
            Every love story is unique. Choose the perfect package to preserve your most precious moments 
            with our honest, cinematic, and natural approach to wedding documentation.
          </p>
        </motion.div>

        {/* Service Categories */}
        <div className="space-y-24">
          {packages.map((category, categoryIndex) => (
            <div key={category.category} className={`
              ${categoryIndex % 4 === 0 ? 'bg-gradient-to-r from-red-50 to-orange-50' : ''}
              ${categoryIndex % 4 === 1 ? 'bg-gradient-to-r from-amber-50 to-yellow-50' : ''}
              ${categoryIndex % 4 === 2 ? 'bg-gradient-to-r from-emerald-50 to-teal-50' : ''}
              ${categoryIndex % 4 === 3 ? 'bg-gradient-to-r from-blue-50 to-indigo-50' : ''}
              rounded-2xl p-8 mb-12
            `}>
              <ServiceCategory category={category} categoryIndex={categoryIndex} sectionImage={category.sectionImage} />
            </div>
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
              <div key={bundle.name} className={`
                ${index % 2 === 0 ? 'bg-gradient-to-br from-rose-50 via-pink-50 to-red-50' : 'bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50'}
                rounded-2xl p-8
              `}>
                <BundlePackageCard bundle={bundle} />
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
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8 border border-green-200 backdrop-blur-sm">
            <h4 className="text-xl font-medium text-green-800 mb-3">Special Bonus</h4>
            <p className="text-green-700 font-light">
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
