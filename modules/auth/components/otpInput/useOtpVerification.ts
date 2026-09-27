import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { login } from '../../../../lib/store';
import { isValidOtp } from '../../utils';
import { useUserInfo, useVerifyOtp } from '../../api';

export function useOtpVerification(length: number) {
  const { t } = useTranslation();
  const { mutate, isPending } = useVerifyOtp();
  const { refetch: fetchUserInfo } = useUserInfo({
    enabled: false,
  });
  const [error, setError] = useState<string | undefined>(undefined);

  const clearError = useCallback(() => setError(undefined), []);

  const verify = useCallback(
    (phone: string, code: string) => {
      if (!isValidOtp(code, length)) {
        setError(t('auth.enterCompleteCode'));
        return;
      }
      setError(undefined);
      mutate(
        { phone: `${phone}`, otp: code },
        {
          onSuccess: ({
            success,
            accessToken,
            refreshToken,
            onboardingStep,
            isOnboardingCompleted,
          }) => {
            if (!success || !accessToken) {
              setError(t('auth.invalidOtp'));
              return;
            }
            login(
              { accessToken, refreshToken },
              { onboardingStep, isOnboardingCompleted },
            );
            fetchUserInfo();
          },
          onError: () => setError(t('auth.invalidOtp')),
        },
      );
    },
    [mutate, length, t, fetchUserInfo],
  );

  return { verify, error, loading: isPending, clearError };
}
