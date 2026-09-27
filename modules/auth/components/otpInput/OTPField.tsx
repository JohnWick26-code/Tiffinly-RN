import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import {
  CodeField,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { useTranslation } from 'react-i18next';

import { Colors, Spacing, Text } from '../../../../lib/ui';
import { OTP_LENGTH } from '../../constants';
import { OtpCell } from './OtpCell';

export interface OTPFieldProps {
  value: string;
  onChange: (value: string) => void;
  length?: number;
  autoFocus?: boolean;
  label?: string;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  loading?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  testID?: string;
}

export function OTPField({
  value,
  onChange,
  length = OTP_LENGTH,
  autoFocus = false,
  label,
  error = false,
  errorMessage,
  disabled = false,
  loading = false,
  containerStyle,
  testID,
}: OTPFieldProps) {
  const { t } = useTranslation();
  const hasError = error || errorMessage != null;
  const locked = disabled || loading;
  const ref = useBlurOnFulfill({ value, cellCount: length });
  const [clearByFocusProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue: onChange,
  });

  return (
    <View style={[styles.field, containerStyle]}>
      {label ? (
        <Text variant="label3P" color={Colors.tertiary[600]}>
          {label}
        </Text>
      ) : null}

      <View style={[styles.body, locked && styles.disabled]}>
        <CodeField
          ref={ref}
          {...clearByFocusProps}
          value={value}
          onChangeText={onChange}
          cellCount={length}
          rootStyle={styles.root}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          autoComplete={Platform.OS === 'android' ? 'sms-otp' : undefined}
          autoFocus={autoFocus}
          editable={!locked}
          testID={testID}
          accessibilityLabel={label ?? t('auth.otpHint', { count: length })}
          renderCell={({ index, symbol, isFocused }) => (
            <OtpCell
              key={index}
              symbol={symbol}
              isFocused={isFocused && !locked}
              hasError={hasError}
              onLayout={getCellOnLayoutHandler(index)}
            />
          )}
        />

        {loading ? (
          <View style={[StyleSheet.absoluteFill, styles.center]} pointerEvents="none">
            <ActivityIndicator color={Colors.primary[600]} />
          </View>
        ) : null}
      </View>

      {errorMessage ? (
        <Text variant="caption2" color={Colors.failure[600]}>
          {errorMessage}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  field: { gap: Spacing.sm },
  body: { position: 'relative' },
  root: { flexDirection: 'row', justifyContent: 'space-between', gap: Spacing.sm },
  disabled: { opacity: 0.5 },
  center: { alignItems: 'center', justifyContent: 'center' },
});
