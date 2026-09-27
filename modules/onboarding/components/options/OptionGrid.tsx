import type { ReactElement } from 'react';
import { StyleSheet } from 'react-native';
import { FlashList } from '@shopify/flash-list';

import type { PreferenceOptionDomain } from '../../api';
import { Spacing } from '../../../../lib/ui';
import { OptionCard } from './OptionCard';

export interface OptionGridProps {
  options: PreferenceOptionDomain[];
  selectedIds: string[];
  onToggle: (id: string) => void;
  header?: ReactElement | null;
  footer?: ReactElement | null;
  empty?: ReactElement | null;
}

export function OptionGrid({
  options,
  selectedIds,
  onToggle,
  header,
  footer,
  empty,
}: OptionGridProps) {
  return (
    <FlashList
      data={options}
      numColumns={2}
      keyExtractor={(item) => item.id}
      extraData={selectedIds}
      renderItem={({ item }) => (
        <OptionCard
          option={item}
          selected={selectedIds.includes(item.id)}
          onPress={onToggle}
        />
      )}
      ListHeaderComponent={header}
      ListFooterComponent={footer}
      ListEmptyComponent={empty}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    />
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: Spacing.xl,
  },
});
