import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Colors from '@/styles/colors';

const useStyles = () =>
  StyleSheet.create({
    card: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: Colors.white,
      borderRadius: 12,
      padding: 12,
      marginHorizontal: 16,
      marginVertical: 8,
      elevation: 2,
    },

    productContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },

    image: {
      width: 80,
      height: 80,
    },

    infoContainer: {
      flex: 1,
      marginHorizontal: 12,
    },

    brand: {
      marginTop: 4,
      color: '#777',
    },

    price: {
      marginTop: 6,
      color: Colors.primary,
    },

    actionContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },

    addButton: {
      width: 90,
      height: 40,
    },
  });

export default useStyles;
