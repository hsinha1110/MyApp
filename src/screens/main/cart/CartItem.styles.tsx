import Colors from '@/styles/colors';
import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const useStyles = () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: Colors.white,
      marginHorizontal: moderateScale(16),
      marginVertical: moderateScale(8),
      padding: moderateScale(12),
      borderRadius: moderateScale(12),
      alignItems: 'center',
      elevation: 2,
    },

    image: {
      width: moderateScale(80),
      height: moderateScale(80),
    },

    content: {
      flex: 1,
      marginHorizontal: moderateScale(12),
    },

    price: {
      marginVertical: moderateScale(8),
      color: Colors.primary,
      fontSize: moderateScale(18),
    },
  });

export default useStyles;
