import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts
} from "@expo-google-fonts/nunito-sans";
import { ThemeProvider } from "styled-components";
import { Routes } from "./src/routes";
import theme from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded && <Routes />}
    </ThemeProvider>
  );
}
