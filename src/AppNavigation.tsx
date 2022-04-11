import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigators/App.navigator";
import { selectScheme } from "./slices/app.slice";
import { theme } from "./__theme";

export const AppNavigation = () => {
  const scheme = useSelector(selectScheme);

  return (
    <NavigationContainer theme={theme(scheme)}>
      <AppNavigator />
    </NavigationContainer>
  );
};
