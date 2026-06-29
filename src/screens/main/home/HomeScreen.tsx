import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

import WrapperContainer from '@/components/Wrapper/WrapperContainer';
import useStyles from '@/screens/main/home/HomeScreen.styles';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getProductsAsyncThunk } from '@/redux/thunk/getProductThunk';
import ProductItem from '../products/ProductItem';
import Colors from '@/styles/colors';

const HomeScreen: React.FC = () => {
  const { products, loading, error } = useAppSelector(state => state.product);

  const dispatch = useAppDispatch();
  const styles = useStyles();

  useEffect(() => {
    dispatch(getProductsAsyncThunk());
  }, [dispatch]);

  if (loading) {
    return (
      <WrapperContainer style={styles.container}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ActivityIndicator size="large" color={Colors.primary} />
          <Text>Loading products...</Text>
        </View>
      </WrapperContainer>
    );
  }

  if (error) {
    return (
      <WrapperContainer style={styles.container}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'red' }}>{error}</Text>
        </View>
      </WrapperContainer>
    );
  }

  return (
    <WrapperContainer style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        keyExtractor={item => item._id}
        renderItem={({ item }) => <ProductItem item={item} />}
      />
    </WrapperContainer>
  );
};

export default HomeScreen;
