
import React, { useState } from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';
import { Settings } from 'lucide-react';

const HiddenAdminAccess = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const { isAdminLoggedIn } = useAdmin();

  const handleAdminClick = () => {
    if (isAdminLoggedIn) {
      setShowDashboard(true);
    } else {
      setShowLogin(true);
    }
  };

  return (
    <>
      {/* Hidden Admin Button - hanya terlihat pada hover di pojok kiri bawah */}
      <div className="fixed bottom-4 left-4 z-40 group">
        <button
          onClick={handleAdminClick}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 bg-stone-800 text-white rounded-full hover:bg-stone-700"
          title="Admin Access"
        >
          <Settings size={16} />
        </button>
      </div>

      {/* Admin Login Modal */}
      {showLogin && !isAdminLoggedIn && (
        <AdminLogin onClose={() => setShowLogin(false)} />
      )}

      {/* Admin Dashboard Modal */}
      {showDashboard && isAdminLoggedIn && (
        <AdminDashboard onClose={() => setShowDashboard(false)} />
      )}
    </>
  );
};

export default HiddenAdminAccess;
