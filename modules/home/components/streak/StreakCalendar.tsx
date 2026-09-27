import { useMemo } from 'react';
import { View } from 'react-native';
import { Calendar, type CalendarProps } from 'react-native-calendars';
import { useTranslation } from 'react-i18next';

import { Colors, Typography } from '../../../../lib/ui';
import { applyCalendarLocale, toDayKey } from '../../utils';
import { StreakDay } from './StreakDay';

const theme: CalendarProps['theme'] = {
  calendarBackground: 'transparent',
  textSectionTitleColor: Colors.tertiary[400],
  textDayHeaderFontFamily: Typography.label3P.fontFamily,
  textDayHeaderFontSize: Typography.label3P.fontSize,
};

export interface StreakCalendarProps {
  loggedDays: string[];
  now: Date;
  label: string;
}

export function StreakCalendar({ loggedDays, now, label }: StreakCalendarProps) {
  const { i18n } = useTranslation();
  const todayKey = toDayKey(now);

  applyCalendarLocale(i18n.language);

  const markedDates = useMemo(
    () => Object.fromEntries(loggedDays.map((day) => [day, { marked: true }])),
    [loggedDays],
  );

  return (
    <View accessible accessibilityLabel={label}>
      <View importantForAccessibility="no-hide-descendants" accessibilityElementsHidden>
        <Calendar
          key={`${i18n.language}-${todayKey.slice(0, 7)}`}
          initialDate={todayKey}
          maxDate={todayKey}
          markedDates={markedDates}
          dayComponent={StreakDay}
          renderHeader={() => null}
          hideArrows
          hideExtraDays
          disableMonthChange
          enableSwipeMonths={false}
          theme={theme}
        />
      </View>
    </View>
  );
}
