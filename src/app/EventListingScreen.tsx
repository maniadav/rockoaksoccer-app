import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Animated,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { getAllEvent } from "@api/categories";
import SCREENS from "@constants/screen.constant";
import SearchCard from "@components/search/SearchCard";
import SafeAreaComponent from "@components/common/SafeAreaComponent";
import { theme } from "@components/theme";
import TitleTile from "@components/common/TitleTile";
import EVENT_TYPE from "@constants/event.constant";
import MiniEventCard from "@components/event/MiniEventCard";
import Loader from "@components/common/Loader";
import EventFilterOption from "@components/event/EventFilterOption";
import { Ionicons } from "@expo/vector-icons";
import LayoutToggle from "@components/event/LayoutToggle";

type EventListingScreenProps = {
  navigation: NativeStackNavigationProp<any, "EventListing">;
};

const EventListingScreen: React.FC<EventListingScreenProps> = ({
  navigation,
}: any) => {
  const [data, setData] = useState([]);
  const [sportSeleted, setSportSelected] = useState(EVENT_TYPE[0]?.id);
  const [todayEvent, setTodayEvent] = useState([]);
  const [featuredEvent, setFeaturedEvent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const [wishlist, setWishlist] = useState<any>({});

  const toggleWishlist = (propertyId: string) => {
    setWishlist((prev: any) => ({
      ...prev,
      [propertyId]: !prev[propertyId],
    }));
  };

  const weekendEventGet = async () => {
    if (data.length === 0) return;
    const today = new Date();
    const thisWeekEvents = data.filter((item: any) => {
      const eventDate = new Date(item.EtkinlikBaslamaTarihi);
      return (
        eventDate > today &&
        (eventDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24) <= 7
      );
    });
    setTodayEvent(thisWeekEvents);
  };

  const fetchData = async () => {
    try {
      const allData: any = await getAllEvent();
      setData(allData);
      setFeaturedEvent(allData[0]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    weekendEventGet();
  }, []);

  useEffect(() => {
    if (todayEvent.length > 0 && featuredEvent.length > 0) {
      setLoading(false);
    }
  }, [todayEvent, featuredEvent]);

  useEffect(() => {
    filterGameData();
  }, [sportSeleted, data]);

  const filterGameData = () => {
    if (sportSeleted === "all-events") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((game: any) => game.type === sportSeleted);
      setFilteredData(filtered);
    }
  };

  const [gridLayout, setGridLayout] = useState<boolean>(false);

  return (
    <SafeAreaComponent>
      {/* <TopNavigation /> */}
      <TitleTile />
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <SearchCard />
          {/* <TouchableOpacity style={styles.filterIconButton}>
            <Ionicons name="options-outline" size={18} color="#000" />
          </TouchableOpacity> */}
          <LayoutToggle
            grid={gridLayout}
            toggleLayout={() => setGridLayout((prev) => !prev)}
          />
        </View>
      </View>
      {/* <View style={commonStyles.firstView}>
        <FeaturedEvent filteredData={featuredEvent[0]} />
      </View> */}
      <EventFilterOption
        selectedFilter={sportSeleted}
        setSelectedFilter={setSportSelected}
      />
      {loading ? (
        <Loader />
      ) : (
        <FlatList
          data={data}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }) => (
            <MiniEventCard
              property={item}
              handleWishlist={() => toggleWishlist(item.id)}
              isWishlist={wishlist[item.id]}
              onPress={() =>
                navigation.navigate(SCREENS.eventDetail, {
                  id: item?.uniqueId,
                })
              }
            />
          )}
          contentContainerStyle={styles.listContent}
        />
      )}
    </SafeAreaComponent>
  );
};

export default EventListingScreen;

const styles = StyleSheet.create({
  listContent: {
    // padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    padding: 10,
    // backgroundColor: '#fff',
  },
  contentContainer: {
    paddingBottom: 20,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 50,
  },
  image: {
    width: 24,
    height: 24,
    marginBottom: 15,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  primaryText: {
    color: theme.colors.primary,
  },
  logoTextSmall: {
    fontSize: 16,
    color: "black",
    textTransform: "lowercase",
    position: "absolute",
    left: 50,
    fontWeight: "normal",
  },
  subheading: {
    fontWeight: "normal",
    fontSize: 16,
    color: "gray",
  },
  trendingText: {
    fontWeight: "600",
    fontSize: 18,
    color: theme.colors.primary,
    paddingLeft: 20,
    paddingBottom: 6,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  searchBar: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  filterIconButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ddd",
  },
});
