export interface CakeProduct {
  id: string;
  name: string;
  frenchTitle: string;
  tagline: string;
  description: string;
  basePrice: number;
  image: string;
  category: 'couture' | 'signature' | 'seasonal' | 'individual';
  flavorProfile: string[];
  cacaoOrigin: string;
  cacaoPercentage: string;
  servingSizes: {
    size: string;
    serves: string;
    price: number;
  }[];
  hallmarks: string[];
  tastingNotes: {
    aroma: string;
    palate: string;
    finish: string;
    pairings: string;
  };
  allergens: string[];
}

export interface SensationCategory {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  accentNote: string;
  image: string;
  moodColor: string;
  recommendedCakeId: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  technique: string;
  temperature?: string;
  image: string;
}

export interface CakeLayerDna {
  id: number;
  name: string;
  frenchName: string;
  description: string;
  percentage: string;
  texture: string;
  ingredients: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  location: string;
  quote: string;
  occasion: string;
  rating: number;
  cakeOrdered: string;
}

export interface CartItem {
  id: string;
  product: CakeProduct;
  selectedSize: string;
  serves: string;
  unitPrice: number;
  quantity: number;
  customInscription?: string;
}

export interface BespokeInquiry {
  celebrationType: string;
  tiers: number;
  guestCount: number;
  flavorPreference: string;
  eventDate: string;
  specialRequests: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
}
