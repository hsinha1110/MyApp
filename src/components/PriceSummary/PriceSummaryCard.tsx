import React from 'react';
import { View } from 'react-native';

import AppText from '@/components/AppText/AppText';
import useStyles from '@/components/PriceSummary/PriceSummaryCard.styles';
import { PriceSummaryProps } from '../types';

const PriceSummary: React.FC<PriceSummaryProps> = ({
  subtotal,
  discount,
  shipping,
  tax,
  total,
}) => {
  const styles = useStyles();

  return (
    <View style={styles.card}>
      <AppText title="Order Summary" weight="700" size={18} />

      <View style={styles.row}>
        <AppText title="Subtotal" />
        <AppText title={`₹ ${subtotal}`} />
      </View>

      <View style={styles.row}>
        <AppText title="Discount" />
        <AppText title={`- ₹ ${discount}`} />
      </View>

      <View style={styles.row}>
        <AppText title="Shipping" />
        <AppText title={`₹ ${shipping}`} />
      </View>

      <View style={styles.row}>
        <AppText title="Tax" />
        <AppText title={`₹ ${tax}`} />
      </View>

      <View style={styles.divider} />

      <View style={styles.row}>
        <AppText title="Total" weight="700" />
        <AppText title={`₹ ${total}`} weight="700" />
      </View>
    </View>
  );
};

export default React.memo(PriceSummary);
