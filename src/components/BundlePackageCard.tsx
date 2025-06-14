
import { BundlePackage } from '@/data/servicesData';

interface BundlePackageCardProps {
  bundle: BundlePackage;
}

const BundlePackageCard = ({ bundle }: BundlePackageCardProps) => {
  const isLuxurious = bundle.title === "LUXURIOUS";
  
  return (
    <div className="group transition-all duration-300 hover:scale-[1.02] p-4">
      <div className="text-center mb-6">
          <h4 className="text-4xl lg:text-5xl font-serif text-stone-700 tracking-widest uppercase">{bundle.title}</h4>
      </div>
      
      { bundle.subPackages ? (
        <div className="grid md:grid-cols-5 gap-8 lg:gap-12 items-start">
          <div className="md:col-span-2 relative">
              {isLuxurious ? (
                <div className="relative">
                  <img src={bundle.image} alt={`${bundle.name} main`} className="rounded-r-full shadow-xl w-full h-auto object-cover aspect-[3/4]"/>
                  <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt={`${bundle.name} additional`} className="absolute bottom-0 right-0 rounded-l-full shadow-xl w-1/2 h-auto object-cover aspect-[4/3] transform translate-x-4 translate-y-4"/>
                </div>
              ) : (
                <img src={bundle.image} alt={bundle.name} className="rounded-r-full shadow-xl w-full h-auto object-cover aspect-[3/4]"/>
              )}
              <div className="bg-white/20 backdrop-blur-sm border border-stone-200/50 p-4 rounded-lg mt-8 flex justify-between items-center">
                  <div>
                      <h5 className="text-lg font-serif italic text-stone-800">{bundle.name}</h5>
                      <p className="text-stone-500 text-sm font-light">Bundling Package</p>
                  </div>
                  <p className="text-2xl font-light text-stone-800">{bundle.price}</p>
              </div>
          </div>
          <div className="md:col-span-3 pt-4">
              {bundle.subPackages.map((subPkg, subIndex) => (
                <div key={subIndex} className="mb-8">
                  <h5 className="text-xl font-serif text-stone-700 border-b border-stone-300 pb-2 mb-4">{subPkg.title}</h5>
                  <ul className="space-y-2">
                    {subPkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-stone-600 font-light flex">
                        <span className="text-stone-400 mr-2">&ndash;</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center max-w-sm mx-auto border-t border-b border-stone-300 py-2 mt-4 mb-8">
              <p className="text-stone-600">{bundle.name}</p>
              <p className="text-2xl text-stone-800">{bundle.price}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {bundle.images && bundle.images.map((img, imgIndex) => (
                <img key={imgIndex} src={img} alt={`${bundle.name} collage ${imgIndex + 1}`} className="rounded-lg shadow-lg w-full h-auto object-cover aspect-square"/>
              ))}
          </div>
          <ul className="columns-1 sm:columns-2 md:columns-3 gap-x-8 space-y-2 text-center">
              { bundle.features && bundle.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="text-sm text-stone-600 font-light break-inside-avoid">
                    {feature}
                </li>
              ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default BundlePackageCard;
