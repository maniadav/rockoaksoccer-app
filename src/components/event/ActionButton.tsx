import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import COLOUR from "@constants/colour.constant";

interface ActionButtonsProps {
  userStatus: "none" | "interested" | "joined";
  joinButtonScale: Animated.Value;
  interestedButtonScale: Animated.Value;
  onStatusChange: (status: "interested" | "joined") => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  userStatus,
  joinButtonScale,
  interestedButtonScale,
  onStatusChange,
}) => {
  return (
    <View style={styles.actionButtons}>
      <Animated.View
        style={{ flex: 0.48, transform: [{ scale: joinButtonScale }] }}
      >
        <TouchableOpacity
          style={[
            styles.actionButton,
            userStatus === "joined" && styles.activeButton,
          ]}
          onPress={() => onStatusChange("joined")}
        >
          <Ionicons
            name={
              userStatus === "joined"
                ? "checkmark-circle"
                : "checkmark-circle-outline"
            }
            size={20}
            color={userStatus === "joined" ? "#fff" : COLOUR.primary}
          />
          <Text
            style={[
              styles.actionButtonText,
              userStatus === "joined" && styles.activeButtonText,
            ]}
          >
            I'm Going
          </Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View
        style={{ flex: 0.48, transform: [{ scale: interestedButtonScale }] }}
      >
        <TouchableOpacity
          style={[
            styles.actionButton,
            userStatus === "interested" && styles.activeButton,
          ]}
          onPress={() => onStatusChange("interested")}
        >
          <Ionicons
            name={userStatus === "interested" ? "star" : "star-outline"}
            size={20}
            color={userStatus === "interested" ? "#fff" : COLOUR.primary}
          />
          <Text
            style={[
              styles.actionButtonText,
              userStatus === "interested" && styles.activeButtonText,
            ]}
          >
            Interested
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    padding: 14,
    borderRadius: 8,
    flex: 1,
  },
  activeButton: {
    backgroundColor: COLOUR.primary,
  },
  actionButtonText: {
    fontSize: 16,
    color: COLOUR.primary,
    fontWeight: "600",
    marginLeft: 8,
  },
  activeButtonText: {
    color: "#fff",
  },
});

export default ActionButtons;
