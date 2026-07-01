import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Colors from '@/styles/colors';

const useStyles = () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: moderateScale(16),
      paddingVertical: moderateScale(12),
    },

    cartContainer: {
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      padding: moderateScale(4),
    },

    badge: {
      position: 'absolute',
      top: -4,
      right: -6,
      minWidth: moderateScale(18),
      height: moderateScale(18),
      borderRadius: moderateScale(9),
      backgroundColor: Colors.error, // ya Colors.primary
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: moderateScale(4),
      zIndex: 999,
      elevation: 5,
    },
  });

export default useStyles;
