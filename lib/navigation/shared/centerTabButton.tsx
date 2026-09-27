import type { ComponentType } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import type { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';

import { Colors, Elevation, Icon, Radius, Spacing } from '../../ui';

const SIZE = 64;

export interface CenterTabButtonProps extends BottomTabBarButtonProps {
  icon: ComponentType<SvgProps>;
}

export function CenterTabButton({
  icon,
  onPress,
  accessibilityState,
  accessibilityLabel,
}: CenterTabButtonProps) {
  const focused = accessibilityState?.selected ?? false;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityState={accessibilityState}
      onPress={onPress}
      style={styles.wrapper}
    >
      <View style={[styles.circle, focused && styles.circleFocused]}>
        <Icon icon={icon} size="xl" color={Colors.white[100]} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  circle: {
    width: SIZE,
    height: SIZE,
    marginTop: -Spacing.xxl,
    borderRadius: Radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary[400],
    borderWidth: Spacing.xs,
    borderColor: Colors.white[100],
    ...Elevation.mid,
  },
  circleFocused: {
    backgroundColor: Colors.primary[600],
  },
});
