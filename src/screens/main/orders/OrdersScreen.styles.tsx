import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Colors from '@/styles/colors';

const useStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: moderateScale(16),
    },
    card: {
      backgroundColor: Colors.white,
      padding: moderateScale(15),
      borderRadius: moderateScale(10),
      marginBottom: moderateScale(15),
      elevation: 3,
    },
    spacing: {
      marginTop: moderateScale(6),
    },

    emptyContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: moderateScale(80),
    },
    statusBadge: {
      alignSelf: 'flex-start',
      marginTop: moderateScale(8),
      paddingHorizontal: moderateScale(12),
      paddingVertical: moderateScale(5),
      borderRadius: moderateScale(20),
    },
  });

export default useStyles;
