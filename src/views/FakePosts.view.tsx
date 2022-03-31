import React from "react";
import type { FC } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useFakeApi } from "hooks";

const ItemView: FC<{ title: string; body: string }> = ({ title, body }) => (
  <View key={title} style={styles.card}>
    <Text style={styles.title}>{title}</Text>
    <Text>{body}</Text>
  </View>
);

const FakePostsView = () => {
  const posts = useFakeApi();

  return (
    <View style={styles.container}>
      {posts.length ? (
        <FlatList
          data={posts}
          renderItem={({ item: { title, body } }) => (
            <ItemView title={title} body={body} />
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
