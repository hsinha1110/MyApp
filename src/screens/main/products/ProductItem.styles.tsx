import Colors from '@/styles/colors';
import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const useStyles = () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: moderateScale(12),
      marginVertical: moderateScale(8),
      padding: moderateScale(10),
      borderRadius: moderateScale(10),
      borderWidth: 1,
      borderColor: Colors.border,
      backgroundColor: Colors.white,
    },

    image: {
      width: moderateScale(100),
      height: moderateScale(100),
      borderRadius: moderateScale(10),
    },

    detailsContainer: {
      flex: 1,
      marginLeft: moderateScale(12),
      justifyContent: 'center',
    },

    brand: {
      marginTop: moderateScale(6),
    },

    price: {
      marginTop: moderateScale(8),
    },
  });

export default useStyles;
