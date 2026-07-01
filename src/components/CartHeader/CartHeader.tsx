import React from 'react';
import { Pressable, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AppText from '@/components/AppText/AppText';
import { useAppSelector } from '@/redux/hooks';
import { navigate } from '@/utils/navigationUtils';
import { Routes } from '@/constants/routes';
import Colors from '@/styles/colors';
import useStyles from './CartHeader.styles';
import { CartHeaderProps } from '../types';

const CartHeader: React.FC<CartHeaderProps> = ({ title = 'Products' }) => {
  const styles = useStyles();

  const cart = useAppSelector(state => state.cart.cart);

  const totalQuantity =
    cart?.items?.reduce((sum: number, item: any) => sum + item.quantity, 0) ??
    0;

  return (
    <View style={styles.container}>
      <AppText title={title} weight="700" size={22} />

      <Pressable
        style={styles.cartContainer}
        onPress={() => navigate(Routes.CART)}
      >
        <MaterialCommunityIcons
          name="cart-outline"
          size={30}
          color={Colors.black}
        />

        {totalQuantity > 0 && (
          <View style={styles.badge}>
            <AppText
              title={String(totalQuantity)}
              size={10}
              color={Colors.white}
              weight="700"
            />
          </View>
        )}
      </Pressable>
    </View>
  );
};

export default React.memo(CartHeader);
