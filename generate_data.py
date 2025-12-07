# -*- coding: utf-8 -*-
import random
import json

# מיפוי תמונות למוצרים - תמונות איכותיות מ-Unsplash
PRODUCT_IMAGES = {
    # מוצרי חלב
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

    # ביצים
    'eggs-L-12': 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=300&h=300&fit=crop',
    'eggs-M-12': 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=300&h=300&fit=crop',
    'eggs-XL-12': 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=300&h=300&fit=crop',
    'eggs-organic-10': 'https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?w=300&h=300&fit=crop',

    # לחם ומאפים
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

    # ירקות
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
    'spinach-bunch': 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300&h=300&fit=crop',
    'parsley-bunch': 'https://images.unsplash.com/photo-1629097370005-80e58374cb51?w=300&h=300&fit=crop',
    'cilantro-bunch': 'https://images.unsplash.com/photo-1608517737748-32f4e4c3d0d4?w=300&h=300&fit=crop',
    'mint-bunch': 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=300&h=300&fit=crop',
    'dill-bunch': 'https://images.unsplash.com/photo-1608517737748-32f4e4c3d0d4?w=300&h=300&fit=crop',
    'basil-bunch': 'https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=300&h=300&fit=crop',
    'green-onion-bunch': 'https://images.unsplash.com/photo-1550926165-d0a9d6e87766?w=300&h=300&fit=crop',
    'celery-bunch': 'https://images.unsplash.com/photo-1594490621542-8513a31b0f9e?w=300&h=300&fit=crop',
    'leek-kg': 'https://images.unsplash.com/photo-1629099803652-af6fbb892c82?w=300&h=300&fit=crop',
    'fennel-kg': 'https://images.unsplash.com/photo-1602192878762-ce27f206a1a7?w=300&h=300&fit=crop',
    'beets-kg': 'https://images.unsplash.com/photo-1588159343745-445ae0b239eb?w=300&h=300&fit=crop',
    'radish-bunch': 'https://images.unsplash.com/photo-1607353969179-2d1eb5f9c9e0?w=300&h=300&fit=crop',
    'turnip-kg': 'https://images.unsplash.com/photo-1598511726623-d2e9996892f0?w=300&h=300&fit=crop',
    'kohlrabi-kg': 'https://images.unsplash.com/photo-1629078194754-5551c6c4bcdb?w=300&h=300&fit=crop',
    'arugula-100g': 'https://images.unsplash.com/photo-1616086114300-9e1f5c0e2e51?w=300&h=300&fit=crop',
    'kale-bunch': 'https://images.unsplash.com/photo-1541796927180-65345bb0c14e?w=300&h=300&fit=crop',
    'chard-bunch': 'https://images.unsplash.com/photo-1600629849606-dc2e7a5cf46e?w=300&h=300&fit=crop',

    # פירות
    'apples-green-kg': 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&h=300&fit=crop',
    'apples-red-kg': 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=300&h=300&fit=crop',
    'apples-golden-kg': 'https://images.unsplash.com/photo-1568966318326-0a6d54e48a26?w=300&h=300&fit=crop',
    'pears-kg': 'https://images.unsplash.com/photo-1568631698-7e905511248e?w=300&h=300&fit=crop',
    'bananas-kg': 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=300&h=300&fit=crop',
    'oranges-kg': 'https://images.unsplash.com/photo-1547514701-42782101795e?w=300&h=300&fit=crop',
    'mandarins-kg': 'https://images.unsplash.com/photo-1608684046764-e74491c0e4b0?w=300&h=300&fit=crop',
    'grapefruits-kg': 'https://images.unsplash.com/photo-1570270199056-26fd033113ca?w=300&h=300&fit=crop',
    'lemons-kg': 'https://images.unsplash.com/photo-1565699239349-e326a3210df3?w=300&h=300&fit=crop',
    'pomelo-kg': 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=300&h=300&fit=crop',
    'grapes-green-kg': 'https://images.unsplash.com/photo-1601275618261-2675a4c56c07?w=300&h=300&fit=crop',
    'grapes-red-kg': 'https://images.unsplash.com/photo-1596363505729-4190a9506133?w=300&h=300&fit=crop',
    'grapes-black-kg': 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=300&h=300&fit=crop',
    'strawberries-250g': 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=300&h=300&fit=crop',
    'blueberries-125g': 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=300&h=300&fit=crop',
    'raspberries-125g': 'https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?w=300&h=300&fit=crop',
    'blackberries-125g': 'https://images.unsplash.com/photo-1588164835111-1b0dfc9e4ce1?w=300&h=300&fit=crop',
    'pomegranate-unit': 'https://images.unsplash.com/photo-1613054419088-c2dc7e65ee9d?w=300&h=300&fit=crop',
    'kiwi-unit': 'https://images.unsplash.com/photo-1585059895524-72359e06133a?w=300&h=300&fit=crop',
    'mango-unit': 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=300&h=300&fit=crop',
    'papaya-kg': 'https://images.unsplash.com/photo-1517282009859-f000ec3b2ca9?w=300&h=300&fit=crop',
    'watermelon-kg': 'https://images.unsplash.com/photo-1587398838321-b83e8888293e?w=300&h=300&fit=crop',
    'melon-kg': 'https://images.unsplash.com/photo-1571575173700-afb9492e6a50?w=300&h=300&fit=crop',
    'pineapple-unit': 'https://images.unsplash.com/photo-1550828483-8faa2c49c14e?w=300&h=300&fit=crop',
    'peaches-kg': 'https://images.unsplash.com/photo-1629828874514-b8e6c8f10e97?w=300&h=300&fit=crop',
    'nectarines-kg': 'https://images.unsplash.com/photo-1570367681867-e9327f9617fa?w=300&h=300&fit=crop',
    'plums-kg': 'https://images.unsplash.com/photo-1595330514262-72d6155fe7a4?w=300&h=300&fit=crop',
    'apricots-kg': 'https://images.unsplash.com/photo-1624542383066-3ed2a69b4c40?w=300&h=300&fit=crop',
    'cherries-kg': 'https://images.unsplash.com/photo-1594741818129-c6bd86c872dc?w=300&h=300&fit=crop',
    'figs-kg': 'https://images.unsplash.com/photo-1579034577619-96cc00f648fd?w=300&h=300&fit=crop',
    'dates-kg': 'https://images.unsplash.com/photo-1633115494313-f94a5edc7d00?w=300&h=300&fit=crop',
    'persimmons-kg': 'https://images.unsplash.com/photo-1572635148818-ef6fd45eb394?w=300&h=300&fit=crop',

    # בשר ודגים
    'chicken-breast-kg': 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=300&h=300&fit=crop',
    'chicken-thigh-kg': 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=300&h=300&fit=crop',
    'chicken-drumstick-kg': 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=300&h=300&fit=crop',
    'chicken-wings-kg': 'https://images.unsplash.com/photo-1619365955799-85e27306d5f4?w=300&h=300&fit=crop',
    'ground-chicken-kg': 'https://images.unsplash.com/photo-1636965633727-6b06f85e8056?w=300&h=300&fit=crop',
    'turkey-breast-kg': 'https://images.unsplash.com/photo-1529006557710-f6a0709d5bc4?w=300&h=300&fit=crop',
    'ground-turkey-kg': 'https://images.unsplash.com/photo-1611171711912-76d4b34e5a73?w=300&h=300&fit=crop',
    'beef-sirloin-kg': 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300&h=300&fit=crop',
    'beef-ribeye-kg': 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=300&h=300&fit=crop',
    'ground-beef-kg': 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300&h=300&fit=crop',
    'lamb-chops-kg': 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300&h=300&fit=crop',
    'veal-schnitzel-kg': 'https://images.unsplash.com/photo-1568474034093-b84bcaff2d6f?w=300&h=300&fit=crop',
    'salmon-fillet-kg': 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=300&h=300&fit=crop',
    'sea-bass-kg': 'https://images.unsplash.com/photo-1615331994419-68e6aaa4f59e?w=300&h=300&fit=crop',
    'tuna-steak-kg': 'https://images.unsplash.com/photo-1560638892-e8f40d82ac24?w=300&h=300&fit=crop',
    'tilapia-fillet-kg': 'https://images.unsplash.com/photo-1555945288-f8fbf6a9d3ab?w=300&h=300&fit=crop',
    'trout-kg': 'https://images.unsplash.com/photo-1615331997480-71f4c59098f7?w=300&h=300&fit=crop',
    'shrimp-kg': 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=300&h=300&fit=crop',

    # קפואים
    'frozen-peas-500g': 'https://images.unsplash.com/photo-1580958957062-b7d51c8fb126?w=300&h=300&fit=crop',
    'frozen-green-beans-500g': 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=300&h=300&fit=crop',
    'frozen-broccoli-500g': 'https://images.unsplash.com/photo-1628773822503-930a7eaecf80?w=300&h=300&fit=crop',
    'frozen-cauliflower-500g': 'https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=300&h=300&fit=crop',
    'frozen-corn-500g': 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=300&h=300&fit=crop',
    'frozen-mixed-vegetables-500g': 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=300&h=300&fit=crop',
    'french-fries-1kg': 'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=300&h=300&fit=crop',
    'ice-cream-vanilla-1l': 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300&h=300&fit=crop',
    'ice-cream-chocolate-1l': 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?w=300&h=300&fit=crop',
    'popsicles-8pack': 'https://images.unsplash.com/photo-1488900128323-21503983a07f?w=300&h=300&fit=crop',

    # מוצרי יסוד
    'rice-white-1kg': 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop',
    'rice-basmati-1kg': 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=300&h=300&fit=crop',
    'rice-jasmine-1kg': 'https://images.unsplash.com/photo-1574320540848-c7adbf223f8e?w=300&h=300&fit=crop',
    'pasta-spaghetti-500g': 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=300&h=300&fit=crop',
    'pasta-penne-500g': 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=300&h=300&fit=crop',
    'pasta-fusilli-500g': 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=300&h=300&fit=crop',
    'couscous-1kg': 'https://images.unsplash.com/photo-1641379965694-f064a1d87bf8?w=300&h=300&fit=crop',
    'bulgur-1kg': 'https://images.unsplash.com/photo-1639744066764-12f0c2b4e2c6?w=300&h=300&fit=crop',
    'quinoa-500g': 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop',
    'oats-500g': 'https://images.unsplash.com/photo-1589475281879-7862e6df0a5d?w=300&h=300&fit=crop',
    'flour-white-1kg': 'https://images.unsplash.com/photo-1608077180663-c2ad59e7b7b8?w=300&h=300&fit=crop',
    'flour-whole-wheat-1kg': 'https://images.unsplash.com/photo-1608077180663-c2ad59e7b7b8?w=300&h=300&fit=crop',
    'sugar-white-1kg': 'https://images.unsplash.com/photo-1514594604390-f14f5c6c66e3?w=300&h=300&fit=crop',
    'sugar-brown-1kg': 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=300&h=300&fit=crop',
    'salt-1kg': 'https://images.unsplash.com/photo-1607682176269-0ef8f8ab6edd?w=300&h=300&fit=crop',
    'olive-oil-1l': 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300&h=300&fit=crop',
    'canola-oil-1l': 'https://images.unsplash.com/photo-1606657923834-589a96cc5cd7?w=300&h=300&fit=crop',
    'sunflower-oil-1l': 'https://images.unsplash.com/photo-1545939242-ebb8fe5a5ecb?w=300&h=300&fit=crop',

    # שימורים ורטבים
    'tomato-paste-200g': 'https://images.unsplash.com/photo-1587286240924-81b7fa5a70dd?w=300&h=300&fit=crop',
    'tomato-sauce-500g': 'https://images.unsplash.com/photo-1565035010268-a3816f98589a?w=300&h=300&fit=crop',
    'tomato-puree-500g': 'https://images.unsplash.com/photo-1587286240924-81b7fa5a70dd?w=300&h=300&fit=crop',
    'canned-tomatoes-400g': 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop',
    'canned-corn-400g': 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=300&h=300&fit=crop',
    'canned-tuna-160g': 'https://images.unsplash.com/photo-1581447109200-bf2769116351?w=300&h=300&fit=crop',
    'canned-chickpeas-400g': 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop',
    'tahini-500g': 'https://images.unsplash.com/photo-1606657923834-589a96cc5cd7?w=300&h=300&fit=crop',
    'hummus-400g': 'https://images.unsplash.com/photo-1590679111184-35798fa1b611?w=300&h=300&fit=crop',
    'mayonnaise-500g': 'https://images.unsplash.com/photo-1566843436223-c1d8145e3a3d?w=300&h=300&fit=crop',
    'ketchup-500g': 'https://images.unsplash.com/photo-1594979145800-f00703f63a05?w=300&h=300&fit=crop',
    'mustard-250g': 'https://images.unsplash.com/photo-1585155223218-385d28ff32e4?w=300&h=300&fit=crop',
    'soy-sauce-500ml': 'https://images.unsplash.com/photo-1605113635360-71d23cc3c5f8?w=300&h=300&fit=crop',
    'vinegar-500ml': 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=300&h=300&fit=crop',
    'honey-500g': 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=300&h=300&fit=crop',
    'jam-strawberry-400g': 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=300&h=300&fit=crop',
    'peanut-butter-500g': 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=300&h=300&fit=crop',
    'nutella-400g': 'https://images.unsplash.com/photo-1606312619070-d48b4cca5f14?w=300&h=300&fit=crop',

    # חטיפים וממתקים
    'chocolate-bar-100g': 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=300&h=300&fit=crop',
    'chips-200g': 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=300&h=300&fit=crop',
    'pretzels-200g': 'https://images.unsplash.com/photo-1515690179152-e60bb8666bde?w=300&h=300&fit=crop',
    'nuts-almonds-200g': 'https://images.unsplash.com/photo-1508747703725-719777637510?w=300&h=300&fit=crop',
    'nuts-cashews-200g': 'https://images.unsplash.com/photo-1585486555519-44fcc62c6e8e?w=300&h=300&fit=crop',
    'nuts-walnuts-200g': 'https://images.unsplash.com/photo-1599122522833-be35968dbd07?w=300&h=300&fit=crop',
    'raisins-200g': 'https://images.unsplash.com/photo-1601275618261-2675a4c56c07?w=300&h=300&fit=crop',

    # משקאות
    'water-1.5l': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=300&fit=crop',
    'sparkling-water-1.5l': 'https://images.unsplash.com/photo-1563724462-39b3ade2f1c0?w=300&h=300&fit=crop',
    'cola-1.5l': 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=300&h=300&fit=crop',
    'orange-juice-1l': 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop',
    'apple-juice-1l': 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&h=300&fit=crop',
    'grape-juice-1l': 'https://images.unsplash.com/photo-1596363505729-4190a9506133?w=300&h=300&fit=crop',
    'lemonade-1l': 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=300&h=300&fit=crop',
    'iced-tea-1.5l': 'https://images.unsplash.com/photo-1544145945-b8ad8bfd98c5?w=300&h=300&fit=crop',
    'energy-drink-250ml': 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=300&h=300&fit=crop',
    'coffee-beans-500g': 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=300&h=300&fit=crop',
    'tea-bags-25pack': 'https://images.unsplash.com/photo-1597318410669-ab968c8b5112?w=300&h=300&fit=crop',
}

