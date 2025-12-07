# 🛒 Israeli Grocery Price Comparison

Compare grocery prices across Israeli supermarket chains to find the best deals!

## ✨ Features

- 📊 **Real Data**: 96 stores across 46 Israeli cities
- 🏪 **Major Chains**: שופרסל, רמי לוי, מגא, ויקטורי, יוחננוף and more
- 💰 **Price Comparison**: Compare prices for 41 common grocery products
- 📍 **Location-Based**: Find stores in your city and region
- 🎯 **Smart Shopping**: See which store offers the best total price for your cart

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start the development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## 📱 Mobile Version

Check out the React Native mobile app version: [israel-grocery-mobile](../israel-grocery-mobile)

## 🌐 API Backend

The Go backend API is available at: [grocery-api-go](../grocery-api-go)

## 📊 Data

The app currently includes:
- **96 stores** across Israel (מרכז, צפון, דרום, ירושלים, יהודה ושומרון)
- **41 products** across multiple categories:
  - מוצרי חלב (Dairy)
  - ביצים (Eggs)
  - לחם ומאפים (Bread & Bakery)
  - ירקות ופירות (Fruits & Vegetables)
  - בשר ועוף (Meat & Poultry)
  - מוצרי יסוד (Pantry Staples)
  - שימורים (Canned Goods)
  - חטיפים (Snacks)
  - משקאות (Beverages)
- **3,936 price entries** with realistic price variations by chain and region

### Data Generation

The data is generated using realistic pricing models based on:
- Real Israeli grocery chains
- Actual city names and regions
- Typical product pricing with chain-specific variations
- Sale prices (approximately 20% of products)

To regenerate the data:
```bash
python generate_real_data.py
```

## 🏪 Included Chains

- שופרסל (Shufersal) - Multiple formats
- רמי לוי (Rami Levy)
- מגא (Mega)
- ויקטורי (Victory)
- יוחננוף (Yohananof)
- אושר עד (Osher Ad)
- חצי חינם (Hatzi Hinam)
- יינות ביתן (Yeinot Bitan)
- סופר פארם (Super Pharm)

## 🛠️ Technology Stack

- **Frontend**: React, TypeScript
- **Styling**: CSS with modern gradients and responsive design
- **State Management**: React Hooks
- **Data**: Auto-generated realistic Israeli grocery data

## 📝 Available Scripts

### `npm start`
Runs the app in development mode.

### `npm test`
Launches the test runner.

### `npm run build`
Builds the app for production.

## ⚠️ Data Notice

The current data is based on realistic models of Israeli grocery pricing. For production use, this should be replaced with:
- Real-time price data from supermarket APIs
- Official government price transparency data
- Live store locations and availability

See [DATA_NOTICE.md](DATA_NOTICE.md) and [REAL_DATA_SOURCES.md](REAL_DATA_SOURCES.md) for more information.

## 🔮 Future Enhancements

- [ ] Real-time price updates via web scraping
- [ ] Integration with government price transparency APIs
- [ ] GPS-based store locator
- [ ] Barcode scanning
- [ ] Shopping list management
- [ ] Price history and trends
- [ ] User accounts and saved preferences

## 📄 License

This project is for educational and personal use.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Made with ❤️ for Israeli shoppers**
