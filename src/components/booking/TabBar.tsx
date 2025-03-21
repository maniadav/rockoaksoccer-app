import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import COLOUR from "@constants/colour.constant";

const { width } = Dimensions.get("window");

interface TabBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  tabIndicatorPosition: Animated.Value;
}

const TabBar = ({
  activeTab,
  onTabChange,
  tabIndicatorPosition,
}: TabBarProps) => {
  return (
    <View style={styles.tabBarContainer}>
      <View style={styles.tabsWrapper}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "upcoming" && styles.activeTab]}
          onPress={() => onTabChange("upcoming")}
        >
          <Ionicons
            name="calendar-outline"
            size={18}
            color={activeTab === "upcoming" ? COLOUR.primary : "#777"}
            style={styles.tabIcon}
          />
          <Text
            style={[
              styles.tabText,
              activeTab === "upcoming" && styles.activeTabText,
            ]}
          >
            Upcoming
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "past" && styles.activeTab]}
          onPress={() => onTabChange("past")}
        >
          <Ionicons
            name="time-outline"
            size={18}
            color={activeTab === "past" ? COLOUR.primary : "#777"}
            style={styles.tabIcon}
          />
          <Text
            style={[
              styles.tabText,
              activeTab === "past" && styles.activeTabText,
            ]}
          >
            Past
          </Text>
        </TouchableOpacity>
        <Animated.View
          style={[
            styles.tabIndicator,
            {
              transform: [{ translateX: tabIndicatorPosition }],
              width: width / 2,
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#eaeaea",
    paddingTop: 8,
  },
  tabsWrapper: {
    flexDirection: "row",
    position: "relative",
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  activeTab: {
    // Add specific active tab styles if needed
  },
  tabIcon: {
    marginRight: 6,
  },
  tabText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#777",
  },
  activeTabText: {
    color: COLOUR.primary,
    fontWeight: "600",
  },
  tabIndicator: {
    position: "absolute",
    height: 3,
    bottom: 0,
    backgroundColor: COLOUR.primary,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
});

export default TabBar;
