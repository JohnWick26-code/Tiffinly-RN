import { StyleSheet, type ViewStyle } from 'react-native';

import { Colors } from '../theme/colors';
import { Radius, Spacing } from '../theme/spacing';

export const designSystemContentStyle: ViewStyle = {
  padding: Spacing.lg,
  paddingBottom: Spacing.huge,
  gap: Spacing.xxl,
};

export const designSystemStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white[100],
  },
  content: designSystemContentStyle,
  header: {
    gap: Spacing.sm,
  },

  section: {
    gap: Spacing.lg,
  },
  sectionBody: {
    gap: Spacing.xl,
  },
  subsection: {
    gap: Spacing.sm,
  },
  buttonGroup: {
    gap: Spacing.md,
    alignItems: 'flex-start',
  },

  palette: {
    gap: Spacing.sm,
  },
  swatchRow: {
    flexDirection: 'row',
    gap: Spacing.xs,
  },
  swatchCell: {
    flex: 1,
    gap: Spacing.xs,
  },
  swatch: {
    height: Spacing.huge,
    borderRadius: Radius.sm,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.black[10],
  },
  swatchLabel: {
    textAlign: 'center',
  },
  strip: {
    flexDirection: 'row',
    height: Spacing.xxxl,
    borderRadius: Radius.sm,
    overflow: 'hidden',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.black[10],
  },
  stripContrast: {
    backgroundColor: Colors.tertiary[400],
  },
  stripSegment: {
    flex: 1,
  },

  typeGroup: {
    gap: Spacing.md,
  },
  specimen: {
    gap: Spacing.xs,
  },

  fontCard: {
    gap: Spacing.sm,
    padding: Spacing.lg,
    borderRadius: Radius.md,
    backgroundColor: Colors.tertiary[50],
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.black[10],
  },
  fontHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
