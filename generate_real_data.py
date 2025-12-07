# -*- coding: utf-8 -*-
"""
Real Data Generator for Israeli Grocery Comparison App
Generates realistic store and product data based on actual Israeli grocery chains
"""
import json
import sys
import random
from datetime import datetime

if sys.platform == 'win32':
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# Real Israeli cities and regions
ISRAELI_CITIES = {
    'מרכז': [
        'תל אביב-יפו', 'רמת גן', 'גבעתיים', 'בני ברק', 'הרצליה', 'רעננה',
        'כפר סבא', 'הוד השרון', 'ראש העין', 'פתח תקווה', 'ראשון לציון',
        'רחובות', 'נס ציונה', 'רמלה', 'לוד', 'מודיעין-מכבים-רעות'
    ],
    'ירושלים': [
        'ירושלים', 'בית שמש', 'מבשרת ציון', 'מעלה אדומים'
    ],
    'צפון': [
        'חיפה', 'נהריה', 'עכו', 'קריות', 'נצרת', 'עפולה', 'כרמיאל',
        'צפת', 'טבריה', 'קצרין', 'מגדל העמק', 'נוף הגליל'
    ],
    'דרום': [
        'באר שבע', 'אשדוד', 'אשקלון', 'קריית גת', 'נתיבות', 'אופקים',
        'דימונה', 'ערד', 'אילת', 'שדרות'
    ],
    'יהודה ושומרון': [
        'אריאל', 'מעלה אדומים', 'ביתר עילית', 'גוש עציון', 'אפרת'
    ]
}

# Real grocery chains in Israel
CHAINS = {
    'שופרסל': {
        'types': ['שופרסל דיל', 'שופרסל אקספרס', 'שופרסל שלי'],
        'color': '#e31e24'
    },
    'רמי לוי': {
        'types': ['רמי לוי שיווק השקמה', 'רמי לוי פארק'],
        'color': '#0066cc'
    },
    'ויקטורי': {
        'types': ['ויקטורי'],
        'color': '#ff6600'
    },
    'מגא': {
        'types': ['מגא בעיר', 'מגא בול', 'מגא ספורט'],
        'color': '#009900'
    },
    'יינות ביתן': {
        'types': ['יינות ביתן'],
        'color': '#8b0000'
    },
    'אושר עד': {
        'types': ['אושר עד'],
        'color': '#ff0000'
    },
    'חצי חינם': {
        'types': ['חצי חינם'],
        'color': '#ff9900'
    },
    'יוחננוף': {
        'types': ['יוחננוף'],
        'color': '#0033cc'
    },
    'סופר פארם': {
        'types': ['סופר פארם'],
        'color': '#cc0066'
    }
}

# Common street names in Israel
STREET_NAMES = [
    'דיזנגוף', 'אלנבי', 'רוטשילד', 'בן יהודה', 'הרצל', 'ויצמן', 'בגין',
    'ז\'בוטינסקי', 'בן גוריון', 'רבין', 'יפו', 'המלך ג\'ורג\'', 'שינקין',
    'ארלוזורוב', 'נורדאו', 'שדרות ירושלים', 'דרך השלום', 'רחוב העצמאות',
    'כביש בר אילן', 'דרך חברון', 'שדרות בן צבי'
]

def generate_stores(num_stores=150):
    """Generate realistic store data"""
    stores = []
    store_id = 1

    for region, cities in ISRAELI_CITIES.items():
        for city in cities:
            # Each city gets 1-3 stores from different chains
            num_stores_in_city = random.randint(1, 3)
            selected_chains = random.sample(list(CHAINS.keys()), min(num_stores_in_city, len(CHAINS)))

            for chain in selected_chains:
                chain_info = CHAINS[chain]
                store_type = random.choice(chain_info['types'])
                street = random.choice(STREET_NAMES)
                number = random.randint(1, 200)

                store = {
                    'id': f'store-{store_id}',
                    'name': f'{store_type} {city}',
                    'chain': chain,
                    'address': f'{street} {number}, {city}',
                    'city': city,
                    'region': region
                }
                stores.append(store)
                store_id += 1

                if len(stores) >= num_stores:
                    return stores

    return stores

