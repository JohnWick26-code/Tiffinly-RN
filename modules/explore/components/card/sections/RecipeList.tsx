import { StyleSheet, View } from 'react-native';

import { Colors, Radius, Spacing, Text } from '../../../../../lib/ui';
import { exploreTheme } from '../../../theme';

export interface RecipeListProps {
  title: string;
  items: string[];
  numbered?: boolean;
}

export function RecipeList({ title, items, numbered = false }: RecipeListProps) {
  return (
    <View style={styles.block}>
      <Text variant="label1P" color={exploreTheme.cardTitle}>
        {title}
      </Text>

      {items.map((item, index) => (
        <View key={item} style={styles.row}>
          <View style={styles.marker}>
            <Text variant="label4P" color={Colors.primary[600]}>
              {numbered ? index + 1 : '•'}
            </Text>
          </View>

          <Text
            variant="body2"
            color={exploreTheme.cardMuted}
            style={styles.text}
          >
            {item}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    gap: Spacing.sm,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Spacing.md,
  },
  marker: {
    minWidth: Spacing.xl,
    height: Spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Radius.pill,
    backgroundColor: Colors.primary[50],
  },
  text: {
    flex: 1,
  },
});
