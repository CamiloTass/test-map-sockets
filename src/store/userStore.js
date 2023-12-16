import { create } from "zustand";

import { persist } from "zustand/middleware";

export const useUserStore = create()(
  persist(
    (set) => ({
      user: null,
      token: false,
      setToken: (value) => set({ token: value }),
      setUser: (value) => set({ user: value }),
    }),
    {
      name: "user-storage", // unique name
    }
  )
);
