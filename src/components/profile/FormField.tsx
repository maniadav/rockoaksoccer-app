import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type FormFieldProps = {
  label: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad" | "url";
  multiline?: boolean;
  numberOfLines?: number;
};

const FormField = ({
  label,
  icon,
  value,
  onChangeText,
  placeholder,
  keyboardType = "default",
  multiline = false,
  numberOfLines = 1,
}: FormFieldProps) => {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <View
        style={[styles.inputContainer, multiline && styles.multilineContainer]}
      >
        <MaterialIcons
          name={icon}
          size={20}
          color="#777"
          style={styles.fieldIcon}
        />
        <TextInput
          style={[styles.textInput, multiline && styles.multilineInput]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          keyboardType={keyboardType}
          multiline={multiline}
          numberOfLines={numberOfLines}
          blurOnSubmit={!multiline}
          textAlignVertical={multiline ? "top" : "center"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create<any>({
  fieldContainer: {
    marginBottom: 16,
  },
  fieldLabel: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 8,
    color: "#333",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
    height: 50,
  },
  multilineContainer: {
    height: undefined,
    minHeight: 100,
    alignItems: "flex-start",
  },
  fieldIcon: {
    marginHorizontal: 12,
  },
  textInput: {
    flex: 1,
    paddingVertical: 12,
    paddingRight: 12,
    fontSize: 16,
    color: "#333",
  },
  multilineInput: {
    height: 100,
    paddingTop: 12,
  },
});

export default FormField;
