import { useEffect, type ReactNode } from 'react';
import { AppState, Platform, type AppStateStatus } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { useReactQueryDevTools } from '@dev-plugins/react-query';
import {
  QueryClient,
  QueryClientProvider,
  focusManager,
  onlineManager,
} from '@tanstack/react-query';

onlineManager.setEventListener((setOnline) => {
  return NetInfo.addEventListener((state) => {
    setOnline(
      Boolean(state.isConnected) &&
        Boolean(state.isInternetReachable),
    );
  });
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  },
});

type ApiProviderProps = {
  children: ReactNode;
};

const AppStateChange = (status:AppStateStatus) => {
  if(Platform.OS === 'web') {
    focusManager.setFocused(status === 'active');
  }
}

export function ApiProvider({
  children,
}: ApiProviderProps) {
  useReactQueryDevTools(queryClient);
  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      (status: AppStateStatus) => {
        AppStateChange(status);
      },
    );

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}