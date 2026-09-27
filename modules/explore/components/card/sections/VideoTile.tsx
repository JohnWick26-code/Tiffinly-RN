import { Image, Linking, Pressable, StyleSheet, View } from 'react-native';
import { PlaySolid } from 'iconoir-react-native';

import { Colors, Icon, Radius, Spacing, Text } from '../../../../../lib/ui';
import type { ExploreVideo } from '../../../types';

export interface VideoTileProps {
  video: ExploreVideo;
  label: string;
}

export function VideoTile({ video, label }: VideoTileProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={() => Linking.openURL(video.url)}
      style={styles.tile}
    >
      <Image
        source={{ uri: `https://img.youtube.com/vi/${video.id}/hqdefault.jpg` }}
        resizeMode="cover"
        style={styles.thumb}
      />

      <View style={styles.overlay}>
        <View style={styles.play}>
          <Icon icon={PlaySolid} size="lg" color={Colors.white[100]} />
        </View>

        <Text variant="label2P" color={Colors.white[100]}>
          {label}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tile: {
    height: 160,
    borderRadius: Radius.lg,
    overflow: 'hidden',
  },
  thumb: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.sm,
    backgroundColor: Colors.black[40],
  },
  play: {
    width: Spacing.huge,
    height: Spacing.huge,
    borderRadius: Radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.black[60],
  },
});
