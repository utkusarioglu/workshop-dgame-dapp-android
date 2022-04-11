import type { BlockWithTransactions } from "@ethersproject/abstract-provider";
import React, { useEffect } from "react";
import type { FC } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useEthereumBlocks, toEth } from "hooks";
import notifee from "@notifee/react-native";
import { useNavigation } from "@react-navigation/native";

type BlockCardProps = { item: BlockWithTransactions };

const BlockCard: FC<BlockCardProps> = ({
  item: { hash, timestamp, transactions },
}) => {
  return (
    <View style={styles.blockCard} key={hash}>
      <Text style={styles.time}>{new Date(timestamp).toLocaleString()}</Text>
      <View>
        {transactions.length ? (
          transactions
            .filter((transaction) => transaction.value.gt(1000))
            .map((transaction) => (
              <View key={transaction.hash}>
                <Text>{toEth(transaction.value)} ETH</Text>
              </View>
            ))
        ) : (
          <Text>No transactions in this block</Text>
        )}
      </View>
    </View>
  );
};

const EthereumBlocksView = () => {
  const navigation = useNavigation();
  const blocks = useEthereumBlocks();

  useEffect(() => {
    async function createChannel() {
      return await notifee.createChannel({
        id: "ethereum",
        name: "Ethereum channel",
      });
    }

    navigation.addListener("blur", async () => {
      const channelId = await createChannel();
      await notifee.displayNotification({
        title: "Ethereum blur",
        body: "You have blurred from ethereum blocks",
        android: {
          channelId,
          smallIcon: "ic_launcher",
          largeIcon:
            "https://pbs.twimg.com/profile_images/722171193323884544/UNH4KybP_400x400.jpg",
          actions: [
            {
              title: "<b>H</b>op",
              pressAction: {
                id: "hop",
              },
            },
          ],
        },
      });
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={blocks.list}
        renderItem={BlockCard}
        keyExtractor={(item) => item.hash}
        ListEmptyComponent={
          blocks.lastUpdate ? <Text>List is empty</Text> : <Text>Loading</Text>
        }
        ListHeaderComponent={
          <Text>{new Date(blocks.lastUpdate).toLocaleDateString()}</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 150,
    borderRadius: 10,
  },
  blockCard: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#111111",
    marginBottom: 10,
  },
  time: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },
});

export default EthereumBlocksView;
