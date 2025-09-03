import React from "react";
import { CartItem as CartItemType } from "../types";

interface CartItemProps {
  item: CartItemType;
  onRemove: (productId: number) => void;
  onUpdateQuantity: (productId: number, quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  item,
  onRemove,
  onUpdateQuantity,
}) => {
  const discountedPrice =
    item.product.price * (1 - item.product.discount / 100);
  const totalPrice = discountedPrice * item.quantity;

  const handleIncrease = () => {
    onUpdateQuantity(item.product.id, item.quantity + 1);
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      onUpdateQuantity(item.product.id, item.quantity - 1);
    }
  };

  return (
    <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 animate-in slide-in-from-top-2 fade-in duration-300">
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-slate-900 text-sm mb-2 line-clamp-1">
            {item.product.title}
          </h4>

          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <button
                onClick={handleDecrease}
                disabled={item.quantity <= 1}
                className="w-7 h-7 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 disabled:bg-slate-100 disabled:cursor-not-allowed flex items-center justify-center text-sm font-semibold transition-all duration-200 hover:scale-110 disabled:hover:scale-100">
                -
              </button>
              <span className="text-sm font-bold text-slate-900 min-w-[24px] text-center">
                {item.quantity}
              </span>
              <button
                onClick={handleIncrease}
                className="w-7 h-7 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 flex items-center justify-center text-sm font-semibold transition-all duration-200 hover:scale-110">
                +
              </button>
            </div>

            <div className="text-right">
              <p className="text-sm font-bold text-slate-900">
                ${totalPrice.toFixed(2)}
              </p>
              <p className="text-xs text-slate-500">
                ${discountedPrice.toFixed(2)} each
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={() => onRemove(item.product.id)}
          className="ml-3 p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
