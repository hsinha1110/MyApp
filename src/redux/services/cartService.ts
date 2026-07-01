import { AddToCartPayload } from '@/typing/cart.types';
import { METHODS, SERVICE_ROUTES } from '../constants';
import axiosInterceptor from '@/api/axiosInterceptor';

export const cartService = async (payload: AddToCartPayload) => {
  console.log('PAYLOAD =>', JSON.stringify(payload, null, 2));

  const response = await axiosInterceptor({
    url: SERVICE_ROUTES.GET_CART,
    method: METHODS.PUT,
    data: payload,
  });

  console.log('PUT RESPONSE =>', JSON.stringify(response.data, null, 2));

  return response.data;
};
