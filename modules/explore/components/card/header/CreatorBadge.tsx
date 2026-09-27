import { StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Colors, Radius, Spacing, Text } from '../../../../../lib/ui';

const AVATAR_SIZE = Spacing.xxl;

const initialsOf = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join('');

export function CreatorBadge({ name }: { name: string }) {
  const { t } = useTranslation();

  return (
    <View
      accessible
      accessibilityLabel={t('explore.createdBy', { name })}
      style={styles.badge}
    >
      <View style={styles.avatar}>
        <Text variant="label3P" color={Colors.white[100]}>
          {initialsOf(name)}
        </Text>
      </View>

      <View style={styles.copy}>
        <Text variant="caption3" color={Colors.white[70]}>
          {t('explore.creator')}
        </Text>
        <Text variant="label3P" color={Colors.white[100]} numberOfLines={1}>
          {name}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    flexShrink: 1,
    paddingVertical: Spacing.xs,
    paddingLeft: Spacing.xs,
    paddingRight: Spacing.md,
    borderRadius: Radius.pill,
    backgroundColor: Colors.black[50],
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: Radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary[400],
    borderWidth: 1.5,
    borderColor: Colors.white[100],
  },
  copy: {
    flexShrink: 1,
  },
});
