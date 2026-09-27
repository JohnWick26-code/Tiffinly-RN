import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { NavArrowDown, NavArrowUp } from 'iconoir-react-native';
import { useTranslation } from 'react-i18next';

import { Colors, Elevation, Icon, Radius, Spacing, Text } from '../../../../lib/ui';
import type { Ingredient } from '../../data';
import { ChipGrid } from './ChipGrid';
import { InventoryChip } from './InventoryChip';

const COLLAPSED_ITEMS = 6;

export interface InventoryCardProps {
  items: readonly Ingredient[];
  onEdit: () => void;
}

export function InventoryCard({ items, onEdit }: InventoryCardProps) {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const hasOverflow = items.length > COLLAPSED_ITEMS;
  const visible = expanded ? items : items.slice(0, COLLAPSED_ITEMS);

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text variant="heading4" accessibilityRole="header">
          {t('home.pantryTitle')}
        </Text>

        {items.length > 0 ? (
          <Pressable accessibilityRole="button" onPress={onEdit} hitSlop={Spacing.md}>
            <Text variant="label2P" color={Colors.primary[600]}>
              {t('home.edit')}
            </Text>
          </Pressable>
        ) : null}
      </View>

      <View style={styles.divider} />

      {items.length === 0 ? (
        <>
          <ChipGrid>
            {[
              <InventoryChip
                key="add"
                variant="dashed"
                label={t('home.addItem')}
                onPress={onEdit}
              />,
            ]}
          </ChipGrid>

          <Text variant="caption1" color={Colors.tertiary[400]}>
            {t('home.pantryEmpty')}
          </Text>
        </>
      ) : (
        <ChipGrid>
          {visible.map(({ id, emoji }) => (
            <InventoryChip
              key={id}
              emoji={emoji}
              label={t(`home.ingredients.${id}`)}
              onPress={onEdit}
            />
          ))}
        </ChipGrid>
      )}

      {hasOverflow ? (
        <Pressable
          accessibilityRole="button"
          accessibilityState={{ expanded }}
          onPress={() => setExpanded((open) => !open)}
          hitSlop={Spacing.sm}
          style={styles.toggle}
        >
          <Text variant="label2P" color={Colors.primary[600]}>
            {expanded
              ? t('home.viewLess')
              : t('home.viewMore', { count: items.length - COLLAPSED_ITEMS })}
          </Text>
          <Icon icon={expanded ? NavArrowUp : NavArrowDown} size="sm" color={Colors.primary[600]} />
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: Spacing.md,
    padding: Spacing.lg,
    borderRadius: Radius.xl,
    backgroundColor: Colors.white[100],
    ...Elevation.mid,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  divider: {
    height: 1,
    backgroundColor: Colors.tertiary[50],
  },
  toggle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.xs,
    paddingTop: Spacing.xs,
  },
});
