import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const LongDescription = ({ description }: { description: string }) => {
  const [expandedDescription, setExpandedDescription] = useState(false);
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>About This Event</Text>
      <Text
        style={styles.description}
        numberOfLines={expandedDescription ? undefined : 3}
      >
        {description}
      </Text>
      {description.length > 120 && (
        <TouchableOpacity
          onPress={() => setExpandedDescription(!expandedDescription)}
        >
          <Text style={styles.readMore}>
            {expandedDescription ? "Show less" : "Read more"}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default LongDescription;

const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
  },
  readMore: {
    color: "#993b1f",
    fontWeight: "600",
    marginTop: 8,
  },
});
