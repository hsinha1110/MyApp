import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import AppText from '@/components/AppText/AppText';
import QuantityStepper from '@/components/QuantityStepper/QuantityStepper';
import useStyles from '@/screens/main/cart/CartItem.styles';
import { AppDispatch } from '@/redux/store';
import { useAppSelector } from '@/redux/hooks';
import { cartThunk } from '@/redux/thunk/cartThunk';
import { getCartThunk } from '@/redux/thunk/getCartThunk';
import Colors from '@/styles/colors';
import { CartItemProps } from '@/typing/cart.types';

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const styles = useStyles();

  const dispatch = useDispatch<AppDispatch>();
  const cart = useAppSelector(state => state.cart.cart);
  const [quantity, setQuantity] = useState(item.quantity);

  const updateCart = async (qty: number) => {
    try {
      let items =
        cart?.items?.map((x: any) => ({
          productId: x.productId._id,
          quantity: x.productId._id === item.productId._id ? qty : x.quantity,
        })) || [];

      items = items.filter((x: any) => x.quantity > 0);
      await dispatch(cartThunk({ items })).unwrap();
      await dispatch(getCartThunk());
      setQuantity(Math.max(qty, 0));
    } catch (error: any) {
      Alert.alert(
        'Cart',
        typeof error === 'string'
          ? error
          : error?.message || 'Something went wrong',
      );
    }
  };

  const handleIncrease = () => {
    updateCart(quantity + 1);
  };

  const handleDecrease = () => {
    updateCart(quantity - 1);
  };

  const handleRemove = async () => {
    try {
      const items =
        cart?.items
          ?.filter((x: any) => x.productId._id !== item.productId._id)
          .map((x: any) => ({
            productId: x.productId._id,
            quantity: x.quantity,
          })) || [];

      await dispatch(cartThunk({ items })).unwrap();
      await dispatch(getCartThunk());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.productId?.images?.[0] }}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.content}>
        <AppText title={item.productId?.title} weight="700" numberOfLines={2} />
        <AppText title={`₹ ${item.productId?.price}`} style={styles.price} />
        <QuantityStepper
          quantity={quantity}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
        />
      </View>

      <TouchableOpacity onPress={handleRemove}>
        <AppText title="Remove" color={Colors.error} weight="700" />
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;
