import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const AirBnbSearchCard = () => {
  return (
    <TouchableOpacity style={styles.searchButton}>
      <Ionicons name="search" size={18} color="#000" />
      <View style={styles.searchTextContainer}>
        <Text style={styles.searchTitle}>What You Looking?</Text>
        <Text style={styles.searchSubtitle}>
          Anywhere · Any week · Add guests
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AirBnbSearchCard;

const styles = StyleSheet.create({
  searchButton: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 40,
    paddingHorizontal: 16,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  searchTextContainer: {
    marginLeft: 12,
  },
  searchTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },
  searchSubtitle: {
    fontSize: 12,
    color: "#717171",
  },
});
