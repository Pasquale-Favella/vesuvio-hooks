import { useState, useEffect } from "react";

import { useDebounce } from "../hooks/use-debounce";
import { getStorageValue } from "../utils/getStorageValue";
import { StorageType } from "../utils/StorageType";


/**
 * Hook for debounce storage values
 *
 * @param {string} key object key gor storage
 * @param {any} defaultValue initial value pair
 * @param {Storage} storage value pair store either local or session storage( defaults to lacalStorage | use StorageType.local or StorageType.session)
 * @param {number} delay debounce time in ms defaults to 500
 * @return {array} [storage value , storage setter]
 */
export const useDebounceStorage = (key , defaultValue , storage = StorageType.local , delay = 500)=>{

    const [value, setValue] = useState(() => 
        getStorageValue(key, defaultValue , storage)
    );

    const debouncedValue = useDebounce(value, delay);

    useEffect(() => {
        // storing input name
        storage.setItem(key, JSON.stringify(debouncedValue));
    }, [key, debouncedValue , storage]);

  return [debouncedValue, setValue];
}