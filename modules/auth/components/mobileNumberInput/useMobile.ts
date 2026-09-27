import { useCallback, useMemo, useState } from 'react';

import { isValidMobile, normalizeMobile } from '../../utils';

export function useMobile() {
  const [value, setValue] = useState('');

  const onChangeText = (text: string) => setValue(normalizeMobile(text));

  const isValid = useMemo(() => isValidMobile(value), [value]);
  const reset = useCallback(() => setValue(''), []);

  return { value, onChangeText, isValid, reset };
}
