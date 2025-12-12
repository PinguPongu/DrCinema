import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = "favorites";

export async function loadFavoritesFromStorage(): Promise<string[]> {
  const json = await AsyncStorage.getItem(KEY);
  return json ? JSON.parse(json) : [];
}

export async function saveFavoritesToStorage(favIds: string[]) {
  await AsyncStorage.setItem(KEY, JSON.stringify(favIds));
  console.log(favIds);
}