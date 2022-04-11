import React from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { FC } from "react";
import type { RootStackParamsList } from "../app.types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EthereumBlocksScreen from "../screens/EthereumBlocks.screen";
import CameraScreen from "../screens/Camera.screen";
import Icon from "react-native-vector-icons/MaterialIcons";
import FakePostsNavigator from "./FakePosts.navigator";

type HomeScreenProps = NativeStackScreenProps<RootStackParamsList, "Home">;
export type HomeNavigatorParamsList = {
  FakeApi: undefined;
  EthereumBlocks: undefined;
  Camera: undefined;
};

const Tab = createBottomTabNavigator<HomeNavigatorParamsList>();

const HomeNavigator: FC<HomeScreenProps> = ({ navigation, route: {} }) => {
  const titleOnPress = () => {
    navigation.setParams({
      message: "changed by button",
    });
  };

  const colorOnPress = () => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#770011",
      },
      headerTintColor: "#ffffff",
    });
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const iconColor = focused ? "red" : color;

          switch (route.name) {
            case "FakeApi":
              return <Icon name="dashboard" size={size} color={iconColor} />;

            case "EthereumBlocks":
              return <Icon name="leaderboard" size={size} color={iconColor} />;

            case "Camera":
              return <Icon name="photo-camera" size={size} color={iconColor} />;
          }
        },
      })}>
      <Tab.Screen
        name="FakeApi"
        component={FakePostsNavigator}
        options={{ title: "Fake Posts", headerShown: false }}
      />
      <Tab.Screen
        name="EthereumBlocks"
        component={EthereumBlocksScreen}
        options={{ title: "Ethereum Blocks" }}
      />
      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{ title: "Camera" }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
