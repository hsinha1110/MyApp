import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { getCartThunk } from '@/redux/thunk/getCartThunk';
import { navigate } from '@/utils/navigationUtils';
import { Routes } from '@/constants/routes';
import WrapperContainer from '@/components/Wrapper/WrapperContainer';
import ErrorState from '@/components/ErrorState/ErrorState';
import EmptyState from '@/components/EmptyState/EmptyState';
import AppButton from '@/components/AppButton/AppButton';
import CartItem from '@/screens/main/cart/CartItem';
import useStyles from '@/screens/main/cart/CartScreen.styles';
import AppText from '@/components/AppText/AppText';
import PriceSummaryCard from '@/components/PriceSummary/PriceSummaryCard';

const CartScreen: React.FC = () => {
  const styles = useStyles();
  const dispatch = useDispatch<AppDispatch>();
  const { cart, loading, error } = useSelector(
    (state: RootState) => state.cart,
  );
  const subtotal =
    cart?.items?.reduce((sum: number, item: any) => {
      return sum + item.productId.price * item.quantity;
    }, 0) ?? 0;

  const discount = 0;
  const shipping = subtotal > 0 ? 50 : 0;
  const tax = Math.round(subtotal * 0.18);

  const total = subtotal - discount + shipping + tax;
  useEffect(() => {
    dispatch(getCartThunk());
  }, [dispatch]);

  if (loading) {
    return (
      <WrapperContainer>
        <ActivityIndicator size="large" />
      </WrapperContainer>
    );
  }

  if (error) {
    return (
      <ErrorState message={error} onRetry={() => dispatch(getCartThunk())} />
    );
  }

  if (!cart?.items?.length) {
    return (
      <EmptyState
        title="Cart is Empty"
        description="Add products to your cart."
      />
    );
  }

  return (
    <WrapperContainer style={styles.listContainer}>
      <FlatList
        data={cart.items}
        keyExtractor={item => item._id}
        contentContainerStyle={{
          paddingBottom: 320, // footer jitna space
        }}
        renderItem={({ item }) => <CartItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.footer}>
        <PriceSummaryCard
          subtotal={subtotal}
          discount={discount}
          shipping={shipping}
          tax={tax}
          total={total}
        />

        <AppButton
          title="Proceed to Checkout"
          onPress={() => navigate(Routes.CHECKOUT)}
        />
      </View>
      <View style={[styles.footer]}>
        <AppButton
          title="Proceed to Checkout"
          onPress={() => navigate(Routes.CHECKOUT)}
        />
      </View>
    </WrapperContainer>
  );
};

export default CartScreen;
