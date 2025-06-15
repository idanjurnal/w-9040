
import React from 'react';
import ImageCard from './ImageCard';

interface ImageData {
  id: string;
  url: string;
  name: string;
  category: string;
  created_at: string;
}

interface ImageGridProps {
  images: ImageData[];
  onDeleteImage: (image: ImageData) => void;
}

const ImageGrid = ({ images, onDeleteImage }: ImageGridProps) => {
  return (
    <div className="flex-1 overflow-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <ImageCard
            key={image.id}
            image={image}
            onDelete={onDeleteImage}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
