import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Colors, Icon, Spacing, Typography } from '../../ui';
import { CenterTabButton } from './centerTabButton';
import { sharedTabs } from './config';
import type { SharedStackParamList } from './types';

const Tab = createBottomTabNavigator<SharedStackParamList>();

export function SharedNavigator() {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary[600],
        tabBarLabelStyle: Typography.label4P,
      }}
    >
      {sharedTabs.map(({ name, component, icon, labelKey, lifted, dark }) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={{
            title: t(labelKey as never),
            tabBarInactiveTintColor: dark
              ? Colors.white[60]
              : Colors.tertiary[200],
            tabBarStyle: {
              backgroundColor: dark ? Colors.black[100] : Colors.tertiary[50],
              height: Spacing.giant + insets.bottom,
              paddingTop: Spacing.sm,
              paddingBottom: insets.bottom || Spacing.sm,
              overflow: 'visible',
              borderTopWidth: 0,
              elevation: 0,
            },
            tabBarIcon: ({ color }) => (
              <Icon icon={icon} size="lg" color={color} />
            ),
            ...(lifted
              ? {
                  tabBarLabel: () => null,
                  tabBarButton: (props) => (
                    <CenterTabButton {...props} icon={icon} />
                  ),
                }
              : {}),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
