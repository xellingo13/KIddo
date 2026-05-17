import { Category, Place } from './types';

export const SAMPLE_PLACES: Place[] = [
  {
    id: '1',
    name: 'Modern Penthouse - Tashkent City',
    description: 'High-end penthouse with floor-to-ceiling windows and panoramic city views.',
    category: Category.SALE,
    rating: 4.9,
    reviewsCount: 12,
    pricePerDay: 4500000000,
    location: {
      lat: 41.3111,
      lng: 69.2797,
      address: 'Tashkent City, Block A',
      city: 'Tashkent'
    },
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1493397212122-2b85def8206b?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1501183638710-841dd1904a3b?auto=format&fit=crop&q=80&w=800'
    ],
    amenities: ['Smart Home', 'Pool', 'Parking', 'Concierge', 'Gym'],
    phone: '+998 71 123 45 67',
    poster: {
      name: 'Artur R.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
      role: 'Rieltor',
      listingsCount: 94,
      callsCount: 195
    },
    details: {
      roomsCount: 4,
      floor: 7,
      totalFloors: 9,
      area: 132,
      repairType: 'Dizaynerlik',
      propertyType: 'Kvartira',
      postedAt: '13.05.2026 12:19'
    }
  },
  {
    id: '2',
    name: 'Cozy Studio - Oybek',
    description: 'Minimalist studio in the heart of the city. Ideal for digital nomads.',
    category: Category.RENT,
    rating: 4.7,
    reviewsCount: 45,
    averageCheck: 8000000,
    location: {
      lat: 41.2941,
      lng: 69.2662,
      address: 'Afrosiyob str 12',
      city: 'Tashkent'
    },
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800'
    ],
    amenities: ['WiFi', 'AC', 'Kitchen', 'Central Heating'],
    phone: '+998 90 987 65 43',
    poster: {
      name: 'Malika K.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100',
      role: 'Egasidan',
      listingsCount: 2,
      callsCount: 12
    },
    details: {
      roomsCount: 1,
      floor: 3,
      totalFloors: 5,
      area: 35,
      repairType: 'Yevro',
      propertyType: 'Studiya',
      postedAt: '15.05.2026 09:45'
    }
  },
  {
    id: '3',
    name: 'Sim-Sim Restaurant',
    description: 'Traditional Uzbek cuisine in a modern luxury setting. Best plov in the city.',
    category: Category.DAILY,
    rating: 4.8,
    reviewsCount: 3200,
    averageCheck: 250000,
    location: {
      lat: 41.3111,
      lng: 69.2797,
      address: 'Taras Shevchenko street',
      city: 'Tashkent'
    },
    images: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1502341496238-006295de7d0e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1536376074432-bf12177d4f4f?auto=format&fit=crop&q=80&w=800'
    ],
    amenities: ['Traditional Music', 'VIP Rooms', 'Parking', 'Terrace'],
    phone: '+998 71 234 56 78',
    poster: {
      name: 'Javohir T.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
      role: 'Manager',
      listingsCount: 5,
      callsCount: 156
    }
  },
  {
    id: '4',
    name: 'Magic City',
    description: 'Huge entertainment park with fountains, shops, and attractions for the whole family.',
    category: Category.MONTHLY,
    rating: 4.6,
    reviewsCount: 5400,
    location: {
      lat: 41.3033,
      lng: 69.2435,
      address: 'Babur park',
      city: 'Tashkent'
    },
    images: [
      'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=800'
    ],
    amenities: ['Park', 'Food Court', 'Cinema'],
    phone: '+998 71 202 77 99',
    poster: {
      name: 'Admin',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100'
    }
  },
  {
    id: '5',
    name: 'Luxury Villa - Chimgan',
    description: 'Beautiful mountain villa with private pool and stunning views of the reservoir.',
    category: Category.SALE,
    rating: 4.95,
    reviewsCount: 8,
    pricePerDay: 8500000000,
    location: { lat: 41.6167, lng: 70.0167, address: 'Chimgan Mountains', city: 'Tashkent Region' },
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1449156001533-cb39c1a32390?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800'
    ],
    amenities: ['Mountain View', 'Pool', 'BBQ Area', 'Sauna', 'WiFi'],
    phone: '+998 90 111 22 33',
    poster: { 
      name: 'Sardor A.', 
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100',
      role: 'Owner',
      listingsCount: 1,
      callsCount: 45
    },
    details: {
      roomsCount: 6,
      floor: 1,
      totalFloors: 2,
      area: 250,
      repairType: 'Yevro',
      propertyType: 'Hovli',
      postedAt: '16.05.2026 18:00'
    }
  },
  {
    id: '6',
    name: 'Business Apartment - Darhan',
    description: 'Quiet and professional environment, perfect for long-term business stays.',
    category: Category.RENT,
    rating: 4.8,
    reviewsCount: 22,
    averageCheck: 12000000,
    location: { lat: 41.3188, lng: 69.2944, address: 'Mustaqillik Avenue', city: 'Tashkent' },
    images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800'],
    amenities: ['Concierge', 'Gym', 'High-speed Internet'],
    phone: '+998 90 444 55 66',
    poster: { name: 'Elena M.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100' }
  },
  {
    id: '7',
    name: 'Sushi Palace',
    description: 'Fresh seafood and premium sushi in a minimalist Japanese interior.',
    category: Category.DAILY,
    rating: 4.7,
    reviewsCount: 1540,
    averageCheck: 450000,
    location: { lat: 41.3000, lng: 69.2700, address: 'Shota Rustaveli str', city: 'Tashkent' },
    images: ['https://images.unsplash.com/photo-1579027989536-b7b1f875659b?auto=format&fit=crop&q=80&w=800'],
    amenities: ['Japanese Chef', 'Delivery', 'Ambient Music'],
    phone: '+998 71 888 99 00',
    poster: { name: 'Yumi S.', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100' }
  },
  {
    id: '8',
    name: 'Loft Studio - Chilanzar',
    description: 'Trendy loft with industrial design features and vibrant local atmosphere.',
    category: Category.SALE,
    rating: 4.5,
    reviewsCount: 34,
    pricePerDay: 1200000000,
    location: { lat: 41.2778, lng: 69.2045, address: 'Chilanzar 1-block', city: 'Tashkent' },
    images: ['https://images.unsplash.com/photo-1536376074432-bf12177d4f4f?auto=format&fit=crop&q=80&w=800'],
    amenities: ['Loft Design', 'Nearby Metro', 'Open Kitchen'],
    phone: '+998 90 777 66 55',
    poster: { name: 'Rustam D.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100' }
  },
  {
    id: '9',
    name: 'Registan Luxury Suite',
    description: 'Traditional Samarkand hospitality with a view of the Registan Square.',
    category: Category.RENT,
    rating: 4.98,
    reviewsCount: 89,
    averageCheck: 2500000,
    location: { lat: 39.6547, lng: 66.9757, address: 'Registan Street', city: 'Samarkand' },
    images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800'],
    amenities: ['Museum View', 'Breakfast Included', 'Airport Transfer'],
    phone: '+998 66 123 45 67',
    poster: { name: 'Akmal H.', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100' }
  },
  {
    id: '10',
    name: 'Sky Bar - Hilton',
    description: 'Highest rooftop bar in Uzbekistan with signature cocktails and live jazz.',
    category: Category.DAILY,
    rating: 4.8,
    reviewsCount: 890,
    averageCheck: 600000,
    location: { lat: 41.3111, lng: 69.2797, address: 'Tashkent City', city: 'Tashkent' },
    images: ['https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800'],
    amenities: ['Rooftop', 'Live Music', 'Premium Drinks'],
    phone: '+998 71 555 66 77',
    poster: { name: 'Diana V.', avatar: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=100' }
  },
  {
    id: '11',
    name: 'Eco House - Zaamin',
    description: 'Sustainable wooden lodge in the heart of the national park.',
    category: Category.SALE,
    rating: 4.9,
    reviewsCount: 15,
    pricePerDay: 2500000000,
    location: { lat: 39.6167, lng: 68.3333, address: 'Zaamin National Park', city: 'Jizzakh' },
    images: ['https://images.unsplash.com/photo-1449156001533-cb39c1a32390?auto=format&fit=crop&q=80&w=800'],
    amenities: ['Nature', 'Hiking Trails', 'Fireplace'],
    phone: '+998 90 222 33 44',
    poster: { name: 'Timur B.', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100' }
  },
  {
    id: '12',
    name: 'Riverside Cottage',
    description: 'Quiet getaway by the Chirchiq river, perfect for weekend escapes.',
    category: Category.DAILY,
    rating: 4.6,
    reviewsCount: 42,
    averageCheck: 1500000,
    location: { lat: 41.4500, lng: 69.4500, address: 'Ghazalkent area', city: 'Tashkent Region' },
    images: ['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800'],
    amenities: ['River Access', 'Sauna', 'Garden'],
    phone: '+998 90 666 77 88',
    poster: { name: 'Oksana P.', avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=100' }
  },
  {
    id: '13',
    name: 'Smart Office - Sergeli',
    description: 'Innovative co-working space with all modern facilities for startups.',
    category: Category.MONTHLY,
    rating: 4.4,
    reviewsCount: 120,
    location: { lat: 41.2222, lng: 69.2333, address: 'Sergeli Ind Estate', city: 'Tashkent' },
    images: ['https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'],
    amenities: ['24/7 Access', 'Coffee Bar', 'Meeting Rooms'],
    phone: '+998 71 444 33 22',
    poster: { name: 'Bakhtiyor Z.', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100' }
  },
  {
    id: '14',
    name: 'Old City Guest House',
    description: 'Experience the soul of ancient Bukhara in this beautifully restored house.',
    category: Category.RENT,
    rating: 4.9,
    reviewsCount: 56,
    averageCheck: 1200000,
    location: { lat: 39.7747, lng: 64.4286, address: 'Lyabi-Hauz Area', city: 'Bukhara' },
    images: ['https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800'],
    amenities: ['Historical', 'Courtyard', 'Traditional Breakfast'],
    phone: '+998 65 222 33 44',
    poster: { name: 'Nodira L.', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100' }
  },
  {
    id: '15',
    name: 'Urban Oasis Garden',
    description: 'Modern residential complex with lush green gardens and meditation areas.',
    category: Category.SALE,
    rating: 4.7,
    reviewsCount: 19,
    pricePerDay: 5500000000,
    location: { lat: 41.3333, lng: 69.3000, address: 'Feruza District', city: 'Tashkent' },
    images: ['https://images.unsplash.com/photo-1448630360428-6e23447316fc?auto=format&fit=crop&q=80&w=800'],
    amenities: ['Garden', 'Security', 'Playground'],
    phone: '+998 90 999 88 77',
    poster: { name: 'Khamid G.', avatar: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=100' }
  }
];
