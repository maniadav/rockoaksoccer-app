import React from "react";
import { StyleSheet } from "react-native";
import { Button as PaperButton } from "react-native-paper";
import { theme } from "./theme";

export default function ButtonComp({ mode, style, ...props }: any) {
  return (
    <PaperButton
      style={[
        styles.button,
        mode === "outlined" && { backgroundColor: theme.colors.surface },
        style,
      ]}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    width: "auto",
    marginVertical: 5,
    backgroundColor: theme.colors.primary,
  },
  text: {
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: 26,
  },
});
