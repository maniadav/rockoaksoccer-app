import BackButton from "@components/BackButton";
import React from "react";
import { View, StyleSheet } from "react-native";

const SafeAreaBackButton = () => {
  return (
    <View style={styles.backButtonContainer}>
      <BackButton />
    </View>
  );
};

export default SafeAreaBackButton;

const styles = StyleSheet.create({
  backButtonContainer: {
    position: "absolute",
    top: 50,
    left: 30,
    zIndex: 1,
  },
});
