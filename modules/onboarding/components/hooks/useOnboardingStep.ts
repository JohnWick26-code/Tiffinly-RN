import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation, useRoute } from '@react-navigation/native';

import {
  completeOnboarding,
  mergeOnboardingValues,
  setOnboardingStep,
  setUser,
  useOnboardingStore,
  type OnboardingValues,
} from '../../../../lib/store';
import {
  buildInitialValues,
  buildStepPayload,
  findOptionsField,
  findStepByRoute,
  findStepIndex,
  onboardingSteps,
} from '../../config';
import { useUpdateUser } from '../../api';
import { getApiErrorMessage } from '../../../../lib/api';
import { showErrorToast } from '../../../../lib/ui';

export function useOnboardingStep() {
  const { t } = useTranslation();
  const route = useRoute();
  const navigation = useNavigation();
  const config = findStepByRoute(route.name);
  const index = findStepIndex(route.name);
  const stored = useOnboardingStore((s) => s.values);
  const updateUser = useUpdateUser();

  const initialValues = useMemo(
    () => buildInitialValues(config, stored),
    [config, stored],
  );

  const goNext = useCallback(
    async (values: OnboardingValues, customTextIds: string[] = []) => {
      mergeOnboardingValues(values);

      const next = onboardingSteps[index + 1];
      const isLastStep = !next;

      try {
        const result = await updateUser.mutateAsync(
          buildStepPayload({
            config,
            values,
            nextStep: next?.step,
            isLastStep,
            customTextIds,
          }),
        );

        if (result.user) {
          setUser(result.user);
        }
      } catch (error) {
        showErrorToast({
          title: t('onboarding.saveFailed'),
          message: getApiErrorMessage(error, t('common.errorTitle')),
        });

        return;
      }

      if (isLastStep) {
        completeOnboarding();
        return;
      }

      setOnboardingStep(next.step);
      navigation.navigate(next.route as never);
    },
    [config, index, navigation, t, updateUser],
  );

  const goPrevious = useCallback(() => {
    const previous = onboardingSteps[index - 1];

    if (!previous) {
      return false;
    }

    setOnboardingStep(previous.step);

    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate(previous.route as never);
    }

    return true;
  }, [index, navigation]);

  return {
    config,
    index,
    initialValues,
    optionsField: findOptionsField(config),
    canGoBack: index > 0,
    isSaving: updateUser.isPending,
    goNext,
    goPrevious,
  };
}
