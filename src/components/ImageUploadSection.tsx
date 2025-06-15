
import React, { useState, useEffect, useCallback } from 'react';
import { toast } from 'sonner';
import { supabase } from '@/lib/supabase';
import ConfigurationWarning from './admin/ConfigurationWarning';
import ImageUploadArea from './admin/ImageUploadArea';
import ImageGrid from './admin/ImageGrid';

interface ImageUploadSectionProps {
  title: string;
  category: string;
  description: string;
  multiple?: boolean;
}

interface ImageData {
  id: string;
  url: string;
  name: string;
  category: string;
  created_at: string;
}

const ImageUploadSection = ({ title, category, description, multiple = false }: ImageUploadSectionProps) => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);

  // Check if Supabase is properly configured
  const isSupabaseConfigured = !!(import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY);

  const fetchImages = useCallback(async () => {
    if (!isSupabaseConfigured) {
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('website_images')
        .select('*')
        .eq('category', category)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setImages(data || []);
    } catch (error) {
      console.error('Error fetching images:', error);
      toast.error('Gagal memuat gambar');
    } finally {
      setLoading(false);
    }
  }, [category, isSupabaseConfigured]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const uploadImage = async (file: File) => {
    if (!isSupabaseConfigured) {
      toast.error('Supabase is not configured');
      return;
    }

    try {
      setUploading(true);
      
      // Upload file to Supabase Storage
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `${category}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('website-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data } = supabase.storage
        .from('website-images')
        .getPublicUrl(filePath);

      // Save to database
      const { error: dbError } = await supabase
        .from('website_images')
        .insert({
          name: file.name,
          url: data.publicUrl,
          category: category,
        });

      if (dbError) throw dbError;

      toast.success('Gambar berhasil diupload!');
      fetchImages();
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error('Gagal mengupload gambar');
    } finally {
      setUploading(false);
    }
  };

  const deleteImage = async (image: ImageData) => {
    if (!isSupabaseConfigured) {
      toast.error('Supabase is not configured');
      return;
    }

    try {
      // Delete from storage
      const filePath = image.url.split('/').slice(-2).join('/');
      await supabase.storage
        .from('website-images')
        .remove([filePath]);

      // Delete from database
      const { error } = await supabase
        .from('website_images')
        .delete()
        .eq('id', image.id);

      if (error) throw error;

      toast.success('Gambar berhasil dihapus!');
      fetchImages();
    } catch (error) {
      console.error('Error deleting image:', error);
      toast.error('Gagal menghapus gambar');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || !isSupabaseConfigured) return;

    if (multiple) {
      Array.from(files).forEach(file => uploadImage(file));
    } else {
      uploadImage(files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (!isSupabaseConfigured) return;
    
    const files = e.dataTransfer.files;
    if (!files) return;

    if (multiple) {
      Array.from(files).forEach(file => uploadImage(file));
    } else {
      uploadImage(files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  if (!isSupabaseConfigured) {
    return <ConfigurationWarning />;
  }

  return (
    <div className="h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>

      <ImageUploadArea
        category={category}
        multiple={multiple}
        uploading={uploading}
        onFileChange={handleFileChange}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      />

      <ImageGrid
        images={images}
        onDeleteImage={deleteImage}
      />
    </div>
  );
};

export default ImageUploadSection;
