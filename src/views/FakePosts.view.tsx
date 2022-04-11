import React from "react";
import type { FC } from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { useFakeApi } from "hooks";
import { useNavigation } from "@react-navigation/native";

const ItemView: FC<{ title: string; body: string }> = ({ title, body }) => {
  const navigation = useNavigation();
  const cardOnPress = () => {
    // @ts-ignore
    navigation.navigate("FakePostDetails", { title, body });
  };

  return (
    <Pressable onPress={cardOnPress}>
      <View key={title} style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text>{body}</Text>
      </View>
    </Pressable>
  );
};

const FakePostsView = () => {
  const posts = useFakeApi();

  return (
    <View style={styles.container}>
      {posts.length ? (
        <FlatList
          data={posts}
          renderItem={({ item: { title, body } }) => (
            <ItemView
              title={title}
              body={
                `${body}`.replace(/\n/, "").split(" ").slice(0, 10).join(" ") +
                "..."
              }
            />
          )}
          keyExtractor={({ title }) => title}></FlatList>
      ) : (
        <Text>No fake posts here...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  card: {
    padding: 15,
    backgroundColor: "#202020",
    marginBottom: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default FakePostsView;
