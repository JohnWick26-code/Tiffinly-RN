import { StyleSheet, View, type LayoutChangeEvent } from 'react-native';
import { Cursor } from 'react-native-confirmation-code-field';

import {
  BorderWidth,
  Colors,
  ControlHeight,
  Radius,
  Text,
  Typography,
  focusGlow,
} from '../../../../lib/ui';

export interface OtpCellProps {
  symbol: string;
  isFocused: boolean;
  hasError: boolean;
  onLayout: (event: LayoutChangeEvent) => void;
}

export function OtpCell({ symbol, isFocused, hasError, onLayout }: OtpCellProps) {
  const filled = Boolean(symbol);

  return (
    <View
      onLayout={onLayout}
      style={[
        styles.cell,
        filled && styles.filled,
        isFocused && styles.focused,
        hasError && styles.error,
      ]}
    >
      {symbol ? (
        <Text style={[styles.text, hasError && styles.textError]}>{symbol}</Text>
      ) : isFocused ? (
        <Text style={styles.text}>
          <Cursor cursorSymbol="|" />
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  cell: {
    flex: 1,
    height: ControlHeight.lg,
    borderRadius: Radius.md,
    borderWidth: BorderWidth.medium,
    borderColor: Colors.tertiary[100],
    backgroundColor: Colors.white[100],
    alignItems: 'center',
    justifyContent: 'center',
  },
  filled: {
    borderColor: Colors.tertiary[200],
  },
  focused: {
    borderColor: Colors.primary[400],
    backgroundColor: Colors.primary[50],
    ...focusGlow(Colors.primary[400]),
  },
  error: {
    borderColor: Colors.failure[400],
    backgroundColor: Colors.failure[50],
  },
  text: {
    ...Typography.heading3,
    color: Colors.tertiary[800],
    textAlign: 'center',
  },
  textError: {
    color: Colors.failure[600],
  },
});
