import { theme } from "@components/theme";
import React from "react";
import { Text, StyleSheet } from "react-native";

const TitleTile = () => {
  return (
    <Text style={styles.logoText}>
      Rock<Text style={styles.primaryText}>Oak</Text>
      <Text style={styles.logoTextSmall}> Soccer</Text>
    </Text>
  );
};

export default TitleTile;

const styles = StyleSheet.create({
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  primaryText: {
    color: theme.colors.primary,
  },
  logoTextSmall: {
    fontSize: 16,
    color: "black",
    textTransform: "lowercase",
    position: "absolute",
    left: 50,
    fontWeight: "normal",
  },
});
