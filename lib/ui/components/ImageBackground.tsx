import {
    ImageBackground as RNImageBackground,
    type ImageBackgroundProps,
  } from 'react-native';
  
  export type ImageBackgroundPropsType =
    ImageBackgroundProps;
  
  export function ImageBackground({
    children,
    ...props
  }: ImageBackgroundPropsType) {
    return (
      <RNImageBackground {...props}>
        {children}
      </RNImageBackground>
    );
  }