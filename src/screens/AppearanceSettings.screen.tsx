import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { selectScheme, toggleScheme } from "src/slices/app.slice";

const AppearanceSettingsScreen = () => {
  const scheme = useSelector(selectScheme);
  return (
    <View style={styles.container}>
      <View style={styles.setting}>
        <Text style={styles.settingTitle}>Dark Mode</Text>
        <Switch
          onValueChange={() => toggleScheme()}
          value={scheme === "dark"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  setting: {
    flexDirection: "row",
  },
  settingTitle: {
    flex: 1,
  },
});

export default AppearanceSettingsScreen;
