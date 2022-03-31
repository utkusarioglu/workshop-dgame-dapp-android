import React from "react";
import type { FC } from "react";
import HeaderView from "src/views/Header.view";
import { StyleSheet, View, Text, Pressable } from "react-native";
import type { RootStackParamsList } from "src/app.types";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type GreetingScreenProps = NativeStackScreenProps<
  RootStackParamsList,
  "Welcome"
>;

const GreetingScreen: FC<GreetingScreenProps> = ({ navigation }) => {
  const openLoginOnClick = () => {
    navigation.navigate("Login", { greeting: "Try your hand" });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <HeaderView />
      </View>
      <View style={styles.midSection}>
        <Pressable onPress={openLoginOnClick} style={styles.signUpButton}>
          <Text style={styles.buttonText}>Sign up</Text>
        </Pressable>
      </View>
      <View style={styles.bottomSection}>
        <Pressable
          onPress={openLoginOnClick}
          style={styles.loginButton}
          hitSlop={20}>
          <Text style={styles.buttonText}>Already have an account?</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerSection: {
    flex: 3,
    alignContent: "center",
    justifyContent: "center",
  },
  midSection: {
    flex: 3,
    // alignContent: "center",
    justifyContent: "center",
    paddingLeft: 30,
    paddingRight: 30,
  },
  bottomSection: {
    flex: 1,
    minHeight: 40,
    maxHeight: 50,
  },
  signUpButton: {
    backgroundColor: "#550055",
    padding: 20,
    borderRadius: 10,
  },
  loginButton: {},
  buttonText: {
    textAlign: "center",
  },
});

export default GreetingScreen;
