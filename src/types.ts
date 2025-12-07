export interface Product {
  id: string;
  name: string;
  category: string;
  unit?: string;  // e.g., 'kg', 'unit', 'liter'
  quantity?: number;  // e.g., 1, 0.5, 12
  image?: string; // URL לתמונה
}

export interface Store {
  id: string;
  name: string;
  chain: string;
  address?: string;
  region?: string; // אזור בארץ: צפון, חיפה, שרון, מרכז, תל אביב, ירושלים, דרום
  city?: string; // העיר בה נמצאת החנות
}

export interface PriceEntry {
  productId: string;
  storeId: string;
  price: number;
  // אופציונלי: מחיר למבצע והכמות במבצע
  promoPrice?: number;
  promoQuantity?: number;
}
