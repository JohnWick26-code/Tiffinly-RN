import { Host, List as NativeList, type ListProps as NativeListProps } from '@expo/ui';
import { StyleSheet, type StyleProp, type ViewStyle } from 'react-native';

export type ListProps = NativeListProps & {
  containerStyle?: StyleProp<ViewStyle>;
};

export function List({ containerStyle, ...props }: ListProps) {
  return (
    <Host style={[styles.host, containerStyle]}>
      <NativeList {...props} />
    </Host>
  );
}

const styles = StyleSheet.create({
  host: {
    flex: 1,
  },
});
