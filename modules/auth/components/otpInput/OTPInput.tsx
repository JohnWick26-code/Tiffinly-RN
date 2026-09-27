import { StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Button, Colors, Spacing, Text } from '../../../../lib/ui';
import { OTPField } from './OTPField';
import { useResendOtp } from './useResendOtp';

export interface OTPInputProps {
  value: string;
  onChange: (value: string) => void;
  length: number;
  phoneLabel: string;
  error?: string;
  loading?: boolean;
  sending?: boolean;
  onResend: () => void;
  onChangeNumber: () => void;
}

export function OTPInput({
  value,
  onChange,
  length,
  phoneLabel,
  error,
  loading = false,
  sending = false,
  onResend,
  onChangeNumber,
}: OTPInputProps) {
  const { t } = useTranslation();
  const { secondsLeft, canResend, resend } = useResendOtp(onResend);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text variant="label2" color={Colors.tertiary[400]} style={styles.destination}>
          {t('auth.codeSentTo', { phone: phoneLabel })}
        </Text>

        <Button
          variant="text"
          onPress={onChangeNumber}
          disabled={loading || sending}
          textProps={{ variant: 'label2P' }}
          accessibilityLabel={t('auth.changeNumberLabel')}
        >
          {t('auth.changeNumber')}
        </Button>
      </View>

      <OTPField
        value={value}
        onChange={onChange}
        length={length}
        errorMessage={error}
        loading={loading}
        autoFocus
      />

      <View style={styles.resend}>
        {canResend ? (
          <Button variant="text" onPress={resend} disabled={sending || loading}>
            {sending ? t('auth.sending') : t('auth.resendCode')}
          </Button>
        ) : (
          <Text variant="caption1" color={Colors.tertiary[400]}>
            {t('auth.resendIn', { time: `0:${String(secondsLeft).padStart(2, '0')}` })}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: Spacing.md },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.sm,
  },
  destination: { flexShrink: 1 },
  resend: { alignItems: 'center' },
});
