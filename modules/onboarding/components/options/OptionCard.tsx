import { Pressable, StyleSheet } from 'react-native';

import type { PreferenceOptionDomain } from '../../api';
import { Colors, Radius, Spacing, Text } from '../../../../lib/ui';
import { OptionImage } from './OptionImage';

export interface OptionCardProps {
  option: PreferenceOptionDomain;
  selected: boolean;
  onPress: (id: string) => void;
}

export function OptionCard({ option, selected, onPress }: OptionCardProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected }}
      accessibilityLabel={option.label}
      onPress={() => onPress(option.id)}
      style={({ pressed }) => [
        styles.card,
        selected && styles.cardSelected,
        pressed && styles.pressed,
      ]}
    >
      <OptionImage uri={option.imageUrl} />

      <Text
        variant={selected ? 'label2P' : 'label2'}
        color={selected ? Colors.primary[600] : Colors.tertiary[800]}
      >
        {option.label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    gap: Spacing.sm,
    margin: Spacing.xs,
    padding: Spacing.lg,
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.tertiary[100],
    backgroundColor: Colors.white[100],
  },
  cardSelected: {
    borderColor: Colors.primary[400],
    backgroundColor: Colors.primary[50],
  },
  pressed: {
    opacity: 0.7,
  },
});
