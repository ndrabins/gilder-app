import "react-native-url-polyfill/auto";
import "./initialization";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "./utils/styled-components";
import { darkTheme } from "./constants/Theme";
import { store } from "./store";
import { Provider } from "react-redux";

import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";

import { Logs } from "expo";

Logs.enableExpoCliLogging();

export default function App() {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <ThemeProvider theme={darkTheme}>
            <Navigation />
            <StatusBar style="light" />
          </ThemeProvider>
        </Provider>
      </SafeAreaProvider>
    );
  }
}
