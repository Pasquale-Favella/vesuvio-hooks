import { useState, useEffect } from "react";
import { getStorageValue } from "../utils/getStorageValue";
import { StorageType } from "../utils/StorageType";


export const useStorage = ( key , defaultValue , storage = StorageType.local ) => {
  const [value, setValue] = useState(() => 
     getStorageValue(key, defaultValue , storage)
  );

  useEffect(() => {
    // storing input name
    storage.setItem(key, JSON.stringify(value));
  }, [key, value , storage]);

  return [value, setValue];
};