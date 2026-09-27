import { forwardRef, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
  type BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';

import { Button, Colors, Radius, Spacing, Text } from '../../../../lib/ui';

export interface LogoutSheetProps {
  onClose: () => void;
  onConfirm: () => void;
}

export const LogoutSheet = forwardRef<BottomSheetModal, LogoutSheetProps>(
  ({ onClose, onConfirm }, ref) => {
    const { t } = useTranslation();
    const insets = useSafeAreaInsets();

    const renderBackdrop = useCallback(
      (props: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
          {...props}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          pressBehavior="close"
        />
      ),
      [],
    );

    return (
      <BottomSheetModal
        ref={ref}
        enableDynamicSizing
        backdropComponent={renderBackdrop}
        backgroundStyle={styles.sheet}
        handleIndicatorStyle={styles.handle}
      >
        <BottomSheetView
          style={[
            styles.content,
            { paddingBottom: insets.bottom + Spacing.xl },
          ]}
        >
          <View style={styles.copy}>
            <Text variant="heading3" style={styles.centered}>
              {t('profile.logoutTitle')}
            </Text>

            <Text
              variant="body2"
              color={Colors.tertiary[400]}
              style={styles.centered}
            >
              {t('profile.logoutConfirm')}
            </Text>
          </View>

          <View style={styles.actions}>
            <Button
              fullWidth
              onPress={onClose}
              textProps={{ variant: 'label1P' }}
            >
              {t('profile.close')}
            </Button>

            <Button
              fullWidth
              variant="outline"
              color={Colors.failure[600]}
              onPress={onConfirm}
              textProps={{ variant: 'label1P' }}
            >
              {t('profile.exit')}
            </Button>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    );
  },
);

LogoutSheet.displayName = 'LogoutSheet';

const styles = StyleSheet.create({
  sheet: {
    backgroundColor: Colors.white[100],
    borderTopLeftRadius: Radius.xl,
    borderTopRightRadius: Radius.xl,
  },
  handle: {
    backgroundColor: Colors.tertiary[100],
  },
  content: {
    gap: Spacing.xl,
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.sm,
  },
  copy: {
    gap: Spacing.sm,
  },
  centered: {
    textAlign: 'center',
  },
  actions: {
    gap: Spacing.md,
  },
});
