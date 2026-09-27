import { Image, StyleSheet, View } from 'react-native';

import { Elevation, Radius, Spacing, Text } from '../../../../../lib/ui';
import { exploreTheme } from '../../../theme';

export interface RecipeGalleryProps {
  title: string;
  images: number[];
}

export function RecipeGallery({ title, images }: RecipeGalleryProps) {
  if (!images.length) {
    return null;
  }

  return (
    <View style={styles.block}>
      <Text variant="label1P" color={exploreTheme.cardTitle}>
        {title}
      </Text>

      <View style={styles.row}>
        {images.map((source, index) => (
            <Image
              source={source}
              resizeMode="cover"
              key={`${index}`}
              style={styles.thumb}
            />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    gap: Spacing.md,
    borderRadius: Radius.lg,
    backgroundColor: exploreTheme.card,
  },
  row: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  thumb: {
    width: 130,
    height: 130,
    aspectRatio: 1,
    borderRadius: Radius.md,
    ...Elevation.mid,
    overflow:'hidden'
  },
});
