// seedProducts.js — Run once to populate the database with sample products
// Usage: node seedProducts.js

require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/Product");

const sampleProducts = [
  {
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    description:
      "Premium over-ear wireless headphones with active noise cancellation, 30-hour battery life, and ultra-comfortable memory foam ear cushions. Perfect for music lovers and remote workers.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
    category: "Electronics",
    stock: 25,
  },
  {
    name: "Smart Fitness Watch",
    price: 149.99,
    description:
      "Track your health and fitness goals with this sleek smartwatch featuring heart rate monitor, GPS tracking, sleep analysis, and 7-day battery life. Water resistant up to 50m.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    category: "Electronics",
    stock: 18,
  },
  {
    name: "Leather Crossbody Bag",
    price: 59.99,
    description:
      "Handcrafted genuine leather crossbody bag with adjustable strap, multiple compartments, and vintage brass hardware. Ideal for everyday use.",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
    category: "Fashion",
    stock: 30,
  },
  {
    name: "Minimalist Desk Lamp",
    price: 39.99,
    description:
      "Modern LED desk lamp with adjustable brightness, touch controls, USB charging port, and a sleek matte black finish. Eye-care technology reduces strain.",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&q=80",
    category: "Home",
    stock: 40,
  },
  {
    name: "Running Sneakers Pro",
    price: 119.99,
    description:
      "Lightweight performance running shoes with responsive cushioning, breathable mesh upper, and durable rubber outsole. Engineered for speed and comfort.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    category: "Fashion",
    stock: 15,
  },
  {
    name: "Portable Bluetooth Speaker",
    price: 49.99,
    description:
      "Compact waterproof Bluetooth speaker with 360° sound, 12-hour playtime, and built-in microphone. Take your music anywhere — beach, pool, or trail.",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80",
    category: "Electronics",
    stock: 35,
  },
  {
    name: "Classic Aviator Sunglasses",
    price: 29.99,
    description:
      "Timeless aviator sunglasses with polarized UV400 lenses, lightweight metal frame, and spring hinges for a comfortable fit. Unisex design.",
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
    category: "Fashion",
    stock: 50,
  },
  {
    name: "Stainless Steel Water Bottle",
    price: 24.99,
    description:
      "Double-wall vacuum insulated water bottle keeps drinks cold for 24 hours or hot for 12 hours. BPA-free, leak-proof lid, 750ml capacity.",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80",
    category: "Home",
    stock: 60,
  },
  {
    name: "Mechanical Keyboard RGB",
    price: 89.99,
    description:
      "Full-size mechanical keyboard with customizable RGB backlighting, tactile Cherry MX switches, and aircraft-grade aluminum frame. Built for gamers and developers.",
    image:
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&q=80",
    category: "Electronics",
    stock: 20,
  },
  {
    name: "Scented Soy Candle Set",
    price: 34.99,
    description:
      "Set of 3 hand-poured soy wax candles in lavender, vanilla, and sandalwood. 40-hour burn time each. Beautifully packaged — perfect for gifting.",
    image:
      "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=600&q=80",
    category: "Home",
    stock: 45,
  },
  {
    name: "Wireless Charging Pad",
    price: 19.99,
    description:
      "Ultra-slim Qi wireless charging pad compatible with all Qi-enabled devices. Fast charge support, LED indicator, and anti-slip surface. No more tangled cables.",
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&q=80",
    category: "Electronics",
    stock: 55,
  },
  {
    name: "Canvas Backpack",
    price: 44.99,
    description:
      "Durable canvas backpack with padded laptop compartment, multiple pockets, and water-resistant coating. Fits up to 15-inch laptops. Great for work or travel.",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
    category: "Fashion",
    stock: 22,
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    // Clear existing products
    await Product.deleteMany({});
    console.log("🗑️  Cleared existing products");

    // Insert sample products
    const inserted = await Product.insertMany(sampleProducts);
    console.log(`🌱 Seeded ${inserted.length} products successfully!`);

    inserted.forEach((p) => console.log(`   → ${p.name} ($${p.price})`));

    await mongoose.disconnect();
    console.log("\n✅ Done. You can now start the server.");
    process.exit(0);
  } catch (err) {
    console.error("❌ Seed failed:", err.message);
    process.exit(1);
  }
}

seed();
