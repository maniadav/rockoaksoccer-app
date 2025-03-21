import COLOUR from "@constants/colour.constant";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";

interface EmptyStateProps {
  type: "upcoming" | "past";
  onPressHandle: any;
}

const EmptyState = ({ type, onPressHandle }: EmptyStateProps) => (
  <Animated.View
    style={styles.emptyStateContainer}
    // entering={Animated.FadeInDown.duration(500).springify()}
  >
    {type === "upcoming" ? (
      <>
        <Image
          source={{
            uri: "https://api.a0.dev/assets/image?text=empty%20soccer%20field%20with%20goal%20posts&aspect=1:1&seed=404",
          }}
          style={styles.emptyStateImage}
        />
        <Text style={styles.emptyStateTitle}>No Upcoming Bookings</Text>
        <Text style={styles.emptyStateText}>
          You don't have any scheduled sessions yet.
        </Text>

        {onPressHandle && (
          <TouchableOpacity
            style={styles.bookNowButton}
            onPress={onPressHandle}
          >
            <MaterialCommunityIcons name="refresh" size={20} color="white" />
            <Text style={styles.bookNowText}>Book Now</Text>
          </TouchableOpacity>
        )}
      </>
    ) : (
      <>
        <Image
          source={{
            uri: "https://api.a0.dev/assets/image?text=soccer%20history%20book%20or%20records&aspect=1:1&seed=505",
          }}
          style={styles.emptyStateImage}
        />
        <Text style={styles.emptyStateTitle}>No Past Sessions</Text>
        <Text style={styles.emptyStateText}>
          Your booking history will appear here.
        </Text>
      </>
    )}
  </Animated.View>
);

const styles = StyleSheet.create({
  emptyStateContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    marginVertical: 30,
  },
  emptyStateImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 24,
  },
  emptyStateTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  emptyStateText: {
    fontSize: 16,
    color: "#777",
    marginBottom: 24,
    textAlign: "center",
  },
  bookNowButton: {
    backgroundColor: COLOUR.primary,
    display: "flex",
    gap: 8,
    flexDirection: "row",
    paddingHorizontal: 36,
    paddingVertical: 14,
    borderRadius: 12,
    shadowColor: "#0066cc",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  bookNowText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
});

export default EmptyState;
