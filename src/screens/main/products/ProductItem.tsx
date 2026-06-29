import React from 'react';
import { View, Image } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import AppText from '@/components/AppText/AppText';
import { ProductItemProps } from '@/typing/product.types';
import useStyles from './ProductItem.styles.tsx';

const ProductItem: React.FC<ProductItemProps> = ({ item }) => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.images?.[0] }}
        resizeMode="contain"
        style={styles.image}
      />

      <View style={styles.detailsContainer}>
        <AppText title={item.title} weight="700" numberOfLines={2} />

        <AppText title={item.brand} color="#777" style={styles.brand} />

        <AppText title={`₹ ${item.price}`} weight="700" style={styles.price} />
      </View>
    </View>
  );
};

export default ProductItem;
