import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNavigator from "./Home.navigator";
import GreetingNavigator from "./Greeting.navigator";
import { selectUserState } from "src/slices/user.slice";
import { useSelector } from "react-redux";
import SettingsScreen from "src/screens/Settings.screen";

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
  const { loggedIn } = useSelector(selectUserState);
  return (
    <Drawer.Navigator>
      {loggedIn ? (
        <>
          <Drawer.Screen name="Home" component={HomeNavigator} />
          <Drawer.Screen name="Settings" component={SettingsScreen} />
        </>
      ) : (
        <Drawer.Screen
          name="Greeting"
          component={GreetingNavigator}
          options={{ headerShown: false }}
        />
      )}
    </Drawer.Navigator>
  );
};

export default MainNavigator;
