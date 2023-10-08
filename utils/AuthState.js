import { create } from "zustand";

export const userAuth = create((set) => ({
  user: null,
  addUser: (data) => set({ user: data }),
  //   removeAllBears: () => set({ bears: 0 }),
}));
