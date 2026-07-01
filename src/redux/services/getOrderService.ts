import axiosInterceptor from '@/api/axiosInterceptor';
import { METHODS, PAGINATION, SERVICE_ROUTES } from '@/redux/constants';

export const getOrdersService = async (
  page = PAGINATION.DEFAULT_PAGE,
  limit = PAGINATION.DEFAULT_LIMIT,
) => {
  const response = await axiosInterceptor.request({
    url: SERVICE_ROUTES.ORDERS,
    method: METHODS.GET,
    params: {
      page,
      limit,
    },
  });

  console.log('GET ORDERS RESPONSE =>', JSON.stringify(response.data, null, 2));

  return response.data;
};
