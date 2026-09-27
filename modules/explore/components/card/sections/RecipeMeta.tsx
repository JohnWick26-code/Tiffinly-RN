import { StyleSheet, View } from 'react-native';

import { Spacing, Text } from '../../../../../lib/ui';
import type { ExploreRecipe } from '../../../types';
import { exploreTheme } from '../../../theme';

export interface RecipeMetaProps {
  recipe: ExploreRecipe;
}

export function RecipeMeta({ recipe }: RecipeMetaProps) {
  return (
    <View style={styles.meta}>
      <Text variant="label2" color={exploreTheme.cardMuted}>
        {recipe.totalTimeMinutes} min
      </Text>
      <Text variant="label2" color={exploreTheme.cardMuted}>
        {recipe.servings} serves
      </Text>
      <Text variant="label2" color={exploreTheme.cardMuted}>
        {recipe.calories} kcal
      </Text>
      <Text variant="label2" color={exploreTheme.cardMuted}>
        {recipe.protein}g protein
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  meta: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: Spacing.md,
  },
});
