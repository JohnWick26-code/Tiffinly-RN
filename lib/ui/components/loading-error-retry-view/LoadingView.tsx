import { ActivityIndicator, View } from 'react-native';

import { Text } from '../Text';
import { stateViewStyles as styles } from './stateViewStyles';
import { Colors } from '../../theme/colors';

export interface LoadingViewProps {
  message?: string;
}

export function LoadingView({ message }: LoadingViewProps) {
  return (
    <View style={styles.container} accessibilityRole="progressbar">
      <ActivityIndicator color={Colors.primary[600]} />

      {message ? (
        <Text variant="body2" color={Colors.tertiary[400]} style={styles.text}>
          {message}
        </Text>
      ) : null}
    </View>
  );
}
