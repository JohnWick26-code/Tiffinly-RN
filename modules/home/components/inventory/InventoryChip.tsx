import { Pressable, StyleSheet } from 'react-native';
import { Plus } from 'iconoir-react-native';

import { BorderWidth, Colors, ControlHeight, Icon, Radius, Spacing, Text } from '../../../../lib/ui';

export interface InventoryChipProps {
  label: string;
  emoji?: string;
  variant?: 'filled' | 'dashed' | 'plain';
  selected?: boolean;
  onPress: () => void;
}

export function InventoryChip({
  label,
  emoji,
  variant = 'filled',
  selected,
  onPress,
}: InventoryChipProps) {
  const dashed = variant === 'dashed';

  return (
    <Pressable
      accessibilityRole={selected === undefined ? 'button' : 'checkbox'}
      accessibilityLabel={label}
      accessibilityState={selected === undefined ? undefined : { checked: selected }}
      onPress={onPress}
      style={({ pressed }) => [
        styles.chip,
        styles[variant],
        selected && styles.filled,
        pressed && styles.pressed,
      ]}
    >
      {dashed ? <Icon icon={Plus} color={Colors.tertiary[400]} /> : null}
      {emoji ? <Text style={styles.emoji}>{emoji}</Text> : null}

      <Text
        variant="label2P"
        color={dashed ? Colors.tertiary[400] : Colors.tertiary[600]}
        numberOfLines={1}
        style={styles.label}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    flex: 1,
    minHeight: ControlHeight.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.xs,
    paddingHorizontal: Spacing.sm,
    borderRadius: Radius.md,
    borderWidth: BorderWidth.medium,
  },
  filled: {
    backgroundColor: Colors.primary[50],
    borderColor: Colors.primary[100],
  },
  plain: {
    backgroundColor: Colors.white[100],
    borderColor: Colors.tertiary[50],
  },
  dashed: {
    backgroundColor: Colors.white[100],
    borderColor: Colors.tertiary[100],
    borderStyle: 'dashed',
  },
  pressed: {
    opacity: 0.7,
  },
  emoji: {
    fontSize: 22,
    lineHeight: 28,
  },
  label: {
    flexShrink: 1,
  },
});
