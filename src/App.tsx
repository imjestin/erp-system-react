import React, { useState } from "react";
import { User, Product, CartItem } from "./types";
import { products } from "./data";
import Login from "./components/Login";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import FloatingCartButton from "./components/FloatingCartButton";

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [productStock, setProductStock] = useState<Product[]>(products);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const addToCart = (product: Product) => {
    const currentProduct = productStock.find((p) => p.id === product.id);
    if (!currentProduct || currentProduct.quantity === 0) {
      alert("This product is out of stock!");
      return;
    }

    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.product.id === product.id
      );

      if (existingItem) {
        const currentStock =
          productStock.find((p) => p.id === product.id)?.quantity || 0;
        if (currentStock <= 0) {
          alert(`Only ${currentStock} items available in stock!`);
          return prevCart;
        }
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { product, quantity: 1 }];
      }
    });

    setProductStock((prevStock) =>
      prevStock.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p
      )
    );
  };

  const removeFromCart = (productId: number) => {
    const itemToRemove = cart.find((item) => item.product.id === productId);

    if (itemToRemove) {
      setProductStock((prevStock) =>
        prevStock.map((p) =>
          p.id === productId
            ? { ...p, quantity: p.quantity + itemToRemove.quantity }
            : p
        )
      );
    }

    setCart((prevCart) =>
      prevCart.filter((item) => item.product.id !== productId)
    );
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    setProductStock((prevStock) => {
      const currentItem = cart.find((item) => item.product.id === productId);
      if (!currentItem) return prevStock;

      const quantityDifference = newQuantity - currentItem.quantity;

      if (quantityDifference > 0) {
        const currentStock =
          prevStock.find((p) => p.id === productId)?.quantity || 0;
        if (currentStock < quantityDifference) {
          alert(`Only ${currentStock} items available in stock!`);
          return prevStock;
        }
      }

      return prevStock.map((p) =>
        p.id === productId
          ? { ...p, quantity: p.quantity - quantityDifference }
          : p
      );
    });

    setCart((prevCart) => {
      const currentItem = prevCart.find(
        (item) => item.product.id === productId
      );
      if (!currentItem) return prevCart;

      const quantityDifference = newQuantity - currentItem.quantity;

      if (quantityDifference > 0) {
        const currentStock =
          productStock.find((p) => p.id === productId)?.quantity || 0;
        if (currentStock < quantityDifference) {
          return prevCart;
        }
      }

      return prevCart.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      );
    });
  };

  const confirmOrder = () => {
    if (cart.length > 0) {
      alert("Order confirmed! Thank you for your purchase.");
      setCart([]);
    }
  };

  const handleLogin = (loggedInUser: User) => {
    setUser(loggedInUser);
  };

  const handleLogout = () => {
    setUser(null);
    setCart([]);
    setIsCartOpen(false);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const filteredProducts = productStock.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">ERP System</h1>
                <p className="text-sm text-slate-600">Welcome, {user.name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-2 bg-slate-100 px-3 py-2 rounded-xl">
                <svg
                  className="w-4 h-4 text-slate-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
                  />
                </svg>
                <span className="text-sm font-medium text-slate-700">
                  {cart.reduce((total, item) => total + item.quantity, 0)} items
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-xl hover:from-red-600 hover:to-pink-600 transition-all duration-200 text-sm font-medium transform hover:scale-105 active:scale-95">
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
          <div className="xl:col-span-2">
            <ProductList
              products={filteredProducts}
              onAddToCart={addToCart}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
          </div>

          {isCartOpen && (
            <div className="xl:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={toggleCart}></div>
          )}
          
          <div className={`xl:col-span-1 ${isCartOpen ? 'block fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl z-50 xl:relative xl:inset-auto xl:w-auto xl:max-w-none xl:bg-transparent xl:shadow-none' : 'hidden xl:block'}`}>
            <div className="sticky top-24 xl:top-24">
              <Cart
                cart={cart}
                onRemove={removeFromCart}
                onUpdateQuantity={updateQuantity}
                onConfirm={confirmOrder}
                onClose={toggleCart}
              />
            </div>
          </div>
        </div>
      </div>

      <FloatingCartButton cart={cart} onClick={toggleCart} />
    </div>
  );
};

export default App;
