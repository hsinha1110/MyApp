import axiosInterceptor from '@/api/axiosInterceptor';
import { METHODS, SERVICE_ROUTES } from '../constants';
import { AddressFormData } from '@/typing/address.types';

export const addAddressService = async (payload: AddressFormData) => {
  const response = await axiosInterceptor({
    url: SERVICE_ROUTES.ADDRESS,
    method: METHODS.POST,
    data: payload,
  });

  return response.data;
};
