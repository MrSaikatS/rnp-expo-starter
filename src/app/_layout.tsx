import { SplashScreen, Stack } from "expo-router";
import "react-native-reanimated";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  //   initialRouteName: "(tabs)",
  initialRouteName: "index",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayoutNavigator = () => {
  return (
    <>
      <Stack />
    </>
  );
};

const RootLayout = () => {
  // Hide the splash screen until loading is complete.
  SplashScreen.hideAsync();

  return (
    <>
      <RootLayoutNavigator />
    </>
  );
};

export default RootLayout;
