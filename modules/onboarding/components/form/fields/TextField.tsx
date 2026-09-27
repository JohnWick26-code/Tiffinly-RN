import { useField } from 'formik';
import { useTranslation } from 'react-i18next';

import { TextInput } from '../../../../../lib/ui';

export interface TextFieldProps {
  name: string;
  labelKey: string;
}

export function TextField({ name, labelKey }: TextFieldProps) {
  const { t } = useTranslation();
  const [field, meta, helpers] = useField<string>(name);
  const label = t(labelKey as never);

  return (
    <TextInput
      label={label}
      value={field.value ?? ''}
      onChangeText={helpers.setValue}
      onBlur={() => helpers.setTouched(true)}
      errorMessage={meta.touched ? meta.error : undefined}
      accessibilityLabel={label}
    />
  );
}
