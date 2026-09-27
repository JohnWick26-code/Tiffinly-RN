import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import {
  SafeAreaView,
  Edge,
} from 'react-native-safe-area-context';

type SafeAreaViewWrapperProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  edges?: Edge[];
};

export function SafeAreaViewWrapper({
  children,
  style,
  edges = ['top'],
}: SafeAreaViewWrapperProps) {
  return (
    <SafeAreaView
      edges={edges}
      style={[
        {
          flex: 1,
        },
        style,
      ]}
    >
      {children}
    </SafeAreaView>
  );
}