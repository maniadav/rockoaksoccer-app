import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import COLOUR from "@constants/colour.constant";

type ProfileDetailCardProps = {
  icon: keyof typeof MaterialIcons.glyphMap;
  title: string;
  value: string;
  multiline?: boolean;
};

const ProfileDetailCard = ({
  icon,
  title,
  value,
  multiline = false,
}: ProfileDetailCardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <MaterialIcons name={icon} size={24} color={COLOUR.primary} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text
          style={[styles.value, multiline && styles.multiline]}
          numberOfLines={multiline ? 4 : 1}
        >
          {value}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#f8f9fa",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#eeeeee",
  },
  iconContainer: {
    marginRight: 16,
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#dbe2e9",
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    color: "#757575",
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333333",
  },
  multiline: {
    lineHeight: 22,
  },
});

export default ProfileDetailCard;
