import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import ShoppingList from './components/ShoppingList';
import ShoppingCart from './components/ShoppingCart';
import { products, stores, prices } from './data/mockData';

interface SelectedItem {
  id: string;
  quantity: number;
}

function App(): React.ReactElement {
  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>('הכל');
  const [selectedCity, setSelectedCity] = useState<string>('הכל');
  const [viewMode, setViewMode] = useState<'list' | 'cart'>('cart');
  const [selectedStoreIds, setSelectedStoreIds] = useState<string[]>([]);

  function toggle(id: string, quantity: number = 1) {
    setSelectedItems((prev) => {
      const exists = prev.find(item => item.id === id);
      if (exists) {
        return prev.filter(item => item.id !== id);
      }
      return [...prev, { id, quantity }];
    });
  }

  function updateItems(items: SelectedItem[]) {
    setSelectedItems(items);
  }

  const selectedIds = selectedItems.map(item => item.id);

  // חילוץ האזורים הייחודיים
  const regions = ['הכל', ...Array.from(new Set(stores.map(s => s.region).filter(Boolean)))];

  // ערים לפי האזור הנבחר
  const availableCities = selectedRegion === 'הכל'
    ? ['הכל', ...Array.from(new Set(stores.map(s => s.city).filter(Boolean)))]
    : ['הכל', ...Array.from(new Set(stores.filter(s => s.region === selectedRegion).map(s => s.city).filter(Boolean)))];

  // סינון חנויות לפי אזור ועיר נבחרים
  let filteredStores = stores;
  if (selectedRegion !== 'הכל') {
    filteredStores = filteredStores.filter(store => store.region === selectedRegion);
  }
  if (selectedCity !== 'הכל') {
    filteredStores = filteredStores.filter(store => store.city === selectedCity);
  }

  // סינון נוסף לפי חנויות נבחרות (אם נבחרו)
  let finalFilteredStores = filteredStores;
  if (selectedStoreIds.length > 0) {
    finalFilteredStores = filteredStores.filter(store => selectedStoreIds.includes(store.id));
  }

  // כאשר משנים אזור, מאפסים את העיר והחנויות הנבחרות
  const handleRegionChange = (newRegion: string) => {
    setSelectedRegion(newRegion);
    setSelectedCity('הכל');
    setSelectedStoreIds([]);
  };

  // כאשר משנים עיר, מאפסים את החנויות הנבחרות
  const handleCityChange = (newCity: string) => {
    setSelectedCity(newCity);
    setSelectedStoreIds([]);
  };

  // טיפול בבחירת/ביטול בחירת חנות
  const toggleStore = (storeId: string) => {
    setSelectedStoreIds(prev => {
      if (prev.includes(storeId)) {
        return prev.filter(id => id !== storeId);
      } else {
        return [...prev, storeId];
      }
    });
  };

  return (
    <div className="App" style={{
      direction: 'rtl',
      textAlign: 'right'
    }}>
      <div style={{
        padding: '24px 32px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderBottom: '3px solid #5568d3',
        marginBottom: 24,
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{
          margin: '0 0 16px 0',
          color: 'white',
          fontSize: '2.2em',
          fontWeight: '700',
          textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
        }}>
          🛒 השוואת מחירי מוצרי מזון בישראל
        </h1>

        <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap', marginBottom: 16 }}>
          <label htmlFor="region-select" style={{ fontWeight: '600', color: 'white', fontSize: '1.1em' }}>📍 בחר אזור:</label>
          <select
            id="region-select"
            value={selectedRegion}
            onChange={(e) => handleRegionChange(e.target.value)}
            style={{
              padding: '10px 16px',
              fontSize: '1em',
              minWidth: 170,
              borderRadius: '8px',
              border: '2px solid white',
              backgroundColor: 'rgba(255,255,255,0.95)',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            {regions.map(region => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>

          <label htmlFor="city-select" style={{ fontWeight: '600', color: 'white', fontSize: '1.1em' }}>🏙️ בחר עיר:</label>
          <select
            id="city-select"
            value={selectedCity}
            onChange={(e) => handleCityChange(e.target.value)}
            style={{
              padding: '10px 16px',
              fontSize: '1em',
              minWidth: 170,
              borderRadius: '8px',
              border: '2px solid white',
              backgroundColor: 'rgba(255,255,255,0.95)',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            {availableCities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>

          <span style={{
            color: 'white',
            fontSize: '1em',
            marginRight: 'auto',
            backgroundColor: 'rgba(255,255,255,0.2)',
            padding: '8px 16px',
            borderRadius: '20px',
            fontWeight: '600'
          }}>
            🏪 {filteredStores.length} חנויות{selectedCity !== 'הכל' ? ` ב${selectedCity}` : selectedRegion !== 'הכל' ? ` באזור ${selectedRegion}` : ''}
          </span>
        </div>

        {/* בחירת חנויות ספציפיות */}
        {filteredStores.length > 0 && (
          <details style={{ marginTop: 12 }}>
            <summary style={{ cursor: 'pointer', fontWeight: 'bold', padding: '8px 0' }}>
              בחר חנויות ספציפיות להשוואה {selectedStoreIds.length > 0 && `(${selectedStoreIds.length} נבחרו)`}
            </summary>
            <div style={{
              maxHeight: '200px',
              overflowY: 'auto',
              border: '1px solid #ddd',
              borderRadius: '4px',
              padding: '8px',
              marginTop: '8px',
              backgroundColor: 'white'
            }}>
              <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                <button
                  onClick={() => setSelectedStoreIds(filteredStores.map(s => s.id))}
                  style={{
                    padding: '4px 12px',
                    fontSize: '0.9em',
                    backgroundColor: '#2e7d32',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  בחר הכל
                </button>
                <button
                  onClick={() => setSelectedStoreIds([])}
                  style={{
                    padding: '4px 12px',
                    fontSize: '0.9em',
                    backgroundColor: '#d32f2f',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  נקה הכל
                </button>
              </div>
              {filteredStores.map(store => (
                <label
                  key={store.id}
                  style={{
                    display: 'block',
                    padding: '4px 8px',
                    cursor: 'pointer',
                    borderRadius: '4px'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <input
                    type="checkbox"
                    checked={selectedStoreIds.includes(store.id)}
                    onChange={() => toggleStore(store.id)}
                    style={{ marginLeft: '8px' }}
                  />
                  <span style={{ fontSize: '0.9em' }}>
                    {store.name} - {store.address}
                  </span>
                </label>
              ))}
            </div>
          </details>
        )}

        <div style={{ display: 'flex', gap: 8 }}>
          <button
            onClick={() => setViewMode('cart')}
            style={{
              padding: '8px 16px',
              backgroundColor: viewMode === 'cart' ? '#2e7d32' : '#fff',
              color: viewMode === 'cart' ? '#fff' : '#000',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: viewMode === 'cart' ? 'bold' : 'normal'
            }}
          >
            סל קניות (חיפוש)
          </button>
          <button
            onClick={() => setViewMode('list')}
            style={{
              padding: '8px 16px',
              backgroundColor: viewMode === 'list' ? '#2e7d32' : '#fff',
              color: viewMode === 'list' ? '#fff' : '#000',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: viewMode === 'list' ? 'bold' : 'normal'
            }}
          >
            רשימת מוצרים
          </button>
        </div>
      </div>
      <div style={{
        display: 'flex',
        gap: 24,
        padding: '0 24px 24px'
      }}>
        {viewMode === 'list' ? (
          <>
            <ProductList products={products} selectedIds={selectedIds} toggle={toggle} />
            <ShoppingList
              selectedItems={selectedItems}
              products={products}
              stores={finalFilteredStores}
              prices={prices}
            />
          </>
        ) : (
          <ShoppingCart
            products={products}
            stores={finalFilteredStores}
            prices={prices}
            selectedItems={selectedItems}
            onUpdateItems={updateItems}
            allStores={stores}
          />
        )}
      </div>
    </div>
  );
}

export default App;
