import { useCallback, useMemo } from 'react';

import { ingredients, type IngredientId } from '../data';
import { useInventoryStore } from '../store';

const NO_ITEMS: string[] = [];

export function useInventory(userId: string | undefined) {
  const itemIds = useInventoryStore((state) =>
    userId ? state.itemsByUser[userId] : undefined,
  ) ?? NO_ITEMS;
  const toggleItem = useInventoryStore((state) => state.toggleItem);

  const items = useMemo(
    () => ingredients.filter(({ id }) => itemIds.includes(id)),
    [itemIds],
  );

  const toggle = useCallback(
    (id: IngredientId) => {
      if (userId) toggleItem(userId, id);
    },
    [userId, toggleItem],
  );

  return { items, itemIds, toggle };
}
