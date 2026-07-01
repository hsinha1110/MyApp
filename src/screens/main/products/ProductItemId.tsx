import React from 'react';
import { View, Text } from 'react-native';
import useStyles from '@/screens/main/products/ProductDetailScreen.styles';
import { ProductItemIdProps } from '@/typing/product.types';

const ProductItemId: React.FC<ProductItemIdProps> = ({ product }) => {
  const styles = useStyles();
  return (
    <View style={styles.content}>
      <Text style={styles.brand}>{product?.brand}</Text>
      <Text style={styles.title}>{product?.title}</Text>
      <View style={styles.priceRow}>
        <Text style={styles.price}>₹ {product?.price}</Text>
      </View>
      <View style={styles.divider} />
      <Text style={styles.heading}>Description</Text>
      <Text style={styles.description}>{product?.description}</Text>
    </View>
  );
};

export default ProductItemId;
