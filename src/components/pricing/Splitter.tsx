import COLOUR from "@constants/colour.constant";
import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Splitter = ({
  primaryText = "WHAT'S INCLUDED",
  secondaryText,
  children,
}: any) => {
  return (
    <View style={styles.featuresSection}>
      <View style={styles.featuresHeader}>
        <Text style={styles.featuresSectionTitle}>{primaryText}</Text>
        <Text style={styles.featuresSectionSubtitle}>{secondaryText}</Text>
      </View>
      {children}
    </View>
  );
};

export default Splitter;

const styles = StyleSheet.create({
  featuresSection: {
    marginTop: 24,
    marginBottom: 16,
    marginHorizontal: 16,
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featuresHeader: {
    padding: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderWidth: 1,
    borderBottomWidth: 0.5,
    borderColor: "#993b1f",
  },
  featuresSectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLOUR.primary,
    letterSpacing: 1,
    marginBottom: 4,
    textTransform: "uppercase",
  },
  featuresSectionSubtitle: {
    fontSize: 14,
    // color: "#f0f0f0",
    fontWeight: "500",
  },
});
