export interface OrdersState {
  orders: any[];
  loading: boolean;
  error: string | null;
}

export interface GetOrdersPayload {
  page?: number;
  limit?: number;
}