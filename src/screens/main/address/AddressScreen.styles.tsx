import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const useStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },

    content: {
      padding: moderateScale(16),
      paddingBottom: moderateScale(40),
    },

    button: {
      marginTop: moderateScale(24),
      marginBottom: moderateScale(20),
    },
  });
};

export default useStyles;
