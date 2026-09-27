import { StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Button, Spacing } from '../../../../lib/ui';

export interface OnboardingFooterProps {
  canContinue: boolean;
  isLastStep: boolean;
  isSaving?: boolean;
  onNext: () => void;
}

export function OnboardingFooter({
  canContinue,
  isLastStep,
  isSaving = false,
  onNext,
}: OnboardingFooterProps) {
  const { t } = useTranslation();

  return (
    <View style={styles.footer}>
      <Button
        fullWidth
        disabled={!canContinue || isSaving}
        onPress={onNext}
        textProps={{ variant: 'label1P' }}
      >
        {isSaving
          ? t('onboarding.saving')
          : isLastStep
            ? t('onboarding.finish')
            : t('onboarding.next')}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    gap: Spacing.md,
  },
});
