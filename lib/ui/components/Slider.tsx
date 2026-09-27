import { useState } from 'react';
import { StyleSheet, View, type LayoutChangeEvent, type StyleProp, type ViewStyle } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

import { Colors } from '../theme/colors';
import { Elevation } from '../theme/elevation';
import { BorderWidth, ControlHeight, Radius, Spacing } from '../theme/spacing';

const THUMB = Spacing.xl;
const TRACK = Spacing.sm;

export interface SliderProps {
  value: number;
  onValueChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  testID?: string;
}

export function Slider({
  value,
  onValueChange,
  min = 0,
  max = 1,
  step,
  disabled = false,
  containerStyle,
  testID,
}: SliderProps) {
  const [width, setWidth] = useState(0);
  const span = max - min;
  const ratio = span > 0 ? Math.min(Math.max((value - min) / span, 0), 1) : 0;

  const onLayout = (event: LayoutChangeEvent) =>
    setWidth(event.nativeEvent.layout.width);

  const commit = (x: number) => {
    if (width <= 0) {
      return;
    }

    const raw = min + (x / width) * span;
    const clamped = Math.min(Math.max(raw, min), max);
    const next = step ? Math.round(clamped / step) * step : clamped;

    if (next !== value) {
      onValueChange(next);
    }
  };

  const pan = Gesture.Pan()
    .runOnJS(true)
    .enabled(!disabled)
    .onBegin((event) => commit(event.x))
    .onUpdate((event) => commit(event.x));

  return (
    <GestureDetector gesture={pan}>
      <View
        testID={testID}
        onLayout={onLayout}
        accessibilityRole="adjustable"
        accessibilityValue={{ min, max, now: value }}
        style={[styles.container, disabled && styles.disabled, containerStyle]}
      >
        <View style={styles.track}>
          <View style={[styles.fill, { width: `${ratio * 100}%` }]} />
        </View>

        <View
          style={[styles.thumb, { left: ratio * Math.max(width - THUMB, 0) }]}
        />
      </View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: ControlHeight.sm,
    justifyContent: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
  track: {
    height: TRACK,
    borderRadius: Radius.pill,
    backgroundColor: Colors.tertiary[50],
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: Radius.pill,
    backgroundColor: Colors.primary[400],
  },
  thumb: {
    position: 'absolute',
    width: THUMB,
    height: THUMB,
    borderRadius: Radius.pill,
    backgroundColor: Colors.white[100],
    borderWidth: BorderWidth.thick,
    borderColor: Colors.primary[600],
    ...Elevation.low,
  },
});
