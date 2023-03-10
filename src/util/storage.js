import AsyncStorage from '@react-native-async-storage/async-storage';


export async function saveData(key, data) {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch {
        // TODO: save to error logger
    }
}
  
export async function retrieveData(key) {
    try {
        const rawData = await AsyncStorage.getItem(key);

        if (rawData) {
        return JSON.parse(rawData);
        }

        return null;
    } catch {
        // TODO: save to error logger
        return null;
    }
}

export function deleteData(key) {
    try {
      AsyncStorage.removeItem(key);
    } catch {
      // TODO: save to error logger
    }
  }
  