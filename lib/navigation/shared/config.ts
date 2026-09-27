import type { ComponentType } from 'react';
import { Compass, Home, ProfileCircle } from 'iconoir-react-native';
import type { SvgProps } from 'react-native-svg';

import { ExploreScreen, HomeScreen, ProfileScreen } from '../../screens/shared';
import type { SharedStackParamList } from './types';

export const SharedNavigatorName = 'Shared' as const;

export interface SharedTab {
  name: keyof SharedStackParamList;
  component: ComponentType<object>;
  icon: ComponentType<SvgProps>;
  labelKey: string;
  lifted?: boolean;
  dark?: boolean;
}

export const sharedTabs: SharedTab[] = [
  { name: 'Home', component: HomeScreen, icon: Home, labelKey: 'tabs.home' },
  { name: 'Explore', component: ExploreScreen, icon: Compass, labelKey: 'tabs.explore', lifted: true, dark: true },
  { name: 'Profile', component: ProfileScreen, icon: ProfileCircle, labelKey: 'tabs.profile' },
];
