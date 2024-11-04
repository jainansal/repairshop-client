import { create } from "zustand";

export const useUser = create((set) => ({
  user: null,
  isAuthenticated: false,
  login: (user: any) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
}));
