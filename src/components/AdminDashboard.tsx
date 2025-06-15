
import React, { useState, useEffect } from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { X, Upload, LogOut } from 'lucide-react';
import { toast } from 'sonner';
import ImageUploadSection from './ImageUploadSection';

interface AdminDashboardProps {
  onClose: () => void;
}

const AdminDashboard = ({ onClose }: AdminDashboardProps) => {
  const { logout } = useAdmin();

  const handleLogout = async () => {
    await logout();
    toast.success('Logout berhasil');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-4xl h-[80vh] flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Admin Dashboard - Image Management</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut size={16} className="mr-2" />
              Logout
            </Button>
            <Button variant="outline" size="sm" onClick={onClose}>
              <X size={16} />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="flex-1 overflow-hidden">
          <Tabs defaultValue="hero" className="h-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="hero">Hero</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
              <TabsTrigger value="bundles">Bundles</TabsTrigger>
              <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            </TabsList>

            <TabsContent value="hero" className="h-full">
              <ImageUploadSection
                title="Hero Section Background"
                category="hero"
                description="Upload background image untuk hero section"
              />
            </TabsContent>

            <TabsContent value="services" className="h-full">
              <ImageUploadSection
                title="Services Images"
                category="services"
                description="Upload gambar untuk setiap kategori service"
                multiple={true}
              />
            </TabsContent>

            <TabsContent value="gallery" className="h-full">
              <ImageUploadSection
                title="Portfolio Gallery"
                category="gallery"
                description="Upload gambar untuk portfolio gallery"
                multiple={true}
              />
            </TabsContent>

            <TabsContent value="bundles" className="h-full">
              <ImageUploadSection
                title="Bundle Package Images"
                category="bundles"
                description="Upload gambar untuk bundle packages"
                multiple={true}
              />
            </TabsContent>

            <TabsContent value="testimonials" className="h-full">
              <ImageUploadSection
                title="Testimonial Images"
                category="testimonials"
                description="Upload foto klien untuk testimonial"
                multiple={true}
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
