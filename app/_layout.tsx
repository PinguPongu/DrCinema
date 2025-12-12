import 'react-native-gesture-handler';

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';
import { Provider as StoreProvider } from "react-redux";
import store, { RootState, AppDispatch } from "@/src/redux/store";
import { loadFavoritesFromStorage } from '@/src/services/favoritesStorage';
import { setFavorites } from '@/src/redux/favorites/favoritesSlice';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { useEffect } from 'react';
import { getToken } from '@/src/redux/features/token/token-slice';



import { GestureHandlerRootView } from "react-native-gesture-handler";
import { loadReviewsFromStorage } from '@/src/services/reviewStorage';
import { setReviews } from '@/src/redux/reviews/reviewsSlice';


export const unstable_settings = {
  anchor: '(tabs)',
};

function InnerRoot() {
  const colorScheme = useColorScheme();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getToken());
  }, [dispatch]);

  console.log(useSelector((state: RootState) => state.token.token));


  useEffect(() => {
    async function initFavorites() {
      const favorites = await loadFavoritesFromStorage();
      dispatch(setFavorites(favorites));
    }
    initFavorites();
  }, [dispatch]);

  useEffect(() => {
    async function initReviews() {
      const reviews = await loadReviewsFromStorage();
      dispatch(setReviews(reviews));
    }
    initReviews();
  }, [dispatch]);

  return (
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="cinema-details" options={{ headerShown: false }} />
          <Stack.Screen name="movie-details" options={{ headerShown: false }}/>
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>

  );
}

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StoreProvider store={store}>
        <InnerRoot />
      </StoreProvider>
    </GestureHandlerRootView>

  );
}
