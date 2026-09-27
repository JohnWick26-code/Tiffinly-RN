import { StyleSheet, View } from 'react-native';

import { Colors, Radius, Spacing, Text } from '../../../../lib/ui';

export interface ChipListProps {
  label: string;
  items: string[];
  emptyLabel: string;
}

export function ChipList({ label, items, emptyLabel }: ChipListProps) {
  return (
    <View style={styles.block}>
      <Text variant="label1" color={Colors.tertiary[400]}>
        {label}
      </Text>

      {items.length ? (
        <View style={styles.chips}>
          {items.map((item) => (
            <View key={item} style={styles.chip}>
              <Text variant="label2P" color={Colors.primary[600]}>
                {item}
              </Text>
            </View>
          ))}
        </View>
      ) : (
        <Text variant="label1P" color={Colors.tertiary[200]}>
          {emptyLabel}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    gap: Spacing.md,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  chip: {
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.lg,
    borderRadius: Radius.pill,
    backgroundColor: Colors.primary[50],
    borderWidth: 1,
    borderColor: Colors.primary[100],
  },
});
