export type BranchId = 'unisex' | 'mens';

export interface ServiceItem {
  id: string;
  name: string;
  category: 'women' | 'men' | 'bridal';
  description: string;
  duration?: string;
  highlights?: string[];
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'hair' | 'bridal' | 'men' | 'skincare';
  categoryLabel: string;
  imageUrl: string;
  description: string;
  aspect?: 'tall' | 'wide' | 'square';
}

export interface Branch {
  id: BranchId;
  name: string;
  tagline: string;
  address: string;
  phone?: string;
  hours: string;
  googleMapsUrl: string;
  features: string[];
  image: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  branch: BranchId;
  service: string;
  date: string;
  timeSlot: string;
  notes: string;
}
