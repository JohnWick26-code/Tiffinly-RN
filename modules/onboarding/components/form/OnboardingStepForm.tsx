import { Formik, type FormikProps } from 'formik';
import { StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import type { PreferencesDomain } from '../../api';
import type { OnboardingValues } from '../../../../lib/store';
import { LoadingErrorRetryView, Spacing } from '../../../../lib/ui';
import { OptionList, RenderContent } from './fields';
import { OnboardingFooter } from '../layout';
import type { OnboardingStepConfig } from '../../config';

export interface OnboardingStepFormProps {
  config: OnboardingStepConfig;
  initialValues: OnboardingValues;
  preferences?: PreferencesDomain;
  isLoading: boolean;
  isError: boolean;
  isLastStep: boolean;
  isSaving: boolean;
  retry: () => void;
  onSubmit: (values: OnboardingValues, customTextIds: string[]) => void;
}

export function OnboardingStepForm({
  config,
  initialValues,
  preferences,
  isLoading,
  isError,
  isLastStep,
  isSaving,
  retry,
  onSubmit,
}: OnboardingStepFormProps) {
  const { t } = useTranslation();
  const optionsField = config.fields.find((field) => field.kind === 'options');
  const plainFields = config.fields.filter((field) => field.kind !== 'options');
  const options = optionsField
    ? preferences?.[optionsField.name] ?? []
    : [];
  const isEmpty = !isLoading && !isError && options.length === 0;
  const customTextIds = options
    .filter((option) => option.allowsCustomText)
    .map((option) => option.id);

  const canContinue = (values: OnboardingValues) => {
    if (!optionsField) {
      return true;
    }

    const selected = values[optionsField.name];

    return Array.isArray(selected) && selected.length > 0;
  };

  const header = plainFields.length ? (
    <View style={styles.header}>
      {plainFields.map((field) => (
        <RenderContent key={field.name} field={field} options={[]} />
      ))}
    </View>
  ) : null;

  return (
    <Formik<OnboardingValues>
      enableReinitialize
      initialValues={initialValues}
      onSubmit={(values) => onSubmit(values, customTextIds)}
    >
      {({ values, handleSubmit }: FormikProps<OnboardingValues>) => (
        <>
          <View style={styles.body}>
            {optionsField ? (
              <OptionList
                name={optionsField.name}
                multiSelect={optionsField.multiSelect}
                otherName={optionsField.otherName}
                options={options}
                header={header}
                empty={
                  <LoadingErrorRetryView
                    loading={isLoading}
                    error={isError}
                    noData={isEmpty}
                    retry={retry}
                    errorMessage={t('onboarding.loadFailed')}
                    noDataMessage={t('onboarding.empty')}
                  />
                }
              />
            ) : (
              header
            )}
          </View>

          <OnboardingFooter
            canContinue={canContinue(values)}
            isLastStep={isLastStep}
            isSaving={isSaving}
            onNext={handleSubmit}
          />
        </>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  header: {
    gap: Spacing.xl,
    paddingBottom: Spacing.lg,
  },
});
