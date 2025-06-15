import { motion } from 'framer-motion';
import ServicePackageCard from './ServicePackageCard';
import { ServiceCategoryData } from '@/data/servicesData';

interface ServiceCategoryProps {
  category: ServiceCategoryData;
  categoryIndex: number;
  sectionImage?: string;
}

const ServiceCategory = ({ category, categoryIndex, sectionImage }: ServiceCategoryProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
      viewport={{ once: true }}
      className="group transition-all duration-400 hover:scale-[1.008] hover:shadow-lg hover:bg-cream-200/10 rounded-xl"
    >
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-light text-stone-800">{category.category}</h3>
        <p className="text-stone-600 font-light mt-2 max-w-2xl mx-auto">{category.description}</p>
        <div className="w-20 h-px bg-stone-400 mx-auto mt-4"></div>
      </div>
      {sectionImage && (
        <div className="mb-8 flex justify-center transition-transform duration-400 hover:scale-105">
          <img
            src={sectionImage}
            alt={category.category}
            className="rounded-lg shadow-xl w-full max-w-3xl h-auto object-cover aspect-[16/9] hover:shadow-[0_8px_32px_0_rgba(216,159,84,0.12)]"
          />
        </div>
      )}
      <div className="space-y-20">
        {category.packages.map((pkg, pkgIndex) => (
          <ServicePackageCard key={pkg.name} pkg={pkg} categoryName={category.category} pkgIndex={pkgIndex} />
        ))}
      </div>
    </motion.div>
  );
};

export default ServiceCategory;
