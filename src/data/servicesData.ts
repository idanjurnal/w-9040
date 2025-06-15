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
  sectionImage?: string; // New: allows free assignment of service image for each section
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
      sectionImage: "/lovable-uploads/8185c133-59e6-44e4-826c-e4638031a64a.png",
      packages: [
        {
          name: "Sequence I",
          description: "Photo documentation",
          price: "IDR 2,000,000",
          features: [
            "1 Photographer", "1 Assistant", "5 Hours Photo Session", "Unlimited Shoots",
            "Free Edit 100+ Photos", "All Files via Google Drive"
          ],
          image: ""
        },
        {
          name: "Sequence II",
          description: "Photo + Video documentation",
          price: "IDR 3,000,000",
          features: [
            "1 Photographer", "1 Videographer", "1 Assistant", "5 Hours Photo Session",
            "Unlimited Shoots", "Cinematic Video 1-3 Minutes", "Free Edit 100+ Photos",
            "All Files via Google Drive"
          ],
          image: ""
        }
      ]
    },
    {
      category: "Prewedding",
      description: "Capturing your love story before the big day",
      icon: Camera,
      sectionImage: "/lovable-uploads/0038392e-0161-46ee-9883-3ad49c14a6c8.png",
      packages: [
        {
          name: "Sequence I",
          description: "Photo documentation",
          price: "IDR 2,000,000",
          features: [
            "1 Photographer", "1 Assistant", "4 Hours Photo Session", "Unlimited Shoots",
            "Free Edit 150+ Photos Selected by Editor"
          ],
          image: ""
        },
        {
          name: "Sequence II",
          description: "Complete package with prints",
          price: "IDR 3,500,000",
          features: [
            "1 Photographer", "1 Videographer", "1 Assistant", "6 Hours Photo Session",
            "Unlimited Shoots", "Cinematic Video 1-2 Minutes", "1 Printed Photo + Frame 16R",
            "5 Printed Photo + Frame 5R", "Free Potrait video for medsos 15-30 Second",
            "Free Edit 150+ Photos Selected by Editor"
          ],
          image: ""
        }
      ]
    },
    {
      category: "Traditional Wedding",
      description: "Honoring cultural traditions with artistic documentation",
      icon: Gift,
      sectionImage: "/lovable-uploads/500b5779-920e-4448-b53d-e4b2c1ae54b8.png",
      packages: [
        {
          name: "Sequence I",
          description: "Essential coverage",
          price: "IDR 4,500,000",
          features: [
            "1 Photographer", "1 Cinematic Videographer", "1 Assistant", "8 Hours Photo Session",
            "Unlimited Shoots", "Cinematic Video 1-3 Minutes", "1 Magazine Album",
            "1 Printed Photo + Frame 16R", "Files via Google Drive",
            "Free Edit 300+ Photos Selected by Editor"
          ],
          image: ""
        },
        {
          name: "Sequence II",
          description: "Extended coverage",
          price: "IDR 5,000,000",
          features: [
            "1 Photographer", "1 Candid Photographer", "1 Cinematic Videographer",
            "1 Assistant", "8 Hours Photo Session", "Unlimited Shoots",
            "Cinematic Video 1-3 Minutes", "1 Magazine Album",
            "1 Printed Photo + Frame 16R", "Free Flashdisk 32 GB",
            "Free Potrait Video for Social Media 15-30 Second",
            "Free Edit 300+ Photos Selected by Editor"
          ],
          image: ""
        },
        {
          name: "Sequence III",
          description: "Premium documentation",
          price: "IDR 6,000,000",
          features: [
            "1 Photographer", "1 Candid Photographer", "2 Videographer", "1 Assistant",
            "8 Hours Photo Session", "Unlimited Shoots", "Clip Video 1-3 Minutes",
            "Full Video 7-10 minutes", "1 Magazine Album", "1 Printed Photo + Frame 16R",
            "Free Flashdisk 32 GB", "Free Potrait Video for Social Media 15-30 Second",
            "Free Edit 300+ Photos Selected by Editor"
          ],
          image: ""
        }
      ]
    },
    {
      category: "Wedding Day",
      description: "Complete documentation of your special day",
      icon: Video,
      sectionImage: "/lovable-uploads/f8552675-0cb3-418f-a593-cd80f94205d4.png",
      packages: [
        {
          name: "Sequence I",
          description: "Complete wedding coverage",
          price: "IDR 9,000,000",
          features: [
            "1 Photographer", "1 Candid Photographer", "1 Videographer", "1 Assistant",
            "Unlimited Shoots", "Clip Video 2-3 Minutes", "1 Album Magazine",
            "Free Flashdisk 16 GB", "Free Potrait Video for Social Media 15-30 Second",
            "Free Edit 300+ Photos Selected by Editor"
          ],
          image: ""
        },
        {
          name: "Sequence II",
          description: "Luxury wedding documentation",
          price: "IDR 11,000,000",
          features: [
            "1 Photographer", "1 Candid Photographer", "2 Videographer", "1 Assistant",
            "Unlimited Shoots", "Same Day Edit Video", "Full Video 7 - 10 Minutes",
            "1 Album Magazine", "1 Printed Photo + Frame 16R", "Free Flashdisk 32GB",
            "Free Potrait Video for Social Media 15-30 Second",
            "Free Edit 300+ Photos Selected by Editor"
          ],
          image: ""
        }
      ]
    }
  ];

