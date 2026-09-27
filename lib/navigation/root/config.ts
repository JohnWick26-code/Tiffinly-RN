import { AuthNavigator } from '../auth';
import { OnboardingNavigator } from '../onboarding';
import { SharedNavigator } from '../shared';
import type { FlowRoute } from './types';

export const RootNavigatorName = 'Root' as const;

export const flowRoutes: FlowRoute[] = [
  {
    name: 'Auth',
    when: (s) => !s.isAuthenticated,
    navigator: AuthNavigator,
  },
  {
    name: 'Onboarding',
    when: (s) => s.isAuthenticated && !s.isOnboardingCompleted,
    navigator: OnboardingNavigator,
  },
  {
    name: 'Shared',
    when: (s) => s.isAuthenticated && s.isOnboardingCompleted,
    navigator: SharedNavigator,
  },
];
