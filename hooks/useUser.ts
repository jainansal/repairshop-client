import { AUTH_COOKIE_KEYWORD } from "@/lib/constants";
import { UserType } from "@/lib/enums";
import { cookies } from "next/headers";
import { create } from "zustand";

interface UserData {
  type: UserType;
  id: string;
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
