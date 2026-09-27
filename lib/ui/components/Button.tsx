import { type ReactNode } from 'react';
import {
  Pressable,
  StyleSheet,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Text, type TextProps } from './Text';
import { Colors } from '../theme/colors';
import {
  buttonStyles as styles,
  resolveSurface,
  resolveTextColor,
  type ButtonVariant,
} from './buttonStyles';

export type { ButtonVariant };

export interface ButtonProps {
  children: string;
  variant?: ButtonVariant;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  color?: string;
  textColor?: string;
  gradientColors?: readonly [string, string, ...string[]];
  textProps?: Partial<TextProps>;
  containerStyle?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
  testID?: string;
  accessibilityLabel?: string;
}

export function Button({
  children,
  variant = 'filled',
  leadingIcon,
  trailingIcon,
  disabled = false,
  fullWidth = false,
  color = Colors.primary[600],
  textColor,
  gradientColors = [
    Colors.primary[400],
    Colors.primary[600],
  ],
  textProps,
  containerStyle,
  contentContainerStyle,
  onPress,
  testID,
  accessibilityLabel,
}: ButtonProps) {
  const isGradient = variant === 'gradient';

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? children}
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={onPress}
      testID={testID}
      style={({ pressed }) => [
        styles.base,
        isGradient && styles.clip,
        fullWidth && styles.fullWidth,
        resolveSurface(variant, color),
        pressed && styles.pressed,
        disabled && styles.disabled,
        containerStyle,
      ]}
    >
      {isGradient && (
        <LinearGradient
          colors={gradientColors}
          style={StyleSheet.absoluteFill}
        />
      )}

      <View
        style={[
          styles.content,
          contentContainerStyle,
        ]}
      >
        {leadingIcon}

        <Text
          {...textProps}
          color={resolveTextColor(variant, color, textColor)}
          style={textProps?.style}
        >
          {children}
        </Text>

        {trailingIcon}
      </View>
    </Pressable>
  );
}
