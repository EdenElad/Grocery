import { Product } from '../types';

// רשימה מקיפה של מוצרי מזון נפוצים בסופרמרקטים בישראל
export const allProducts: Product[] = [
  // ===== מוצרי חלב =====
  { id: 'milk-tnuva-3-1l', name: 'חלב תנובה 3%', category: 'מוצרי חלב', quantity: 1, unit: 'ליטר' },
  { id: 'milk-tnuva-1-1l', name: 'חלב תנובה 1%', category: 'מוצרי חלב', quantity: 1, unit: 'ליטר' },
  { id: 'milk-tara-3-1l', name: 'חלב טרה 3%', category: 'מוצרי חלב', quantity: 1, unit: 'ליטר' },
  { id: 'milk-yotvata-3-1l', name: 'חלב יטבתה 3%', category: 'מוצרי חלב', quantity: 1, unit: 'ליטר' },
  { id: 'milk-strauss-3-1l', name: 'חלב שטראוס 3%', category: 'מוצרי חלב', quantity: 1, unit: 'ליטר' },

  { id: 'cottage-tnuva-5-250g', name: 'קוטג׳ תנובה 5%', category: 'מוצרי חלב', quantity: 250, unit: 'גרם' },
  { id: 'cottage-tnuva-9-250g', name: 'קוטג׳ תנובה 9%', category: 'מוצרי חלב', quantity: 250, unit: 'גרם' },
  { id: 'cottage-tara-5-250g', name: 'קוטג׳ טרה 5%', category: 'מוצרי חלב', quantity: 250, unit: 'גרם' },
  { id: 'cottage-strauss-5-250g', name: 'קוטג׳ שטראוס 5%', category: 'מוצרי חלב', quantity: 250, unit: 'גרם' },

  { id: 'yogurt-yoplait-150g', name: 'יוגורט יופלה תות', category: 'מוצרי חלב', quantity: 150, unit: 'גרם' },
  { id: 'yogurt-danone-150g', name: 'יוגורט דנונה אפרסק', category: 'מוצרי חלב', quantity: 150, unit: 'גרם' },
  { id: 'yogurt-bio-150g', name: 'ביו יוגורט תנובה', category: 'מוצרי חלב', quantity: 150, unit: 'גרם' },
  { id: 'yogurt-activia-125g', name: 'אקטיביה דנון', category: 'מוצרי חלב', quantity: 125, unit: 'גרם' },

  { id: 'cheese-yellow-emek-200g', name: 'גבינה צהובה עמק', category: 'מוצרי חלב', quantity: 200, unit: 'גרם' },
  { id: 'cheese-yellow-tnuva-200g', name: 'גבינה צהובה תנובה', category: 'מוצרי חלב', quantity: 200, unit: 'גרם' },
  { id: 'cheese-white-5-250g', name: 'גבינה לבנה 5%', category: 'מוצרי חלב', quantity: 250, unit: 'גרם' },
  { id: 'cheese-bulgarian-5-250g', name: 'גבינה בולגרית 5%', category: 'מוצרי חלב', quantity: 250, unit: 'גרם' },
  { id: 'cheese-feta-200g', name: 'גבינת פטה', category: 'מוצרי חלב', quantity: 200, unit: 'גרם' },
  { id: 'cheese-mozzarella-250g', name: 'מוצרלה', category: 'מוצרי חלב', quantity: 250, unit: 'גרם' },

  { id: 'labneh-tnuva-250g', name: 'לבנה תנובה', category: 'מוצרי חלב', quantity: 250, unit: 'גרם' },
  { id: 'sour-cream-250g', name: 'שמנת חמוצה', category: 'מוצרי חלב', quantity: 250, unit: 'גרם' },
  { id: 'butter-100g', name: 'חמאה', category: 'מוצרי חלב', quantity: 100, unit: 'גרם' },
  { id: 'margarine-250g', name: 'מרגרינה', category: 'מוצרי חלב', quantity: 250, unit: 'גרם' },

  // ===== ביצים =====
  { id: 'eggs-L-12', name: 'ביצים L', category: 'ביצים', quantity: 12, unit: 'יחידות' },
  { id: 'eggs-M-12', name: 'ביצים M', category: 'ביצים', quantity: 12, unit: 'יחידות' },
  { id: 'eggs-XL-12', name: 'ביצים XL', category: 'ביצים', quantity: 12, unit: 'יחידות' },
  { id: 'eggs-organic-6', name: 'ביצים אורגניות', category: 'ביצים', quantity: 6, unit: 'יחידות' },

  // ===== לחם ומאפים =====
  { id: 'bread-white-750g', name: 'לחם לבן אחיד פרוס', category: 'לחם ומאפים', quantity: 750, unit: 'גרם' },
  { id: 'bread-whole-wheat-750g', name: 'לחם אחיד מקמח מלא', category: 'לחם ומאפים', quantity: 750, unit: 'גרם' },
  { id: 'bread-rye-500g', name: 'לחם שיפון', category: 'לחם ומאפים', quantity: 500, unit: 'גרם' },
  { id: 'bread-bagel-500g', name: 'לחם בייגל', category: 'לחם ומאפים', quantity: 500, unit: 'גרם' },
  { id: 'pita-white-10', name: 'פיתות לבנות', category: 'לחם ומאפים', quantity: 10, unit: 'יחידות' },
  { id: 'pita-whole-wheat-10', name: 'פיתות מלא', category: 'לחם ומאפים', quantity: 10, unit: 'יחידות' },
  { id: 'challah-450g', name: 'חלה', category: 'לחם ומאפים', quantity: 450, unit: 'גרם' },
  { id: 'bagel-sesame-6', name: 'בייגלה שומשום', category: 'לחם ומאפים', quantity: 6, unit: 'יחידות' },
  { id: 'toast-white-500g', name: 'טוסט לבן', category: 'לחם ומאפים', quantity: 500, unit: 'גרם' },
  { id: 'toast-whole-wheat-500g', name: 'טוסט מלא', category: 'לחם ומאפים', quantity: 500, unit: 'גרם' },

  // ===== ירקות =====
  { id: 'tomatoes-1kg', name: 'עגבניות', category: 'ירקות ופירות', quantity: 1, unit: 'קילו' },
  { id: 'cucumbers-1kg', name: 'מלפפונים', category: 'ירקות ופירות', quantity: 1, unit: 'קילו' },
  { id: 'onions-1kg', name: 'בצל', category: 'ירקות ופירות', quantity: 1, unit: 'קילו' },
  { id: 'potatoes-1kg', name: 'תפוחי אדמה', category: 'ירקות ופירות', quantity: 1, unit: 'קילו' },
  { id: 'carrots-1kg', name: 'גזר', category: 'ירקות ופירות', quantity: 1, unit: 'קילו' },
  { id: 'peppers-red-1kg', name: 'פלפל אדום', category: 'ירקות ופירות', quantity: 1, unit: 'קילו' },
  { id: 'peppers-green-1kg', name: 'פלפל ירוק', category: 'ירקות ופירות', quantity: 1, unit: 'קילו' },
  { id: 'lettuce-1', name: 'חסה', category: 'ירקות ופירות', quantity: 1, unit: 'יחידה' },
  { id: 'cabbage-1kg', name: 'כרוב לבן', category: 'ירקות ופירות', quantity: 1, unit: 'קילו' },
  { id: 'cauliflower-1', name: 'כרובית', category: 'ירקות ופירות', quantity: 1, unit: 'יחידה' },
  { id: 'broccoli-1', name: 'ברוקולי', category: 'ירקות ופירות', quantity: 1, unit: 'יחידה' },
  { id: 'eggplant-1kg', name: 'חצילים', category: 'ירקות ופירות', quantity: 1, unit: 'קילו' },
  { id: 'zucchini-1kg', name: 'קישואים', category: 'ירקות ופירות', quantity: 1, unit: 'קילו' },
  { id: 'sweet-potato-1kg', name: 'בטטה', category: 'ירקות ופירות', quantity: 1, unit: 'קילו' },
  { id: 'garlic-100g', name: 'שום', category: 'ירקות ופירות', quantity: 100, unit: 'גרם' },

  // ===== פירות =====
  { id: 'apples-1kg', name: 'תפוחים', category: 'ירקות ופירות', quantity: 1, unit: 'קילו' },
  { id: 'bananas-1kg', name: 'בננות', category: 'ירקות ופירות', quantity: 1, unit: 'קילו' },
  { id: 'oranges-1kg', name: 'תפוזים', category: 'ירקות ופירות', quantity: 1, unit: 'קילו' },
  { id: 'grapes-1kg', name: 'ענבים', category: 'ירקות ופירות', quantity: 1, unit: 'קילו' },
  { id: 'watermelon-1kg', name: 'אבטיח', category: 'ירקות ופירות', quantity: 1, unit: 'קילו' },
  { id: 'melon-1kg', name: 'מלון', category: 'ירקות ופירות', quantity: 1, unit: 'קילו' },
  { id: 'strawberries-250g', name: 'תותים', category: 'ירקות ופירות', quantity: 250, unit: 'גרם' },
  { id: 'kiwi-1kg', name: 'קיווי', category: 'ירקות ופירות', quantity: 1, unit: 'קילו' },
  { id: 'mango-1', name: 'מנגו', category: 'ירקות ופירות', quantity: 1, unit: 'יחידה' },
  { id: 'avocado-1', name: 'אבוקדו', category: 'ירקות ופירות', quantity: 1, unit: 'יחידה' },

  // ===== בשר ועוף =====
  { id: 'chicken-breast-1kg', name: 'חזה עוף טרי', category: 'בשר ועוף', quantity: 1, unit: 'קילו' },
  { id: 'chicken-thigh-1kg', name: 'שוקיים עוף', category: 'בשר ועוף', quantity: 1, unit: 'קילו' },
  { id: 'chicken-drumsticks-1kg', name: 'כרעיים עוף', category: 'בשר ועוף', quantity: 1, unit: 'קילו' },
  { id: 'chicken-wings-1kg', name: 'כנפיים עוף', category: 'בשר ועוף', quantity: 1, unit: 'קילו' },
  { id: 'chicken-whole-1kg', name: 'עוף שלם', category: 'בשר ועוף', quantity: 1, unit: 'קילו' },
  { id: 'turkey-breast-1kg', name: 'חזה הודו', category: 'בשר ועוף', quantity: 1, unit: 'קילו' },
  { id: 'ground-beef-500g', name: 'בשר טחון בקר', category: 'בשר ועוף', quantity: 500, unit: 'גרם' },
  { id: 'beef-steak-1kg', name: 'סטייק בקר', category: 'בשר ועוף', quantity: 1, unit: 'קילו' },
  { id: 'beef-entrecote-1kg', name: 'אנטריקוט', category: 'בשר ועוף', quantity: 1, unit: 'קילו' },
  { id: 'lamb-1kg', name: 'כבש', category: 'בשר ועוף', quantity: 1, unit: 'קילו' },

  // ===== דגים =====
  { id: 'fish-tilapia-1kg', name: 'פילה אמנון', category: 'דגים', quantity: 1, unit: 'קילו' },
  { id: 'fish-salmon-1kg', name: 'פילה סלמון', category: 'דגים', quantity: 1, unit: 'קילו' },
  { id: 'fish-sea-bream-1kg', name: 'דניס', category: 'דגים', quantity: 1, unit: 'קילו' },
  { id: 'fish-sea-bass-1kg', name: 'לברק', category: 'דגים', quantity: 1, unit: 'קילו' },
  { id: 'tuna-can-160g', name: 'טונה בשמן', category: 'דגים', quantity: 160, unit: 'גרם' },

  // ===== בשר מעובד =====
  { id: 'salami-200g', name: 'סלמי', category: 'בשר מעובד', quantity: 200, unit: 'גרם' },
  { id: 'pastrami-200g', name: 'פסטרמה', category: 'בשר מעובד', quantity: 200, unit: 'גרם' },
  { id: 'turkey-slices-200g', name: 'פרוסות הודו', category: 'בשר מעובד', quantity: 200, unit: 'גרם' },
  { id: 'hot-dogs-400g', name: 'נקניקיות', category: 'בשר מעובד', quantity: 400, unit: 'גרם' },
  { id: 'hamburger-patties-1kg', name: 'קציצות המבורגר', category: 'בשר מעובד', quantity: 1, unit: 'קילו' },

  // ===== אורז ופסטה =====
  { id: 'rice-white-1kg', name: 'אורז לבן', category: 'אורז ופסטה', quantity: 1, unit: 'קילו' },
  { id: 'rice-jasmine-1kg', name: 'אורז יסמין', category: 'אורז ופסטה', quantity: 1, unit: 'קילו' },
  { id: 'rice-basmati-1kg', name: 'אורז בסמטי', category: 'אורז ופסטה', quantity: 1, unit: 'קילו' },
  { id: 'rice-brown-1kg', name: 'אורז מלא', category: 'אורז ופסטה', quantity: 1, unit: 'קילו' },
  { id: 'pasta-spaghetti-500g', name: 'ספגטי', category: 'אורז ופסטה', quantity: 500, unit: 'גרם' },
  { id: 'pasta-penne-500g', name: 'פסטה פנה', category: 'אורז ופסטה', quantity: 500, unit: 'גרם' },
  { id: 'pasta-rigatoni-500g', name: 'פסטה ריגטוני', category: 'אורז ופסטה', quantity: 500, unit: 'גרם' },
  { id: 'couscous-500g', name: 'קוסקוס', category: 'אורז ופסטה', quantity: 500, unit: 'גרם' },
  { id: 'noodles-250g', name: 'אטריות ביצים', category: 'אורז ופסטה', quantity: 250, unit: 'גרם' },

  // ===== קמחים ואפייה =====
  { id: 'flour-white-1kg', name: 'קמח לבן', category: 'קמחים ואפייה', quantity: 1, unit: 'קילו' },
  { id: 'flour-whole-wheat-1kg', name: 'קמח מלא', category: 'קמחים ואפייה', quantity: 1, unit: 'קילו' },
  { id: 'flour-self-rising-1kg', name: 'קמח תופח', category: 'קמחים ואפייה', quantity: 1, unit: 'קילו' },
  { id: 'sugar-white-1kg', name: 'סוכר לבן', category: 'קמחים ואפייה', quantity: 1, unit: 'קילו' },
  { id: 'sugar-brown-500g', name: 'סוכר חום', category: 'קמחים ואפייה', quantity: 500, unit: 'גרם' },
  { id: 'baking-powder-100g', name: 'אבקת אפייה', category: 'קמחים ואפייה', quantity: 100, unit: 'גרם' },
  { id: 'vanilla-sugar-10pk', name: 'סוכר וניל', category: 'קמחים ואפייה', quantity: 10, unit: 'יחידות' },
  { id: 'cocoa-powder-200g', name: 'אבקת קקאו', category: 'קמחים ואפייה', quantity: 200, unit: 'גרם' },
  { id: 'yeast-50g', name: 'שמרים', category: 'קמחים ואפייה', quantity: 50, unit: 'גרם' },

  // ===== שמנים ורטבים =====
  { id: 'oil-canola-1l', name: 'שמן קנולה', category: 'שמנים ורטבים', quantity: 1, unit: 'ליטר' },
  { id: 'oil-sunflower-1l', name: 'שמן חמניות', category: 'שמנים ורטבים', quantity: 1, unit: 'ליטר' },
  { id: 'olive-oil-500ml', name: 'שמן זית', category: 'שמנים ורטבים', quantity: 500, unit: 'מ״ל' },
  { id: 'olive-oil-1l', name: 'שמן זית ליטר', category: 'שמנים ורטבים', quantity: 1, unit: 'ליטר' },
  { id: 'vinegar-500ml', name: 'חומץ', category: 'שמנים ורטבים', quantity: 500, unit: 'מ״ל' },
  { id: 'soy-sauce-250ml', name: 'רוטב סויה', category: 'שמנים ורטבים', quantity: 250, unit: 'מ״ל' },
  { id: 'ketchup-500g', name: 'קטשופ', category: 'שמנים ורטבים', quantity: 500, unit: 'גרם' },
  { id: 'mayonnaise-500g', name: 'מיונז', category: 'שמנים ורטבים', quantity: 500, unit: 'גרם' },
  { id: 'mustard-250g', name: 'חרדל', category: 'שמנים ורטבים', quantity: 250, unit: 'גרם' },
  { id: 'tahini-500g', name: 'טחינה', category: 'שמנים ורטבים', quantity: 500, unit: 'גרם' },

  // ===== שימורים =====
  { id: 'tomato-paste-580g', name: 'רסק עגבניות', category: 'שימורים', quantity: 580, unit: 'גרם' },
  { id: 'corn-can-420g', name: 'תירס שימורי', category: 'שימורים', quantity: 420, unit: 'גרם' },
  { id: 'peas-can-420g', name: 'אפונה שימורית', category: 'שימורים', quantity: 420, unit: 'גרם' },
  { id: 'mushrooms-can-400g', name: 'פטריות שימורית', category: 'שימורים', quantity: 400, unit: 'גרם' },
  { id: 'olives-green-350g', name: 'זיתים ירוקים', category: 'שימורים', quantity: 350, unit: 'גרם' },
  { id: 'olives-black-350g', name: 'זיתים שחורים', category: 'שימורים', quantity: 350, unit: 'גרם' },
  { id: 'pickles-jar-680g', name: 'מלפפונים חמוצים', category: 'שימורים', quantity: 680, unit: 'גרם' },
  { id: 'chickpeas-can-420g', name: 'חומוס שימורי', category: 'שימורים', quantity: 420, unit: 'גרם' },

  // ===== קטניות =====
  { id: 'lentils-500g', name: 'עדשים', category: 'קטניות', quantity: 500, unit: 'גרם' },
  { id: 'chickpeas-500g', name: 'חומוס יבש', category: 'קטניות', quantity: 500, unit: 'גרם' },
  { id: 'beans-500g', name: 'שעועית יבשה', category: 'קטניות', quantity: 500, unit: 'גרם' },

  // ===== דגנים ובריאות =====
  { id: 'oats-500g', name: 'שיבולת שועל', category: 'דגנים ובריאות', quantity: 500, unit: 'גרם' },
  { id: 'granola-500g', name: 'גרנולה', category: 'דגנים ובריאות', quantity: 500, unit: 'גרם' },
  { id: 'cornflakes-500g', name: 'קורנפלקס', category: 'דגנים ובריאות', quantity: 500, unit: 'גרם' },
  { id: 'muesli-500g', name: 'מוזלי', category: 'דגנים ובריאות', quantity: 500, unit: 'גרם' },
  { id: 'quinoa-500g', name: 'קינואה', category: 'דגנים ובריאות', quantity: 500, unit: 'גרם' },

  // ===== משקאות קלים =====
  { id: 'water-6x1.5l', name: 'מים מינרלים 6 בקבוקים', category: 'משקאות', quantity: 9, unit: 'ליטר' },
  { id: 'cola-2l', name: 'קוקה קולה 2 ליטר', category: 'משקאות', quantity: 2, unit: 'ליטר' },
  { id: 'cola-1.5l', name: 'קוקה קולה 1.5 ליטר', category: 'משקאות', quantity: 1.5, unit: 'ליטר' },
  { id: 'sprite-2l', name: 'ספרייט 2 ליטר', category: 'משקאות', quantity: 2, unit: 'ליטר' },
  { id: 'fanta-2l', name: 'פאנטה 2 ליטר', category: 'משקאות', quantity: 2, unit: 'ליטר' },
  { id: 'ice-tea-1.5l', name: 'אייס טי', category: 'משקאות', quantity: 1.5, unit: 'ליטר' },
  { id: 'energy-drink-250ml', name: 'משקה אנרגיה', category: 'משקאות', quantity: 250, unit: 'מ״ל' },

  // ===== מיצים =====
  { id: 'orange-juice-1l', name: 'מיץ תפוזים טרי', category: 'מיצים', quantity: 1, unit: 'ליטר' },
  { id: 'apple-juice-1l', name: 'מיץ תפוחים', category: 'מיצים', quantity: 1, unit: 'ליטר' },
  { id: 'grape-juice-1l', name: 'מיץ ענבים', category: 'מיצים', quantity: 1, unit: 'ליטר' },
  { id: 'prigat-orange-1l', name: 'פריגת תפוזים', category: 'מיצים', quantity: 1, unit: 'ליטר' },

  // ===== קפה ותה =====
  { id: 'coffee-instant-200g', name: 'קפה נמס', category: 'קפה ותה', quantity: 200, unit: 'גרם' },
  { id: 'coffee-elite-200g', name: 'עלית קפה נמס', category: 'קפה ותה', quantity: 200, unit: 'גרם' },
  { id: 'coffee-beans-500g', name: 'פולי קפה', category: 'קפה ותה', quantity: 500, unit: 'גרם' },
  { id: 'coffee-ground-250g', name: 'קפה טחון', category: 'קפה ותה', quantity: 250, unit: 'גרם' },
  { id: 'tea-bags-25', name: 'תה שקיות', category: 'קפה ותה', quantity: 25, unit: 'יחידות' },
  { id: 'tea-green-20', name: 'תה ירוק', category: 'קפה ותה', quantity: 20, unit: 'יחידות' },
  { id: 'tea-herbal-20', name: 'תה צמחים', category: 'קפה ותה', quantity: 20, unit: 'יחידות' },

  // ===== חטיפים =====
  { id: 'chips-200g', name: 'צ\'יפס במבה', category: 'חטיפים', quantity: 200, unit: 'גרם' },
  { id: 'bamba-200g', name: 'במבה', category: 'חטיפים', quantity: 200, unit: 'גרם' },
  { id: 'bissli-70g', name: 'ביסלי', category: 'חטיפים', quantity: 70, unit: 'גרם' },
  { id: 'doritos-180g', name: 'דוריטוס', category: 'חטיפים', quantity: 180, unit: 'גרם' },
  { id: 'pretzels-200g', name: 'בייגלה מלוח', category: 'חטיפים', quantity: 200, unit: 'גרם' },
  { id: 'popcorn-100g', name: 'פופקורן', category: 'חטיפים', quantity: 100, unit: 'גרם' },
  { id: 'nuts-mix-200g', name: 'אגוזים מעורבים', category: 'חטיפים', quantity: 200, unit: 'גרם' },
  { id: 'peanuts-200g', name: 'בוטנים קלויים', category: 'חטיפים', quantity: 200, unit: 'גרם' },

  // ===== מתוקים =====
  { id: 'chocolate-milk-100g', name: 'שוקולד חלב', category: 'מתוקים', quantity: 100, unit: 'גרם' },
  { id: 'chocolate-dark-100g', name: 'שוקולד מריר', category: 'מתוקים', quantity: 100, unit: 'גרם' },
  { id: 'chocolate-white-100g', name: 'שוקולד לבן', category: 'מתוקים', quantity: 100, unit: 'גרם' },
  { id: 'kinder-surprise-20g', name: 'קינדר הפתעה', category: 'מתוקים', quantity: 20, unit: 'גרם' },
  { id: 'snickers-50g', name: 'סניקרס', category: 'מתוקים', quantity: 50, unit: 'גרם' },
  { id: 'mars-50g', name: 'מארס', category: 'מתוקים', quantity: 50, unit: 'גרם' },
  { id: 'twix-50g', name: 'טוויקס', category: 'מתוקים', quantity: 50, unit: 'גרם' },
  { id: 'biscuits-tea-250g', name: 'עוגיות תה', category: 'מתוקים', quantity: 250, unit: 'גרם' },
  { id: 'biscuits-chocolate-250g', name: 'עוגיות שוקולד', category: 'מתוקים', quantity: 250, unit: 'גרם' },
  { id: 'wafers-200g', name: 'וופלים', category: 'מתוקים', quantity: 200, unit: 'גרם' },
  { id: 'cookies-250g', name: 'עוגיות חמאה', category: 'מתוקים', quantity: 250, unit: 'גרם' },
  { id: 'honey-500g', name: 'דבש', category: 'מתוקים', quantity: 500, unit: 'גרם' },
  { id: 'jam-strawberry-400g', name: 'ריבת תות', category: 'מתוקים', quantity: 400, unit: 'גרם' },
  { id: 'nutella-400g', name: 'נוטלה', category: 'מתוקים', quantity: 400, unit: 'גרם' },

  // ===== תבלינים =====
  { id: 'salt-1kg', name: 'מלח', category: 'תבלינים', quantity: 1, unit: 'קילו' },
  { id: 'pepper-black-50g', name: 'פלפל שחור', category: 'תבלינים', quantity: 50, unit: 'גרם' },
  { id: 'paprika-50g', name: 'פפריקה', category: 'תבלינים', quantity: 50, unit: 'גרם' },
  { id: 'cumin-50g', name: 'כמון', category: 'תבלינים', quantity: 50, unit: 'גרם' },
  { id: 'turmeric-50g', name: 'כורכום', category: 'תבלינים', quantity: 50, unit: 'גרם' },
  { id: 'cinnamon-50g', name: 'קינמון', category: 'תבלינים', quantity: 50, unit: 'גרם' },
  { id: 'oregano-30g', name: 'אורגנו', category: 'תבלינים', quantity: 30, unit: 'גרם' },
  { id: 'basil-30g', name: 'בזיליקום', category: 'תבלינים', quantity: 30, unit: 'גרם' },

  // ===== מוצרי ניקיון =====
  { id: 'dish-soap-750ml', name: 'נוזל כלים', category: 'מוצרי ניקיון', quantity: 750, unit: 'מ״ל' },
  { id: 'laundry-detergent-1l', name: 'אבקת כביסה נוזלית', category: 'מוצרי ניקיון', quantity: 1, unit: 'ליטר' },
  { id: 'laundry-powder-2kg', name: 'אבקת כביסה', category: 'מוצרי ניקיון', quantity: 2, unit: 'קילו' },
  { id: 'fabric-softener-1l', name: 'מרכך כביסה', category: 'מוצרי ניקיון', quantity: 1, unit: 'ליטר' },
  { id: 'bleach-1l', name: 'אקונומיקה', category: 'מוצרי ניקיון', quantity: 1, unit: 'ליטר' },
  { id: 'floor-cleaner-1l', name: 'נוזל רצפות', category: 'מוצרי ניקיון', quantity: 1, unit: 'ליטר' },
  { id: 'toilet-cleaner-750ml', name: 'אקונומיקה לאסלה', category: 'מוצרי ניקיון', quantity: 750, unit: 'מ״ל' },
  { id: 'glass-cleaner-500ml', name: 'נוזל לזכוכית', category: 'מוצרי ניקיון', quantity: 500, unit: 'מ״ל' },
  { id: 'sponges-10pk', name: 'ספוגים', category: 'מוצרי ניקיון', quantity: 10, unit: 'יחידות' },

  // ===== מוצרי נייר =====
  { id: 'toilet-paper-8', name: 'נייר טואלט 8 גלילים', category: 'מוצרי נייר', quantity: 8, unit: 'יחידות' },
  { id: 'toilet-paper-24', name: 'נייר טואלט 24 גלילים', category: 'מוצרי נייר', quantity: 24, unit: 'יחידות' },
  { id: 'paper-towels-4', name: 'מגבות נייר 4 גלילים', category: 'מוצרי נייר', quantity: 4, unit: 'יחידות' },
  { id: 'tissues-box', name: 'טישו קופסא', category: 'מוצרי נייר', quantity: 1, unit: 'יחידה' },
  { id: 'napkins-100', name: 'מפיות נייר', category: 'מוצרי נייר', quantity: 100, unit: 'יחידות' },

  // ===== מוצרי תינוקות =====
  { id: 'diapers-size3-40', name: 'חיתולים מידה 3', category: 'מוצרי תינוקות', quantity: 40, unit: 'יחידות' },
  { id: 'diapers-size4-40', name: 'חיתולים מידה 4', category: 'מוצרי תינוקות', quantity: 40, unit: 'יחידות' },
  { id: 'baby-wipes-80', name: 'מגבונים לתינוק', category: 'מוצרי תינוקות', quantity: 80, unit: 'יחידות' },
  { id: 'baby-formula-700g', name: 'תרכובת מזון לתינוק', category: 'מוצרי תינוקות', quantity: 700, unit: 'גרם' },

  // ===== מוצרי טיפוח =====
  { id: 'shampoo-700ml', name: 'שמפו', category: 'מוצרי טיפוח', quantity: 700, unit: 'מ״ל' },
  { id: 'conditioner-700ml', name: 'מרכך שיער', category: 'מוצרי טיפוח', quantity: 700, unit: 'מ״ל' },
  { id: 'shower-gel-700ml', name: 'ג\'ל רחצה', category: 'מוצרי טיפוח', quantity: 700, unit: 'מ״ל' },
  { id: 'soap-bar-125g', name: 'סבון מוצק', category: 'מוצרי טיפוח', quantity: 125, unit: 'גרם' },
  { id: 'toothpaste-100ml', name: 'משחת שיניים', category: 'מוצרי טיפוח', quantity: 100, unit: 'מ״ל' },
  { id: 'toothbrush', name: 'מברשת שיניים', category: 'מוצרי טיפוח', quantity: 1, unit: 'יחידה' },
  { id: 'deodorant-150ml', name: 'דאודורנט', category: 'מוצרי טיפוח', quantity: 150, unit: 'מ״ל' },
];
