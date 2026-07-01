import React from 'react';
import { ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import WrapperContainer from '@/components/Wrapper/WrapperContainer';
import AppInput from '@/components/AppInput/AppInput';
import AppButton from '@/components/AppButton/AppButton';
import { AppDispatch } from '@/redux/store';
import useStyles from './AddressScreen.styles';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Colors from '@/styles/colors';
import { AddressFormData } from '@/typing/address.types';
import { addressSchema } from '@/validations/addressValidations';

const AddressScreen: React.FC = () => {
  const styles = useStyles();

  const dispatch = useDispatch<AppDispatch>();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressFormData>({
    resolver: yupResolver(addressSchema) as any,
    defaultValues: {
      label: 'home',
      fullName: '',
      phone: '',
      line1: '',
      line2: '',
      city: '',
      state: '',
      postalCode: '',
      country: '',
    },
  });

  return (
    <WrapperContainer>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Controller
          control={control}
          name="fullName"
          render={({ field: { onChange, value } }) => (
            <AppInput
              label="Full Name"
              placeholder="Enter Full Name"
              value={value}
              error={errors.fullName?.message}
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

        <Controller
          control={control}
          name="phone"
          render={({ field: { onChange, value } }) => (
            <AppInput
              label="Phone Number"
              placeholder="Enter Phone Number"
              value={value}
              keyboardType="phone-pad"
              onChangeText={onChange}
              error={errors.phone?.message}
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

        <Controller
          control={control}
          name="line1"
          render={({ field: { onChange, value } }) => (
            <AppInput
              label="Address Line 1"
              placeholder="House No, Street"
              value={value}
              onChangeText={onChange} // <-- ye add karo
              error={errors.line1?.message}
              leftIcon={
                <MaterialCommunityIcons
                  name="map-marker-outline"
                  size={22}
                  color={Colors.black}
                />
              }
            />
          )}
        />
        <Controller
          control={control}
          name="line2"
          render={({ field: { onChange, value } }) => (
            <AppInput
              label="Address Line 2"
              placeholder="Landmark"
              value={value}
              onChangeText={onChange}
              error={errors.line2?.message}
              leftIcon={
                <MaterialCommunityIcons
                  name="map-marker-radius-outline"
                  size={22}
                  color={Colors.black}
                />
              }
            />
          )}
        />
        <Controller
          control={control}
          name="city"
          render={({ field: { onChange, value } }) => (
            <AppInput
              label="City"
              placeholder="Enter City"
              value={value}
              onChangeText={onChange}
              error={errors.city?.message}
              leftIcon={
                <MaterialCommunityIcons
                  name="city"
                  size={22}
                  color={Colors.black}
                />
              }
            />
          )}
        />

        <Controller
          control={control}
          name="state"
          render={({ field: { onChange, value } }) => (
            <AppInput
              label="State"
              placeholder="Enter State"
              value={value}
              onChangeText={onChange}
              error={errors.state?.message}
              leftIcon={
                <MaterialCommunityIcons
                  name="map-outline"
                  size={22}
                  color={Colors.black}
                />
              }
            />
          )}
        />

        <Controller
          control={control}
          name="postalCode"
          render={({ field: { onChange, value } }) => (
            <AppInput
              label="Postal Code"
              placeholder="Enter Postal Code"
              value={value}
              keyboardType="number-pad"
              onChangeText={onChange}
              error={errors.postalCode?.message}
              leftIcon={
                <MaterialCommunityIcons
                  name="mailbox-outline"
                  size={22}
                  color={Colors.black}
                />
              }
            />
          )}
        />

        <Controller
          control={control}
          name="country"
          render={({ field: { onChange, value } }) => (
            <AppInput
              label="Country"
              placeholder="Enter Country"
              value={value}
              onChangeText={onChange}
              error={errors.country?.message}
              leftIcon={
                <MaterialCommunityIcons
                  name="earth"
                  size={22}
                  color={Colors.black}
                />
              }
            />
          )}
        />

        <AppButton
          title="Save & Continue"
          style={styles.button}
          onPress={() => {}}
        />
      </ScrollView>
    </WrapperContainer>
  );
};

export default AddressScreen;
