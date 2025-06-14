
import React from 'react';
import { Camera, Video, Heart, Gift } from 'lucide-react';

export interface Package {
  name: string;
  description: string;
  price: string;
  features: string[];
  image: string;
}

export interface ServiceCategoryData {
  category: string;
  description: string;
  icon: React.ElementType;
  packages: Package[];
}

interface SubPackage {
  title: string;
  features: string[];
}

interface BundlePackageWithSubPackages {
  name: string;
  title: string;
  price: string;
  image: string;
  subPackages: SubPackage[];
  features?: never;
  images?: never;
}

interface BundlePackageWithFeatures {
  name: string;
  title: string;
  price: string;
  features: string[];
  images: string[];
  image?: never;
  subPackages?: never;
}

export type BundlePackage = BundlePackageWithSubPackages | BundlePackageWithFeatures;

export const packages: ServiceCategoryData[] = [
    {
      category: "Engagement / Sanjit",
      description: "Intimate moments that mark the beginning of your journey together",
      icon: Heart,
      packages: [
        {
          name: "Sequence I",
          description: "Photo documentation",
          price: "IDR 2,000,000",
          features: ["1 Photographer", "1 Assistant", "5 Hours Photo Session", "Unlimited Shoots", "Free Edit 100+ Photos", "All Files via Google Drive"],
          image: "https://images.unsplash.com/photo-1608914873398-3a211fc5e219?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Sequence II", 
          description: "Photo + Video documentation",
          price: "IDR 3,000,000",
          features: ["1 Photographer", "1 Videographer", "1 Assistant", "5 Hours Photo Session", "Unlimited Shoots", "Cinematic Video 1-3 Minutes", "Free Edit 100+ Photos", "All Files via Google Drive"],
          image: "https://images.unsplash.com/photo-1595393498310-2d826a79a07a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      category: "Prewedding",
      description: "Capturing your love story before the big day",
      icon: Camera,
      packages: [
        {
          name: "Sequence I",
          description: "Photo documentation",
          price: "IDR 2,000,000", 
          features: ["1 Photographer", "1 Assistant", "4 Hours Photo Session", "Unlimited Shoots", "Free Edit 150+ Photos Selected by Editor"],
          image: "https://images.unsplash.com/photo-1531818357353-e5b1a5d063a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Sequence II",
          description: "Complete package with prints",
          price: "IDR 3,500,000",
          features: ["1 Photographer", "1 Videographer", "1 Assistant", "6 Hours Photo Session", "Unlimited Shoots", "Cinematic Video 1-2 Minutes", "1 Printed Photo + Frame 16R", "5 Printed Photo + Frame 5R", "Free Potrait video for medsos 15-30 Second", "Free Edit 150+ Photos Selected by Editor"],
          image: "https://images.unsplash.com/photo-1520338258442-bd94a3506085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      category: "Traditional Wedding",
      description: "Honoring cultural traditions with artistic documentation",
      icon: Gift,
      packages: [
        {
          name: "Sequence I",
          description: "Essential coverage",
          price: "IDR 4,500,000",
          features: ["1 Photographer", "1 Cinematic Videographer", "1 Assistant", "8 Hours Photo Session", "Unlimited Shoots", "Cinematic Video 1-3 Minutes", "1 Magazine Album", "1 Printed Photo + Frame 16R", "Files via Google Drive", "Free Edit 300+ Photos Selected by Editor"],
          image: "https://images.unsplash.com/photo-1629865181126-17e4a13f63e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Sequence II", 
          description: "Extended coverage",
          price: "IDR 5,000,000",
          features: ["1 Photographer", "1 Candid Photographer", "1 Cinematic Videographer", "1 Assistant", "8 Hours Photo Session", "Unlimited Shoots", "Cinematic Video 1-3 Minutes", "1 Magazine Album", "1 Printed Photo + Frame 16R", "Free Flashdisk 32 GB", "Free Potrait Video for Social Media 15-30 Second", "Free Edit 300+ Photos Selected by Editor"],
          image: "https://images.unsplash.com/photo-1616134259837-142274474773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Sequence III",
          description: "Premium documentation", 
          price: "IDR 6,000,000",
          features: ["1 Photographer", "1 Candid Photographer", "2 Videographer", "1 Assistant", "8 Hours Photo Session", "Unlimited Shoots", "Clip Video 1-3 Minutes", "Full Video 7-10 minutes", "1 Magazine Album", "1 Printed Photo + Frame 16R", "Free Flashdisk 32 GB", "Free Potrait Video for Social Media 15-30 Second", "Free Edit 300+ Photos Selected by Editor"],
          image: "https://images.unsplash.com/photo-1611175657329-75382181339b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      category: "Wedding Day",
      description: "Complete documentation of your special day",
      icon: Video,
      packages: [
        {
          name: "Sequence I",
          description: "Complete wedding coverage",
          price: "IDR 9,000,000",
          features: ["1 Photographer", "1 Candid Photographer", "1 Videographer", "1 Assistant", "Unlimited Shoots", "Clip Video 2-3 Minutes", "1 Album Magazine", "Free Flashdisk 16 GB", "Free Potrait Video for Social Media 15-30 Second", "Free Edit 300+ Photos Selected by Editor"],
          image: "https://images.unsplash.com/photo-1597855510719-21ab6d302912?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Sequence II",
          description: "Luxury wedding documentation", 
          price: "IDR 11,000,000",
          features: [
            "1 Photographer",
            "1 Candid Photographer",
            "2 Videographer",
            "1 Assistant",
            "Unlimited Shoots",
            "Same Day Edit Video",
            "Full Video 7 - 10 Minutes",
            "1 Album Magazine",
            "1 Printed Photo + Frame 16R",
            "Free Flashdisk 32GB",
            "Free Potrait Video for Social Media 15-30 Second",
            "Free Edit 300+ Photos Selected by Editor"
          ],
          image: "https://images.unsplash.com/photo-1611175657329-75382181339b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
      ]
    }
  ];

export const bundlePackages: BundlePackage[] = [
    {
      name: "Premium Bundle",
      title: "PREMIUM",
      price: "IDR 7,500,000",
      image: "https://images.unsplash.com/photo-1520854221256-17452cc3da25?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      subPackages: [
        {
          title: "Prewedding",
          features: [
            "1 Photographer",
            "1 Videographer",
            "1 Assistant",
            "6 Hours Photo Session",
            "Unlimited Shoots",
            "Cinematic Video 1 - 2 minutes",
            "1 Printed Photo + Frame 16R",
            "5 Printed Photo + Frame 5R",
            "Free Potrait Video for medsos 15-30 Second",
            "Free Edit 150+ Photos Selected by Editor",
          ],
        },
        {
          title: "Wedding",
          features: [
            "1 Photographer",
            "1 Candid Photographer",
            "1 Videographer",
            "1 Assistant",
            "8 Hours Photo Session Wedding Day",
            "1 Cinematic Wedding Video",
            "1 Printed Photo + Frame 16RP",
            "1 Album Magazine",
            "Free Flashdisk 32GB",
            "Free Edit 300+ Photos Selected by Editor",
          ],
        },
      ],
    },
    {
      name: "Luxurious Bundle", 
      title: "LUXURIOUS",
      price: "IDR 8,500,000",
      features: ["Full cinematic video", "Complete prints collection", "Premium album design", "Drone footage", "Same day editing", "Social media package", "Free makeup & styling", "Free prewedding attire"],
      images: [
        "https://images.unsplash.com/photo-1532702824322-75c102758826?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1511285560921-50b39f4f2f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1616041158641-7a6305a46835?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ]
    }
  ];
