import React from "react";
import { View, Text } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { FC } from "react";
import type { FakePostsNavigatorParamsList } from "../navigators/FakePosts.navigator";

type FakePostDetailsScreenParamsList = NativeStackScreenProps<
  FakePostsNavigatorParamsList,
  "FakePostDetails"
>;

const FakePostDetailsScreen: FC<FakePostDetailsScreenParamsList> = ({
  route: {
    params: { title, body },
  },
}) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{body}</Text>
    </View>
  );
};

export default FakePostDetailsScreen;
