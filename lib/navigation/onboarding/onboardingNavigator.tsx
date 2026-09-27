import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAppStore } from '../../store';
import type { OnboardingStackParamList } from './types';
import { onboardingScreens, resolveOnboardingRoute } from './config';

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

export function OnboardingNavigator() {
  const onboardingStep = useAppStore((s) => s.onboardingStep);

  return (
    <Stack.Navigator
      initialRouteName={resolveOnboardingRoute(onboardingStep)}
      screenOptions={{ headerShown: false }}
    >
      {onboardingScreens.map(({ name, component, options }) => (
        <Stack.Screen
          key={name}
          name={name}
          component={component}
          options={options}
        />
      ))}
    </Stack.Navigator>
  );
}
