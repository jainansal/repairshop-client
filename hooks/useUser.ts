import { UserType } from "@/lib/enums";
import { create } from "zustand";

interface UserData {
  id: string;
  type: UserType;
  name: string;
  email: string;
  phone: string;
  address: string;
}

interface UserContext {
  user: UserData | null;
  isAuthenticated: boolean;
  login: (user: UserData) => void;
}

export const useUser = create<UserContext>((set) => ({
  user: null,
  isAuthenticated: false,
  login: (user: UserData) => set({ user, isAuthenticated: true }),
}));
