import type { ComponentProps } from 'react';
import { BottomSheetVirtualizedList as GorhomBottomSheetVirtualizedList } from '@gorhom/bottom-sheet';

export type Props = ComponentProps<typeof GorhomBottomSheetVirtualizedList>;

export function BottomSheetVirtualizedList(props: Props) {
  return <GorhomBottomSheetVirtualizedList {...props} />;
}