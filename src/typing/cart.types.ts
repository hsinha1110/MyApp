export interface AddToCartPayload {
  items: {
    productId: string;
    variantId?: string;
    quantity: number;
  }[];
}

export interface CartItemProps {
  item: any;
}
