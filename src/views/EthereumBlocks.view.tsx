import type { BlockWithTransactions } from "@ethersproject/abstract-provider";
import React, { useEffect, useState } from "react";
import type { FC } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useEthereumBlocks, toEth } from "hooks";

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
  const blocks = useEthereumBlocks();

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
