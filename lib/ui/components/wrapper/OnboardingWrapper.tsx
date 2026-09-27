import { ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors } from '../../theme/colors';
import { StyleSheet } from '../styleSheet';

type OnboardingWrapperProps = {
  children: ReactNode;
};

export function OnboardingWrapper({
  children,
}: OnboardingWrapperProps) {
  return (
    <SafeAreaView
      style={styles.container}
      edges={['top', 'bottom']}
    >
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white[100],
  },
});
