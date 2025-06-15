
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, Trash2 } from 'lucide-react';

interface ImageData {
  id: string;
  url: string;
  name: string;
  category: string;
  created_at: string;
}

interface ImageCardProps {
  image: ImageData;
  onDelete: (image: ImageData) => void;
}

const ImageCard = ({ image, onDelete }: ImageCardProps) => {
  return (
    <Card className="group relative">
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
              onClick={() => onDelete(image)}
            >
              <Trash2 size={16} />
            </Button>
          </div>
        </div>
        <p className="text-xs text-gray-600 mt-1 truncate">{image.name}</p>
      </CardContent>
    </Card>
  );
};

export default ImageCard;
