import { type ComponentType } from 'react';
import {
  TextInput as RNTextInput,
  type TextInputProps as RNTextInputProps,
} from 'react-native';
import { BottomSheetTextInput as GorhomBottomSheetTextInput } from '@gorhom/bottom-sheet';

import { TextField } from './TextField';
import type { TextInputProps, TextInputVariant } from './textInputStyles';

export type { TextInputProps, TextInputVariant };

export function TextInput(props: TextInputProps) {
  return <TextField {...props} InputComponent={RNTextInput} />;
}

export function BottomSheetTextInput(props: TextInputProps) {
  return (
    <TextField
      {...props}
      InputComponent={GorhomBottomSheetTextInput as ComponentType<RNTextInputProps>}
    />
  );
}
