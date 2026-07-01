import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const useStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },

    content: {
      flex: 1,
      justifyContent: 'center',
      padding: moderateScale(20),
    },

    spacing: {
      marginTop: moderateScale(15),
    },

    button: {
      marginTop: moderateScale(20),
    },
  });

export default useStyles;
