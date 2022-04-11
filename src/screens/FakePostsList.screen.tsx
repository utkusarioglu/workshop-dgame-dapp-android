import React from "react";
import type { FC } from "react";
import { View, Text, Pressable, StyleSheet, Alert } from "react-native";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { HomeNavigatorParamsList } from "../navigators/Home.navigator";
import FakePostsView from "../views/FakePosts.view";
import { logout } from "../slices/user.slice";

type FakePostsListScreenProps = BottomTabScreenProps<
  HomeNavigatorParamsList,
  "FakeApi"
>;

const FakeApiScreen: FC<FakePostsListScreenProps> = ({ navigation }) => {
  return (
    <View>
      <LogoutButton />
      <FakePostsView />
    </View>
  );
};

const LogoutButton = () => {
  const logoutOnPress = () => {
    Alert.alert("Logout", "Are you sure?", [
      { text: "Cancel", style: "cancel" },
      { text: "Log me out!", style: "default", onPress: logout },
    ]);
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
