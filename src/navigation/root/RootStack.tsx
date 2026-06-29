import React, { useRef } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigationTypes';
import MainStack from '@/navigation/main/MainNavigation';
import AuthStack from '@/navigation/auth/AuthNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '@/utils/navigationUtils';
import { useAppSelector } from '@/redux/hooks';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);
  console.log(isLoggedIn, '.....isLoggedIn');
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <Stack.Screen name="MainStack" component={MainStack} />
        ) : (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
