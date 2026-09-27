import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { persistedStorage } from '../storage';
import { useUserStore } from './useUserStore';

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface OnboardingState {
  onboardingStep: string | null;
  isOnboardingCompleted: boolean;
}

interface AppState extends OnboardingState {
  isAuthenticated: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  setOnboardingStep: (step: string | null) => void;
  completeOnboarding: () => void;
  login: (tokens: AuthTokens, onboarding: OnboardingState) => void;
  setTokens: (tokens: AuthTokens) => void;
  logout: () => void;
  reset: () => void;
}

const clearedAuth = {
  isAuthenticated: false,
  accessToken: null,
  refreshToken: null,
} as const;

const clearedOnboarding = {
  onboardingStep: null,
  isOnboardingCompleted: false,
} as const;

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      accessToken: null,
      refreshToken: null,
      onboardingStep: null,
      isOnboardingCompleted: false,

      setOnboardingStep: (onboardingStep) => set({ onboardingStep }),
      completeOnboarding: () =>
        set({ isOnboardingCompleted: true, onboardingStep: null }),
      login: ({ accessToken, refreshToken }, onboarding) =>
        set({
          isAuthenticated: true,
          accessToken,
          refreshToken,
          ...onboarding,
        }),
      setTokens: ({ accessToken, refreshToken }) =>
        set({ accessToken, refreshToken }),
      logout: () => set({ ...clearedAuth }),
      reset: () => set({ ...clearedAuth, ...clearedOnboarding }),
    }),
    {
      name: 'app-store',
      storage: persistedStorage,
    },
  ),
);

export const getIsAuthenticated = () =>
  useAppStore.getState().isAuthenticated;

export const getOnboardingStep = () =>
  useAppStore.getState().onboardingStep;

export const getIsOnboardingCompleted = () =>
  useAppStore.getState().isOnboardingCompleted;

export const getAccessToken = () =>
  useAppStore.getState().accessToken;

export const getRefreshToken = () =>
  useAppStore.getState().refreshToken;

export const setOnboardingStep = (step: string | null) =>
  useAppStore.getState().setOnboardingStep(step);

export const completeOnboarding = () =>
  useAppStore.getState().completeOnboarding();

export const login = (
  tokens: AuthTokens,
  onboarding: OnboardingState,
) => useAppStore.getState().login(tokens, onboarding);

export const setTokens = (
  tokens: AuthTokens,
) => useAppStore.getState().setTokens(tokens);

export const logout = () => {
  useUserStore.getState().clearUser();
  useAppStore.getState().logout();
};

export const resetAppStore = () => {
  useUserStore.getState().clearUser();
  useAppStore.getState().reset();
};
