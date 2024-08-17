import { useState } from "react";

function useSessionStorage( key, initialValue,hasReadValue=true) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? item : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.sessionStorage.setItem(key, valueToStore);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return hasReadValue ?  [storedValue, setValue]: setValue ;
}
export default useSessionStorage;
