import COLOUR from "@constants/colour.constant";
import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
} from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  outlined?: boolean;
  rounded?: boolean;
  bgColor?: string;
  textColor?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  borderRadius?: number;
}

const ButtonComp: React.FC<ButtonProps> = ({
  title,
  onPress,
  disabled = false,
  loading = false,
  outlined = false,
  bgColor = COLOUR.primary,
  textColor = "white",
  rounded,
  leftIcon,
  rightIcon,
  borderRadius = 0,
}) => {
  const containerStyle = [
    styles.button,
    {
      backgroundColor: outlined ? "transparent" : bgColor,
      borderColor: bgColor,
      borderRadius: rounded ? 50 : borderRadius,
    },

    outlined && styles.outlined,
    disabled && styles.disabled,
  ];

  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={onPress}
      disabled={disabled || loading}
    >
      <View style={styles.contentContainer}>
        {leftIcon && <View style={styles.icon}>{leftIcon}</View>}
        {loading ? (
          <ActivityIndicator color={textColor} />
        ) : (
          <Text
            style={[styles.text, { color: outlined ? bgColor : textColor }]}
          >
            {title}
          </Text>
        )}
        {rightIcon && <View style={styles.icon}>{rightIcon}</View>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    borderWidth: 1,
    margin: 4,
  },
  outlined: {
    borderWidth: 1,
  },
  disabled: {
    opacity: 0.6,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    fontWeight: "600",
  },
  icon: {
    marginHorizontal: 8,
  },
});

export default ButtonComp;
