export type FontWeightKey = 400 | 500 | 600 | 700;

export const DisplayFont: Record<600 | 700, string> = {
  600: 'Baloo2_600SemiBold',
  700: 'Baloo2_700Bold',
};

export const BodyFont: Record<FontWeightKey, string> = {
  400: 'Mukta_400Regular',
  500: 'Mukta_500Medium',
  600: 'Mukta_600SemiBold',
  700: 'Mukta_700Bold',
};

export const TamilFont: Record<400 | 600, string> = {
  400: 'BalooThambi2_400Regular',
  600: 'BalooThambi2_600SemiBold',
};

export const FontFamily = {
  display: DisplayFont,
  body: BodyFont,
  tamil: TamilFont,
} as const;
