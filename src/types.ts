export type Language = 'fr' | 'en' | 'es';

export type PageId = 'home' | 'story' | 'menu' | 'cellar' | 'reservations' | 'contact';

export type MenuCategoryId = 'all' | 'starters' | 'sea' | 'land' | 'sides' | 'desserts';

export type SeatingPreference = 'terrace' | 'interior';

export interface DishItem {
  id: string;
  category: Exclude<MenuCategoryId, 'all'>;
  price: number;
  image: string;
  name: Record<Language, string>;
  subtitle: Record<Language, string>;
  description: Record<Language, string>;
  pairing: Record<Language, string>;
}

export interface WineItem {
  id: string;
  region: string;
  vintage: string;
  priceGlass?: number;
  priceBottle: number;
  name: string;
  type: Record<Language, string>;
  notes: Record<Language, string>;
}

export interface ReservationFormData {
  fullName: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seating: SeatingPreference;
  notes: string;
}
