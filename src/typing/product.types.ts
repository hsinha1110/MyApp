export interface ProductItemProps {
  item: Product;
}

export interface Product {
  _id: string;
  title: string;
  brand: string;
  description: string;
  price: number;
  images: string[];
}

export interface ProductState {
  products: Product[];
  product: Product | null;
  loading: boolean;
  error: string | null;
}
export interface ProductItemIdProps {
  product: Product | null;
}

export interface CheckoutProductCardProps {
  image: string;
  title: string;
  quantity: number;
  price: number;
}

export interface ProductCardProps {
  item: any;
  onPress?: (item: any) => void;
}
