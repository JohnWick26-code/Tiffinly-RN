import {
    Pressable as RNPressable,
    type PressableProps,
  } from 'react-native';
  
  export type PressablePropsType =
    PressableProps;
  
  export function Pressable({
    children,
    ...props
  }: PressablePropsType) {
    return (
      <RNPressable {...props}>
        {children}
      </RNPressable>
    );
  }