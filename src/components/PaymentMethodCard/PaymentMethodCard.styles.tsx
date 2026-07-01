import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import Colors from '@/styles/colors';

const useStyles = () =>
  StyleSheet.create({
    card: {
      backgroundColor: Colors.white,
      borderRadius: moderateScale(12),
      padding: moderateScale(16),
      marginBottom: moderateScale(16),
      borderWidth: 1,
      borderColor: Colors.border,
    },

    option: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: moderateScale(18),
    },

    optionText: {
      marginLeft: moderateScale(12),
    },
  });

export default useStyles;
