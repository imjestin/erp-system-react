import { User, Product } from "./types";

// Static user data for authentication
export const staticUsers: User[] = [
  {
    id: 1,
    username: "admin",
    email: "admin@erp.com",
    name: "Administrator",
  },
  {
    id: 2,
    username: "manager",
    email: "manager@erp.com",
    name: "Manager",
  },
  {
    id: 3,
    username: "user",
    email: "user@erp.com",
    name: "Regular User",
  },
];

// Static credentials (username: password)
export const credentials = {
  admin: "admin123",
  manager: "manager123",
  user: "user123",
};

// Hardcoded product data
export const products: Product[] = [
  {
    id: 1,
    title: "Wireless Headphones",
    description:
      "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
    price: 199.99,
    discount: 20,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop",
    quantity: 15,
  },
  {
    id: 2,
    title: "Smart Watch",
    description:
      "Advanced smartwatch with health monitoring, GPS, and water resistance.",
    price: 299.99,
    discount: 15,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop",
    quantity: 8,
  },
  {
    id: 3,
    title: "Laptop Stand",
    description:
      "Adjustable aluminum laptop stand for better ergonomics and cooling.",
    price: 79.99,
    discount: 10,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=200&fit=crop",
    quantity: 0,
  },
  {
    id: 4,
    title: "Mechanical Keyboard",
    description:
      "RGB mechanical keyboard with Cherry MX switches and customizable lighting.",
    price: 149.99,
    discount: 25,
    image:
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=200&fit=crop",
    quantity: 12,
  },
  {
    id: 5,
    title: "Wireless Mouse",
    description:
      "Ergonomic wireless mouse with precision tracking and long battery life.",
    price: 59.99,
    discount: 5,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=200&fit=crop",
    quantity: 3,
  },
  {
    id: 6,
    title: "USB-C Hub",
    description:
      "Multi-port USB-C hub with HDMI, USB 3.0, and power delivery support.",
    price: 89.99,
    discount: 12,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
    quantity: 0,
  },
  {
    id: 7,
    title: "Gaming Monitor",
    description:
      "27-inch 4K gaming monitor with 144Hz refresh rate and HDR support.",
    price: 399.99,
    discount: 18,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=200&fit=crop",
    quantity: 6,
  },
  {
    id: 8,
    title: "Bluetooth Speaker",
    description:
      "Portable Bluetooth speaker with 360-degree sound and waterproof design.",
    price: 129.99,
    discount: 22,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=200&fit=crop",
    quantity: 18,
  },
  {
    id: 9,
    title: "Webcam HD",
    description:
      "4K webcam with auto-focus, noise reduction, and privacy shutter.",
    price: 89.99,
    discount: 8,
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=300&h=200&fit=crop",
    quantity: 14,
  },
  {
    id: 10,
    title: "Power Bank",
    description:
      "20,000mAh power bank with fast charging and wireless charging pad.",
    price: 49.99,
    discount: 15,
    image:
      "https://images.unsplash.com/photo-1609592807905-4b0b82b3ea1d?w=400&h=300&fit=crop&auto=format&q=80",
    quantity: 25,
  },
  {
    id: 11,
    title: "Tablet Pro",
    description:
      "10.9-inch tablet with Apple Pencil support and all-day battery life.",
    price: 449.99,
    discount: 12,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=200&fit=crop",
    quantity: 7,
  },
  {
    id: 12,
    title: "Desk Lamp",
    description:
      "LED desk lamp with adjustable brightness and color temperature.",
    price: 69.99,
    discount: 20,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
    quantity: 22,
  },
  {
    id: 13,
    title: "External SSD",
    description:
      "1TB external SSD with USB-C connectivity and 1050MB/s read speed.",
    price: 179.99,
    discount: 25,
    image:
      "https://images.unsplash.com/photo-1597872200964-2b65d56bd16b?w=400&h=300&fit=crop&auto=format&q=80",
    quantity: 9,
  },
  {
    id: 14,
    title: "Gaming Chair",
    description:
      "Ergonomic gaming chair with lumbar support and adjustable armrests.",
    price: 249.99,
    discount: 30,
    image:
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=300&h=200&fit=crop",
    quantity: 4,
  },
  {
    id: 15,
    title: "Phone Case",
    description:
      "Protective phone case with MagSafe compatibility and clear design.",
    price: 29.99,
    discount: 10,
    image:
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=300&h=200&fit=crop",
    quantity: 35,
  },
  {
    id: 16,
    title: "Wireless Charger",
    description:
      "15W wireless charging pad with LED indicator and anti-slip design.",
    price: 39.99,
    discount: 18,
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=200&fit=crop",
    quantity: 20,
  },
  {
    id: 17,
    title: "Laptop Sleeve",
    description:
      "Premium laptop sleeve with water-resistant material and soft interior.",
    price: 45.99,
    discount: 12,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=200&fit=crop",
    quantity: 16,
  },
  {
    id: 18,
    title: "Cable Organizer",
    description:
      "Cable management kit with clips, ties, and cable sleeves.",
    price: 19.99,
    discount: 25,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
    quantity: 28,
  },
  {
    id: 19,
    title: "Monitor Arm",
    description:
      "Adjustable monitor arm with gas spring and VESA mount compatibility.",
    price: 99.99,
    discount: 15,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=200&fit=crop",
    quantity: 11,
  },
  {
    id: 20,
    title: "RGB Strip Lights",
    description:
      "Smart RGB LED strip lights with app control and voice assistant support.",
    price: 34.99,
    discount: 20,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
    quantity: 0,
  },
];
