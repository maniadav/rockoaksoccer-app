import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * @function getAsyncStorageValue
 * @param key {string} Key of AsyncStorage item
 * @param parse {boolean} Whether to parse JSON (default: false)
 * @returns {*}
 */

const getAsyncStorageValue = async (key: string, parse = false) => {
  try {
    const storedValue = await AsyncStorage.getItem(key);
    if (!storedValue) return null;

    return parse ? JSON.parse(storedValue) : storedValue;
  } catch (e) {
    console.error('Error accessing AsyncStorage:', e);
    return null;
  }
};

/**
 * @function setAsyncStorageValue
 * @param key {string} Key of AsyncStorage item
 * @param value {*} Value to store in AsyncStorage
 * @param serialize {boolean} Whether to serialize value to JSON (default: false)
 * @returns {Promise<void>}
 */

const setAsyncStorageValue = async <T>(
  key: string,
  value: T,
  serialize = true
) => {
  try {
    const valueToStore = serialize ? JSON.stringify(value) : (value as string);
    await AsyncStorage.setItem(key, valueToStore);
  } catch (e) {
    console.error('Error saving to AsyncStorage:', e);
  }
};

/**
 * @function removeAsyncStorageValue
 * @param key {string} Key of AsyncStorage item
 * @returns {Promise<void>}
 */
const removeAsyncStorageValue = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error('Error removing from AsyncStorage:', e);
  }
};

export { getAsyncStorageValue, setAsyncStorageValue, removeAsyncStorageValue };
