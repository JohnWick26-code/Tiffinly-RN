import { Fragment, type ReactElement } from 'react';
import { StyleSheet, View } from 'react-native';

import { Spacing } from '../../../../lib/ui';
import { chunk } from '../../utils';

const COLUMNS = 3;

export function ChipGrid({ children }: { children: ReactElement[] }) {
  return (
    <View style={styles.grid}>
      {chunk(children, COLUMNS).map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((chip, index) => (
            <Fragment key={chip.key ?? index}>{chip}</Fragment>
          ))}
          {Array.from({ length: COLUMNS - row.length }, (_, index) => (
            <View key={`spacer-${index}`} style={styles.spacer} />
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    gap: Spacing.md,
  },
  row: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  spacer: {
    flex: 1,
  },
});
