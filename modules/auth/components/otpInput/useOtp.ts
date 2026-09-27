import { useCallback, useMemo, useState } from 'react';

import { OTP_LENGTH } from '../../constants';
import { isOtpComplete, sanitizeOtp } from '../../utils';

export function useOtp(length: number = OTP_LENGTH) {
  const [value, setValue] = useState('');

  const onChange = useCallback(
    (next: string) => setValue(sanitizeOtp(next, length)),
    [length],
  );

  const reset = useCallback(() => setValue(''), []);

  const isComplete = useMemo(
    () => isOtpComplete(value, length),
    [value, length],
  );

  return { value, onChange, reset, isComplete, length };
}
