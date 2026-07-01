import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Colors from '@/styles/colors';

const useStyles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: Colors.border,
      borderRadius: moderateScale(8),
      overflow: 'hidden',
      alignSelf: 'flex-start',
    },

    button: {
      width: moderateScale(40),
      height: moderateScale(40),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.white,
    },

    buttonText: {
      fontSize: moderateScale(20),
      fontWeight: '700',
      color: Colors.black,
    },

    quantity: {
      width: moderateScale(50),
      textAlign: 'center',
      fontSize: moderateScale(18),
      fontWeight: '600',
      color: Colors.black,
    },
  });
};

export default useStyles;
