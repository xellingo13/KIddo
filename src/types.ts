export enum Category {
  ALL = 'Barchasi',
  SALE = 'Sotuv',
  RENT = 'Ijara',
  DAILY = 'Kunlik',
  MONTHLY = 'Oylik'
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'REALTOR' | 'USER';
  avatar?: string;
  listingsCount?: number;
  callsCount?: number;
}

export interface Place {
  id: string;
  name: string;
  description: string;
  category: Category;
  rating: number;
  reviewsCount: number;
  pricePerDay?: number;
  averageCheck?: number;
  location: {
    lat: number;
    lng: number;
    address: string;
    city: string;
  };
  images: string[];
  amenities: string[];
  phone: string;
  poster?: {
    name: string;
    avatar: string;
    role?: string;
    listingsCount?: number;
    callsCount?: number;
  };
  details?: {
    roomsCount?: number;
    floor?: number;
    totalFloors?: number;
    area?: number;
    repairType?: string;
    propertyType?: string;
    postedAt?: string;
  };
}
