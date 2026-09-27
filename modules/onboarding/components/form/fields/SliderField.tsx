import { useField } from 'formik';
import { StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Colors, Slider, Spacing, Text } from '../../../../../lib/ui';

export interface SliderFieldProps {
  name: string;
  labelKey: string;
  min: number;
  max: number;
}

export function SliderField({
  name,
  labelKey,
  min,
  max,
}: SliderFieldProps) {
  const { t } = useTranslation();
  const [field, , helpers] = useField<number>(name);
  const value = field.value ?? min;
  const label = t(labelKey as never);

  return (
    <View style={styles.field}>
      <View style={styles.header}>
        <Text variant="label3P" color={Colors.tertiary[600]}>
          {label}
        </Text>

        <Text variant="label1P" color={Colors.primary[600]}>
          {value}
        </Text>
      </View>

      <Slider
        value={value}
        min={min}
        max={max}
        step={1}
        onValueChange={(next) => {
          helpers.setValue(next);
        }}
      />

      <View style={styles.header}>
        <Text variant="caption3" color={Colors.tertiary[200]}>
          {min}
        </Text>
        <Text variant="caption3" color={Colors.tertiary[200]}>
          {max}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  field: {
    gap: Spacing.sm,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
