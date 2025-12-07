import React, { useState } from 'react';
import { Product } from '../types';

interface Props {
  products: Product[];
  selectedIds: string[];
  toggle: (id: string, quantity?: number) => void;
}

interface SelectedQuantity {
  [productId: string]: number;
}

export default function ProductList({ products, selectedIds, toggle }: Props): React.ReactElement {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('הכל');
  const [quantities, setQuantities] = useState<SelectedQuantity>({});

  // חילוץ כל הקטגוריות הייחודיות מהמוצרים
  const categories = ['הכל', ...Array.from(new Set(products.map(p => p.category)))];

  // סינון המוצרים לפי טקסט חופשי וקטגוריה
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory = selectedCategory === 'הכל' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleQuantityChange = (id: string, quantity: number) => {
    setQuantities(prev => ({ ...prev, [id]: quantity }));
    toggle(id, quantity);
  };

  return (
    <div style={{ padding: 12, maxWidth: 600 }}>
      <h2>מוצרים</h2>
      <div style={{ marginBottom: 16, display: 'flex', gap: 12 }}>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="חפש מוצר..."
          style={{ padding: 8, flex: 1 }}
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ padding: 8, minWidth: 120 }}
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredProducts.map((p) => (
          <li key={p.id} style={{ 
            padding: '8px', 
            margin: '4px 0', 
            border: '1px solid #eee',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <label style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input
                type="checkbox"
                checked={selectedIds.includes(p.id)}
                onChange={() => toggle(p.id, quantities[p.id] || 1)}
              />
              <span>{p.name}</span>
              <span style={{ color: '#666', fontSize: '0.9em' }}>
                ({p.quantity} {p.unit})
              </span>
            </label>
            {selectedIds.includes(p.id) && (
              <input
                type="number"
                min="1"
                value={quantities[p.id] || 1}
                onChange={(e) => handleQuantityChange(p.id, Math.max(1, parseInt(e.target.value) || 1))}
                style={{ width: 60, padding: '4px' }}
              />
            )}
          </li>
        ))}
      </ul>
      {filteredProducts.length === 0 && (
        <p style={{ color: '#666', textAlign: 'center' }}>לא נמצאו מוצרים</p>
      )}
    </div>
  );
}