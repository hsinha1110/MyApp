import React from 'react';
import { View } from 'react-native';

import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterFormData, RegisterRequest } from '@/typing/auth.types';
import { useAppDispatch } from '@/redux/hooks';
import { registerAsyncThunk } from '@/redux/thunk/registerThunk';
import { registerSchema } from '@/validations/authValidations';
import { navigate } from '@/utils/navigationUtils';
import { Routes } from '@/constants/routes';
import useStyles from '@/screens/auth/register/RegisterScreen.styles';

import Colors from '@/styles/colors';
import AppText from '@/components/AppText/AppText';
import AppInput from '@/components/AppInput/AppInput';
import AppButton from '@/components/AppButton/AppButton';
import WrapperContainer from '@/components/Wrapper/WrapperContainer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const RegisterScreen = () => {
  const styles = useStyles();
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const payload: RegisterRequest = {
        email: data.email,
        password: data.password,
        phone: data.phone,
        profile: {
          firstName: data.firstName,
          lastName: data.lastName,
        },
      };

      console.log('REGISTER PAYLOAD =>', payload);

      const response = await dispatch(registerAsyncThunk(payload)).unwrap();

      console.log('REGISTER SUCCESS =>', response);
      navigate(Routes.LOGIN);
    } catch (error) {
      console.log('REGISTER ERROR =>', error);
    }
  };
  return (
    <WrapperContainer style={styles.container}>
      <View style={styles.content}>
        <AppText title="Create Account" size={28} weight="700" />

        <AppText
          title="Create your account to continue"
          color={Colors.black}
          style={styles.subtitle}
        />

        {/* First Name */}

        <Controller
          control={control}
          name="firstName"
          render={({ field: { onChange, value } }) => (
            <AppInput
              label="First Name"
              placeholder="Enter First Name"
              value={value}
              onChangeText={onChange}
              error={errors.firstName?.message}
              leftIcon={
                <MaterialCommunityIcons
                  name="account-outline"
                  size={22}
                  color={Colors.black}
                />
              }
            />
          )}
        />

        {/* Last Name */}

        <Controller
          control={control}
          name="lastName"
          render={({ field: { onChange, value } }) => (
            <AppInput
              label="Last Name"
              placeholder="Enter Last Name"
              value={value}
              onChangeText={onChange}
              error={errors.lastName?.message}
              leftIcon={
                <MaterialCommunityIcons
                  name="account-outline"
                  size={22}
                  color={Colors.black}
                />
              }
            />
          )}
        />

        {/* Email */}

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

        {/* Phone */}

        <Controller
          control={control}
          name="phone"
          render={({ field: { onChange, value } }) => (
            <AppInput
              label="Phone"
              placeholder="Enter Phone Number"
              value={value}
              onChangeText={onChange}
              error={errors.phone?.message}
              keyboardType="phone-pad"
              leftIcon={
                <MaterialCommunityIcons
                  name="phone-outline"
                  size={22}
                  color={Colors.black}
                />
              }
            />
          )}
        />

        {/* Password */}

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
        <AppButton
          title="Register"
          style={styles.registerBtn}
          onPress={handleSubmit(onSubmit)}
        />

        <View style={styles.footer}>
          <AppText title="Already have an account? " />
          <AppText title="Login" color={Colors.primary} weight="700" />
        </View>
      </View>
    </WrapperContainer>
  );
};

export default RegisterScreen;
