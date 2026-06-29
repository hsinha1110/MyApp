import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const useStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    content: {
      alignItems: 'center',
      paddingHorizontal: moderateScale(24),
    },

    title: {
      marginBottom: moderateScale(10),
    },

    description: {
      textAlign: 'center',
      marginBottom: moderateScale(20),
    },

    button: {
      width: moderateScale(160),
    },
  });

export default useStyles;
