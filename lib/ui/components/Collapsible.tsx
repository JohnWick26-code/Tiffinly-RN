import {
  Host,
  Collapsible as NativeCollapsible,
  type CollapsibleProps as NativeCollapsibleProps,
} from '@expo/ui';
import { StyleSheet, type StyleProp, type ViewStyle } from 'react-native';

export type CollapsibleProps = NativeCollapsibleProps & {
  containerStyle?: StyleProp<ViewStyle>;
};

export function Collapsible({ containerStyle, ...props }: CollapsibleProps) {
  return (
    <Host matchContents style={[styles.host, containerStyle]}>
      <NativeCollapsible {...props} />
    </Host>
  );
}

const styles = StyleSheet.create({
  host: {
    alignSelf: 'stretch',
  },
});
