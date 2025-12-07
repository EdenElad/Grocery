import React, { useState } from 'react';
import { Product, Store, PriceEntry } from '../types';
import { findStoresWithAllProducts } from '../utils/priceCalculator';

interface SelectedItem {
  id: string;
  quantity: number;
}

interface CartRow {
  id: string;
  productId: string;
  quantity: number;
}

interface Props {
  products: Product[];
  stores: Store[];
  prices: PriceEntry[];
  selectedItems: SelectedItem[];
  onUpdateItems: (items: SelectedItem[]) => void;
  allStores?: Store[]; // כל החנויות ללא סינון
}

export default function ShoppingCart({ products, stores, prices, selectedItems, onUpdateItems, allStores }: Props): React.ReactElement {
  const storesForDisplay = allStores || stores; // משתמשים בכל החנויות לתצוגה
  const [cartRows, setCartRows] = useState<CartRow[]>([
    { id: '1', productId: '', quantity: 1 }
  ]);
  const [searchTerms, setSearchTerms] = useState<{ [key: string]: string }>({});

  const addRow = () => {
    const newId = (Math.max(...cartRows.map(r => parseInt(r.id)), 0) + 1).toString();
    setCartRows([...cartRows, { id: newId, productId: '', quantity: 1 }]);
  };

  const removeRow = (id: string) => {
    if (cartRows.length > 1) {
      setCartRows(cartRows.filter(r => r.id !== id));
      const newSearchTerms = { ...searchTerms };
      delete newSearchTerms[id];
      setSearchTerms(newSearchTerms);
    }
  };

  const updateRow = (id: string, productId: string, quantity: number) => {
    setCartRows(cartRows.map(r => r.id === id ? { ...r, productId, quantity } : r));
  };

  const updateSearchTerm = (id: string, term: string) => {
    setSearchTerms({ ...searchTerms, [id]: term });
  };

  const getFilteredProducts = (rowId: string) => {
    const term = searchTerms[rowId] || '';
    if (!term) return [];
    return products.filter(p =>
      p.name.toLowerCase().includes(term.toLowerCase()) ||
      p.category.toLowerCase().includes(term.toLowerCase())
    ).slice(0, 10);
  };

  const selectedProducts = cartRows
    .filter(row => row.productId)
    .map(row => ({
      product: products.find(p => p.id === row.productId)!,
      quantity: row.quantity
    }))
    .filter(item => item.product);

  const selectedProductIds = cartRows.map(r => r.productId).filter(Boolean);

  // מציאת חנויות - משתמשים בכל החנויות (ללא סינון), והסינון יתבצע בתצוגה
  const allCandidates = selectedProductIds.length > 0
    ? findStoresWithAllProducts(selectedProductIds, prices)
    : [];

  // סינון רק לחנויות באזור/עיר הנבחרים
  const candidates = allCandidates.filter(c => {
    const store = stores.find((s: Store) => s.id === c.storeId);
    return store !== undefined; // רק חנויות שעוברות את הסינון של App.tsx
  });

  const getTotalWithQuantities = (storeId: string): number => {
    return cartRows.reduce((total, row) => {
      if (!row.productId) return total;
      const price = prices.find(p => p.productId === row.productId && p.storeId === storeId)?.price || 0;
      return total + (price * row.quantity);
    }, 0);
  };

  return (
    <div style={{ width: '100%', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ display: 'flex', gap: 24 }}>
        {/* סל קניות - חיפוש מוצרים */}
        <div style={{ flex: 1, padding: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <h2 style={{ margin: 0 }}>סל קניות</h2>
            <button
              onClick={addRow}
              style={{
                padding: '8px 16px',
                backgroundColor: '#2e7d32',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '1em'
              }}
            >
              + הוסף פריט
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {cartRows.map((row) => {
              const selectedProduct = row.productId ? products.find(p => p.id === row.productId) : null;
              const filteredProducts = getFilteredProducts(row.id);
              const showDropdown = searchTerms[row.id] && filteredProducts.length > 0;

              return (
                <div key={row.id} style={{
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '12px',
                  backgroundColor: '#fff',
                  position: 'relative'
                }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    {/* חיפוש מוצר */}
                    <div style={{ flex: 1, position: 'relative' }}>
                      <label style={{ display: 'block', marginBottom: 4, fontWeight: 'bold', fontSize: '0.9em' }}>
                        מוצר
                      </label>
                      <input
                        type="text"
                        value={selectedProduct ? selectedProduct.name : (searchTerms[row.id] || '')}
                        onChange={(e) => {
                          updateSearchTerm(row.id, e.target.value);
                          if (!e.target.value) {
                            updateRow(row.id, '', row.quantity);
                          }
                        }}
                        placeholder="חפש מוצר..."
                        style={{
                          width: '100%',
                          padding: '8px',
                          fontSize: '1em',
                          border: '1px solid #ddd',
                          borderRadius: '4px'
                        }}
                      />

                      {/* תפריט נפתח של תוצאות חיפוש */}
                      {showDropdown && !selectedProduct && (
                        <div style={{
                          position: 'absolute',
                          top: '100%',
                          left: 0,
                          right: 0,
                          backgroundColor: 'white',
                          border: '1px solid #ddd',
                          borderTop: 'none',
                          borderRadius: '0 0 4px 4px',
                          maxHeight: '200px',
                          overflowY: 'auto',
                          zIndex: 1000,
                          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                        }}>
                          {filteredProducts.map(product => (
                            <div
                              key={product.id}
                              onClick={() => {
                                updateRow(row.id, product.id, row.quantity);
                                updateSearchTerm(row.id, '');
                                // הוספת שורה חדשה אוטומטית רק אם כל השורות מלאות
                                const allRowsFilled = cartRows.every(r => r.productId !== '');
                                if (allRowsFilled) {
                                  addRow();
                                }
                              }}
                              style={{
                                padding: '12px',
                                cursor: 'pointer',
                                borderBottom: '1px solid #f0f0f0',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                transition: 'all 0.2s ease'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#f8f9fa';
                                e.currentTarget.style.transform = 'scale(1.02)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'white';
                                e.currentTarget.style.transform = 'scale(1)';
                              }}
                            >
                              {product.image && (
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  style={{
                                    width: '60px',
                                    height: '60px',
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                  }}
                                  onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                  }}
                                />
                              )}
                              <div style={{ flex: 1 }}>
                                <div style={{ fontWeight: '600', color: '#2c3e50', marginBottom: '4px' }}>{product.name}</div>
                                <div style={{ fontSize: '0.85em', color: '#7f8c8d' }}>
                                  {product.category} • {product.quantity} {product.unit}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* כמות */}
                    <div style={{ width: 100 }}>
                      <label style={{ display: 'block', marginBottom: 4, fontWeight: 'bold', fontSize: '0.9em' }}>
                        כמות
                      </label>
                      <input
                        type="number"
                        min="1"
                        value={row.quantity}
                        onChange={(e) => updateRow(row.id, row.productId, Math.max(1, parseInt(e.target.value) || 1))}
                        style={{
                          width: '100%',
                          padding: '8px',
                          fontSize: '1em',
                          border: '1px solid #ddd',
                          borderRadius: '4px'
                        }}
                      />
                    </div>

                    {/* כפתור מחיקה */}
                    <button
                      onClick={() => removeRow(row.id)}
                      disabled={cartRows.length === 1}
                      style={{
                        marginTop: 24,
                        padding: '8px 12px',
                        backgroundColor: cartRows.length === 1 ? '#ccc' : '#d32f2f',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: cartRows.length === 1 ? 'not-allowed' : 'pointer'
                      }}
                      title={cartRows.length === 1 ? 'לא ניתן למחוק את השורה האחרונה' : 'מחק שורה'}
                    >
                      ✕
                    </button>
                  </div>

                  {/* פרטי מוצר נבחר */}
                  {selectedProduct && (
                    <div style={{
                      marginTop: 8,
                      padding: '8px',
                      backgroundColor: '#f5f5f5',
                      borderRadius: '4px',
                      fontSize: '0.9em',
                      color: '#666'
                    }}>
                      {selectedProduct.category} • {selectedProduct.quantity} {selectedProduct.unit}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* תוצאות - חנויות */}
        <div style={{ flex: 1, padding: 12 }}>
          <h2>תוצאות</h2>

          {selectedProducts.length === 0 ? (
            <p style={{ color: '#666' }}>הוסף מוצרים לסל כדי לראות את החנות הזולה ביותר</p>
          ) : (
            <>
              {/* סיכום מוצרים שנבחרו */}
              <div style={{
                marginBottom: 16,
                padding: 12,
                backgroundColor: '#f5f5f5',
                borderRadius: '8px'
              }}>
                <h3 style={{ marginTop: 0, marginBottom: 8 }}>מוצרים בסל ({selectedProducts.length})</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {selectedProducts.map(({ product, quantity }) => (
                    <li key={product.id} style={{ padding: '4px 0', fontSize: '0.9em' }}>
                      • {product.name} × {quantity}
                    </li>
                  ))}
                </ul>
              </div>

              {/* החנות הזולה ביותר */}
              {candidates.length === 0 ? (
                <p style={{ color: '#d32f2f' }}>אין חנות אחת שמכילה את כל הפריטים באזור הנבחר.</p>
              ) : (
                <div>
                  <div style={{
                    padding: '16px',
                    backgroundColor: '#e8f5e9',
                    borderRadius: '8px',
                    marginBottom: '16px',
                    border: '2px solid #2e7d32'
                  }}>
                    <div style={{ fontSize: '1.2em', marginBottom: '8px', color: '#2e7d32' }}>
                      ✓ החנות המשתלמת ביותר
                    </div>
                    <div style={{ fontSize: '1.3em', fontWeight: 'bold', marginBottom: '8px' }}>
                      {storesForDisplay.find((s) => s.id === candidates[0].storeId)?.name || 'חנות לא ידועה'}
                    </div>
                    <div style={{ color: '#666', fontSize: '0.9em', marginBottom: '12px' }}>
                      {storesForDisplay.find((s) => s.id === candidates[0].storeId)?.address || ''}
                    </div>
                    <div style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#2e7d32' }}>
                      סה״כ: ₪{getTotalWithQuantities(candidates[0].storeId).toFixed(2)}
                    </div>

                    <details style={{ marginTop: '12px' }}>
                      <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#2e7d32' }}>
                        פירוט מחירים
                      </summary>
                      <table style={{ width: '100%', marginTop: '8px', fontSize: '0.9em' }}>
                        <thead>
                          <tr style={{ borderBottom: '2px solid #ddd' }}>
                            <th style={{ textAlign: 'right', padding: '4px' }}>מוצר</th>
                            <th style={{ textAlign: 'center', padding: '4px' }}>כמות</th>
                            <th style={{ textAlign: 'left', padding: '4px' }}>מחיר</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartRows.filter(row => row.productId).map((row) => {
                            const product = products.find(p => p.id === row.productId);
                            const price = prices.find(p => p.productId === row.productId && p.storeId === candidates[0].storeId)?.price || 0;
                            return (
                              <tr key={row.id} style={{ borderBottom: '1px solid #eee' }}>
                                <td style={{ padding: '4px' }}>{product?.name}</td>
                                <td style={{ textAlign: 'center', padding: '4px' }}>×{row.quantity}</td>
                                <td style={{ textAlign: 'left', padding: '4px' }}>
                                  ₪{(price * row.quantity).toFixed(2)}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </details>
                  </div>

                  {/* חנויות נוספות */}
                  {candidates.length > 1 && (
                    <details>
                      <summary style={{ cursor: 'pointer', fontWeight: 'bold', marginBottom: '8px' }}>
                        חנויות נוספות ({candidates.length - 1})
                      </summary>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {candidates.slice(1, 6).map((c) => {
                          const store = storesForDisplay.find((s) => s.id === c.storeId);
                          const total = getTotalWithQuantities(c.storeId);
                          const difference = total - getTotalWithQuantities(candidates[0].storeId);
                          return (
                            <li key={c.storeId} style={{
                              padding: '12px',
                              margin: '8px 0',
                              backgroundColor: '#f5f5f5',
                              borderRadius: '8px',
                              border: '1px solid #ddd'
                            }}>
                              <div style={{ fontWeight: 'bold', fontSize: '1.1em' }}>{store?.name || 'חנות לא ידועה'}</div>
                              <div style={{ fontSize: '0.85em', color: '#666', marginTop: '4px' }}>
                                {store?.address || ''}
                              </div>
                              <div style={{ marginTop: '8px', display: 'flex', gap: 12, alignItems: 'center' }}>
                                <span style={{ fontWeight: 'bold', fontSize: '1.1em' }}>
                                  ₪{total.toFixed(2)}
                                </span>
                                <span style={{ color: '#d32f2f', fontSize: '0.9em' }}>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}
