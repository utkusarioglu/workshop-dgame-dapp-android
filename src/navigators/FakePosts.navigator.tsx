import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FakePostsListScreen from "src/screens/FakePostsList.screen";
import FakePostDetailsScreen from "src/screens/FakePostDetails.screen";

export type FakePostsNavigatorParamsList = {
  FakePostsList: undefined;
  FakePostDetails: {
    title: string;
    body: string;
  };
};

const Stack = createNativeStackNavigator<FakePostsNavigatorParamsList>();

const FakePostsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FakePostsList"
        component={FakePostsListScreen}
        options={{ title: "Fake Posts", headerShown: false }}
      />
      <Stack.Screen
        name="FakePostDetails"
        component={FakePostDetailsScreen}
        options={{ presentation: "modal" }}
      />
    </Stack.Navigator>
  );
};

export default FakePostsNavigator;
