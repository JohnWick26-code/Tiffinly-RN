import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Button } from '../Button';
import { Text } from '../Text';
import { stateViewStyles as styles } from './stateViewStyles';
import { Colors } from '../../theme/colors';

export interface EmptyViewProps {
  title?: string;
  message?: string;
  retryLabel?: string;
  onRetry?: () => void;
}

export function EmptyView({
  title,
  message,
  retryLabel,
  onRetry,
}: EmptyViewProps) {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text variant="heading4" color={Colors.tertiary[600]} style={styles.text}>
        {title ?? t('common.emptyTitle')}
      </Text>

      {message ? (
        <Text variant="body2" color={Colors.tertiary[400]} style={styles.text}>
          {message}
        </Text>
      ) : null}

      {onRetry ? (
        <Button variant="outline" onPress={onRetry}>
          {retryLabel ?? t('common.retry')}
        </Button>
      ) : null}
    </View>
  );
}
