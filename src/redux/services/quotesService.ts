import axiosInterceptor from '@/api/axiosInterceptor';
import { SERVICE_ROUTES } from '@/redux/constants/index';
import { METHODS } from '@/redux/constants/index';

export const quoteService = async (payload: any) => {
  const response = await axiosInterceptor({
    url: SERVICE_ROUTES.ORDER_QUOTE,
    method: METHODS.POST,
    data: payload,
  });

  return response.data;
};
