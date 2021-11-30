import {useState , useEffect} from "react";

/**
 * Hook for debounce
 *
 * @param {any} value value to debounce
 * @param {number} delay debounce time in ms defaults to 500
 * @return {any} debounced value
 */
export const useDebounce= (value, delay = 500) =>{
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);


    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}