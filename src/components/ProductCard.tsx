import React from "react";
import { Product } from "../types";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const discountedPrice = product.price * (1 - product.discount / 100);
  const isOutOfStock = product.quantity === 0;

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src = `https://via.placeholder.com/400x300/f3f4f6/6b7280?text=${encodeURIComponent(
      product.title
    )}`;
  };

  return (
    <div
      className={`bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
        isOutOfStock ? "opacity-60" : ""
      }`}>
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-32 sm:h-36 object-cover"
          onError={handleImageError}
          loading="lazy"
        />
        {isOutOfStock && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl">
              <span className="text-slate-800 font-semibold text-sm">
                Out of Stock
              </span>
            </div>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            -{product.discount}%
          </span>
        </div>
      </div>

      <div className="p-3 sm:p-4">
        <h3 className="text-base font-bold text-slate-900 mb-1 line-clamp-1">
          {product.title}
        </h3>
        <p className="text-slate-600 text-xs mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="mb-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
              Stock
            </span>
            <span
              className={`text-xs font-semibold ${
                isOutOfStock
                  ? "text-red-500"
                  : product.quantity <= 5
                  ? "text-amber-500"
                  : "text-emerald-500"
              }`}>
              {isOutOfStock ? "Out of Stock" : `${product.quantity} left`}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-slate-900">
              ${discountedPrice.toFixed(2)}
            </span>
            <span className="text-xs text-slate-400 line-through">
              ${product.price.toFixed(2)}
            </span>
          </div>
        </div>
        {isOutOfStock ? (
          <button
            disabled
            className="w-full bg-slate-200 text-slate-500 py-2 px-3 rounded-lg cursor-not-allowed font-medium text-xs">
            Out of Stock
          </button>
        ) : (
          <button
            onClick={() => onAddToCart(product)}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-medium text-xs transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
