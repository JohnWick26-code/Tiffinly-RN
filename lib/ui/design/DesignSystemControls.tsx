import { Button } from '../components/Button';
import type { TextInput } from '../components/TextInput';
import { Colors } from '../theme/colors';
import { Emoji, Section, Subsection } from './DesignSystemBlocks';
import { log } from './designSystemData';

export const DesignSystemButtons = () => (
  <Section title="Buttons">
    <Subsection title="Variants">
      <Button variant="filled" onPress={log('Filled')}>
        Filled
      </Button>
      <Button variant="outline" onPress={log('Outline')}>
        Outline
      </Button>
      <Button variant="text" onPress={log('Text')}>
        Text
      </Button>
      <Button variant="gradient" onPress={log('Gradient')}>
        Gradient
      </Button>
    </Subsection>

    <Subsection title="Full width">
      <Button variant="filled" fullWidth onPress={log('Full width filled')}>
        Full Width
      </Button>
      <Button variant="gradient" fullWidth onPress={log('Full width gradient')}>
        Full Width Gradient
      </Button>
    </Subsection>

    <Subsection title="With icons">
      <Button variant="filled" leadingIcon={<Emoji>🍱</Emoji>} onPress={log('Leading')}>
        Leading Icon
      </Button>
      <Button variant="outline" trailingIcon={<Emoji>→</Emoji>} onPress={log('Trailing')}>
        Trailing Icon
      </Button>
    </Subsection>

    <Subsection title="Custom colors">
      <Button variant="filled" color={Colors.success[600]} onPress={log('Success')}>
        Success
      </Button>
      <Button variant="outline" color={Colors.failure[600]} onPress={log('Danger')}>
        Danger
      </Button>
      <Button
        variant="gradient"
        gradientColors={[Colors.secondary[400], Colors.primary[600]]}
        onPress={log('Custom gradient')}
      >
        Custom Gradient
      </Button>
    </Subsection>

    <Subsection title="Disabled">
      <Button variant="filled" disabled onPress={log('Disabled')}>
        Disabled
      </Button>
      <Button variant="gradient" disabled onPress={log('Disabled gradient')}>
        Disabled Gradient
      </Button>
    </Subsection>
  </Section>
);

export const DesignSystemInputs = ({ Input }: { Input: typeof TextInput }) => (
  <Section title="Text inputs">
    <Input label="Email" placeholder="you@tiffinly.com" keyboardType="email-address" />
    <Input
      label="Search"
      variant="filled"
      leadingIcon={<Emoji>🔍</Emoji>}
      placeholder="Search cooks near you"
    />
    <Input
      label="Password"
      trailingIcon={<Emoji>👁️</Emoji>}
      placeholder="Password"
      secureTextEntry
    />
    <Input label="Full name" defaultValue="Sivaramakrishnan" />
    <Input label="Email" defaultValue="not-an-email" errorMessage="Enter a valid email address" />
    <Input label="Referral code" editable={false} defaultValue="LOCKED" />
  </Section>
);
