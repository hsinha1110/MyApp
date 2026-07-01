import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import Colors from '@/styles/colors';

const useStyles = () =>
  StyleSheet.create({
    card: {
      backgroundColor: Colors.white,
      borderRadius: moderateScale(12),
      padding: moderateScale(16),
      borderWidth: 1,
      borderColor: Colors.border,
      marginBottom: moderateScale(16),
    },

    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: moderateScale(12),
    },

    divider: {
      borderTopWidth: 1,
      borderTopColor: Colors.border,
      marginVertical: moderateScale(16),
    },
  });

export default useStyles;
