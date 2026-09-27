import { Host, Checkbox as NativeCheckbox, type CheckboxProps as NativeCheckboxProps } from '@expo/ui';
import { StyleSheet, type StyleProp, type ViewStyle } from 'react-native';

export type CheckboxProps = NativeCheckboxProps & {
  containerStyle?: StyleProp<ViewStyle>;
};

export function Checkbox({ containerStyle, ...props }: CheckboxProps) {
  return (
    <Host matchContents style={[styles.host, containerStyle]}>
      <NativeCheckbox {...props} />
    </Host>
  );
}

const styles = StyleSheet.create({
  host: {
    alignSelf: 'flex-start',
  },
});
