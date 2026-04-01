import { useCallback, useState } from "react";

import { SessionStorageNames } from "../const/web-storage.const";

export const useSessionStorage = <T extends object>(
  key: SessionStorageNames,
  initialValue?: T,
): [sessionStorageValue: T, setSessionStorageItem: (value: T) => void, resetSessionStorageItem: () => void] => {
  const storedValue = sessionStorage.getItem(key);
  const parsedValue = storedValue ? JSON.parse(storedValue) : initialValue;

  const [sessionStorageValue, setSessionStorageValue] = useState(parsedValue);

  const setSessionStorageItem = useCallback(
    (value: T) => {
      sessionStorage.setItem(key, JSON.stringify(value));
      setSessionStorageValue(value);
    },
    [key],
  );

  const resetSessionStorageItem = useCallback(() => {
    sessionStorage.removeItem(key);
    setSessionStorageValue({});
  }, [key]);

  return [sessionStorageValue, setSessionStorageItem, resetSessionStorageItem];
};
