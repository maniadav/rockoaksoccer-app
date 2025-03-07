import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface IconInfoRowProps {
  iconName: keyof typeof Ionicons.glyphMap;
  text: string;
  extraText?: string;
  size?: number;
  iconColor?: string;
  style?: any;
  textStyle?: any;
  numberOfLines?: number;
}

const IconInfoRow: React.FC<IconInfoRowProps> = ({
  iconName,
  text,
  extraText,
  size = 20,
  iconColor = "#5E5E5E",
  style,
  textStyle,
  numberOfLines,
}) => {
  return (
    <View style={[styles.infoRow, style]}>
      <Ionicons name={iconName} size={size} color={iconColor} />
      <Text style={[styles.infoText, textStyle]} numberOfLines={numberOfLines}>
        {text}
        {extraText && <Text style={styles.extraText}> {extraText}</Text>}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  infoText: {
    fontSize: 16,
    color: "#333",
    marginLeft: 8,
  },
  extraText: {
    color: "#666",
    fontSize: 14,
  },
});

export default IconInfoRow;
