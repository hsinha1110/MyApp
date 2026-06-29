import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Pressable, Text, TextInput, View } from 'react-native';
import { AppInputProps } from '@/components/types';
import useStyles from '@/components/AppInput/styles';
import Colors from '@/styles/colors';

const AppInput: React.FC<AppInputProps> = ({
  label,
  error,
  leftIcon,
  rightIcon,
  secureTextEntry,
  containerStyle,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hidePassword, setHidePassword] = useState(secureTextEntry);
  const styles = useStyles();
  return (
    <View style={containerStyle}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View
        style={[
          styles.inputContainer,
          isFocused && styles.focused,
          error && styles.errorBorder,
        ]}
      >
        {leftIcon && <View style={styles.icon}>{leftIcon}</View>}

        <TextInput
          {...props}
          style={styles.input}
          secureTextEntry={hidePassword}
          placeholderTextColor={Colors.textPrimary}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        {secureTextEntry ? (
          <Pressable
            style={styles.eyeIcon}
            onPress={() => setHidePassword(!hidePassword)}
          >
            <MaterialCommunityIcons
              name={hidePassword ? 'eye-off-outline' : 'eye-outline'}
              size={22}
              color={Colors.black}
            />
          </Pressable>
        ) : (
          rightIcon && <View style={styles.eyeIcon}>{rightIcon}</View>
        )}
      </View>

      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default React.memo(AppInput);
