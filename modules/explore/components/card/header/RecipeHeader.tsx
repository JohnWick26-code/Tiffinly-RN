import { Image, StyleSheet, useWindowDimensions, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Colors, Radius, Spacing, Text } from '../../../../../lib/ui';
import type { ExploreRecipe } from '../../../types';
import { exploreTheme } from '../../../theme';
import { CreatorBadge } from './CreatorBadge';
import { RatingBadge } from './RatingBadge';

export interface RecipeHeaderProps {
  recipe: ExploreRecipe;
}

export function RecipeHeader({ recipe }: RecipeHeaderProps) {
  const { height } = useWindowDimensions();
  return (
    <View>
      <View style={styles.topRow}>
        <CreatorBadge name={recipe.author} />
        <RatingBadge rating={recipe.averageRating} count={recipe.ratingsCount} />
      </View>

      <LinearGradient
        colors={exploreTheme.scrim}
        style={styles.titleBlock}
      >
        <Text variant="heading3" color={exploreTheme.overlayTitle}>
          {recipe.title}
        </Text>

        <Text variant="label2" color={exploreTheme.overlayMuted}>
          {recipe.cuisine}
        </Text>
        <View style={styles.tags}>
        {recipe.tags.map((tag) => (
          <View key={tag} style={styles.tag}>
            <Text variant="label4P" color={Colors.primary[600]}>
              {tag}
            </Text>
          </View>
        ))}
      </View>
      </LinearGradient>

      <Image
        source={{ uri : "https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3.jpg"}}
        resizeMode="cover"
        style={[styles.cover,{ height: height * 0.65 }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  topRow: {
    position: 'absolute',
    zIndex: 100,
    top: Spacing.lg,
    left: Spacing.lg,
    right: Spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.sm,
  },
  titleBlock: {
    position:'absolute',
    zIndex:100,
    width:'100%',
    bottom: 0,
    gap: Spacing.xs,
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.md,
  },
  cover: {
    width: '100%',
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
    paddingTop: Spacing.md,
  },
  tag: {
    paddingVertical: Spacing.xs,
    paddingHorizontal: Spacing.md,
    borderRadius: Radius.pill,
    backgroundColor: Colors.primary[50],
  },
});
