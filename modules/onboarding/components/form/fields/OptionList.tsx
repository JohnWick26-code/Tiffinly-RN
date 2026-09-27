import type { ReactElement } from 'react';
import { useField } from 'formik';
import { StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import type { PreferenceOptionDomain } from '../../../api';
import { Spacing, TextInput } from '../../../../../lib/ui';
import { OptionGrid } from '../../options';

export interface OptionListProps {
  name: string;
  multiSelect: boolean;
  otherName?: string;
  options: PreferenceOptionDomain[];
  header?: ReactElement | null;
  empty?: ReactElement | null;
}

export function OptionList({
  name,
  multiSelect,
  otherName,
  options,
  header,
  empty,
}: OptionListProps) {
  const { t } = useTranslation();
  const [field, , helpers] = useField<string[]>(name);
  const selectedIds = field.value ?? [];

  const toggle = (id: string) => {
    if (!multiSelect) {
      helpers.setValue([id]);
      return;
    }

    helpers.setValue(
      selectedIds.includes(id)
        ? selectedIds.filter((value) => value !== id)
        : [...selectedIds, id],
    );
  };

  const showOtherInput =
    Boolean(otherName) &&
    options.some(
      (option) => option.allowsCustomText && selectedIds.includes(option.id),
    );

  return (
    <OptionGrid
      options={options}
      selectedIds={selectedIds}
      onToggle={toggle}
      header={header}
      empty={empty}
      footer={
        showOtherInput && otherName ? (
          <View style={styles.footer}>
            <OtherInput
              name={otherName}
              placeholder={t('onboarding.field.other')}
            />
          </View>
        ) : null
      }
    />
  );
}

function OtherInput({
  name,
  placeholder,
}: {
  name: string;
  placeholder: string;
}) {
  const [field, , helpers] = useField<string>(name);

  return (
    <TextInput
      value={field.value ?? ''}
      onChangeText={helpers.setValue}
      placeholder={placeholder}
      accessibilityLabel={placeholder}
    />
  );
}

const styles = StyleSheet.create({
  footer: {
    paddingTop: Spacing.lg,
  },
});
