import axiosInterceptor from '@/api/axiosInterceptor';
import { METHODS, SERVICE_ROUTES } from '../constants';

export const getProductsService = async () => {
  try {
    const response = await axiosInterceptor({
      url: SERVICE_ROUTES.GET_PRODUCTS,
      method: METHODS.GET,
    });

    console.log('PRODUCT RESPONSE =>', response.data);

    return response.data;
  } catch (error) {
    console.log('PRODUCT ERROR =>', error);
    throw error;
  }
};
