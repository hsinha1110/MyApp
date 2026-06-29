import React from 'react';
import { Pressable, View } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '@/styles/colors';
import AppText from '@/components/AppText/AppText';
import AppInput from '@/components/AppInput/AppInput';
import AppButton from '@/components/AppButton/AppButton';
import WrapperContainer from '@/components/Wrapper/WrapperContainer';
import useStyles from '@/screens/auth/login/LoginScreen.styles';
import { loginSchema } from '@/validations/authValidations';
import { LoginFormData } from '@/typing/auth.types';
import { useAppDispatch } from '@/redux/hooks';
import { loginAsyncThunk } from '@/redux/thunk/loginThunk';
import { navigate } from '@/utils/navigationUtils';
import { Routes } from '@/constants/routes';

const LoginScreen = () => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await dispatch(loginAsyncThunk(data)).unwrap();
      console.log('LOGIN SUCCESS =>', response);
      const { user, tokens } = response.data;
      if (user && tokens?.accessToken) {
        navigate(Routes.HOME);
      }
    } catch (error) {
      console.log('LOGIN ERROR =>', error);
    }
  };

  return (
    <WrapperContainer style={styles.container}>
      <View style={styles.content}>
        <AppText title="Welcome Back" size={28} weight="700" />

        <AppText
          title="Login to continue shopping"
          color={Colors.black}
          style={styles.subtitle}
        />

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <AppInput
              label="Email"
              placeholder="Enter Email"
              value={value}
              onChangeText={onChange}
              error={errors.email?.message}
              keyboardType="email-address"
              autoCapitalize="none"
              leftIcon={
                <MaterialCommunityIcons
                  name="email-outline"
                  size={22}
                  color={Colors.black}
                />
              }
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <AppInput
              label="Password"
              placeholder="Enter Password"
              value={value}
              onChangeText={onChange}
              error={errors.password?.message}
              secureTextEntry
              leftIcon={
                <MaterialCommunityIcons
                  name="lock-outline"
                  size={22}
                  color={Colors.black}
                />
              }
            />
          )}
        />

        <AppText title="Forgot Password?" style={styles.forgot} />

        <AppButton title="Login" onPress={handleSubmit(onSubmit)} />

        <View style={styles.footer}>
          <AppText title="Don't have an account? " />

          <Pressable onPress={() => navigate(Routes.REGISTER)}>
            <AppText title="Register" color={Colors.primary} weight="700" />
          </Pressable>
        </View>
      </View>
    </WrapperContainer>
  );
};

export default LoginScreen;
