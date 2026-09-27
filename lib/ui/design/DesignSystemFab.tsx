import { useCallback, useRef } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetScrollView,
  type BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DesignSystemContent } from './DesignSystem';
import { designSystemContentStyle } from './designSystemStyles';
import { BottomSheetTextInput } from '../components/TextInput';
import { Text } from '../components/Text';
import { Colors } from '../theme/colors';
import { Elevation } from '../theme/elevation';
import { ControlHeight, Radius, Spacing } from '../theme/spacing';

const SNAP_POINTS = ['92%'];

export const DesignSystemFab = () => {
  const insets = useSafeAreaInsets();
  const sheetRef = useRef<BottomSheetModal>(null);

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
    <>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Open design system"
        onPress={() => sheetRef.current?.present()}
        style={({ pressed }) => [
          styles.fab,
          { bottom: insets.bottom + Spacing.giant + Spacing.lg },
          pressed && styles.pressed,
        ]}
      >
        <Text variant="heading2">🎨</Text>
      </Pressable>

      <BottomSheetModal
        ref={sheetRef}
        snapPoints={SNAP_POINTS}
        enableDynamicSizing={false}
        backdropComponent={renderBackdrop}
        backgroundStyle={styles.sheetBackground}
        handleIndicatorStyle={styles.handleIndicator}
      >
        <BottomSheetScrollView
          contentContainerStyle={[
            designSystemContentStyle,
            { paddingBottom: insets.bottom + Spacing.huge },
          ]}
          showsVerticalScrollIndicator={false}
        >
          <DesignSystemContent Input={BottomSheetTextInput} />
        </BottomSheetScrollView>
      </BottomSheetModal>
    </>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: Spacing.lg,
    height: ControlHeight.lg,
    width: ControlHeight.lg,
    borderRadius: Radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary[600],
    ...Elevation.high,
  },
  pressed: {
    opacity: 0.8,
  },
  sheetBackground: {
    backgroundColor: Colors.white[100],
  },
  handleIndicator: {
    backgroundColor: Colors.tertiary[200],
  },
});
