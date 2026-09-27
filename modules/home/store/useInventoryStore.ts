import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { persistedStorage } from '../../../lib/storage';

interface InventoryState {
  itemsByUser: Record<string, string[]>;
  toggleItem: (userId: string, itemId: string) => void;
}

export const useInventoryStore = create<InventoryState>()(
  persist(
    (set) => ({
      itemsByUser: {},
      toggleItem: (userId, itemId) =>
        set((state) => {
          const items = state.itemsByUser[userId] ?? [];
          const next = items.includes(itemId)
            ? items.filter((id) => id !== itemId)
            : [...items, itemId];

          return { itemsByUser: { ...state.itemsByUser, [userId]: next } };
        }),
    }),
    {
      name: 'pantry-inventory',
      storage: persistedStorage,
    },
  ),
);
