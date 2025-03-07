import React, { ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";

interface SectionContainerProps {
  title: string;
  children: ReactNode;
  style?: any;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  title,
  children,
  style,
}) => {
  return (
    <View style={[styles.sectionContainer, style]}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
  },
});

export default SectionContainer;
