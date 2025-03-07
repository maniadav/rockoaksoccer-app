import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

const HashTagChip = ({ tag }: { tag: string }) => {
  return (
    <View style={styles.tagContainer}>
      <Text style={styles.tagText}>#{tag}</Text>
    </View>
  );
};

export default HashTagChip;

const styles = StyleSheet.create({
  tagContainer: {
    backgroundColor: "#f0ebe1",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
  },
  tagText: {
    color: "#993b1f",
    fontSize: 14,
  },
});
