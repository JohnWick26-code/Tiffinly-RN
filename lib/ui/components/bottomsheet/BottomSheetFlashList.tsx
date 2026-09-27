import type { ComponentProps } from 'react';
import { BottomSheetFlashList as GorhomBottomSheetFlashList } from '@gorhom/bottom-sheet';

export type Props = ComponentProps<typeof GorhomBottomSheetFlashList>;

export function BottomSheetFlashList(props: Props) {
  return <GorhomBottomSheetFlashList {...props} />;
}
