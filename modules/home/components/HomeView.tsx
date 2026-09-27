import { useCallback, useRef } from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useFocusEffect } from '@react-navigation/native';
import type { BottomSheetModal } from '@gorhom/bottom-sheet';

import { useUserStore } from '../../../lib/store';
import { Colors, Spacing } from '../../../lib/ui';
import { useCookingStreak, useInventory, useNow } from '../hooks';
import { dayPartOf, firstNameOf } from '../utils';
import { HomeHero } from './header';
import { InventoryCard, InventorySheet } from './inventory';
import { StreakCard } from './streak';

export function HomeView() {
  const user = useUserStore((s) => s.user);
  const now = useNow();
  const streak = useCookingStreak(user?.id, now);
  const { items, itemIds, toggle } = useInventory(user?.id);
  const tabBarHeight = useBottomTabBarHeight();
  const sheetRef = useRef<BottomSheetModal>(null);

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('light-content');

      return () => StatusBar.setBarStyle('dark-content');
    }, []),
  );

  return (
    <View style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: tabBarHeight + Spacing.xl }}
      >
        <HomeHero name={firstNameOf(user?.name)} dayPart={dayPartOf(now)} />

        <View style={styles.content}>
          <InventoryCard items={items} onEdit={() => sheetRef.current?.present()} />
          <StreakCard streak={streak} now={now} />
        </View>
      </ScrollView>

      <InventorySheet
        ref={sheetRef}
        selectedIds={itemIds}
        onToggle={toggle}
        onDone={() => sheetRef.current?.dismiss()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.tertiary[50],
  },
  content: {
    gap: Spacing.xl,
    marginTop: -(Spacing.giant + Spacing.lg),
    paddingHorizontal: Spacing.lg,
  },
});
