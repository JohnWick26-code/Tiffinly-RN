import { StyleSheet, View } from 'react-native';

import { Text } from '../components/Text';
import { Colors } from '../theme/colors';
import { Elevation } from '../theme/elevation';
import { BorderWidth, IconSize, Radius, Spacing } from '../theme/spacing';
import { Section, Subsection } from './DesignSystemBlocks';

export const DesignSystemTokens = () => (
  <>
    <Section title="Spacing">
      <Subsection title="Closed scale — snap to a step, never invent one">
        {Object.entries(Spacing).map(([token, value]) => (
          <View key={token} style={styles.row}>
            <Text variant="label3P" style={styles.label}>
              {token} · {value}
            </Text>
            <View style={[styles.bar, { width: value }]} />
          </View>
        ))}
      </Subsection>
    </Section>

    <Section title="Radius">
      <View style={styles.row}>
        {Object.entries(Radius).map(([token, value]) => (
          <View key={token} style={styles.cell}>
            <View style={[styles.radiusSwatch, { borderRadius: value }]} />
            <Text variant="caption3" color={Colors.tertiary[200]}>
              {token} · {value}
            </Text>
          </View>
        ))}
      </View>
    </Section>

    <Section title="Icon size">
      <View style={styles.row}>
        {Object.entries(IconSize).map(([token, value]) => (
          <View key={token} style={styles.cell}>
            <View style={[styles.iconBox, { width: value, height: value }]} />
            <Text variant="caption3" color={Colors.tertiary[200]}>
              {token} · {value}
            </Text>
          </View>
        ))}
      </View>
    </Section>

    <Section title="Elevation">
      <View style={styles.row}>
        {Object.entries(Elevation).map(([token, value]) => (
          <View key={token} style={[styles.elevationCard, value]}>
            <Text variant="caption3" color={Colors.tertiary[400]}>
              {token}
            </Text>
          </View>
        ))}
      </View>
    </Section>
  </>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  cell: {
    alignItems: 'center',
    gap: Spacing.xs,
  },
  label: {
    width: Spacing.huge + Spacing.xl,
  },
  bar: {
    height: Spacing.lg,
    borderRadius: Radius.sm,
    backgroundColor: Colors.primary[200],
  },
  radiusSwatch: {
    width: Spacing.huge,
    height: Spacing.huge,
    backgroundColor: Colors.secondary[100],
    borderWidth: BorderWidth.hairline,
    borderColor: Colors.secondary[600],
  },
  iconBox: {
    borderRadius: Radius.sm,
    backgroundColor: Colors.tertiary[200],
  },
  elevationCard: {
    flex: 1,
    height: Spacing.huge,
    borderRadius: Radius.md,
    backgroundColor: Colors.white[100],
    alignItems: 'center',
    justifyContent: 'center',
  },
});
