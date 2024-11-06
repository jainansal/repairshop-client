import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getNestedValue = (obj: any, key: string) => {
  return key.split(".").reduce((acc, part) => acc && acc[part], obj);
};
