import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useMobile } from '../mobileNumberInput';
import { useOtp, useOtpVerification } from '../otpInput';
import { useSendOtp } from '../../api';

export type AuthPhase = 'mobile' | 'otp';

export function useAuthenticationFlow() {
  const { t } = useTranslation();
  const [phase, setPhase] = useState<AuthPhase>('mobile');
  const [sendError, setSendError] = useState<string | undefined>(undefined);
  const mobile = useMobile();
  const otp = useOtp();
  const sendOtp = useSendOtp();
  const verification = useOtpVerification(otp.length);

  const submitMobile = useCallback(() => {
    if (!mobile.isValid || sendOtp.isPending) return;

    setSendError(undefined);
    sendOtp.mutate(
      { phone: mobile.value },
      {
        onSuccess: () => {
          otp.reset();
          setPhase('otp');
        },
        onError: () => setSendError(t('auth.sendFailed')),
      },
    );
  }, [mobile.isValid, mobile.value, otp.reset, sendOtp, t]);

  const onChangeMobileText = useCallback(
    (text: string) => {
      setSendError(undefined);
      mobile.onChangeText(text);
    },
    [mobile.onChangeText],
  );

  const changeMobile = useCallback(() => {
    otp.reset();
    mobile.reset();
    verification.clearError();
    setSendError(undefined);
    setPhase('mobile');
  }, [mobile.reset, otp.reset, verification.clearError]);

  const resend = useCallback(() => {
    otp.reset();
    verification.clearError();
    submitMobile();
  }, [otp.reset, submitMobile, verification.clearError]);

  useEffect(() => {
    if (phase === 'otp' && otp.isComplete) {
      verification.verify(mobile.value, otp.value);
    }
  }, [phase, otp.isComplete, otp.value, mobile.value]);

  return {
    phase,
    mobile: { ...mobile, onChangeText: onChangeMobileText },
    otp,
    verification,
    sendError,
    submitMobile,
    changeMobile,
    resend,
    sending: sendOtp.isPending,
  };
}
