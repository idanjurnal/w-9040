
import PageLayout from '@/components/PageLayout';
import WeddingHero from '@/components/WeddingHero';
import WeddingServices from '@/components/WeddingServices';
import WeddingGallery from '@/components/WeddingGallery';
import WeddingTestimonials from '@/components/WeddingTestimonials';
import WeddingContact from '@/components/WeddingContact';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <PageLayout showContact={false}>
      <SEO 
        title="Eternal Moments - Pre-Wedding & Wedding Photography" 
        description="Capture your most precious moments with our professional pre-wedding and wedding day photography services. Creating timeless memories with earth-toned elegance."
        imageUrl="/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
        keywords={['wedding photography', 'pre-wedding photography', 'wedding photographer', 'bridal photography', 'engagement photos', 'wedding day photos']}
      />
      <WeddingHero />
      <WeddingServices />
      <WeddingGallery />
      <WeddingTestimonials />
      <WeddingContact />
    </PageLayout>
  );
};

export default Index;
