import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";

interface TabProps {
  background?: string;
  children: React.ReactNode;
}

interface ButtonProps {
  onPress?: () => void;
  children: React.ReactNode;
}

interface TitleProps {
  style?: TextStyle;
  children: React.ReactNode;
}

interface AddProps {
  children: React.ReactNode;
}

export const CustomTab: React.FC<TabProps> = ({ background, children }) => (
  <View style={[styles.tab, background ? { backgroundColor: background } : {}]}>
    {children}
  </View>
);

export const CustomButton: React.FC<ButtonProps> = ({ onPress, children }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    {children}
  </TouchableOpacity>
);

export const CustomText: React.FC<TitleProps> = ({ style, children }) => (
  <Text style={[styles.title, style]}>{children}</Text>
);

export const Add: React.FC<AddProps> = ({ children }) => (
  <View style={styles.add}>{children}</View>
);

export const ButtonEditProfile: React.FC<any> = ({
  children,
  style,
  ...props
}) => (
  <TouchableOpacity style={[style, styles.buttonEditProfile]} {...props}>
    {children}
  </TouchableOpacity>
);

export const ButtonEditProfileText: React.FC<any> = ({
  children,
  style,
  ...props
}) => (
  <Text style={[styles.buttonEditProfileText, style]} {...props}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  buttonEditProfile: {
    width: 200,
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#333",
    padding: 15,
  },
  buttonEditProfileText: {
    color: "#333",
  },
  tab: {
    position: "absolute",
    bottom: 0,
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#CCC",
  },
  button: {
    backgroundColor: "black",
    borderWidth: 1,
    borderColor: "#03BFCB",
    borderRadius: 3,
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginHorizontal: 5,
  },
  title: {
    color: "#231E39",
    fontWeight: "500",
    fontSize: 16,
  },
  add: {
    width: "70%",
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderRadius: 10,
    borderLeftColor: "#69C9D0",
    borderRightColor: "#EE1D52",
    backgroundColor: "#FFF",
  },
});
