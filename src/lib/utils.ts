import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats date to YYYY/MM format
 * @param date
 * @returns
 */
export function formatDateYYYMM(date: Date) {
  return `${date.getFullYear()}/${date.getMonth()+1}`;
}
