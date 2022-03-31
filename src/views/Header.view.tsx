import React, { FC } from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";

type HeaderView = {};

const HeaderView: FC<HeaderView> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>janavar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Caveat-Regular",
    fontSize: 50,
  },
});

export default HeaderView;
