import { useFonts } from 'expo-font';

import { Baloo2_600SemiBold } from '@expo-google-fonts/baloo-2/600SemiBold';
import { Baloo2_700Bold } from '@expo-google-fonts/baloo-2/700Bold';
import { Mukta_400Regular } from '@expo-google-fonts/mukta/400Regular';
import { Mukta_500Medium } from '@expo-google-fonts/mukta/500Medium';
import { Mukta_600SemiBold } from '@expo-google-fonts/mukta/600SemiBold';
import { Mukta_700Bold } from '@expo-google-fonts/mukta/700Bold';
import { BalooThambi2_400Regular } from '@expo-google-fonts/baloo-thambi-2/400Regular';
import { BalooThambi2_600SemiBold } from '@expo-google-fonts/baloo-thambi-2/600SemiBold';

export function useAppFonts() {
  const [loaded, error] = useFonts({
    Baloo2_600SemiBold,
    Baloo2_700Bold,
    Mukta_400Regular,
    Mukta_500Medium,
    Mukta_600SemiBold,
    Mukta_700Bold,
    BalooThambi2_400Regular,
    BalooThambi2_600SemiBold,
  });

  return loaded || error != null;
}
