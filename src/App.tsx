import "react-native-gesture-handler";
import "react-native-get-random-values";
import "@ethersproject/shims";
import React from "react";
import { ethers } from "ethers";
import { HooksManager } from "hooks";
import {
  // SafeAreaView,
  // ScrollView,
  // StatusBar,
  Appearance,
  StatusBar,
} from "react-native";
import { Provider } from "react-redux";
import store from "./__store";

// import { Colors } from "react-native/Libraries/NewAppScreen";
import { AppNavigation } from "./AppNavigation";
import { useAppIsVisible } from "./services/use-app-is-visible.hook";

HooksManager.setCouplings({ react: React, ethers });

export function colorSchemeHook() {
  return Appearance.getColorScheme() ?? "light";
}

const App = () => {
  useAppIsVisible();
  return (
    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
    <Provider store={store}>
      <StatusBar backgroundColor="rgb(100, 120, 250)" />
      <AppNavigation />
    </Provider>
    // </SafeAreaView>
  );
};

export default App;
