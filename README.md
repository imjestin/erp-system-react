# ERP System - React + TypeScript + TailwindCSS

A modern e-commerce ERP system. Features authentication, product catalog, shopping cart, and inventory management.

## 🚀 Quick Start

```bash
npm install
npm start
```

**Login**: `admin` / `admin123`

## ✨ Key Features

- **Authentication System** - Secure login with route protection
- **Product Search** - Real-time search across 20 products
- **Inventory Management** - Stock tracking with out-of-stock handling
- **Shopping Cart** - Add/remove items with quantity controls
- **Responsive Design** - Mobile-first TailwindCSS implementation
- **TypeScript** - Full type safety and modern React patterns

## 🏗️ Architecture

**Component Structure:**

- `App.tsx` - Main state management and authentication
- `Login.tsx` - Authentication form
- `ProductList.tsx` - Product grid with search functionality
- `ProductCard.tsx` - Individual product display with stock management
- `Cart.tsx` - Shopping cart with order confirmation
- `CartItem.tsx` - Cart item with quantity controls

**Data Management:**

- `types.ts` - TypeScript interfaces (User, Product, CartItem)
- `data.ts` - Static data (20 products, user credentials)

## 🎯 Core Functionality

- **Stock Management**: Real-time inventory tracking with stock restoration
- **Search**: Filter products by title and description
- **Cart Operations**: Add, remove, update quantities with stock validation
- **Price Calculation**: Automatic discount application and total computation
- **Responsive UI**: Modern glassmorphism design with smooth animations

## 🛠️ Tech Stack

- **React 18** with functional components and hooks
- **TypeScript** for type safety
- **TailwindCSS** for styling and responsiveness
- **Modern UI/UX** with glassmorphism and smooth transitions
