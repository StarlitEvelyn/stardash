import AsyncStorage from "@react-native-async-storage/async-storage";

interface TypeLock {
  id: number;
  unlockAt: number;
  timeTotal: number;
}

async function SaveLock(lock: TypeLock) {
  const jsonValue = JSON.stringify(lock);
  await AsyncStorage.setItem(lock.id.toString(), jsonValue);
}

async function getLock(id: number) {
  let data = await AsyncStorage.getItem(id.toString());
  return data != null ? JSON.parse(data) : null;
}

export { TypeLock, SaveLock, getLock };
