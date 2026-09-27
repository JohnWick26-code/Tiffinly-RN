import { ScrollView, StyleSheet } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';

import { useUserInfo } from '../../auth';
import { useUserStore } from '../../../lib/store';
import {
  Colors,
  LoadingErrorRetryView,
  SafeAreaViewWrapper,
  Spacing,
} from '../../../lib/ui';
import { LogoutButton } from './actions';
import { ProfileHeader } from './header';
import { ChipList, ProfileRow, ProfileSection } from './sections';

export function ProfileView() {
  const { t } = useTranslation();
  const user = useUserStore((s) => s.user);
  const { isPending, isError, refetch } = useUserInfo();
  const tabBarHeight = useBottomTabBarHeight();

  const labels = (items: { label: string }[]) => items.map((i) => i.label);
  const valueOf = (item?: { label: string } | null) =>
    item?.label || t('profile.notSet');

  return (
    <SafeAreaViewWrapper style={styles.screen}>
      <ScrollView
        contentContainerStyle={[
          styles.content,
          { paddingBottom: tabBarHeight + Spacing.xl },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <LoadingErrorRetryView
          loading={isPending && !user}
          error={isError && !user}
          noData={!user}
          retry={refetch}
        >
          {user ? (
            <>
              <ProfileHeader
                name={user.name}
                phone={user.phone}
                avatarUri={user.sex?.imageUrl}
                followersCount={user.followersCount}
                followingCount={user.followingCount}
              />

              <ProfileSection title={t('profile.about')}>
                <ProfileRow label={t('profile.age')} value={user.ageRange || t('profile.notSet')} />
                <ProfileRow label={t('profile.email')} value={user.email || t('profile.notSet')} />
                <ProfileRow label={t('profile.bio')} value={user.bio || t('profile.notSet')} />
              </ProfileSection>

              <ProfileSection title={t('profile.kitchen')}>
                <ProfileRow label={t('profile.language')} value={valueOf(user.language)} />
                <ProfileRow label={t('profile.diet')} value={valueOf(user.dietType)} />
                <ProfileRow label={t('profile.cookingSkill')} value={valueOf(user.cookingSkill)} />
                <ProfileRow label={t('profile.cookingTime')} value={valueOf(user.cookingTime)} />
              </ProfileSection>

              <ProfileSection title={t('profile.preferences')}>
                <ChipList
                  label={t('profile.meatTypes')}
                  items={labels(user.meatTypes)}
                  emptyLabel={t('profile.none')}
                />
                <ChipList
                  label={t('profile.goals')}
                  items={labels(user.goals)}
                  emptyLabel={t('profile.none')}
                />
                <ChipList
                  label={t('profile.allergies')}
                  items={labels(user.allergies)}
                  emptyLabel={t('profile.none')}
                />
              </ProfileSection>

              <LogoutButton />
            </>
          ) : null}
        </LoadingErrorRetryView>
      </ScrollView>
    </SafeAreaViewWrapper>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.tertiary[50],
  },
  content: {
    padding: Spacing.lg,
    gap: Spacing.xl,
  },
});
