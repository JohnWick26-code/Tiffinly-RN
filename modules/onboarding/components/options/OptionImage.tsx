import { RemoteImage, Spacing } from '../../../../lib/ui';

export interface OptionImageProps {
  uri: string;
}

export function OptionImage({ uri }: OptionImageProps) {
  return <RemoteImage uri={uri} size={Spacing.huge} />;
}
