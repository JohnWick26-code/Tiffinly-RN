import { View } from 'react-native';

import { StyleSheet } from './styleSheet';
import { Colors } from '../theme/colors';
import { Radius, Spacing } from '../theme/spacing';

export interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const safeTotal = total > 0 ? total : 1;
  const ratio = Math.min(Math.max(current / safeTotal, 0), 1);

  return (
    <View
      accessibilityRole="progressbar"
      accessibilityValue={{ min: 0, max: safeTotal, now: current }}
      style={styles.track}
    >
      <View style={[styles.fill, { width: `${ratio * 100}%` }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    height: Spacing.sm,
    borderRadius: Radius.pill,
    backgroundColor: Colors.tertiary[50],
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: Radius.pill,
    backgroundColor: Colors.primary[400],
  },
});
