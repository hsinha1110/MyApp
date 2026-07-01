import Colors from '@/styles/colors';
import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const useStyles = () => {
  return StyleSheet.create({
    container: {
      backgroundColor: Colors.white,
      marginHorizontal: moderateScale(16),
      marginVertical: moderateScale(8),
      borderRadius: moderateScale(12),
      padding: moderateScale(12),
      elevation: 2,
    },

    productContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    image: {
      width: moderateScale(90),
      height: moderateScale(90),
      borderRadius: moderateScale(8),
    },

    detailsContainer: {
      flex: 1,
      marginLeft: moderateScale(12),
    },

    brand: {
      marginTop: moderateScale(4),
      color: '#777',
      fontSize: moderateScale(14),
    },

    price: {
      marginTop: moderateScale(8),
      color: Colors.primary,
      fontSize: moderateScale(18),
      fontWeight: '700',
    },

    actionContainer: {
      marginTop: moderateScale(12),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    button: {
      width: '40%',
      height: moderateScale(40),
      marginLeft: moderateScale(12),
    },
  });
};

export default useStyles;
