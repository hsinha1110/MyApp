import Colors from '@/styles/colors';
import React from 'react';
import { StatusBar, StyleProp, ViewStyle } from 'react-native';
import {
  SafeAreaView,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';
import useStyles from '@/components/Wrapper/styles';
interface WrapperContainerProps extends SafeAreaViewProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const WrapperContainer: React.FC<WrapperContainerProps> = ({
  children,
  style,
  ...safeAreaProps
}) => {
  const styles = useStyles();
  return (
    <SafeAreaView
      edges={['top', 'bottom']}
      style={[styles.container, style]}
      {...safeAreaProps}
    >
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />

      {children}
    </SafeAreaView>
  );
};

export default React.memo(WrapperContainer);
