import { useMemo, type ReactNode } from 'react';
import {
  Text as RNText,
  type TextProps as RNTextProps,
  type TextStyle,
  type StyleProp,
} from 'react-native';

import { Typography, type TypographyVariant } from '../theme/typography';
import { Colors } from '../theme/colors';

export type TextProps = Omit<RNTextProps, 'style'> & {
  variant?: TypographyVariant;
  children: ReactNode;
  color?: string;
  style?: StyleProp<TextStyle>;
};

export function Text({
  variant = 'body1',
  children,
  color = Colors.tertiary[800],
  style,
  ...rest
}: TextProps) {
  const textStyle = useMemo<TextStyle>(
    () => ({
      ...Typography[variant],
      color,
    }),
    [variant, color],
  );

  return (
    <RNText
      {...rest}
      style={[textStyle, style]}
    >
      {children}
    </RNText>
  );
}