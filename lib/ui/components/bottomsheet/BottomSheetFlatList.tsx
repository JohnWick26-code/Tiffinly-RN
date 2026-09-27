import type { ComponentProps } from 'react';
import { BottomSheetFlatList as GorhomBottomSheetFlatList } from '@gorhom/bottom-sheet';

export type Props = ComponentProps<typeof GorhomBottomSheetFlatList>;

export function BottomSheetFlatList(props: Props) {
  return <GorhomBottomSheetFlatList {...props} />;
}
