import { View } from 'react-native';
import { ProfileCircle } from 'iconoir-react-native';

import { Icon } from './Icon';
import { RemoteImage } from './RemoteImage';
import { StyleSheet } from './styleSheet';
import { Colors } from '../theme/colors';
import { Radius } from '../theme/spacing';

export interface AvatarProps {
  uri?: string | null;
  size?: number;
}

export function Avatar({ uri, size = 96 }: AvatarProps) {
  return (
    <View
      style={[
        styles.container,
        { width: size, height: size, borderRadius: Radius.pill },
      ]}
    >
      <RemoteImage
        uri={uri}
        size={size * 0.72}
        fallback={
          <Icon
            icon={ProfileCircle}
            size="xl"
            color={Colors.tertiary[200]}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: Colors.tertiary[50],
  },
});
