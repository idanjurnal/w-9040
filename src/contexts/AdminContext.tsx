
import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface AdminContextType {
  isAdminLoggedIn: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  loading: boolean;
  isSupabaseConfigured: boolean;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  
  // Check if Supabase is properly configured
  const isSupabaseConfigured = true; // Always true since we're using the integrated client

  useEffect(() => {
    // Check if admin is already logged in (stored in localStorage)
    const adminSession = localStorage.getItem('admin_session');
    if (adminSession) {
      try {
        const session = JSON.parse(adminSession);
        // Check if session is still valid (not expired)
        if (session.expires_at && new Date(session.expires_at) > new Date()) {
          setIsAdminLoggedIn(true);
        } else {
          localStorage.removeItem('admin_session');
        }
      } catch (error) {
        localStorage.removeItem('admin_session');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // Use Supabase RPC to verify password
      const { data, error } = await supabase.rpc('verify_admin_login', {
        input_email: email,
        input_password: password
      });

      if (error) {
        console.error('Login error:', error);
        return { success: false, error: 'Login gagal. Periksa email dan password Anda.' };
      }

      if (data) {
        // Create admin session
        const session = {
          email: email,
          expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // 24 hours
        };
        localStorage.setItem('admin_session', JSON.stringify(session));
        setIsAdminLoggedIn(true);
        return { success: true };
      } else {
        return { success: false, error: 'Email atau password salah.' };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'Terjadi kesalahan saat login.' };
    }
  };

  const logout = async () => {
    localStorage.removeItem('admin_session');
    setIsAdminLoggedIn(false);
  };

  return (
    <AdminContext.Provider value={{ 
      isAdminLoggedIn, 
      login, 
      logout, 
      loading, 
      isSupabaseConfigured 
    }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
