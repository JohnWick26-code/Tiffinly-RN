import {
  Host,
  Picker as NativePicker,
  type PickerProps as NativePickerProps,
  type PickerItemValue,
} from '@expo/ui';
import { StyleSheet, type StyleProp, type ViewStyle } from 'react-native';

export type PickerProps<T extends PickerItemValue = PickerItemValue> =
  NativePickerProps<T> & {
    containerStyle?: StyleProp<ViewStyle>;
  };

export type { PickerItemValue, PickerItemProps, PickerAppearance } from '@expo/ui';

function PickerImpl<T extends PickerItemValue>({
  containerStyle,
  ...props
}: PickerProps<T>) {
  return (
    <Host matchContents style={[styles.host, containerStyle]}>
      <NativePicker {...props} />
    </Host>
  );
}

const styles = StyleSheet.create({
  host: {
    alignSelf: 'stretch',
  },
});

export const Picker = Object.assign(PickerImpl, {
  Item: NativePicker.Item,
}) as typeof PickerImpl & { Item: typeof NativePicker.Item };
