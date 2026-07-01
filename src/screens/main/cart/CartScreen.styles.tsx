import { StyleSheet } from 'react-native';
import Colors from '@/styles/colors';
import { moderateScale } from 'react-native-size-matters';

const useStyles = () => {
  return StyleSheet.create({
    listContainer: {
      paddingHorizontal: moderateScale(16),
      paddingTop: moderateScale(12),
    },

    footer: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,

      paddingHorizontal: 16,
      paddingTop: 16,
      paddingBottom: 30, // <-- ye increase karo

      backgroundColor: Colors.white,
      borderTopWidth: 1,
      borderTopColor: Colors.border,
      elevation: 8,
    },

    summaryRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: moderateScale(8),
    },

    totalRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderTopWidth: 1,
      borderTopColor: Colors.border,
      paddingTop: moderateScale(12),
      marginTop: moderateScale(8),
      marginBottom: moderateScale(16),
    },
  });
};

export default useStyles;
