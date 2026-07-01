import Colors from '@/styles/colors';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const useStyles = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
        },
        loaderContainer: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },

        loadingText: {
          marginTop: moderateScale(10),
          color: Colors.black,
        },

        listContainer: {
          paddingBottom: moderateScale(20),
        },
      }),
    [],
  );
};

export default useStyles;
