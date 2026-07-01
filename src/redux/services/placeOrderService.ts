import axiosInterceptor from '@/api/axiosInterceptor';
import { METHODS, SERVICE_ROUTES } from '@/redux/constants';

export const placeOrderService = async (payload: any) => {
  const response = await axiosInterceptor.request({
    url: SERVICE_ROUTES.PLACE_ORDER,
    method: METHODS.POST,
    data: payload,
  });

  return response.data;
};