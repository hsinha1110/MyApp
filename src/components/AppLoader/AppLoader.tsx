import React from 'react';
import { ActivityIndicator, Modal, View } from 'react-native';
import Colors from '@/styles/colors';
import useStyles from '@/components/AppLoader/styles';
import { AppLoaderProps } from '@/components/types';

const AppLoader: React.FC<AppLoaderProps> = ({
  visible,
  size = 'large',
  color = Colors.primary,
}) => {
  const styles = useStyles();

  if (!visible) return null;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
    >
      <View style={styles.container}>
        <View style={styles.loaderContainer}>
          <ActivityIndicator size={size} color={color} />
        </View>
      </View>
    </Modal>
  );
};

export default React.memo(AppLoader);
