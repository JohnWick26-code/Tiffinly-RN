import { ScrollView, View } from 'react-native';

import { Text } from '../components/Text';
import { TextInput } from '../components/TextInput';
import { Colors } from '../theme/colors';
import { FontCard, Section, Specimen } from './DesignSystemBlocks';
import { NeutralStrip, Palette } from './DesignSystemColors';
import { DesignSystemButtons, DesignSystemInputs } from './DesignSystemControls';
import { DesignSystemTokens } from './DesignSystemTokens';
import { FONTS, NEUTRALS, PALETTES, TYPE_GROUPS } from './designSystemData';
import { designSystemStyles as styles } from './designSystemStyles';

export const DesignSystem = () => (
  <ScrollView
    style={styles.screen}
    contentContainerStyle={styles.content}
    showsVerticalScrollIndicator={false}
  >
    <DesignSystemContent />
  </ScrollView>
);

export const DesignSystemContent = ({
  Input = TextInput,
}: {
  Input?: typeof TextInput;
} = {}) => (
  <>
    <View style={styles.header}>
      <Text variant="heading1">Design System</Text>
      <Text variant="body2" color={Colors.tertiary[200]}>
        Colors, typography, fonts, layout tokens and components — everything you
        need to build Tiffinly.
      </Text>
    </View>

    <Section title="Colors">
      {PALETTES.map((name) => (
        <Palette key={name} name={name} shades={Colors[name]} />
      ))}
      {NEUTRALS.map((name) => (
        <NeutralStrip key={name} name={name} shades={Colors[name]} />
      ))}
    </Section>

    <Section title="Typography">
      {TYPE_GROUPS.map((group) => (
        <View key={group.title} style={styles.typeGroup}>
          <Text variant="caption3" color={Colors.tertiary[200]}>
            {group.title.toUpperCase()}
          </Text>
          {group.variants.map((variant) => (
            <Specimen key={variant} variant={variant} />
          ))}
        </View>
      ))}
    </Section>

    <Section title="Fonts">
      {FONTS.map((font) => (
        <FontCard key={`${font.family}-${font.role}`} {...font} />
      ))}
    </Section>

    <DesignSystemTokens />

    <DesignSystemButtons />

    <DesignSystemInputs Input={Input} />
  </>
);