# Real products from Israeli supermarkets
PRODUCTS = [
    # Dairy - חלב ומוצריו
    {'id': 'milk-tnuva-3-1l', 'name': 'חלב תנובה 3%', 'category': 'מוצרי חלב', 'brand': 'תנובה', 'quantity': 1, 'unit': 'ליטר', 'avgPrice': 5.90},
    {'id': 'milk-tnuva-1-1l', 'name': 'חלב תנובה 1%', 'category': 'מוצרי חלב', 'brand': 'תנובה', 'quantity': 1, 'unit': 'ליטר', 'avgPrice': 5.90},
    {'id': 'milk-tara-3-1l', 'name': 'חלב תרה 3%', 'category': 'מוצרי חלב', 'brand': 'תרה', 'quantity': 1, 'unit': 'ליטר', 'avgPrice': 5.50},
    {'id': 'cottage-tnuva-5-250g', 'name': 'קוטג\' תנובה 5%', 'category': 'מוצרי חלב', 'brand': 'תנובה', 'quantity': 250, 'unit': 'גרם', 'avgPrice': 4.90},
    {'id': 'yogurt-yoplait-150g', 'name': 'יוגורט יופלה', 'category': 'מוצרי חלב', 'brand': 'יופלה', 'quantity': 150, 'unit': 'גרם', 'avgPrice': 2.50},
    {'id': 'yellow-cheese-tnuva-200g', 'name': 'גבינה צהובה עמק', 'category': 'מוצרי חלב', 'brand': 'תנובה', 'quantity': 200, 'unit': 'גרם', 'avgPrice': 12.90},
    {'id': 'white-cheese-gad-250g', 'name': 'גבינה לבנה גד', 'category': 'מוצרי חלב', 'brand': 'גד', 'quantity': 250, 'unit': 'גרם', 'avgPrice': 8.90},
    {'id': 'butter-tnuva-200g', 'name': 'חמאה תנובה', 'category': 'מוצרי חלב', 'brand': 'תנובה', 'quantity': 200, 'unit': 'גרם', 'avgPrice': 7.90},

    # Eggs - ביצים
    {'id': 'eggs-L-12', 'name': 'ביצים L', 'category': 'ביצים', 'brand': '', 'quantity': 12, 'unit': 'יחידות', 'avgPrice': 12.90},
    {'id': 'eggs-M-12', 'name': 'ביצים M', 'category': 'ביצים', 'brand': '', 'quantity': 12, 'unit': 'יחידות', 'avgPrice': 11.90},
    {'id': 'eggs-XL-12', 'name': 'ביצים XL', 'category': 'ביצים', 'brand': '', 'quantity': 12, 'unit': 'יחידות', 'avgPrice': 13.90},

    # Bread - לחם
    {'id': 'bread-white-750g', 'name': 'לחם לבן אחיד פרוס', 'category': 'לחם ומאפים', 'brand': 'אנג\'ל', 'quantity': 750, 'unit': 'גרם', 'avgPrice': 4.50},
    {'id': 'bread-whole-wheat-750g', 'name': 'לחם חיטה מלאה', 'category': 'לחם ומאפים', 'brand': 'אנג\'ל', 'quantity': 750, 'unit': 'גרם', 'avgPrice': 5.90},
    {'id': 'challah-500g', 'name': 'חלה', 'category': 'לחם ומאפים', 'brand': '', 'quantity': 500, 'unit': 'גרם', 'avgPrice': 8.90},

    # Vegetables - ירקות
    {'id': 'tomatoes-kg', 'name': 'עגבניות', 'category': 'ירקות ופירות', 'brand': '', 'quantity': 1, 'unit': 'קילו', 'avgPrice': 8.90},
    {'id': 'cucumbers-kg', 'name': 'מלפפונים', 'category': 'ירקות ופירות', 'brand': '', 'quantity': 1, 'unit': 'קילו', 'avgPrice': 6.50},
    {'id': 'peppers-red-kg', 'name': 'פלפלים אדומים', 'category': 'ירקות ופירות', 'brand': '', 'quantity': 1, 'unit': 'קילו', 'avgPrice': 12.90},
    {'id': 'onions-kg', 'name': 'בצל', 'category': 'ירקות ופירות', 'brand': '', 'quantity': 1, 'unit': 'קילו', 'avgPrice': 4.90},
    {'id': 'potatoes-kg', 'name': 'תפוחי אדמה', 'category': 'ירקות ופירות', 'brand': '', 'quantity': 1, 'unit': 'קילו', 'avgPrice': 5.50},
    {'id': 'carrots-kg', 'name': 'גזר', 'category': 'ירקות ופירות', 'brand': '', 'quantity': 1, 'unit': 'קילו', 'avgPrice': 4.90},
    {'id': 'lettuce-unit', 'name': 'חסה', 'category': 'ירקות ופירות', 'brand': '', 'quantity': 1, 'unit': 'יחידה', 'avgPrice': 5.90},
    {'id': 'avocado-unit', 'name': 'אבוקדו', 'category': 'ירקות ופירות', 'brand': '', 'quantity': 1, 'unit': 'יחידה', 'avgPrice': 3.90},

    # Meat & Chicken - בשר ועוף
    {'id': 'chicken-breast-kg', 'name': 'חזה עוף טרי', 'category': 'בשר ועוף', 'brand': 'עוף טוב', 'quantity': 1, 'unit': 'קילו', 'avgPrice': 39.90},
    {'id': 'chicken-thighs-kg', 'name': 'שוקיים עוף', 'category': 'בשר ועוף', 'brand': 'עוף טוב', 'quantity': 1, 'unit': 'קילו', 'avgPrice': 29.90},
    {'id': 'ground-beef-500g', 'name': 'בשר טחון בקר', 'category': 'בשר ועוף', 'brand': '', 'quantity': 500, 'unit': 'גרם', 'avgPrice': 32.90},

    # Pantry - מזווה
    {'id': 'rice-white-1kg', 'name': 'אורז לבן', 'category': 'מוצרי יסוד', 'brand': 'סוגת', 'quantity': 1, 'unit': 'קילו', 'avgPrice': 7.90},
    {'id': 'pasta-500g', 'name': 'פסטה', 'category': 'מוצרי יסוד', 'brand': 'אסם', 'quantity': 500, 'unit': 'גרם', 'avgPrice': 4.50},
    {'id': 'flour-1kg', 'name': 'קמח לבן', 'category': 'מוצרי יסוד', 'brand': 'הכרם', 'quantity': 1, 'unit': 'קילו', 'avgPrice': 5.90},
    {'id': 'sugar-1kg', 'name': 'סוכר לבן', 'category': 'מוצרי יסוד', 'brand': 'סוכר הדקל', 'quantity': 1, 'unit': 'קילו', 'avgPrice': 4.50},
    {'id': 'oil-sunflower-1l', 'name': 'שמן חמניות', 'category': 'מוצרי יסוד', 'brand': 'עין הד', 'quantity': 1, 'unit': 'ליטר', 'avgPrice': 9.90},
    {'id': 'olive-oil-1l', 'name': 'שמן זית', 'category': 'מוצרי יסוד', 'brand': 'זית ראשון', 'quantity': 1, 'unit': 'ליטר', 'avgPrice': 24.90},

    # Canned goods - שימורים
    {'id': 'tuna-can-160g', 'name': 'טונה בשמן', 'category': 'שימורים', 'brand': 'סטארקיסט', 'quantity': 160, 'unit': 'גרם', 'avgPrice': 6.90},
    {'id': 'corn-can-340g', 'name': 'תירס שלם', 'category': 'שימורים', 'brand': 'פרינס', 'quantity': 340, 'unit': 'גרם', 'avgPrice': 4.50},
    {'id': 'chickpeas-can-540g', 'name': 'חומוס מבושל', 'category': 'שימורים', 'brand': 'הרדוף', 'quantity': 540, 'unit': 'גרם', 'avgPrice': 5.90},
    {'id': 'tomato-paste-580g', 'name': 'רסק עגבניות', 'category': 'שימורים', 'brand': 'פרינס', 'quantity': 580, 'unit': 'גרם', 'avgPrice': 4.90},

    # Snacks - חטיפים
    {'id': 'bamba-120g', 'name': 'במבה', 'category': 'חטיפים', 'brand': 'אסם', 'quantity': 120, 'unit': 'גרם', 'avgPrice': 5.90},
    {'id': 'bisli-70g', 'name': 'ביסלי', 'category': 'חטיפים', 'brand': 'אסם', 'quantity': 70, 'unit': 'גרם', 'avgPrice': 4.50},
    {'id': 'chips-160g', 'name': 'תפוצ\'יפס', 'category': 'חטיפים', 'brand': 'אסם', 'quantity': 160, 'unit': 'גרם', 'avgPrice': 8.90},

    # Drinks - משקאות
    {'id': 'water-6pack-1.5l', 'name': 'מים מינרליים', 'category': 'משקאות', 'brand': 'נביעות', 'quantity': 9, 'unit': 'ליטר', 'avgPrice': 12.90},
    {'id': 'cola-2l', 'name': 'קוקה קולה', 'category': 'משקאות', 'brand': 'קוקה קולה', 'quantity': 2, 'unit': 'ליטר', 'avgPrice': 7.90},
    {'id': 'orange-juice-1l', 'name': 'מיץ תפוזים טבעי', 'category': 'משקאות', 'brand': 'פריגת', 'quantity': 1, 'unit': 'ליטר', 'avgPrice': 8.90}
]

