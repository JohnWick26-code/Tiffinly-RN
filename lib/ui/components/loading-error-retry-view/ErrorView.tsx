import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Button } from '../Button';
import { Text } from '../Text';
import { stateViewStyles as styles } from './stateViewStyles';
import { Colors } from '../../theme/colors';

export interface ErrorViewProps {
  title?: string;
  message?: string;
  retryLabel?: string;
  onRetry?: () => void;
}

export function ErrorView({
  title,
  message,
  retryLabel,
  onRetry,
}: ErrorViewProps) {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text variant="heading4" color={Colors.failure[600]} style={styles.text}>
        {title ?? t('common.errorTitle')}
      </Text>

      {message ? (
        <Text variant="body2" color={Colors.tertiary[400]} style={styles.text}>
          {message}
        </Text>
      ) : null}

      {onRetry ? (
        <Button variant="outline" onPress={onRetry} color={Colors.failure[600]}>
          {retryLabel ?? t('common.retry')}
        </Button>
      ) : null}
    </View>
  );
}
