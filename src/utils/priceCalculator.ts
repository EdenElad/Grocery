import { PriceEntry } from '../types';

export interface StoreTotal {
  storeId: string;
  total: number;
}

/**
 * Given a list of selected product IDs and the price table, return stores that
 * contain all products and their total price for the basket.
 */
export function findStoresWithAllProducts(
  selectedProductIds: string[],
  prices: PriceEntry[],
): StoreTotal[] {
  if (selectedProductIds.length === 0) return [];

  const storeMap = new Map<string, number>();

  // group prices by store for faster lookup
  const byStore = new Map<string, Map<string, number>>();
  for (const p of prices) {
    if (!byStore.has(p.storeId)) byStore.set(p.storeId, new Map());
    byStore.get(p.storeId)!.set(p.productId, p.price);
  }

  for (const entry of Array.from(byStore.entries())) {
    const storeId = entry[0];
    const productMap = entry[1];
    let ok = true;
    let sum = 0;
    for (const pid of selectedProductIds) {
      const price = productMap.get(pid);
      if (price === undefined) {
        ok = false;
        break;
      }
      sum += price;
    }
    if (ok) storeMap.set(storeId, sum);
  }

  const result: StoreTotal[] = [];
  for (const entry of Array.from(storeMap.entries())) {
    const storeId = entry[0];
    const total = entry[1];
    result.push({ storeId, total });
  }
  result.sort((a, b) => a.total - b.total);
  return result;
}
