import { Host, Switch as NativeSwitch, type SwitchProps as NativeSwitchProps } from '@expo/ui';
import { StyleSheet, type StyleProp, type ViewStyle } from 'react-native';

export type SwitchProps = NativeSwitchProps & {
  containerStyle?: StyleProp<ViewStyle>;
};

export function Switch({ containerStyle, ...props }: SwitchProps) {
  return (
    <Host matchContents style={[styles.host, containerStyle]}>
      <NativeSwitch {...props} />
    </Host>
  );
}

const styles = StyleSheet.create({
  host: {
    alignSelf: 'flex-start',
  },
});
