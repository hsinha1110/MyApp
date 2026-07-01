import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getProductsAsyncThunk } from '@/redux/thunk/getProductThunk';
import { navigate } from '@/utils/navigationUtils';
import { Routes } from '@/constants/routes';
import WrapperContainer from '@/components/Wrapper/WrapperContainer';
import ErrorState from '@/components/ErrorState/ErrorState';
import EmptyState from '@/components/EmptyState/EmptyState';
import ProductCard from '@/components/ProductCard/ProductCard';
import useStyles from '@/screens/main/home/HomeScreen.styles';
import Colors from '@/styles/colors';
import CartHeader from '@/components/CartHeader/CartHeader';

const HomeScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const styles = useStyles();

  const { products, loading, error } = useAppSelector(state => state.product);

  useEffect(() => {
    dispatch(getProductsAsyncThunk());
  }, [dispatch]);

  if (loading) {
    return (
      <WrapperContainer style={styles.container}>
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={Colors.primary} />
          <Text style={styles.loadingText}>Loading products...</Text>
        </View>
      </WrapperContainer>
    );
  }

  if (error) {
    return (
      <ErrorState
        message={error}
        onRetry={() => dispatch(getProductsAsyncThunk())}
      />
    );
  }

  if (!products.length) {
    return (
      <EmptyState
        title="No Products Found"
        description="There are no products available."
        buttonTitle="Refresh"
        onPress={() => dispatch(getProductsAsyncThunk())}
      />
    );
  }

  return (
    <WrapperContainer style={styles.container}>
      <CartHeader title="Products" />

      <FlatList
        data={products}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <ProductCard
            item={item}
            onPress={() =>
              navigate(Routes.PRODUCT_DETAILS, {
                productId: item._id,
              })
            }
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </WrapperContainer>
  );
};

export default HomeScreen;
