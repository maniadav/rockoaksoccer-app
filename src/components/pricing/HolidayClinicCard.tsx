import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function PricingScreen() {
  return (
    <View style={styles.holidayHighlightSection}>
      <LinearGradient
        colors={["#ff9966", "#ff5e62"]}
        style={styles.holidayGradient}
      >
        <View style={styles.holidayBadge}>
          <Text style={styles.holidayBadgeText}>EXCLUSIVE</Text>
        </View>
        <Text style={styles.holidayTitle}>Holiday Clinic Included!</Text>
        <View style={styles.holidayScheduleContainer}>
          <View style={styles.holidayScheduleItem}>
            <Ionicons name="time-outline" size={18} color="white" />
            <Text style={styles.holidayScheduleText}>
              Morning: 09:00 - 11:00
            </Text>
          </View>
          <View style={styles.holidayScheduleItem}>
            <Ionicons name="time-outline" size={18} color="white" />
            <Text style={styles.holidayScheduleText}>
              Afternoon: 13:00 - 15:00
            </Text>
          </View>
          <View style={styles.holidayScheduleItem}>
            <Ionicons name="calendar-outline" size={18} color="white" />
            <Text style={styles.holidayScheduleText}>
              Available during Terms 1-3
            </Text>
          </View>
        </View>
        <Text style={styles.holidayNote}>
          *Only available with the Kid Term + School Holiday Clinic membership
        </Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  holidayHighlightSection: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  holidayGradient: {
    padding: 20,
    borderRadius: 16,
    position: "relative",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#ff7e65",
  },

  holidayBadge: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.2)",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderBottomLeftRadius: 8,
  },
  holidayBadgeText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
  holidayTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 16,
  },
  holidayScheduleContainer: {
    marginBottom: 16,
  },
  holidayScheduleItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  holidayScheduleText: {
    color: "white",
    marginLeft: 8,
    fontSize: 14,
  },
  holidayNote: {
    color: "rgba(255,255,255,0.8)",
    fontStyle: "italic",
    fontSize: 12,
    textAlign: "center",
    marginTop: 8,
  },
});
