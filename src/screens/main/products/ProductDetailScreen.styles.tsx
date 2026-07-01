import Colors from '@/styles/colors';
import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const useStyles = () => {
  return StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    image: {
      width: '100%',
      height: moderateScale(200),
      backgroundColor: Colors.white,
    },

    content: {
      padding: moderateScale(20),
    },

    brand: {
      fontSize: moderateScale(15),
      color: Colors.border,
      marginBottom: 8,
    },

    title: {
      fontSize: moderateScale(24),
      fontWeight: '700',
      color: Colors.black,
      marginBottom: moderateScale(12),
    },

    price: {
      fontSize: moderateScale(28),
      fontWeight: 'bold',
      color: Colors.primary,
      marginBottom: moderateScale(24),
    },

    heading: {
      fontSize: moderateScale(18),
      fontWeight: '700',
      color: Colors.black,
      marginBottom: moderateScale(10),
    },

    description: {
      fontSize: moderateScale(15),
      lineHeight: moderateScale(24),
      color: Colors.black,
    },
    priceRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: moderateScale(20),
    },

    divider: {
      height: 1,
      backgroundColor: Colors.border,
      marginVertical: moderateScale(16),
    },
    scrollContent: {
      paddingBottom: moderateScale(100),
    },

    bottomContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: Colors.white,
      padding: moderateScale(16),
      borderTopWidth: 1,
      borderTopColor: Colors.white,
    },
  });
};

export default useStyles;
