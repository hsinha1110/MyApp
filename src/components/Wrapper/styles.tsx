import Colors from '@/styles/colors';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

const styles = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: Colors.white,
        },
      }),
    [],
  );
};
export default styles;
