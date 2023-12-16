import { create } from "zustand";

import { persist } from "zustand/middleware";

export const useChatStore = create()(
  persist(
    (set) => ({
      uid: "",
      activeChat: null,
      users: [],
      messages: [],
      showListUser: false,
      showTutorial: false,
      setChat: (value) => set({ chat: value }),
    }),
    {
      name: "chat-storage", // unique name
    }
  )
);
