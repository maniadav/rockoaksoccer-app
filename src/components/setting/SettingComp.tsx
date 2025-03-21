import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const SettingSection = ({ title, children }: any) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.sectionContent}>{children}</View>
    </View>
  );
};

const SettingItem = ({ title, icon, onPress, iconColor = "#555" }: any) => (
  <TouchableOpacity style={styles.settingsItem} onPress={onPress}>
    <View style={styles.settingsItemContent}>
      {icon}
      <Text style={styles.settingsItemText}>{title}</Text>
    </View>
    <MaterialIcons name="chevron-right" size={24} color="#888" />
  </TouchableOpacity>
);

export { SettingSection, SettingItem };

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 24,
    color: "#1c1c1e",
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1c1c1e",
    marginBottom: 12,
  },
  sectionContent: {
    backgroundColor: "white",
    borderRadius: 12,
    overflow: "hidden",
  },
  settingsItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  settingsItemContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingsItemText: {
    fontSize: 16,
    marginLeft: 12,
    color: "#1c1c1e",
  },
});
