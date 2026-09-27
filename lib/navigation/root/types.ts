import type { ComponentType } from 'react';

export type FlowState = {
  isAuthenticated: boolean;
  isOnboardingCompleted: boolean;
};

export type FlowRoute = {
  name: string;
  when: (state: FlowState) => boolean;
  navigator: ComponentType;
};
