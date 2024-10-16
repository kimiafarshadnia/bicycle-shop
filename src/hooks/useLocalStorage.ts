'use client'
import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue; // Return the initial value during SSR
    }

    try {
      const jsonValue = localStorage.getItem(key);
      if (jsonValue != null) {
        return JSON.parse(jsonValue);
      } else {
        return initialValue;
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error);
      return initialValue;
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error("Error saving to localStorage:", error);
      }
    }
  }, [key, value]);

  return [value, setValue] as [typeof value, typeof setValue];
}
