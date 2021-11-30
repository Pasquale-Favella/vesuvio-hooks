export function getStorageValue(key, defaultValue , storage) {
    // getting stored value
    const saved = storage.getItem(key);
    const initial = JSON.parse(saved);
    return initial || defaultValue;
}