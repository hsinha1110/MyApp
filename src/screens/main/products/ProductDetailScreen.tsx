import React, { useEffect } from 'react';
import { View, Text, Image, ActivityIndicator, ScrollView } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { MainStackParamList } from '@/navigation/navigationTypes';
import { Routes } from '@/constants/routes';
import { getProductsByIdThunk } from '@/redux/thunk/getProductByIdThunk';
import { AppDispatch, RootState } from '@/redux/store';
import useStyles from '@/screens/main/products/ProductDetailScreen.styles';
import Colors from '@/styles/colors';
import AppButton from '@/components/AppButton/AppButton';
import WrapperContainer from '@/components/Wrapper/WrapperContainer';
import ErrorState from '@/components/ErrorState/ErrorState';
import EmptyState from '@/components/EmptyState/EmptyState';

type ProductDetailRouteProp = RouteProp<
  MainStackParamList,
  typeof Routes.PRODUCT_DETAILS
>;

const ProductDetailScreen: React.FC = () => {
  const styles = useStyles();
  const route = useRoute<ProductDetailRouteProp>();
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();

  const { productId } = route.params;
  const { product, loading, error } = useSelector(
    (state: RootState) => state.product,
  );

  const handleAddToCart = () => {};
  useEffect(() => {
    dispatch(getProductsByIdThunk(productId));
  }, [dispatch, productId]);

  if (loading) {
    return (
      <WrapperContainer style={styles.container}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </WrapperContainer>
    );
  }

  if (error) {
    return (
      <ErrorState
        message={error}
        onRetry={() => dispatch(getProductsByIdThunk(productId))}
      />
    );
  }

  if (!product) {
    return (
      <EmptyState
        title="Product Not Found"
        description="This product is not available."
        buttonTitle="Go Back"
        onPress={() => navigation.goBack()}
      />
    );
  }

  return (
    <WrapperContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Image
          source={{ uri: product.images?.[0] }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.content}>
          <Text style={styles.brand}>{product.brand}</Text>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>₹ {product.price}</Text>
          <Text style={styles.heading}>Description</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>

      <View style={styles.bottomContainer}>
        <AppButton title="Add To Cart" onPress={handleAddToCart} />
      </View>
    </WrapperContainer>
  );
};

export default ProductDetailScreen;
