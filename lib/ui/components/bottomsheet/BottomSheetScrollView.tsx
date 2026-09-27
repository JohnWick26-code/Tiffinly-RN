import type { ComponentProps } from 'react';
import { BottomSheetScrollView as GorhomBottomSheetScrollView } from '@gorhom/bottom-sheet';

export type Props = ComponentProps<typeof GorhomBottomSheetScrollView>;

export function BottomSheetScrollView(props: Props) {
  return <GorhomBottomSheetScrollView {...props} />;
}
