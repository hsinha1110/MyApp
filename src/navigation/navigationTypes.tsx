import { Routes } from '../constants/routes';
import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
  MainStack: NavigatorScreenParams<MainStackParamList>;
};

export type AuthStackParamList = {
  [Routes.LOGIN]: undefined;
  [Routes.REGISTER]: undefined;
};

export type MainStackParamList = {
  [Routes.HOME]: undefined;
  [Routes.PRODUCT_DETAILS]: {
    productId: string;
  };
  [Routes.CART]: undefined;
  [Routes.CHECKOUT]: undefined;
  [Routes.ADDRESS]: undefined;
  [Routes.PAYMENT]: undefined;
  [Routes.ORDERS]: undefined;
  [Routes.ORDER_DETAIL]: {
    orderId: string;
  };
  [Routes.CONFIRMATION]: {
    order: any;
    payment?: any;
  };
  [Routes.RETURN]: undefined;
};
