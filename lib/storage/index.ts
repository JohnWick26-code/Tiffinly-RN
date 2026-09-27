import { createMMKV } from 'react-native-mmkv';
import type { PersistStorage, StorageValue } from 'zustand/middleware';

export const storage = createMMKV({
  id: 'tiffinly-storage',
});

export const AppStorage = {
  set(key: string, value: unknown) {
    storage.set(key, JSON.stringify(value));
  },

  get<T>(key: string): T | null {
    const value = storage.getString(key);

    if (!value) {
      return null;
    }

    return JSON.parse(value) as T;
  },

  remove(key: string) {
    storage.remove(key);
  },

  clear() {
    storage.clearAll();
  },
};

export const persistedStorage: PersistStorage<unknown> = {
  getItem: (name) => {
    return AppStorage.get<StorageValue<unknown>>(name);
  },

  setItem: (name, value) => {
    AppStorage.set(name, value);
  },

  removeItem: (name) => {
    AppStorage.remove(name);
  },
};