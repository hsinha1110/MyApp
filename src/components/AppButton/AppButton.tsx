import React from 'react';
import { ActivityIndicator, Pressable, Text } from 'react-native';
import { AppButtonProps } from '@/components/types';
import Colors from '@/styles/colors';
import useStyles from '@/components/AppButton/styles';

const AppButton: React.FC<AppButtonProps> = ({
  title,
  onPress,
  loading = false,
  disabled = false,
  style,
  backgroundColor = Colors.primary,
  textColor = Colors.white,
}) => {
  const styles = useStyles();
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor,
          opacity: disabled ? 0.6 : pressed ? 0.8 : 1,
        },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={textColor} />
      ) : (
        <Text style={[styles.title, { color: textColor }]}>{title}</Text>
      )}
    </Pressable>
  );
};

export default React.memo(AppButton);
