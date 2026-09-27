import { View } from 'react-native';

import { Text } from '../components/Text';
import { Colors } from '../theme/colors';
import { readableOn } from './designSystemData';
import { designSystemStyles as styles } from './designSystemStyles';

type Shades = Record<string | number, string>;

export const Palette = ({ name, shades }: { name: string; shades: Shades }) => (
  <View style={styles.palette}>
    <Text variant="label2P">{name.toUpperCase()}</Text>

    <View style={styles.swatchRow}>
      {Object.entries(shades).map(([shade, value]) => (
        <View key={shade} style={styles.swatchCell}>
          <View style={[styles.swatch, { backgroundColor: value }]}>
            <Text variant="label4P" color={readableOn(value)}>
              {shade}
            </Text>
          </View>

          <Text
            variant="caption4"
            color={Colors.tertiary[200]}
            style={styles.swatchLabel}
            numberOfLines={1}
          >
            {value}
          </Text>
        </View>
      ))}
    </View>
  </View>
);

export const NeutralStrip = ({ name, shades }: { name: string; shades: Shades }) => (
  <View style={styles.palette}>
    <Text variant="label2P">{name.toUpperCase()}</Text>

    <View style={[styles.strip, name === 'white' && styles.stripContrast]}>
      {Object.entries(shades).map(([shade, value]) => (
        <View key={shade} style={[styles.stripSegment, { backgroundColor: value }]} />
      ))}
    </View>

    <Text variant="caption4" color={Colors.tertiary[200]}>
      0 → 100 · transparent → opaque
    </Text>
  </View>
);
