import type { ComponentProps } from 'react';
import { BottomSheetTextInput as GorhomBottomSheetTextInput } from '@gorhom/bottom-sheet';

export type Props = ComponentProps<typeof GorhomBottomSheetTextInput>;

export function BottomSheetTextInput(props: Props) {
  return <GorhomBottomSheetTextInput {...props} />;
}
