//============ Async Routes ============================

export const ASYNC_ROUTES = {
  LOGIN: 'login',
  REGISTER: 'register',
  GET_PRODUCTS: 'getProducts',
  GET_PRODUCTS_BY_ID: 'getProductsById',
  GET_CART: 'getCart',
  UPDATE_CART: 'updateCart',
  ORDER_QUOTE: 'orderQuote',
  PLACE_ORDER: 'placeOrder',
  ORDERS: 'orders',
  ORDER_DETAILS: 'orderDetails',
  ADDRESS: 'address',
  RETURNS: 'returns',
  PAYMENT_OPTIONS: 'paymentOptions',
  QUOTE: 'quote',
  GET_ORDER: 'getOrder',
} as const;
//==================== Thunk Status =====================
export const THUNK_STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  FAILED: 'failed',
} as const;

//==================== Types =====================
export type AsyncRoutesType = (typeof ASYNC_ROUTES)[keyof typeof ASYNC_ROUTES];
export type ThunkStatusType = (typeof THUNK_STATUS)[keyof typeof THUNK_STATUS];
