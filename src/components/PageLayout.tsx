import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HistoNavbar from '@/components/HistoNavbar';
import HistoFooter from '@/components/HistoFooter';
import ContactInfo from '@/components/ContactInfo';
import FloatingContactButton from '@/components/FloatingContactButton';
import HiddenAdminAccess from '@/components/HiddenAdminAccess';

type PageLayoutProps = {
  children: React.ReactNode;
  showContact?: boolean;
};

const PageLayout = ({ children, showContact = true }: PageLayoutProps) => {
  const location = useLocation();

  // Effect to scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-white w-full max-w-[100vw] overflow-x-hidden">
      <HistoNavbar />
      {children}
      {showContact && <ContactInfo />}
      <HistoFooter />
      {showContact && <FloatingContactButton />}
      <HiddenAdminAccess />
    </div>
  );
};

export default PageLayout;
