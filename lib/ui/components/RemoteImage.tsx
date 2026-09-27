import { useState, type ReactNode } from 'react';
import { SvgUri } from 'react-native-svg';

import { Image } from './Image';

export interface RemoteImageProps {
  uri?: string | null;
  size: number;
  fallback?: ReactNode;
}

export function RemoteImage({ uri, size, fallback = null }: RemoteImageProps) {
  const [failedUri, setFailedUri] = useState<string | null>(null);

  if (!uri || failedUri === uri) {
    return <>{fallback}</>;
  }

  if (uri.toLowerCase().endsWith('.svg')) {
    return (
      <SvgUri
        uri={uri}
        width={size}
        height={size}
        onError={() => setFailedUri(uri)}
      />
    );
  }

  return (
    <Image
      source={{ uri }}
      style={{ width: size, height: size }}
      resizeMode="contain"
      onError={() => setFailedUri(uri)}
    />
  );
}
