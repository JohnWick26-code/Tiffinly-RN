import { StyleSheet, type ViewStyle } from 'react-native';

import { Colors } from '../theme/colors';
import { BorderWidth, ControlHeight, Radius, Spacing } from '../theme/spacing';

export type ButtonVariant =
  | 'filled'
  | 'outline'
  | 'text'
  | 'gradient';

export function resolveSurface(
  variant: ButtonVariant,
  color: string,
): ViewStyle {
  switch (variant) {
    case 'filled':
      return { backgroundColor: color };

    case 'outline':
      return {
        borderWidth: BorderWidth.hairline,
        borderColor: color,
        backgroundColor: 'transparent',
      };

    default:
      return { backgroundColor: 'transparent' };
  }
}

export function resolveTextColor(
  variant: ButtonVariant,
  color: string,
  override?: string,
): string {
  if (override) return override;

  return variant === 'filled' || variant === 'gradient'
    ? Colors.white[100]
    : color;
}

export const buttonStyles = StyleSheet.create({
  base: {
    borderRadius: Radius.md,
    minHeight: ControlHeight.md,
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.sm,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
  },
  fullWidth: {
    alignSelf: 'stretch',
  },
  clip: {
    overflow: 'hidden',
  },
  pressed: {
    opacity: 0.7,
  },
  disabled: {
    opacity: 0.5,
  },
});
