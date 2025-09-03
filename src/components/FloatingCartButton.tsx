import React from "react";
import { CartItem as CartItemType } from "../types";
import { FiShoppingCart } from "react-icons/fi";

interface FloatingCartButtonProps {
  cart: CartItemType[];
  onClick: () => void;
}

const FloatingCartButton: React.FC<FloatingCartButtonProps> = ({ cart, onClick }) => {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 active:scale-95 group"
      aria-label="Open cart">
      <div className="relative">
        <FiShoppingCart className="w-6 h-6" />
        
        {totalItems > 0 && (
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
            {totalItems > 99 ? "99+" : totalItems}
          </div>
        )}
      </div>
      
      <div className="absolute -top-12 right-0 bg-slate-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        {totalItems > 0 ? `${totalItems} items in cart` : "Cart is empty"}
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
      </div>
    </button>
  );
};

export default FloatingCartButton;
