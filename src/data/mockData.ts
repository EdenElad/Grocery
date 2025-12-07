// Auto-generated realistic data for Israeli grocery stores
// Generated on: 2025-12-07T23:47:34.606024
// This data is based on real Israeli grocery chains and typical prices

export interface Product {
  id: string;
  name: string;
  category: string;
  brand?: string;
  quantity: number;
  unit: string;
  image?: string;
}

export interface Store {
  id: string;
  name: string;
  chain: string;
  address: string;
  city: string;
  region: string;
}

export interface Price {
  productId: string;
  storeId: string;
  price: number;
  salePrice?: number;
}

export const products: Product[] = [
  {
    "id": "milk-tnuva-3-1l",
    "name": "חלב תנובה 3%",
    "category": "מוצרי חלב",
    "brand": "תנובה",
    "quantity": 1,
    "unit": "ליטר",
    "avgPrice": 5.9
  },
  {
    "id": "milk-tnuva-1-1l",
    "name": "חלב תנובה 1%",
    "category": "מוצרי חלב",
    "brand": "תנובה",
    "quantity": 1,
    "unit": "ליטר",
    "avgPrice": 5.9
  },
  {
    "id": "milk-tara-3-1l",
    "name": "חלב תרה 3%",
    "category": "מוצרי חלב",
    "brand": "תרה",
    "quantity": 1,
    "unit": "ליטר",
    "avgPrice": 5.5
  },
  {
    "id": "cottage-tnuva-5-250g",
    "name": "קוטג' תנובה 5%",
    "category": "מוצרי חלב",
    "brand": "תנובה",
    "quantity": 250,
    "unit": "גרם",
    "avgPrice": 4.9
  },
  {
    "id": "yogurt-yoplait-150g",
    "name": "יוגורט יופלה",
    "category": "מוצרי חלב",
    "brand": "יופלה",
    "quantity": 150,
    "unit": "גרם",
    "avgPrice": 2.5
  },
  {
    "id": "yellow-cheese-tnuva-200g",
    "name": "גבינה צהובה עמק",
    "category": "מוצרי חלב",
    "brand": "תנובה",
    "quantity": 200,
    "unit": "גרם",
    "avgPrice": 12.9
  },
  {
    "id": "white-cheese-gad-250g",
    "name": "גבינה לבנה גד",
    "category": "מוצרי חלב",
    "brand": "גד",
    "quantity": 250,
    "unit": "גרם",
    "avgPrice": 8.9
  },
  {
    "id": "butter-tnuva-200g",
    "name": "חמאה תנובה",
    "category": "מוצרי חלב",
    "brand": "תנובה",
    "quantity": 200,
    "unit": "גרם",
    "avgPrice": 7.9
  },
  {
    "id": "eggs-L-12",
    "name": "ביצים L",
    "category": "ביצים",
    "brand": "",
    "quantity": 12,
    "unit": "יחידות",
    "avgPrice": 12.9
  },
  {
    "id": "eggs-M-12",
    "name": "ביצים M",
    "category": "ביצים",
    "brand": "",
    "quantity": 12,
    "unit": "יחידות",
    "avgPrice": 11.9
  },
  {
    "id": "eggs-XL-12",
    "name": "ביצים XL",
    "category": "ביצים",
    "brand": "",
    "quantity": 12,
    "unit": "יחידות",
    "avgPrice": 13.9
  },
  {
    "id": "bread-white-750g",
    "name": "לחם לבן אחיד פרוס",
    "category": "לחם ומאפים",
    "brand": "אנג'ל",
    "quantity": 750,
    "unit": "גרם",
    "avgPrice": 4.5
  },
  {
    "id": "bread-whole-wheat-750g",
    "name": "לחם חיטה מלאה",
    "category": "לחם ומאפים",
    "brand": "אנג'ל",
    "quantity": 750,
    "unit": "גרם",
    "avgPrice": 5.9
  },
  {
    "id": "challah-500g",
    "name": "חלה",
    "category": "לחם ומאפים",
    "brand": "",
    "quantity": 500,
    "unit": "גרם",
    "avgPrice": 8.9
  },
  {
    "id": "tomatoes-kg",
    "name": "עגבניות",
    "category": "ירקות ופירות",
    "brand": "",
    "quantity": 1,
    "unit": "קילו",
    "avgPrice": 8.9
  },
  {
    "id": "cucumbers-kg",
    "name": "מלפפונים",
    "category": "ירקות ופירות",
    "brand": "",
    "quantity": 1,
    "unit": "קילו",
    "avgPrice": 6.5
  },
  {
    "id": "peppers-red-kg",
    "name": "פלפלים אדומים",
    "category": "ירקות ופירות",
    "brand": "",
    "quantity": 1,
    "unit": "קילו",
    "avgPrice": 12.9
  },
  {
    "id": "onions-kg",
    "name": "בצל",
    "category": "ירקות ופירות",
    "brand": "",
    "quantity": 1,
    "unit": "קילו",
    "avgPrice": 4.9
  },
  {
    "id": "potatoes-kg",
    "name": "תפוחי אדמה",
    "category": "ירקות ופירות",
    "brand": "",
    "quantity": 1,
    "unit": "קילו",
    "avgPrice": 5.5
  },
  {
    "id": "carrots-kg",
    "name": "גזר",
    "category": "ירקות ופירות",
    "brand": "",
    "quantity": 1,
    "unit": "קילו",
    "avgPrice": 4.9
  },
  {
    "id": "lettuce-unit",
    "name": "חסה",
    "category": "ירקות ופירות",
    "brand": "",
    "quantity": 1,
    "unit": "יחידה",
    "avgPrice": 5.9
  },
  {
    "id": "avocado-unit",
    "name": "אבוקדו",
    "category": "ירקות ופירות",
    "brand": "",
    "quantity": 1,
    "unit": "יחידה",
    "avgPrice": 3.9
  },
  {
    "id": "chicken-breast-kg",
    "name": "חזה עוף טרי",
    "category": "בשר ועוף",
    "brand": "עוף טוב",
    "quantity": 1,
    "unit": "קילו",
    "avgPrice": 39.9
  },
  {
    "id": "chicken-thighs-kg",
    "name": "שוקיים עוף",
    "category": "בשר ועוף",
    "brand": "עוף טוב",
    "quantity": 1,
    "unit": "קילו",
    "avgPrice": 29.9
  },
  {
    "id": "ground-beef-500g",
    "name": "בשר טחון בקר",
    "category": "בשר ועוף",
    "brand": "",
    "quantity": 500,
    "unit": "גרם",
    "avgPrice": 32.9
  },
  {
    "id": "rice-white-1kg",
    "name": "אורז לבן",
    "category": "מוצרי יסוד",
    "brand": "סוגת",
    "quantity": 1,
    "unit": "קילו",
    "avgPrice": 7.9
  },
  {
    "id": "pasta-500g",
    "name": "פסטה",
    "category": "מוצרי יסוד",
    "brand": "אסם",
    "quantity": 500,
    "unit": "גרם",
    "avgPrice": 4.5
  },
  {
    "id": "flour-1kg",
    "name": "קמח לבן",
    "category": "מוצרי יסוד",
    "brand": "הכרם",
    "quantity": 1,
    "unit": "קילו",
    "avgPrice": 5.9
  },
  {
    "id": "sugar-1kg",
    "name": "סוכר לבן",
    "category": "מוצרי יסוד",
    "brand": "סוכר הדקל",
    "quantity": 1,
    "unit": "קילו",
    "avgPrice": 4.5
  },
  {
    "id": "oil-sunflower-1l",
    "name": "שמן חמניות",
    "category": "מוצרי יסוד",
    "brand": "עין הד",
    "quantity": 1,
    "unit": "ליטר",
    "avgPrice": 9.9
  },
  {
    "id": "olive-oil-1l",
    "name": "שמן זית",
    "category": "מוצרי יסוד",
    "brand": "זית ראשון",
    "quantity": 1,
    "unit": "ליטר",
    "avgPrice": 24.9
  },
  {
    "id": "tuna-can-160g",
    "name": "טונה בשמן",
    "category": "שימורים",
    "brand": "סטארקיסט",
    "quantity": 160,
    "unit": "גרם",
    "avgPrice": 6.9
  },
  {
    "id": "corn-can-340g",
    "name": "תירס שלם",
    "category": "שימורים",
    "brand": "פרינס",
    "quantity": 340,
    "unit": "גרם",
    "avgPrice": 4.5
  },
  {
    "id": "chickpeas-can-540g",
    "name": "חומוס מבושל",
    "category": "שימורים",
    "brand": "הרדוף",
    "quantity": 540,
    "unit": "גרם",
    "avgPrice": 5.9
  },
  {
    "id": "tomato-paste-580g",
    "name": "רסק עגבניות",
    "category": "שימורים",
    "brand": "פרינס",
    "quantity": 580,
    "unit": "גרם",
    "avgPrice": 4.9
  },
  {
    "id": "bamba-120g",
    "name": "במבה",
    "category": "חטיפים",
    "brand": "אסם",
    "quantity": 120,
    "unit": "גרם",
    "avgPrice": 5.9
  },
  {
    "id": "bisli-70g",
    "name": "ביסלי",
    "category": "חטיפים",
    "brand": "אסם",
    "quantity": 70,
    "unit": "גרם",
    "avgPrice": 4.5
  },
  {
    "id": "chips-160g",
    "name": "תפוצ'יפס",
    "category": "חטיפים",
    "brand": "אסם",
    "quantity": 160,
    "unit": "גרם",
    "avgPrice": 8.9
  },
  {
    "id": "water-6pack-1.5l",
    "name": "מים מינרליים",
    "category": "משקאות",
    "brand": "נביעות",
    "quantity": 9,
    "unit": "ליטר",
    "avgPrice": 12.9
  },
  {
    "id": "cola-2l",
    "name": "קוקה קולה",
    "category": "משקאות",
    "brand": "קוקה קולה",
    "quantity": 2,
    "unit": "ליטר",
    "avgPrice": 7.9
  },
  {
    "id": "orange-juice-1l",
    "name": "מיץ תפוזים טבעי",
    "category": "משקאות",
    "brand": "פריגת",
    "quantity": 1,
    "unit": "ליטר",
    "avgPrice": 8.9
  }
];

export const stores: Store[] = [
  {
    "id": "store-1",
    "name": "רמי לוי שיווק השקמה תל אביב-יפו",
    "chain": "רמי לוי",
    "address": "אלנבי 28, תל אביב-יפו",
    "city": "תל אביב-יפו",
    "region": "מרכז"
  },
  {
    "id": "store-2",
    "name": "יוחננוף תל אביב-יפו",
    "chain": "יוחננוף",
    "address": "יפו 81, תל אביב-יפו",
    "city": "תל אביב-יפו",
    "region": "מרכז"
  },
  {
    "id": "store-3",
    "name": "ויקטורי רמת גן",
    "chain": "ויקטורי",
    "address": "ויצמן 54, רמת גן",
    "city": "רמת גן",
    "region": "מרכז"
  },
  {
    "id": "store-4",
    "name": "שופרסל אקספרס רמת גן",
    "chain": "שופרסל",
    "address": "המלך ג'ורג' 164, רמת גן",
    "city": "רמת גן",
    "region": "מרכז"
  },
  {
    "id": "store-5",
    "name": "רמי לוי שיווק השקמה רמת גן",
    "chain": "רמי לוי",
    "address": "ויצמן 137, רמת גן",
    "city": "רמת גן",
    "region": "מרכז"
  },
  {
    "id": "store-6",
    "name": "אושר עד גבעתיים",
    "chain": "אושר עד",
    "address": "ויצמן 75, גבעתיים",
    "city": "גבעתיים",
    "region": "מרכז"
  },
  {
    "id": "store-7",
    "name": "חצי חינם גבעתיים",
    "chain": "חצי חינם",
    "address": "שדרות ירושלים 143, גבעתיים",
    "city": "גבעתיים",
    "region": "מרכז"
  },
  {
    "id": "store-8",
    "name": "ויקטורי גבעתיים",
    "chain": "ויקטורי",
    "address": "הרצל 185, גבעתיים",
    "city": "גבעתיים",
    "region": "מרכז"
  },
  {
    "id": "store-9",
    "name": "שופרסל דיל בני ברק",
    "chain": "שופרסל",
    "address": "בן יהודה 200, בני ברק",
    "city": "בני ברק",
    "region": "מרכז"
  },
  {
    "id": "store-10",
    "name": "חצי חינם בני ברק",
    "chain": "חצי חינם",
    "address": "ז'בוטינסקי 182, בני ברק",
    "city": "בני ברק",
    "region": "מרכז"
  },
  {
    "id": "store-11",
    "name": "סופר פארם הרצליה",
    "chain": "סופר פארם",
    "address": "ויצמן 41, הרצליה",
    "city": "הרצליה",
    "region": "מרכז"
  },
  {
    "id": "store-12",
    "name": "יוחננוף הרצליה",
    "chain": "יוחננוף",
    "address": "המלך ג'ורג' 34, הרצליה",
    "city": "הרצליה",
    "region": "מרכז"
  },
  {
    "id": "store-13",
    "name": "יוחננוף רעננה",
    "chain": "יוחננוף",
    "address": "רבין 73, רעננה",
    "city": "רעננה",
    "region": "מרכז"
  },
  {
    "id": "store-14",
    "name": "אושר עד רעננה",
    "chain": "אושר עד",
    "address": "ויצמן 45, רעננה",
    "city": "רעננה",
    "region": "מרכז"
  },
  {
    "id": "store-15",
    "name": "ויקטורי רעננה",
    "chain": "ויקטורי",
    "address": "דרך השלום 125, רעננה",
    "city": "רעננה",
    "region": "מרכז"
  },
  {
    "id": "store-16",
    "name": "יינות ביתן כפר סבא",
    "chain": "יינות ביתן",
    "address": "שדרות ירושלים 94, כפר סבא",
    "city": "כפר סבא",
    "region": "מרכז"
  },
  {
    "id": "store-17",
    "name": "אושר עד כפר סבא",
    "chain": "אושר עד",
    "address": "בן גוריון 155, כפר סבא",
    "city": "כפר סבא",
    "region": "מרכז"
  },
  {
    "id": "store-18",
    "name": "ויקטורי כפר סבא",
    "chain": "ויקטורי",
    "address": "ארלוזורוב 52, כפר סבא",
    "city": "כפר סבא",
    "region": "מרכז"
  },
  {
    "id": "store-19",
    "name": "שופרסל דיל הוד השרון",
    "chain": "שופרסל",
    "address": "ארלוזורוב 20, הוד השרון",
    "city": "הוד השרון",
    "region": "מרכז"
  },
  {
    "id": "store-20",
    "name": "סופר פארם הוד השרון",
    "chain": "סופר פארם",
    "address": "הרצל 98, הוד השרון",
    "city": "הוד השרון",
    "region": "מרכז"
  },
  {
    "id": "store-21",
    "name": "מגא בעיר הוד השרון",
    "chain": "מגא",
    "address": "ויצמן 160, הוד השרון",
    "city": "הוד השרון",
    "region": "מרכז"
  },
  {
    "id": "store-22",
    "name": "חצי חינם ראש העין",
    "chain": "חצי חינם",
    "address": "יפו 174, ראש העין",
    "city": "ראש העין",
    "region": "מרכז"
  },
  {
    "id": "store-23",
    "name": "סופר פארם ראש העין",
    "chain": "סופר פארם",
    "address": "ארלוזורוב 176, ראש העין",
    "city": "ראש העין",
    "region": "מרכז"
  },
  {
    "id": "store-24",
    "name": "מגא בעיר ראש העין",
    "chain": "מגא",
    "address": "ארלוזורוב 5, ראש העין",
    "city": "ראש העין",
    "region": "מרכז"
  },
  {
    "id": "store-25",
    "name": "חצי חינם פתח תקווה",
    "chain": "חצי חינם",
    "address": "שינקין 48, פתח תקווה",
    "city": "פתח תקווה",
    "region": "מרכז"
  },
  {
    "id": "store-26",
    "name": "אושר עד פתח תקווה",
    "chain": "אושר עד",
    "address": "הרצל 14, פתח תקווה",
    "city": "פתח תקווה",
    "region": "מרכז"
  },
  {
    "id": "store-27",
    "name": "יינות ביתן פתח תקווה",
    "chain": "יינות ביתן",
    "address": "יפו 141, פתח תקווה",
    "city": "פתח תקווה",
    "region": "מרכז"
  },
  {
    "id": "store-28",
    "name": "מגא ספורט ראשון לציון",
    "chain": "מגא",
    "address": "בן יהודה 86, ראשון לציון",
    "city": "ראשון לציון",
    "region": "מרכז"
  },
  {
    "id": "store-29",
    "name": "יינות ביתן רחובות",
    "chain": "יינות ביתן",
    "address": "הרצל 131, רחובות",
    "city": "רחובות",
    "region": "מרכז"
  },
  {
    "id": "store-30",
    "name": "ויקטורי נס ציונה",
    "chain": "ויקטורי",
    "address": "שדרות בן צבי 42, נס ציונה",
    "city": "נס ציונה",
    "region": "מרכז"
  },
  {
    "id": "store-31",
    "name": "מגא בול נס ציונה",
    "chain": "מגא",
    "address": "רוטשילד 120, נס ציונה",
    "city": "נס ציונה",
    "region": "מרכז"
  },
  {
    "id": "store-32",
    "name": "רמי לוי פארק נס ציונה",
    "chain": "רמי לוי",
    "address": "נורדאו 194, נס ציונה",
    "city": "נס ציונה",
    "region": "מרכז"
  },
  {
    "id": "store-33",
    "name": "ויקטורי רמלה",
    "chain": "ויקטורי",
    "address": "דיזנגוף 47, רמלה",
    "city": "רמלה",
    "region": "מרכז"
  },
  {
    "id": "store-34",
    "name": "חצי חינם לוד",
    "chain": "חצי חינם",
    "address": "כביש בר אילן 189, לוד",
    "city": "לוד",
    "region": "מרכז"
  },
  {
    "id": "store-35",
    "name": "יינות ביתן לוד",
    "chain": "יינות ביתן",
    "address": "ז'בוטינסקי 87, לוד",
    "city": "לוד",
    "region": "מרכז"
  },
  {
    "id": "store-36",
    "name": "ויקטורי לוד",
    "chain": "ויקטורי",
    "address": "הרצל 138, לוד",
    "city": "לוד",
    "region": "מרכז"
  },
  {
    "id": "store-37",
    "name": "ויקטורי מודיעין-מכבים-רעות",
    "chain": "ויקטורי",
    "address": "רחוב העצמאות 102, מודיעין-מכבים-רעות",
    "city": "מודיעין-מכבים-רעות",
    "region": "מרכז"
  },
  {
    "id": "store-38",
    "name": "שופרסל דיל מודיעין-מכבים-רעות",
    "chain": "שופרסל",
    "address": "אלנבי 27, מודיעין-מכבים-רעות",
    "city": "מודיעין-מכבים-רעות",
    "region": "מרכז"
  },
  {
    "id": "store-39",
    "name": "ויקטורי ירושלים",
    "chain": "ויקטורי",
    "address": "ויצמן 122, ירושלים",
    "city": "ירושלים",
    "region": "ירושלים"
  },
  {
    "id": "store-40",
    "name": "מגא בול ירושלים",
    "chain": "מגא",
    "address": "הרצל 160, ירושלים",
    "city": "ירושלים",
    "region": "ירושלים"
  },
  {
    "id": "store-41",
    "name": "חצי חינם ירושלים",
    "chain": "חצי חינם",
    "address": "הרצל 177, ירושלים",
    "city": "ירושלים",
    "region": "ירושלים"
  },
  {
    "id": "store-42",
    "name": "מגא ספורט בית שמש",
    "chain": "מגא",
    "address": "ארלוזורוב 188, בית שמש",
    "city": "בית שמש",
    "region": "ירושלים"
  },
  {
    "id": "store-43",
    "name": "שופרסל שלי מבשרת ציון",
    "chain": "שופרסל",
    "address": "דיזנגוף 102, מבשרת ציון",
    "city": "מבשרת ציון",
    "region": "ירושלים"
  },
  {
    "id": "store-44",
    "name": "יינות ביתן מבשרת ציון",
    "chain": "יינות ביתן",
    "address": "רוטשילד 2, מבשרת ציון",
    "city": "מבשרת ציון",
    "region": "ירושלים"
  },
  {
    "id": "store-45",
    "name": "סופר פארם מעלה אדומים",
    "chain": "סופר פארם",
    "address": "רוטשילד 22, מעלה אדומים",
    "city": "מעלה אדומים",
    "region": "ירושלים"
  },
  {
    "id": "store-46",
    "name": "אושר עד חיפה",
    "chain": "אושר עד",
    "address": "שדרות ירושלים 49, חיפה",
    "city": "חיפה",
    "region": "צפון"
  },
  {
    "id": "store-47",
    "name": "מגא בעיר חיפה",
    "chain": "מגא",
    "address": "שינקין 61, חיפה",
    "city": "חיפה",
    "region": "צפון"
  },
  {
    "id": "store-48",
    "name": "רמי לוי שיווק השקמה נהריה",
    "chain": "רמי לוי",
    "address": "רחוב העצמאות 149, נהריה",
    "city": "נהריה",
    "region": "צפון"
  },
  {
    "id": "store-49",
    "name": "סופר פארם נהריה",
    "chain": "סופר פארם",
    "address": "בגין 168, נהריה",
    "city": "נהריה",
    "region": "צפון"
  },
  {
    "id": "store-50",
    "name": "שופרסל דיל עכו",
    "chain": "שופרסל",
    "address": "דיזנגוף 182, עכו",
    "city": "עכו",
    "region": "צפון"
  },
  {
    "id": "store-51",
    "name": "שופרסל אקספרס קריות",
    "chain": "שופרסל",
    "address": "כביש בר אילן 145, קריות",
    "city": "קריות",
    "region": "צפון"
  },
  {
    "id": "store-52",
    "name": "ויקטורי קריות",
    "chain": "ויקטורי",
    "address": "שינקין 42, קריות",
    "city": "קריות",
    "region": "צפון"
  },
  {
    "id": "store-53",
    "name": "רמי לוי שיווק השקמה קריות",
    "chain": "רמי לוי",
    "address": "רבין 135, קריות",
    "city": "קריות",
    "region": "צפון"
  },
  {
    "id": "store-54",
    "name": "יוחננוף נצרת",
    "chain": "יוחננוף",
    "address": "ז'בוטינסקי 199, נצרת",
    "city": "נצרת",
    "region": "צפון"
  },
  {
    "id": "store-55",
    "name": "אושר עד עפולה",
    "chain": "אושר עד",
    "address": "ויצמן 2, עפולה",
    "city": "עפולה",
    "region": "צפון"
  },
  {
    "id": "store-56",
    "name": "סופר פארם עפולה",
    "chain": "סופר פארם",
    "address": "המלך ג'ורג' 86, עפולה",
    "city": "עפולה",
    "region": "צפון"
  },
  {
    "id": "store-57",
    "name": "ויקטורי כרמיאל",
    "chain": "ויקטורי",
    "address": "דיזנגוף 46, כרמיאל",
    "city": "כרמיאל",
    "region": "צפון"
  },
  {
    "id": "store-58",
    "name": "יוחננוף כרמיאל",
    "chain": "יוחננוף",
    "address": "בן גוריון 149, כרמיאל",
    "city": "כרמיאל",
    "region": "צפון"
  },
  {
    "id": "store-59",
    "name": "שופרסל דיל צפת",
    "chain": "שופרסל",
    "address": "דרך השלום 102, צפת",
    "city": "צפת",
    "region": "צפון"
  },
  {
    "id": "store-60",
    "name": "יינות ביתן צפת",
    "chain": "יינות ביתן",
    "address": "רבין 160, צפת",
    "city": "צפת",
    "region": "צפון"
  },
  {
    "id": "store-61",
    "name": "סופר פארם צפת",
    "chain": "סופר פארם",
    "address": "שדרות בן צבי 153, צפת",
    "city": "צפת",
    "region": "צפון"
  },
  {
    "id": "store-62",
    "name": "יינות ביתן טבריה",
    "chain": "יינות ביתן",
    "address": "ז'בוטינסקי 82, טבריה",
    "city": "טבריה",
    "region": "צפון"
  },
  {
    "id": "store-63",
    "name": "יוחננוף קצרין",
    "chain": "יוחננוף",
    "address": "הרצל 73, קצרין",
    "city": "קצרין",
    "region": "צפון"
  },
  {
    "id": "store-64",
    "name": "סופר פארם קצרין",
    "chain": "סופר פארם",
    "address": "ז'בוטינסקי 100, קצרין",
    "city": "קצרין",
    "region": "צפון"
  },
  {
    "id": "store-65",
    "name": "אושר עד מגדל העמק",
    "chain": "אושר עד",
    "address": "בן גוריון 170, מגדל העמק",
    "city": "מגדל העמק",
    "region": "צפון"
  },
  {
    "id": "store-66",
    "name": "רמי לוי פארק מגדל העמק",
    "chain": "רמי לוי",
    "address": "רוטשילד 42, מגדל העמק",
    "city": "מגדל העמק",
    "region": "צפון"
  },
  {
    "id": "store-67",
    "name": "יינות ביתן נוף הגליל",
    "chain": "יינות ביתן",
    "address": "דרך חברון 180, נוף הגליל",
    "city": "נוף הגליל",
    "region": "צפון"
  },
  {
    "id": "store-68",
    "name": "שופרסל שלי נוף הגליל",
    "chain": "שופרסל",
    "address": "המלך ג'ורג' 166, נוף הגליל",
    "city": "נוף הגליל",
    "region": "צפון"
  },
  {
    "id": "store-69",
    "name": "יוחננוף באר שבע",
    "chain": "יוחננוף",
    "address": "יפו 99, באר שבע",
    "city": "באר שבע",
    "region": "דרום"
  },
  {
    "id": "store-70",
    "name": "ויקטורי אשדוד",
    "chain": "ויקטורי",
    "address": "רחוב העצמאות 40, אשדוד",
    "city": "אשדוד",
    "region": "דרום"
  },
  {
    "id": "store-71",
    "name": "יינות ביתן אשדוד",
    "chain": "יינות ביתן",
    "address": "בגין 75, אשדוד",
    "city": "אשדוד",
    "region": "דרום"
  },
  {
    "id": "store-72",
    "name": "יוחננוף אשקלון",
    "chain": "יוחננוף",
    "address": "בן יהודה 153, אשקלון",
    "city": "אשקלון",
    "region": "דרום"
  },
  {
    "id": "store-73",
    "name": "ויקטורי אשקלון",
    "chain": "ויקטורי",
    "address": "שדרות בן צבי 173, אשקלון",
    "city": "אשקלון",
    "region": "דרום"
  },
  {
    "id": "store-74",
    "name": "יינות ביתן קריית גת",
    "chain": "יינות ביתן",
    "address": "רחוב העצמאות 83, קריית גת",
    "city": "קריית גת",
    "region": "דרום"
  },
  {
    "id": "store-75",
    "name": "שופרסל אקספרס קריית גת",
    "chain": "שופרסל",
    "address": "שדרות בן צבי 50, קריית גת",
    "city": "קריית גת",
    "region": "דרום"
  },
  {
    "id": "store-76",
    "name": "חצי חינם קריית גת",
    "chain": "חצי חינם",
    "address": "שדרות בן צבי 170, קריית גת",
    "city": "קריית גת",
    "region": "דרום"
  },
  {
    "id": "store-77",
    "name": "שופרסל דיל נתיבות",
    "chain": "שופרסל",
    "address": "הרצל 195, נתיבות",
    "city": "נתיבות",
    "region": "דרום"
  },
  {
    "id": "store-78",
    "name": "יוחננוף נתיבות",
    "chain": "יוחננוף",
    "address": "נורדאו 78, נתיבות",
    "city": "נתיבות",
    "region": "דרום"
  },
  {
    "id": "store-79",
    "name": "חצי חינם אופקים",
    "chain": "חצי חינם",
    "address": "רבין 128, אופקים",
    "city": "אופקים",
    "region": "דרום"
  },
  {
    "id": "store-80",
    "name": "אושר עד אופקים",
    "chain": "אושר עד",
    "address": "בן יהודה 193, אופקים",
    "city": "אופקים",
    "region": "דרום"
  },
  {
    "id": "store-81",
    "name": "יינות ביתן אופקים",
    "chain": "יינות ביתן",
    "address": "ויצמן 97, אופקים",
    "city": "אופקים",
    "region": "דרום"
  },
  {
    "id": "store-82",
    "name": "יינות ביתן דימונה",
    "chain": "יינות ביתן",
    "address": "שדרות ירושלים 199, דימונה",
    "city": "דימונה",
    "region": "דרום"
  },
  {
    "id": "store-83",
    "name": "יוחננוף דימונה",
    "chain": "יוחננוף",
    "address": "ויצמן 97, דימונה",
    "city": "דימונה",
    "region": "דרום"
  },
  {
    "id": "store-84",
    "name": "שופרסל שלי ערד",
    "chain": "שופרסל",
    "address": "רבין 126, ערד",
    "city": "ערד",
    "region": "דרום"
  },
  {
    "id": "store-85",
    "name": "מגא ספורט אילת",
    "chain": "מגא",
    "address": "יפו 36, אילת",
    "city": "אילת",
    "region": "דרום"
  },
  {
    "id": "store-86",
    "name": "ויקטורי אילת",
    "chain": "ויקטורי",
    "address": "נורדאו 200, אילת",
    "city": "אילת",
    "region": "דרום"
  },
  {
    "id": "store-87",
    "name": "סופר פארם אילת",
    "chain": "סופר פארם",
    "address": "שדרות ירושלים 29, אילת",
    "city": "אילת",
    "region": "דרום"
  },
  {
    "id": "store-88",
    "name": "יוחננוף שדרות",
    "chain": "יוחננוף",
    "address": "הרצל 143, שדרות",
    "city": "שדרות",
    "region": "דרום"
  },
  {
    "id": "store-89",
    "name": "חצי חינם אריאל",
    "chain": "חצי חינם",
    "address": "ז'בוטינסקי 118, אריאל",
    "city": "אריאל",
    "region": "יהודה ושומרון"
  },
  {
    "id": "store-90",
    "name": "אושר עד מעלה אדומים",
    "chain": "אושר עד",
    "address": "נורדאו 97, מעלה אדומים",
    "city": "מעלה אדומים",
    "region": "יהודה ושומרון"
  },
  {
    "id": "store-91",
    "name": "רמי לוי שיווק השקמה ביתר עילית",
    "chain": "רמי לוי",
    "address": "המלך ג'ורג' 92, ביתר עילית",
    "city": "ביתר עילית",
    "region": "יהודה ושומרון"
  },
  {
    "id": "store-92",
    "name": "ויקטורי ביתר עילית",
    "chain": "ויקטורי",
    "address": "רבין 109, ביתר עילית",
    "city": "ביתר עילית",
    "region": "יהודה ושומרון"
  },
  {
    "id": "store-93",
    "name": "יוחננוף ביתר עילית",
    "chain": "יוחננוף",
    "address": "שדרות ירושלים 66, ביתר עילית",
    "city": "ביתר עילית",
    "region": "יהודה ושומרון"
  },
  {
    "id": "store-94",
    "name": "ויקטורי גוש עציון",
    "chain": "ויקטורי",
    "address": "ארלוזורוב 21, גוש עציון",
    "city": "גוש עציון",
    "region": "יהודה ושומרון"
  },
  {
    "id": "store-95",
    "name": "אושר עד גוש עציון",
    "chain": "אושר עד",
    "address": "שינקין 95, גוש עציון",
    "city": "גוש עציון",
    "region": "יהודה ושומרון"
  },
  {
    "id": "store-96",
    "name": "סופר פארם אפרת",
    "chain": "סופר פארם",
    "address": "דרך חברון 134, אפרת",
    "city": "אפרת",
    "region": "יהודה ושומרון"
  }
];

