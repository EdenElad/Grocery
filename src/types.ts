export interface Product {
  id: string;
  name: string;
  category: string;
  unit?: string;
  quantity?: number;
  image?: string;
}

export interface Store {
  id: string;
  name: string;
  chain: string;
  address?: string;
  region?: string;
  city?: string;
}

export interface PriceEntry {
  productId: string;
  storeId: string;
  price: number;
  promoPrice?: number;
  promoQuantity?: number;
}
