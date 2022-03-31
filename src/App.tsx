/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

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
  useColorScheme,
} from "react-native";
import { Provider } from "react-redux";
import store from "./__store";

import { Colors } from "react-native/Libraries/NewAppScreen";
// import { HeaderView } from "./Header.view";
// import { Section } from "./Section.view";
import {
  DefaultTheme,
  NavigationContainer,
  DarkTheme,
} from "@react-navigation/native";
import MainNavigator from "./navigators/Main.navigator";

HooksManager.setCouplings({ react: React, ethers });

const theme = (scheme: string | null | undefined) => {
  switch (scheme) {
    case "dark":
      return {
        ...DarkTheme,
        colors: {
          ...DarkTheme.colors,
          // primary: "rgb(100, 120, 250)",
          background: "rgb(10, 10, 10)",
        },
      };

    default:
      return DefaultTheme;
  }
};

const App = () => {
  const colorScheme = useColorScheme();

  return (
    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
    <Provider store={store}>
      <NavigationContainer theme={theme(colorScheme)}>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
    // </SafeAreaView>
  );
};
export default App;
