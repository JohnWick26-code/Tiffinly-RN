import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';

import { Spacing } from '../../../../lib/ui';
import { formatMobileWithCode } from '../../utils';
import { IntroSlider } from '../introSlider';
import { MobileNumberInput } from '../mobileNumberInput';
import { OTPInput } from '../otpInput';
import { useAuthenticationFlow } from './useAuthenticationFlow';

export function AuthFlow() {
  const {
    phase,
    mobile,
    otp,
    verification,
    sendError,
    submitMobile,
    changeMobile,
    resend,
    sending,
  } = useAuthenticationFlow();

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.slider}>
        <IntroSlider />
      </View>

      <View style={styles.panel}>
        {phase === 'mobile' ? (
          <MobileNumberInput
            value={mobile.value}
            onChangeText={mobile.onChangeText}
            onSubmit={submitMobile}
            isValid={mobile.isValid}
            loading={sending}
            errorMessage={sendError}
          />
        ) : (
          <OTPInput
            value={otp.value}
            onChange={otp.onChange}
            length={otp.length}
            phoneLabel={formatMobileWithCode(mobile.value)}
            error={verification.error}
            loading={verification.loading}
            sending={sending}
            onResend={resend}
            onChangeNumber={changeMobile}
          />
        )}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  slider: {
    flex: 1,
    minHeight: Spacing.giant * 2,
  },
  panel: {
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing.lg,
    paddingBottom: Spacing.xl,
  },
});
