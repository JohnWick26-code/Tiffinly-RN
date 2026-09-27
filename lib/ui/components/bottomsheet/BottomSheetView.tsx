import type { ComponentProps } from 'react';
import { BottomSheetView as GorhomBottomSheetView } from '@gorhom/bottom-sheet';

export type Props = ComponentProps<typeof GorhomBottomSheetView>;

export function BottomSheetView(props: Props) {
  return <GorhomBottomSheetView {...props} />;
}