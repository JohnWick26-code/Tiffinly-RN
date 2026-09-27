import { type ReactNode } from 'react';
import { View } from 'react-native';

import { Text } from '../components/Text';
import { Colors } from '../theme/colors';
import { Typography, type TypographyVariant } from '../theme/typography';
import { designSystemStyles as styles } from './designSystemStyles';

export const Section = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <View style={styles.section}>
    <Text variant="heading3">{title}</Text>
    <View style={styles.sectionBody}>{children}</View>
  </View>
);

export const Subsection = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <View style={styles.subsection}>
    <Text variant="label3P" color={Colors.tertiary[200]}>
      {title.toUpperCase()}
    </Text>
    <View style={styles.buttonGroup}>{children}</View>
  </View>
);

export const Specimen = ({ variant }: { variant: TypographyVariant }) => {
  const { fontSize, lineHeight, fontFamily } = Typography[variant];

  return (
    <View style={styles.specimen}>
      <Text variant={variant}>Tiffinly homemade</Text>
      <Text variant="caption3" color={Colors.tertiary[200]}>
        {variant} · {fontSize}/{lineHeight} · {fontFamily}
      </Text>
    </View>
  );
};

export const FontCard = ({
  family,
  role,
  weights,
  sample,
}: {
  family: string;
  role: string;
  weights: string;
  sample: string;
}) => (
  <View style={styles.fontCard}>
    <View style={styles.fontHeader}>
      <Text variant="label1P">{family}</Text>
      <Text variant="caption3" color={Colors.tertiary[200]}>
        {weights}
      </Text>
    </View>
    <Text variant="heading4" color={Colors.tertiary[600]}>
      {sample}
    </Text>
    <Text variant="caption2" color={Colors.tertiary[200]}>
      {role}
    </Text>
  </View>
);

export const Emoji = ({ children }: { children: string }) => (
  <Text variant="label1">{children}</Text>
);
