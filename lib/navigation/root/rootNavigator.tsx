import { NavigationContainer } from '@react-navigation/native';
import { useAppStore } from '../../store';
import { flowRoutes } from './config';

export function RootNavigator() {
  const isAuthenticated = useAppStore((s) => s.isAuthenticated);
  const isOnboardingCompleted = useAppStore((s) => s.isOnboardingCompleted);

  const activeRoute =
    flowRoutes.find((r) => r.when({ isAuthenticated, isOnboardingCompleted })) ??
    flowRoutes[flowRoutes.length - 1];

  const ActiveNavigator = activeRoute.navigator;

  return (
    <NavigationContainer>
      <ActiveNavigator />
    </NavigationContainer>
  );
}
