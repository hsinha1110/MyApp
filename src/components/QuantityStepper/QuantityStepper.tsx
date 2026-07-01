import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import useStyles from '@/components/QuantityStepper/QuantityStepper.styles';
import { QuantityStepperProps } from '../types';

const QuantityStepper: React.FC<QuantityStepperProps> = ({
  quantity,
  onIncrease,
  onDecrease,
}) => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={onDecrease}
        disabled={quantity <= 1}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>

      <Text style={styles.quantity}>{quantity}</Text>

      <TouchableOpacity style={styles.button} onPress={onIncrease}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuantityStepper;
