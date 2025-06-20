import COLOUR from "@constants/colour.constant";
import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Heading = ({
  heading,
  subHeading,
  dark,
  border,
  borderBottom,
  center,
}: {
  heading?: string;
  subHeading?: string;
  dark?: boolean;
  border?: boolean;
  borderBottom?: boolean;
  center?: boolean;
}) => {
  return (
    <View style={styles.container}>
      {heading && (
        <Text
          style={[
            styles.heading,
            border && styles.withBorder,
            center && styles.withCenter,
          ]}
        >
          {heading}
        </Text>
      )}
      {borderBottom && <View style={styles.borderBottom} />}
      {subHeading && (
        <Text
          style={[styles.subHeading, dark ? styles.textBlack : styles.textGray]}
        >
          {subHeading}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    alignItems: "flex-start",
    width: "100%",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    backgroundColor: "transparent",
    textAlign: "left",
    marginBottom: 6,
    color: COLOUR.primary,
  },
  withCenter: {
    textAlign: "center",
  },
  subHeading: {
    fontSize: 12,
    textAlign: "left",
    color: COLOUR.secondary,
  },
  textBlack: {
    color: "black",
  },
  textGray: {
    color: "#d1d5db",
  },
  break: {
    marginBottom: 8,
  },
  withBorder: {
    borderLeftWidth: 8,
    borderColor: "black",
    paddingLeft: 16,
  },
  borderBottom: {
    width: "25%",
    height: 3,
    marginTop: 1,
    backgroundColor: "black",
  },
});

export default Heading;
