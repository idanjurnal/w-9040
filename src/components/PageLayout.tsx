
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HistoNavbar from '@/components/HistoNavbar';
import HistoFooter from '@/components/HistoFooter';
// Removed ContactInfo and FloatingContactButton as they no longer exist

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
      {/* Removed ContactInfo and FloatingContactButton as part of cleanup */}
      <HistoFooter />
    </div>
  );
};

export default PageLayout;
