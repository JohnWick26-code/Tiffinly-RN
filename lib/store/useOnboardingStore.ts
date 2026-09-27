import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { persistedStorage } from '../storage';

export type OnboardingValue = string | number | string[];

export type OnboardingValues = Record<string, OnboardingValue>;

interface OnboardingDraftState {
  values: OnboardingValues;
  mergeValues: (patch: OnboardingValues) => void;
  clearDraft: () => void;
}

export const useOnboardingStore = create<OnboardingDraftState>()(
  persist(
    (set) => ({
      values: {},
      mergeValues: (patch) =>
        set((state) => ({ values: { ...state.values, ...patch } })),
      clearDraft: () => set({ values: {} }),
    }),
    {
      name: 'onboarding-draft',
      storage: persistedStorage,
    },
  ),
);

export const getOnboardingValues = (): OnboardingValues =>
  useOnboardingStore.getState().values;

export const mergeOnboardingValues = (patch: OnboardingValues) =>
  useOnboardingStore.getState().mergeValues(patch);

export const clearOnboardingDraft = () =>
  useOnboardingStore.getState().clearDraft();
