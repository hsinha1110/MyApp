import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import Colors from '@/styles/colors';
import { moderateScale } from 'react-native-size-matters';

const useStyles = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: Colors.white,
        },

        content: {
          flex: 1,
          paddingHorizontal: moderateScale(20),
          paddingTop: moderateScale(30),
        },
        registerBtn: { marginTop: moderateScale(20) },
        subtitle: {
          marginTop: 8,
          marginBottom: 30,
        },

        footer: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: moderateScale(24),
        },
      }),
    [],
  );
};

export default useStyles;
