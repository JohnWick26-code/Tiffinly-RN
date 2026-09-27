import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { persistedStorage } from '../storage';
import type { UserInfoDomain } from '../../modules/auth/api/userInfo/domain';

interface UserState {
  user: UserInfoDomain | null;
  setUser: (user: UserInfoDomain) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: 'user-store',
      storage: persistedStorage,
    },
  ),
);

export const getUser = () =>
  useUserStore.getState().user;

export const setUser = (user: UserInfoDomain) =>
  useUserStore.getState().setUser(user);

export const clearUser = () =>
  useUserStore.getState().clearUser();
