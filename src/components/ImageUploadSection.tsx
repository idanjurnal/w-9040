
import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, Trash2, Eye } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/lib/supabase';

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

  const fetchImages = useCallback(async () => {
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
  }, [category]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const uploadImage = async (file: File) => {
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
    if (!files) return;

    if (multiple) {
      Array.from(files).forEach(file => uploadImage(file));
    } else {
      uploadImage(files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
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

  return (
    <div className="h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>

      {/* Upload Area */}
      <Card className="mb-4">
        <CardContent className="p-4">
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors"
          >
            <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <div className="space-y-2">
              <Label htmlFor={`file-${category}`} className="cursor-pointer">
                <span className="text-sm font-medium text-blue-600 hover:text-blue-500">
                  Click to upload
                </span>
                <span className="text-sm text-gray-500"> or drag and drop</span>
              </Label>
              <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
            </div>
            <Input
              id={`file-${category}`}
              type="file"
              accept="image/*"
              multiple={multiple}
              onChange={handleFileChange}
              disabled={uploading}
              className="hidden"
            />
          </div>
          {uploading && (
            <div className="mt-4 text-center">
              <div className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
              <span className="ml-2 text-sm">Uploading...</span>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Images Grid */}
      <div className="flex-1 overflow-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image) => (
            <Card key={image.id} className="group relative">
              <CardContent className="p-2">
                <img
                  src={image.url}
                  alt={image.name}
                  className="w-full h-32 object-cover rounded"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 rounded flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => window.open(image.url, '_blank')}
                    >
                      <Eye size={16} />
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => deleteImage(image)}
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-1 truncate">{image.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageUploadSection;
