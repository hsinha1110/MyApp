import { API_BASE_URL } from '@/api/api';

//================== GET API URL =======================
export const getApiUrl = (endpoint: string): string => {
  return `${API_BASE_URL}${endpoint}`;
};

//================== SERVICE ROUTES =======================
export const SERVICE_ROUTES = {
  LOGIN: getApiUrl('/auth/login'),
  REGISTER: getApiUrl('/auth/register'),
  GET_PRODUCTS: getApiUrl('/products'),
  CART: getApiUrl('/carts/me'),
  ORDER_QUOTE: getApiUrl('/orders/quote'),
  PLACE_ORDER: getApiUrl('/orders'),
  ORDERS: getApiUrl('/orders'),
  ORDER_DETAILS: getApiUrl('/orders/:orderId'),
  ADDRESS: getApiUrl('/users/me/addresses'),
  RETURNS: getApiUrl('/returns'),
  PAYMENT_OPTIONS: getApiUrl('/payments/options'),
} as const;

//=================== METHODS ==============================
export const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
} as const;

//=================== TYPES ==============================
export type MethodsType = (typeof METHODS)[keyof typeof METHODS];
export type ServiceRoutesType =
  (typeof SERVICE_ROUTES)[keyof typeof SERVICE_ROUTES];

//================== Replace URL ======================
export const replaceUrl = (
  url: string,
  data: Record<string, string | number>,
): string => {
  const regex = new RegExp(':(' + Object.keys(data).join('|') + ')', 'g');

  return url.replace(regex, (_, key) => String(data[key]));
};
