import React from "react";
import { Product } from "../types";
import ProductCard from "./ProductCard";
import { FiSearch, FiX } from "react-icons/fi";

interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  onAddToCart,
  searchQuery,
  onSearchChange,
}) => {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Products</h2>
        <p className="text-slate-600 mb-6">Discover our latest collection</p>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-slate-50 border-0 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all duration-200 text-sm"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600">
              <FiX className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      {searchQuery && (
        <div className="mb-6">
          <p className="text-sm text-slate-600">
            {products.length} {products.length === 1 ? "product" : "products"}{" "}
            found for "{searchQuery}"
          </p>
        </div>
      )}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-slate-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
            <FiSearch className="w-8 h-8 text-slate-400" />
          </div>
          <p className="text-slate-600 font-medium mb-1">No products found</p>
          <p className="text-slate-500 text-sm">
            Try adjusting your search terms
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