export const prices: Price[] = [
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-1",
    "price": 5.22,
    "salePrice": 3.82
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-2",
    "price": 5.7
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-3",
    "price": 5.86
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-4",
    "price": 6.15,
    "salePrice": 4.81
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-5",
    "price": 5.2
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-6",
    "price": 5.18
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-7",
    "price": 5.99,
    "salePrice": 5.02
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-8",
    "price": 5.77
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-9",
    "price": 6.09
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-10",
    "price": 6.08
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-11",
    "price": 6.29
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-12",
    "price": 5.68,
    "salePrice": 4.78
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-13",
    "price": 6.02,
    "salePrice": 4.39
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-14",
    "price": 5.54
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-15",
    "price": 5.87,
    "salePrice": 4.62
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-16",
    "price": 6.44
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-17",
    "price": 5.42
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-18",
    "price": 5.66
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-19",
    "price": 5.71
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-20",
    "price": 6.21
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-21",
    "price": 5.83
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-22",
    "price": 6.01
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-23",
    "price": 6.31
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-24",
    "price": 6.01
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-25",
    "price": 5.72,
    "salePrice": 4.17
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-26",
    "price": 5.28,
    "salePrice": 3.99
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-27",
    "price": 6.36
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-28",
    "price": 5.68
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-29",
    "price": 6.27,
    "salePrice": 5.3
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-30",
    "price": 5.77
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-31",
    "price": 6.11
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-32",
    "price": 5.19
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-33",
    "price": 5.8
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-34",
    "price": 5.78
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-35",
    "price": 6.29
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-36",
    "price": 6.06
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-37",
    "price": 6.03
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-38",
    "price": 5.9
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-39",
    "price": 6.16
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-40",
    "price": 6.13
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-41",
    "price": 6.18
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-42",
    "price": 5.81,
    "salePrice": 4.96
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-43",
    "price": 5.7,
    "salePrice": 4.25
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-44",
    "price": 6.5
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-45",
    "price": 6.51,
    "salePrice": 4.96
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-46",
    "price": 5.37
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-47",
    "price": 5.77
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-48",
    "price": 5.58
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-49",
    "price": 6.6
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-50",
    "price": 6.41
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-51",
    "price": 6.32
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-52",
    "price": 6.07
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-53",
    "price": 5.21,
    "salePrice": 4.45
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-54",
    "price": 5.96
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-55",
    "price": 5.31
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-56",
    "price": 6.49
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-57",
    "price": 5.91
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-58",
    "price": 5.94,
    "salePrice": 4.82
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-59",
    "price": 6.21
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-60",
    "price": 6.37
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-61",
    "price": 6.41
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-62",
    "price": 6.3
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-63",
    "price": 6.02
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-64",
    "price": 6.37
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-65",
    "price": 5.16
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-66",
    "price": 5.07
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-67",
    "price": 6.65
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-68",
    "price": 5.91
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-69",
    "price": 6.07
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-70",
    "price": 6.0
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-71",
    "price": 6.45
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-72",
    "price": 6.0
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-73",
    "price": 5.8,
    "salePrice": 4.82
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-74",
    "price": 6.21
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-75",
    "price": 5.61,
    "salePrice": 3.97
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-76",
    "price": 5.69
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-77",
    "price": 6.12
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-78",
    "price": 6.11
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-79",
    "price": 5.98,
    "salePrice": 5.11
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-80",
    "price": 5.51,
    "salePrice": 4.76
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-81",
    "price": 6.26
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-82",
    "price": 6.4,
    "salePrice": 5.76
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-83",
    "price": 6.07
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-84",
    "price": 5.76,
    "salePrice": 4.43
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-85",
    "price": 5.69
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-86",
    "price": 5.77
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-87",
    "price": 6.25
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-88",
    "price": 6.08
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-89",
    "price": 6.14
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-90",
    "price": 5.09,
    "salePrice": 4.32
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-91",
    "price": 5.04
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-92",
    "price": 6.0
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-93",
    "price": 5.68
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-94",
    "price": 5.63
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-95",
    "price": 5.07
  },
  {
    "productId": "milk-tnuva-3-1l",
    "storeId": "store-96",
    "price": 6.22
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-1",
    "price": 5.33
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-2",
    "price": 6.06
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-3",
    "price": 5.62,
    "salePrice": 4.01
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-4",
    "price": 5.75
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-5",
    "price": 5.52
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-6",
    "price": 5.29,
    "salePrice": 4.15
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-7",
    "price": 6.13
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-8",
    "price": 5.64
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-9",
    "price": 6.02
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-10",
    "price": 6.15
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-11",
    "price": 6.36
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-12",
    "price": 6.07
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-13",
    "price": 6.15
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-14",
    "price": 5.09
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-15",
    "price": 5.65
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-16",
    "price": 6.2
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-17",
    "price": 5.48
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-18",
    "price": 5.72,
    "salePrice": 4.34
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-19",
    "price": 6.18
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-20",
    "price": 6.22,
    "salePrice": 5.26
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-21",
    "price": 5.88
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-22",
    "price": 5.85
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-23",
    "price": 6.39
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-24",
    "price": 5.71
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-25",
    "price": 6.19
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-26",
    "price": 5.35
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-27",
    "price": 6.32
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-28",
    "price": 5.98
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-29",
    "price": 6.48
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-30",
    "price": 5.73
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-31",
    "price": 5.83
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-32",
    "price": 5.26,
    "salePrice": 4.05
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-33",
    "price": 5.98,
    "salePrice": 4.63
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-34",
    "price": 6.15,
    "salePrice": 5.36
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-35",
    "price": 6.36,
    "salePrice": 5.12
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-36",
    "price": 6.02,
    "salePrice": 5.27
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-37",
    "price": 5.86
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-38",
    "price": 5.88
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-39",
    "price": 6.21
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-40",
    "price": 5.73,
    "salePrice": 4.81
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-41",
    "price": 6.44,
    "salePrice": 5.52
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-42",
    "price": 5.73
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-43",
    "price": 6.1
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-44",
    "price": 6.6
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-45",
    "price": 6.57
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-46",
    "price": 5.25
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-47",
    "price": 6.01
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-48",
    "price": 5.32
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-49",
    "price": 6.61
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-50",
    "price": 5.94
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-51",
    "price": 6.38
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-52",
    "price": 5.98
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-53",
    "price": 5.43
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-54",
    "price": 5.97
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-55",
    "price": 5.11
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-56",
    "price": 6.35
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-57",
    "price": 6.3
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-58",
    "price": 5.86
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-59",
    "price": 5.81,
    "salePrice": 4.87
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-60",
    "price": 6.56
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-61",
    "price": 6.43
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-62",
    "price": 6.53
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-63",
    "price": 5.98
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-64",
    "price": 6.49
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-65",
    "price": 5.21
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-66",
    "price": 5.18,
    "salePrice": 3.86
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-67",
    "price": 6.46
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-68",
    "price": 5.97
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-69",
    "price": 6.02
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-70",
    "price": 5.61
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-71",
    "price": 6.33
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-72",
    "price": 6.03,
    "salePrice": 4.45
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-73",
    "price": 5.81
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-74",
    "price": 6.3
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-75",
    "price": 6.05,
    "salePrice": 5.24
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-76",
    "price": 5.75,
    "salePrice": 4.77
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-77",
    "price": 5.88
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-78",
    "price": 5.62
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-79",
    "price": 5.96
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-80",
    "price": 5.36
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-81",
    "price": 6.3
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-82",
    "price": 6.22
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-83",
    "price": 5.77
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-84",
    "price": 6.17
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-85",
    "price": 6.18
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-86",
    "price": 6.07,
    "salePrice": 4.34
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-87",
    "price": 6.25,
    "salePrice": 5.06
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-88",
    "price": 6.04
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-89",
    "price": 6.14,
    "salePrice": 4.73
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-90",
    "price": 5.06
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-91",
    "price": 5.42
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-92",
    "price": 5.93
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-93",
    "price": 5.8
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-94",
    "price": 5.65,
    "salePrice": 4.13
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-95",
    "price": 5.59,
    "salePrice": 4.67
  },
  {
    "productId": "milk-tnuva-1-1l",
    "storeId": "store-96",
    "price": 6.24
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-1",
    "price": 5.16
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-2",
    "price": 5.44
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-3",
    "price": 5.57
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-4",
    "price": 5.61
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-5",
    "price": 4.8
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-6",
    "price": 4.78,
    "salePrice": 4.26
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-7",
    "price": 5.41,
    "salePrice": 4.48
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-8",
    "price": 5.47,
    "salePrice": 4.63
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-9",
    "price": 5.69
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-10",
    "price": 5.27
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-11",
    "price": 5.97
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-12",
    "price": 5.42,
    "salePrice": 4.64
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-13",
    "price": 5.5
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-14",
    "price": 4.97,
    "salePrice": 4.14
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-15",
    "price": 5.23,
    "salePrice": 4.58
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-16",
    "price": 6.03,
    "salePrice": 4.28
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-17",
    "price": 4.94
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-18",
    "price": 5.55
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-19",
    "price": 5.37
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-20",
    "price": 5.88
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-21",
    "price": 5.58
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-22",
    "price": 5.68
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-23",
    "price": 6.04,
    "salePrice": 4.72
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-24",
    "price": 5.42
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-25",
    "price": 5.75
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-26",
    "price": 5.16
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-27",
    "price": 6.02,
    "salePrice": 5.3
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-28",
    "price": 5.54
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-29",
    "price": 5.87
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-30",
    "price": 5.23
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-31",
    "price": 5.73
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-32",
    "price": 4.79
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-33",
    "price": 5.67
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-34",
    "price": 5.47
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-35",
    "price": 5.8
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-36",
    "price": 5.56
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-37",
    "price": 5.63,
    "salePrice": 4.31
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-38",
    "price": 5.73
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-39",
    "price": 5.78
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-40",
    "price": 5.51
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-41",
    "price": 5.77
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-42",
    "price": 5.8
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-43",
    "price": 5.62
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-44",
    "price": 5.93,
    "salePrice": 4.6
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-45",
    "price": 6.17
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-46",
    "price": 4.83,
    "salePrice": 4.13
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-47",
    "price": 5.78
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-48",
    "price": 5.02,
    "salePrice": 4.24
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-49",
    "price": 5.91
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-50",
    "price": 5.29
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-51",
    "price": 6.04,
    "salePrice": 4.29
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-52",
    "price": 5.76
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-53",
    "price": 4.78
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-54",
    "price": 5.58,
    "salePrice": 4.09
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-55",
    "price": 4.81
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-56",
    "price": 6.18
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-57",
    "price": 5.94
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-58",
    "price": 5.37,
    "salePrice": 4.71
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-59",
    "price": 5.38
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-60",
    "price": 6.14
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-61",
    "price": 6.1,
    "salePrice": 5.32
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-62",
    "price": 6.04
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-63",
    "price": 5.43
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-64",
    "price": 6.16,
    "salePrice": 4.65
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-65",
    "price": 5.01
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-66",
    "price": 4.83
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-67",
    "price": 6.24
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-68",
    "price": 5.8,
    "salePrice": 5.07
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-69",
    "price": 5.26
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-70",
    "price": 5.48,
    "salePrice": 4.77
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-71",
    "price": 5.82
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-72",
    "price": 5.58,
    "salePrice": 4.93
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-73",
    "price": 5.45
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-74",
    "price": 5.92
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-75",
    "price": 5.76
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-76",
    "price": 5.69
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-77",
    "price": 5.37
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-78",
    "price": 5.57,
    "salePrice": 4.09
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-79",
    "price": 5.49
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-80",
    "price": 5.11
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-81",
    "price": 5.88
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-82",
    "price": 5.93
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-83",
    "price": 5.65
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-84",
    "price": 5.23
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-85",
    "price": 5.38
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-86",
    "price": 5.35
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-87",
    "price": 5.95
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-88",
    "price": 5.74
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-89",
    "price": 5.71
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-90",
    "price": 5.22,
    "salePrice": 4.36
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-91",
    "price": 5.1
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-92",
    "price": 5.39
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-93",
    "price": 5.27
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-94",
    "price": 5.54
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-95",
    "price": 4.73
  },
  {
    "productId": "milk-tara-3-1l",
    "storeId": "store-96",
    "price": 6.04
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-1",
    "price": 4.28
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-2",
    "price": 4.71
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-3",
    "price": 5.07
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-4",
    "price": 4.72,
    "salePrice": 3.96
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-5",
    "price": 4.22
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-6",
    "price": 4.46
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-7",
    "price": 4.96,
    "salePrice": 3.81
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-8",
    "price": 4.78
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-9",
    "price": 4.92
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-10",
    "price": 4.68
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-11",
    "price": 5.2
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-12",
    "price": 4.86
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-13",
    "price": 4.87
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-14",
    "price": 4.61
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-15",
    "price": 4.78,
    "salePrice": 3.37
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-16",
    "price": 5.36
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-17",
    "price": 4.53
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-18",
    "price": 4.67
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-19",
    "price": 5.06
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-20",
    "price": 5.29
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-21",
    "price": 5.06
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-22",
    "price": 4.71,
    "salePrice": 3.79
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-23",
    "price": 5.21,
    "salePrice": 4.42
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-24",
    "price": 4.99
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-25",
    "price": 4.71
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-26",
    "price": 4.61
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-27",
    "price": 5.15
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-28",
    "price": 4.66
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-29",
    "price": 5.29
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-30",
    "price": 4.67
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-31",
    "price": 4.78
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-32",
    "price": 4.46
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-33",
    "price": 5.01
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-34",
    "price": 4.83
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-35",
    "price": 5.26
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-36",
    "price": 4.93
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-37",
    "price": 4.68
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-38",
    "price": 4.83
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-39",
    "price": 4.76,
    "salePrice": 3.92
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-40",
    "price": 5.14
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-41",
    "price": 4.84,
    "salePrice": 4.31
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-42",
    "price": 4.79
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-43",
    "price": 5.02
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-44",
    "price": 5.58,
    "salePrice": 4.36
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-45",
    "price": 5.31
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-46",
    "price": 4.41
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-47",
    "price": 5.14,
    "salePrice": 4.54
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-48",
    "price": 4.33
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-49",
    "price": 5.39,
    "salePrice": 3.9
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-50",
    "price": 5.07,
    "salePrice": 4.26
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-51",
    "price": 4.86
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-52",
    "price": 4.92
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-53",
    "price": 4.78
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-54",
    "price": 5.21,
    "salePrice": 4.0
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-55",
    "price": 4.65
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-56",
    "price": 5.48,
    "salePrice": 4.84
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-57",
    "price": 4.8
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-58",
    "price": 5.12
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-59",
    "price": 4.96
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-60",
    "price": 5.26
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-61",
    "price": 5.48
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-62",
    "price": 5.37,
    "salePrice": 4.54
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-63",
    "price": 4.9
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-64",
    "price": 5.42
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-65",
    "price": 4.56
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-66",
    "price": 4.49
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-67",
    "price": 5.24
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-68",
    "price": 5.1
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-69",
    "price": 4.68,
    "salePrice": 3.31
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-70",
    "price": 4.84
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-71",
    "price": 5.34
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-72",
    "price": 4.95
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-73",
    "price": 4.8,
    "salePrice": 3.38
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-74",
    "price": 5.19
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-75",
    "price": 4.75,
    "salePrice": 3.94
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-76",
    "price": 5.09
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-77",
    "price": 4.86
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-78",
    "price": 4.89,
    "salePrice": 3.89
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-79",
    "price": 4.81,
    "salePrice": 3.47
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-80",
    "price": 4.26
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-81",
    "price": 5.38
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-82",
    "price": 5.34,
    "salePrice": 3.92
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-83",
    "price": 5.04,
    "salePrice": 4.02
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-84",
    "price": 4.73
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-85",
    "price": 4.91
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-86",
    "price": 5.14
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-87",
    "price": 5.26,
    "salePrice": 4.53
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-88",
    "price": 4.85
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-89",
    "price": 4.67,
    "salePrice": 3.6
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-90",
    "price": 4.58
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-91",
    "price": 4.31
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-92",
    "price": 4.93
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-93",
    "price": 5.02
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-94",
    "price": 5.14
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-95",
    "price": 4.52
  },
  {
    "productId": "cottage-tnuva-5-250g",
    "storeId": "store-96",
    "price": 5.32
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-1",
    "price": 2.26
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-2",
    "price": 2.55
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-3",
    "price": 2.58,
    "salePrice": 2.18
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-4",
    "price": 2.58,
    "salePrice": 2.12
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-5",
    "price": 2.26
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-6",
    "price": 2.19
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-7",
    "price": 2.43
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-8",
    "price": 2.46,
    "salePrice": 1.88
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-9",
    "price": 2.45
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-10",
    "price": 2.59,
    "salePrice": 1.83
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-11",
    "price": 2.7
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-12",
    "price": 2.55
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-13",
    "price": 2.41
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-14",
    "price": 2.15
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-15",
    "price": 2.57,
    "salePrice": 2.2
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-16",
    "price": 2.68
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-17",
    "price": 2.24,
    "salePrice": 1.73
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-18",
    "price": 2.51
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-19",
    "price": 2.44
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-20",
    "price": 2.72
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-21",
    "price": 2.49
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-22",
    "price": 2.48
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-23",
    "price": 2.69
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-24",
    "price": 2.41,
    "salePrice": 2.05
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-25",
    "price": 2.6
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-26",
    "price": 2.29
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-27",
    "price": 2.67,
    "salePrice": 1.88
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-28",
    "price": 2.56
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-29",
    "price": 2.73
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-30",
    "price": 2.42
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-31",
    "price": 2.51
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-32",
    "price": 2.19
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-33",
    "price": 2.5
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-34",
    "price": 2.62
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-35",
    "price": 2.73
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-36",
    "price": 2.48
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-37",
    "price": 2.61
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-38",
    "price": 2.49
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-39",
    "price": 2.66
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-40",
    "price": 2.42
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-41",
    "price": 2.47
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-42",
    "price": 2.48,
    "salePrice": 1.88
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-43",
    "price": 2.45,
    "salePrice": 1.88
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-44",
    "price": 2.78,
    "salePrice": 2.18
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-45",
    "price": 2.73,
    "salePrice": 2.44
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-46",
    "price": 2.35
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-47",
    "price": 2.57
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-48",
    "price": 2.25
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-49",
    "price": 2.73
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-50",
    "price": 2.52
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-51",
    "price": 2.44
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-52",
    "price": 2.5
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-53",
    "price": 2.34
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-54",
    "price": 2.53,
    "salePrice": 2.15
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-55",
    "price": 2.32
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-56",
    "price": 2.74,
    "salePrice": 2.39
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-57",
    "price": 2.62,
    "salePrice": 2.02
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-58",
    "price": 2.52
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-59",
    "price": 2.6
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-60",
    "price": 2.74
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-61",
    "price": 2.67
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-62",
    "price": 2.83
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-63",
    "price": 2.59,
    "salePrice": 1.99
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-64",
    "price": 2.74
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-65",
    "price": 2.35
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-66",
    "price": 2.44,
    "salePrice": 2.05
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-67",
    "price": 2.73,
    "salePrice": 2.2
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-68",
    "price": 2.6,
    "salePrice": 2.01
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-69",
    "price": 2.54,
    "salePrice": 2.23
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-70",
    "price": 2.61,
    "salePrice": 2.19
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-71",
    "price": 2.69,
    "salePrice": 1.92
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-72",
    "price": 2.38
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-73",
    "price": 2.51
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-74",
    "price": 2.7
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-75",
    "price": 2.56
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-76",
    "price": 2.45
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-77",
    "price": 2.54
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-78",
    "price": 2.52
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-79",
    "price": 2.6,
    "salePrice": 2.04
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-80",
    "price": 2.28
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-81",
    "price": 2.64
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-82",
    "price": 2.71,
    "salePrice": 2.02
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-83",
    "price": 2.57
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-84",
    "price": 2.49,
    "salePrice": 2.16
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-85",
    "price": 2.57
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-86",
    "price": 2.56
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-87",
    "price": 2.7
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-88",
    "price": 2.57
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-89",
    "price": 2.39
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-90",
    "price": 2.24,
    "salePrice": 1.57
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-91",
    "price": 2.22,
    "salePrice": 1.65
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-92",
    "price": 2.49
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-93",
    "price": 2.39,
    "salePrice": 2.02
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-94",
    "price": 2.57
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-95",
    "price": 2.16
  },
  {
    "productId": "yogurt-yoplait-150g",
    "storeId": "store-96",
    "price": 2.7
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-1",
    "price": 10.98
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-2",
    "price": 13.5
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-3",
    "price": 12.57
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-4",
    "price": 12.9
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-5",
    "price": 11.06
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-6",
    "price": 11.06
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-7",
    "price": 13.26
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-8",
    "price": 12.34
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-9",
    "price": 13.32
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-10",
    "price": 13.09
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-11",
    "price": 13.56,
    "salePrice": 9.59
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-12",
    "price": 13.47
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-13",
    "price": 12.8
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-14",
    "price": 12.13
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-15",
    "price": 12.89
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-16",
    "price": 13.89
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-17",
    "price": 11.8
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-18",
    "price": 12.59,
    "salePrice": 10.48
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-19",
    "price": 13.09
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-20",
    "price": 13.75
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-21",
    "price": 12.28,
    "salePrice": 10.12
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-22",
    "price": 13.5
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-23",
    "price": 13.82,
    "salePrice": 11.18
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-24",
    "price": 12.91
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-25",
    "price": 12.63
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-26",
    "price": 11.53
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-27",
    "price": 13.67
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-28",
    "price": 12.53
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-29",
    "price": 13.98,
    "salePrice": 11.04
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-30",
    "price": 12.99
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-31",
    "price": 12.94
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-32",
    "price": 11.24
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-33",
    "price": 12.61,
    "salePrice": 10.83
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-34",
    "price": 12.4,
    "salePrice": 11.16
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-35",
    "price": 13.59
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-36",
    "price": 13.53
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-37",
    "price": 13.1
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-38",
    "price": 13.5
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-39",
    "price": 13.44
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-40",
    "price": 14.01
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-41",
    "price": 13.01,
    "salePrice": 10.6
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-42",
    "price": 12.98
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-43",
    "price": 13.16
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-44",
    "price": 13.84
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-45",
    "price": 14.23
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-46",
    "price": 12.02
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-47",
    "price": 13.62
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-48",
    "price": 11.38,
    "salePrice": 10.13
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-49",
    "price": 14.07,
    "salePrice": 10.2
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-50",
    "price": 12.54
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-51",
    "price": 12.82
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-52",
    "price": 13.88
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-53",
    "price": 11.8
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-54",
    "price": 13.22
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-55",
    "price": 11.07
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-56",
    "price": 14.58,
    "salePrice": 12.56
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-57",
    "price": 13.03
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-58",
    "price": 13.59
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-59",
    "price": 13.21
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-60",
    "price": 14.23
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-61",
    "price": 14.15
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-62",
    "price": 13.82
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-63",
    "price": 13.14
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-64",
    "price": 13.91
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-65",
    "price": 11.8
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-66",
    "price": 11.31,
    "salePrice": 8.57
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-67",
    "price": 14.67
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-68",
    "price": 13.47
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-69",
    "price": 12.61
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-70",
    "price": 12.37,
    "salePrice": 9.59
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-71",
    "price": 13.59
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-72",
    "price": 13.3
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-73",
    "price": 12.96,
    "salePrice": 10.55
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-74",
    "price": 13.88
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-75",
    "price": 13.01
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-76",
    "price": 13.13
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-77",
    "price": 12.86
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-78",
    "price": 13.08,
    "salePrice": 9.92
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-79",
    "price": 12.68
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-80",
    "price": 11.88
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-81",
    "price": 14.11,
    "salePrice": 12.42
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-82",
    "price": 13.56
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-83",
    "price": 13.38
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-84",
    "price": 12.3
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-85",
    "price": 12.78
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-86",
    "price": 12.43
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-87",
    "price": 13.92,
    "salePrice": 11.03
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-88",
    "price": 13.47
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-89",
    "price": 13.45
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-90",
    "price": 11.68,
    "salePrice": 9.9
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-91",
    "price": 12.02
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-92",
    "price": 12.83
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-93",
    "price": 13.32,
    "salePrice": 11.21
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-94",
    "price": 12.85
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-95",
    "price": 11.17
  },
  {
    "productId": "yellow-cheese-tnuva-200g",
    "storeId": "store-96",
    "price": 14.02,
    "salePrice": 10.61
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-1",
    "price": 8.28,
    "salePrice": 6.71
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-2",
    "price": 9.18,
    "salePrice": 6.95
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-3",
    "price": 8.99
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-4",
    "price": 8.74,
    "salePrice": 6.71
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-5",
    "price": 7.61
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-6",
    "price": 7.85
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-7",
    "price": 8.72
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-8",
    "price": 9.14,
    "salePrice": 7.13
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-9",
    "price": 8.84
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-10",
    "price": 8.5,
    "salePrice": 6.78
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-11",
    "price": 9.64
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-12",
    "price": 9.07
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-13",
    "price": 9.32,
    "salePrice": 6.77
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-14",
    "price": 7.85
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-15",
    "price": 8.53,
    "salePrice": 6.75
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-16",
    "price": 9.51
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-17",
    "price": 7.81
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-18",
    "price": 8.67
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-19",
    "price": 9.17
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-20",
    "price": 9.59,
    "salePrice": 8.38
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-21",
    "price": 8.95,
    "salePrice": 6.83
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-22",
    "price": 9.09,
    "salePrice": 7.6
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-23",
    "price": 9.46
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-24",
    "price": 9.02,
    "salePrice": 7.7
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-25",
    "price": 8.93
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-26",
    "price": 8.1
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-27",
    "price": 9.79
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-28",
    "price": 9.01
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-29",
    "price": 9.37
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-30",
    "price": 9.23
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-31",
    "price": 8.55
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-32",
    "price": 7.57
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-33",
    "price": 8.96
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-34",
    "price": 8.82
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-35",
    "price": 9.42
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-36",
    "price": 8.61
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-37",
    "price": 8.61
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-38",
    "price": 8.81
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-39",
    "price": 9.14
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-40",
    "price": 9.17
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-41",
    "price": 9.05
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-42",
    "price": 9.31
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-43",
    "price": 9.22
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-44",
    "price": 9.56
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-45",
    "price": 9.7
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-46",
    "price": 8.44
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-47",
    "price": 9.63
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-48",
    "price": 8.2
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-49",
    "price": 9.69,
    "salePrice": 7.88
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-50",
    "price": 8.84,
    "salePrice": 7.86
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-51",
    "price": 9.21
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-52",
    "price": 8.9
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-53",
    "price": 8.0
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-54",
    "price": 8.99
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-55",
    "price": 8.55
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-56",
    "price": 9.64
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-57",
    "price": 9.35
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-58",
    "price": 9.16,
    "salePrice": 6.51
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-59",
    "price": 9.33,
    "salePrice": 8.24
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-60",
    "price": 9.46
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-61",
    "price": 9.59
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-62",
    "price": 9.82
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-63",
    "price": 9.66
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-64",
    "price": 9.84,
    "salePrice": 8.82
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-65",
    "price": 8.52
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-66",
    "price": 8.28
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-67",
    "price": 9.93
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-68",
    "price": 8.93
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-69",
    "price": 9.28
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-70",
    "price": 8.88
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-71",
    "price": 9.69
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-72",
    "price": 8.75
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-73",
    "price": 9.18
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-74",
    "price": 9.72
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-75",
    "price": 8.9
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-76",
    "price": 9.03
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-77",
    "price": 9.27
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-78",
    "price": 9.02
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-79",
    "price": 8.77
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-80",
    "price": 7.98,
    "salePrice": 6.53
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-81",
    "price": 9.58
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-82",
    "price": 9.56
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-83",
    "price": 8.77
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-84",
    "price": 8.49
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-85",
    "price": 8.92
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-86",
    "price": 8.85
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-87",
    "price": 9.49
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-88",
    "price": 9.3
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-89",
    "price": 8.63
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-90",
    "price": 8.39
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-91",
    "price": 8.42
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-92",
    "price": 8.82,
    "salePrice": 6.2
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-93",
    "price": 9.29
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-94",
    "price": 9.0
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-95",
    "price": 7.84
  },
  {
    "productId": "white-cheese-gad-250g",
    "storeId": "store-96",
    "price": 9.57
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-1",
    "price": 7.09
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-2",
    "price": 8.06,
    "salePrice": 7.17
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-3",
    "price": 7.75
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-4",
    "price": 7.67
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-5",
    "price": 7.14
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-6",
    "price": 7.09
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-7",
    "price": 7.73
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-8",
    "price": 7.71
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-9",
    "price": 7.93
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-10",
    "price": 7.84
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-11",
    "price": 8.44
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-12",
    "price": 7.79
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-13",
    "price": 8.27
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-14",
    "price": 7.11,
    "salePrice": 5.23
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-15",
    "price": 8.02,
    "salePrice": 6.22
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-16",
    "price": 8.5
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-17",
    "price": 7.23
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-18",
    "price": 7.89
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-19",
    "price": 8.1
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-20",
    "price": 8.66
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-21",
    "price": 8.2,
    "salePrice": 7.32
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-22",
    "price": 7.54,
    "salePrice": 6.6
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-23",
    "price": 8.57
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-24",
    "price": 8.24,
    "salePrice": 6.66
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-25",
    "price": 8.23
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-26",
    "price": 7.29
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-27",
    "price": 8.51
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-28",
    "price": 7.74
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-29",
    "price": 8.36
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-30",
    "price": 8.09
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-31",
    "price": 8.17
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-32",
    "price": 7.03
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-33",
    "price": 8.24
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-34",
    "price": 7.94,
    "salePrice": 5.76
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-35",
    "price": 8.53
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-36",
    "price": 8.12
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-37",
    "price": 7.81,
    "salePrice": 6.58
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-38",
    "price": 7.68
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-39",
    "price": 8.15,
    "salePrice": 7.29
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-40",
    "price": 7.76
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-41",
    "price": 8.41
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-42",
    "price": 8.2
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-43",
    "price": 7.84
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-44",
    "price": 8.74
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-45",
    "price": 8.35
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-46",
    "price": 6.76,
    "salePrice": 4.84
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-47",
    "price": 8.12
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-48",
    "price": 7.22
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-49",
    "price": 8.6
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-50",
    "price": 8.12,
    "salePrice": 6.97
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-51",
    "price": 8.55,
    "salePrice": 6.08
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-52",
    "price": 8.01
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-53",
    "price": 7.42,
    "salePrice": 5.86
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-54",
    "price": 8.01
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-55",
    "price": 7.58
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-56",
    "price": 8.91
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-57",
    "price": 8.35,
    "salePrice": 7.38
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-58",
    "price": 7.89
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-59",
    "price": 7.9
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-60",
    "price": 8.63
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-61",
    "price": 8.74,
    "salePrice": 6.13
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-62",
    "price": 8.62,
    "salePrice": 7.24
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-63",
    "price": 8.45
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-64",
    "price": 8.84
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-65",
    "price": 7.51
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-66",
    "price": 7.69
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-67",
    "price": 8.63
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-68",
    "price": 8.34
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-69",
    "price": 8.13
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-70",
    "price": 8.19
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-71",
    "price": 8.45
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-72",
    "price": 8.17
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-73",
    "price": 7.57
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-74",
    "price": 8.57
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-75",
    "price": 8.12
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-76",
    "price": 8.19
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-77",
    "price": 7.84
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-78",
    "price": 7.52
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-79",
    "price": 8.06
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-80",
    "price": 6.97,
    "salePrice": 5.48
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-81",
    "price": 8.61
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-82",
    "price": 8.44
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-83",
    "price": 7.91
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-84",
    "price": 7.89
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-85",
    "price": 8.19,
    "salePrice": 6.52
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-86",
    "price": 8.03
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-87",
    "price": 8.32
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-88",
    "price": 7.7
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-89",
    "price": 8.13
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-90",
    "price": 6.82
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-91",
    "price": 7.36
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-92",
    "price": 7.63
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-93",
    "price": 8.29
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-94",
    "price": 8.09
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-95",
    "price": 7.31
  },
  {
    "productId": "butter-tnuva-200g",
    "storeId": "store-96",
    "price": 8.59,
    "salePrice": 6.75
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-1",
    "price": 11.32,
    "salePrice": 9.17
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-2",
    "price": 13.0
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-3",
    "price": 12.75
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-4",
    "price": 13.28
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-5",
    "price": 11.56
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-6",
    "price": 12.04
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-7",
    "price": 13.37
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-8",
    "price": 13.02
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-9",
    "price": 12.65
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-10",
    "price": 12.95
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-11",
    "price": 13.64
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-12",
    "price": 13.05,
    "salePrice": 9.19
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-13",
    "price": 13.14
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-14",
    "price": 11.41
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-15",
    "price": 13.48
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-16",
    "price": 13.91,
    "salePrice": 11.74
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-17",
    "price": 11.51
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-18",
    "price": 12.5,
    "salePrice": 8.91
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-19",
    "price": 13.42
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-20",
    "price": 14.17
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-21",
    "price": 12.54
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-22",
    "price": 13.49
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-23",
    "price": 13.96
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-24",
    "price": 12.6
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-25",
    "price": 12.84
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-26",
    "price": 10.97,
    "salePrice": 8.77
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-27",
    "price": 13.68
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-28",
    "price": 12.64
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-29",
    "price": 13.82
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-30",
    "price": 13.32,
    "salePrice": 9.8
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-31",
    "price": 12.7,
    "salePrice": 9.24
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-32",
    "price": 11.21
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-33",
    "price": 12.62
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-34",
    "price": 12.31
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-35",
    "price": 13.59
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-36",
    "price": 12.63
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-37",
    "price": 12.9
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-38",
    "price": 13.51
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-39",
    "price": 13.17
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-40",
    "price": 12.79,
    "salePrice": 10.31
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-41",
    "price": 14.07
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-42",
    "price": 14.11,
    "salePrice": 11.49
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-43",
    "price": 13.55
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-44",
    "price": 14.33
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-45",
    "price": 14.61,
    "salePrice": 10.55
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-46",
    "price": 11.4
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-47",
    "price": 12.5
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-48",
    "price": 12.23,
    "salePrice": 8.56
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-49",
    "price": 13.99
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-50",
    "price": 13.69,
    "salePrice": 12.21
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-51",
    "price": 13.5,
    "salePrice": 11.06
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-52",
    "price": 12.97
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-53",
    "price": 12.05
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-54",
    "price": 13.49
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-55",
    "price": 12.2,
    "salePrice": 10.93
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-56",
    "price": 14.27
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-57",
    "price": 13.28,
    "salePrice": 10.18
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-58",
    "price": 13.07
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-59",
    "price": 13.77
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-60",
    "price": 13.99
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-61",
    "price": 14.09
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-62",
    "price": 14.78
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-63",
    "price": 12.93
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-64",
    "price": 14.32
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-65",
    "price": 11.53
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-66",
    "price": 12.51
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-67",
    "price": 14.6
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-68",
    "price": 13.23
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-69",
    "price": 13.53
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-70",
    "price": 13.2
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-71",
    "price": 14.05,
    "salePrice": 10.09
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-72",
    "price": 13.41
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-73",
    "price": 12.31,
    "salePrice": 10.53
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-74",
    "price": 13.73
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-75",
    "price": 12.26,
    "salePrice": 9.7
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-76",
    "price": 13.45
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-77",
    "price": 12.41
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-78",
    "price": 12.34,
    "salePrice": 10.09
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-79",
    "price": 13.49
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-80",
    "price": 11.03,
    "salePrice": 9.82
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-81",
    "price": 14.12
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-82",
    "price": 14.1
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-83",
    "price": 12.77
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-84",
    "price": 13.12
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-85",
    "price": 12.53
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-86",
    "price": 12.59
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-87",
    "price": 14.08
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-88",
    "price": 12.83,
    "salePrice": 9.0
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-89",
    "price": 12.61,
    "salePrice": 10.36
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-90",
    "price": 11.96
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-91",
    "price": 11.63
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-92",
    "price": 12.94
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-93",
    "price": 12.4
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-94",
    "price": 13.45
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-95",
    "price": 11.49
  },
  {
    "productId": "eggs-L-12",
    "storeId": "store-96",
    "price": 13.66
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-1",
    "price": 11.06
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-2",
    "price": 11.72
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-3",
    "price": 11.73
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-4",
    "price": 11.39
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-5",
    "price": 10.68
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-6",
    "price": 11.08
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-7",
    "price": 11.99
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-8",
    "price": 11.45
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-9",
    "price": 12.19
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-10",
    "price": 11.53
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-11",
    "price": 13.0
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-12",
    "price": 12.23,
    "salePrice": 10.43
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-13",
    "price": 11.54
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-14",
    "price": 11.25
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-15",
    "price": 11.55
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-16",
    "price": 13.02,
    "salePrice": 9.83
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-17",
    "price": 11.15
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-18",
    "price": 12.14
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-19",
    "price": 12.46
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-20",
    "price": 12.67
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-21",
    "price": 12.28
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-22",
    "price": 12.31
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-23",
    "price": 12.85
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-24",
    "price": 11.73
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-25",
    "price": 12.01
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-26",
    "price": 11.28
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-27",
    "price": 12.83,
    "salePrice": 9.36
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-28",
    "price": 12.16
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-29",
    "price": 12.75
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-30",
    "price": 11.61
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-31",
    "price": 11.65,
    "salePrice": 10.25
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-32",
    "price": 10.92,
    "salePrice": 7.7
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-33",
    "price": 12.39
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-34",
    "price": 12.07
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-35",
    "price": 13.01
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-36",
    "price": 11.91
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-37",
    "price": 11.69,
    "salePrice": 9.57
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-38",
    "price": 12.37
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-39",
    "price": 12.51
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-40",
    "price": 12.74
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-41",
    "price": 12.37
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-42",
    "price": 11.96,
    "salePrice": 8.86
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-43",
    "price": 12.35
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-44",
    "price": 12.97
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-45",
    "price": 12.95
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-46",
    "price": 11.14
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-47",
    "price": 12.5
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-48",
    "price": 10.92
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-49",
    "price": 13.07
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-50",
    "price": 11.79
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-51",
    "price": 11.94
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-52",
    "price": 12.27
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-53",
    "price": 11.09
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-54",
    "price": 11.97
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-55",
    "price": 11.09
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-56",
    "price": 13.3
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-57",
    "price": 12.24
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-58",
    "price": 11.71,
    "salePrice": 10.29
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-59",
    "price": 11.84
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-60",
    "price": 13.12
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-61",
    "price": 12.86
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-62",
    "price": 13.08
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-63",
    "price": 12.27
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-64",
    "price": 13.05
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-65",
    "price": 10.77
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-66",
    "price": 11.26
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-67",
    "price": 13.28,
    "salePrice": 9.56
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-68",
    "price": 12.68
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-69",
    "price": 11.7
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-70",
    "price": 11.49
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-71",
    "price": 12.52
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-72",
    "price": 12.41
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-73",
    "price": 12.33
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-74",
    "price": 12.84,
    "salePrice": 11.12
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-75",
    "price": 11.68
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-76",
    "price": 11.73
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-77",
    "price": 12.24
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-78",
    "price": 11.68
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-79",
    "price": 12.39
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-80",
    "price": 11.03
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-81",
    "price": 12.7
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-82",
    "price": 12.54
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-83",
    "price": 11.49
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-84",
    "price": 12.41
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-85",
    "price": 11.86
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-86",
    "price": 12.21
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-87",
    "price": 13.06
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-88",
    "price": 11.53
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-89",
    "price": 12.47
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-90",
    "price": 11.12
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-91",
    "price": 10.2
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-92",
    "price": 12.41
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-93",
    "price": 11.71
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-94",
    "price": 12.41
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-95",
    "price": 10.68
  },
  {
    "productId": "eggs-M-12",
    "storeId": "store-96",
    "price": 12.55
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-1",
    "price": 12.48
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-2",
    "price": 13.51
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-3",
    "price": 13.75
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-4",
    "price": 13.21
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-5",
    "price": 12.12
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-6",
    "price": 13.02
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-7",
    "price": 13.74
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-8",
    "price": 13.86
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-9",
    "price": 13.92
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-10",
    "price": 13.49,
    "salePrice": 10.58
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-11",
    "price": 14.84
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-12",
    "price": 13.72
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-13",
    "price": 13.98
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-14",
    "price": 12.24
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-15",
    "price": 13.58,
    "salePrice": 11.51
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-16",
    "price": 14.83,
    "salePrice": 11.13
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-17",
    "price": 12.2
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-18",
    "price": 14.04
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-19",
    "price": 13.56
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-20",
    "price": 15.18
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-21",
    "price": 13.76
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-22",
    "price": 14.32
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-23",
    "price": 15.13
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-24",
    "price": 14.26
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-25",
    "price": 14.3
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-26",
    "price": 12.41,
    "salePrice": 9.15
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-27",
    "price": 14.8
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-28",
    "price": 13.6
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-29",
    "price": 14.62
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-30",
    "price": 14.53
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-31",
    "price": 14.5
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-32",
    "price": 12.05
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-33",
    "price": 13.31
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-34",
    "price": 13.88
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-35",
    "price": 14.75
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-36",
    "price": 14.47
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-37",
    "price": 14.18
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-38",
    "price": 14.18
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-39",
    "price": 14.06
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-40",
    "price": 13.36
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-41",
    "price": 14.03
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-42",
    "price": 13.53
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-43",
    "price": 14.7
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-44",
    "price": 15.34
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-45",
    "price": 14.88,
    "salePrice": 12.83
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-46",
    "price": 12.45
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-47",
    "price": 13.72
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-48",
    "price": 12.84,
    "salePrice": 10.05
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-49",
    "price": 15.39
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-50",
    "price": 14.99
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-51",
    "price": 14.85
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-52",
    "price": 14.38
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-53",
    "price": 12.57
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-54",
    "price": 14.23
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-55",
    "price": 13.25
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-56",
    "price": 15.44
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-57",
    "price": 14.53,
    "salePrice": 12.28
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-58",
    "price": 14.95
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-59",
    "price": 14.1
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-60",
    "price": 15.25
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-61",
    "price": 15.11,
    "salePrice": 13.02
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-62",
    "price": 15.35
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-63",
    "price": 14.37
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-64",
    "price": 14.91
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-65",
    "price": 12.08
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-66",
    "price": 13.68
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-67",
    "price": 15.65
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-68",
    "price": 14.12
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-69",
    "price": 13.23
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-70",
    "price": 13.21
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-71",
    "price": 15.09
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-72",
    "price": 13.35
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-73",
    "price": 13.5
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-74",
    "price": 15.25
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-75",
    "price": 13.9
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-76",
    "price": 13.95
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-77",
    "price": 13.78
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-78",
    "price": 13.8
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-79",
    "price": 13.31
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-80",
    "price": 12.0
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-81",
    "price": 14.77
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-82",
    "price": 15.0
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-83",
    "price": 13.49
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-84",
    "price": 13.9
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-85",
    "price": 14.24
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-86",
    "price": 13.31
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-87",
    "price": 14.76,
    "salePrice": 11.31
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-88",
    "price": 13.48
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-89",
    "price": 13.43
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-90",
    "price": 12.07
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-91",
    "price": 12.61
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-92",
    "price": 14.42
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-93",
    "price": 14.34,
    "salePrice": 10.41
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-94",
    "price": 13.79
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-95",
    "price": 12.01
  },
  {
    "productId": "eggs-XL-12",
    "storeId": "store-96",
    "price": 15.01,
    "salePrice": 11.12
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-1",
    "price": 4.0,
    "salePrice": 3.4
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-2",
    "price": 4.42
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-3",
    "price": 4.41,
    "salePrice": 3.8
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-4",
    "price": 4.37
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-5",
    "price": 3.97
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-6",
    "price": 4.01
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-7",
    "price": 4.44,
    "salePrice": 3.21
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-8",
    "price": 4.31
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-9",
    "price": 4.32,
    "salePrice": 3.87
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-10",
    "price": 4.39
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-11",
    "price": 4.91,
    "salePrice": 3.9
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-12",
    "price": 4.32
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-13",
    "price": 4.63
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-14",
    "price": 4.16
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-15",
    "price": 4.48,
    "salePrice": 3.2
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-16",
    "price": 4.79
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-17",
    "price": 3.95
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-18",
    "price": 4.68
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-19",
    "price": 4.6
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-20",
    "price": 4.76
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-21",
    "price": 4.29
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-22",
    "price": 4.45
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-23",
    "price": 4.73
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-24",
    "price": 4.42
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-25",
    "price": 4.4,
    "salePrice": 3.69
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-26",
    "price": 4.04
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-27",
    "price": 4.89
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-28",
    "price": 4.34
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-29",
    "price": 4.77
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-30",
    "price": 4.56,
    "salePrice": 3.99
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-31",
    "price": 4.52
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-32",
    "price": 4.14
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-33",
    "price": 4.71
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-34",
    "price": 4.67
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-35",
    "price": 4.76
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-36",
    "price": 4.35,
    "salePrice": 3.59
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-37",
    "price": 4.41
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-38",
    "price": 4.47
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-39",
    "price": 4.73
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-40",
    "price": 4.55
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-41",
    "price": 4.78
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-42",
    "price": 4.42
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-43",
    "price": 4.55
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-44",
    "price": 4.8
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-45",
    "price": 5.02
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-46",
    "price": 3.98
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-47",
    "price": 4.87
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-48",
    "price": 4.12
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-49",
    "price": 4.99
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-50",
    "price": 4.62
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-51",
    "price": 4.53
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-52",
    "price": 4.38
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-53",
    "price": 4.21
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-54",
    "price": 4.57,
    "salePrice": 3.2
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-55",
    "price": 4.31
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-56",
    "price": 4.87
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-57",
    "price": 4.7
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-58",
    "price": 4.67
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-59",
    "price": 4.64
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-60",
    "price": 4.82,
    "salePrice": 3.74
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-61",
    "price": 4.99
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-62",
    "price": 5.01
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-63",
    "price": 4.7,
    "salePrice": 3.45
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-64",
    "price": 4.91
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-65",
    "price": 4.0
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-66",
    "price": 4.24
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-67",
    "price": 5.19
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-68",
    "price": 4.41
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-69",
    "price": 4.61
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-70",
    "price": 4.42
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-71",
    "price": 4.86
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-72",
    "price": 4.58
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-73",
    "price": 4.65
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-74",
    "price": 4.91,
    "salePrice": 3.87
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-75",
    "price": 4.33
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-76",
    "price": 4.65,
    "salePrice": 3.35
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-77",
    "price": 4.72
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-78",
    "price": 4.7
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-79",
    "price": 4.52
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-80",
    "price": 4.14
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-81",
    "price": 4.89
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-82",
    "price": 4.73,
    "salePrice": 3.56
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-83",
    "price": 4.52
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-84",
    "price": 4.37
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-85",
    "price": 4.59
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-86",
    "price": 4.3
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-87",
    "price": 4.75
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-88",
    "price": 4.48,
    "salePrice": 3.83
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-89",
    "price": 4.63
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-90",
    "price": 3.88
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-91",
    "price": 4.23,
    "salePrice": 3.64
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-92",
    "price": 4.44
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-93",
    "price": 4.45
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-94",
    "price": 4.42
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-95",
    "price": 4.17
  },
  {
    "productId": "bread-white-750g",
    "storeId": "store-96",
    "price": 4.76
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-1",
    "price": 5.06
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-2",
    "price": 5.94
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-3",
    "price": 6.07
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-4",
    "price": 5.61
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-5",
    "price": 5.08
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-6",
    "price": 5.29
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-7",
    "price": 6.14
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-8",
    "price": 5.68
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-9",
    "price": 5.99
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-10",
    "price": 5.81
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-11",
    "price": 6.4
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-12",
    "price": 5.87
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-13",
    "price": 5.72
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-14",
    "price": 5.45
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-15",
    "price": 6.16
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-16",
    "price": 6.26
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-17",
    "price": 5.6
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-18",
    "price": 5.61
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-19",
    "price": 5.91
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-20",
    "price": 6.46
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-21",
    "price": 5.82
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-22",
    "price": 5.89
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-23",
    "price": 6.47
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-24",
    "price": 6.09
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-25",
    "price": 5.63,
    "salePrice": 4.39
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-26",
    "price": 5.38,
    "salePrice": 4.46
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-27",
    "price": 6.4
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-28",
    "price": 5.79
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-29",
    "price": 6.36
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-30",
    "price": 6.06
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-31",
    "price": 5.78
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-32",
    "price": 5.35
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-33",
    "price": 5.81
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-34",
    "price": 5.69
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-35",
    "price": 6.25
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-36",
    "price": 6.05
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-37",
    "price": 5.75
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-38",
    "price": 5.85
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-39",
    "price": 5.82
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-40",
    "price": 5.95
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-41",
    "price": 5.9
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-42",
    "price": 5.82
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-43",
    "price": 6.47
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-44",
    "price": 6.32
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-45",
    "price": 6.5
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-46",
    "price": 5.45
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-47",
    "price": 5.76
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-48",
    "price": 5.25,
    "salePrice": 3.68
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-49",
    "price": 6.37
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-50",
    "price": 5.92
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-51",
    "price": 5.9
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-52",
    "price": 5.97
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-53",
    "price": 5.17
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-54",
    "price": 5.91
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-55",
    "price": 5.19
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-56",
    "price": 6.45,
    "salePrice": 5.58
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-57",
    "price": 6.18
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-58",
    "price": 6.0,
    "salePrice": 5.21
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-59",
    "price": 6.27
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-60",
    "price": 6.6
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-61",
    "price": 6.64
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-62",
    "price": 6.37,
    "salePrice": 5.58
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-63",
    "price": 5.95
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-64",
    "price": 6.47
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-65",
    "price": 5.4
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-66",
    "price": 5.63
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-67",
    "price": 6.52
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-68",
    "price": 6.04
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-69",
    "price": 6.06
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-70",
    "price": 6.13
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-71",
    "price": 6.39
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-72",
    "price": 5.67
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-73",
    "price": 6.19
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-74",
    "price": 6.27
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-75",
    "price": 5.63
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-76",
    "price": 6.14
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-77",
    "price": 5.99,
    "salePrice": 5.1
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-78",
    "price": 6.07
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-79",
    "price": 6.19
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-80",
    "price": 5.44,
    "salePrice": 4.37
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-81",
    "price": 6.34,
    "salePrice": 4.9
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-82",
    "price": 6.29
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-83",
    "price": 5.61
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-84",
    "price": 5.73
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-85",
    "price": 5.72
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-86",
    "price": 5.83,
    "salePrice": 4.42
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-87",
    "price": 6.24
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-88",
    "price": 5.9
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-89",
    "price": 6.09,
    "salePrice": 4.55
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-90",
    "price": 5.28
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-91",
    "price": 5.29
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-92",
    "price": 6.09,
    "salePrice": 4.42
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-93",
    "price": 5.91
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-94",
    "price": 6.02
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-95",
    "price": 5.43,
    "salePrice": 4.27
  },
  {
    "productId": "bread-whole-wheat-750g",
    "storeId": "store-96",
    "price": 6.41,
    "salePrice": 5.59
  },
  {
    "productId": "challah-500g",
    "storeId": "store-1",
    "price": 8.33
  },
  {
    "productId": "challah-500g",
    "storeId": "store-2",
    "price": 8.74
  },
  {
    "productId": "challah-500g",
    "storeId": "store-3",
    "price": 8.76
  },
  {
    "productId": "challah-500g",
    "storeId": "store-4",
    "price": 8.63,
    "salePrice": 6.09
  },
  {
    "productId": "challah-500g",
    "storeId": "store-5",
    "price": 8.19
  },
  {
    "productId": "challah-500g",
    "storeId": "store-6",
    "price": 7.98
  },
  {
    "productId": "challah-500g",
    "storeId": "store-7",
    "price": 9.24
  },
  {
    "productId": "challah-500g",
    "storeId": "store-8",
    "price": 9.17
  },
  {
    "productId": "challah-500g",
    "storeId": "store-9",
    "price": 9.09
  },
  {
    "productId": "challah-500g",
    "storeId": "store-10",
    "price": 9.24
  },
  {
    "productId": "challah-500g",
    "storeId": "store-11",
    "price": 9.4
  },
  {
    "productId": "challah-500g",
    "storeId": "store-12",
    "price": 8.61
  },
  {
    "productId": "challah-500g",
    "storeId": "store-13",
    "price": 9.09
  },
  {
    "productId": "challah-500g",
    "storeId": "store-14",
    "price": 7.83
  },
  {
    "productId": "challah-500g",
    "storeId": "store-15",
    "price": 8.97
  },
  {
    "productId": "challah-500g",
    "storeId": "store-16",
    "price": 9.37,
    "salePrice": 6.83
  },
  {
    "productId": "challah-500g",
    "storeId": "store-17",
    "price": 8.41
  },
  {
    "productId": "challah-500g",
    "storeId": "store-18",
    "price": 8.99
  },
  {
    "productId": "challah-500g",
    "storeId": "store-19",
    "price": 9.13
  },
  {
    "productId": "challah-500g",
    "storeId": "store-20",
    "price": 9.53,
    "salePrice": 7.93
  },
  {
    "productId": "challah-500g",
    "storeId": "store-21",
    "price": 9.33
  },
  {
    "productId": "challah-500g",
    "storeId": "store-22",
    "price": 8.59,
    "salePrice": 7.06
  },
  {
    "productId": "challah-500g",
    "storeId": "store-23",
    "price": 9.42
  },
  {
    "productId": "challah-500g",
    "storeId": "store-24",
    "price": 8.59
  },
  {
    "productId": "challah-500g",
    "storeId": "store-25",
    "price": 8.64
  },
  {
    "productId": "challah-500g",
    "storeId": "store-26",
    "price": 8.12,
    "salePrice": 5.91
  },
  {
    "productId": "challah-500g",
    "storeId": "store-27",
    "price": 9.5
  },
  {
    "productId": "challah-500g",
    "storeId": "store-28",
    "price": 9.12,
    "salePrice": 7.27
  },
  {
    "productId": "challah-500g",
    "storeId": "store-29",
    "price": 9.5
  },
  {
    "productId": "challah-500g",
    "storeId": "store-30",
    "price": 8.66
  },
  {
    "productId": "challah-500g",
    "storeId": "store-31",
    "price": 9.01
  },
  {
    "productId": "challah-500g",
    "storeId": "store-32",
    "price": 7.9
  },
  {
    "productId": "challah-500g",
    "storeId": "store-33",
    "price": 9.12
  },
  {
    "productId": "challah-500g",
    "storeId": "store-34",
    "price": 9.26,
    "salePrice": 7.93
  },
  {
    "productId": "challah-500g",
    "storeId": "store-35",
    "price": 9.51
  },
  {
    "productId": "challah-500g",
    "storeId": "store-36",
    "price": 8.47
  },
  {
    "productId": "challah-500g",
    "storeId": "store-37",
    "price": 8.93,
    "salePrice": 6.9
  },
  {
    "productId": "challah-500g",
    "storeId": "store-38",
    "price": 9.09
  },
  {
    "productId": "challah-500g",
    "storeId": "store-39",
    "price": 9.05
  },
  {
    "productId": "challah-500g",
    "storeId": "store-40",
    "price": 8.72
  },
  {
    "productId": "challah-500g",
    "storeId": "store-41",
    "price": 8.68
  },
  {
    "productId": "challah-500g",
    "storeId": "store-42",
    "price": 9.35
  },
  {
    "productId": "challah-500g",
    "storeId": "store-43",
    "price": 9.3
  },
  {
    "productId": "challah-500g",
    "storeId": "store-44",
    "price": 9.91
  },
  {
    "productId": "challah-500g",
    "storeId": "store-45",
    "price": 9.75
  },
  {
    "productId": "challah-500g",
    "storeId": "store-46",
    "price": 8.7
  },
  {
    "productId": "challah-500g",
    "storeId": "store-47",
    "price": 8.72
  },
  {
    "productId": "challah-500g",
    "storeId": "store-48",
    "price": 8.04
  },
  {
    "productId": "challah-500g",
    "storeId": "store-49",
    "price": 9.78
  },
  {
    "productId": "challah-500g",
    "storeId": "store-50",
    "price": 9.33
  },
  {
    "productId": "challah-500g",
    "storeId": "store-51",
    "price": 9.39
  },
  {
    "productId": "challah-500g",
    "storeId": "store-52",
    "price": 9.05
  },
  {
    "productId": "challah-500g",
    "storeId": "store-53",
    "price": 8.45
  },
  {
    "productId": "challah-500g",
    "storeId": "store-54",
    "price": 8.95
  },
  {
    "productId": "challah-500g",
    "storeId": "store-55",
    "price": 8.53
  },
  {
    "productId": "challah-500g",
    "storeId": "store-56",
    "price": 9.76,
    "salePrice": 7.82
  },
  {
    "productId": "challah-500g",
    "storeId": "store-57",
    "price": 8.98
  },
  {
    "productId": "challah-500g",
    "storeId": "store-58",
    "price": 9.06
  },
  {
    "productId": "challah-500g",
    "storeId": "store-59",
    "price": 9.08
  },
  {
    "productId": "challah-500g",
    "storeId": "store-60",
    "price": 9.68
  },
  {
    "productId": "challah-500g",
    "storeId": "store-61",
    "price": 9.69
  },
  {
    "productId": "challah-500g",
    "storeId": "store-62",
    "price": 9.94
  },
  {
    "productId": "challah-500g",
    "storeId": "store-63",
    "price": 9.22
  },
  {
    "productId": "challah-500g",
    "storeId": "store-64",
    "price": 9.79,
    "salePrice": 8.63
  },
  {
    "productId": "challah-500g",
    "storeId": "store-65",
    "price": 8.09,
    "salePrice": 5.87
  },
  {
    "productId": "challah-500g",
    "storeId": "store-66",
    "price": 8.41,
    "salePrice": 6.4
  },
  {
    "productId": "challah-500g",
    "storeId": "store-67",
    "price": 9.9
  },
  {
    "productId": "challah-500g",
    "storeId": "store-68",
    "price": 8.96
  },
  {
    "productId": "challah-500g",
    "storeId": "store-69",
    "price": 8.57
  },
  {
    "productId": "challah-500g",
    "storeId": "store-70",
    "price": 8.53,
    "salePrice": 6.28
  },
  {
    "productId": "challah-500g",
    "storeId": "store-71",
    "price": 9.58
  },
  {
    "productId": "challah-500g",
    "storeId": "store-72",
    "price": 9.05
  },
  {
    "productId": "challah-500g",
    "storeId": "store-73",
    "price": 9.31
  },
  {
    "productId": "challah-500g",
    "storeId": "store-74",
    "price": 9.36
  },
  {
    "productId": "challah-500g",
    "storeId": "store-75",
    "price": 8.57
  },
  {
    "productId": "challah-500g",
    "storeId": "store-76",
    "price": 9.01
  },
  {
    "productId": "challah-500g",
    "storeId": "store-77",
    "price": 8.72
  },
  {
    "productId": "challah-500g",
    "storeId": "store-78",
    "price": 8.73
  },
  {
    "productId": "challah-500g",
    "storeId": "store-79",
    "price": 8.98
  },
  {
    "productId": "challah-500g",
    "storeId": "store-80",
    "price": 8.05
  },
  {
    "productId": "challah-500g",
    "storeId": "store-81",
    "price": 9.55
  },
  {
    "productId": "challah-500g",
    "storeId": "store-82",
    "price": 9.7
  },
  {
    "productId": "challah-500g",
    "storeId": "store-83",
    "price": 8.82
  },
  {
    "productId": "challah-500g",
    "storeId": "store-84",
    "price": 8.86
  },
  {
    "productId": "challah-500g",
    "storeId": "store-85",
    "price": 8.69
  },
  {
    "productId": "challah-500g",
    "storeId": "store-86",
    "price": 9.27
  },
  {
    "productId": "challah-500g",
    "storeId": "store-87",
    "price": 9.72
  },
  {
    "productId": "challah-500g",
    "storeId": "store-88",
    "price": 8.81
  },
  {
    "productId": "challah-500g",
    "storeId": "store-89",
    "price": 8.7
  },
  {
    "productId": "challah-500g",
    "storeId": "store-90",
    "price": 8.15
  },
  {
    "productId": "challah-500g",
    "storeId": "store-91",
    "price": 8.15,
    "salePrice": 6.29
  },
  {
    "productId": "challah-500g",
    "storeId": "store-92",
    "price": 8.98
  },
  {
    "productId": "challah-500g",
    "storeId": "store-93",
    "price": 9.25,
    "salePrice": 6.65
  },
  {
    "productId": "challah-500g",
    "storeId": "store-94",
    "price": 8.67
  },
  {
    "productId": "challah-500g",
    "storeId": "store-95",
    "price": 7.64
  },
  {
    "productId": "challah-500g",
    "storeId": "store-96",
    "price": 9.55
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-1",
    "price": 7.76
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-2",
    "price": 9.03
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-3",
    "price": 8.74
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-4",
    "price": 8.62
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-5",
    "price": 7.98,
    "salePrice": 5.85
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-6",
    "price": 8.35
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-7",
    "price": 9.06,
    "salePrice": 6.94
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-8",
    "price": 8.86
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-9",
    "price": 8.78
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-10",
    "price": 8.93
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-11",
    "price": 9.6,
    "salePrice": 6.83
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-12",
    "price": 9.28,
    "salePrice": 7.2
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-13",
    "price": 8.85
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-14",
    "price": 7.74
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-15",
    "price": 8.59,
    "salePrice": 6.82
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-16",
    "price": 9.77
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-17",
    "price": 7.95
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-18",
    "price": 9.18,
    "salePrice": 6.63
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-19",
    "price": 9.15
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-20",
    "price": 9.48,
    "salePrice": 8.42
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-21",
    "price": 9.07
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-22",
    "price": 9.03
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-23",
    "price": 9.47
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-24",
    "price": 8.71
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-25",
    "price": 9.02
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-26",
    "price": 7.79
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-27",
    "price": 9.65
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-28",
    "price": 8.49
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-29",
    "price": 9.75
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-30",
    "price": 9.14
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-31",
    "price": 8.68
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-32",
    "price": 7.57
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-33",
    "price": 9.09
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-34",
    "price": 8.72
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-35",
    "price": 9.61
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-36",
    "price": 8.89,
    "salePrice": 7.07
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-37",
    "price": 8.85
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-38",
    "price": 8.96
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-39",
    "price": 8.65
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-40",
    "price": 8.73
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-41",
    "price": 9.09
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-42",
    "price": 9.18,
    "salePrice": 7.41
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-43",
    "price": 8.77
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-44",
    "price": 10.04
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-45",
    "price": 9.76
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-46",
    "price": 8.09
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-47",
    "price": 9.3
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-48",
    "price": 8.46,
    "salePrice": 7.36
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-49",
    "price": 10.0,
    "salePrice": 7.5
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-50",
    "price": 9.31
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-51",
    "price": 8.65,
    "salePrice": 7.65
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-52",
    "price": 9.28
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-53",
    "price": 7.87
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-54",
    "price": 9.24
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-55",
    "price": 7.86
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-56",
    "price": 10.05
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-57",
    "price": 9.12,
    "salePrice": 8.02
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-58",
    "price": 9.73
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-59",
    "price": 9.13
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-60",
    "price": 9.76
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-61",
    "price": 9.62
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-62",
    "price": 10.0
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-63",
    "price": 9.77
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-64",
    "price": 9.84
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-65",
    "price": 8.08
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-66",
    "price": 7.89
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-67",
    "price": 9.86
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-68",
    "price": 9.04
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-69",
    "price": 9.16
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-70",
    "price": 9.18
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-71",
    "price": 9.56
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-72",
    "price": 8.89
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-73",
    "price": 8.86
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-74",
    "price": 9.4
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-75",
    "price": 8.63
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-76",
    "price": 8.51,
    "salePrice": 6.99
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-77",
    "price": 9.24,
    "salePrice": 7.91
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-78",
    "price": 8.87
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-79",
    "price": 8.79
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-80",
    "price": 8.37
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-81",
    "price": 9.56
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-82",
    "price": 9.76
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-83",
    "price": 8.67
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-84",
    "price": 8.54,
    "salePrice": 7.4
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-85",
    "price": 9.11
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-86",
    "price": 9.12,
    "salePrice": 7.34
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-87",
    "price": 9.76
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-88",
    "price": 9.28
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-89",
    "price": 8.6
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-90",
    "price": 7.98,
    "salePrice": 5.74
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-91",
    "price": 7.78
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-92",
    "price": 9.2
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-93",
    "price": 8.53
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-94",
    "price": 9.04
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-95",
    "price": 8.34
  },
  {
    "productId": "tomatoes-kg",
    "storeId": "store-96",
    "price": 9.48
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-1",
    "price": 5.69
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-2",
    "price": 6.75
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-3",
    "price": 6.69
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-4",
    "price": 6.4,
    "salePrice": 5.57
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-5",
    "price": 5.89,
    "salePrice": 4.81
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-6",
    "price": 5.63
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-7",
    "price": 6.73
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-8",
    "price": 6.26
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-9",
    "price": 6.44
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-10",
    "price": 6.33
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-11",
    "price": 7.03
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-12",
    "price": 6.18
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-13",
    "price": 6.7
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-14",
    "price": 5.92
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-15",
    "price": 6.62
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-16",
    "price": 7.09
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-17",
    "price": 5.93
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-18",
    "price": 6.32
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-19",
    "price": 6.54
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-20",
    "price": 6.89
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-21",
    "price": 6.58
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-22",
    "price": 6.55
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-23",
    "price": 6.83
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-24",
    "price": 6.76
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-25",
    "price": 6.46
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-26",
    "price": 5.71,
    "salePrice": 4.88
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-27",
    "price": 7.08
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-28",
    "price": 6.44
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-29",
    "price": 7.14,
    "salePrice": 5.47
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-30",
    "price": 6.36
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-31",
    "price": 6.74
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-32",
    "price": 5.57
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-33",
    "price": 6.28,
    "salePrice": 4.67
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-34",
    "price": 6.77
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-35",
    "price": 7.15,
    "salePrice": 5.43
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-36",
    "price": 6.19
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-37",
    "price": 6.74
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-38",
    "price": 6.82
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-39",
    "price": 6.58
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-40",
    "price": 6.86
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-41",
    "price": 7.07
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-42",
    "price": 6.54
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-43",
    "price": 6.56
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-44",
    "price": 7.13
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-45",
    "price": 7.08,
    "salePrice": 5.99
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-46",
    "price": 5.82
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-47",
    "price": 6.72
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-48",
    "price": 6.06
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-49",
    "price": 7.1
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-50",
    "price": 6.47,
    "salePrice": 5.07
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-51",
    "price": 6.6
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-52",
    "price": 6.72,
    "salePrice": 5.66
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-53",
    "price": 6.06
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-54",
    "price": 6.83
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-55",
    "price": 6.04
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-56",
    "price": 7.11
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-57",
    "price": 6.28
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-58",
    "price": 6.37
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-59",
    "price": 6.63
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-60",
    "price": 7.1
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-61",
    "price": 7.23
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-62",
    "price": 7.12
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-63",
    "price": 7.07
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-64",
    "price": 7.14
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-65",
    "price": 6.24,
    "salePrice": 5.57
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-66",
    "price": 5.85
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-67",
    "price": 7.35
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-68",
    "price": 6.4
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-69",
    "price": 6.27
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-70",
    "price": 6.24
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-71",
    "price": 6.89
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-72",
    "price": 6.32
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-73",
    "price": 6.56
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-74",
    "price": 6.91,
    "salePrice": 5.08
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-75",
    "price": 6.51
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-76",
    "price": 6.47
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-77",
    "price": 6.32,
    "salePrice": 5.17
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-78",
    "price": 6.41
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-79",
    "price": 6.57
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-80",
    "price": 5.61
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-81",
    "price": 7.0
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-82",
    "price": 7.1,
    "salePrice": 6.31
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-83",
    "price": 6.71,
    "salePrice": 5.91
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-84",
    "price": 6.61
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-85",
    "price": 6.32
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-86",
    "price": 6.59,
    "salePrice": 4.97
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-87",
    "price": 7.05
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-88",
    "price": 6.24
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-89",
    "price": 6.42
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-90",
    "price": 5.65,
    "salePrice": 4.34
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-91",
    "price": 5.98
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-92",
    "price": 6.18
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-93",
    "price": 6.7
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-94",
    "price": 6.49
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-95",
    "price": 5.54
  },
  {
    "productId": "cucumbers-kg",
    "storeId": "store-96",
    "price": 6.85,
    "salePrice": 5.51
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-1",
    "price": 11.58
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-2",
    "price": 13.18,
    "salePrice": 10.49
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-3",
    "price": 12.43
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-4",
    "price": 12.5
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-5",
    "price": 12.17
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-6",
    "price": 11.2
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-7",
    "price": 12.65,
    "salePrice": 10.84
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-8",
    "price": 13.03
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-9",
    "price": 13.44
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-10",
    "price": 13.02,
    "salePrice": 9.76
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-11",
    "price": 13.68,
    "salePrice": 11.86
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-12",
    "price": 12.84
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-13",
    "price": 13.45
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-14",
    "price": 11.61,
    "salePrice": 8.68
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-15",
    "price": 12.62
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-16",
    "price": 13.86
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-17",
    "price": 11.81
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-18",
    "price": 12.55
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-19",
    "price": 12.44
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-20",
    "price": 13.79
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-21",
    "price": 13.12
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-22",
    "price": 12.28
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-23",
    "price": 13.57,
    "salePrice": 10.05
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-24",
    "price": 12.53,
    "salePrice": 9.71
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-25",
    "price": 13.25
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-26",
    "price": 12.12
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-27",
    "price": 13.93
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-28",
    "price": 13.1
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-29",
    "price": 13.83
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-30",
    "price": 13.39
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-31",
    "price": 13.51
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-32",
    "price": 11.73
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-33",
    "price": 12.32,
    "salePrice": 8.89
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-34",
    "price": 12.56
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-35",
    "price": 13.61
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-36",
    "price": 12.95
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-37",
    "price": 12.47,
    "salePrice": 9.28
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-38",
    "price": 13.51
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-39",
    "price": 12.9
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-40",
    "price": 13.24
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-41",
    "price": 13.6,
    "salePrice": 11.22
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-42",
    "price": 13.53
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-43",
    "price": 13.87
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-44",
    "price": 14.31,
    "salePrice": 11.14
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-45",
    "price": 14.55
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-46",
    "price": 11.29
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-47",
    "price": 12.85,
    "salePrice": 9.47
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-48",
    "price": 12.41,
    "salePrice": 9.6
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-49",
    "price": 14.26
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-50",
    "price": 13.0
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-51",
    "price": 13.1
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-52",
    "price": 13.4
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-53",
    "price": 12.37,
    "salePrice": 10.77
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-54",
    "price": 13.72
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-55",
    "price": 11.49
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-56",
    "price": 14.34,
    "salePrice": 10.51
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-57",
    "price": 13.57
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-58",
    "price": 12.82
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-59",
    "price": 12.92
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-60",
    "price": 13.93
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-61",
    "price": 14.29,
    "salePrice": 11.22
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-62",
    "price": 14.1,
    "salePrice": 10.66
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-63",
    "price": 13.3
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-64",
    "price": 13.99
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-65",
    "price": 12.41
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-66",
    "price": 11.81
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-67",
    "price": 14.11
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-68",
    "price": 13.11,
    "salePrice": 10.53
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-69",
    "price": 13.16,
    "salePrice": 11.79
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-70",
    "price": 12.96
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-71",
    "price": 13.78,
    "salePrice": 11.13
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-72",
    "price": 13.53
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-73",
    "price": 12.68
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-74",
    "price": 13.93
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-75",
    "price": 12.88,
    "salePrice": 9.27
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-76",
    "price": 12.34
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-77",
    "price": 13.3
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-78",
    "price": 13.4
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-79",
    "price": 12.76
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-80",
    "price": 12.08
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-81",
    "price": 13.96
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-82",
    "price": 13.67,
    "salePrice": 12.13
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-83",
    "price": 12.97
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-84",
    "price": 12.42
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-85",
    "price": 13.1
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-86",
    "price": 13.51
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-87",
    "price": 14.07
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-88",
    "price": 12.37
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-89",
    "price": 12.45,
    "salePrice": 10.88
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-90",
    "price": 11.14
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-91",
    "price": 11.32,
    "salePrice": 9.18
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-92",
    "price": 13.39
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-93",
    "price": 12.36,
    "salePrice": 10.5
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-94",
    "price": 12.86
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-95",
    "price": 11.82
  },
  {
    "productId": "peppers-red-kg",
    "storeId": "store-96",
    "price": 14.14,
    "salePrice": 11.78
  },
  {
    "productId": "onions-kg",
    "storeId": "store-1",
    "price": 4.5
  },
  {
    "productId": "onions-kg",
    "storeId": "store-2",
    "price": 4.98,
    "salePrice": 3.78
  },
  {
    "productId": "onions-kg",
    "storeId": "store-3",
    "price": 4.72
  },
  {
    "productId": "onions-kg",
    "storeId": "store-4",
    "price": 4.82
  },
  {
    "productId": "onions-kg",
    "storeId": "store-5",
    "price": 4.62,
    "salePrice": 3.41
  },
  {
    "productId": "onions-kg",
    "storeId": "store-6",
    "price": 4.21,
    "salePrice": 3.67
  },
  {
    "productId": "onions-kg",
    "storeId": "store-7",
    "price": 4.71
  },
  {
    "productId": "onions-kg",
    "storeId": "store-8",
    "price": 5.05
  },
  {
    "productId": "onions-kg",
    "storeId": "store-9",
    "price": 4.95
  },
  {
    "productId": "onions-kg",
    "storeId": "store-10",
    "price": 4.76
  },
  {
    "productId": "onions-kg",
    "storeId": "store-11",
    "price": 5.37
  },
  {
    "productId": "onions-kg",
    "storeId": "store-12",
    "price": 4.68
  },
  {
    "productId": "onions-kg",
    "storeId": "store-13",
    "price": 5.07
  },
  {
    "productId": "onions-kg",
    "storeId": "store-14",
    "price": 4.52
  },
  {
    "productId": "onions-kg",
    "storeId": "store-15",
    "price": 4.79
  },
  {
    "productId": "onions-kg",
    "storeId": "store-16",
    "price": 5.23
  },
  {
    "productId": "onions-kg",
    "storeId": "store-17",
    "price": 4.25
  },
  {
    "productId": "onions-kg",
    "storeId": "store-18",
    "price": 5.08
  },
  {
    "productId": "onions-kg",
    "storeId": "store-19",
    "price": 5.04
  },
  {
    "productId": "onions-kg",
    "storeId": "store-20",
    "price": 5.34,
    "salePrice": 4.62
  },
  {
    "productId": "onions-kg",
    "storeId": "store-21",
    "price": 5.11
  },
  {
    "productId": "onions-kg",
    "storeId": "store-22",
    "price": 4.66
  },
  {
    "productId": "onions-kg",
    "storeId": "store-23",
    "price": 5.36
  },
  {
    "productId": "onions-kg",
    "storeId": "store-24",
    "price": 5.08
  },
  {
    "productId": "onions-kg",
    "storeId": "store-25",
    "price": 5.06
  },
  {
    "productId": "onions-kg",
    "storeId": "store-26",
    "price": 4.45
  },
  {
    "productId": "onions-kg",
    "storeId": "store-27",
    "price": 5.29
  },
  {
    "productId": "onions-kg",
    "storeId": "store-28",
    "price": 4.94
  },
  {
    "productId": "onions-kg",
    "storeId": "store-29",
    "price": 5.23
  },
  {
    "productId": "onions-kg",
    "storeId": "store-30",
    "price": 4.89
  },
  {
    "productId": "onions-kg",
    "storeId": "store-31",
    "price": 4.86
  },
  {
    "productId": "onions-kg",
    "storeId": "store-32",
    "price": 4.27
  },
  {
    "productId": "onions-kg",
    "storeId": "store-33",
    "price": 4.73
  },
  {
    "productId": "onions-kg",
    "storeId": "store-34",
    "price": 4.78
  },
  {
    "productId": "onions-kg",
    "storeId": "store-35",
    "price": 5.18
  },
  {
    "productId": "onions-kg",
    "storeId": "store-36",
    "price": 5.04
  },
  {
    "productId": "onions-kg",
    "storeId": "store-37",
    "price": 4.77
  },
  {
    "productId": "onions-kg",
    "storeId": "store-38",
    "price": 4.66
  },
  {
    "productId": "onions-kg",
    "storeId": "store-39",
    "price": 4.89
  },
  {
    "productId": "onions-kg",
    "storeId": "store-40",
    "price": 5.23,
    "salePrice": 4.56
  },
  {
    "productId": "onions-kg",
    "storeId": "store-41",
    "price": 4.83
  },
  {
    "productId": "onions-kg",
    "storeId": "store-42",
    "price": 5.15,
    "salePrice": 4.34
  },
  {
    "productId": "onions-kg",
    "storeId": "store-43",
    "price": 5.35
  },
  {
    "productId": "onions-kg",
    "storeId": "store-44",
    "price": 5.47
  },
  {
    "productId": "onions-kg",
    "storeId": "store-45",
    "price": 5.42
  },
  {
    "productId": "onions-kg",
    "storeId": "store-46",
    "price": 4.27
  },
  {
    "productId": "onions-kg",
    "storeId": "store-47",
    "price": 5.3,
    "salePrice": 4.69
  },
  {
    "productId": "onions-kg",
    "storeId": "store-48",
    "price": 4.69,
    "salePrice": 3.73
  },
  {
    "productId": "onions-kg",
    "storeId": "store-49",
    "price": 5.47
  },
  {
    "productId": "onions-kg",
    "storeId": "store-50",
    "price": 5.18
  },
  {
    "productId": "onions-kg",
    "storeId": "store-51",
    "price": 4.99
  },
  {
    "productId": "onions-kg",
    "storeId": "store-52",
    "price": 5.08
  },
  {
    "productId": "onions-kg",
    "storeId": "store-53",
    "price": 4.54,
    "salePrice": 3.85
  },
  {
    "productId": "onions-kg",
    "storeId": "store-54",
    "price": 5.25
  },
  {
    "productId": "onions-kg",
    "storeId": "store-55",
    "price": 4.42
  },
  {
    "productId": "onions-kg",
    "storeId": "store-56",
    "price": 5.23
  },
  {
    "productId": "onions-kg",
    "storeId": "store-57",
    "price": 4.84
  },
  {
    "productId": "onions-kg",
    "storeId": "store-58",
    "price": 4.81
  },
  {
    "productId": "onions-kg",
    "storeId": "store-59",
    "price": 4.95
  },
  {
    "productId": "onions-kg",
    "storeId": "store-60",
    "price": 5.22
  },
  {
    "productId": "onions-kg",
    "storeId": "store-61",
    "price": 5.37
  },
  {
    "productId": "onions-kg",
    "storeId": "store-62",
    "price": 5.43
  },
  {
    "productId": "onions-kg",
    "storeId": "store-63",
    "price": 5.05
  },
  {
    "productId": "onions-kg",
    "storeId": "store-64",
    "price": 5.46
  },
  {
    "productId": "onions-kg",
    "storeId": "store-65",
    "price": 4.51
  },
  {
    "productId": "onions-kg",
    "storeId": "store-66",
    "price": 4.61
  },
  {
    "productId": "onions-kg",
    "storeId": "store-67",
    "price": 5.46
  },
  {
    "productId": "onions-kg",
    "storeId": "store-68",
    "price": 4.9
  },
  {
    "productId": "onions-kg",
    "storeId": "store-69",
    "price": 5.08
  },
  {
    "productId": "onions-kg",
    "storeId": "store-70",
    "price": 4.84,
    "salePrice": 4.03
  },
  {
    "productId": "onions-kg",
    "storeId": "store-71",
    "price": 5.28
  },
  {
    "productId": "onions-kg",
    "storeId": "store-72",
    "price": 4.79
  },
  {
    "productId": "onions-kg",
    "storeId": "store-73",
    "price": 4.7
  },
  {
    "productId": "onions-kg",
    "storeId": "store-74",
    "price": 5.16,
    "salePrice": 3.95
  },
  {
    "productId": "onions-kg",
    "storeId": "store-75",
    "price": 5.11
  },
  {
    "productId": "onions-kg",
    "storeId": "store-76",
    "price": 4.8
  },
  {
    "productId": "onions-kg",
    "storeId": "store-77",
    "price": 5.02
  },
  {
    "productId": "onions-kg",
    "storeId": "store-78",
    "price": 5.1
  },
  {
    "productId": "onions-kg",
    "storeId": "store-79",
    "price": 4.66
  },
  {
    "productId": "onions-kg",
    "storeId": "store-80",
    "price": 4.31,
    "salePrice": 3.86
  },
  {
    "productId": "onions-kg",
    "storeId": "store-81",
    "price": 5.28
  },
  {
    "productId": "onions-kg",
    "storeId": "store-82",
    "price": 5.24,
    "salePrice": 4.5
  },
  {
    "productId": "onions-kg",
    "storeId": "store-83",
    "price": 4.8
  },
  {
    "productId": "onions-kg",
    "storeId": "store-84",
    "price": 4.9
  },
  {
    "productId": "onions-kg",
    "storeId": "store-85",
    "price": 5.05
  },
  {
    "productId": "onions-kg",
    "storeId": "store-86",
    "price": 4.82,
    "salePrice": 3.83
  },
  {
    "productId": "onions-kg",
    "storeId": "store-87",
    "price": 5.38
  },
  {
    "productId": "onions-kg",
    "storeId": "store-88",
    "price": 4.93
  },
  {
    "productId": "onions-kg",
    "storeId": "store-89",
    "price": 5.05
  },
  {
    "productId": "onions-kg",
    "storeId": "store-90",
    "price": 4.22
  },
  {
    "productId": "onions-kg",
    "storeId": "store-91",
    "price": 4.51,
    "salePrice": 3.3
  },
  {
    "productId": "onions-kg",
    "storeId": "store-92",
    "price": 5.1
  },
  {
    "productId": "onions-kg",
    "storeId": "store-93",
    "price": 5.03
  },
  {
    "productId": "onions-kg",
    "storeId": "store-94",
    "price": 5.01,
    "salePrice": 3.94
  },
  {
    "productId": "onions-kg",
    "storeId": "store-95",
    "price": 4.61,
    "salePrice": 3.72
  },
  {
    "productId": "onions-kg",
    "storeId": "store-96",
    "price": 5.35
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-1",
    "price": 5.17
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-2",
    "price": 5.37
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-3",
    "price": 5.55
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-4",
    "price": 5.58
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-5",
    "price": 5.03
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-6",
    "price": 4.92
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-7",
    "price": 5.4
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-8",
    "price": 5.64
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-9",
    "price": 5.77
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-10",
    "price": 5.29
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-11",
    "price": 5.89,
    "salePrice": 4.74
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-12",
    "price": 5.71
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-13",
    "price": 5.42
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-14",
    "price": 4.85
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-15",
    "price": 5.48
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-16",
    "price": 5.84
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-17",
    "price": 4.75
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-18",
    "price": 5.41
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-19",
    "price": 5.49
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-20",
    "price": 5.92
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-21",
    "price": 5.77
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-22",
    "price": 5.53
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-23",
    "price": 6.04
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-24",
    "price": 5.64,
    "salePrice": 4.67
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-25",
    "price": 5.46
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-26",
    "price": 5.03
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-27",
    "price": 5.91,
    "salePrice": 5.17
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-28",
    "price": 5.64
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-29",
    "price": 6.03
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-30",
    "price": 5.6
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-31",
    "price": 5.29,
    "salePrice": 4.13
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-32",
    "price": 5.05
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-33",
    "price": 5.7
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-34",
    "price": 5.23
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-35",
    "price": 5.98
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-36",
    "price": 5.6
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-37",
    "price": 5.46
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-38",
    "price": 5.63
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-39",
    "price": 5.63
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-40",
    "price": 5.99
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-41",
    "price": 5.71
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-42",
    "price": 5.56,
    "salePrice": 4.91
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-43",
    "price": 5.34
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-44",
    "price": 6.08
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-45",
    "price": 5.96
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-46",
    "price": 5.11,
    "salePrice": 4.32
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-47",
    "price": 5.79
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-48",
    "price": 5.13
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-49",
    "price": 5.94
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-50",
    "price": 5.63
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-51",
    "price": 5.84,
    "salePrice": 4.37
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-52",
    "price": 5.78
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-53",
    "price": 5.22
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-54",
    "price": 5.96,
    "salePrice": 4.99
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-55",
    "price": 5.06
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-56",
    "price": 6.33
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-57",
    "price": 5.64
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-58",
    "price": 5.82
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-59",
    "price": 5.42
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-60",
    "price": 6.2
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-61",
    "price": 6.02
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-62",
    "price": 6.09
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-63",
    "price": 5.84
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-64",
    "price": 5.86
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-65",
    "price": 4.86
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-66",
    "price": 4.89
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-67",
    "price": 6.07,
    "salePrice": 5.07
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-68",
    "price": 5.88
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-69",
    "price": 5.37
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-70",
    "price": 5.35
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-71",
    "price": 5.79
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-72",
    "price": 5.25
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-73",
    "price": 5.67,
    "salePrice": 4.01
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-74",
    "price": 5.83
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-75",
    "price": 5.47
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-76",
    "price": 5.55
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-77",
    "price": 5.61
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-78",
    "price": 5.66
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-79",
    "price": 5.72
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-80",
    "price": 5.09
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-81",
    "price": 5.81
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-82",
    "price": 5.89
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-83",
    "price": 5.3,
    "salePrice": 4.23
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-84",
    "price": 5.48
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-85",
    "price": 5.37,
    "salePrice": 4.21
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-86",
    "price": 5.45
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-87",
    "price": 5.94
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-88",
    "price": 5.54
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-89",
    "price": 5.57
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-90",
    "price": 5.05,
    "salePrice": 3.63
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-91",
    "price": 5.06,
    "salePrice": 4.24
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-92",
    "price": 5.46
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-93",
    "price": 5.29
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-94",
    "price": 5.36
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-95",
    "price": 4.7
  },
  {
    "productId": "potatoes-kg",
    "storeId": "store-96",
    "price": 6.0,
    "salePrice": 4.38
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-1",
    "price": 4.55
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-2",
    "price": 4.74
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-3",
    "price": 4.7
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-4",
    "price": 4.77
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-5",
    "price": 4.27
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-6",
    "price": 4.36,
    "salePrice": 3.5
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-7",
    "price": 5.01
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-8",
    "price": 4.98
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-9",
    "price": 5.08
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-10",
    "price": 4.76
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-11",
    "price": 5.17
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-12",
    "price": 4.77
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-13",
    "price": 4.87
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-14",
    "price": 4.49
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-15",
    "price": 4.99
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-16",
    "price": 5.37
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-17",
    "price": 4.4
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-18",
    "price": 5.12
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-19",
    "price": 4.71
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-20",
    "price": 5.23
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-21",
    "price": 4.75
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-22",
    "price": 4.99
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-23",
    "price": 5.32,
    "salePrice": 3.94
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-24",
    "price": 4.91
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-25",
    "price": 5.03
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-26",
    "price": 4.17
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-27",
    "price": 5.32,
    "salePrice": 4.74
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-28",
    "price": 4.95
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-29",
    "price": 5.33
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-30",
    "price": 4.92
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-31",
    "price": 4.85
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-32",
    "price": 4.22
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-33",
    "price": 4.7,
    "salePrice": 3.33
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-34",
    "price": 4.81
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-35",
    "price": 5.21,
    "salePrice": 4.16
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-36",
    "price": 4.66
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-37",
    "price": 4.8
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-38",
    "price": 4.67,
    "salePrice": 3.66
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-39",
    "price": 5.14
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-40",
    "price": 5.18
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-41",
    "price": 4.82
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-42",
    "price": 4.73,
    "salePrice": 3.45
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-43",
    "price": 4.88
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-44",
    "price": 5.27
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-45",
    "price": 5.54
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-46",
    "price": 4.32
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-47",
    "price": 5.33
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-48",
    "price": 4.65
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-49",
    "price": 5.32
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-50",
    "price": 4.71
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-51",
    "price": 4.99
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-52",
    "price": 5.26
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-53",
    "price": 4.47,
    "salePrice": 3.38
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-54",
    "price": 5.07
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-55",
    "price": 4.71
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-56",
    "price": 5.48
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-57",
    "price": 5.03
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-58",
    "price": 5.26
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-59",
    "price": 5.12
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-60",
    "price": 5.39
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-61",
    "price": 5.4,
    "salePrice": 3.84
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-62",
    "price": 5.28
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-63",
    "price": 5.17
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-64",
    "price": 5.28
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-65",
    "price": 4.31,
    "salePrice": 3.76
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-66",
    "price": 4.73
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-67",
    "price": 5.42
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-68",
    "price": 5.23
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-69",
    "price": 4.88
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-70",
    "price": 4.99,
    "salePrice": 4.0
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-71",
    "price": 5.38,
    "salePrice": 3.99
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-72",
    "price": 4.92
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-73",
    "price": 4.99
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-74",
    "price": 5.23
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-75",
    "price": 5.03,
    "salePrice": 4.02
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-76",
    "price": 4.81
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-77",
    "price": 5.02
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-78",
    "price": 4.88
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-79",
    "price": 5.09
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-80",
    "price": 4.36
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-81",
    "price": 5.23
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-82",
    "price": 5.33
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-83",
    "price": 4.72,
    "salePrice": 3.66
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-84",
    "price": 4.74,
    "salePrice": 3.41
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-85",
    "price": 5.14
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-86",
    "price": 4.95
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-87",
    "price": 5.31
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-88",
    "price": 4.96
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-89",
    "price": 4.88
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-90",
    "price": 4.19
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-91",
    "price": 4.39
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-92",
    "price": 4.89
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-93",
    "price": 4.86,
    "salePrice": 3.42
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-94",
    "price": 5.14
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-95",
    "price": 4.21
  },
  {
    "productId": "carrots-kg",
    "storeId": "store-96",
    "price": 5.32
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-1",
    "price": 5.32
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-2",
    "price": 6.1
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-3",
    "price": 5.62
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-4",
    "price": 5.98
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-5",
    "price": 5.3,
    "salePrice": 4.49
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-6",
    "price": 5.1
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-7",
    "price": 6.08,
    "salePrice": 4.26
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-8",
    "price": 6.19
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-9",
    "price": 5.74,
    "salePrice": 4.33
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-10",
    "price": 6.1
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-11",
    "price": 6.37
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-12",
    "price": 6.17
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-13",
    "price": 6.07,
    "salePrice": 4.8
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-14",
    "price": 5.21,
    "salePrice": 4.52
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-15",
    "price": 6.03
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-16",
    "price": 6.41
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-17",
    "price": 5.43
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-18",
    "price": 5.87
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-19",
    "price": 6.0
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-20",
    "price": 6.42
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-21",
    "price": 5.79
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-22",
    "price": 6.05
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-23",
    "price": 6.41
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-24",
    "price": 5.83
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-25",
    "price": 5.76
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-26",
    "price": 5.09,
    "salePrice": 4.21
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-27",
    "price": 6.4
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-28",
    "price": 5.92
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-29",
    "price": 6.35,
    "salePrice": 5.4
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-30",
    "price": 5.8
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-31",
    "price": 6.12
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-32",
    "price": 5.18
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-33",
    "price": 5.97
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-34",
    "price": 5.65
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-35",
    "price": 6.3
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-36",
    "price": 6.17
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-37",
    "price": 6.16
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-38",
    "price": 5.89
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-39",
    "price": 5.76
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-40",
    "price": 6.07,
    "salePrice": 5.1
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-41",
    "price": 5.86
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-42",
    "price": 6.24
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-43",
    "price": 6.01
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-44",
    "price": 6.65
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-45",
    "price": 6.75
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-46",
    "price": 5.24
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-47",
    "price": 6.03
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-48",
    "price": 5.29
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-49",
    "price": 6.67
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-50",
    "price": 5.92
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-51",
    "price": 6.08
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-52",
    "price": 5.86
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-53",
    "price": 5.24
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-54",
    "price": 6.21,
    "salePrice": 5.13
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-55",
    "price": 5.59,
    "salePrice": 4.36
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-56",
    "price": 6.4
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-57",
    "price": 5.96,
    "salePrice": 5.11
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-58",
    "price": 6.28
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-59",
    "price": 5.95
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-60",
    "price": 6.45
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-61",
    "price": 6.63
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-62",
    "price": 6.48
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-63",
    "price": 5.86
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-64",
    "price": 6.54,
    "salePrice": 5.64
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-65",
    "price": 5.75
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-66",
    "price": 5.44
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-67",
    "price": 6.59
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-68",
    "price": 6.02,
    "salePrice": 5.12
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-69",
    "price": 5.66
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-70",
    "price": 5.99,
    "salePrice": 5.28
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-71",
    "price": 6.45
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-72",
    "price": 5.66
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-73",
    "price": 5.96
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-74",
    "price": 6.46
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-75",
    "price": 5.78
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-76",
    "price": 6.0
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-77",
    "price": 5.97
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-78",
    "price": 5.78
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-79",
    "price": 5.97
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-80",
    "price": 5.28
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-81",
    "price": 6.45
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-82",
    "price": 6.2
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-83",
    "price": 5.75
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-84",
    "price": 5.71
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-85",
    "price": 6.07
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-86",
    "price": 6.17
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-87",
    "price": 6.4
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-88",
    "price": 5.84,
    "salePrice": 4.79
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-89",
    "price": 5.7,
    "salePrice": 3.99
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-90",
    "price": 5.04
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-91",
    "price": 5.36,
    "salePrice": 4.59
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-92",
    "price": 6.14
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-93",
    "price": 5.73
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-94",
    "price": 5.73
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-95",
    "price": 5.51
  },
  {
    "productId": "lettuce-unit",
    "storeId": "store-96",
    "price": 6.22
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-1",
    "price": 3.6,
    "salePrice": 2.55
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-2",
    "price": 3.74
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-3",
    "price": 3.75
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-4",
    "price": 3.98
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-5",
    "price": 3.4
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-6",
    "price": 3.37
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-7",
    "price": 3.91
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-8",
    "price": 3.87
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-9",
    "price": 3.98
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-10",
    "price": 3.97,
    "salePrice": 3.27
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-11",
    "price": 4.17
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-12",
    "price": 4.0
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-13",
    "price": 4.04,
    "salePrice": 3.51
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-14",
    "price": 3.65,
    "salePrice": 3.16
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-15",
    "price": 3.84
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-16",
    "price": 4.24
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-17",
    "price": 3.35,
    "salePrice": 2.42
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-18",
    "price": 3.8
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-19",
    "price": 4.01
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-20",
    "price": 4.16,
    "salePrice": 3.39
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-21",
    "price": 4.0
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-22",
    "price": 3.93
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-23",
    "price": 4.27
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-24",
    "price": 3.86
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-25",
    "price": 3.86
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-26",
    "price": 3.5
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-27",
    "price": 4.21
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-28",
    "price": 4.02
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-29",
    "price": 4.18
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-30",
    "price": 3.87
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-31",
    "price": 3.8
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-32",
    "price": 3.69
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-33",
    "price": 4.05,
    "salePrice": 3.35
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-34",
    "price": 3.81
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-35",
    "price": 4.13
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-36",
    "price": 4.01,
    "salePrice": 3.41
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-37",
    "price": 3.82
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-38",
    "price": 3.78
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-39",
    "price": 4.19
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-40",
    "price": 3.75
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-41",
    "price": 4.08
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-42",
    "price": 4.19
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-43",
    "price": 4.01
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-44",
    "price": 4.22,
    "salePrice": 3.63
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-45",
    "price": 4.12
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-46",
    "price": 3.58,
    "salePrice": 3.02
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-47",
    "price": 4.1
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-48",
    "price": 3.74
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-49",
    "price": 4.28
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-50",
    "price": 4.08
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-51",
    "price": 4.21
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-52",
    "price": 3.93
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-53",
    "price": 3.76
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-54",
    "price": 4.22
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-55",
    "price": 3.5
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-56",
    "price": 4.29,
    "salePrice": 3.13
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-57",
    "price": 4.08
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-58",
    "price": 3.88,
    "salePrice": 2.93
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-59",
    "price": 4.24
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-60",
    "price": 4.29
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-61",
    "price": 4.23
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-62",
    "price": 4.37,
    "salePrice": 3.43
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-63",
    "price": 4.01,
    "salePrice": 3.1
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-64",
    "price": 4.18
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-65",
    "price": 3.68,
    "salePrice": 2.58
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-66",
    "price": 3.6
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-67",
    "price": 4.28
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-68",
    "price": 4.26
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-69",
    "price": 3.94
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-70",
    "price": 3.91
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-71",
    "price": 4.25
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-72",
    "price": 3.76
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-73",
    "price": 4.08,
    "salePrice": 3.58
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-74",
    "price": 4.13
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-75",
    "price": 3.71
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-76",
    "price": 4.02
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-77",
    "price": 4.04,
    "salePrice": 2.91
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-78",
    "price": 3.72
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-79",
    "price": 3.85
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-80",
    "price": 3.67,
    "salePrice": 2.69
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-81",
    "price": 4.26
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-82",
    "price": 4.16,
    "salePrice": 3.53
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-83",
    "price": 3.76
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-84",
    "price": 3.75
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-85",
    "price": 3.87
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-86",
    "price": 3.82
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-87",
    "price": 4.1,
    "salePrice": 3.45
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-88",
    "price": 4.04
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-89",
    "price": 3.85,
    "salePrice": 3.32
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-90",
    "price": 3.54
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-91",
    "price": 3.34
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-92",
    "price": 3.75
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-93",
    "price": 3.88
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-94",
    "price": 4.07
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-95",
    "price": 3.66
  },
  {
    "productId": "avocado-unit",
    "storeId": "store-96",
    "price": 4.14
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-1",
    "price": 35.95
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-2",
    "price": 38.58
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-3",
    "price": 41.43,
    "salePrice": 37.07
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-4",
    "price": 38.77
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-5",
    "price": 36.09
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-6",
    "price": 34.25
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-7",
    "price": 40.49
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-8",
    "price": 38.26,
    "salePrice": 32.01
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-9",
    "price": 40.29
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-10",
    "price": 40.2
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-11",
    "price": 43.87
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-12",
    "price": 41.41
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-13",
    "price": 39.58,
    "salePrice": 34.02
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-14",
    "price": 36.37
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-15",
    "price": 38.44,
    "salePrice": 32.86
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-16",
    "price": 43.33
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-17",
    "price": 37.73
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-18",
    "price": 40.87
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-19",
    "price": 41.82,
    "salePrice": 30.51
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-20",
    "price": 42.0,
    "salePrice": 31.66
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-21",
    "price": 41.81
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-22",
    "price": 40.42,
    "salePrice": 32.43
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-23",
    "price": 42.14
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-24",
    "price": 39.95
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-25",
    "price": 38.79
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-26",
    "price": 36.64
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-27",
    "price": 43.1,
    "salePrice": 32.25
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-28",
    "price": 40.92
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-29",
    "price": 42.93
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-30",
    "price": 40.09
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-31",
    "price": 41.24
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-32",
    "price": 37.16
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-33",
    "price": 38.97,
    "salePrice": 34.35
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-34",
    "price": 40.21
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-35",
    "price": 43.88
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-36",
    "price": 41.53
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-37",
    "price": 39.21
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-38",
    "price": 39.79
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-39",
    "price": 38.22
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-40",
    "price": 41.89
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-41",
    "price": 40.95
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-42",
    "price": 40.03
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-43",
    "price": 39.83
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-44",
    "price": 44.92
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-45",
    "price": 44.48,
    "salePrice": 34.95
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-46",
    "price": 36.55
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-47",
    "price": 40.41
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-48",
    "price": 39.72,
    "salePrice": 29.48
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-49",
    "price": 42.51
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-50",
    "price": 43.03
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-51",
    "price": 39.55
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-52",
    "price": 38.39,
    "salePrice": 31.7
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-53",
    "price": 38.42,
    "salePrice": 28.13
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-54",
    "price": 40.86,
    "salePrice": 29.58
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-55",
    "price": 36.51,
    "salePrice": 28.58
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-56",
    "price": 43.41,
    "salePrice": 33.9
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-57",
    "price": 42.25
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-58",
    "price": 41.96,
    "salePrice": 33.16
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-59",
    "price": 41.39
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-60",
    "price": 43.21
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-61",
    "price": 44.29
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-62",
    "price": 45.13
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-63",
    "price": 43.7
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-64",
    "price": 43.58
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-65",
    "price": 37.02
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-66",
    "price": 37.68,
    "salePrice": 30.33
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-67",
    "price": 44.29
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-68",
    "price": 39.26
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-69",
    "price": 39.15
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-70",
    "price": 40.23
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-71",
    "price": 43.19
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-72",
    "price": 40.52
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-73",
    "price": 41.78
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-74",
    "price": 42.43
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-75",
    "price": 39.36,
    "salePrice": 31.38
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-76",
    "price": 40.42,
    "salePrice": 32.48
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-77",
    "price": 41.73
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-78",
    "price": 39.25
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-79",
    "price": 38.85
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-80",
    "price": 35.66,
    "salePrice": 30.45
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-81",
    "price": 42.08
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-82",
    "price": 43.37
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-83",
    "price": 41.14
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-84",
    "price": 41.05
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-85",
    "price": 39.99
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-86",
    "price": 40.17
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-87",
    "price": 43.38
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-88",
    "price": 40.41
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-89",
    "price": 39.25
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-90",
    "price": 34.38
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-91",
    "price": 37.2,
    "salePrice": 29.68
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-92",
    "price": 37.96
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-93",
    "price": 40.23
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-94",
    "price": 39.07,
    "salePrice": 32.88
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-95",
    "price": 34.7,
    "salePrice": 28.8
  },
  {
    "productId": "chicken-breast-kg",
    "storeId": "store-96",
    "price": 42.52
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-1",
    "price": 26.42,
    "salePrice": 19.67
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-2",
    "price": 30.45
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-3",
    "price": 31.11
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-4",
    "price": 30.13
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-5",
    "price": 27.81
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-6",
    "price": 28.13
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-7",
    "price": 30.16
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-8",
    "price": 28.93
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-9",
    "price": 30.91
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-10",
    "price": 29.07,
    "salePrice": 24.14
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-11",
    "price": 32.71
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-12",
    "price": 28.83
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-13",
    "price": 28.91
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-14",
    "price": 28.28
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-15",
    "price": 30.45
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-16",
    "price": 32.32
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-17",
    "price": 27.31
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-18",
    "price": 29.77
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-19",
    "price": 29.54
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-20",
    "price": 32.73
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-21",
    "price": 29.6
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-22",
    "price": 31.04
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-23",
    "price": 32.45
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-24",
    "price": 28.5
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-25",
    "price": 30.42
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-26",
    "price": 27.88
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-27",
    "price": 32.18
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-28",
    "price": 29.96
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-29",
    "price": 32.1
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-30",
    "price": 29.79,
    "salePrice": 20.93
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-31",
    "price": 29.52
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-32",
    "price": 26.65
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-33",
    "price": 29.48
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-34",
    "price": 29.43
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-35",
    "price": 32.88
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-36",
    "price": 30.78,
    "salePrice": 21.83
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-37",
    "price": 29.02
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-38",
    "price": 29.0,
    "salePrice": 24.6
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-39",
    "price": 29.57
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-40",
    "price": 31.87
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-41",
    "price": 30.04
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-42",
    "price": 30.87
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-43",
    "price": 31.2,
    "salePrice": 25.46
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-44",
    "price": 33.41
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-45",
    "price": 32.04
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-46",
    "price": 27.34
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-47",
    "price": 30.23
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-48",
    "price": 25.89,
    "salePrice": 18.67
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-49",
    "price": 32.16
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-50",
    "price": 28.75,
    "salePrice": 24.91
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-51",
    "price": 31.02
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-52",
    "price": 29.68,
    "salePrice": 22.25
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-53",
    "price": 27.0
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-54",
    "price": 30.42
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-55",
    "price": 28.18
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-56",
    "price": 32.6
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-57",
    "price": 31.07
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-58",
    "price": 31.95
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-59",
    "price": 32.04
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-60",
    "price": 33.28
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-61",
    "price": 32.74,
    "salePrice": 23.63
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-62",
    "price": 32.23
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-63",
    "price": 30.05
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-64",
    "price": 32.47
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-65",
    "price": 28.95,
    "salePrice": 23.63
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-66",
    "price": 26.54
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-67",
    "price": 33.5
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-68",
    "price": 29.08
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-69",
    "price": 29.35
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-70",
    "price": 30.82,
    "salePrice": 25.37
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-71",
    "price": 32.12
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-72",
    "price": 28.95
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-73",
    "price": 29.39
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-74",
    "price": 31.64
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-75",
    "price": 31.36
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-76",
    "price": 30.4
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-77",
    "price": 29.38
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-78",
    "price": 30.18
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-79",
    "price": 30.68
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-80",
    "price": 26.05
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-81",
    "price": 31.62
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-82",
    "price": 32.22
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-83",
    "price": 29.78
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-84",
    "price": 29.24
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-85",
    "price": 28.46
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-86",
    "price": 30.46
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-87",
    "price": 32.49
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-88",
    "price": 30.17
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-89",
    "price": 31.04
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-90",
    "price": 28.28
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-91",
    "price": 26.27
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-92",
    "price": 28.72
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-93",
    "price": 28.77
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-94",
    "price": 31.36
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-95",
    "price": 25.87
  },
  {
    "productId": "chicken-thighs-kg",
    "storeId": "store-96",
    "price": 32.89
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-1",
    "price": 28.76
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-2",
    "price": 32.18
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-3",
    "price": 31.28
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-4",
    "price": 33.1
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-5",
    "price": 28.59
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-6",
    "price": 30.44
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-7",
    "price": 33.24
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-8",
    "price": 32.56,
    "salePrice": 28.05
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-9",
    "price": 33.87,
    "salePrice": 29.66
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-10",
    "price": 32.59
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-11",
    "price": 34.93
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-12",
    "price": 34.1
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-13",
    "price": 32.44,
    "salePrice": 24.84
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-14",
    "price": 28.62
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-15",
    "price": 32.67,
    "salePrice": 29.37
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-16",
    "price": 35.47,
    "salePrice": 31.82
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-17",
    "price": 28.54
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-18",
    "price": 34.33
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-19",
    "price": 32.19
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-20",
    "price": 34.71,
    "salePrice": 30.12
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-21",
    "price": 33.16
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-22",
    "price": 33.61
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-23",
    "price": 34.96
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-24",
    "price": 32.09
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-25",
    "price": 33.44
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-26",
    "price": 30.65
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-27",
    "price": 35.51
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-28",
    "price": 31.73
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-29",
    "price": 35.22
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-30",
    "price": 34.35
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-31",
    "price": 33.33
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-32",
    "price": 29.69
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-33",
    "price": 31.82
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-34",
    "price": 34.35
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-35",
    "price": 35.94
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-36",
    "price": 33.04
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-37",
    "price": 32.78
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-38",
    "price": 34.25
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-39",
    "price": 34.66
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-40",
    "price": 33.77,
    "salePrice": 28.21
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-41",
    "price": 32.36
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-42",
    "price": 34.88
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-43",
    "price": 34.28
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-44",
    "price": 35.34
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-45",
    "price": 35.29,
    "salePrice": 27.92
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-46",
    "price": 31.05
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-47",
    "price": 34.16
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-48",
    "price": 30.83
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-49",
    "price": 37.48,
    "salePrice": 32.44
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-50",
    "price": 33.6
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-51",
    "price": 31.88
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-52",
    "price": 33.07
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-53",
    "price": 31.2
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-54",
    "price": 32.98
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-55",
    "price": 30.02
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-56",
    "price": 35.7
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-57",
    "price": 34.17,
    "salePrice": 29.75
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-58",
    "price": 34.84
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-59",
    "price": 32.6
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-60",
    "price": 35.22
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-61",
    "price": 37.26
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-62",
    "price": 35.52,
    "salePrice": 28.77
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-63",
    "price": 35.55
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-64",
    "price": 37.33
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-65",
    "price": 28.61
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-66",
    "price": 29.14
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-67",
    "price": 36.13,
    "salePrice": 27.73
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-68",
    "price": 34.15,
    "salePrice": 27.18
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-69",
    "price": 34.22
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-70",
    "price": 32.64
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-71",
    "price": 35.26
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-72",
    "price": 32.79
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-73",
    "price": 34.33
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-74",
    "price": 35.65
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-75",
    "price": 33.97
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-76",
    "price": 33.98
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-77",
    "price": 33.4
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-78",
    "price": 32.45,
    "salePrice": 28.5
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-79",
    "price": 31.82
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-80",
    "price": 29.23
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-81",
    "price": 35.13
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-82",
    "price": 36.08,
    "salePrice": 30.86
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-83",
    "price": 31.81
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-84",
    "price": 31.79
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-85",
    "price": 34.39
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-86",
    "price": 32.48
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-87",
    "price": 34.69
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-88",
    "price": 31.7,
    "salePrice": 23.28
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-89",
    "price": 33.09,
    "salePrice": 23.19
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-90",
    "price": 30.5,
    "salePrice": 22.56
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-91",
    "price": 29.18
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-92",
    "price": 33.9
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-93",
    "price": 33.27
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-94",
    "price": 32.27
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-95",
    "price": 29.46
  },
  {
    "productId": "ground-beef-500g",
    "storeId": "store-96",
    "price": 35.19
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-1",
    "price": 7.19,
    "salePrice": 5.5
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-2",
    "price": 8.24,
    "salePrice": 6.64
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-3",
    "price": 8.18
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-4",
    "price": 8.2
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-5",
    "price": 6.8
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-6",
    "price": 7.03,
    "salePrice": 5.92
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-7",
    "price": 8.27
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-8",
    "price": 7.81
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-9",
    "price": 7.76
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-10",
    "price": 7.75
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-11",
    "price": 8.43
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-12",
    "price": 7.93
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-13",
    "price": 7.75
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-14",
    "price": 7.36
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-15",
    "price": 7.91,
    "salePrice": 6.74
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-16",
    "price": 8.51
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-17",
    "price": 7.37,
    "salePrice": 6.51
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-18",
    "price": 7.63
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-19",
    "price": 7.96
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-20",
    "price": 8.66,
    "salePrice": 6.91
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-21",
    "price": 8.26
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-22",
    "price": 7.58
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-23",
    "price": 8.58
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-24",
    "price": 7.8
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-25",
    "price": 8.21
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-26",
    "price": 6.75
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-27",
    "price": 8.58
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-28",
    "price": 7.72,
    "salePrice": 6.13
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-29",
    "price": 8.65
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-30",
    "price": 8.15
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-31",
    "price": 7.53,
    "salePrice": 5.58
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-32",
    "price": 7.09,
    "salePrice": 6.09
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-33",
    "price": 7.65
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-34",
    "price": 8.02
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-35",
    "price": 8.38
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-36",
    "price": 7.73
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-37",
    "price": 7.91
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-38",
    "price": 7.96,
    "salePrice": 6.1
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-39",
    "price": 8.03
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-40",
    "price": 8.09
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-41",
    "price": 7.83
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-42",
    "price": 7.78
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-43",
    "price": 8.41
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-44",
    "price": 8.58
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-45",
    "price": 8.49
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-46",
    "price": 7.29
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-47",
    "price": 8.05,
    "salePrice": 5.82
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-48",
    "price": 7.13,
    "salePrice": 6.39
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-49",
    "price": 8.48
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-50",
    "price": 8.35
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-51",
    "price": 7.84
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-52",
    "price": 8.56,
    "salePrice": 7.66
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-53",
    "price": 7.54
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-54",
    "price": 8.53,
    "salePrice": 7.04
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-55",
    "price": 7.44,
    "salePrice": 5.54
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-56",
    "price": 8.44,
    "salePrice": 6.31
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-57",
    "price": 8.34
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-58",
    "price": 8.45
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-59",
    "price": 8.19
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-60",
    "price": 8.57
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-61",
    "price": 8.54
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-62",
    "price": 8.86
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-63",
    "price": 7.78
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-64",
    "price": 8.37
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-65",
    "price": 7.1
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-66",
    "price": 7.36
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-67",
    "price": 8.44
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-68",
    "price": 7.91
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-69",
    "price": 7.59
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-70",
    "price": 8.07
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-71",
    "price": 8.49
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-72",
    "price": 7.53
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-73",
    "price": 7.89
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-74",
    "price": 8.63
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-75",
    "price": 8.22
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-76",
    "price": 7.63
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-77",
    "price": 8.22
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-78",
    "price": 8.11,
    "salePrice": 6.06
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-79",
    "price": 7.73
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-80",
    "price": 7.38
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-81",
    "price": 8.36
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-82",
    "price": 8.54
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-83",
    "price": 7.78
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-84",
    "price": 8.13,
    "salePrice": 6.32
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-85",
    "price": 8.0
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-86",
    "price": 7.73
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-87",
    "price": 8.55,
    "salePrice": 6.71
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-88",
    "price": 8.01
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-89",
    "price": 7.83
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-90",
    "price": 7.46
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-91",
    "price": 7.1
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-92",
    "price": 7.62,
    "salePrice": 6.0
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-93",
    "price": 7.78
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-94",
    "price": 7.78
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-95",
    "price": 7.02
  },
  {
    "productId": "rice-white-1kg",
    "storeId": "store-96",
    "price": 8.52
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-1",
    "price": 4.13,
    "salePrice": 3.65
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-2",
    "price": 4.56
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-3",
    "price": 4.39,
    "salePrice": 3.58
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-4",
    "price": 4.61
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-5",
    "price": 3.98
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-6",
    "price": 4.04
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-7",
    "price": 4.46
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-8",
    "price": 4.67
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-9",
    "price": 4.33
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-10",
    "price": 4.66
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-11",
    "price": 4.78
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-12",
    "price": 4.62
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-13",
    "price": 4.38
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-14",
    "price": 4.14
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-15",
    "price": 4.62
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-16",
    "price": 4.85
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-17",
    "price": 3.88
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-18",
    "price": 4.53
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-19",
    "price": 4.38
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-20",
    "price": 4.81
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-21",
    "price": 4.61
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-22",
    "price": 4.33
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-23",
    "price": 4.89
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-24",
    "price": 4.54
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-25",
    "price": 4.39
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-26",
    "price": 3.9,
    "salePrice": 3.0
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-27",
    "price": 4.93
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-28",
    "price": 4.47,
    "salePrice": 3.99
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-29",
    "price": 4.84
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-30",
    "price": 4.71
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-31",
    "price": 4.37,
    "salePrice": 3.61
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-32",
    "price": 4.03,
    "salePrice": 2.93
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-33",
    "price": 4.41
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-34",
    "price": 4.47
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-35",
    "price": 4.95
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-36",
    "price": 4.71
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-37",
    "price": 4.43,
    "salePrice": 3.58
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-38",
    "price": 4.41
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-39",
    "price": 4.8
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-40",
    "price": 4.82
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-41",
    "price": 4.88
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-42",
    "price": 4.7
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-43",
    "price": 4.43
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-44",
    "price": 4.79
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-45",
    "price": 4.89
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-46",
    "price": 4.26
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-47",
    "price": 4.54
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-48",
    "price": 4.1
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-49",
    "price": 5.0
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-50",
    "price": 4.41
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-51",
    "price": 4.31,
    "salePrice": 3.46
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-52",
    "price": 4.67
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-53",
    "price": 4.26,
    "salePrice": 3.41
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-54",
    "price": 4.77
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-55",
    "price": 4.17
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-56",
    "price": 4.82,
    "salePrice": 3.44
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-57",
    "price": 4.51
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-58",
    "price": 4.81
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-59",
    "price": 4.54
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-60",
    "price": 4.83,
    "salePrice": 3.84
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-61",
    "price": 4.98
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-62",
    "price": 5.12
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-63",
    "price": 4.63,
    "salePrice": 3.62
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-64",
    "price": 5.0
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-65",
    "price": 4.22
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-66",
    "price": 3.98
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-67",
    "price": 5.03,
    "salePrice": 4.04
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-68",
    "price": 4.83,
    "salePrice": 3.8
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-69",
    "price": 4.36
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-70",
    "price": 4.41
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-71",
    "price": 4.87,
    "salePrice": 3.72
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-72",
    "price": 4.31
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-73",
    "price": 4.33
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-74",
    "price": 4.91
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-75",
    "price": 4.29,
    "salePrice": 3.44
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-76",
    "price": 4.62
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-77",
    "price": 4.32
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-78",
    "price": 4.63
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-79",
    "price": 4.7,
    "salePrice": 3.53
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-80",
    "price": 4.19,
    "salePrice": 3.17
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-81",
    "price": 4.82
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-82",
    "price": 4.86
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-83",
    "price": 4.42
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-84",
    "price": 4.47
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-85",
    "price": 4.3
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-86",
    "price": 4.3
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-87",
    "price": 4.73
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-88",
    "price": 4.53
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-89",
    "price": 4.6
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-90",
    "price": 4.26
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-91",
    "price": 4.27
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-92",
    "price": 4.51
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-93",
    "price": 4.51
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-94",
    "price": 4.51,
    "salePrice": 3.97
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-95",
    "price": 4.12
  },
  {
    "productId": "pasta-500g",
    "storeId": "store-96",
    "price": 4.91
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-1",
    "price": 5.2
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-2",
    "price": 5.93
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-3",
    "price": 6.13
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-4",
    "price": 5.75
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-5",
    "price": 5.31
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-6",
    "price": 5.29,
    "salePrice": 4.67
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-7",
    "price": 6.15
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-8",
    "price": 5.99
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-9",
    "price": 5.93
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-10",
    "price": 6.11
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-11",
    "price": 6.23,
    "salePrice": 5.22
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-12",
    "price": 5.9
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-13",
    "price": 6.18
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-14",
    "price": 5.52
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-15",
    "price": 6.05
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-16",
    "price": 6.21
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-17",
    "price": 5.43
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-18",
    "price": 5.97
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-19",
    "price": 6.19
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-20",
    "price": 6.22,
    "salePrice": 4.93
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-21",
    "price": 5.85
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-22",
    "price": 5.84
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-23",
    "price": 6.28
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-24",
    "price": 5.72
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-25",
    "price": 5.85
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-26",
    "price": 5.46
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-27",
    "price": 6.49
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-28",
    "price": 6.05
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-29",
    "price": 6.44
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-30",
    "price": 6.07,
    "salePrice": 4.34
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-31",
    "price": 5.89
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-32",
    "price": 5.4,
    "salePrice": 4.64
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-33",
    "price": 5.85
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-34",
    "price": 5.66
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-35",
    "price": 6.24
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-36",
    "price": 5.62
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-37",
    "price": 5.84
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-38",
    "price": 6.1,
    "salePrice": 5.39
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-39",
    "price": 5.87
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-40",
    "price": 6.25
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-41",
    "price": 5.95,
    "salePrice": 5.07
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-42",
    "price": 6.3
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-43",
    "price": 5.92
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-44",
    "price": 6.51
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-45",
    "price": 6.56
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-46",
    "price": 5.5
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-47",
    "price": 6.15
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-48",
    "price": 5.29
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-49",
    "price": 6.73,
    "salePrice": 5.24
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-50",
    "price": 5.88
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-51",
    "price": 6.02
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-52",
    "price": 6.44
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-53",
    "price": 5.53,
    "salePrice": 4.64
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-54",
    "price": 6.09
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-55",
    "price": 5.72
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-56",
    "price": 6.44,
    "salePrice": 5.13
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-57",
    "price": 6.11
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-58",
    "price": 6.05
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-59",
    "price": 6.16,
    "salePrice": 4.47
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-60",
    "price": 6.48,
    "salePrice": 4.8
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-61",
    "price": 6.24
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-62",
    "price": 6.58
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-63",
    "price": 6.16,
    "salePrice": 4.95
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-64",
    "price": 6.63
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-65",
    "price": 5.27
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-66",
    "price": 5.43
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-67",
    "price": 6.45,
    "salePrice": 5.68
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-68",
    "price": 6.36
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-69",
    "price": 6.16
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-70",
    "price": 5.9
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-71",
    "price": 6.22
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-72",
    "price": 5.98
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-73",
    "price": 5.64
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-74",
    "price": 6.31
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-75",
    "price": 5.95
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-76",
    "price": 5.87
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-77",
    "price": 5.99
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-78",
    "price": 5.9,
    "salePrice": 4.24
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-79",
    "price": 5.78
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-80",
    "price": 5.54
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-81",
    "price": 6.33
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-82",
    "price": 6.3
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-83",
    "price": 5.93
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-84",
    "price": 5.86
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-85",
    "price": 6.05,
    "salePrice": 4.85
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-86",
    "price": 5.63
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-87",
    "price": 6.32
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-88",
    "price": 6.16
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-89",
    "price": 5.97
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-90",
    "price": 5.38
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-91",
    "price": 5.27,
    "salePrice": 3.95
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-92",
    "price": 6.06
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-93",
    "price": 6.18
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-94",
    "price": 6.09
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-95",
    "price": 5.29
  },
  {
    "productId": "flour-1kg",
    "storeId": "store-96",
    "price": 6.43
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-1",
    "price": 3.98
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-2",
    "price": 4.53
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-3",
    "price": 4.62
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-4",
    "price": 4.56
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-5",
    "price": 4.09
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-6",
    "price": 3.92
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-7",
    "price": 4.7
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-8",
    "price": 4.69
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-9",
    "price": 4.34
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-10",
    "price": 4.7
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-11",
    "price": 4.93
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-12",
    "price": 4.69
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-13",
    "price": 4.65
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-14",
    "price": 4.02
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-15",
    "price": 4.52
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-16",
    "price": 4.86,
    "salePrice": 4.35
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-17",
    "price": 4.06,
    "salePrice": 3.11
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-18",
    "price": 4.32
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-19",
    "price": 4.47
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-20",
    "price": 4.89
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-21",
    "price": 4.56
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-22",
    "price": 4.56,
    "salePrice": 3.93
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-23",
    "price": 4.77
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-24",
    "price": 4.67
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-25",
    "price": 4.35
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-26",
    "price": 4.13,
    "salePrice": 3.42
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-27",
    "price": 4.81
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-28",
    "price": 4.69,
    "salePrice": 3.98
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-29",
    "price": 4.87
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-30",
    "price": 4.65
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-31",
    "price": 4.7,
    "salePrice": 3.57
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-32",
    "price": 3.86
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-33",
    "price": 4.56
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-34",
    "price": 4.65
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-35",
    "price": 4.83,
    "salePrice": 3.43
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-36",
    "price": 4.41
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-37",
    "price": 4.42
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-38",
    "price": 4.5,
    "salePrice": 3.45
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-39",
    "price": 4.68
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-40",
    "price": 4.67,
    "salePrice": 3.63
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-41",
    "price": 4.6
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-42",
    "price": 4.8
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-43",
    "price": 4.62
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-44",
    "price": 5.09
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-45",
    "price": 5.0
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-46",
    "price": 4.13
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-47",
    "price": 4.39
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-48",
    "price": 4.09
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-49",
    "price": 5.0
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-50",
    "price": 4.42
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-51",
    "price": 4.55
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-52",
    "price": 4.64
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-53",
    "price": 3.97
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-54",
    "price": 4.54
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-55",
    "price": 4.16
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-56",
    "price": 5.17
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-57",
    "price": 4.59,
    "salePrice": 3.39
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-58",
    "price": 4.86
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-59",
    "price": 4.67
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-60",
    "price": 4.88
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-61",
    "price": 4.93
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-62",
    "price": 4.88,
    "salePrice": 3.88
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-63",
    "price": 4.64
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-64",
    "price": 4.85
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-65",
    "price": 4.21,
    "salePrice": 3.36
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-66",
    "price": 4.4
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-67",
    "price": 4.84
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-68",
    "price": 4.72
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-69",
    "price": 4.55
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-70",
    "price": 4.71
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-71",
    "price": 4.91
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-72",
    "price": 4.41
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-73",
    "price": 4.6
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-74",
    "price": 4.92
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-75",
    "price": 4.5
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-76",
    "price": 4.39
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-77",
    "price": 4.31
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-78",
    "price": 4.65
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-79",
    "price": 4.72
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-80",
    "price": 3.86,
    "salePrice": 2.85
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-81",
    "price": 4.79
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-82",
    "price": 4.91
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-83",
    "price": 4.6
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-84",
    "price": 4.65
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-85",
    "price": 4.51,
    "salePrice": 3.45
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-86",
    "price": 4.72,
    "salePrice": 3.59
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-87",
    "price": 4.81
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-88",
    "price": 4.46,
    "salePrice": 3.74
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-89",
    "price": 4.66,
    "salePrice": 3.97
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-90",
    "price": 3.83
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-91",
    "price": 4.15
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-92",
    "price": 4.71
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-93",
    "price": 4.72
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-94",
    "price": 4.32
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-95",
    "price": 4.1
  },
  {
    "productId": "sugar-1kg",
    "storeId": "store-96",
    "price": 4.73
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-1",
    "price": 9.15
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-2",
    "price": 9.81
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-3",
    "price": 10.36
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-4",
    "price": 9.51
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-5",
    "price": 8.42
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-6",
    "price": 9.17,
    "salePrice": 8.07
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-7",
    "price": 9.82
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-8",
    "price": 10.11
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-9",
    "price": 10.03
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-10",
    "price": 10.1
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-11",
    "price": 10.44
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-12",
    "price": 9.58,
    "salePrice": 8.47
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-13",
    "price": 10.1
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-14",
    "price": 8.99
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-15",
    "price": 9.96,
    "salePrice": 8.6
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-16",
    "price": 10.53
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-17",
    "price": 8.93
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-18",
    "price": 9.43
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-19",
    "price": 9.71
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-20",
    "price": 10.87
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-21",
    "price": 9.95,
    "salePrice": 8.32
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-22",
    "price": 9.72
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-23",
    "price": 10.57
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-24",
    "price": 9.59
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-25",
    "price": 9.89,
    "salePrice": 8.15
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-26",
    "price": 9.09,
    "salePrice": 7.98
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-27",
    "price": 10.62
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-28",
    "price": 10.08
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-29",
    "price": 10.64
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-30",
    "price": 10.32
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-31",
    "price": 9.44,
    "salePrice": 6.96
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-32",
    "price": 9.3
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-33",
    "price": 10.23
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-34",
    "price": 9.83
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-35",
    "price": 10.5
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-36",
    "price": 10.05
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-37",
    "price": 9.82
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-38",
    "price": 10.25
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-39",
    "price": 10.46,
    "salePrice": 7.94
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-40",
    "price": 10.5
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-41",
    "price": 10.09
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-42",
    "price": 10.29
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-43",
    "price": 9.81
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-44",
    "price": 11.13,
    "salePrice": 9.84
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-45",
    "price": 11.14
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-46",
    "price": 9.34
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-47",
    "price": 10.71,
    "salePrice": 8.39
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-48",
    "price": 9.1
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-49",
    "price": 10.61
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-50",
    "price": 9.98
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-51",
    "price": 9.43
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-52",
    "price": 10.19
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-53",
    "price": 8.7
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-54",
    "price": 10.42,
    "salePrice": 8.57
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-55",
    "price": 8.96
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-56",
    "price": 10.82
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-57",
    "price": 10.52,
    "salePrice": 8.81
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-58",
    "price": 10.13,
    "salePrice": 7.51
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-59",
    "price": 9.94
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-60",
    "price": 11.03
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-61",
    "price": 11.03
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-62",
    "price": 11.04
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-63",
    "price": 9.84,
    "salePrice": 8.43
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-64",
    "price": 11.19
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-65",
    "price": 9.19
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-66",
    "price": 9.3
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-67",
    "price": 10.74
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-68",
    "price": 10.26,
    "salePrice": 8.65
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-69",
    "price": 10.13
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-70",
    "price": 9.6,
    "salePrice": 7.0
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-71",
    "price": 10.64,
    "salePrice": 8.21
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-72",
    "price": 9.74,
    "salePrice": 8.63
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-73",
    "price": 9.63,
    "salePrice": 7.07
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-74",
    "price": 10.88
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-75",
    "price": 9.52
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-76",
    "price": 9.71
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-77",
    "price": 9.53
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-78",
    "price": 10.1
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-79",
    "price": 10.31
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-80",
    "price": 8.58
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-81",
    "price": 10.65,
    "salePrice": 8.52
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-82",
    "price": 10.49
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-83",
    "price": 9.95,
    "salePrice": 8.26
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-84",
    "price": 10.22
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-85",
    "price": 10.23,
    "salePrice": 8.51
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-86",
    "price": 10.2
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-87",
    "price": 10.42
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-88",
    "price": 9.53
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-89",
    "price": 10.18
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-90",
    "price": 9.28,
    "salePrice": 7.03
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-91",
    "price": 9.29
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-92",
    "price": 9.46,
    "salePrice": 7.55
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-93",
    "price": 9.68,
    "salePrice": 7.41
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-94",
    "price": 10.25
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-95",
    "price": 9.35
  },
  {
    "productId": "oil-sunflower-1l",
    "storeId": "store-96",
    "price": 10.87
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-1",
    "price": 21.63
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-2",
    "price": 25.58
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-3",
    "price": 24.68
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-4",
    "price": 25.07,
    "salePrice": 20.01
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-5",
    "price": 23.55
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-6",
    "price": 22.41
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-7",
    "price": 25.9
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-8",
    "price": 24.2
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-9",
    "price": 25.81
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-10",
    "price": 25.89
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-11",
    "price": 27.06
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-12",
    "price": 23.95
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-13",
    "price": 24.02
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-14",
    "price": 21.58
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-15",
    "price": 25.43
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-16",
    "price": 26.76,
    "salePrice": 21.06
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-17",
    "price": 21.7,
    "salePrice": 17.09
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-18",
    "price": 24.5
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-19",
    "price": 26.01
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-20",
    "price": 26.63
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-21",
    "price": 25.62
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-22",
    "price": 25.4
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-23",
    "price": 27.01
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-24",
    "price": 25.51,
    "salePrice": 21.96
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-25",
    "price": 24.76
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-26",
    "price": 21.61,
    "salePrice": 17.07
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-27",
    "price": 27.0
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-28",
    "price": 25.7
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-29",
    "price": 26.57
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-30",
    "price": 24.24
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-31",
    "price": 25.55
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-32",
    "price": 22.72
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-33",
    "price": 24.05
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-34",
    "price": 23.87
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-35",
    "price": 26.59
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-36",
    "price": 25.8
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-37",
    "price": 25.73,
    "salePrice": 19.89
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-38",
    "price": 25.33
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-39",
    "price": 24.71
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-40",
    "price": 24.09,
    "salePrice": 18.7
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-41",
    "price": 25.21
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-42",
    "price": 25.52
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-43",
    "price": 26.5
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-44",
    "price": 27.91
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-45",
    "price": 27.01
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-46",
    "price": 24.29
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-47",
    "price": 25.03,
    "salePrice": 17.78
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-48",
    "price": 21.96,
    "salePrice": 19.43
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-49",
    "price": 27.64,
    "salePrice": 20.14
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-50",
    "price": 26.21
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-51",
    "price": 24.44
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-52",
    "price": 24.18,
    "salePrice": 18.4
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-53",
    "price": 23.53,
    "salePrice": 17.63
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-54",
    "price": 26.67
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-55",
    "price": 21.36
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-56",
    "price": 27.7
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-57",
    "price": 26.73,
    "salePrice": 22.29
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-58",
    "price": 24.8,
    "salePrice": 18.81
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-59",
    "price": 24.92
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-60",
    "price": 27.46
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-61",
    "price": 26.67
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-62",
    "price": 27.89,
    "salePrice": 21.57
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-63",
    "price": 26.29,
    "salePrice": 18.47
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-64",
    "price": 27.88
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-65",
    "price": 22.83
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-66",
    "price": 23.55
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-67",
    "price": 27.19
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-68",
    "price": 26.03
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-69",
    "price": 25.2,
    "salePrice": 20.6
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-70",
    "price": 25.89
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-71",
    "price": 26.24
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-72",
    "price": 24.89
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-73",
    "price": 25.21
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-74",
    "price": 26.25
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-75",
    "price": 25.38
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-76",
    "price": 23.82
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-77",
    "price": 25.87
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-78",
    "price": 23.74
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-79",
    "price": 24.91
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-80",
    "price": 23.45
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-81",
    "price": 26.55
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-82",
    "price": 26.69
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-83",
    "price": 26.04,
    "salePrice": 19.31
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-84",
    "price": 24.74
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-85",
    "price": 25.13,
    "salePrice": 19.09
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-86",
    "price": 23.93
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-87",
    "price": 26.79
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-88",
    "price": 24.65
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-89",
    "price": 26.03
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-90",
    "price": 21.17
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-91",
    "price": 21.49
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-92",
    "price": 25.41
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-93",
    "price": 23.79
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-94",
    "price": 25.45
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-95",
    "price": 21.25,
    "salePrice": 18.41
  },
  {
    "productId": "olive-oil-1l",
    "storeId": "store-96",
    "price": 26.45,
    "salePrice": 19.76
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-1",
    "price": 6.28
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-2",
    "price": 7.23,
    "salePrice": 5.51
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-3",
    "price": 6.82
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-4",
    "price": 6.84
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-5",
    "price": 6.05
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-6",
    "price": 6.18
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-7",
    "price": 6.73
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-8",
    "price": 6.85
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-9",
    "price": 7.2,
    "salePrice": 5.6
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-10",
    "price": 7.24
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-11",
    "price": 7.47
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-12",
    "price": 7.15
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-13",
    "price": 7.12,
    "salePrice": 5.68
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-14",
    "price": 5.94
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-15",
    "price": 7.06
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-16",
    "price": 7.56,
    "salePrice": 5.36
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-17",
    "price": 5.88
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-18",
    "price": 7.22
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-19",
    "price": 6.96
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-20",
    "price": 7.37
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-21",
    "price": 7.23
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-22",
    "price": 6.79
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-23",
    "price": 7.43
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-24",
    "price": 6.84,
    "salePrice": 4.86
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-25",
    "price": 6.67
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-26",
    "price": 6.47,
    "salePrice": 5.14
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-27",
    "price": 7.31,
    "salePrice": 6.53
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-28",
    "price": 6.9
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-29",
    "price": 7.3
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-30",
    "price": 6.87
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-31",
    "price": 7.0
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-32",
    "price": 5.99
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-33",
    "price": 6.67
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-34",
    "price": 7.12
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-35",
    "price": 7.3,
    "salePrice": 6.22
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-36",
    "price": 7.18,
    "salePrice": 6.45
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-37",
    "price": 6.64,
    "salePrice": 4.83
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-38",
    "price": 6.67
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-39",
    "price": 6.69
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-40",
    "price": 7.35,
    "salePrice": 6.19
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-41",
    "price": 6.91
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-42",
    "price": 6.67
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-43",
    "price": 7.15
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-44",
    "price": 7.45
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-45",
    "price": 7.77
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-46",
    "price": 5.99
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-47",
    "price": 7.18
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-48",
    "price": 6.07
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-49",
    "price": 7.55
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-50",
    "price": 6.71
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-51",
    "price": 7.37
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-52",
    "price": 7.1
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-53",
    "price": 6.52
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-54",
    "price": 7.17
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-55",
    "price": 6.08,
    "salePrice": 4.54
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-56",
    "price": 7.69
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-57",
    "price": 7.06
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-58",
    "price": 6.95
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-59",
    "price": 6.99
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-60",
    "price": 7.57
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-61",
    "price": 7.65,
    "salePrice": 5.39
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-62",
    "price": 7.73
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-63",
    "price": 6.99,
    "salePrice": 5.5
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-64",
    "price": 7.44
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-65",
    "price": 6.27
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-66",
    "price": 6.3
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-67",
    "price": 7.5,
    "salePrice": 5.86
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-68",
    "price": 7.08
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-69",
    "price": 7.11
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-70",
    "price": 7.02
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-71",
    "price": 7.51
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-72",
    "price": 6.69
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-73",
    "price": 6.88
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-74",
    "price": 7.41
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-75",
    "price": 6.81,
    "salePrice": 5.23
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-76",
    "price": 6.98,
    "salePrice": 5.48
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-77",
    "price": 6.7
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-78",
    "price": 6.63
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-79",
    "price": 6.57,
    "salePrice": 5.34
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-80",
    "price": 6.39
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-81",
    "price": 7.42,
    "salePrice": 5.66
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-82",
    "price": 7.44
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-83",
    "price": 7.21
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-84",
    "price": 6.77
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-85",
    "price": 6.99
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-86",
    "price": 7.14
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-87",
    "price": 7.35
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-88",
    "price": 6.74
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-89",
    "price": 7.06
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-90",
    "price": 5.96
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-91",
    "price": 6.09
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-92",
    "price": 6.85
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-93",
    "price": 6.61,
    "salePrice": 5.71
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-94",
    "price": 6.65,
    "salePrice": 5.29
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-95",
    "price": 6.5
  },
  {
    "productId": "tuna-can-160g",
    "storeId": "store-96",
    "price": 7.5
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-1",
    "price": 4.17
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-2",
    "price": 4.31
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-3",
    "price": 4.31
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-4",
    "price": 4.33,
    "salePrice": 3.6
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-5",
    "price": 4.18
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-6",
    "price": 3.98
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-7",
    "price": 4.68
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-8",
    "price": 4.64,
    "salePrice": 3.69
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-9",
    "price": 4.5
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-10",
    "price": 4.37
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-11",
    "price": 4.85,
    "salePrice": 4.08
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-12",
    "price": 4.57
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-13",
    "price": 4.48
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-14",
    "price": 3.94,
    "salePrice": 2.94
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-15",
    "price": 4.52
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-16",
    "price": 4.81
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-17",
    "price": 4.25
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-18",
    "price": 4.35
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-19",
    "price": 4.36
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-20",
    "price": 4.88
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-21",
    "price": 4.63
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-22",
    "price": 4.37
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-23",
    "price": 4.94
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-24",
    "price": 4.3
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-25",
    "price": 4.43
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-26",
    "price": 3.94
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-27",
    "price": 4.89
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-28",
    "price": 4.5,
    "salePrice": 3.41
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-29",
    "price": 4.78
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-30",
    "price": 4.47
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-31",
    "price": 4.55
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-32",
    "price": 3.88
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-33",
    "price": 4.62
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-34",
    "price": 4.66
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-35",
    "price": 4.88
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-36",
    "price": 4.49
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-37",
    "price": 4.59
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-38",
    "price": 4.3
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-39",
    "price": 4.87
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-40",
    "price": 4.51
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-41",
    "price": 4.55,
    "salePrice": 3.79
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-42",
    "price": 4.65,
    "salePrice": 3.46
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-43",
    "price": 4.54
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-44",
    "price": 4.95
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-45",
    "price": 5.08
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-46",
    "price": 4.38
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-47",
    "price": 4.72
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-48",
    "price": 3.91
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-49",
    "price": 5.06
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-50",
    "price": 4.56
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-51",
    "price": 4.84
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-52",
    "price": 4.45
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-53",
    "price": 4.28
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-54",
    "price": 4.47
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-55",
    "price": 4.32
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-56",
    "price": 5.02
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-57",
    "price": 4.49
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-58",
    "price": 4.86,
    "salePrice": 3.55
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-59",
    "price": 4.58
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-60",
    "price": 4.92
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-61",
    "price": 5.06
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-62",
    "price": 4.99
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-63",
    "price": 4.49,
    "salePrice": 3.54
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-64",
    "price": 5.11
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-65",
    "price": 4.29
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-66",
    "price": 3.97,
    "salePrice": 2.98
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-67",
    "price": 5.02,
    "salePrice": 4.01
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-68",
    "price": 4.59
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-69",
    "price": 4.54,
    "salePrice": 3.64
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-70",
    "price": 4.53
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-71",
    "price": 4.73
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-72",
    "price": 4.28,
    "salePrice": 3.31
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-73",
    "price": 4.39,
    "salePrice": 3.29
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-74",
    "price": 4.74
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-75",
    "price": 4.33
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-76",
    "price": 4.46,
    "salePrice": 3.53
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-77",
    "price": 4.69
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-78",
    "price": 4.64
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-79",
    "price": 4.55,
    "salePrice": 3.24
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-80",
    "price": 4.11
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-81",
    "price": 4.8
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-82",
    "price": 4.84
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-83",
    "price": 4.38
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-84",
    "price": 4.66,
    "salePrice": 3.61
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-85",
    "price": 4.33
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-86",
    "price": 4.35
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-87",
    "price": 4.77,
    "salePrice": 4.27
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-88",
    "price": 4.71,
    "salePrice": 3.82
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-89",
    "price": 4.5
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-90",
    "price": 3.9
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-91",
    "price": 4.0
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-92",
    "price": 4.56
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-93",
    "price": 4.31
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-94",
    "price": 4.45
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-95",
    "price": 4.23
  },
  {
    "productId": "corn-can-340g",
    "storeId": "store-96",
    "price": 4.9,
    "salePrice": 4.01
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-1",
    "price": 5.1
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-2",
    "price": 5.92
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-3",
    "price": 5.93
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-4",
    "price": 5.77
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-5",
    "price": 5.2
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-6",
    "price": 5.04,
    "salePrice": 4.05
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-7",
    "price": 6.11
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-8",
    "price": 6.04
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-9",
    "price": 5.99
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-10",
    "price": 6.01,
    "salePrice": 4.84
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-11",
    "price": 6.27
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-12",
    "price": 5.95
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-13",
    "price": 5.79
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-14",
    "price": 5.04
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-15",
    "price": 6.01
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-16",
    "price": 6.45,
    "salePrice": 4.79
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-17",
    "price": 5.51
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-18",
    "price": 5.76
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-19",
    "price": 6.06
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-20",
    "price": 6.39
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-21",
    "price": 6.11
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-22",
    "price": 5.96
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-23",
    "price": 6.4,
    "salePrice": 5.73
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-24",
    "price": 5.68
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-25",
    "price": 5.68
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-26",
    "price": 5.25
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-27",
    "price": 6.22
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-28",
    "price": 5.81
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-29",
    "price": 6.25
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-30",
    "price": 5.81
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-31",
    "price": 6.16
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-32",
    "price": 5.45
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-33",
    "price": 6.04
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-34",
    "price": 5.66
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-35",
    "price": 6.26
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-36",
    "price": 5.77
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-37",
    "price": 5.78
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-38",
    "price": 5.84,
    "salePrice": 4.27
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-39",
    "price": 6.32,
    "salePrice": 4.54
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-40",
    "price": 6.21
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-41",
    "price": 5.97
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-42",
    "price": 5.94
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-43",
    "price": 6.35
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-44",
    "price": 6.37
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-45",
    "price": 6.66
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-46",
    "price": 5.52
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-47",
    "price": 5.94
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-48",
    "price": 5.66,
    "salePrice": 4.17
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-49",
    "price": 6.27
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-50",
    "price": 6.35
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-51",
    "price": 6.15
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-52",
    "price": 6.27
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-53",
    "price": 5.67
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-54",
    "price": 6.0
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-55",
    "price": 5.68,
    "salePrice": 4.03
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-56",
    "price": 6.72
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-57",
    "price": 5.8
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-58",
    "price": 6.01,
    "salePrice": 4.53
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-59",
    "price": 6.2,
    "salePrice": 4.84
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-60",
    "price": 6.56
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-61",
    "price": 6.33
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-62",
    "price": 6.46
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-63",
    "price": 6.26
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-64",
    "price": 6.28,
    "salePrice": 5.19
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-65",
    "price": 5.6
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-66",
    "price": 5.47
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-67",
    "price": 6.54
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-68",
    "price": 5.87,
    "salePrice": 4.46
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-69",
    "price": 5.95
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-70",
    "price": 5.74
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-71",
    "price": 6.33,
    "salePrice": 4.98
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-72",
    "price": 5.84
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-73",
    "price": 5.97
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-74",
    "price": 6.47
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-75",
    "price": 6.11
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-76",
    "price": 5.71
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-77",
    "price": 5.79,
    "salePrice": 4.3
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-78",
    "price": 6.1
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-79",
    "price": 5.62
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-80",
    "price": 5.26,
    "salePrice": 4.3
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-81",
    "price": 6.46
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-82",
    "price": 6.35
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-83",
    "price": 5.82
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-84",
    "price": 6.16,
    "salePrice": 5.46
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-85",
    "price": 6.19
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-86",
    "price": 5.7
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-87",
    "price": 6.43
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-88",
    "price": 5.65
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-89",
    "price": 6.19
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-90",
    "price": 5.21
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-91",
    "price": 5.22,
    "salePrice": 3.99
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-92",
    "price": 6.08,
    "salePrice": 4.81
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-93",
    "price": 5.79,
    "salePrice": 5.0
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-94",
    "price": 6.18
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-95",
    "price": 5.54
  },
  {
    "productId": "chickpeas-can-540g",
    "storeId": "store-96",
    "price": 6.41
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-1",
    "price": 4.49
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-2",
    "price": 4.71
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-3",
    "price": 4.87
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-4",
    "price": 4.79
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-5",
    "price": 4.24,
    "salePrice": 3.49
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-6",
    "price": 4.2
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-7",
    "price": 5.09,
    "salePrice": 3.74
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-8",
    "price": 4.8,
    "salePrice": 3.75
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-9",
    "price": 5.04
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-10",
    "price": 4.95,
    "salePrice": 4.34
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-11",
    "price": 5.35
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-12",
    "price": 4.7,
    "salePrice": 4.01
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-13",
    "price": 4.91
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-14",
    "price": 4.37
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-15",
    "price": 4.82
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-16",
    "price": 5.19
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-17",
    "price": 4.45
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-18",
    "price": 4.82
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-19",
    "price": 5.01,
    "salePrice": 3.99
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-20",
    "price": 5.28
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-21",
    "price": 5.02,
    "salePrice": 3.7
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-22",
    "price": 4.7
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-23",
    "price": 5.27
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-24",
    "price": 5.11
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-25",
    "price": 5.02
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-26",
    "price": 4.34,
    "salePrice": 3.32
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-27",
    "price": 5.35
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-28",
    "price": 4.71
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-29",
    "price": 5.21
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-30",
    "price": 4.83
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-31",
    "price": 4.81
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-32",
    "price": 4.22
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-33",
    "price": 4.93
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-34",
    "price": 5.13,
    "salePrice": 4.11
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-35",
    "price": 5.19
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-36",
    "price": 4.95,
    "salePrice": 3.82
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-37",
    "price": 4.66,
    "salePrice": 3.49
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-38",
    "price": 4.69
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-39",
    "price": 5.32
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-40",
    "price": 4.74,
    "salePrice": 4.13
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-41",
    "price": 4.92
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-42",
    "price": 4.81
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-43",
    "price": 5.28
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-44",
    "price": 5.41,
    "salePrice": 4.33
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-45",
    "price": 5.31
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-46",
    "price": 4.35
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-47",
    "price": 5.2,
    "salePrice": 3.73
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-48",
    "price": 4.53,
    "salePrice": 3.26
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-49",
    "price": 5.28,
    "salePrice": 4.41
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-50",
    "price": 4.9
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-51",
    "price": 4.92
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-52",
    "price": 5.01
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-53",
    "price": 4.38
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-54",
    "price": 4.73
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-55",
    "price": 4.59
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-56",
    "price": 5.54
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-57",
    "price": 4.79
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-58",
    "price": 4.98,
    "salePrice": 3.62
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-59",
    "price": 5.08
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-60",
    "price": 5.56
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-61",
    "price": 5.51
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-62",
    "price": 5.24
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-63",
    "price": 5.25,
    "salePrice": 3.71
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-64",
    "price": 5.38
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-65",
    "price": 4.34
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-66",
    "price": 4.59,
    "salePrice": 3.73
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-67",
    "price": 5.54,
    "salePrice": 3.97
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-68",
    "price": 4.69,
    "salePrice": 3.36
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-69",
    "price": 5.11
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-70",
    "price": 4.74
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-71",
    "price": 5.38
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-72",
    "price": 4.99,
    "salePrice": 4.25
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-73",
    "price": 4.74
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-74",
    "price": 5.23,
    "salePrice": 4.29
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-75",
    "price": 4.75,
    "salePrice": 3.69
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-76",
    "price": 4.83
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-77",
    "price": 4.91
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-78",
    "price": 4.75
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-79",
    "price": 4.93
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-80",
    "price": 4.26
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-81",
    "price": 5.36
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-82",
    "price": 5.17
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-83",
    "price": 4.95
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-84",
    "price": 4.69
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-85",
    "price": 4.81,
    "salePrice": 4.12
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-86",
    "price": 4.91,
    "salePrice": 3.97
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-87",
    "price": 5.37
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-88",
    "price": 5.08
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-89",
    "price": 4.75
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-90",
    "price": 4.24
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-91",
    "price": 4.53
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-92",
    "price": 4.97
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-93",
    "price": 5.11
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-94",
    "price": 4.96
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-95",
    "price": 4.64
  },
  {
    "productId": "tomato-paste-580g",
    "storeId": "store-96",
    "price": 5.3
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-1",
    "price": 5.32
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-2",
    "price": 5.76
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-3",
    "price": 5.61
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-4",
    "price": 5.63
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-5",
    "price": 5.34,
    "salePrice": 4.27
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-6",
    "price": 5.6
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-7",
    "price": 5.84
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-8",
    "price": 5.8
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-9",
    "price": 5.89
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-10",
    "price": 5.93,
    "salePrice": 5.17
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-11",
    "price": 6.31
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-12",
    "price": 5.72,
    "salePrice": 4.04
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-13",
    "price": 5.8
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-14",
    "price": 5.47
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-15",
    "price": 6.05
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-16",
    "price": 6.31,
    "salePrice": 5.13
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-17",
    "price": 5.38
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-18",
    "price": 5.87
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-19",
    "price": 6.03
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-20",
    "price": 6.27
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-21",
    "price": 5.93
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-22",
    "price": 5.88
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-23",
    "price": 6.29
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-24",
    "price": 5.77,
    "salePrice": 4.93
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-25",
    "price": 6.06,
    "salePrice": 4.48
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-26",
    "price": 5.58,
    "salePrice": 4.49
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-27",
    "price": 6.24
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-28",
    "price": 5.84,
    "salePrice": 4.3
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-29",
    "price": 6.3,
    "salePrice": 4.95
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-30",
    "price": 6.14
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-31",
    "price": 5.61
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-32",
    "price": 5.17
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-33",
    "price": 5.83
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-34",
    "price": 5.68
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-35",
    "price": 6.24
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-36",
    "price": 5.7,
    "salePrice": 5.06
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-37",
    "price": 6.14
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-38",
    "price": 5.92
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-39",
    "price": 6.29,
    "salePrice": 4.47
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-40",
    "price": 5.78
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-41",
    "price": 6.08
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-42",
    "price": 5.9
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-43",
    "price": 6.31
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-44",
    "price": 6.39,
    "salePrice": 5.71
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-45",
    "price": 6.5
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-46",
    "price": 5.63
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-47",
    "price": 5.76
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-48",
    "price": 5.39
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-49",
    "price": 6.41
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-50",
    "price": 5.71
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-51",
    "price": 6.0
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-52",
    "price": 6.31
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-53",
    "price": 5.55
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-54",
    "price": 5.99,
    "salePrice": 4.45
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-55",
    "price": 5.68
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-56",
    "price": 6.64,
    "salePrice": 5.43
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-57",
    "price": 6.05
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-58",
    "price": 6.12
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-59",
    "price": 6.02
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-60",
    "price": 6.26
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-61",
    "price": 6.35
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-62",
    "price": 6.63
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-63",
    "price": 6.23
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-64",
    "price": 6.58
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-65",
    "price": 5.16
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-66",
    "price": 5.2
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-67",
    "price": 6.54
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-68",
    "price": 6.3,
    "salePrice": 5.24
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-69",
    "price": 5.88
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-70",
    "price": 6.0
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-71",
    "price": 6.3
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-72",
    "price": 5.66
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-73",
    "price": 5.94
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-74",
    "price": 6.42,
    "salePrice": 5.63
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-75",
    "price": 5.66
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-76",
    "price": 6.19
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-77",
    "price": 5.86
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-78",
    "price": 5.79
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-79",
    "price": 6.15
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-80",
    "price": 5.57
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-81",
    "price": 6.2
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-82",
    "price": 6.47
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-83",
    "price": 5.98
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-84",
    "price": 5.75,
    "salePrice": 4.29
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-85",
    "price": 5.95,
    "salePrice": 4.9
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-86",
    "price": 6.01
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-87",
    "price": 6.2,
    "salePrice": 4.63
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-88",
    "price": 6.19,
    "salePrice": 4.84
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-89",
    "price": 5.72
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-90",
    "price": 5.56
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-91",
    "price": 5.16
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-92",
    "price": 5.85
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-93",
    "price": 5.94
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-94",
    "price": 5.7
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-95",
    "price": 5.37
  },
  {
    "productId": "bamba-120g",
    "storeId": "store-96",
    "price": 6.28
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-1",
    "price": 4.05
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-2",
    "price": 4.58
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-3",
    "price": 4.4
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-4",
    "price": 4.35
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-5",
    "price": 3.96
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-6",
    "price": 4.26
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-7",
    "price": 4.61
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-8",
    "price": 4.44
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-9",
    "price": 4.57
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-10",
    "price": 4.56
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-11",
    "price": 4.89
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-12",
    "price": 4.51
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-13",
    "price": 4.5
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-14",
    "price": 4.07
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-15",
    "price": 4.3,
    "salePrice": 3.55
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-16",
    "price": 4.83
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-17",
    "price": 4.15,
    "salePrice": 3.37
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-18",
    "price": 4.45,
    "salePrice": 3.72
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-19",
    "price": 4.64,
    "salePrice": 4.12
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-20",
    "price": 4.94
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-21",
    "price": 4.5
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-22",
    "price": 4.72
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-23",
    "price": 4.73
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-24",
    "price": 4.6
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-25",
    "price": 4.59,
    "salePrice": 3.82
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-26",
    "price": 3.94,
    "salePrice": 3.17
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-27",
    "price": 4.75
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-28",
    "price": 4.33,
    "salePrice": 3.8
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-29",
    "price": 4.85
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-30",
    "price": 4.49
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-31",
    "price": 4.55
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-32",
    "price": 4.19
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-33",
    "price": 4.67
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-34",
    "price": 4.68
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-35",
    "price": 4.73
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-36",
    "price": 4.28,
    "salePrice": 3.0
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-37",
    "price": 4.71
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-38",
    "price": 4.52
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-39",
    "price": 4.54,
    "salePrice": 3.85
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-40",
    "price": 4.8
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-41",
    "price": 4.61
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-42",
    "price": 4.64
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-43",
    "price": 4.56
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-44",
    "price": 4.82
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-45",
    "price": 4.93
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-46",
    "price": 4.45
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-47",
    "price": 4.46
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-48",
    "price": 4.1,
    "salePrice": 3.64
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-49",
    "price": 4.89,
    "salePrice": 3.96
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-50",
    "price": 4.41,
    "salePrice": 3.44
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-51",
    "price": 4.61
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-52",
    "price": 4.44
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-53",
    "price": 4.17
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-54",
    "price": 4.66,
    "salePrice": 3.34
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-55",
    "price": 4.15
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-56",
    "price": 4.97
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-57",
    "price": 4.8
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-58",
    "price": 4.77
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-59",
    "price": 4.56
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-60",
    "price": 5.02,
    "salePrice": 3.87
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-61",
    "price": 5.03
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-62",
    "price": 5.05
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-63",
    "price": 4.78
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-64",
    "price": 5.05
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-65",
    "price": 4.41
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-66",
    "price": 4.19
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-67",
    "price": 4.93
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-68",
    "price": 4.61
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-69",
    "price": 4.4
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-70",
    "price": 4.38,
    "salePrice": 3.11
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-71",
    "price": 4.84,
    "salePrice": 3.6
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-72",
    "price": 4.72
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-73",
    "price": 4.72
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-74",
    "price": 4.75
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-75",
    "price": 4.56
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-76",
    "price": 4.41
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-77",
    "price": 4.47
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-78",
    "price": 4.33,
    "salePrice": 3.16
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-79",
    "price": 4.43
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-80",
    "price": 4.01
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-81",
    "price": 4.73
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-82",
    "price": 4.84
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-83",
    "price": 4.3
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-84",
    "price": 4.71
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-85",
    "price": 4.63
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-86",
    "price": 4.68
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-87",
    "price": 4.94
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-88",
    "price": 4.35
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-89",
    "price": 4.33,
    "salePrice": 3.53
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-90",
    "price": 3.91,
    "salePrice": 2.94
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-91",
    "price": 3.92,
    "salePrice": 3.05
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-92",
    "price": 4.54
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-93",
    "price": 4.45
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-94",
    "price": 4.58
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-95",
    "price": 4.22
  },
  {
    "productId": "bisli-70g",
    "storeId": "store-96",
    "price": 4.74
  },
  {
    "productId": "chips-160g",
    "storeId": "store-1",
    "price": 7.76
  },
  {
    "productId": "chips-160g",
    "storeId": "store-2",
    "price": 9.01,
    "salePrice": 6.67
  },
  {
    "productId": "chips-160g",
    "storeId": "store-3",
    "price": 8.89,
    "salePrice": 7.54
  },
  {
    "productId": "chips-160g",
    "storeId": "store-4",
    "price": 8.76,
    "salePrice": 7.59
  },
  {
    "productId": "chips-160g",
    "storeId": "store-5",
    "price": 7.69
  },
  {
    "productId": "chips-160g",
    "storeId": "store-6",
    "price": 7.59
  },
  {
    "productId": "chips-160g",
    "storeId": "store-7",
    "price": 9.16
  },
  {
    "productId": "chips-160g",
    "storeId": "store-8",
    "price": 8.49
  },
  {
    "productId": "chips-160g",
    "storeId": "store-9",
    "price": 8.5
  },
  {
    "productId": "chips-160g",
    "storeId": "store-10",
    "price": 8.79
  },
  {
    "productId": "chips-160g",
    "storeId": "store-11",
    "price": 9.47
  },
  {
    "productId": "chips-160g",
    "storeId": "store-12",
    "price": 8.81
  },
  {
    "productId": "chips-160g",
    "storeId": "store-13",
    "price": 8.55,
    "salePrice": 6.84
  },
  {
    "productId": "chips-160g",
    "storeId": "store-14",
    "price": 8.07
  },
  {
    "productId": "chips-160g",
    "storeId": "store-15",
    "price": 9.17,
    "salePrice": 6.85
  },
  {
    "productId": "chips-160g",
    "storeId": "store-16",
    "price": 9.46
  },
  {
    "productId": "chips-160g",
    "storeId": "store-17",
    "price": 8.01
  },
  {
    "productId": "chips-160g",
    "storeId": "store-18",
    "price": 8.72,
    "salePrice": 6.94
  },
  {
    "productId": "chips-160g",
    "storeId": "store-19",
    "price": 9.25
  },
  {
    "productId": "chips-160g",
    "storeId": "store-20",
    "price": 9.54,
    "salePrice": 7.14
  },
  {
    "productId": "chips-160g",
    "storeId": "store-21",
    "price": 8.75
  },
  {
    "productId": "chips-160g",
    "storeId": "store-22",
    "price": 8.65
  },
  {
    "productId": "chips-160g",
    "storeId": "store-23",
    "price": 9.77
  },
  {
    "productId": "chips-160g",
    "storeId": "store-24",
    "price": 9.06
  },
  {
    "productId": "chips-160g",
    "storeId": "store-25",
    "price": 8.59
  },
  {
    "productId": "chips-160g",
    "storeId": "store-26",
    "price": 8.25
  },
  {
    "productId": "chips-160g",
    "storeId": "store-27",
    "price": 9.73
  },
  {
    "productId": "chips-160g",
    "storeId": "store-28",
    "price": 9.02,
    "salePrice": 7.64
  },
  {
    "productId": "chips-160g",
    "storeId": "store-29",
    "price": 9.51
  },
  {
    "productId": "chips-160g",
    "storeId": "store-30",
    "price": 8.93,
    "salePrice": 6.54
  },
  {
    "productId": "chips-160g",
    "storeId": "store-31",
    "price": 9.07
  },
  {
    "productId": "chips-160g",
    "storeId": "store-32",
    "price": 8.14
  },
  {
    "productId": "chips-160g",
    "storeId": "store-33",
    "price": 9.29
  },
  {
    "productId": "chips-160g",
    "storeId": "store-34",
    "price": 8.96
  },
  {
    "productId": "chips-160g",
    "storeId": "store-35",
    "price": 9.44
  },
  {
    "productId": "chips-160g",
    "storeId": "store-36",
    "price": 8.99
  },
  {
    "productId": "chips-160g",
    "storeId": "store-37",
    "price": 8.97,
    "salePrice": 7.88
  },
  {
    "productId": "chips-160g",
    "storeId": "store-38",
    "price": 9.23
  },
  {
    "productId": "chips-160g",
    "storeId": "store-39",
    "price": 9.3
  },
  {
    "productId": "chips-160g",
    "storeId": "store-40",
    "price": 9.42
  },
  {
    "productId": "chips-160g",
    "storeId": "store-41",
    "price": 8.99,
    "salePrice": 7.48
  },
  {
    "productId": "chips-160g",
    "storeId": "store-42",
    "price": 8.69
  },
  {
    "productId": "chips-160g",
    "storeId": "store-43",
    "price": 9.01,
    "salePrice": 6.38
  },
  {
    "productId": "chips-160g",
    "storeId": "store-44",
    "price": 9.8
  },
  {
    "productId": "chips-160g",
    "storeId": "store-45",
    "price": 9.98
  },
  {
    "productId": "chips-160g",
    "storeId": "store-46",
    "price": 8.41
  },
  {
    "productId": "chips-160g",
    "storeId": "store-47",
    "price": 9.41
  },
  {
    "productId": "chips-160g",
    "storeId": "store-48",
    "price": 7.85
  },
  {
    "productId": "chips-160g",
    "storeId": "store-49",
    "price": 10.04,
    "salePrice": 8.14
  },
  {
    "productId": "chips-160g",
    "storeId": "store-50",
    "price": 9.45
  },
  {
    "productId": "chips-160g",
    "storeId": "store-51",
    "price": 8.89,
    "salePrice": 6.57
  },
  {
    "productId": "chips-160g",
    "storeId": "store-52",
    "price": 9.04
  },
  {
    "productId": "chips-160g",
    "storeId": "store-53",
    "price": 8.3
  },
  {
    "productId": "chips-160g",
    "storeId": "store-54",
    "price": 9.04,
    "salePrice": 7.5
  },
  {
    "productId": "chips-160g",
    "storeId": "store-55",
    "price": 7.94
  },
  {
    "productId": "chips-160g",
    "storeId": "store-56",
    "price": 9.76
  },
  {
    "productId": "chips-160g",
    "storeId": "store-57",
    "price": 8.73,
    "salePrice": 6.22
  },
  {
    "productId": "chips-160g",
    "storeId": "store-58",
    "price": 8.82
  },
  {
    "productId": "chips-160g",
    "storeId": "store-59",
    "price": 9.48
  },
  {
    "productId": "chips-160g",
    "storeId": "store-60",
    "price": 9.78
  },
  {
    "productId": "chips-160g",
    "storeId": "store-61",
    "price": 9.88
  },
  {
    "productId": "chips-160g",
    "storeId": "store-62",
    "price": 10.12
  },
  {
    "productId": "chips-160g",
    "storeId": "store-63",
    "price": 9.25
  },
  {
    "productId": "chips-160g",
    "storeId": "store-64",
    "price": 10.03
  },
  {
    "productId": "chips-160g",
    "storeId": "store-65",
    "price": 7.98
  },
  {
    "productId": "chips-160g",
    "storeId": "store-66",
    "price": 7.9,
    "salePrice": 5.86
  },
  {
    "productId": "chips-160g",
    "storeId": "store-67",
    "price": 9.71
  },
  {
    "productId": "chips-160g",
    "storeId": "store-68",
    "price": 9.14
  },
  {
    "productId": "chips-160g",
    "storeId": "store-69",
    "price": 8.94,
    "salePrice": 7.62
  },
  {
    "productId": "chips-160g",
    "storeId": "store-70",
    "price": 8.91
  },
  {
    "productId": "chips-160g",
    "storeId": "store-71",
    "price": 9.48
  },
  {
    "productId": "chips-160g",
    "storeId": "store-72",
    "price": 9.32
  },
  {
    "productId": "chips-160g",
    "storeId": "store-73",
    "price": 8.63
  },
  {
    "productId": "chips-160g",
    "storeId": "store-74",
    "price": 9.58
  },
  {
    "productId": "chips-160g",
    "storeId": "store-75",
    "price": 8.86
  },
  {
    "productId": "chips-160g",
    "storeId": "store-76",
    "price": 9.04
  },
  {
    "productId": "chips-160g",
    "storeId": "store-77",
    "price": 8.69
  },
  {
    "productId": "chips-160g",
    "storeId": "store-78",
    "price": 8.89
  },
  {
    "productId": "chips-160g",
    "storeId": "store-79",
    "price": 8.72
  },
  {
    "productId": "chips-160g",
    "storeId": "store-80",
    "price": 7.66
  },
  {
    "productId": "chips-160g",
    "storeId": "store-81",
    "price": 9.41
  },
  {
    "productId": "chips-160g",
    "storeId": "store-82",
    "price": 9.78
  },
  {
    "productId": "chips-160g",
    "storeId": "store-83",
    "price": 9.1
  },
  {
    "productId": "chips-160g",
    "storeId": "store-84",
    "price": 9.34
  },
  {
    "productId": "chips-160g",
    "storeId": "store-85",
    "price": 8.65
  },
  {
    "productId": "chips-160g",
    "storeId": "store-86",
    "price": 9.19
  },
  {
    "productId": "chips-160g",
    "storeId": "store-87",
    "price": 9.55
  },
  {
    "productId": "chips-160g",
    "storeId": "store-88",
    "price": 9.25,
    "salePrice": 7.3
  },
  {
    "productId": "chips-160g",
    "storeId": "store-89",
    "price": 9.16
  },
  {
    "productId": "chips-160g",
    "storeId": "store-90",
    "price": 8.31
  },
  {
    "productId": "chips-160g",
    "storeId": "store-91",
    "price": 7.71,
    "salePrice": 5.59
  },
  {
    "productId": "chips-160g",
    "storeId": "store-92",
    "price": 9.33
  },
  {
    "productId": "chips-160g",
    "storeId": "store-93",
    "price": 8.66
  },
  {
    "productId": "chips-160g",
    "storeId": "store-94",
    "price": 9.18
  },
  {
    "productId": "chips-160g",
    "storeId": "store-95",
    "price": 8.22
  },
  {
    "productId": "chips-160g",
    "storeId": "store-96",
    "price": 9.68
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-1",
    "price": 11.72
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-2",
    "price": 12.34
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-3",
    "price": 13.01,
    "salePrice": 10.46
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-4",
    "price": 13.01
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-5",
    "price": 11.18
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-6",
    "price": 11.75
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-7",
    "price": 13.21,
    "salePrice": 9.32
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-8",
    "price": 12.84
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-9",
    "price": 13.26,
    "salePrice": 10.94
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-10",
    "price": 13.14
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-11",
    "price": 13.91
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-12",
    "price": 12.83
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-13",
    "price": 12.86
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-14",
    "price": 10.99,
    "salePrice": 8.69
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-15",
    "price": 13.0
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-16",
    "price": 14.1
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-17",
    "price": 11.71
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-18",
    "price": 12.55,
    "salePrice": 9.72
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-19",
    "price": 12.81,
    "salePrice": 9.19
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-20",
    "price": 13.81,
    "salePrice": 10.19
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-21",
    "price": 13.48
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-22",
    "price": 13.34,
    "salePrice": 10.68
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-23",
    "price": 13.69
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-24",
    "price": 13.01
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-25",
    "price": 12.7
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-26",
    "price": 11.88
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-27",
    "price": 13.88
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-28",
    "price": 12.66,
    "salePrice": 9.57
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-29",
    "price": 13.57
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-30",
    "price": 13.52
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-31",
    "price": 13.19
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-32",
    "price": 11.06
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-33",
    "price": 12.97
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-34",
    "price": 13.22
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-35",
    "price": 13.75
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-36",
    "price": 13.2
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-37",
    "price": 13.5
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-38",
    "price": 13.2,
    "salePrice": 10.27
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-39",
    "price": 13.8
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-40",
    "price": 12.92
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-41",
    "price": 13.69
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-42",
    "price": 12.94
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-43",
    "price": 13.66
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-44",
    "price": 14.48
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-45",
    "price": 14.11
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-46",
    "price": 11.93,
    "salePrice": 9.78
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-47",
    "price": 12.69
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-48",
    "price": 12.66
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-49",
    "price": 14.15
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-50",
    "price": 14.0
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-51",
    "price": 13.61,
    "salePrice": 11.73
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-52",
    "price": 13.05
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-53",
    "price": 11.59
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-54",
    "price": 13.61
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-55",
    "price": 11.66
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-56",
    "price": 13.87
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-57",
    "price": 13.7
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-58",
    "price": 13.21
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-59",
    "price": 13.2
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-60",
    "price": 13.87
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-61",
    "price": 14.16
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-62",
    "price": 14.3
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-63",
    "price": 13.02
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-64",
    "price": 14.35
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-65",
    "price": 12.03
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-66",
    "price": 11.68
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-67",
    "price": 14.23
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-68",
    "price": 13.49
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-69",
    "price": 12.69,
    "salePrice": 11.1
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-70",
    "price": 12.4
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-71",
    "price": 13.97
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-72",
    "price": 12.4
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-73",
    "price": 12.6
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-74",
    "price": 13.62
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-75",
    "price": 12.52,
    "salePrice": 9.79
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-76",
    "price": 12.5,
    "salePrice": 10.88
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-77",
    "price": 12.3,
    "salePrice": 10.61
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-78",
    "price": 12.75
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-79",
    "price": 13.18
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-80",
    "price": 12.0
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-81",
    "price": 13.75
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-82",
    "price": 14.01
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-83",
    "price": 12.46
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-84",
    "price": 13.38
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-85",
    "price": 13.49
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-86",
    "price": 13.23
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-87",
    "price": 13.92,
    "salePrice": 11.36
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-88",
    "price": 12.87
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-89",
    "price": 12.99
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-90",
    "price": 11.14
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-91",
    "price": 12.03
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-92",
    "price": 12.67
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-93",
    "price": 13.03
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-94",
    "price": 12.41
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-95",
    "price": 11.79
  },
  {
    "productId": "water-6pack-1.5l",
    "storeId": "store-96",
    "price": 13.78
  },
  {
    "productId": "cola-2l",
    "storeId": "store-1",
    "price": 7.37
  },
  {
    "productId": "cola-2l",
    "storeId": "store-2",
    "price": 8.12
  },
  {
    "productId": "cola-2l",
    "storeId": "store-3",
    "price": 7.55
  },
  {
    "productId": "cola-2l",
    "storeId": "store-4",
    "price": 7.85
  },
  {
    "productId": "cola-2l",
    "storeId": "store-5",
    "price": 6.99
  },
  {
    "productId": "cola-2l",
    "storeId": "store-6",
    "price": 6.79
  },
  {
    "productId": "cola-2l",
    "storeId": "store-7",
    "price": 7.81
  },
  {
    "productId": "cola-2l",
    "storeId": "store-8",
    "price": 8.07
  },
  {
    "productId": "cola-2l",
    "storeId": "store-9",
    "price": 8.12,
    "salePrice": 5.93
  },
  {
    "productId": "cola-2l",
    "storeId": "store-10",
    "price": 7.69
  },
  {
    "productId": "cola-2l",
    "storeId": "store-11",
    "price": 8.5
  },
  {
    "productId": "cola-2l",
    "storeId": "store-12",
    "price": 7.55
  },
  {
    "productId": "cola-2l",
    "storeId": "store-13",
    "price": 8.23,
    "salePrice": 6.4
  },
  {
    "productId": "cola-2l",
    "storeId": "store-14",
    "price": 6.73
  },
  {
    "productId": "cola-2l",
    "storeId": "store-15",
    "price": 7.64
  },
  {
    "productId": "cola-2l",
    "storeId": "store-16",
    "price": 8.36
  },
  {
    "productId": "cola-2l",
    "storeId": "store-17",
    "price": 7.32
  },
  {
    "productId": "cola-2l",
    "storeId": "store-18",
    "price": 8.07,
    "salePrice": 6.51
  },
  {
    "productId": "cola-2l",
    "storeId": "store-19",
    "price": 7.61
  },
  {
    "productId": "cola-2l",
    "storeId": "store-20",
    "price": 8.67
  },
  {
    "productId": "cola-2l",
    "storeId": "store-21",
    "price": 7.57,
    "salePrice": 6.39
  },
  {
    "productId": "cola-2l",
    "storeId": "store-22",
    "price": 8.12
  },
  {
    "productId": "cola-2l",
    "storeId": "store-23",
    "price": 8.4
  },
  {
    "productId": "cola-2l",
    "storeId": "store-24",
    "price": 7.58
  },
  {
    "productId": "cola-2l",
    "storeId": "store-25",
    "price": 7.98
  },
  {
    "productId": "cola-2l",
    "storeId": "store-26",
    "price": 6.78,
    "salePrice": 6.01
  },
  {
    "productId": "cola-2l",
    "storeId": "store-27",
    "price": 8.34,
    "salePrice": 6.34
  },
  {
    "productId": "cola-2l",
    "storeId": "store-28",
    "price": 8.29
  },
  {
    "productId": "cola-2l",
    "storeId": "store-29",
    "price": 8.33
  },
  {
    "productId": "cola-2l",
    "storeId": "store-30",
    "price": 7.95
  },
  {
    "productId": "cola-2l",
    "storeId": "store-31",
    "price": 7.93,
    "salePrice": 6.71
  },
  {
    "productId": "cola-2l",
    "storeId": "store-32",
    "price": 7.27
  },
  {
    "productId": "cola-2l",
    "storeId": "store-33",
    "price": 7.79
  },
  {
    "productId": "cola-2l",
    "storeId": "store-34",
    "price": 7.84
  },
  {
    "productId": "cola-2l",
    "storeId": "store-35",
    "price": 8.47
  },
  {
    "productId": "cola-2l",
    "storeId": "store-36",
    "price": 7.68
  },
  {
    "productId": "cola-2l",
    "storeId": "store-37",
    "price": 7.68
  },
  {
    "productId": "cola-2l",
    "storeId": "store-38",
    "price": 8.16,
    "salePrice": 6.72
  },
  {
    "productId": "cola-2l",
    "storeId": "store-39",
    "price": 7.86
  },
  {
    "productId": "cola-2l",
    "storeId": "store-40",
    "price": 8.38
  },
  {
    "productId": "cola-2l",
    "storeId": "store-41",
    "price": 7.94
  },
  {
    "productId": "cola-2l",
    "storeId": "store-42",
    "price": 8.02
  },
  {
    "productId": "cola-2l",
    "storeId": "store-43",
    "price": 7.73
  },
  {
    "productId": "cola-2l",
    "storeId": "store-44",
    "price": 8.63
  },
  {
    "productId": "cola-2l",
    "storeId": "store-45",
    "price": 9.01
  },
  {
    "productId": "cola-2l",
    "storeId": "store-46",
    "price": 7.55,
    "salePrice": 5.37
  },
  {
    "productId": "cola-2l",
    "storeId": "store-47",
    "price": 8.09
  },
  {
    "productId": "cola-2l",
    "storeId": "store-48",
    "price": 7.36
  },
  {
    "productId": "cola-2l",
    "storeId": "store-49",
    "price": 8.98
  },
  {
    "productId": "cola-2l",
    "storeId": "store-50",
    "price": 7.57
  },
  {
    "productId": "cola-2l",
    "storeId": "store-51",
    "price": 7.76
  },
  {
    "productId": "cola-2l",
    "storeId": "store-52",
    "price": 7.99,
    "salePrice": 6.97
  },
  {
    "productId": "cola-2l",
    "storeId": "store-53",
    "price": 7.75,
    "salePrice": 6.42
  },
  {
    "productId": "cola-2l",
    "storeId": "store-54",
    "price": 7.92,
    "salePrice": 5.96
  },
  {
    "productId": "cola-2l",
    "storeId": "store-55",
    "price": 6.99,
    "salePrice": 5.4
  },
  {
    "productId": "cola-2l",
    "storeId": "store-56",
    "price": 8.74
  },
  {
    "productId": "cola-2l",
    "storeId": "store-57",
    "price": 7.79
  },
  {
    "productId": "cola-2l",
    "storeId": "store-58",
    "price": 7.65
  },
  {
    "productId": "cola-2l",
    "storeId": "store-59",
    "price": 7.74
  },
  {
    "productId": "cola-2l",
    "storeId": "store-60",
    "price": 8.7,
    "salePrice": 7.59
  },
  {
    "productId": "cola-2l",
    "storeId": "store-61",
    "price": 8.79
  },
  {
    "productId": "cola-2l",
    "storeId": "store-62",
    "price": 8.85
  },
  {
    "productId": "cola-2l",
    "storeId": "store-63",
    "price": 7.7
  },
  {
    "productId": "cola-2l",
    "storeId": "store-64",
    "price": 8.46
  },
  {
    "productId": "cola-2l",
    "storeId": "store-65",
    "price": 7.72
  },
  {
    "productId": "cola-2l",
    "storeId": "store-66",
    "price": 7.05
  },
  {
    "productId": "cola-2l",
    "storeId": "store-67",
    "price": 8.69
  },
  {
    "productId": "cola-2l",
    "storeId": "store-68",
    "price": 7.9
  },
  {
    "productId": "cola-2l",
    "storeId": "store-69",
    "price": 8.18
  },
  {
    "productId": "cola-2l",
    "storeId": "store-70",
    "price": 7.81
  },
  {
    "productId": "cola-2l",
    "storeId": "store-71",
    "price": 8.37,
    "salePrice": 6.0
  },
  {
    "productId": "cola-2l",
    "storeId": "store-72",
    "price": 7.57
  },
  {
    "productId": "cola-2l",
    "storeId": "store-73",
    "price": 7.92
  },
  {
    "productId": "cola-2l",
    "storeId": "store-74",
    "price": 8.46
  },
  {
    "productId": "cola-2l",
    "storeId": "store-75",
    "price": 8.04
  },
  {
    "productId": "cola-2l",
    "storeId": "store-76",
    "price": 8.0,
    "salePrice": 6.33
  },
  {
    "productId": "cola-2l",
    "storeId": "store-77",
    "price": 7.91
  },
  {
    "productId": "cola-2l",
    "storeId": "store-78",
    "price": 8.14
  },
  {
    "productId": "cola-2l",
    "storeId": "store-79",
    "price": 7.97,
    "salePrice": 6.96
  },
  {
    "productId": "cola-2l",
    "storeId": "store-80",
    "price": 7.03
  },
  {
    "productId": "cola-2l",
    "storeId": "store-81",
    "price": 8.46,
    "salePrice": 6.32
  },
  {
    "productId": "cola-2l",
    "storeId": "store-82",
    "price": 8.63
  },
  {
    "productId": "cola-2l",
    "storeId": "store-83",
    "price": 7.81
  },
  {
    "productId": "cola-2l",
    "storeId": "store-84",
    "price": 7.74
  },
  {
    "productId": "cola-2l",
    "storeId": "store-85",
    "price": 8.08
  },
  {
    "productId": "cola-2l",
    "storeId": "store-86",
    "price": 7.68
  },
  {
    "productId": "cola-2l",
    "storeId": "store-87",
    "price": 8.31
  },
  {
    "productId": "cola-2l",
    "storeId": "store-88",
    "price": 7.54
  },
  {
    "productId": "cola-2l",
    "storeId": "store-89",
    "price": 8.08
  },
  {
    "productId": "cola-2l",
    "storeId": "store-90",
    "price": 6.95
  },
  {
    "productId": "cola-2l",
    "storeId": "store-91",
    "price": 6.96
  },
  {
    "productId": "cola-2l",
    "storeId": "store-92",
    "price": 8.12
  },
  {
    "productId": "cola-2l",
    "storeId": "store-93",
    "price": 7.84
  },
  {
    "productId": "cola-2l",
    "storeId": "store-94",
    "price": 8.22
  },
  {
    "productId": "cola-2l",
    "storeId": "store-95",
    "price": 7.41,
    "salePrice": 5.89
  },
  {
    "productId": "cola-2l",
    "storeId": "store-96",
    "price": 8.37
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-1",
    "price": 7.97
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-2",
    "price": 8.81,
    "salePrice": 7.38
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-3",
    "price": 8.66
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-4",
    "price": 8.87
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-5",
    "price": 8.32
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-6",
    "price": 7.57
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-7",
    "price": 8.57
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-8",
    "price": 8.69,
    "salePrice": 7.37
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-9",
    "price": 9.25
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-10",
    "price": 8.96
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-11",
    "price": 9.46
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-12",
    "price": 8.88
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-13",
    "price": 9.24
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-14",
    "price": 7.91,
    "salePrice": 7.06
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-15",
    "price": 9.07
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-16",
    "price": 9.55
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-17",
    "price": 8.12,
    "salePrice": 6.45
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-18",
    "price": 9.1
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-19",
    "price": 8.66
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-20",
    "price": 9.68
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-21",
    "price": 8.97
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-22",
    "price": 8.85
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-23",
    "price": 9.57,
    "salePrice": 7.75
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-24",
    "price": 8.94
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-25",
    "price": 9.26
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-26",
    "price": 7.61
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-27",
    "price": 9.35
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-28",
    "price": 8.87
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-29",
    "price": 9.68,
    "salePrice": 7.83
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-30",
    "price": 8.97
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-31",
    "price": 9.29
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-32",
    "price": 8.42
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-33",
    "price": 9.32
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-34",
    "price": 8.8
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-35",
    "price": 9.39
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-36",
    "price": 8.8
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-37",
    "price": 8.71
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-38",
    "price": 8.77
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-39",
    "price": 9.07
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-40",
    "price": 8.55
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-41",
    "price": 8.91
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-42",
    "price": 8.9
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-43",
    "price": 8.65,
    "salePrice": 7.71
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-44",
    "price": 10.05
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-45",
    "price": 9.95
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-46",
    "price": 7.88
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-47",
    "price": 9.38
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-48",
    "price": 8.67,
    "salePrice": 6.71
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-49",
    "price": 9.81
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-50",
    "price": 8.8
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-51",
    "price": 9.54
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-52",
    "price": 8.98,
    "salePrice": 6.6
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-53",
    "price": 8.01
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-54",
    "price": 9.35
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-55",
    "price": 8.87,
    "salePrice": 6.64
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-56",
    "price": 9.65
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-57",
    "price": 9.3,
    "salePrice": 7.5
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-58",
    "price": 9.41
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-59",
    "price": 9.24
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-60",
    "price": 9.93
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-61",
    "price": 9.47
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-62",
    "price": 10.07
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-63",
    "price": 9.32
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-64",
    "price": 9.88
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-65",
    "price": 7.94,
    "salePrice": 7.02
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-66",
    "price": 8.51
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-67",
    "price": 9.58
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-68",
    "price": 9.13
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-69",
    "price": 8.87
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-70",
    "price": 8.87,
    "salePrice": 6.43
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-71",
    "price": 9.37,
    "salePrice": 6.62
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-72",
    "price": 9.02
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-73",
    "price": 9.33,
    "salePrice": 7.39
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-74",
    "price": 9.42,
    "salePrice": 8.21
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-75",
    "price": 9.31
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-76",
    "price": 8.49
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-77",
    "price": 8.52
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-78",
    "price": 9.3
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-79",
    "price": 8.85
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-80",
    "price": 7.71
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-81",
    "price": 9.69
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-82",
    "price": 9.64,
    "salePrice": 7.65
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-83",
    "price": 9.0
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-84",
    "price": 8.85
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-85",
    "price": 8.88
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-86",
    "price": 8.54
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-87",
    "price": 9.73,
    "salePrice": 7.76
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-88",
    "price": 9.15
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-89",
    "price": 8.64
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-90",
    "price": 7.73
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-91",
    "price": 7.6
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-92",
    "price": 8.55
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-93",
    "price": 8.76
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-94",
    "price": 9.14
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-95",
    "price": 7.61
  },
  {
    "productId": "orange-juice-1l",
    "storeId": "store-96",
    "price": 9.59
  }
];
