import axiosInterceptor from '@/api/axiosInterceptor';
import { METHODS, SERVICE_ROUTES } from '../constants';

export const getCartService = async () => {
  const response = await axiosInterceptor({
    url: SERVICE_ROUTES.UPDATE_CART,
    method: METHODS.GET,
  });

  return response.data;
};
