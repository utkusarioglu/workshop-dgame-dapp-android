import React from "react";
import type { FC } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { HomeNavigatorParamsList } from "../navigators/Home.navigator";
import FakePostsView from "../views/FakePosts.view";
import { useNavigation } from "@react-navigation/native";

type Home1ScreenProps = BottomTabScreenProps<HomeNavigatorParamsList, "Home 1">;

const FakeApiScreen: FC<Home1ScreenProps> = ({ navigation }) => {
  return (
    <View>
      <LogoutButton />
      <FakePostsView />
    </View>
  );
};

const LogoutButton = () => {
  const navigation = useNavigation();
  const logoutOnPress = () => {
    navigation
      .getParent()
      ?.navigate("Login", { greeting: "You have logged out, like a coward" });
  };
  return (
    <Pressable onPress={logoutOnPress}>
      <View style={styles.button}>
        <Text>Logout</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: "#770045",
  },
});

export default FakeApiScreen;
