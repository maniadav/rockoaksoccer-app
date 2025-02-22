import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import EVENT_TYPE from "constants/event.constant";
import Heading from "@components/common/Heading";
import COLOUR from "@constants/colour.constant";

const EventMenu = ({ onFilterClick, sportSelected }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Heading heading="Upcoming Sport Events.." />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollContainer}
      >
        {EVENT_TYPE.map((item, index) => {
          const isSelected =
            item.id.toLowerCase() === sportSelected.toLowerCase();
          return (
            <TouchableOpacity
              key={index}
              onPress={() => onFilterClick(item.id)}
              style={[
                styles.eventItem,
                isSelected ? styles.selectedEvent : styles.unselectedEvent,
              ]}
            >
              <Text
                style={[
                  styles.eventText,
                  isSelected ? styles.selectedText : styles.unselectedText,
                ]}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  header: {
    alignItems: "center",
    paddingHorizontal: 10,
  },
  subText: {
    fontSize: 16,
    fontWeight: "600",
    color: "black",
    textAlign: "center",
  },
  scrollContainer: {
    paddingHorizontal: 10,
  },
  eventItem: {
    minWidth: 100,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    // borderWidth: 1,
    borderBottomWidth: 2,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    // transition: "all 0.7s",
  },
  selectedEvent: {
    backgroundColor: COLOUR.primary,
  },
  unselectedEvent: {
    backgroundColor: "#E5E7EB",
  },
  eventText: {
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  selectedText: {
    color: "#FFF",
  },
  unselectedText: {
    color: "#000",
  },
});

export default EventMenu;
