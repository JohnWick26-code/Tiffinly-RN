import { type ComponentType } from 'react';
import {
  View,
  type TextInputProps as RNTextInputProps,
  type TextStyle,
} from 'react-native';

import { Colors } from '../theme/colors';
import { Typography } from '../theme/typography';
import { Text } from './Text';
import {
  resolveSurface,
  textInputStyles as styles,
  type TextInputProps,
} from './textInputStyles';

export type TextFieldProps = TextInputProps & {
  InputComponent: ComponentType<RNTextInputProps>;
};

export function TextField({
  InputComponent,
  variant = 'outline',
  typography = 'body1',
  label,
  errorMessage,
  error = false,
  leadingIcon,
  trailingIcon,
  editable = true,
  containerStyle,
  inputStyle,
  placeholderTextColor = Colors.tertiary[200],
  ...props
}: TextFieldProps) {
  const hasError = error || errorMessage != null;

  return (
    <View style={styles.field}>
      {label ? (
        <Text variant="label3P" color={Colors.tertiary[600]}>
          {label}
        </Text>
      ) : null}

      <View
        style={[
          styles.container,
          resolveSurface(variant, hasError),
          !editable && styles.disabled,
          containerStyle,
        ]}
      >
        {leadingIcon ? <View style={styles.icon}>{leadingIcon}</View> : null}

        <InputComponent
          {...props}
          editable={editable}
          placeholderTextColor={placeholderTextColor}
          style={[styles.input, Typography[typography] as TextStyle, inputStyle]}
        />

        {trailingIcon ? <View style={styles.icon}>{trailingIcon}</View> : null}
      </View>

      {errorMessage ? (
        <Text variant="caption2" color={Colors.failure[600]}>
          {errorMessage}
        </Text>
      ) : null}
    </View>
  );
}
