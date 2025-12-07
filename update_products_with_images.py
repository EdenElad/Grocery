# -*- coding: utf-8 -*-
# סקריפט להוספת תמונות למוצרים
import sys
if sys.platform == 'win32':
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# קריאת הקובץ הקיים
with open('src/data/mockData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# מיפוי תמונות למוצרים
product_images = {
    'milk-tnuva-3-1l': 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&h=300&fit=crop',
    'milk-tnuva-1-1l': 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&h=300&fit=crop',
    'milk-tara-3-1l': 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&h=300&fit=crop',
    'milk-yotvata-3-1l': 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&h=300&fit=crop',
    'milk-strauss-3-1l': 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&h=300&fit=crop',
    'cottage-tnuva-5-250g': 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=300&h=300&fit=crop',
    'cottage-tnuva-9-250g': 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=300&h=300&fit=crop',
    'cottage-tara-5-250g': 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=300&h=300&fit=crop',
    'cottage-strauss-5-250g': 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=300&h=300&fit=crop',
    'yogurt-yoplait-150g': 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&h=300&fit=crop',
    'yogurt-danone-150g': 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&h=300&fit=crop',
    'yogurt-bio-150g': 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&h=300&fit=crop',
    'yogurt-activia-150g': 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&h=300&fit=crop',
    'greek-yogurt-200g': 'https://images.unsplash.com/photo-1571212515934-170b8b0abc6e?w=300&h=300&fit=crop',
    'skyr-150g': 'https://images.unsplash.com/photo-1571212515934-170b8b0abc6e?w=300&h=300&fit=crop',
    'kefir-500ml': 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=300&h=300&fit=crop',
    'yellow-cheese-tnuva-200g': 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=300&h=300&fit=crop',
    'yellow-cheese-emek-200g': 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=300&h=300&fit=crop',
    'white-cheese-gad-250g': 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=300&h=300&fit=crop',
    'white-cheese-tal-250g': 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=300&h=300&fit=crop',
    'mozzarella-250g': 'https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=300&h=300&fit=crop',
    'feta-cheese-250g': 'https://images.unsplash.com/photo-1531521965271-7f9cabe58854?w=300&h=300&fit=crop',
    'cream-cheese-150g': 'https://images.unsplash.com/photo-1559563458-527698425a3f?w=300&h=300&fit=crop',
    'parmesan-100g': 'https://images.unsplash.com/photo-1589881133595-c7384e7d837f?w=300&h=300&fit=crop',
    'butter-tnuva-200g': 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=300&h=300&fit=crop',
    'sour-cream-tnuva-250ml': 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=300&h=300&fit=crop',
    'labane-tnuva-250g': 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=300&h=300&fit=crop',
    'shamenet-tnuva-250ml': 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=300&fit=crop',
    'chocolate-milk-250ml': 'https://images.unsplash.com/photo-1551106652-a5bcf4b29e84?w=300&h=300&fit=crop',
    'buttermilk-1l': 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&h=300&fit=crop',
    'eggs-L-12': 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=300&h=300&fit=crop',
    'eggs-M-12': 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=300&h=300&fit=crop',
    'eggs-XL-12': 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=300&h=300&fit=crop',
    'eggs-organic-10': 'https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?w=300&h=300&fit=crop',
    'bread-white-750g': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop',
    'bread-whole-wheat-750g': 'https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=300&h=300&fit=crop',
    'bread-black-750g': 'https://images.unsplash.com/photo-1585478259715-876acc5be8eb?w=300&h=300&fit=crop',
    'sourdough-bread-500g': 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=300&h=300&fit=crop',
    'pita-6pack': 'https://images.unsplash.com/photo-1595587637401-2c0c9f7f8f13?w=300&h=300&fit=crop',
    'challah-500g': 'https://images.unsplash.com/photo-1595587637404-a748356366e4?w=300&h=300&fit=crop',
    'bagel-6pack': 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=300&h=300&fit=crop',
    'croissant-4pack': 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=300&h=300&fit=crop',
    'baguette-250g': 'https://images.unsplash.com/photo-1552661397-0d87d0c55e86?w=300&h=300&fit=crop',
    'ciabatta-300g': 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=300&h=300&fit=crop',
    'tortilla-8pack': 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=300&h=300&fit=crop',
    'tomatoes-kg': 'https://images.unsplash.com/photo-1546470427-227fc5c9bc05?w=300&h=300&fit=crop',
    'cherry-tomatoes-250g': 'https://images.unsplash.com/photo-1592924357224-cbfd33db7680?w=300&h=300&fit=crop',
    'cucumbers-kg': 'https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=300&h=300&fit=crop',
    'mini-cucumbers-500g': 'https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=300&h=300&fit=crop',
    'peppers-red-kg': 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=300&h=300&fit=crop',
    'peppers-green-kg': 'https://images.unsplash.com/photo-1585326162952-c9731c3c1c85?w=300&h=300&fit=crop',
    'peppers-yellow-kg': 'https://images.unsplash.com/photo-1590621419693-8d0c05b37530?w=300&h=300&fit=crop',
    'onions-kg': 'https://images.unsplash.com/photo-1618512496640-28c4c8e3f3a4?w=300&h=300&fit=crop',
    'red-onions-kg': 'https://images.unsplash.com/photo-1508313880080-c4bef43d8b66?w=300&h=300&fit=crop',
    'shallots-kg': 'https://images.unsplash.com/photo-1618512496640-28c4c8e3f3a4?w=300&h=300&fit=crop',
    'garlic-kg': 'https://images.unsplash.com/photo-1566843436223-c1d8145e3a3d?w=300&h=300&fit=crop',
    'potatoes-kg': 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300&h=300&fit=crop',
    'sweet-potatoes-kg': 'https://images.unsplash.com/photo-1536304929831-8ca256c59806?w=300&h=300&fit=crop',
    'carrots-kg': 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=300&h=300&fit=crop',
    'baby-carrots-500g': 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=300&h=300&fit=crop',
    'lettuce-unit': 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=300&h=300&fit=crop',
    'iceberg-lettuce-unit': 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=300&h=300&fit=crop',
    'romaine-lettuce-unit': 'https://images.unsplash.com/photo-1552552520-a87f7e35aae0?w=300&h=300&fit=crop',
    'cabbage-kg': 'https://images.unsplash.com/photo-1594492226310-d15d6de4eb57?w=300&h=300&fit=crop',
    'red-cabbage-kg': 'https://images.unsplash.com/photo-1590333748338-d629e4564ad9?w=300&h=300&fit=crop',
    'chinese-cabbage-kg': 'https://images.unsplash.com/photo-1582169296194-e4d644c48063?w=300&h=300&fit=crop',
    'broccoli-kg': 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=300&h=300&fit=crop',
    'cauliflower-kg': 'https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=300&h=300&fit=crop',
    'zucchini-kg': 'https://images.unsplash.com/photo-1576771164394-8c0c4a2d1f1b?w=300&h=300&fit=crop',
    'eggplant-kg': 'https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=300&h=300&fit=crop',
    'avocado-unit': 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=300&h=300&fit=crop',
    'avocado-hass-unit': 'https://images.unsplash.com/photo-1601039641847-7857b994d704?w=300&h=300&fit=crop',
    'corn-unit': 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=300&h=300&fit=crop',
    'mushrooms-250g': 'https://images.unsplash.com/photo-1477506350614-fcdc29a3b157?w=300&h=300&fit=crop',
}

# הוספת תמונות למוצרים
import re

# מצא את כל המוצרים והוסף להם תמונה
lines = content.split('\n')
new_lines = []
for line in lines:
    new_lines.append(line)
    # אם זו שורה של מוצר, נוסיף תמונה
    match = re.search(r"id: '([^']+)'", line)
    if match and 'category:' in line:
        product_id = match.group(1)
        if product_id in product_images:
            # הוסף את התמונה אחרי שנמצא את ה-unit
            if ', unit:' in line and ' },' in line:
                # החלף את הסגירה } בהוספת image
                line_with_image = line.replace(' },', f", image: '{product_images[product_id]}' }},")
                new_lines[-1] = line_with_image

# כתיבה לקובץ
with open('src/data/mockData.ts', 'w', encoding='utf-8') as f:
    f.write('\n'.join(new_lines))

print("תמונות נוספו בהצלחה!")
print(f"נוספו תמונות ל-{len(product_images)} מוצרים")
