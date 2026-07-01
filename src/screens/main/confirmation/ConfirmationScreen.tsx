import React from 'react';
import { View } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import WrapperContainer from '@/components/Wrapper/WrapperContainer';
import AppText from '@/components/AppText/AppText';
import AppButton from '@/components/AppButton/AppButton';

import { MainStackParamList } from '@/navigation/navigationTypes';
import { Routes } from '@/constants/routes';
import useStyles from '@/screens/main/confirmation/ConfirmationScreen.styles';

type ConfirmationRouteProp = RouteProp<MainStackParamList, Routes.CONFIRMATION>;

const ConfirmationScreen: React.FC = () => {
  const styles = useStyles();

  const navigation = useNavigation<any>();

  const route = useRoute<ConfirmationRouteProp>();

  const { order } = route.params;

  return (
    <WrapperContainer style={styles.container}>
      <View style={styles.content}>
        <AppText title="🎉 Order Placed Successfully" size={24} weight="700" />

        <AppText
          title={`Order Number : ${order.order_number}`}
          style={styles.spacing}
        />

        <AppText title={`Status : ${order.status}`} />

        <AppText
          title={`Total Amount : ₹${order.payable_amount}`}
          style={styles.spacing}
        />

        <AppButton
          title="View Orders"
          onPress={() => navigation.navigate(Routes.ORDERS)}
          style={styles.button}
        />

        <AppButton
          title="Continue Shopping"
          onPress={() => navigation.navigate(Routes.HOME)}
          style={styles.button}
        />
      </View>
    </WrapperContainer>
  );
};

export default ConfirmationScreen;
