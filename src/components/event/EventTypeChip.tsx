import COLOUR from "@constants/colour.constant";
import { EVENT_CHIP_TYPE } from "@constants/event.constant";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export type EventChipTypeKey = keyof typeof EVENT_CHIP_TYPE;

interface EventTypeChipProps {
  eventType: EventChipTypeKey;
}

const EventTypeChip = ({ eventType }: any) => {
  const isValidKey = Object.keys(EVENT_CHIP_TYPE).includes(eventType);

  const displayText = isValidKey
    ? EVENT_CHIP_TYPE[eventType as EventChipTypeKey]
    : "Unknown";

  if (!isValidKey) return null;

  return (
    <View style={styles.typeContainer}>
      <Text style={styles.typeText}>{displayText}</Text>
    </View>
  );
};

export default EventTypeChip;

const styles = StyleSheet.create({
  typeContainer: {
    width: "auto",
    backgroundColor: COLOUR.primary,
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderRadius: 4,
    marginBottom: 6,
    marginTop: 2,
  },
  typeText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
