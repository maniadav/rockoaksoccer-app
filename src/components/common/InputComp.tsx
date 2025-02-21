import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
} from "react-native";

interface InputProps extends TextInputProps {
  label?: string;
  placeholder?: string;
  onChangeHandler: (text: string) => void;
  value?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  errorMessage?: string;
  outlined?: boolean;
  secure?: boolean;
  numLines?: number;
  validate?: () => void;
  errorColor?: string;
  bgColor?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  onChangeHandler,
  value,
  leftIcon,
  rightIcon,
  errorMessage,
  outlined,
  secure,
  numLines = 1,
  validate,
  errorColor = "red",
  bgColor = "#E8E1ED",
  ...rest
}) => {
  const containerBorder = outlined ? styles.outlined : styles.standard;
  const multilineStyle =
    numLines > 1 ? { height: 30 * numLines, paddingTop: 10 } : {};

  return (
    <View style={{ padding: 10, minWidth: 300, width: "100%" }}>
      {label && <Text style={styles.buttonLabel}>{label}</Text>}
      <View
        style={[
          styles.container,
          containerBorder,
          multilineStyle,
          { backgroundColor: bgColor },
        ]}
      >
        {leftIcon && <View style={{ paddingRight: 8 }}>{leftIcon}</View>}
        <TextInput
          secureTextEntry={secure}
          placeholder={placeholder || (label ? `Enter ${label}` : "")}
          onChangeText={onChangeHandler}
          value={value}
          multiline={numLines > 1}
          numberOfLines={numLines}
          onEndEditing={validate}
          style={{ flex: 5 }}
          {...rest}
        />
        {rightIcon && <View style={{ paddingRight: 8 }}>{rightIcon}</View>}
      </View>
      {errorMessage && (
        <Text style={{ color: errorColor, paddingTop: 4 }}>{errorMessage}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
  outlined: {
    borderColor: "#6A50A8",
    borderRadius: 4,
    borderWidth: 1,
  },
  standard: {
    borderBottomColor: "#6A50A8",
    borderBottomWidth: 1,
  },
  buttonLabel: {
    fontWeight: "500",
    textTransform: "capitalize",
    marginBottom: 4,
    paddingLeft: 2,
    fontSize: 14,
  },
});

export default Input;
