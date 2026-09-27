import { Pressable, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { NavArrowLeft } from 'iconoir-react-native';

import {
  Button,
  Colors,
  Icon,
  ProgressBar,
  Spacing,
  Text,
} from '../../../../lib/ui';

export interface OnboardingHeaderProps {
  current: number;
  total: number;
  canGoBack: boolean;
  title: string;
  subtitle?: string;
  onBack: () => void;
  onSkip: () => void;
}

export function OnboardingHeader({
  current,
  total,
  canGoBack,
  title,
  subtitle,
  onBack,
  onSkip,
}: OnboardingHeaderProps) {
  const { t } = useTranslation();

  return (
    <View style={styles.header}>
      <View style={styles.topRow}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t('onboarding.previous')}
          accessibilityState={{ disabled: !canGoBack }}
          disabled={!canGoBack}
          onPress={onBack}
          hitSlop={Spacing.sm}
          style={({ pressed }) => [
            styles.back,
            !canGoBack && styles.hidden,
            pressed && styles.pressed,
          ]}
        >
          <Icon icon={NavArrowLeft} size="lg" color={Colors.tertiary[800]} />
        </Pressable>

        <Button
          variant="text"
          onPress={onSkip}
          textProps={{ variant: 'label2P' }}
        >
          {t('onboarding.skip')}
        </Button>
      </View>

      <ProgressBar current={current} total={total} />

      <View style={styles.intro}>
        <Text variant="caption2" color={Colors.tertiary[400]}>
          {t('onboarding.stepOf', { current, total })}
        </Text>

        <Text variant="heading3">{title}</Text>

        {subtitle ? (
          <Text variant="body2" color={Colors.tertiary[400]}>
            {subtitle}
          </Text>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    gap: Spacing.md,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: Spacing.xxl,
  },
  intro: {
    gap: Spacing.sm,
  },
  back: {
    padding: Spacing.xs,
  },
  hidden: {
    opacity: 0,
  },
  pressed: {
    opacity: 0.6,
  },
});
