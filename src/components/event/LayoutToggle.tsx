import COLOUR from "@constants/colour.constant";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useRef } from "react";
import { Animated, TouchableOpacity, StyleSheet } from "react-native";

const LayoutToggle = ({ grid, toggleLayout }: any) => {
  const buttonScale = useRef(new Animated.Value(1)).current;

  const handleToggle = () => {
    Animated.sequence([
      Animated.timing(buttonScale, {
        toValue: 0.8,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(buttonScale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
    toggleLayout();
  };

  return (
    <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
      <TouchableOpacity
        style={styles.layoutToggle}
        onPress={handleToggle}
        activeOpacity={0.7}
      >
        <MaterialIcons
          name={grid ? "grid-view" : "view-agenda"}
          size={24}
          color="black"
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default LayoutToggle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  layoutToggle: {
    // backgroundColor: COLOUR.primary,
    borderWidth: 1.5,
    borderColor: "gray",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  eventsContainer: {
    padding: 12,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    overflow: "hidden",
  },
  doubleGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
