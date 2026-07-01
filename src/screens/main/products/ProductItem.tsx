import React from 'react';
import { View, Image, Pressable, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { ProductItemProps } from '@/typing/product.types';
import { navigate } from '@/utils/navigationUtils';
import { Routes } from '@/constants/routes';
import { AppDispatch } from '@/redux/store';
import { useAppSelector } from '@/redux/hooks';
import { cartThunk } from '@/redux/thunk/cartThunk';
import { getCartThunk } from '@/redux/thunk/getCartThunk';
import AppText from '@/components/AppText/AppText';
import AppButton from '@/components/AppButton/AppButton';
import QuantityStepper from '@/components/QuantityStepper/QuantityStepper';
import useStyles from '@/screens/main/products/ProductItem.styles';

const ProductItem: React.FC<ProductItemProps> = ({ item }) => {
  const styles = useStyles();
  const dispatch = useDispatch<AppDispatch>();

  const cart = useAppSelector(state => state.cart.cart);

  const cartItem = cart?.items?.find((x: any) => x.productId?._id === item._id);

  const quantity = cartItem?.quantity ?? 1;

  const handleProducts = () => {
    navigate(Routes.PRODUCT_DETAILS, {
      productId: item._id,
    });
  };

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

      console.log('PAYLOAD =>', JSON.stringify({ items }, null, 2));

      await dispatch(cartThunk({ items })).unwrap();

      await dispatch(getCartThunk());

      navigate(Routes.CART);
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

      console.log('UPDATE =>', JSON.stringify({ items }, null, 2));

      await dispatch(cartThunk({ items })).unwrap();

      await dispatch(getCartThunk());
    } catch (error: any) {
      Alert.alert(
        'Cart',
        typeof error === 'string'
          ? error
          : error?.message || 'Something went wrong',
      );
    }
  };
  const handleIncrease = async () => {
    await updateCart(quantity + 1);
  };

  const handleDecrease = async () => {
    if (quantity <= 1) return;

    await updateCart(quantity - 1);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.productContainer} onPress={handleProducts}>
        <Image
          source={{ uri: item.images?.[0] }}
          resizeMode="contain"
          style={styles.image}
        />

        <View style={styles.detailsContainer}>
          <AppText title={item.title} weight="700" numberOfLines={2} />

          <AppText title={item.brand} color="#777" style={styles.brand} />

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
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />
        ) : (
          <AppButton
            title="Add"
            onPress={handleAddToCart}
            style={styles.button}
          />
        )}
      </View>
    </View>
  );
};

export default ProductItem;
