import axiosInterceptor from '@/api/axiosInterceptor';
import { METHODS, SERVICE_ROUTES } from '@/redux/constants';

export const paymentOptionsService = async () => {
  const response = await axiosInterceptor.request({
    url: SERVICE_ROUTES.PAYMENT_OPTIONS,
    method: METHODS.GET,
  });

  return response.data;
};