# רשתות השיווק בישראל
CHAINS = [
    'שופרסל', 'רמי לוי', 'יוחננוף', 'ויקטורי', 'אושר עד',
    'מגה', 'חצי חינם', 'ביתן', 'סטופ מרקט', 'קינג סטור',
    'מחסני השוק', 'זול ובגדול', 'מחסני להב', 'טיב טעם', 'פרש מרקט',
    'ש.ד קינג סטור', 'מחסני יש', 'יינות בירה'
]

# ערים לפי אזורים (חלוקה גיאוגרפית נכונה)
CITIES = {
    'צפון': [
        # גליל עליון
        'קרית שמונה', 'מעלות-תרשיחא', 'נהריה', 'עכו', 'צפת', 'ראש פינה',
        'שלומי', 'חצור הגלילית', 'מרום הגליל', 'מטולה',
        'מגדל', 'יסוד המעלה', 'רמות נפתלי', 'כפר גלעדי', 'שעב',
        # גליל תחתון ועמק יזרעאל
        'טבריה', 'כרמיאל', 'מגדל העמק', 'עפולה', 'נצרת עילית',
        'מזרעה', 'כפר תבור', 'יקנעם', 'כפר כנא', 'שפרעם', 'סכנין',
        'עין מאהל', 'דבוריה', 'נעורה', 'משהד', 'כפר מנדא', 'ריינה', 'אכסאל', 'בית שאן', 'גן נר',
        # חיפה והסביבה
        'חיפה', 'קרית ים', 'קרית ביאליק', 'קרית אתא', 'קרית מוצקין',
        'נשר', 'טירת כרמל', 'עספיא', 'דליה אל-כרמל', 'רכסים',
        'קרית שמואל', 'קרית חיים', 'נווה שאנן',
        # חוף כרמל
        'עתלית', 'קיסריה', 'זכרון יעקב', 'בנימינה-גבעת עדה', 'פרדס חנה-כרכור',
        'אור עקיבא', 'חדרה', 'בית חנניה', 'מעגן מיכאל', 'דור', 'גבע כרמל',
        # גולן
        'קצרין', 'מעלה גמלא', 'אלוני הבשן', 'נאות גולן', 'קשת'
    ],
    'שרון': [
        'נתניה', 'הרצליה', 'כפר סבא', 'רעננה', 'הוד השרון', 'רמת השרון',
        'כפר יונה', 'אבן יהודה', 'קדימה-צורן', 'נורדיה', 'ניצני עוז'
    ],
    'מרכז': [
        # גוש דן
        'תל אביב-יפו', 'רמת גן', 'גבעתיים', 'בני ברק', 'בת ים', 'חולון',
        'אור יהודה', 'גני תקווה', 'קרית אונו', 'אזור', 'יהוד-מונוסון',
        # פתח תקווה והסביבה
        'פתח תקווה',
        # ראשון לציון והסביבה
        'ראשון לציון', 'נס ציונה',
        # רחובות והסביבה
        'רחובות', 'באר יעקב', 'מזכרת בתיה', 'גדרה', 'גן שמואל',
        # לוד ורמלה
        'לוד', 'רמלה', 'מודיעין-מכבים-רעות', 'שוהם', 'קרית עקרון',
        # ירושלים והסביבה
        'ירושלים', 'בית שמש', 'מבשרת ציון', 'מעלה אדומים', 'גבעת זאב',
        'אפרת', 'ביתר עילית', 'מודיעין עילית', 'אבו גוש',
        'מוצא עילית', 'הר אדר'
    ],
    'דרום': [
        # שפלת יהודה
        'יבנה', 'גדרה',
        # אשדוד-אשקלון
        'אשדוד', 'אשקלון', 'קרית גת', 'קרית מלאכי', 'שדרות',
        # באר שבע והנגב
        'באר שבע', 'נתיבות', 'אופקים', 'ערד', 'דימונה', 'מיתר',
        'רהט', 'כסייפה', 'לקיה', 'חורה', 'ירוחם', 'מצפה רמון', 'אילת'
    ]
}

