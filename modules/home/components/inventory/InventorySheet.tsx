import { forwardRef, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetScrollView,
  type BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';

import { Button, Colors, Radius, Spacing, Text } from '../../../../lib/ui';
import { ingredients, type IngredientId } from '../../data';
import { ChipGrid } from './ChipGrid';
import { InventoryChip } from './InventoryChip';

export interface InventorySheetProps {
  selectedIds: readonly string[];
  onToggle: (id: IngredientId) => void;
  onDone: () => void;
}

export const InventorySheet = forwardRef<BottomSheetModal, InventorySheetProps>(
  ({ selectedIds, onToggle, onDone }, ref) => {
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
        snapPoints={['85%']}
        enableDynamicSizing={false}
        backdropComponent={renderBackdrop}
        backgroundStyle={styles.sheet}
        handleIndicatorStyle={styles.handle}
      >
        <View style={styles.header}>
          <Text variant="heading3">{t('home.pantrySheetTitle')}</Text>
          <Text variant="body2" color={Colors.tertiary[400]}>
            {t('home.pantrySheetSubtitle')}
          </Text>
        </View>

        <BottomSheetScrollView contentContainerStyle={styles.content}>
          <ChipGrid>
            {ingredients.map(({ id, emoji }) => (
              <InventoryChip
                key={id}
                variant="plain"
                emoji={emoji}
                label={t(`home.ingredients.${id}`)}
                selected={selectedIds.includes(id)}
                onPress={() => onToggle(id)}
              />
            ))}
          </ChipGrid>
        </BottomSheetScrollView>

        <View style={[styles.footer, { paddingBottom: insets.bottom + Spacing.lg }]}>
          <Button fullWidth onPress={onDone} textProps={{ variant: 'label1P' }}>
            {t('home.done')}
          </Button>
        </View>
      </BottomSheetModal>
    );
  },
);

InventorySheet.displayName = 'InventorySheet';

const styles = StyleSheet.create({
  sheet: {
    backgroundColor: Colors.white[100],
    borderTopLeftRadius: Radius.xl,
    borderTopRightRadius: Radius.xl,
  },
  handle: {
    backgroundColor: Colors.tertiary[100],
  },
  header: {
    gap: Spacing.xs,
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.sm,
    paddingBottom: Spacing.lg,
  },
  content: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.lg,
  },
  footer: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.md,
    borderTopWidth: 1,
    borderTopColor: Colors.tertiary[50],
  },
});
