import { useEffect, useMemo } from 'react';

import { useStreakStore } from '../store';
import { summarizeStreak, toDayKey } from '../utils';

const NO_DAYS: string[] = [];

export function useCookingStreak(userId: string | undefined, now: Date) {
  const days = useStreakStore((state) =>
    userId ? state.daysByUser[userId] : undefined,
  );
  const logDay = useStreakStore((state) => state.logDay);
  const todayKey = toDayKey(now);

  useEffect(() => {
    if (userId) logDay(userId, todayKey);
  }, [userId, todayKey, logDay]);

  return useMemo(() => summarizeStreak(days ?? NO_DAYS, now), [days, now]);
}
