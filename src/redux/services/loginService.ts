import axiosInterceptor from '@/api/axiosInterceptor';
import { METHODS, SERVICE_ROUTES } from '@/redux/constants/service.constant';
import { LoginRequest } from '@/typing/auth.types';

export const loginService = async (data: LoginRequest) => {
  try {
    const response = await axiosInterceptor({
      url: SERVICE_ROUTES.LOGIN,
      method: METHODS.POST,
      data,
    });

    console.log('SERVICE RESPONSE =>', response.data);
    console.log(JSON.stringify(response.data, null, 2));
    return response.data;
  } catch (error: any) {
    console.log('SERVICE ERROR =>', error);
    throw error;
  }
};
