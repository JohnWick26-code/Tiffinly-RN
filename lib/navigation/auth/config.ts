import type { ScreenMap } from '../types';
import { OnboardingScreen } from '../../screens';
import type { AuthStackParamList } from './types';

export const AuthNavigatorName = 'Auth' as const;

export const authScreens: ScreenMap<AuthStackParamList> = [
  { name: 'Onboarding', component: OnboardingScreen },
];
