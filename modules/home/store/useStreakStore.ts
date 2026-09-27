import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { persistedStorage } from '../../../lib/storage';

interface StreakState {
  daysByUser: Record<string, string[]>;
  logDay: (userId: string, dayKey: string) => void;
}

export const useStreakStore = create<StreakState>()(
  persist(
    (set) => ({
      daysByUser: {},
      logDay: (userId, dayKey) =>
        set((state) => {
          const days = state.daysByUser[userId] ?? [];

          if (days.includes(dayKey)) return state;

          return {
            daysByUser: { ...state.daysByUser, [userId]: [...days, dayKey] },
          };
        }),
    }),
    {
      name: 'cooking-streak',
      storage: persistedStorage,
    },
  ),
);
