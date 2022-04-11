import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import notifee from "@notifee/react-native";
import { AndroidColor } from "@notifee/react-native";
import EthereumBlocksView from "src/views/EthereumBlocks.view";

const EthereumBlocksScreen = () => {
  const [notificationId, setNotificationId] = useState("");
  const [notificationCount, setNotificationCount] = useState(1);

  async function createChannel() {
    const channelId = await notifee.createChannel({
      id: "default",
      name: "Default Channel",
    });
    return channelId;
  }

  async function displayNotificationOnClick(title: string, body: string) {
    // Create a channel
    const channelId = await createChannel();
    // Display a notification
    const id = await notifee.displayNotification({
      title,
      body,
      android: {
        channelId,
        smallIcon: "ic_launcher", // optional, defaults to 'ic_launcher'.
      },
    });
    setNotificationId(id);
  }

  async function updateNotificationOnClick() {
    if (notificationId.length > 0) {
      setNotificationCount((notificationCount) => ++notificationCount);
      const channelId = await createChannel();
      await notifee.displayNotification({
        id: notificationId,
        title: `Notification: ${notificationCount}`,
        body: `Notification body for notification no: ${notificationCount}`,
        android: {
          channelId,
          smallIcon: "ic_launcher", // optional, defaults to 'ic_launcher'.
        },
      });
    }
  }

  async function cancelNotificationOnClick() {
    if (notificationId.length > 0) {
      setNotificationCount(1);
      await notifee.cancelNotification(notificationId);
    }
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() =>
          displayNotificationOnClick(
            "click notification",
            "You're seeing this because you clicked stuff",
          )
        }>
        <View style={styles.button}>
          <Text>Create notification</Text>
        </View>
      </Pressable>
      <Pressable onPress={updateNotificationOnClick}>
        <View style={styles.button}>
          <Text>Update notification</Text>
        </View>
      </Pressable>
      <Pressable onPress={cancelNotificationOnClick}>
        <View style={styles.button}>
          <Text>Cancel notification</Text>
        </View>
      </Pressable>
      <EthereumBlocksView />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  button: {
    padding: 10,
    backgroundColor: AndroidColor.MAROON,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default EthereumBlocksScreen;
