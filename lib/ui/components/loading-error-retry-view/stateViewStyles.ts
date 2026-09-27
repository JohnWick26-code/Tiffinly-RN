import { StyleSheet } from 'react-native';

import { Spacing } from '../../theme/spacing';

export const stateViewStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.md,
    paddingVertical: Spacing.xxl,
    paddingHorizontal: Spacing.lg,
  },
  text: {
    textAlign: 'center',
  },
});
