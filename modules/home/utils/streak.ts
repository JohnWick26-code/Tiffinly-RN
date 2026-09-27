import { daysInMonth, shiftDays, toDayKey } from './date';

export interface StreakSummary {
  current: number;
  loggedThisMonth: string[];
  daysInMonth: number;
}

export function summarizeStreak(days: string[], now: Date): StreakSummary {
  const logged = new Set(days);
  let cursor = logged.has(toDayKey(now)) ? now : shiftDays(now, -1);
  let current = 0;

  while (logged.has(toDayKey(cursor))) {
    current += 1;
    cursor = shiftDays(cursor, -1);
  }

  const monthPrefix = toDayKey(now).slice(0, 7);

  return {
    current,
    loggedThisMonth: days.filter((day) => day.startsWith(monthPrefix)),
    daysInMonth: daysInMonth(now),
  };
}
