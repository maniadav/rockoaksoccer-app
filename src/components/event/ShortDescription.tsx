import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ShortDescription = ({ description }: { description: string }) => {
  return (
    <View style={styles.shortDescContainer}>
      <Text style={styles.shortDescription}>{description}</Text>
    </View>
  );
};

export default ShortDescription;

const styles = StyleSheet.create({
  shortDescContainer: {
    marginBottom: 16,
    backgroundColor: "#f5f2ec",
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 3,
    borderLeftColor: "#993b1f",
  },
  shortDescription: {
    fontSize: 16,
    color: "#333",
    fontStyle: "italic",
    lineHeight: 24,
  },
});
