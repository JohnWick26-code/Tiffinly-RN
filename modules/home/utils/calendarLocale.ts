import { LocaleConfig } from 'react-native-calendars';

const SUNDAY_JAN_1_2023 = 1;

const monthNames = (language: string, month: 'long' | 'short') =>
  Array.from({ length: 12 }, (_, index) =>
    new Date(2023, index, 1).toLocaleDateString(language, { month }),
  );

const weekdayNames = (language: string, weekday: 'long' | 'short') =>
  Array.from({ length: 7 }, (_, index) =>
    new Date(2023, 0, SUNDAY_JAN_1_2023 + index).toLocaleDateString(language, { weekday }),
  );

export function applyCalendarLocale(language: string) {
  if (!LocaleConfig.locales[language]) {
    LocaleConfig.locales[language] = {
      monthNames: monthNames(language, 'long'),
      monthNamesShort: monthNames(language, 'short'),
      dayNames: weekdayNames(language, 'long'),
      dayNamesShort: weekdayNames(language, 'short'),
      today: '',
    };
  }

  LocaleConfig.defaultLocale = language;
}
