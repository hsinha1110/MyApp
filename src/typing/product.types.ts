export interface ProductItemProps {
  item: Product;
}

export interface Product {
  _id: string;
  title: string;
  brand: string;
  price: number;
  images: string[];
}

export interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}
