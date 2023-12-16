import { create } from "zustand";

import { persist } from "zustand/middleware";

export const useMapStore = create()(
  persist(
    (set) => ({
      latAndLng: null,
      setLatAndLng: (value) => set({ latAndLng: value }),
    }),
    {
      name: "chat-storage", // unique name
    }
  )
);
