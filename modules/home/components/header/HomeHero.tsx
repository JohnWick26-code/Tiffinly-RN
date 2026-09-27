import { StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Colors, Radius, Spacing, Text } from '../../../../lib/ui';
import type { DayPart } from '../../utils';

export interface HomeHeroProps {
  name: string;
  dayPart: DayPart;
}

export function HomeHero({ name, dayPart }: HomeHeroProps) {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const greeting = t(`home.greeting.${dayPart}`);

  return (
    <View style={[styles.hero, { paddingTop: insets.top + Spacing.xl }]}>
      <View style={styles.illustration} importantForAccessibility="no-hide-descendants">
        <Text style={styles.emoji}>🍲</Text>
      </View>

      <View style={styles.copy}>
        <Text variant="heading3" color={Colors.white[100]} accessibilityRole="header">
          {name
            ? t('home.greetingNamed', { greeting, name })
            : t('home.greetingPlain', { greeting })}
        </Text>

        <Text variant="body2" color={Colors.white[80]}>
          {t('home.subtitle')}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.lg,
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.giant + Spacing.xxl,
    borderBottomLeftRadius: Radius.xl,
    borderBottomRightRadius: Radius.xl,
    backgroundColor: Colors.primary[400],
  },
  illustration: {
    width: Spacing.giant + Spacing.lg,
    height: Spacing.giant + Spacing.lg,
    borderRadius: Radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white[20],
  },
  emoji: {
    fontSize: 44,
    lineHeight: 52,
  },
  copy: {
    flex: 1,
    gap: Spacing.xs,
  },
});