# מחירי בסיס למוצרים (מחירים ריאליסטיים בשקלים)
BASE_PRICES = {
    # מוצרי חלב
    'milk-tnuva-3-1l': 7.20, 'milk-tnuva-1-1l': 7.20, 'milk-tara-3-1l': 7.00, 'milk-yotvata-3-1l': 8.50, 'milk-strauss-3-1l': 7.30,
    'cottage-tnuva-5-250g': 6.90, 'cottage-tnuva-9-250g': 7.50, 'cottage-tara-5-250g': 6.70, 'cottage-strauss-5-250g': 6.80,
    'yogurt-yoplait-150g': 3.90, 'yogurt-danone-150g': 4.10, 'yogurt-bio-150g': 4.50, 'yogurt-activia-150g': 4.80,
    'greek-yogurt-200g': 6.90, 'skyr-150g': 7.50, 'kefir-500ml': 9.90,
    'yellow-cheese-tnuva-200g': 15.90, 'yellow-cheese-emek-200g': 14.50, 'white-cheese-gad-250g': 18.90, 'white-cheese-tal-250g': 16.50,
    'mozzarella-250g': 19.90, 'feta-cheese-250g': 17.90, 'cream-cheese-150g': 12.90, 'parmesan-100g': 24.90,
    'butter-tnuva-200g': 12.90, 'sour-cream-tnuva-250ml': 8.90, 'labane-tnuva-250g': 9.50, 'shamenet-tnuva-250ml': 7.90,
    'chocolate-milk-250ml': 4.90, 'buttermilk-1l': 8.90,

    # ביצים
    'eggs-L-12': 14.90, 'eggs-M-12': 13.90, 'eggs-XL-12': 16.90, 'eggs-organic-10': 24.90,

    # לחם ומאפים
    'bread-white-750g': 6.50, 'bread-whole-wheat-750g': 7.90, 'bread-black-750g': 8.50, 'sourdough-bread-500g': 15.90,
    'pita-6pack': 8.90, 'challah-500g': 9.90, 'bagel-6pack': 12.90, 'croissant-4pack': 16.90,
    'baguette-250g': 8.90, 'ciabatta-300g': 12.90, 'tortilla-8pack': 11.90,

    # ירקות טריים
    'tomatoes-kg': 8.90, 'cherry-tomatoes-250g': 9.90, 'cucumbers-kg': 7.90, 'mini-cucumbers-500g': 11.90,
    'peppers-red-kg': 14.90, 'peppers-green-kg': 11.90, 'peppers-yellow-kg': 15.90,
    'onions-kg': 4.90, 'red-onions-kg': 7.90, 'shallots-kg': 19.90, 'garlic-kg': 24.90,
    'potatoes-kg': 5.90, 'sweet-potatoes-kg': 8.90, 'carrots-kg': 6.90, 'baby-carrots-500g': 12.90,
    'lettuce-unit': 7.90, 'iceberg-lettuce-unit': 9.90, 'romaine-lettuce-unit': 11.90,
    'cabbage-kg': 5.90, 'red-cabbage-kg': 7.90, 'chinese-cabbage-kg': 8.90,
    'broccoli-kg': 12.90, 'cauliflower-kg': 11.90, 'zucchini-kg': 9.90, 'eggplant-kg': 11.90,
    'avocado-unit': 7.90, 'avocado-hass-unit': 9.90, 'corn-unit': 4.90, 'mushrooms-250g': 12.90,
    'spinach-bunch': 6.90, 'parsley-bunch': 3.90, 'cilantro-bunch': 3.90, 'mint-bunch': 4.90,
    'dill-bunch': 3.90, 'basil-bunch': 5.90, 'green-onion-bunch': 4.90,
    'celery-bunch': 8.90, 'leek-kg': 14.90, 'fennel-kg': 16.90, 'beets-kg': 7.90,
    'radish-bunch': 5.90, 'turnip-kg': 8.90, 'kohlrabi-kg': 9.90,
    'arugula-100g': 9.90, 'kale-bunch': 11.90, 'chard-bunch': 8.90,

    # פירות טריים
    'apples-kg': 11.90, 'green-apples-kg': 12.90, 'red-apples-kg': 13.90,
    'bananas-kg': 7.90, 'oranges-kg': 8.90, 'grapes-kg': 14.90, 'red-grapes-kg': 16.90,
    'pears-kg': 13.90, 'peaches-kg': 15.90, 'nectarines-kg': 14.90, 'plums-kg': 16.90,
    'kiwi-kg': 17.90, 'mango-unit': 12.90, 'papaya-kg': 14.90, 'pineapple-unit': 19.90,
    'watermelon-kg': 4.90, 'melon-kg': 8.90, 'strawberries-250g': 14.90, 'blueberries-125g': 16.90,
    'raspberries-125g': 19.90, 'blackberries-125g': 18.90, 'pomegranate-unit': 11.90,
    'persimmon-kg': 14.90, 'figs-250g': 18.90, 'dates-500g': 24.90,
    'lemon-kg': 9.90, 'lime-kg': 19.90, 'grapefruit-kg': 8.90, 'clementines-kg': 12.90,

    # בשר ועוף
    'chicken-breast-kg': 39.90, 'chicken-thigh-kg': 29.90, 'ground-beef-kg': 49.90,
    'beef-steak-kg': 89.90, 'lamb-kg': 79.90, 'turkey-breast-kg': 45.90,

    # דגים
    'salmon-fillet-kg': 89.90, 'tuna-can-160g': 8.90, 'sardines-can-125g': 6.90,

    # אורז ופסטה
    'rice-white-1kg': 9.90, 'rice-jasmine-1kg': 14.90, 'rice-basmati-1kg': 15.90,
    'pasta-spaghetti-500g': 5.90, 'pasta-penne-500g': 5.90, 'pasta-shells-500g': 6.50,
    'couscous-500g': 7.90, 'bulgur-500g': 8.90, 'quinoa-500g': 19.90,

    # קמח ואפייה
    'flour-white-1kg': 5.90, 'flour-whole-wheat-1kg': 7.90, 'flour-self-rising-1kg': 6.50,
    'sugar-white-1kg': 5.50, 'sugar-brown-500g': 8.90, 'baking-powder-100g': 4.90,
    'yeast-dry-100g': 6.90, 'vanilla-extract-50ml': 12.90, 'cocoa-powder-200g': 14.90,

    # שמנים ורטבים
    'olive-oil-1l': 29.90, 'canola-oil-1l': 14.90, 'sunflower-oil-1l': 12.90,
    'ketchup-500g': 8.90, 'mayonnaise-500g': 11.90, 'mustard-250g': 7.90,
    'soy-sauce-250ml': 9.90, 'tehina-500g': 12.90, 'hummus-400g': 8.90, 'tahini-raw-500g': 14.90,

    # משקאות
    'coca-cola-2l': 8.90, 'sprite-2l': 8.90, 'fanta-2l': 8.90, 'mineral-water-1.5l': 3.90,
    'sparkling-water-1.5l': 4.90, 'orange-juice-1l': 9.90, 'apple-juice-1l': 9.90,

    # קפה ותה
    'coffee-elite-200g': 24.90, 'coffee-nescafe-200g': 29.90, 'turkish-coffee-200g': 19.90,
    'tea-wissotzky-100bags': 18.90, 'tea-green-25bags': 14.90, 'tea-herbal-20bags': 12.90,
    'instant-coffee-3in1-18sticks': 16.90,

    # חטיפים
    'bamba-80g': 4.90, 'bisli-70g': 4.50, 'doritos-170g': 9.90, 'chips-tapuchips-150g': 8.90,
    'crackers-200g': 7.90, 'pretzels-250g': 8.90, 'popcorn-100g': 5.90, 'nuts-mix-200g': 19.90,

    # מתוקים
    'chocolate-milka-100g': 8.90, 'chocolate-pesek-zman-45g': 4.50, 'chocolate-kinder-4pack': 12.90,
    'wafers-loacker-125g': 9.90, 'cookies-petit-beurre-250g': 7.90, 'cookies-oreo-176g': 11.90,
    'candy-mentos-38g': 3.90, 'candy-haribo-200g': 12.90, 'gum-orbit-14g': 4.50,
    'ice-cream-magnum-110ml': 7.90, 'ice-cream-artik-60ml': 4.90, 'popsicle-kartiv-6pack': 14.90,
    'cake-mix-marble-500g': 12.90, 'pudding-chocolate-4pack': 9.90,

    # תבלינים
    'salt-1kg': 3.90, 'pepper-black-100g': 8.90, 'paprika-100g': 9.90,
    'cumin-100g': 11.90, 'cinnamon-100g': 12.90, 'garlic-powder-100g': 9.90,
    'onion-powder-100g': 9.90, 'hawaij-100g': 14.90,

    # מוצרי ניקיון
    'dish-soap-1l': 12.90, 'laundry-detergent-3l': 34.90, 'fabric-softener-2l': 19.90,
    'bleach-2l': 9.90, 'floor-cleaner-1l': 14.90, 'glass-cleaner-750ml': 11.90,
    'toilet-cleaner-750ml': 12.90, 'sponges-10pack': 14.90, 'trash-bags-50pack': 19.90,

    # מוצרי נייר
    'toilet-paper-24rolls': 39.90, 'paper-towels-8rolls': 29.90, 'tissues-10boxes': 24.90,
    'napkins-100pack': 7.90, 'aluminum-foil-30m': 14.90,

    # מוצרי תינוקות
    'diapers-size3-40pack': 89.90, 'baby-wipes-80pack': 12.90, 'baby-formula-700g': 49.90,
    'baby-food-chicken-190g': 8.90,

    # מוצרי טיפוח
    'shampoo-400ml': 19.90, 'conditioner-400ml': 19.90, 'body-wash-1l': 24.90,
    'toothpaste-125ml': 12.90, 'toothbrush-2pack': 14.90, 'deodorant-150ml': 16.90,
    'soap-bar-125g': 5.90
}

