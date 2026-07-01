import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Colors from '@/styles/colors';

const useStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: moderateScale(16),
      backgroundColor: Colors.background,
    },

    card: {
      backgroundColor: Colors.white,
      borderRadius: moderateScale(12),
      padding: moderateScale(16),
      marginBottom: moderateScale(16),
      borderWidth: 1,
      borderColor: Colors.border,
    },

    spacing: {
      marginTop: moderateScale(12),
    },

    option: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: moderateScale(16),
    },

    optionText: {
      marginLeft: moderateScale(12),
    },

    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: moderateScale(12),
    },

    divider: {
      height: 1,
      backgroundColor: Colors.border,
      marginVertical: moderateScale(16),
    },

    button: {
      marginTop: 'auto',
    },
  });

export default useStyles;
