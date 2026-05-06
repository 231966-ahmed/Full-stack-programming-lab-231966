const dotenv = require("dotenv");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const Product = require("./models/Product");

dotenv.config();

const sampleProducts = [
  {
    name: "Wireless Headphones",
    description: "Comfortable over-ear wireless headphones with 30-hour battery life.",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    category: "Electronics",
    inStock: true
  },
  {
    name: "Smart Watch",
    description: "Fitness-focused smart watch with heart-rate and sleep tracking.",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    category: "Wearables",
    inStock: true
  },
  {
    name: "Minimal Backpack",
    description: "Durable water-resistant backpack ideal for travel and daily commute.",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80",
    category: "Accessories",
    inStock: false
  },
  {
    name: "Mechanical Keyboard",
    description: "Compact mechanical keyboard with tactile switches and RGB backlight.",
    price: 94.5,
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=800&q=80",
    category: "Computers",
    inStock: true
  }
];

const seedProducts = async () => {
  try {
    await connectDB();
    await Product.deleteMany();
    await Product.insertMany(sampleProducts);
    console.log("Products seeded successfully");
    await mongoose.connection.close();
  } catch (error) {
    console.error("Seeding failed:", error.message);
    process.exit(1);
  }
};

seedProducts();
