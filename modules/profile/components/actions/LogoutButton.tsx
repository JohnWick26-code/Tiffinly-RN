import { useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import type { BottomSheetModal } from '@gorhom/bottom-sheet';

import { clearOnboardingDraft, logout } from '../../../../lib/store';
import { Button, Colors } from '../../../../lib/ui';
import { LogoutSheet } from './LogoutSheet';

export function LogoutButton() {
  const { t } = useTranslation();
  const sheetRef = useRef<BottomSheetModal>(null);

  const open = useCallback(() => sheetRef.current?.present(), []);
  const close = useCallback(() => sheetRef.current?.dismiss(), []);

  const confirm = useCallback(() => {
    sheetRef.current?.dismiss();
    clearOnboardingDraft();
    logout();
  }, []);

  return (
    <>
      <Button
        fullWidth
        variant="outline"
        color={Colors.failure[600]}
        onPress={open}
        textProps={{ variant: 'label1P' }}
      >
        {t('profile.logout')}
      </Button>

      <LogoutSheet ref={sheetRef} onClose={close} onConfirm={confirm} />
    </>
  );
}
