import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../app.types";
import LoginScreen from "../screens/Login.screen";
import GreetingScreen from "../screens/Greeting.screen";

const Stack = createNativeStackNavigator<RootStackParamsList>();

const GreetingNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={GreetingScreen}
        options={{
          headerShown: false,
          // transitionSpec: {
          //   open: config,
          //   close: config,
          // },
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        initialParams={{ greeting: "Login, little one" }}
        options={{
          animationTypeForReplace: "pop",
          headerShown: false,
          // transitionSpec: {
          //   open: config,
          //   close: config,
          // },
        }}
      />
    </Stack.Navigator>
  );
};

export default GreetingNavigator;
