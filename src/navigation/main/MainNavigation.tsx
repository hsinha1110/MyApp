import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from '@/constants/routes';
import * as screens from '@/navigation/index';
import { MainStackParamList } from '@/navigation/navigationTypes';

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.HOME}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Routes.HOME} component={screens.HomeScreen} />
      <Stack.Screen
        name={Routes.PRODUCT_DETAILS}
        component={screens.ProductDetailsScreen}
      />
      <Stack.Screen name={Routes.CART} component={screens.CartScreen} />
      <Stack.Screen name={Routes.CHECKOUT} component={screens.CheckOutScreen} />
      <Stack.Screen name={Routes.ADDRESS} component={screens.AddressScreen} />
      <Stack.Screen name={Routes.PAYMENT} component={screens.PaymentScreen} />
      <Stack.Screen name={Routes.ORDERS} component={screens.OrdersScreen} />
      <Stack.Screen
        name={Routes.ORDER_DETAIL}
        component={screens.OrderDetailScreen}
      />
      <Stack.Screen name={Routes.RETURN} component={screens.ReturnsScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
