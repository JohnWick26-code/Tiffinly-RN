import { StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Colors, Radius, Spacing, Text } from '../../../../../lib/ui';

export interface RatingBadgeProps {
  rating: number;
  count: number;
}

export function RatingBadge({ rating, count }: RatingBadgeProps) {
  const { t, i18n } = useTranslation();
  const score = rating.toFixed(1);
  const formattedCount = count.toLocaleString(i18n.language);

  return (
    <View
      accessible
      accessibilityLabel={t('explore.ratingLabel', { score, count, formattedCount })}
      style={styles.badge}
    >
      <Text variant="label2P" color={Colors.secondary[400]}>
        ★
      </Text>
      <Text variant="label2P" color={Colors.white[100]}>
        {score}
      </Text>
      <Text variant="caption3" color={Colors.white[70]}>
        ({formattedCount})
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    borderRadius: Radius.pill,
    backgroundColor: Colors.black[50],
  },
});
