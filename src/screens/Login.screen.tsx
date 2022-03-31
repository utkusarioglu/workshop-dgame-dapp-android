import React from "react";
import type { FC } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import HeaderView from "../views/Header.view";
import LoginFormView from "src/views/LoginForm.view";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamsList } from "../app.types";

type LoginScreenProps = NativeStackScreenProps<RootStackParamsList, "Login">;

const LoginScreen: FC<LoginScreenProps> = ({
  navigation,
  route: {
    params: { greeting },
  },
}) => {
  const navigateHome = () => {
    // navigation.navigate("Home", { message: "coming from login" });
    navigation.getParent()?.navigate("Home", { message: "coming from login" });
  };

  const updateGreeting = (greeting: string) => {
    navigation.setParams({ greeting });
  };

  const navigateToGreeting = () => {
    navigation.navigate("Welcome");
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <HeaderView />
      </View>
      <View style={styles.loginSection}>
        <Text style={styles.greeting}>{greeting}</Text>
        <LoginFormView {...{ updateGreeting, navigateHome }} />
      </View>
      <View style={styles.bottomSection}>
        <Pressable
          onPress={navigateToGreeting}
          style={styles.goBackButton}
          hitSlop={20}>
          <Text style={styles.goBackButtonText}>Go back</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerSection: {
    flex: 3,
    alignContent: "center",
    justifyContent: "center",
  },
  loginSection: {
    flex: 3,
    alignContent: "center",
    justifyContent: "center",
    padding: 20,
  },
  bottomSection: {
    flex: 1,
    minHeight: 40,
    maxHeight: 50,
  },
  greeting: {
    textAlign: "center",
  },
  goBackButton: {},
  goBackButtonText: {
    textAlign: "center",
  },
});

export default LoginScreen;
