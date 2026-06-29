import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import Colors from '@/styles/colors';
import { moderateScale, verticalScale } from '@/styles/scaling';

const useStyles = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          marginBottom: moderateScale(16),
        },

        label: {
          fontSize: moderateScale(14),
          fontWeight: '600',
          color: Colors.black,
          marginBottom: verticalScale(8),
          marginTop: moderateScale(10),
        },

        inputContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: Colors.border,
          borderRadius: moderateScale(10),
          height: verticalScale(40),
          paddingHorizontal: moderateScale(12),
        },

        icon: {
          marginRight: moderateScale(10),
        },

        input: {
          flex: 1,
          fontSize: moderateScale(15),
          color: Colors.black,
          paddingVertical: 0,
        },

        eyeIcon: {
          marginLeft: moderateScale(10),
          justifyContent: 'center',
          alignItems: 'center',
        },

        focused: {
          borderColor: Colors.primary,
        },

        errorBorder: {
          borderColor: Colors.error,
        },

        error: {
          color: Colors.error,
          marginTop: moderateScale(10),
          fontSize: moderateScale(12),
        },
      }),
    [],
  );
};

export default useStyles;
