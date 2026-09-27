import { StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { usePreferences } from '../api';
import { useScreenBackHandler } from '../../../lib/navigation/useScreenBackHandler';
import { SafeAreaViewWrapper, Spacing } from '../../../lib/ui';
import { OnboardingHeader } from './layout';
import { OnboardingStepForm } from './form';
import { onboardingSteps } from '../config';
import { useOnboardingStep } from './hooks';

export function OnboardingFlow() {
  const { t } = useTranslation();
  const {
    config,
    index,
    initialValues,
    optionsField,
    canGoBack,
    isSaving,
    goNext,
    goPrevious,
  } = useOnboardingStep();
  const { data, isPending, isError, refetch } = usePreferences(config.step);

  useScreenBackHandler(goPrevious);

  const total = onboardingSteps.length;
  const multiSelect =
    optionsField?.kind === 'options' ? optionsField.multiSelect : false;

  return (
    <SafeAreaViewWrapper>
      <View style={styles.screen}>
        <OnboardingHeader
          current={index + 1}
          total={total}
          canGoBack={canGoBack}
          title={t(`onboarding.title.${config.step}`)}
          subtitle={t(
            multiSelect
              ? 'onboarding.subtitle.multi'
              : 'onboarding.subtitle.single',
          )}
          onBack={goPrevious}
          onSkip={() => goNext(initialValues, [])}
        />

        <OnboardingStepForm
          config={config}
          initialValues={initialValues}
          preferences={data}
          isLoading={isPending}
          isError={isError}
          isLastStep={index === total - 1}
          isSaving={isSaving}
          retry={refetch}
          onSubmit={goNext}
        />
      </View>
    </SafeAreaViewWrapper>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: Spacing.lg,
    gap: Spacing.lg,
  },
});
