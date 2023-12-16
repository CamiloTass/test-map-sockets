import { create } from "zustand";

import { persist } from "zustand/middleware";

export const useAuthStore = create()(
  persist(
    (set) => ({
      checking: true,
      uid: "",
      name: "",
      token: "",
      logged: false,
      setAuthLogged: (value) => set({ logged: value }),
    }),
    {
      name: "auth-storage", // unique name
    }
  )
);
