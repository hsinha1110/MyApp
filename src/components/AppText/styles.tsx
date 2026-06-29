import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../../styles/colors';
import { moderateScale } from '../../styles/scaling';

const useStyles = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        text: {
          color: Colors.black,
          fontSize: moderateScale(14),
        },
      }),
    [],
  );
};

export default useStyles;
