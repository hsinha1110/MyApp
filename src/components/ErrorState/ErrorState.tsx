import React from 'react';
import { View } from 'react-native';

import AppText from '@/components/AppText/AppText';
import AppButton from '@/components/AppButton/AppButton';
import WrapperContainer from '@/components/Wrapper/WrapperContainer';

import useStyles from '@/components/ErrorState/ErrorState.styles';

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

const ErrorState: React.FC<ErrorStateProps> = ({
  message = 'Something went wrong',
  onRetry,
}) => {
  const styles = useStyles();

  return (
    <WrapperContainer style={styles.container}>
      <View style={styles.content}>
        <AppText title="Oops!" size={24} weight="700" style={styles.title} />

        <AppText title={message} size={16} style={styles.message} />

        {onRetry && (
          <AppButton title="Retry" onPress={onRetry} style={styles.button} />
        )}
      </View>
    </WrapperContainer>
  );
};

export default ErrorState;