export const bundlePackages: BundlePackage[] = [
    {
      name: "Premium Bundle",
      title: "PREMIUM",
      price: "IDR 7,500,000",
      image: "/lovable-uploads/5b300858-832d-4281-89fc-92e21c42d384.png", // Couple sitting in field (sisa upload)
      subPackages: [
        {
          title: "Prewedding",
          features: [
            "1 Photographer", "1 Videographer", "1 Assistant",
            "6 Hours Photo Session", "Unlimited Shoots",
            "Cinematic Video 1 - 2 minutes", "1 Printed Photo + Frame 16R",
            "5 Printed Photo + Frame 5R", "Free Potrait Video for medsos 15-30 Second",
            "Free Edit 150+ Photos Selected by Editor"
          ]
        },
        {
          title: "Wedding",
          features: [
            "1 Photographer", "1 Candid Photographer", "1 Videographer", "1 Assistant",
            "8 Hours Photo Session Wedding Day", "1 Cinematic Wedding Video",
            "1 Printed Photo + Frame 16RP", "1 Album Magazine",
            "Free Flashdisk 32GB", "Free Edit 300+ Photos Selected by Editor"
          ]
        }
      ]
    },
    {
      name: "Luxurious Bundle",
      title: "LUXURIOUS",
      price: "IDR 8,500,000",
      image: "/lovable-uploads/4be40730-d1a3-4aa7-85ce-f4d4ab2cd457.png", // Couple with adat di jendela
      subPackages: [
        {
          title: "Prewedding",
          features: [
            "1 Photographer", "1 Videographer", "1 Assistant",
            "6 Hours Photo Session", "Unlimited Shoots", "Cinematic Video 1 - 2 Minutes",
            "1 Printed Photo + Frame 16R", "5 Printed Photo + Frame 5R",
            "Free Potrait Video for Social Media 15-30 Second",
            "Free Edit 150+ Photos Selected by Editor"
          ]
        },
        {
          title: "Traditional Ceremony",
          features: [
            "1 Photographer", "1 Videographer", "6 Hours Photo Session",
            "Unlimited Shoots", "Cinematic Video 1 - 2 Minutes",
            "Free Potrait Video for Social Media 15-30 Second",
            "Free Edit 100+ Photos Selected by Editor"
          ]
        },
        {
          title: "Wedding",
          features: [
            "1 Photographers", "1 Candid Photographers", "1 Videographer", "1 Assistant",
            "8 Hours Photo Session Wedding Day", "1 Cinematic Wedding Video",
            "1 Printed Photos + Frame 16RP", "1 Album Magazine", "1 Flashdisk 32GB",
            "Free Edit 300+ Photos Selected by Editor"
          ]
        }
      ]
    }
  ];
