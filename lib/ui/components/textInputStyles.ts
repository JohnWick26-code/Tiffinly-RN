import { StyleSheet, type StyleProp, type TextStyle, type ViewStyle } from 'react-native';
import type { TextInputProps as RNTextInputProps } from 'react-native';
import type { ReactNode } from 'react';

import { Colors } from '../theme/colors';
import type { TypographyVariant } from '../theme/typography';
import { BorderWidth, ControlHeight, Radius, Spacing } from '../theme/spacing';

export type TextInputVariant = 'filled' | 'outline';

export interface TextInputProps extends Omit<RNTextInputProps, 'style'> {
  variant?: TextInputVariant;
  typography?: TypographyVariant;
  label?: string;
  errorMessage?: string;
  error?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
}

export function resolveSurface(
  variant: TextInputVariant,
  hasError: boolean,
): ViewStyle {
  if (variant === 'filled') {
    return {
      backgroundColor: hasError ? Colors.failure[50] : Colors.tertiary[50],
    };
  }

  return {
    borderWidth: BorderWidth.hairline,
    borderColor: hasError ? Colors.failure[400] : Colors.tertiary[100],
    backgroundColor: Colors.white[100],
  };
}

export const textInputStyles = StyleSheet.create({
  field: {
    gap: Spacing.sm,
  },
  container: {
    minHeight: ControlHeight.lg,
    borderRadius: Radius.md,
    paddingHorizontal: Spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  input: {
    flex: 1,
    color: Colors.tertiary[800],
    paddingVertical: Spacing.md,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
});
