import { StyleSheet, View } from 'react-native';
import type { DateData } from 'react-native-calendars';
import type { DayProps } from 'react-native-calendars/src/calendar/day';

import { BorderWidth, Colors, Radius, Spacing, Text } from '../../../../lib/ui';

const DOT_SIZE = Spacing.xxl;

export function StreakDay({ date, state, marking }: DayProps & { date?: DateData }) {
  const logged = Boolean(marking?.marked);

  return (
    <View
      style={[
        styles.dot,
        logged && styles.logged,
        state === 'today' && styles.today,
        state === 'disabled' && styles.upcoming,
      ]}
    >
      <Text variant="label4P" color={logged ? Colors.white[100] : Colors.tertiary[200]}>
        {date?.day}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: Radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.tertiary[50],
  },
  logged: {
    backgroundColor: Colors.primary[400],
  },
  today: {
    borderWidth: BorderWidth.thick,
    borderColor: Colors.primary[600],
  },
  upcoming: {
    opacity: 0.5,
  },
});
