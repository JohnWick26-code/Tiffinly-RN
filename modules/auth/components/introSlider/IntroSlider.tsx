import { useEffect, useRef, useState } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { StyleSheet, View } from 'react-native';

import { Colors, Image, Radius, Spacing } from '../../../../lib/ui';

type Slide = { key: string; image: number };

const slides: Slide[] = [
  { key: 'intro-1', image: require('../../../../assets/introslider/introSlider1.png') },
  { key: 'intro-2', image: require('../../../../assets/introslider/introSlider2.png') },
];

export function IntroSlider() {
  const sliderRef = useRef<AppIntroSlider<Slide>>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % slides.length;

      sliderRef.current?.goToSlide(nextIndex, true);
      setActiveIndex(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <AppIntroSlider<Slide>
      ref={sliderRef}
      data={slides}
      keyExtractor={(item) => item.key}
      renderItem={({ item }) => (
        <View style={styles.slide}>
          <View style={styles.card}>
            <Image
              source={item.image}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        </View>
      )}
      onSlideChange={(index) => setActiveIndex(index)}
      showNextButton={false}
      showDoneButton={false}
      showSkipButton={false}
      renderPagination={() => null}
    />
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
  },
  card: {
    flex: 1,
    backgroundColor: Colors.white[100],
  },
  image: {
    flex: 1,
    width: '100%',
    borderRadius: Radius.lg,
  },
});
