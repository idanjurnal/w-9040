import { motion } from 'framer-motion';
import { Package } from '@/data/servicesData';

interface ServicePackageCardProps {
  pkg: Package;
  categoryName: string;
  pkgIndex: number;
}

const ServicePackageCard = ({ pkg, categoryName, pkgIndex }: ServicePackageCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: pkgIndex * 0.2 }}
      viewport={{ once: true }}
      className="group transition-all duration-300 hover:scale-[1.02]"
    >
      <div className="w-full text-right font-serif text-sm text-stone-500 mb-2">Pricelist 2025</div>
      <div className="border-t border-stone-300 mb-8"></div>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/20 backdrop-blur-sm border border-stone-200/50 p-6 rounded-lg mb-6">
            <div className="md:flex justify-between items-center mb-4">
                <div className="mb-4 md:mb-0">
                    <h4 className="text-2xl font-serif italic text-stone-800">{pkg.name}</h4>
                    <p className="text-stone-500 text-sm font-light">{categoryName}</p>
                </div>
                <p className="text-3xl font-light text-stone-800 text-right">{pkg.price}</p>
            </div>
            <div className="border-t border-stone-300 pt-4">
                <p className="italic text-stone-500 mb-4 font-light text-sm text-right">check the contents of the package</p>
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
      </div>
    </motion.div>
  );
};

export default ServicePackageCard;
