export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}
export interface CartState {
  data: any[];
  orders: any[];
  count: number;
  totalAmount: number;
  loading: boolean;
  error: string;
}
export interface RootState {
  product: {
    data: Product[];
    status: "idle" | "loading" | "error";
  };
  cart: CartState;
}
