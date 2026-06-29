import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from '../../styles/scaling';

const useStyles = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          height: verticalScale(40),
          borderRadius: moderateScale(10),
          justifyContent: 'center',
          alignItems: 'center',
        },

        title: {
          fontSize: moderateScale(16),
          fontWeight: '600',
        },
      }),
    [],
  );
};

export default useStyles;
