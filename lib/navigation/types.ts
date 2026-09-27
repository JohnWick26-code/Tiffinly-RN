import type { ComponentType } from 'react';
import type { ParamListBase } from '@react-navigation/native';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';

export type ScreenConfig<ParamList extends ParamListBase> = {
  name: Extract<keyof ParamList, string>;
  component: ComponentType<any>;
  options?: NativeStackNavigationOptions;
};

export type ScreenMap<ParamList extends ParamListBase> =
  ScreenConfig<ParamList>[];
