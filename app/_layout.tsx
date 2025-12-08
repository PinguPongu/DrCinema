import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';
import { Provider as StoreProvider } from "react-redux";
import store, { RootState, AppDispatch } from "@/src/redux/store";
import { Text } from "react-native";

import { useColorScheme } from '@/hooks/use-color-scheme';
import { useEffect } from 'react';
import { getToken } from '@/src/redux/features/token/token-slice';

export const unstable_settings = {
  anchor: '(tabs)',
};

function InnerRoot() {
  const colorScheme = useColorScheme();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getToken());
  }, [dispatch]);
  
  const token = useSelector((state: RootState) => {
    console.log(state)
    return state.token.token
  });


  return (
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>

  );
}

export default function RootLayout() {
  return (
    <StoreProvider store={store}>
      <InnerRoot />
    </StoreProvider>

  );
}
