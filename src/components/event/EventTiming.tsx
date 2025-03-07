import { Ionicons } from "@expo/vector-icons";
import { formatDate2 } from "helpers/convert";
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Animated,
  Share,
} from "react-native";

interface eventTimingProps {
  start: string;
  end: string;
  duration: string;
}

const EventTiming = ({ start, end, duration }: eventTimingProps) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Event Schedule</Text>
      <View style={styles.scheduleContainer}>
        <View style={styles.scheduleDot}></View>
        <View style={styles.scheduleTimeline}></View>
        <View style={styles.scheduleContent}>
          <Text style={styles.scheduleTime}>{formatDate2(start)}</Text>
          <Text style={styles.scheduleLabel}>Event starts</Text>
        </View>
      </View>
      <View style={styles.scheduleContainer}>
        <View style={styles.scheduleDot}></View>
        <View style={[styles.scheduleTimeline, styles.timelineEnd]}></View>
        <View style={styles.scheduleContent}>
          <Text style={styles.scheduleTime}>{formatDate2(end)}</Text>
          <Text style={styles.scheduleLabel}>Event ends</Text>
        </View>
      </View>
      <View style={styles.durationContainer}>
        <Ionicons name="time-outline" size={16} color="#0D7377" />
        <Text style={styles.durationDetailText}>
          Total duration: {duration}
        </Text>
      </View>
    </View>
  );
};

export default EventTiming;

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
  description: {
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
  },
  readMore: {
    color: "#993b1f",
    fontWeight: "600",
    marginTop: 8,
  },
  scheduleContainer: {
    flexDirection: "row",
    marginBottom: 16,
    alignItems: "flex-start",
  },
  scheduleDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#993b1f",
    marginTop: 4,
  },
  scheduleTimeline: {
    width: 2,
    height: 40,
    backgroundColor: "#993b1f",
    marginLeft: 5,
  },
  timelineEnd: {
    height: 0,
  },
  scheduleContent: {
    marginLeft: 12,
  },
  scheduleTime: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  scheduleLabel: {
    fontSize: 14,
    color: "#666",
  },
  durationContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0ebe1",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 6,
    alignSelf: "flex-start",
    marginTop: 8,
  },
  durationDetailText: {
    fontSize: 14,
    color: "#993b1f",
    marginLeft: 6,
    fontWeight: "500",
  },
});
