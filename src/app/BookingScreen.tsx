import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Animated, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import EmptyState from "@components/booking/EmptyState";
import FilterTags from "@components/booking/FilterTag";
import TabBar from "@components/booking/TabBar";
import TopNavHeader from "@components/navigation/TopNavHeader";
import { pastBookings, upcomingBookings } from "@constants/dummy.data.constant";
import UtilityAPI from "service/utility";
import { MemoShimmerList } from "./MemoEventCard";
import SCREENS from "@constants/screen.constant";
import { BookingCardList } from "@components/BookingCardList";

const { width } = Dimensions.get("window");

export default function BookingScreen() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [showFilters, setShowFilters] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState<any>([]);
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

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   filterGameData();
  // }, [data]);

  // const filterGameData = () => {
  //   if (sportSeleted === "all-events") {
  //     setFilteredData(data);
  //   } else {
  //     const filtered = data.filter((item: any) => item.type === sportSeleted);
  //     setFilteredData(filtered);
  //   }
  // };

  const fetchData = async () => {
    const rockOakApi = new UtilityAPI();
    try {
      const res = await rockOakApi.fetchBookedEvents();
      console.log(res.data);
      if (res && res.data) {
        setData(res.data);
      } else {
        console.warn("No data received!");
        setData([]);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
      setData([]);
    } finally {
      setLoading(false);
    }
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

      {loading ? (
        <MemoShimmerList gridLayout={false} count={5} />
      ) : data?.length > 0 ? (
        <BookingCardList
          data={activeTab === "upcoming" ? upcomingBookings : pastBookings}
          gridLayout={false}
          navigation={navigation}
        />
      ) : (
        <EmptyState
          type={activeTab === "upcoming" ? "upcoming" : "past"}
          onPressHandle={() => navigation.navigate(SCREENS.eventListing)}
        />
      )}
      <BookingCardList
        data={activeTab === "upcoming" ? upcomingBookings : pastBookings}
        gridLayout={false}
        navigation={navigation}
      />
      {/* <ScrollView
        style={styles.bookingsList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.bookingsListContent}
      >
        {activeTab === "upcoming" ? (
          false ? (
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
      </ScrollView> */}
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