def generate_prices(stores, products):
    """Generate realistic price variations across stores"""
    prices = []

    for product in products:
        base_price = product['avgPrice']

        for store in stores:
            # Different chains have different pricing strategies
            chain = store['chain']

            # Price variation by chain
            if chain == 'רמי לוי' or chain == 'אושר עד':
                # Discount chains - 5-15% cheaper
                multiplier = random.uniform(0.85, 0.95)
            elif chain == 'יינות ביתן' or chain == 'סופר פארם':
                # Premium chains - 5-10% more expensive
                multiplier = random.uniform(1.05, 1.10)
            else:
                # Regular chains - slight variation
                multiplier = random.uniform(0.95, 1.05)

            # Add some random regional variation
            if store['region'] == 'ירושלים' or store['region'] == 'צפון':
                multiplier *= random.uniform(1.00, 1.05)

            final_price = round(base_price * multiplier, 2)

            # Randomly add sale prices (20% of products on sale)
            sale_price = None
            if random.random() < 0.2:
                sale_price = round(final_price * random.uniform(0.7, 0.9), 2)

            price_entry = {
                'productId': product['id'],
                'storeId': store['id'],
                'price': final_price
            }

            if sale_price:
                price_entry['salePrice'] = sale_price

            prices.append(price_entry)

    return prices

