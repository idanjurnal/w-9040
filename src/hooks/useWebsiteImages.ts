
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

interface WebsiteImage {
  id: string;
  url: string;
  name: string;
  category: string;
  created_at: string;
}

export const useWebsiteImages = (category?: string) => {
  const [images, setImages] = useState<WebsiteImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchImages();
  }, [category]);

  const fetchImages = async () => {
    try {
      let query = supabase
        .from('website_images')
        .select('*')
        .order('created_at', { ascending: false });

      if (category) {
        query = query.eq('category', category);
      }

      const { data, error } = await query;

      if (error) throw error;
      setImages(data || []);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  };

  return { images, loading, refetch: fetchImages };
};
