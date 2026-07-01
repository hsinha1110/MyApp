import React from 'react';
import { View } from 'react-native';
import WrapperContainer from '@/components/Wrapper/WrapperContainer';
import AppButton from '@/components/AppButton/AppButton';
import AppText from '@/components/AppText/AppText';
import useStyles from '@/components/EmptyState/EmptyState.styles';
import { EmptyStateProps } from '@/components/types';

const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'No Data Found',
  description = 'There is nothing to display.',
  buttonTitle,
  onPress,
}) => {
  const styles = useStyles();

  return (
    <WrapperContainer style={styles.container}>
      <View style={styles.content}>
        <AppText title={title} size={22} weight="700" style={styles.title} />

        <AppText title={description} size={16} style={styles.description} />

        {buttonTitle && onPress && (
          <AppButton
            title={buttonTitle}
            onPress={onPress}
            style={styles.button}
          />
        )}
      </View>
    </WrapperContainer>
  );
};

export default EmptyState;
