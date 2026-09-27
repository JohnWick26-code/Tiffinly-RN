import { StyleSheet, View } from 'react-native';
import { FireFlame } from 'iconoir-react-native';
import { useTranslation } from 'react-i18next';

import { Colors, Elevation, Icon, Radius, Spacing, Text } from '../../../../lib/ui';
import type { StreakSummary } from '../../utils';
import { StreakCalendar } from './StreakCalendar';

export interface StreakCardProps {
  streak: StreakSummary;
  now: Date;
}

export function StreakCard({ streak, now }: StreakCardProps) {
  const { t, i18n } = useTranslation();
  const month = now.toLocaleDateString(i18n.language, { month: 'long' });
  const monthSummary = t('home.streak.month', {
    logged: streak.loggedThisMonth.length,
    total: streak.daysInMonth,
    month,
  });

  return (
    <View style={styles.section}>
      <Text variant="heading4" color={Colors.tertiary[600]} accessibilityRole="header">
        {t('home.streak.title')}
      </Text>

      <View style={styles.card}>
        <View style={styles.summary}>
          <View style={styles.flame}>
            <Icon icon={FireFlame} size="lg" color={Colors.secondary[600]} />
          </View>

          <View style={styles.copy}>
            <Text variant="heading3">
              {streak.current > 0
                ? t('home.streak.days', { count: streak.current })
                : t('home.streak.start')}
            </Text>

            <Text variant="caption1" color={Colors.tertiary[400]}>
              {monthSummary}
            </Text>
          </View>
        </View>

        <StreakCalendar loggedDays={streak.loggedThisMonth} now={now} label={monthSummary} />

        <Text variant="caption2" color={Colors.tertiary[200]}>
          {t('home.streak.keepGoing')}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    gap: Spacing.md,
  },
  card: {
    gap: Spacing.lg,
    padding: Spacing.lg,
    borderRadius: Radius.lg,
    backgroundColor: Colors.white[100],
    ...Elevation.low,
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  flame: {
    width: Spacing.huge,
    height: Spacing.huge,
    borderRadius: Radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.secondary[50],
  },
  copy: {
    flex: 1,
  },
});
