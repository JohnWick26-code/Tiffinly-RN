import { Pressable, StyleSheet, View } from 'react-native';
import { Heart, Xmark } from 'iconoir-react-native';

import { Colors, Elevation, Icon, Radius, Spacing, Text } from '../../../../lib/ui';

export interface ExploreActionsProps {
  likeLabel: string;
  rejectLabel: string;
  onLike: () => void;
  onReject: () => void;
}

export function ExploreActions({
  likeLabel,
  rejectLabel,
  onLike,
  onReject,
}: ExploreActionsProps) {
  return (
    <View style={styles.row}>
      <Action
        label={rejectLabel}
        icon={Xmark}
        color={Colors.tertiary[600]}
        onPress={onReject}
      />

      <Action
        label={likeLabel}
        icon={Heart}
        color={Colors.primary[400]}
        onPress={onLike}
      />
    </View>
  );
}

function Action({
  label,
  icon,
  color,
  onPress,
}: {
  label: string;
  icon: typeof Heart;
  color: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={onPress}
      style={({ pressed }) => [styles.action, pressed && styles.pressed]}
    >
      <View style={[styles.circle, { backgroundColor: color }]}>
        <Icon icon={icon} size="lg" color={Colors.white[100]} />
      </View>

      <Text variant="label3P" color={Colors.white[60]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: Spacing.xxl,
    paddingVertical: Spacing.lg,
  },
  action: {
    alignItems: 'center',
    gap: Spacing.sm,
  },
  circle: {
    width: Spacing.giant,
    height: Spacing.giant,
    borderRadius: Radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    ...Elevation.mid,
  },
  pressed: {
    opacity: 0.7,
  },
});