# מקדמים של רשתות (כמה יקרות או זולות הן)
CHAIN_MULTIPLIERS = {
    'אושר עד': (0.88, 0.94),
    'זול ובגדול': (0.88, 0.94),
    'מחסני להב': (0.90, 0.96),
    'רמי לוי': (0.90, 0.96),
    'מחסני יש': (0.91, 0.97),
    'מחסני השוק': (0.92, 0.98),
    'ויקטורי': (0.95, 1.02),
    'יוחננוף': (0.96, 1.03),
    'חצי חינם': (0.97, 1.03),
    'סטופ מרקט': (0.98, 1.04),
    'שופרסל': (1.00, 1.08),
    'מגה': (1.02, 1.08),
    'ביתן': (1.03, 1.09),
    'קינג סטור': (1.03, 1.09),
    'ש.ד קינג סטור': (1.03, 1.09),
    'פרש מרקט': (1.05, 1.12),
    'טיב טעם': (1.10, 1.20),
    'יינות בירה': (1.05, 1.15)
}

def generate_stores():
    """יוצר רשימת חנויות - גרסה מצומצמת"""
    stores = []
    store_id = 1
    max_stores = 100  # הגבלה ל-100 חנויות

    for region, cities in CITIES.items():
        # רק ערים גדולות מכל אזור
        selected_cities = cities[:max(2, len(cities) // 10)]
        for city in selected_cities:
            if len(stores) >= max_stores:
                break
            # כל עיר תקבל 2-3 רשתות
            num_chains = random.randint(2, 3)
            selected_chains = random.sample(CHAINS, min(num_chains, len(CHAINS)))

            for chain in selected_chains:
                if len(stores) >= max_stores:
                    break
                store_name = f'{chain} {city}'
                stores.append({
                    'id': f'store-{store_id}',
                    'name': store_name,
                    'chain': chain,
                    'address': f'רחוב ראשי {random.randint(1, 200)}, {city}',
                    'region': region,
                    'city': city
                })
                store_id += 1

    return stores

def generate_prices(stores):
    """יוצר מחירים לכל מוצר בכל חנות"""
    prices = []

    for store in stores:
        chain = store['chain']
        multiplier_range = CHAIN_MULTIPLIERS.get(chain, (1.0, 1.05))

        for product_id, base_price in BASE_PRICES.items():
            # מחיר אקראי בטווח של הרשת
            multiplier = random.uniform(multiplier_range[0], multiplier_range[1])
            price = round(base_price * multiplier, 2)

            prices.append({
                'productId': product_id,
                'storeId': store['id'],
                'price': price
            })

    return prices

def escape_string(s):
    """מנקה מחרוזת לשימוש ב-TypeScript"""
    return s.replace("'", "\\'").replace('"', '\\"')

def write_typescript_file(stores, prices):
    """כותב את הנתונים לקובץ TypeScript"""

    output = "import { Product, Store, PriceEntry } from '../types';\n\n"
    output += "// רשתות השיווק בישראל - נוצר אוטומטית\n"
    output += "export const stores: Store[] = [\n"

    for store in stores:
        output += "  {\n"
        output += f"    id: '{escape_string(store['id'])}',\n"
        output += f"    name: '{escape_string(store['name'])}',\n"
        output += f"    chain: '{escape_string(store['chain'])}',\n"
        output += f"    address: '{escape_string(store['address'])}',\n"
        output += f"    region: '{escape_string(store['region'])}',\n"
        output += f"    city: '{escape_string(store['city'])}'\n"
        output += "  },\n"

    output += "];\n\n"

    # המוצרים - נשאיר את הרשימה הקיימת
    output += """// מוצרים
export const products: Product[] = [
  // מוצרי חלב
  { id: 'milk-tnuva-3-1l', name: 'חלב תנובה 3%', category: 'מוצרי חלב', quantity: 1, unit: 'ליטר' },
  { id: 'milk-tnuva-1-1l', name: 'חלב תנובה 1%', category: 'מוצרי חלב', quantity: 1, unit: 'ליטר' },
  { id: 'milk-tara-3-1l', name: 'חלב טרה 3%', category: 'מוצרי חלב', quantity: 1, unit: 'ליטר' },
  { id: 'milk-yotvata-3-1l', name: 'חלב יטבתה 3%', category: 'מוצרי חלב', quantity: 1, unit: 'ליטר' },
  { id: 'milk-strauss-3-1l', name: 'חלב שטראוס 3%', category: 'מוצרי חלב', quantity: 1, unit: 'ליטר' },
  { id: 'cottage-tnuva-5-250g', name: 'קוטג תנובה 5%', category: 'מוצרי חלב', quantity: 250, unit: 'גרם' },
  { id: 'cottage-tnuva-9-250g', name: 'קוטג תנובה 9%', category: 'מוצרי חלב', quantity: 250, unit: 'גרם' },
  { id: 'cottage-tara-5-250g', name: 'קוטג טרה 5%', category: 'מוצרי חלב', quantity: 250, unit: 'גרם' },
  { id: 'cottage-strauss-5-250g', name: 'קוטג שטראוס 5%', category: 'מוצרי חלב', quantity: 250, unit: 'גרם' },
  { id: 'yogurt-yoplait-150g', name: 'יוגורט יופלה', category: 'מוצרי חלב', quantity: 150, unit: 'גרם' },
  { id: 'yogurt-danone-150g', name: 'יוגורט דנונה', category: 'מוצרי חלב', quantity: 150, unit: 'גרם' },
  { id: 'yogurt-bio-150g', name: 'יוגורט Bio', category: 'מוצרי חלב', quantity: 150, unit: 'גרם' },
  { id: 'yogurt-activia-150g', name: 'יוגורט אקטיביה', category: 'מוצרי חלב', quantity: 150, unit: 'גרם' },
  { id: 'greek-yogurt-200g', name: 'יוגורט יווני', category: 'מוצרי חלב', quantity: 200, unit: 'גרם' },
  { id: 'skyr-150g', name: 'סקיר', category: 'מוצרי חלב', quantity: 150, unit: 'גרם' },
  { id: 'kefir-500ml', name: 'כפיר', category: 'מוצרי חלב', quantity: 500, unit: 'מ"ל' },
  { id: 'yellow-cheese-tnuva-200g', name: 'גבינה צהובה תנובה', category: 'מוצרי חלב', quantity: 200, unit: 'גרם' },
  { id: 'yellow-cheese-emek-200g', name: 'גבינה צהובה עמק', category: 'מוצרי חלב', quantity: 200, unit: 'גרם' },
  { id: 'white-cheese-gad-250g', name: 'גבינה לבנה גד', category: 'מוצרי חלב', quantity: 250, unit: 'גרם' },
  { id: 'white-cheese-tal-250g', name: 'גבינה לבנה טל', category: 'מוצרי חלב', quantity: 250, unit: 'גרם' },
  { id: 'mozzarella-250g', name: 'מוצרלה', category: 'מוצרי חלב', quantity: 250, unit: 'גרם' },
  { id: 'feta-cheese-250g', name: 'גבינת פטה', category: 'מוצרי חלב', quantity: 250, unit: 'גרם' },
  { id: 'cream-cheese-150g', name: 'גבינת שמנת', category: 'מוצרי חלב', quantity: 150, unit: 'גרם' },
  { id: 'parmesan-100g', name: 'פרמזן', category: 'מוצרי חלב', quantity: 100, unit: 'גרם' },
  { id: 'butter-tnuva-200g', name: 'חמאה תנובה', category: 'מוצרי חלב', quantity: 200, unit: 'גרם' },
  { id: 'sour-cream-tnuva-250ml', name: 'שמנת חמוצה תנובה', category: 'מוצרי חלב', quantity: 250, unit: 'מ"ל' },
  { id: 'labane-tnuva-250g', name: 'לבנה תנובה', category: 'מוצרי חלב', quantity: 250, unit: 'גרם' },
  { id: 'shamenet-tnuva-250ml', name: 'שמנת מתוקה תנובה', category: 'מוצרי חלב', quantity: 250, unit: 'מ"ל' },
  { id: 'chocolate-milk-250ml', name: 'חלב שוקולד', category: 'מוצרי חלב', quantity: 250, unit: 'מ"ל' },
  { id: 'buttermilk-1l', name: 'חמאה חמוצה', category: 'מוצרי חלב', quantity: 1, unit: 'ליטר' },

  // ביצים
  { id: 'eggs-L-12', name: 'ביצים L', category: 'ביצים', quantity: 12, unit: 'יחידות' },
  { id: 'eggs-M-12', name: 'ביצים M', category: 'ביצים', quantity: 12, unit: 'יחידות' },
  { id: 'eggs-XL-12', name: 'ביצים XL', category: 'ביצים', quantity: 12, unit: 'יחידות' },
  { id: 'eggs-organic-10', name: 'ביצים אורגניות', category: 'ביצים', quantity: 10, unit: 'יחידות' },

  // לחם ומאפים
  { id: 'bread-white-750g', name: 'לחם לבן', category: 'לחם ומאפים', quantity: 750, unit: 'גרם' },
  { id: 'bread-whole-wheat-750g', name: 'לחם מחיטה מלאה', category: 'לחם ומאפים', quantity: 750, unit: 'גרם' },
  { id: 'bread-black-750g', name: 'לחם שחור', category: 'לחם ומאפים', quantity: 750, unit: 'גרם' },
  { id: 'sourdough-bread-500g', name: 'לחם שאור', category: 'לחם ומאפים', quantity: 500, unit: 'גרם' },
  { id: 'pita-6pack', name: 'פיתות', category: 'לחם ומאפים', quantity: 6, unit: 'יחידות' },
  { id: 'challah-500g', name: 'חלה', category: 'לחם ומאפים', quantity: 500, unit: 'גרם' },
  { id: 'bagel-6pack', name: 'בייגלה', category: 'לחם ומאפים', quantity: 6, unit: 'יחידות' },
  { id: 'croissant-4pack', name: 'קרואסון', category: 'לחם ומאפים', quantity: 4, unit: 'יחידות' },
  { id: 'baguette-250g', name: 'בגט', category: 'לחם ומאפים', quantity: 250, unit: 'גרם' },
  { id: 'ciabatta-300g', name: 'ציאבטה', category: 'לחם ומאפים', quantity: 300, unit: 'גרם' },
  { id: 'tortilla-8pack', name: 'טורטייה', category: 'לחם ומאפים', quantity: 8, unit: 'יחידות' },

  // ירקות
  { id: 'tomatoes-kg', name: 'עגבניות', category: 'ירקות', quantity: 1, unit: 'ק"ג' },
  { id: 'cherry-tomatoes-250g', name: 'עגבניות שרי', category: 'ירקות', quantity: 250, unit: 'גרם' },
  { id: 'cucumbers-kg', name: 'מלפפונים', category: 'ירקות', quantity: 1, unit: 'ק"ג' },
  { id: 'mini-cucumbers-500g', name: 'מלפפונים מיני', category: 'ירקות', quantity: 500, unit: 'גרם' },
  { id: 'peppers-red-kg', name: 'פלפל אדום', category: 'ירקות', quantity: 1, unit: 'ק"ג' },
  { id: 'peppers-green-kg', name: 'פלפל ירוק', category: 'ירקות', quantity: 1, unit: 'ק"ג' },
  { id: 'peppers-yellow-kg', name: 'פלפל צהוב', category: 'ירקות', quantity: 1, unit: 'ק"ג' },
  { id: 'onions-kg', name: 'בצל', category: 'ירקות', quantity: 1, unit: 'ק"ג' },
  { id: 'red-onions-kg', name: 'בצל אדום', category: 'ירקות', quantity: 1, unit: 'ק"ג' },
  { id: 'shallots-kg', name: 'בצל שאלוט', category: 'ירקות', quantity: 1, unit: 'ק"ג' },
  { id: 'garlic-kg', name: 'שום', category: 'ירקות', quantity: 1, unit: 'ק"ג' },
  { id: 'potatoes-kg', name: 'תפוחי אדמה', category: 'ירקות', quantity: 1, unit: 'ק"ג' },
  { id: 'sweet-potatoes-kg', name: 'בטטה', category: 'ירקות', quantity: 1, unit: 'ק"ג' },
  { id: 'carrots-kg', name: 'גזר', category: 'ירקות', quantity: 1, unit: 'ק"ג' },
  { id: 'baby-carrots-500g', name: 'גזר בייבי', category: 'ירקות', quantity: 500, unit: 'גרם' },
  { id: 'lettuce-unit', name: 'חסה', category: 'ירקות', quantity: 1, unit: 'יחידה' },
  { id: 'iceberg-lettuce-unit', name: 'חסה איסברג', category: 'ירקות', quantity: 1, unit: 'יחידה' },
  { id: 'romaine-lettuce-unit', name: 'חסה רומית', category: 'ירקות', quantity: 1, unit: 'יחידה' },
  { id: 'cabbage-kg', name: 'כרוב', category: 'ירקות', quantity: 1, unit: 'ק"ג' },
  { id: 'red-cabbage-kg', name: 'כרוב אדום', category: 'ירקות', quantity: 1, unit: 'ק"ג' },
  { id: 'chinese-cabbage-kg', name: 'כרוב סיני', category: 'ירקות', quantity: 1, unit: 'ק"ג' },
  { id: 'broccoli-kg', name: 'ברוקולי', category: 'ירקות', quantity: 1, unit: 'ק"ג' },
  { id: 'cauliflower-kg', name: 'כרובית', category: 'ירקות', quantity: 1, unit: 'ק"ג' },
  { id: 'zucchini-kg', name: 'קישוא', category: 'ירקות', quantity: 1, unit: 'ק"ג' },
  { id: 'eggplant-kg', name: 'חציל', category: 'ירקות', quantity: 1, unit: 'ק"ג' },
  { id: 'avocado-unit', name: 'אבוקדו', category: 'ירקות', quantity: 1, unit: 'יחידה' },
  { id: 'avocado-hass-unit', name: 'אבוקדו האס', category: 'ירקות', quantity: 1, unit: 'יחידה' },
  { id: 'corn-unit', name: 'תירס', category: 'ירקות', quantity: 1, unit: 'יחידה' },
  { id: 'mushrooms-250g', name: 'פטריות', category: 'ירקות', quantity: 250, unit: 'גרם' },
  { id: 'spinach-bunch', name: 'תרד', category: 'ירקות', quantity: 1, unit: 'אגודה' },
  { id: 'parsley-bunch', name: 'פטרוזיליה', category: 'ירקות', quantity: 1, unit: 'אגודה' },
  { id: 'cilantro-bunch', name: 'כוסברה', category: 'ירקות', quantity: 1, unit: 'אגודה' },
  { id: 'mint-bunch', name: 'נענע', category: 'ירקות', quantity: 1, unit: 'אגודה' },
  { id: 'dill-bunch', name: 'שמיר', category: 'ירקות', quantity: 1, unit: 'אגודה' },
  { id: 'basil-bunch', name: 'בזיליקום', category: 'ירקות', quantity: 1, unit: 'אגודה' },
  { id: 'green-onion-bunch', name: 'בצל ירוק', category: 'ירקות', quantity: 1, unit: 'אגודה' },
  { id: 'celery-bunch', name: 'סלרי', category: 'ירקות', quantity: 1, unit: 'אגודה' },
  { id: 'leek-kg', name: 'כרישה', category: 'ירקות', quantity: 1, unit: 'ק"ג' },
  { id: 'fennel-kg', name: 'שומר', category: 'ירקות', quantity: 1, unit: 'ק"ג' },
  { id: 'beets-kg', name: 'סלק', category: 'ירקות', quantity: 1, unit: 'ק"ג' },
  { id: 'radish-bunch', name: 'צנון', category: 'ירקות', quantity: 1, unit: 'אגודה' },
  { id: 'turnip-kg', name: 'לפת', category: 'ירקות', quantity: 1, unit: 'ק"ג' },
  { id: 'kohlrabi-kg', name: 'כרוב קולורבי', category: 'ירקות', quantity: 1, unit: 'ק"ג' },
  { id: 'arugula-100g', name: 'רוקט', category: 'ירקות', quantity: 100, unit: 'גרם' },
  { id: 'kale-bunch', name: 'קייל', category: 'ירקות', quantity: 1, unit: 'אגודה' },
  { id: 'chard-bunch', name: 'מנגולד', category: 'ירקות', quantity: 1, unit: 'אגודה' },

  // פירות
  { id: 'apples-kg', name: 'תפוחים', category: 'פירות', quantity: 1, unit: 'ק"ג' },
  { id: 'green-apples-kg', name: 'תפוחים ירוקים', category: 'פירות', quantity: 1, unit: 'ק"ג' },
  { id: 'red-apples-kg', name: 'תפוחים אדומים', category: 'פירות', quantity: 1, unit: 'ק"ג' },
  { id: 'bananas-kg', name: 'בננות', category: 'פירות', quantity: 1, unit: 'ק"ג' },
  { id: 'oranges-kg', name: 'תפוזים', category: 'פירות', quantity: 1, unit: 'ק"ג' },
  { id: 'grapes-kg', name: 'ענבים', category: 'פירות', quantity: 1, unit: 'ק"ג' },
  { id: 'red-grapes-kg', name: 'ענבים אדומים', category: 'פירות', quantity: 1, unit: 'ק"ג' },
  { id: 'pears-kg', name: 'אגסים', category: 'פירות', quantity: 1, unit: 'ק"ג' },
  { id: 'peaches-kg', name: 'אפרסקים', category: 'פירות', quantity: 1, unit: 'ק"ג' },
  { id: 'nectarines-kg', name: 'נקטרינות', category: 'פירות', quantity: 1, unit: 'ק"ג' },
  { id: 'plums-kg', name: 'שזיפים', category: 'פירות', quantity: 1, unit: 'ק"ג' },
  { id: 'kiwi-kg', name: 'קיווי', category: 'פירות', quantity: 1, unit: 'ק"ג' },
  { id: 'mango-unit', name: 'מנגו', category: 'פירות', quantity: 1, unit: 'יחידה' },
  { id: 'papaya-kg', name: 'פפאיה', category: 'פירות', quantity: 1, unit: 'ק"ג' },
  { id: 'pineapple-unit', name: 'אננס', category: 'פירות', quantity: 1, unit: 'יחידה' },
  { id: 'watermelon-kg', name: 'אבטיח', category: 'פירות', quantity: 1, unit: 'ק"ג' },
  { id: 'melon-kg', name: 'מלון', category: 'פירות', quantity: 1, unit: 'ק"ג' },
  { id: 'strawberries-250g', name: 'תותים', category: 'פירות', quantity: 250, unit: 'גרם' },
  { id: 'blueberries-125g', name: 'אוכמניות', category: 'פירות', quantity: 125, unit: 'גרם' },
  { id: 'raspberries-125g', name: 'פטל', category: 'פירות', quantity: 125, unit: 'גרם' },
  { id: 'blackberries-125g', name: 'פטל שחור', category: 'פירות', quantity: 125, unit: 'גרם' },
  { id: 'pomegranate-unit', name: 'רימון', category: 'פירות', quantity: 1, unit: 'יחידה' },
  { id: 'persimmon-kg', name: 'אפרסמון', category: 'פירות', quantity: 1, unit: 'ק"ג' },
  { id: 'figs-250g', name: 'תאנים', category: 'פירות', quantity: 250, unit: 'גרם' },
  { id: 'dates-500g', name: 'תמרים', category: 'פירות', quantity: 500, unit: 'גרם' },
  { id: 'lemon-kg', name: 'לימון', category: 'פירות', quantity: 1, unit: 'ק"ג' },
  { id: 'lime-kg', name: 'ליים', category: 'פירות', quantity: 1, unit: 'ק"ג' },
  { id: 'grapefruit-kg', name: 'אשכולית', category: 'פירות', quantity: 1, unit: 'ק"ג' },
  { id: 'clementines-kg', name: 'קלמנטינות', category: 'פירות', quantity: 1, unit: 'ק"ג' },

  // בשר ועוף
  { id: 'chicken-breast-kg', name: 'חזה עוף', category: 'בשר ועוף', quantity: 1, unit: 'ק"ג' },
  { id: 'chicken-thigh-kg', name: 'ירך עוף', category: 'בשר ועוף', quantity: 1, unit: 'ק"ג' },
  { id: 'ground-beef-kg', name: 'בשר טחון בקר', category: 'בשר ועוף', quantity: 1, unit: 'ק"ג' },
  { id: 'beef-steak-kg', name: 'סטייק בקר', category: 'בשר ועוף', quantity: 1, unit: 'ק"ג' },
  { id: 'lamb-kg', name: 'בשר כבש', category: 'בשר ועוף', quantity: 1, unit: 'ק"ג' },
  { id: 'turkey-breast-kg', name: 'חזה הודו', category: 'בשר ועוף', quantity: 1, unit: 'ק"ג' },

  // דגים
  { id: 'salmon-fillet-kg', name: 'פילה סלמון', category: 'דגים', quantity: 1, unit: 'ק"ג' },
  { id: 'tuna-can-160g', name: 'טונה בקופסה', category: 'דגים', quantity: 160, unit: 'גרם' },
  { id: 'sardines-can-125g', name: 'סרדינים בקופסה', category: 'דגים', quantity: 125, unit: 'גרם' },

  // אורז ופסטה
  { id: 'rice-white-1kg', name: 'אורז לבן', category: 'אורז ופסטה', quantity: 1, unit: 'ק"ג' },
  { id: 'rice-jasmine-1kg', name: 'אורז יסמין', category: 'אורז ופסטה', quantity: 1, unit: 'ק"ג' },
  { id: 'rice-basmati-1kg', name: 'אורז בסמטי', category: 'אורז ופסטה', quantity: 1, unit: 'ק"ג' },
  { id: 'pasta-spaghetti-500g', name: 'ספגטי', category: 'אורז ופסטה', quantity: 500, unit: 'גרם' },
  { id: 'pasta-penne-500g', name: 'פסטה פנה', category: 'אורז ופסטה', quantity: 500, unit: 'גרם' },
  { id: 'pasta-shells-500g', name: 'פסטה קונכיות', category: 'אורז ופסטה', quantity: 500, unit: 'גרם' },
  { id: 'couscous-500g', name: 'קוסקוס', category: 'אורז ופסטה', quantity: 500, unit: 'גרם' },
  { id: 'bulgur-500g', name: 'בורגול', category: 'אורז ופסטה', quantity: 500, unit: 'גרם' },
  { id: 'quinoa-500g', name: 'קינואה', category: 'אורז ופסטה', quantity: 500, unit: 'גרם' },

  // קמח ואפייה
  { id: 'flour-white-1kg', name: 'קמח לבן', category: 'קמח ואפייה', quantity: 1, unit: 'ק"ג' },
  { id: 'flour-whole-wheat-1kg', name: 'קמח מלא', category: 'קמח ואפייה', quantity: 1, unit: 'ק"ג' },
  { id: 'flour-self-rising-1kg', name: 'קמח תופח', category: 'קמח ואפייה', quantity: 1, unit: 'ק"ג' },
  { id: 'sugar-white-1kg', name: 'סוכר לבן', category: 'קמח ואפייה', quantity: 1, unit: 'ק"ג' },
  { id: 'sugar-brown-500g', name: 'סוכר חום', category: 'קמח ואפייה', quantity: 500, unit: 'גרם' },
  { id: 'baking-powder-100g', name: 'אבקת אפייה', category: 'קמח ואפייה', quantity: 100, unit: 'גרם' },
  { id: 'yeast-dry-100g', name: 'שמרים יבשים', category: 'קמח ואפייה', quantity: 100, unit: 'גרם' },
  { id: 'vanilla-extract-50ml', name: 'תמצית וניל', category: 'קמח ואפייה', quantity: 50, unit: 'מ"ל' },
  { id: 'cocoa-powder-200g', name: 'אבקת קקאו', category: 'קמח ואפייה', quantity: 200, unit: 'גרם' },

  // שמנים ורטבים
  { id: 'olive-oil-1l', name: 'שמן זית', category: 'שמנים ורטבים', quantity: 1, unit: 'ליטר' },
  { id: 'canola-oil-1l', name: 'שמן קנולה', category: 'שמנים ורטבים', quantity: 1, unit: 'ליטר' },
  { id: 'sunflower-oil-1l', name: 'שמן חמניות', category: 'שמנים ורטבים', quantity: 1, unit: 'ליטר' },
  { id: 'ketchup-500g', name: 'קטשופ', category: 'שמנים ורטבים', quantity: 500, unit: 'גרם' },
  { id: 'mayonnaise-500g', name: 'מיונז', category: 'שמנים ורטבים', quantity: 500, unit: 'גרם' },
  { id: 'mustard-250g', name: 'חרדל', category: 'שמנים ורטבים', quantity: 250, unit: 'גרם' },
  { id: 'soy-sauce-250ml', name: 'רוטב סויה', category: 'שמנים ורטבים', quantity: 250, unit: 'מ"ל' },
  { id: 'tehina-500g', name: 'טחינה מוכנה', category: 'שמנים ורטבים', quantity: 500, unit: 'גרם' },
  { id: 'hummus-400g', name: 'חומוס', category: 'שמנים ורטבים', quantity: 400, unit: 'גרם' },
  { id: 'tahini-raw-500g', name: 'טחינה גולמית', category: 'שמנים ורטבים', quantity: 500, unit: 'גרם' },

  // משקאות
  { id: 'coca-cola-2l', name: 'קוקה קולה', category: 'משקאות', quantity: 2, unit: 'ליטר' },
  { id: 'sprite-2l', name: 'ספרייט', category: 'משקאות', quantity: 2, unit: 'ליטר' },
  { id: 'fanta-2l', name: 'פאנטה', category: 'משקאות', quantity: 2, unit: 'ליטר' },
  { id: 'mineral-water-1.5l', name: 'מים מינרליים', category: 'משקאות', quantity: 1.5, unit: 'ליטר' },
  { id: 'sparkling-water-1.5l', name: 'מים מוגזים', category: 'משקאות', quantity: 1.5, unit: 'ליטר' },
  { id: 'orange-juice-1l', name: 'מיץ תפוזים', category: 'משקאות', quantity: 1, unit: 'ליטר' },
  { id: 'apple-juice-1l', name: 'מיץ תפוחים', category: 'משקאות', quantity: 1, unit: 'ליטר' },

  // קפה ותה
  { id: 'coffee-elite-200g', name: 'קפה עלית', category: 'קפה ותה', quantity: 200, unit: 'גרם' },
  { id: 'coffee-nescafe-200g', name: 'נסקפה', category: 'קפה ותה', quantity: 200, unit: 'גרם' },
  { id: 'turkish-coffee-200g', name: 'קפה טורקי', category: 'קפה ותה', quantity: 200, unit: 'גרם' },
  { id: 'tea-wissotzky-100bags', name: 'תה ויסוצקי', category: 'קפה ותה', quantity: 100, unit: 'שקיקים' },
  { id: 'tea-green-25bags', name: 'תה ירוק', category: 'קפה ותה', quantity: 25, unit: 'שקיקים' },
  { id: 'tea-herbal-20bags', name: 'תה צמחים', category: 'קפה ותה', quantity: 20, unit: 'שקיקים' },
  { id: 'instant-coffee-3in1-18sticks', name: 'קפה נמס 3 ב-1', category: 'קפה ותה', quantity: 18, unit: 'מקלות' },

  // חטיפים
  { id: 'bamba-80g', name: 'במבה', category: 'חטיפים', quantity: 80, unit: 'גרם' },
  { id: 'bisli-70g', name: 'ביסלי', category: 'חטיפים', quantity: 70, unit: 'גרם' },
  { id: 'doritos-170g', name: 'דוריטוס', category: 'חטיפים', quantity: 170, unit: 'גרם' },
  { id: 'chips-tapuchips-150g', name: 'ציפס תפוציפס', category: 'חטיפים', quantity: 150, unit: 'גרם' },
  { id: 'crackers-200g', name: 'קרקרים', category: 'חטיפים', quantity: 200, unit: 'גרם' },
  { id: 'pretzels-250g', name: 'בייגלה מלוח', category: 'חטיפים', quantity: 250, unit: 'גרם' },
  { id: 'popcorn-100g', name: 'פופקורן', category: 'חטיפים', quantity: 100, unit: 'גרם' },
  { id: 'nuts-mix-200g', name: 'תערובת אגוזים', category: 'חטיפים', quantity: 200, unit: 'גרם' },

  // מתוקים
  { id: 'chocolate-milka-100g', name: 'שוקולד מילקה', category: 'מתוקים', quantity: 100, unit: 'גרם' },
  { id: 'chocolate-pesek-zman-45g', name: 'פסק זמן', category: 'מתוקים', quantity: 45, unit: 'גרם' },
  { id: 'chocolate-kinder-4pack', name: 'קינדר', category: 'מתוקים', quantity: 4, unit: 'יחידות' },
  { id: 'wafers-loacker-125g', name: 'וופלים לואקר', category: 'מתוקים', quantity: 125, unit: 'גרם' },
  { id: 'cookies-petit-beurre-250g', name: 'עוגיות פטיבר', category: 'מתוקים', quantity: 250, unit: 'גרם' },
  { id: 'cookies-oreo-176g', name: 'אוראו', category: 'מתוקים', quantity: 176, unit: 'גרם' },
  { id: 'candy-mentos-38g', name: 'מנטוס', category: 'מתוקים', quantity: 38, unit: 'גרם' },
  { id: 'candy-haribo-200g', name: 'סוכריות הריבו', category: 'מתוקים', quantity: 200, unit: 'גרם' },
  { id: 'gum-orbit-14g', name: 'מסטיק אורביט', category: 'מתוקים', quantity: 14, unit: 'גרם' },
  { id: 'ice-cream-magnum-110ml', name: 'מגנום', category: 'מתוקים', quantity: 110, unit: 'מ"ל' },
  { id: 'ice-cream-artik-60ml', name: 'ארטיק', category: 'מתוקים', quantity: 60, unit: 'מ"ל' },
  { id: 'popsicle-kartiv-6pack', name: 'קרטיב', category: 'מתוקים', quantity: 6, unit: 'יחידות' },
  { id: 'cake-mix-marble-500g', name: 'תערובת עוגה שיש', category: 'מתוקים', quantity: 500, unit: 'גרם' },
  { id: 'pudding-chocolate-4pack', name: 'פודינג שוקולד', category: 'מתוקים', quantity: 4, unit: 'יחידות' },

  // תבלינים
  { id: 'salt-1kg', name: 'מלח', category: 'תבלינים', quantity: 1, unit: 'ק"ג' },
  { id: 'pepper-black-100g', name: 'פלפל שחור', category: 'תבלינים', quantity: 100, unit: 'גרם' },
  { id: 'paprika-100g', name: 'פפריקה', category: 'תבלינים', quantity: 100, unit: 'גרם' },
  { id: 'cumin-100g', name: 'כמון', category: 'תבלינים', quantity: 100, unit: 'גרם' },
  { id: 'cinnamon-100g', name: 'קינמון', category: 'תבלינים', quantity: 100, unit: 'גרם' },
  { id: 'garlic-powder-100g', name: 'אבקת שום', category: 'תבלינים', quantity: 100, unit: 'גרם' },
  { id: 'onion-powder-100g', name: 'אבקת בצל', category: 'תבלינים', quantity: 100, unit: 'גרם' },
  { id: 'hawaij-100g', name: 'חוואייג', category: 'תבלינים', quantity: 100, unit: 'גרם' },

  // מוצרי ניקיון
  { id: 'dish-soap-1l', name: 'סבון כלים', category: 'מוצרי ניקיון', quantity: 1, unit: 'ליטר' },
  { id: 'laundry-detergent-3l', name: 'אבקת כביסה', category: 'מוצרי ניקיון', quantity: 3, unit: 'ליטר' },
  { id: 'fabric-softener-2l', name: 'מרכך כביסה', category: 'מוצרי ניקיון', quantity: 2, unit: 'ליטר' },
  { id: 'bleach-2l', name: 'אקונומיקה', category: 'מוצרי ניקיון', quantity: 2, unit: 'ליטר' },
  { id: 'floor-cleaner-1l', name: 'נוזל לרצפה', category: 'מוצרי ניקיון', quantity: 1, unit: 'ליטר' },
  { id: 'glass-cleaner-750ml', name: 'נוזל לזכוכית', category: 'מוצרי ניקיון', quantity: 750, unit: 'מ"ל' },
  { id: 'toilet-cleaner-750ml', name: 'נוזל לאסלה', category: 'מוצרי ניקיון', quantity: 750, unit: 'מ"ל' },
  { id: 'sponges-10pack', name: 'ספוגים', category: 'מוצרי ניקיון', quantity: 10, unit: 'יחידות' },
  { id: 'trash-bags-50pack', name: 'שקיות אשפה', category: 'מוצרי ניקיון', quantity: 50, unit: 'יחידות' },

  // מוצרי נייר
  { id: 'toilet-paper-24rolls', name: 'נייר טואלט', category: 'מוצרי נייר', quantity: 24, unit: 'גלילים' },
  { id: 'paper-towels-8rolls', name: 'מגבות נייר', category: 'מוצרי נייר', quantity: 8, unit: 'גלילים' },
  { id: 'tissues-10boxes', name: 'טישו', category: 'מוצרי נייר', quantity: 10, unit: 'קופסאות' },
  { id: 'napkins-100pack', name: 'מפיות נייר', category: 'מוצרי נייר', quantity: 100, unit: 'יחידות' },
  { id: 'aluminum-foil-30m', name: 'נייר אלומיניום', category: 'מוצרי נייר', quantity: 30, unit: 'מטר' },

  // מוצרי תינוקות
  { id: 'diapers-size3-40pack', name: 'חיתולים מידה 3', category: 'מוצרי תינוקות', quantity: 40, unit: 'יחידות' },
  { id: 'baby-wipes-80pack', name: 'מגבונים לתינוק', category: 'מוצרי תינוקות', quantity: 80, unit: 'יחידות' },
  { id: 'baby-formula-700g', name: 'תחליף חלב לתינוק', category: 'מוצרי תינוקות', quantity: 700, unit: 'גרם' },
  { id: 'baby-food-chicken-190g', name: 'מזון תינוקות עוף', category: 'מוצרי תינוקות', quantity: 190, unit: 'גרם' },

  // מוצרי טיפוח
  { id: 'shampoo-400ml', name: 'שמפו', category: 'מוצרי טיפוח', quantity: 400, unit: 'מ"ל' },
  { id: 'conditioner-400ml', name: 'מרכך שיער', category: 'מוצרי טיפוח', quantity: 400, unit: 'מ"ל' },
  { id: 'body-wash-1l', name: 'סבון גוף', category: 'מוצרי טיפוח', quantity: 1, unit: 'ליטר' },
  { id: 'toothpaste-125ml', name: 'משחת שיניים', category: 'מוצרי טיפוח', quantity: 125, unit: 'מ"ל' },
  { id: 'toothbrush-2pack', name: 'מברשת שיניים', category: 'מוצרי טיפוח', quantity: 2, unit: 'יחידות' },
  { id: 'deodorant-150ml', name: 'דאודורנט', category: 'מוצרי טיפוח', quantity: 150, unit: 'מ"ל' },
  { id: 'soap-bar-125g', name: 'סבון מוצק', category: 'מוצרי טיפוח', quantity: 125, unit: 'גרם' }
];

"""

    # מחירים
    output += "// מחירים\n"
    output += "export const prices: PriceEntry[] = [\n"

    for i, price in enumerate(prices):
        output += "  {"
        output += f" productId: '{price['productId']}', "
        output += f"storeId: '{price['storeId']}', "
        output += f"price: {price['price']}"
        output += " },\n"

        # כל 1000 רשומות, הוסף הערה
        if (i + 1) % 1000 == 0:
            output += f"  // {i + 1} רשומות...\n"

    output += "];\n"

    return output

def main():
    import sys
    # תמיכה ב-Windows encoding
    if sys.platform == 'win32':
        import io
        sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

    print("Generating stores...")
    stores = generate_stores()
    print(f"Created {len(stores)} stores")

    print("Generating prices...")
    prices = generate_prices(stores)
    print(f"Created {len(prices)} price entries")

    print("Writing to TypeScript file...")
    content = write_typescript_file(stores, prices)

    with open('src/data/mockData.ts', 'w', encoding='utf-8') as f:
        f.write(content)

    print("File created successfully!")
    print(f"\nStatistics:")
    print(f"  Stores: {len(stores)}")
    print(f"  Products: {len(BASE_PRICES)}")
    print(f"  Price entries: {len(prices)}")

    # Additional statistics
    regions_count = {}
    for store in stores:
        region = store['region']
        regions_count[region] = regions_count.get(region, 0) + 1

    print(f"\nBreakdown by regions:")
    for region, count in sorted(regions_count.items()):
        print(f"  {region}: {count} stores")

if __name__ == '__main__':
    main()
