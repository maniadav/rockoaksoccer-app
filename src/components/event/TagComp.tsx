import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import HashTagChip from "./HashTagChip";

const TagComp = ({ tags }: { tags: string[] }) => {
  return (
    <View style={styles.tagsContainer}>
      <FlatList
        data={tags}
        renderItem={({ item }) => <HashTagChip tag={item} />}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default TagComp;

const styles = StyleSheet.create({
  tagsContainer: {
    marginBottom: 20,
  },
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
