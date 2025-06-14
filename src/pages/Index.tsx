
import PageLayout from '@/components/PageLayout';
import HistoHero from '@/components/HistoHero';
import HistoServices from '@/components/HistoServices';
import HistoGallery from '@/components/HistoGallery';
import HistoTestimonials from '@/components/HistoTestimonials';
import HistoContact from '@/components/HistoContact';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <PageLayout showContact={false}>
      <SEO 
        title="Histo Project - Wedding Photography & Videography Bandung" 
        description="Preserving love stories with honest, cinematic, and natural documentation. Professional wedding photography and videography services in Bandung with earth-toned elegance."
        imageUrl="/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
        keywords={['wedding photography bandung', 'wedding videography bandung', 'prewedding bandung', 'histo project', 'engagement photography', 'traditional wedding documentation']}
      />
      <HistoHero />
      <HistoServices />
      <HistoGallery />
      <HistoTestimonials />
      <HistoContact />
    </PageLayout>
  );
};

export default Index;
