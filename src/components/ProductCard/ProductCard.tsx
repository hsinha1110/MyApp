import React from 'react';
import { View, Image, Pressable, Alert } from 'react-native';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '@/redux/store';
import { useAppSelector } from '@/redux/hooks';
import { cartThunk } from '@/redux/thunk/cartThunk';
import { getCartThunk } from '@/redux/thunk/getCartThunk';

import AppText from '@/components/AppText/AppText';
import AppButton from '@/components/AppButton/AppButton';
import QuantityStepper from '@/components/QuantityStepper/QuantityStepper';

import useStyles from './ProductCard.styles';

interface ProductCardProps {
  item: any;
  onPress?: (item: any) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ item, onPress }) => {
  const styles = useStyles();
  const dispatch = useDispatch<AppDispatch>();

  const cart = useAppSelector(state => state.cart.cart);

  const cartItem = cart?.items?.find((x: any) => x.productId?._id === item._id);

  const quantity = cartItem?.quantity ?? 1;

  const handleAddToCart = async () => {
    try {
      const existingItems =
        cart?.items?.map((x: any) => ({
          productId: x.productId._id,
          quantity: x.quantity,
        })) || [];

      const index = existingItems.findIndex(
        (x: any) => x.productId === item._id,
      );

      let items;

      if (index >= 0) {
        items = existingItems.map((x: any) =>
          x.productId === item._id ? { ...x, quantity: x.quantity + 1 } : x,
        );
      } else {
        items = [
          ...existingItems,
          {
            productId: item._id,
            quantity: 1,
          },
        ];
      }

      await dispatch(cartThunk({ items })).unwrap();
      await dispatch(getCartThunk());
    } catch (error) {
      console.log(error);
    }
  };

  const updateCart = async (qty: number) => {
    try {
      const items =
        cart?.items?.map((x: any) => ({
          productId: x.productId._id,
          quantity: x.productId._id === item._id ? qty : x.quantity,
        })) || [];

      await dispatch(cartThunk({ items })).unwrap();
      await dispatch(getCartThunk());
    } catch (error: any) {
      Alert.alert('Cart', error?.message || 'Something went wrong');
    }
  };

  return (
    <View style={styles.card}>
      <Pressable
        style={styles.productContainer}
        onPress={() => onPress?.(item)}
      >
        <Image
          source={{ uri: item.images?.[0] }}
          resizeMode="contain"
          style={styles.image}
        />

        <View style={styles.infoContainer}>
          <AppText title={item.title} weight="700" numberOfLines={2} />

          <AppText title={item.brand} style={styles.brand} />

          <AppText
            title={`₹ ${item.price}`}
            weight="700"
            style={styles.price}
          />
        </View>
      </Pressable>

      <View style={styles.actionContainer}>
        {cartItem ? (
          <QuantityStepper
            quantity={quantity}
            onIncrease={() => updateCart(quantity + 1)}
            onDecrease={() => quantity > 1 && updateCart(quantity - 1)}
          />
        ) : (
          <AppButton
            title="Add"
            onPress={handleAddToCart}
            style={styles.addButton}
          />
        )}
      </View>
    </View>
  );
};

export default React.memo(ProductCard);
