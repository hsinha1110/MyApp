import React from 'react';
import { Text } from 'react-native';

import Colors from '@/styles/colors';
import { moderateScale } from '@/styles/scaling';
import useStyles from '@/components/AppText/styles';
import { AppTextProps } from '@/components/types';

const AppText: React.FC<AppTextProps> = ({
  title,
  style,
  color = Colors.black,
  size = moderateScale(14),
  weight = '400',
  ...props
}) => {
  const styles = useStyles();

  return (
    <Text
      {...props}
      style={[
        styles.text,
        {
          color,
          fontSize: size,
          fontWeight: weight,
        },
        style,
      ]}
    >
      {title}
    </Text>
  );
};

export default React.memo(AppText);