def save_to_typescript(stores, products, prices):
    """Save data to TypeScript file"""

    # Create TypeScript content
    ts_content = """// Auto-generated realistic data for Israeli grocery stores
// Generated on: {timestamp}
// This data is based on real Israeli grocery chains and typical prices

export interface Product {{
  id: string;
  name: string;
  category: string;
  brand?: string;
  quantity: number;
  unit: string;
  image?: string;
}}

export interface Store {{
  id: string;
  name: string;
  chain: string;
  address: string;
  city: string;
  region: string;
}}

export interface Price {{
  productId: string;
  storeId: string;
  price: number;
  salePrice?: number;
}}

export const products: Product[] = {products};

export const stores: Store[] = {stores};

export const prices: Price[] = {prices};
""".format(
        timestamp=datetime.now().isoformat(),
        products=json.dumps(products, ensure_ascii=False, indent=2),
        stores=json.dumps(stores, ensure_ascii=False, indent=2),
        prices=json.dumps(prices, ensure_ascii=False, indent=2)
    )

    with open('src/data/mockData.ts', 'w', encoding='utf-8') as f:
        f.write(ts_content)

def main():
    print("🛒 Generating realistic Israeli grocery data...")
    print()

    # Generate data
    print("📍 Generating stores from real Israeli chains...")
    stores = generate_stores(150)
    print(f"   ✓ Generated {len(stores)} stores")

    print("🛍️  Using real product list...")
    products = PRODUCTS
    print(f"   ✓ {len(products)} products")

    print("💰 Generating realistic prices...")
    prices = generate_prices(stores, products)
    print(f"   ✓ Generated {len(prices)} price entries")

    print()
    print("💾 Saving to TypeScript file...")
    save_to_typescript(stores, products, prices)
    print("   ✓ Saved to src/data/mockData.ts")

    print()
    print("✅ Data generation complete!")
    print()
    print("📊 Summary:")
    print(f"   • {len(stores)} stores across {len(set(s['city'] for s in stores))} cities")
    print(f"   • {len(set(s['chain'] for s in stores))} different chains")
    print(f"   • {len(products)} products")
    print(f"   • {len(prices)} price entries")
    print()
    print("⚠️  Note: Prices are realistic estimates and should be verified with actual sources")

if __name__ == '__main__':
    main()
