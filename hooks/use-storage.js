import { useState, useEffect } from "react";
import { getStorageValue } from "../utils/getStorageValue";
import { StorageType } from "../utils/StorageType";

/**
 * Hook for dealing with local and session storage
 *
 * @param {string} key object key gor storage
 * @param {any} defaultValue initial value pair
 * @param {Storage} storage value pair store either local or session storage( defaults to lacalStorage | use StorageType.local or StorageType.session)
 * @return {array} [storage value , storage setter]
 */
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