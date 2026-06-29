import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from '@/constants/routes';
import { AuthStackParamList } from '@/navigation/navigationTypes';
import * as screens from '@/navigation/index';
const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.LOGIN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Routes.LOGIN} component={screens.LoginScreen} />
      <Stack.Screen name={Routes.REGISTER} component={screens.RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
