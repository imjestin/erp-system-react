import React from "react";
import { CartItem as CartItemType } from "../types";
import CartItem from "./CartItem";

interface CartProps {
  cart: CartItemType[];
  onRemove: (productId: number) => void;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onConfirm: () => void;
  onClose?: () => void;
}

const Cart: React.FC<CartProps> = ({
  cart,
  onRemove,
  onUpdateQuantity,
  onConfirm,
  onClose,
}) => {
  const totalPrice = cart.reduce((total, item) => {
    const discountedPrice =
      item.product.price * (1 - item.product.discount / 100);
    return total + discountedPrice * item.quantity;
  }, 0);

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-xl">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
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
            </div>
            <h2 className="text-xl font-bold text-slate-900">Shopping Cart</h2>
          </div>
          
          {onClose && (
            <button
              onClick={onClose}
              className="xl:hidden p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-slate-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-slate-400"
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
            </div>
            <p className="text-slate-600 font-medium mb-1">
              Your cart is empty
            </p>
            <p className="text-slate-500 text-sm">
              Add some products to get started!
            </p>
          </div>
        ) : (
          <>
            <div className="space-y-3 mb-6 max-h-80 overflow-y-auto">
              {cart.map((item) => (
                <CartItem
                  key={item.product.id}
                  item={item}
                  onRemove={onRemove}
                  onUpdateQuantity={onUpdateQuantity}
                />
              ))}
            </div>

            <div className="border-t border-slate-200 pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-slate-900">
                  Total:
                </span>
                <span className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              <button
                onClick={onConfirm}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 px-4 rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 font-medium text-sm transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
                Confirm Order
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
