import AsyncStorage from "@react-native-async-storage/async-storage";

interface TypeLock {
  id: number;
  unlockAt: number;
  timeTotal: number;
}

async function SaveLock(lock: TypeLock) {
  try {
    const jsonValue = JSON.stringify(lock);
    await AsyncStorage.setItem(lock.id.toString(), jsonValue);
  } catch (e) {
    // saving error
  }
}

async function getLock(id: number) {
  try {
    const jsonValue = await AsyncStorage.getItem(id.toString());
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
}

export { TypeLock, SaveLock, getLock };
