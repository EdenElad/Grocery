import React, { useState } from 'react';
import { Product } from '../types';

interface Props {
  products: Product[];
  onFilterChange: (filtered: Product[]) => void;
}

export default function ProductSearch({ products, onFilterChange }: Props) {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('הכל');

  // חילוץ כל הקטגוריות הייחודיות מהמוצרים
  const categories = ['הכל', ...Array.from(new Set(products.map(p => p.category)))];

  // סינון המוצרים לפי טקסט חופשי וקטגוריה
  const filterProducts = () => {
    const filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchText.toLowerCase());
      const matchesCategory = selectedCategory === 'הכל' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    onFilterChange(filtered);
  };

  // הפעלת הסינון בכל שינוי בחיפוש או בקטגוריה
  React.useEffect(() => {
    filterProducts();
  }, [searchText, selectedCategory]);

  return (
    <div style={{ padding: '12px', display: 'flex', gap: '12px', alignItems: 'center' }}>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="חפש מוצר..."
        style={{ padding: '8px', width: '200px' }}
      />
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        style={{ padding: '8px' }}
      >
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}