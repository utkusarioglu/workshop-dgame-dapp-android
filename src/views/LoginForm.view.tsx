import { FC, useEffect } from "react";
import React, { useState, createRef } from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useFakeLogin } from "hooks";
import { login as doLogin } from "../slices/user.slice";

type LoginFormViewProps = {
  updateGreeting: (greeting: string) => void;
};

const LoginFormView: FC<LoginFormViewProps> = ({ updateGreeting }) => {
  const passwordInputRef = createRef<TextInput>();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, tryLogin, setIdle] = useFakeLogin();

  const loginButtonOnPress = () => {
    tryLogin({ username, password });
  };

  const usernameOnChangeText = (username: string) => {
    updateGreeting("Go on, little one:)");
    setUsername(username);
    setIdle();
  };

  const passwordOnChangeText = (password: string) => {
    updateGreeting("You're getting there");
    setPassword(password);
    setIdle();
  };

  useEffect(() => {
    if (login.state === "success") {
      updateGreeting("Let the feast begin");
      setTimeout(() => {
        doLogin(username);
        // navigateHome();
      }, 300);
      // setTimeout(() => {
      //   setPassword("");
      //   setIdle();
      // }, 1000);
    } else if (login.state === "fail") {
      updateGreeting("You have failed your ancestors...");
      setTimeout(() => {
        setIdle();
      }, 5000);
    }
  }, [login.state]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={usernameOnChangeText}
          value={username}
          placeholder="username"
          editable={login.state !== "fetch"}
          textAlign="center"
          autoFocus
          autoComplete="username"
          textContentType="username"
          returnKeyType="next"
          keyboardType="email-address"
          onSubmitEditing={() => {
            passwordInputRef.current?.focus();
          }}
        />
        <TextInput
          ref={passwordInputRef}
          style={styles.textInput}
          onChangeText={passwordOnChangeText}
          value={password}
          placeholder="password"
          editable={login.state !== "fetch"}
          textAlign="center"
          textContentType="password"
          returnKeyType="next"
          secureTextEntry
          keyboardType="number-pad"
          onSubmitEditing={loginButtonOnPress}
        />
        <Pressable onPress={loginButtonOnPress}>
          <View
            style={{
              ...styles.loginButton,
              ...loginButtonColor(login),
            }}>
            <Text style={styles.loginButtonText}>Login</Text>
          </View>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};

function loginButtonColor(login: any) {
  switch (login.state) {
    case "fail":
      return { backgroundColor: "red" };
    case "success":
      return { backgroundColor: "green" };
    case "fetch":
      return { backgroundColor: "#444444" };
    default:
      return {};
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  textInput: {
    backgroundColor: "#222222",
    borderRadius: 10,
    marginBottom: 10,
    padding: 15,
  },
  loginButton: {
    backgroundColor: "#445566",
    padding: 15,
    borderRadius: 10,
  },
  loginButtonText: {
    textAlign: "center",
  },
});

export default LoginFormView;
