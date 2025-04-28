import { ThemeProvider } from "@react-navigation/native";
import {
  onlineManager,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import * as Network from "expo-network";
import { SplashScreen, Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { PaperProvider } from "react-native-paper";
import "react-native-reanimated";
import {
  NavigationDarkTheme,
  NavigationLightTheme,
  PaperDarkTheme,
  PaperLightTheme,
} from "../constants/Themes";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayoutNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <>
      <PaperProvider
        theme={colorScheme === "dark" ? PaperDarkTheme : PaperLightTheme}>
        <ThemeProvider
          value={
            colorScheme === "dark" ? NavigationDarkTheme : NavigationLightTheme
          }>
          <Stack
            screenOptions={{
              statusBarBackgroundColor:
                colorScheme === "dark"
                  ? NavigationDarkTheme.colors.background
                  : NavigationLightTheme.colors.background,
              statusBarStyle: colorScheme === "dark" ? "light" : "dark",
            }}>
            <Stack.Screen
              name="(tabs)"
              options={{ headerShown: false }}
            />
          </Stack>
        </ThemeProvider>
      </PaperProvider>
    </>
  );
};

const RootLayout = () => {
  // Hide the splash screen until loading is complete.
  SplashScreen.hideAsync();

  // Online status management
  onlineManager.setEventListener((setOnline) => {
    const eventSubscription = Network.addNetworkStateListener((state) => {
      setOnline(!!state.isConnected);
    });
    return eventSubscription.remove;
  });

  // Create a QueryClient Instance
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 5,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RootLayoutNavigator />
      </QueryClientProvider>
    </>
  );
};

export default RootLayout;
