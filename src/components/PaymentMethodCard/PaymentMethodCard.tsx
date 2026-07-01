import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppText from '@/components/AppText/AppText';
import Colors from '@/styles/colors';
import useStyles from '@/components/PaymentMethodCard/PaymentMethodCard.styles';
import { PaymentMethodCardProps } from '@/components/types';

const PaymentMethodCard: React.FC<PaymentMethodCardProps> = ({
  selectedMethod,
  onChange,
}) => {
  const styles = useStyles();

  return (
    <View style={styles.card}>
      <AppText title="Payment Method" weight="700" size={18} />

      <TouchableOpacity style={styles.option} onPress={() => onChange('cod')}>
        <MaterialCommunityIcons
          name={selectedMethod === 'cod' ? 'radiobox-marked' : 'radiobox-blank'}
          size={24}
          color={Colors.primary}
        />

        <AppText title="Cash On Delivery" style={styles.optionText} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={() => onChange('razorpay')}
      >
        <MaterialCommunityIcons
          name={
            selectedMethod === 'razorpay' ? 'radiobox-marked' : 'radiobox-blank'
          }
          size={24}
          color={Colors.primary}
        />

        <AppText title="Razorpay" style={styles.optionText} />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(PaymentMethodCard);
