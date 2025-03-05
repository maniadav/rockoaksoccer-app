import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

const Loader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        L
        <ActivityIndicator
          size="small"
          color="#FF385C"
          style={styles.spinner}
        />
        ading . . .
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 384,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1f2937",
  },
  spinner: {
    marginHorizontal: 4,
  },
});

export default Loader;
