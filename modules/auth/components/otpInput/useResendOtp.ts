import { useCallback, useEffect, useState } from 'react';

import { RESEND_SECONDS } from '../../constants';

export function useResendOtp(onResend: () => void, seconds: number = RESEND_SECONDS) {
  const [secondsLeft, setSecondsLeft] = useState(seconds);

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const id = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(id);
  }, [secondsLeft]);

  const canResend = secondsLeft <= 0;

  const resend = useCallback(() => {
    if (!canResend) return;
    onResend();
    setSecondsLeft(seconds);
  }, [canResend, onResend, seconds]);

  return { secondsLeft, canResend, resend };
}
