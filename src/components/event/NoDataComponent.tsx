import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import COLOUR from "@constants/colour.constant";

interface NoEventsFoundProps {
  onRefresh?: () => void;
  message?: string;
  subMessage?: string;
}

const NoDataComponent: React.FC<NoEventsFoundProps> = ({
  onRefresh,
  message = "Sorry, No Events Found",
  subMessage = "There are currently no soccer events available. Check back later for upcoming matches and tournaments.",
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `https://api.a0.dev/assets/image?text=sad%20soccer%20ball%20illustration%20minimal%20cute&aspect=1:1`,
        }}
        style={styles.image}
      />

      {/* <MaterialCommunityIcons
        name="soccer"
        size={50}
        color="#ccc"
        style={styles.icon}
      /> */}

      <Text style={styles.title}>{message}</Text>
      <Text style={styles.subtitle}>{subMessage}</Text>

      {onRefresh && (
        <TouchableOpacity style={styles.refreshButton} onPress={onRefresh}>
          <MaterialCommunityIcons name="refresh" size={20} color="white" />
          <Text style={styles.refreshText}>Refresh</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    minHeight: 400,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    opacity: 0.9,
  },
  icon: {
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLOUR.primary,
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    maxWidth: "80%",
    lineHeight: 20,
  },
  refreshButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLOUR.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    marginTop: 20,
  },
  refreshText: {
    color: "white",
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "500",
  },
});

export default NoDataComponent;
