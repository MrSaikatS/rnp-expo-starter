import {
  DarkTheme as ReactNavigationDarkTheme,
  DefaultTheme as ReactNavigationLightTheme,
  Theme,
} from "@react-navigation/native";
import {
  adaptNavigationTheme,
  MD3DarkTheme,
  MD3LightTheme,
  MD3Theme,
} from "react-native-paper";
import { customdarkColors, customlightColors } from "./Colors";

// Merging the Default Material Design 3 Light Theme with our custom light color scheme
export const PaperLightTheme: MD3Theme = {
  ...MD3LightTheme,
  colors: customlightColors.colors,
};

// Merging the Default Material Design 3 Dark Theme with our custom dark color scheme
export const PaperDarkTheme: MD3Theme = {
  ...MD3DarkTheme,
  colors: customdarkColors.colors,
};

// Creating a custom react navigation theme from our custom theme
const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: ReactNavigationLightTheme,
  reactNavigationDark: ReactNavigationDarkTheme,
  materialLight: PaperLightTheme,
  materialDark: PaperDarkTheme,
});

export const NavigationLightTheme: Theme = {
  ...LightTheme,
  fonts: ReactNavigationLightTheme.fonts,
};

export const NavigationDarkTheme: Theme = {
  ...DarkTheme,
  fonts: ReactNavigationDarkTheme.fonts,
};
