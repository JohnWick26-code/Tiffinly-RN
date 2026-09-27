import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';

import { Radius, Spacing, Text } from '../../../../lib/ui';
import { RecipeGallery } from './sections';
import { RecipeHeader } from './header';
import { RecipeList } from './sections';
import { RecipeMeta } from './sections';
import { VideoTile } from './sections';
import type { ExploreRecipe } from '../../types';
import { exploreTheme } from '../../theme';

export interface ExploreCardProps {
  recipe: ExploreRecipe;
}

export function ExploreCard({ recipe }: ExploreCardProps) {
  const { t } = useTranslation();

  return (
    <View style={styles.card}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
      >
        <RecipeHeader recipe={recipe} />

        <View style={styles.body}>
          <RecipeMeta recipe={recipe} />

          <Text variant="body2" color={exploreTheme.cardMuted}>
            {recipe.description}
          </Text>

          <RecipeList
            title={t('explore.ingredients')}
            items={recipe.ingredients}
          />

          <RecipeGallery
            title={t('explore.gallery')}
            images={recipe.images.slice(1)}
          />

          <RecipeList
            title={t('explore.method')}
            items={recipe.steps}
            numbered
          />

          {recipe.video ? (
            <VideoTile video={recipe.video} label={t('explore.watch')} />
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: Radius.xl,
    overflow: 'hidden',
    backgroundColor: exploreTheme.card,
  },
  scroll: {
    paddingBottom: Spacing.lg,
  },
  body: {
    gap: Spacing.lg,
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.lg,
  },
});
