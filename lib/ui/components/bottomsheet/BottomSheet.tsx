import {
    forwardRef,
    useMemo,
  } from 'react';
  
  import BottomSheet, {
    type BottomSheetProps,
  } from '@gorhom/bottom-sheet';
  
  export type Props = BottomSheetProps;
  
  export const AppBottomSheet = forwardRef<
    BottomSheet,
    Props
  >((props, ref) => {
    const snapPoints = useMemo(
      () => props.snapPoints ?? ['50%'],
      [props.snapPoints],
    );
  
    return (
      <BottomSheet
        ref={ref}
        enablePanDownToClose
        {...props}
        snapPoints={snapPoints}
      />
    );
  });
  
  AppBottomSheet.displayName = 'AppBottomSheet';