import React, { useState, useRef } from "react";
import { StyleSheet, ScrollView, Animated, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import BookingCard from "@components/booking/BookingCard";
import EmptyState from "@components/booking/EmptyState";
import FilterTags from "@components/booking/FilterTag";
import TabBar from "@components/booking/TabBar";
import TopNavHeader from "@components/navigation/TopNavHeader";
import { pastBookings, upcomingBookings } from "@constants/dummy.data.constant";

const { width } = Dimensions.get("window");

export default function BookingScreen() {
  const [activeTab, setActiveTab] = useState("xupcoming");
  const [showFilters, setShowFilters] = useState(false);
  const tabIndicatorPosition = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation<any>();

  const animateTabChange = (tab: any) => {
    setActiveTab(tab);
    Animated.spring(tabIndicatorPosition, {
      toValue: tab === "upcoming" ? 0 : width / 2,
      useNativeDriver: true,
      friction: 8,
      tension: 60,
    }).start();
  };

  const handleFilterChange = (selectedFilters: any) => {
    console.log("Selected filters:", selectedFilters);
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar style="dark" />

      <TopNavHeader title="My Bookings" />

      {showFilters && <FilterTags onFilterChange={handleFilterChange} />}

      <TabBar
        activeTab={activeTab}
        onTabChange={animateTabChange}
        tabIndicatorPosition={tabIndicatorPosition}
      />

      <ScrollView
        style={styles.bookingsList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.bookingsListContent}
      >
        {activeTab === "upcoming" ? (
          upcomingBookings.length > 0 ? (
            upcomingBookings.map((booking) => (
              <BookingCard key={booking.id} booking={booking} />
            ))
          ) : (
            <EmptyState type="upcoming" />
          )
        ) : pastBookings.length > 0 ? (
          pastBookings.map((booking) => (
            <BookingCard key={booking.id} booking={booking} />
          ))
        ) : (
          <EmptyState type="past" />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },

  bookingsList: {
    flex: 1,
  },
  bookingsListContent: {
    padding: 16,
    paddingBottom: 30,
  },
});
