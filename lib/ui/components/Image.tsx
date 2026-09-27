import {
    Image as RNImage,
    ImageProps as RNImageProps,
  } from 'react-native';
  
  import {
    Image as ExpoImage,
    ImageProps as ExpoImageProps,
  } from 'expo-image';
  
  import FastImage, {
    FastImageProps,
  } from 'react-native-fast-image';
  
  type ImageEngine =
    | 'react-native'
    | 'expo'
    | 'fast';
  
  type Props = {
    engine?: ImageEngine;
  } & (
    | RNImageProps
    | ExpoImageProps
    | FastImageProps
  );
  
  export function Image({
    engine = 'react-native',
    ...props
  }: Props) {
    switch (engine) {
      case 'expo':
        return (
          <ExpoImage
            cachePolicy="memory-disk"
            {...(props as ExpoImageProps)}
          />
        );
  
      case 'fast':
        return (
          <FastImage
            {...(props as FastImageProps)}
          />
        );
  
      default:
        return (
          <RNImage
            {...(props as RNImageProps)}
          />
        );
    }
  }