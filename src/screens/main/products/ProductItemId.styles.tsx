import Colors from '@/styles/colors';
import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const useStyles = () => {
  return StyleSheet.create({
    container: {
      paddingBottom: moderateScale(20),
      backgroundColor: Colors.white,
    },

    imageContainer: {
      backgroundColor: Colors.white,
      margin: moderateScale(15),
      borderRadius: moderateScale(15),
      padding: moderateScale(20),
      elevation: 4,
      shadowColor: Colors.black,
      shadowOpacity: 0.08,
      shadowRadius: 8,
      shadowOffset: {
        width: 0,
        height: 3,
      },
    },

    image: {
      width: '100%',
      height: moderateScale(260),
      alignSelf: 'center',
    },

    content: {
      backgroundColor: Colors.white,
      marginHorizontal: moderateScale(15),
      borderRadius: moderateScale(15),
      padding: moderateScale(18),
      elevation: 4,
      shadowColor: Colors.black,
      shadowOpacity: 0.08,
      shadowRadius: 8,
      shadowOffset: {
        width: 0,
        height: 3,
      },
    },

    brand: {
      fontSize: moderateScale(14),
      color: Colors.border,
      marginBottom: moderateScale(6),
      textTransform: 'uppercase',
    },

    title: {
      fontSize: moderateScale(22),
      fontWeight: '700',
      color: Colors.black,
      marginBottom: moderateScale(15),
    },

    priceRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    price: {
      fontSize: moderateScale(28),
      fontWeight: '700',
      color: Colors.primary,
    },

    divider: {
      height: 1,
      backgroundColor: Colors.border,
      marginVertical: moderateScale(20),
    },

    heading: {
      fontSize: moderateScale(18),
      fontWeight: '700',
      color: Colors.black,
      marginBottom: moderateScale(10),
    },

    description: {
      fontSize: moderateScale(15),
      color: Colors.border,
      lineHeight: moderateScale(24),
    },
    
  });
};

export default useStyles;
