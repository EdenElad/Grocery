import React from 'react';
import { Product, Store, PriceEntry } from '../types';
import { findStoresWithAllProducts } from '../utils/priceCalculator';

interface SelectedItem {
  id: string;
  quantity: number;
}

interface Props {
  selectedItems: SelectedItem[];
  products: Product[];
  stores: Store[];
  prices: PriceEntry[];
}

function ShoppingList({ selectedItems, products, stores, prices }: Props): React.ReactElement {
  const selectedProducts = selectedItems.map(item => ({
    product: products.find(p => p.id === item.id)!,
    quantity: item.quantity
  }));

  const candidates = findStoresWithAllProducts(
    selectedItems.map(item => item.id),
    prices
  );

  const getTotalWithQuantities = (storeId: string): number => {
    return selectedItems.reduce((total, item) => {
      const price = prices.find(p => p.productId === item.id && p.storeId === storeId)?.price || 0;
      return total + (price * item.quantity);
    }, 0);
  };

  return (
    <div style={{ padding: 12, minWidth: 300 }}>
      <h2>רשימת קניות</h2>
      {selectedProducts.length === 0 ? (
        <p>טרם נבחרו פריטים.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {selectedProducts.map(({ product, quantity }) => (
            <li key={product.id} style={{ 
              padding: '8px', 
              margin: '4px 0',
              borderBottom: '1px solid #eee'
            }}>
              <div>{product.name}</div>
              <div style={{ color: '#666', fontSize: '0.9em' }}>
                כמות: {quantity} {product.unit}
              </div>
            </li>
          ))}
        </ul>
      )}

      <h3>החנות המשתלמת ביותר</h3>
      {candidates.length === 0 ? (
        <p>אין חנות אחת שמכילה את כל הפריטים.</p>
      ) : (
        <div>
          <div style={{
            padding: '12px',
            backgroundColor: '#e8f5e9',
            borderRadius: '8px',
            marginBottom: '16px'
          }}>
            <div style={{ fontSize: '1.1em', marginBottom: '8px' }}>
              מומלץ: <strong>{stores.find((s) => s.id === candidates[0].storeId)?.name}</strong>
            </div>
            <div style={{ color: '#666', fontSize: '0.9em', marginBottom: '12px' }}>
              {stores.find((s) => s.id === candidates[0].storeId)?.address}
            </div>
            <div style={{ fontSize: '1.3em', fontWeight: 'bold', color: '#2e7d32' }}>
              סה״כ: ₪{getTotalWithQuantities(candidates[0].storeId).toFixed(2)}
            </div>

            <details style={{ marginTop: '12px' }}>
              <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>פירוט מחירים</summary>
              <table style={{ width: '100%', marginTop: '8px', fontSize: '0.9em' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #ddd' }}>
                    <th style={{ textAlign: 'right', padding: '4px' }}>מוצר</th>
                    <th style={{ textAlign: 'center', padding: '4px' }}>כמות</th>
                    <th style={{ textAlign: 'left', padding: '4px' }}>מחיר</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedItems.map((item) => {
                    const product = products.find(p => p.id === item.id);
                    const price = prices.find(p => p.productId === item.id && p.storeId === candidates[0].storeId)?.price || 0;
                    return (
                      <tr key={item.id} style={{ borderBottom: '1px solid #eee' }}>
                        <td style={{ padding: '4px' }}>{product?.name}</td>
                        <td style={{ textAlign: 'center', padding: '4px' }}>x{item.quantity}</td>
                        <td style={{ textAlign: 'left', padding: '4px' }}>
                          ₪{(price * item.quantity).toFixed(2)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </details>
          </div>

          {candidates.length > 1 && (
            <details>
              <summary style={{ cursor: 'pointer', fontWeight: 'bold', marginBottom: '8px' }}>
                חנויות נוספות ({candidates.length - 1})
              </summary>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {candidates.slice(1, 6).map((c) => {
                  const store = stores.find((s) => s.id === c.storeId);
                  const total = getTotalWithQuantities(c.storeId);
                  const difference = total - getTotalWithQuantities(candidates[0].storeId);
                  return (
                    <li key={c.storeId} style={{
                      padding: '8px',
                      margin: '4px 0',
                      backgroundColor: '#f5f5f5',
                      borderRadius: '4px'
                    }}>
                      <div style={{ fontWeight: 'bold' }}>{store?.name}</div>
                      <div style={{ fontSize: '0.85em', color: '#666' }}>{store?.address}</div>
                      <div style={{ marginTop: '4px' }}>
                        <span style={{ fontWeight: 'bold' }}>₪{total.toFixed(2)}</span>
                        <span style={{ color: '#d32f2f', fontSize: '0.9em', marginRight: '8px' }}>
                          (+₪{difference.toFixed(2)})
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
              {candidates.length > 6 && (
                <p style={{ fontSize: '0.9em', color: '#666', marginTop: '8px' }}>
                  ועוד {candidates.length - 6} חנויות...
                </p>
              )}
            </details>
          )}
        </div>
      )}
    </div>
  );
}

export default ShoppingList;