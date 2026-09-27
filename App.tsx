import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { QueryClientProvider } from '@tanstack/react-query';
import BootSplash from "react-native-bootsplash";
import Toast from 'react-native-toast-message';
import './lib/i18n';
import { queryClient, RootNavigator } from './lib';
import { useAppFonts } from './lib/ui';
import { DesignSystemFab } from './lib/ui/design';

const App = () => {
  const fontsReady = useAppFonts();

  useEffect(() => {
    if (!fontsReady) return;

    BootSplash.hide({ fade: true });
  }, [fontsReady]);

  if (!fontsReady) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <BottomSheetModalProvider>
            <RootNavigator />
            <Toast />
          </BottomSheetModalProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
};

export default App;
