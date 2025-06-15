
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Upload } from 'lucide-react';

interface ImageUploadAreaProps {
  category: string;
  multiple?: boolean;
  uploading: boolean;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDrop: (e: React.DragEvent) => void;
  onDragOver: (e: React.DragEvent) => void;
}

const ImageUploadArea = ({ 
  category, 
  multiple = false, 
  uploading, 
  onFileChange, 
  onDrop, 
  onDragOver 
}: ImageUploadAreaProps) => {
  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div
          onDrop={onDrop}
          onDragOver={onDragOver}
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
            onChange={onFileChange}
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
  );
};

export default ImageUploadArea;
