import { StyleSheet } from 'react-native';
import { useMemo } from 'react';
import Colors from '@/styles/colors';
import { moderateScale, scale, verticalScale } from '@/styles/scaling';

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
          justifyContent: 'center',
          paddingHorizontal: moderateScale(20),
        },

        subtitle: {
          marginTop: moderateScale(8),
          marginBottom: moderateScale(30),
        },

        forgot: {
          alignSelf: 'flex-end',
          marginVertical: moderateScale(10),
        },

        footer: {
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: moderateScale(30),
        },
      }),
    [],
  );
};

export default useStyles;
