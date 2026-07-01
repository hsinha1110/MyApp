import axiosInterceptor from '@/api/axiosInterceptor';
import { METHODS, SERVICE_ROUTES, replaceUrl } from '../constants';

export const getProductsByIdService = async (productId: any) => {
  try {
    const response = await axiosInterceptor({
      url: replaceUrl(SERVICE_ROUTES.GET_PRODUCTS_BY_ID, {
        id: productId,
      }),
      method: METHODS.GET,
    });

    console.log('PRODUCT RESPONSE =>', response.data);

    return response.data;
  } catch (error) {
    console.log('PRODUCT ERROR =>', error);
    throw error;
  }
};
