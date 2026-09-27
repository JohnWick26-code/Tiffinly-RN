import type { ComponentProps } from 'react';
import { BottomSheetSectionList as GorhomBottomSheetSectionList } from '@gorhom/bottom-sheet';

export type Props = ComponentProps<typeof GorhomBottomSheetSectionList>;

export function BottomSheetSectionList(props: Props) {
  return <GorhomBottomSheetSectionList {...props} />;
}
