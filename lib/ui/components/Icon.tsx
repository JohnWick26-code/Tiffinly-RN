import React from 'react';
import type { SvgProps } from 'react-native-svg';

import { Colors } from '../theme/colors';
import { IconSize, type IconSizeToken } from '../theme/spacing';

export type IconComponent = React.ComponentType<SvgProps>;

export interface IconProps extends SvgProps {
  icon: IconComponent;
  size?: IconSizeToken;
}

export function Icon({
  icon: IconComponent,
  size = 'md',
  color = Colors.tertiary[800],
  ...props
}: IconProps) {
  const dimension = IconSize[size];

  return (
    <IconComponent
      width={dimension}
      height={dimension}
      color={color}
      {...props}
    />
  );
}
