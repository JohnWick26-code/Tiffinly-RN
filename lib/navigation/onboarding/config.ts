import type { ScreenMap } from '../types';
import { onboardingSteps } from '../../../modules/onboarding';
import { OnboardingStepScreen } from '../../screens';
import type { OnboardingStackParamList } from './types';

export const OnboardingNavigatorName = 'Onboarding' as const;

export const onboardingScreens: ScreenMap<OnboardingStackParamList> =
  onboardingSteps.map((item) => ({
    name: item.route,
    component: OnboardingStepScreen,
  }));

export const resolveOnboardingRoute = (
  step?: string | null,
): keyof OnboardingStackParamList => {
  const match = onboardingSteps.find(
    (item) => item.step.toLowerCase() === step?.trim().toLowerCase(),
  );

  return match?.route ?? onboardingSteps[0].route;
};
