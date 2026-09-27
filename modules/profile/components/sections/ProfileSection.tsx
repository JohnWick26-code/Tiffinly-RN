import type { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import { Colors, Elevation, Radius, Spacing, Text } from '../../../../lib/ui';

export interface ProfileSectionProps {
  title: string;
  children: ReactNode;
}

export function ProfileSection({ title, children }: ProfileSectionProps) {
  return (
    <View style={styles.section}>
      <Text variant="heading4" color={Colors.tertiary[600]}>
        {title}
      </Text>

      <View style={styles.card}>{children}</View>
    </View>
  );
}

export function ProfileRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.row}>
      <Text variant="label1" color={Colors.tertiary[400]}>
        {label}
      </Text>

      <Text variant="label1P" color={Colors.tertiary[800]} style={styles.value}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    gap: Spacing.md,
  },
  card: {
    gap: Spacing.lg,
    padding: Spacing.xl,
    borderRadius: Radius.lg,
    backgroundColor: Colors.white[100],
    ...Elevation.low,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: Spacing.lg,
  },
  value: {
    flexShrink: 1,
    textAlign: 'right',
  },
});
