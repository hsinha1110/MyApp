import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import Colors from '@/styles/colors';
import { moderateScale } from 'react-native-size-matters';

const useStyles = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors.transparent,
          zIndex: 999,
        },

        loaderContainer: {
          width: moderateScale(80),
          height: moderateScale(80),
          borderRadius: moderateScale(12),
          backgroundColor: Colors.white,
          justifyContent: 'center',
          alignItems: 'center',
        },
      }),
    [],
  );
};

export default useStyles;
