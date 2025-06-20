import React from "react";
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { theme } from "./theme";

export default function Background({ children }: any) {
  return (
    <ImageBackground
      source={require("../.././assets/images/leg_ball.jpg")}
      resizeMode="cover"
      style={styles.background}
    >
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    // paddingVertical: 10,
  },
  container: {
    flex: 1,
    // padding: 20,
    width: "100%",
    maxWidth: 360,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
});
