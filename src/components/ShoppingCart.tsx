import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
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
  allStores?: Store[];
}

export default function ShoppingCart({
  products,
  stores,
  prices,
  selectedItems,
  onUpdateItems,
  allStores,
}: Props) {
  const storesForDisplay = allStores || stores;
  const [cartRows, setCartRows] = useState<CartRow[]>([
    { id: '1', productId: '', quantity: 1 },
  ]);
  const [searchTerms, setSearchTerms] = useState<{ [key: string]: string }>({});
  const [showDropdown, setShowDropdown] = useState<string | null>(null);

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
    setCartRows(cartRows.map(r => (r.id === id ? { ...r, productId, quantity } : r)));
  };

  const updateSearchTerm = (id: string, term: string) => {
    setSearchTerms({ ...searchTerms, [id]: term });
    setShowDropdown(term ? id : null);
  };

  const getFilteredProducts = (rowId: string) => {
    const term = searchTerms[rowId] || '';
    if (!term) return [];
    return products
      .filter(
        p =>
          p.name.toLowerCase().includes(term.toLowerCase()) ||
          p.category.toLowerCase().includes(term.toLowerCase())
      )
      .slice(0, 10);
  };

  const selectedProductIds = cartRows.map(r => r.productId).filter(Boolean);

  const allCandidates =
    selectedProductIds.length > 0
      ? findStoresWithAllProducts(selectedProductIds, prices)
      : [];

  const candidates = allCandidates.filter(c => {
    const store = stores.find((s: Store) => s.id === c.storeId);
    return store !== undefined;
  });

  const getTotalWithQuantities = (storeId: string): number => {
    return cartRows.reduce((total, row) => {
      if (!row.productId) return total;
      const price =
        prices.find(p => p.productId === row.productId && p.storeId === storeId)
          ?.price || 0;
      return total + price * row.quantity;
    }, 0);
  };

  const renderCartRow = ({ item: row }: { item: CartRow }) => {
    const selectedProduct = row.productId
      ? products.find(p => p.id === row.productId)
      : null;
    const filteredProducts = getFilteredProducts(row.id);
    const shouldShowDropdown = showDropdown === row.id && filteredProducts.length > 0;

    return (
      <View style={styles.cartRow}>
        <View style={styles.rowContent}>
          {/* Product Search */}
          <View style={styles.searchContainer}>
            <Text style={styles.inputLabel}>מוצר</Text>
            <TextInput
              style={styles.input}
              value={
                selectedProduct ? selectedProduct.name : searchTerms[row.id] || ''
              }
              onChangeText={text => {
                updateSearchTerm(row.id, text);
                if (!text) {
                  updateRow(row.id, '', row.quantity);
                }
              }}
              placeholder="חפש מוצר..."
              placeholderTextColor="#999"
            />

            {/* Dropdown Results */}
            {shouldShowDropdown && !selectedProduct && (
              <View style={styles.dropdown}>
                <FlatList
                  data={filteredProducts}
                  keyExtractor={product => product.id}
                  renderItem={({ item: product }) => (
                    <TouchableOpacity
                      style={styles.dropdownItem}
                      onPress={() => {
                        updateRow(row.id, product.id, row.quantity);
                        updateSearchTerm(row.id, '');
                        setShowDropdown(null);
                        const allRowsFilled = cartRows.every(r => r.productId !== '');
                        if (allRowsFilled) {
                          addRow();
                        }
                      }}
                    >
                      {product.image && (
                        <Image
                          source={{ uri: product.image }}
                          style={styles.productImage}
                          resizeMode="cover"
                        />
                      )}
                      <View style={styles.productInfo}>
                        <Text style={styles.productName}>{product.name}</Text>
                        <Text style={styles.productDetails}>
                          {product.category} • {product.quantity} {product.unit}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  )}
                  style={styles.dropdownList}
                  nestedScrollEnabled
                />
              </View>
            )}
          </View>

          {/* Quantity */}
          <View style={styles.quantityContainer}>
            <Text style={styles.inputLabel}>כמות</Text>
            <TextInput
              style={styles.quantityInput}
              value={row.quantity.toString()}
              onChangeText={text => {
                const qty = parseInt(text) || 1;
                updateRow(row.id, row.productId, Math.max(1, qty));
              }}
              keyboardType="numeric"
            />
          </View>

          {/* Remove Button */}
          {cartRows.length > 1 && (
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => removeRow(row.id)}
            >
              <Text style={styles.removeButtonText}>✕</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Cart Section */}
      <View style={styles.cartSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>סל קניות</Text>
          <TouchableOpacity style={styles.addButton} onPress={addRow}>
            <Text style={styles.addButtonText}>+ הוסף פריט</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={cartRows}
          renderItem={renderCartRow}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.cartList}
          nestedScrollEnabled
        />
      </View>

      {/* Results Section */}
      {candidates.length > 0 && (
        <View style={styles.resultsSection}>
          <Text style={styles.sectionTitle}>תוצאות ({candidates.length} חנויות)</Text>
          <FlatList
            data={candidates}
            keyExtractor={item => item.storeId}
            renderItem={({ item: candidate }) => {
              const store = storesForDisplay.find(s => s.id === candidate.storeId);
              const total = getTotalWithQuantities(candidate.storeId);

              return (
                <View style={styles.resultCard}>
                  <View style={styles.storeHeader}>
                    <Text style={styles.storeName}>{store?.name}</Text>
                    <Text style={styles.storeDetails}>
                      {store?.chain} • {store?.city}
                    </Text>
                  </View>
                  <View style={styles.priceContainer}>
                    <Text style={styles.totalPrice}>₪{total.toFixed(2)}</Text>
                  </View>
                </View>
              );
            }}
            contentContainerStyle={styles.resultsList}
          />
        </View>
      )}

      {selectedProductIds.length > 0 && candidates.length === 0 && (
        <View style={styles.emptyResults}>
          <Text style={styles.emptyText}>
            לא נמצאו חנויות עם כל המוצרים הנבחרים
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cartSection: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2c3e50',
  },
  addButton: {
    backgroundColor: '#2e7d32',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  addButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  cartList: {
    gap: 12,
  },
  cartRow: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#fff',
  },
  rowContent: {
    gap: 12,
  },
  searchContainer: {
    flex: 1,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
    color: '#2c3e50',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  dropdown: {
    position: 'absolute',
    top: 70,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    maxHeight: 250,
    zIndex: 1000,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  dropdownList: {
    padding: 4,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    gap: 12,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 4,
  },
  productDetails: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  quantityContainer: {
    width: 100,
  },
  quantityInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    textAlign: 'center',
  },
  removeButton: {
    backgroundColor: '#e74c3c',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  removeButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  resultsSection: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  resultsList: {
    gap: 12,
    marginTop: 12,
  },
  resultCard: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  storeHeader: {
    flex: 1,
  },
  storeName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 4,
  },
  storeDetails: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  priceContainer: {
    backgroundColor: '#2e7d32',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
  emptyResults: {
    padding: 32,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
  },
});
