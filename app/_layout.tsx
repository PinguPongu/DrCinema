import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';
import { Provider as StoreProvider } from "react-redux";
import store, { RootState } from "@/src/redux/store";
import { Text } from "react-native";

import { useColorScheme } from '@/hooks/use-color-scheme';
import { authenticate } from '@/api/authenticate';
import { getAuthenticate } from '@/src/redux/features/authenticate/authenticate-slice';
import { useEffect } from 'react';

export const unstable_settings = {
  anchor: '(tabs)',
};

function InnerRoot() {
  const colorScheme = useColorScheme();
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.authenticate.token);

  useEffect(() => {
    const fetchAuth = async () => {
      try {
        const data = await authenticate();
        dispatch(getAuthenticate(data));
      } catch (err) {
        console.error('Auth error: ', err);
      }
    };

    fetchAuth();
  }, [dispatch]);

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
