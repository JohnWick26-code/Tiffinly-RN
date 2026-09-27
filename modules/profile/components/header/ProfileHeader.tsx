import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTranslation } from 'react-i18next';

import { Avatar, Colors, Elevation, Radius, Spacing, Text } from '../../../../lib/ui';

export interface ProfileHeaderProps {
  name: string;
  phone: string;
  avatarUri?: string | null;
  followersCount: number;
  followingCount: number;
}

export function ProfileHeader({
  name,
  phone,
  avatarUri,
  followersCount,
  followingCount,
}: ProfileHeaderProps) {
  const { t } = useTranslation();

  return (
    <LinearGradient
      colors={[Colors.primary[400], Colors.primary[600]]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.hero}
    >
      <View style={styles.ring}>
        <Avatar uri={avatarUri} size={104} />
      </View>

      <View style={styles.identity}>
        <Text variant="heading2" color={Colors.white[100]}>
          {name || t('profile.noName')}
        </Text>

        {phone ? (
          <Text variant="label1" color={Colors.white[80]}>
            {phone}
          </Text>
        ) : null}
      </View>
    </LinearGradient>
  );
}

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <View style={styles.stat}>
      <Text variant="heading3" color={Colors.white[100]}>
        {value}
      </Text>
      <Text variant="label2" color={Colors.white[80]}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    alignItems: 'center',
    gap: Spacing.lg,
    paddingVertical: Spacing.xxl,
    paddingHorizontal: Spacing.lg,
    borderRadius: Radius.xl,
    ...Elevation.mid,
  },
  ring: {
    padding: Spacing.xs,
    borderRadius: Radius.pill,
    backgroundColor: Colors.white[30],
  },
  identity: {
    alignItems: 'center',
    gap: Spacing.xs,
  },
  stats: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xl,
  },
  divider: {
    width: 1,
    height: Spacing.xl,
    backgroundColor: Colors.white[30],
  },
  stat: {
    alignItems: 'center',
    gap: Spacing.xs,
    minWidth: Spacing.huge + Spacing.lg,
  },
});
