import AsyncStorage from '@react-native-async-storage/async-storage';
import { Review as ReviewType } from "@/src/types/review";

const KEY = "reviews";

export async function loadReviewsFromStorage(): Promise<ReviewType[]> {
  const json = await AsyncStorage.getItem(KEY);
  return json ? JSON.parse(json) : [];
}

export async function saveReviewsToStorage(reviews: ReviewType[]) {
  await AsyncStorage.setItem(KEY, JSON.stringify(reviews));
  console.log(reviews);
}
