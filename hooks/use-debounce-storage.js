import { useState, useEffect } from "react";

import { useDebounce } from "../hooks/use-debounce";
import { getStorageValue } from "../utils/getStorageValue";
import { StorageType } from "../utils/StorageType";

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