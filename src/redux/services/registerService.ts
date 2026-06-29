import axiosInterceptor from '@/api/axiosInterceptor';
import { METHODS, SERVICE_ROUTES } from '@/redux/constants/service.constant';
import {
  RegisterRequest,
  RegisterResponse,
} from '@/typing/auth.types';

export const registerService = async (
  data: RegisterRequest,
): Promise<RegisterResponse> => {
  try {
    const response = await axiosInterceptor({
      url: SERVICE_ROUTES.REGISTER,
      method: METHODS.POST,
      data,
    });

    console.log('REGISTER RESPONSE =>', response.data);

    return response.data;
  } catch (error: any) {
    console.log('REGISTER ERROR =>', error);
    throw error;
  }
};