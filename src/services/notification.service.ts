import notifee from "@notifee/react-native";

export class NotificationService {
  public async createAppInactiveNotification() {
    async function createChannel() {
      return await notifee.createChannel({
        id: "ethereum",
        name: "Ethereum channel",
      });
    }
    const channelId = await createChannel();
    await notifee.displayNotification({
      title: "Janavar is inactive",
      body: "Come back!",
      android: {
        channelId,
        smallIcon: "ic_launcher",
        largeIcon:
          "https://pbs.twimg.com/profile_images/722171193323884544/UNH4KybP_400x400.jpg",
        actions: [
          {
            title: "ok",
            pressAction: {
              id: "hop",
            },
          },
        ],
      },
    });
  }
}

export default new NotificationService();
