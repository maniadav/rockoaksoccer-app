import COLOUR from "@constants/colour.constant";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface TypeBadgeProps {
  type: string;
  containerStyle?: any;
  textStyle?: any;
}

const TypeBadge: React.FC<TypeBadgeProps> = ({
  type,
  containerStyle,
  textStyle,
}) => {
  return (
    <View style={[styles.typeContainer, containerStyle]}>
      <Text style={[styles.typeText, textStyle]}>{type}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  typeContainer: {
    backgroundColor: COLOUR.primary,
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  typeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default TypeBadge;
