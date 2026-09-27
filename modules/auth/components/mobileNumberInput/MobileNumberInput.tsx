import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Button, Colors, Spacing, Text, TextInput } from '../../../../lib/ui';
import { COUNTRY_CODE, MOBILE_LENGTH } from '../../constants';

export interface MobileNumberInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onSubmit: () => void;
  isValid: boolean;
  loading?: boolean;
  errorMessage?: string;
}

export function MobileNumberInput({
  value,
  onChangeText,
  onSubmit,
  isValid,
  loading = false,
  errorMessage,
}: MobileNumberInputProps) {
  const { t } = useTranslation();
  const [touched, setTouched] = useState(false);

  const localError =
    touched && value.length > 0 && !isValid ? t('auth.invalidMobile') : undefined;

  return (
    <View style={styles.container}>
      <View style={styles.intro}>
        <Text variant="heading2">{t('auth.enterMobileNumber')}</Text>
        <Text variant="caption1" color={Colors.tertiary[400]}>
          {t('auth.mobileNumberHelp')}
        </Text>
      </View>

      <TextInput
        value={value}
        onChangeText={onChangeText}
        onBlur={() => setTouched(true)}
        keyboardType="phone-pad"
        textContentType="telephoneNumber"
        autoComplete="tel"
        autoFocus
        placeholder={t('auth.mobileNumberPlaceholder')}
        maxLength={MOBILE_LENGTH}
        editable={!loading}
        returnKeyType="done"
        onSubmitEditing={onSubmit}
        errorMessage={errorMessage ?? localError}
        accessibilityLabel={t('auth.enterMobileNumber')}
        leadingIcon={
          <Text variant="label1P" color={Colors.tertiary[600]}>
            {COUNTRY_CODE}
          </Text>
        }
      />

      <Button
        fullWidth
        disabled={!isValid || loading}
        onPress={onSubmit}
        textProps={{ variant: 'label1P' }}
      >
        {loading ? t('auth.sending') : t('auth.continue')}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: Spacing.lg },
  intro: { gap: Spacing.xs },
});
