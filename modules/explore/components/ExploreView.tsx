import { useCallback, useRef, useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import { Swiper, type SwiperCardRefType } from 'rn-swiper-list';
import { useTranslation } from 'react-i18next';

import { SafeAreaViewWrapper, Spacing, Text } from '../../../lib/ui';
import { ExploreActions } from './actions';
import { ExploreCard } from './card';
import { exploreRecipes } from '../data';
import type { ExploreRecipe } from '../types';
import { exploreTheme } from '../theme';

export function ExploreView() {
  const { t } = useTranslation();
  const { width } = useWindowDimensions();
  const swiperRef = useRef<SwiperCardRefType>(null);
  const liked = useRef<string[]>([]);
  const [likedCount, setLikedCount] = useState(0);
  const [done, setDone] = useState(false);

  const renderCard = useCallback(
    (recipe: ExploreRecipe) => <ExploreCard recipe={recipe} />,
    [],
  );

  const onSwipeRight = useCallback((index: number) => {
    const recipe = exploreRecipes[index];

    if (recipe && !liked.current.includes(recipe.id)) {
      liked.current.push(recipe.id);
      setLikedCount(liked.current.length);
    }
  }, []);

  return (
    <SafeAreaViewWrapper style={styles.screen}>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <Text variant="heading2" color={exploreTheme.title}>
          {t('tabs.explore')}
        </Text>

        <Text variant="body2" color={exploreTheme.muted}>
          {t('explore.subtitle')}
        </Text>
      </View>

      <View style={styles.deck}>
        {done ? (
          <Text variant="body1" color={exploreTheme.muted}>
            {t('explore.liked', { count: likedCount })}
          </Text>
        ) : (
          <Swiper
            ref={swiperRef}
            data={exploreRecipes}
            renderCard={renderCard}
            keyExtractor={(recipe) => recipe.id}
            cardStyle={[styles.card, { width: Math.round(width * 0.88) }]}
            disableTopSwipe
            disableBottomSwipe
            onSwipeRight={onSwipeRight}
            onSwipedAll={() => setDone(true)}
          />
        )}
      </View>

      {done ? null : (
        <ExploreActions
          likeLabel={t('explore.like')}
          rejectLabel={t('explore.reject')}
          onLike={() => swiperRef.current?.swipeRight()}
          onReject={() => swiperRef.current?.swipeLeft()}
        />
      )}
    </SafeAreaViewWrapper>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: exploreTheme.background,
  },
  header: {
    gap: Spacing.xs,
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.lg,
  },
  deck: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.md,
  },
  card: {
    height: '100%',
  },
});
