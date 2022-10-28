import { useState } from 'react';

export enum LocalStorageKey {
    theme = 'theme',
}

export const useLocalStorage = (
    key: LocalStorageKey,
    initialValue: string,
): [string, (value: string) => void] => {
    const localStorageKeyPrefix = 'brainhub-demo/';

    const getInitialValueFromLocalStorage = () => {
        const value = window.localStorage.getItem(localStorageKeyPrefix + key);
        return value ?? initialValue;
    };

    const [storedValue, setStoredValue] = useState(
        getInitialValueFromLocalStorage(),
    );

    const setValue = (value: string) => {
        setStoredValue(value);
        window.localStorage.setItem(localStorageKeyPrefix + key, value);
    };

    const value = storedValue;
    return [value, setValue];
};
