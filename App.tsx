import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Picker } from '@react-native-picker/picker';
import { products, stores, prices } from './src/data/mockData';
import { Product, Store, PriceEntry } from './src/types';
import ShoppingCart from './src/components/ShoppingCart';

interface SelectedItem {
  id: string;
  quantity: number;
}

export default function App() {
  // State management for shopping cart and filters
  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>('הכל');
  const [selectedCity, setSelectedCity] = useState<string>('הכל');
  const [selectedStoreIds, setSelectedStoreIds] = useState<string[]>([]);

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

  // סינון לפי חנויות ספציפיות אם נבחרו
  let finalFilteredStores = filteredStores;
  if (selectedStoreIds.length > 0) {
    finalFilteredStores = filteredStores.filter(store => selectedStoreIds.includes(store.id));
  }

  const handleRegionChange = (newRegion: string) => {
    setSelectedRegion(newRegion);
    setSelectedCity('הכל');
    setSelectedStoreIds([]);
  };

  const handleCityChange = (newCity: string) => {
    setSelectedCity(newCity);
    setSelectedStoreIds([]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header with gradient */}
      <LinearGradient
        colors={['#667eea', '#764ba2']}
        style={styles.header}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={styles.title}>🛒 השוואת מחירי מזון</Text>

        <View style={styles.filtersContainer}>
          <View style={styles.filterRow}>
            <Text style={styles.filterLabel}>📍 אזור:</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={selectedRegion}
                onValueChange={handleRegionChange}
                style={styles.picker}
              >
                {regions.map(region => (
                  <Picker.Item key={region} label={region} value={region} />
                ))}
              </Picker>
            </View>
          </View>

          <View style={styles.filterRow}>
            <Text style={styles.filterLabel}>🏙️ עיר:</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={selectedCity}
                onValueChange={handleCityChange}
                style={styles.picker}
              >
                {availableCities.map(city => (
                  <Picker.Item key={city} label={city} value={city} />
                ))}
              </Picker>
            </View>
          </View>

          <View style={styles.storeCount}>
            <Text style={styles.storeCountText}>
              🏪 {filteredStores.length} חנויות
            </Text>
          </View>
        </View>
      </LinearGradient>

      {/* Main Content */}
      <ScrollView style={styles.content}>
        <ShoppingCart
          products={products}
          stores={finalFilteredStores}
          prices={prices}
          selectedItems={selectedItems}
          onUpdateItems={setSelectedItems}
          allStores={stores}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    padding: 24,
    paddingBottom: 20,
    elevation: 8,
    shadowColor: '#667eea',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: 'white',
    marginBottom: 20,
    textAlign: 'right',
    writingDirection: 'rtl',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
    letterSpacing: 0.5,
  },
  filtersContainer: {
    gap: 14,
  },
  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 12,
  },
  filterLabel: {
    fontSize: 17,
    fontWeight: '700',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.15)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  pickerContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 0,
    minWidth: 160,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  picker: {
    height: 50,
  },
  storeCount: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 25,
    alignSelf: 'flex-end',
    marginTop: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  storeCountText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  content: {
    flex: 1,
  },
});
