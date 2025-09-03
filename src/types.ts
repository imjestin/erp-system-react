// TypeScript interfaces
export interface User {
  id: number;
  username: string;
  email: string;
  name: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discount: number;
  image: string;
  quantity: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
