import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import SCREENS from "@constants/screen.constant";
import SearchCard from "@components/search/SearchCard";
import SafeAreaComponent from "@components/common/SafeAreaComponent";
import { theme } from "@components/theme";
import TitleTile from "@components/common/TitleTile";
import EVENT_TYPE from "@constants/event.constant";
import EventFilterOption from "@components/event/EventFilterOption";
import LayoutToggle from "@components/event/LayoutToggle";
import UtilityAPI from "service/utility";
import { MemoEventList, MemoShimmerList } from "./MemoEventCard";
import NoDataComponent from "@components/event/NoDataComponent";

const { width } = Dimensions.get("window");

type EventListingScreenProps = {
  navigation: NativeStackNavigationProp<any, "EventListing">;
};

const EventListingScreen: React.FC<EventListingScreenProps> = ({
  navigation,
}: any) => {
  const [data, setData] = useState([]);
  const [gridLayout, setGridLayout] = useState<boolean>(false);
  const [sportSeleted, setSportSelected] = useState(EVENT_TYPE[0]?.id);
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState<any>([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterGameData();
  }, [sportSeleted, data]);

  const filterGameData = () => {
    if (sportSeleted === "all-events") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item: any) => item.type === sportSeleted);
      setFilteredData(filtered);
    }
  };

  const fetchData = async () => {
    const rockOakApi = new UtilityAPI();
    try {
      setLoading(true);
      const res = await rockOakApi.fetchEvents();
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
    <SafeAreaComponent>
      <TitleTile />
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <SearchCard />

          <LayoutToggle
            grid={gridLayout}
            toggleLayout={() => setGridLayout((prev) => !prev)}
          />
        </View>
      </View>

      <EventFilterOption
        selectedFilter={sportSeleted}
        setSelectedFilter={setSportSelected}
      />

      {loading ? (
        <MemoShimmerList
          gridLayout={gridLayout}
          count={5} // Default can be set in component
        />
      ) : data?.length > 0 ? (
        <MemoEventList
          data={filteredData}
          gridLayout={gridLayout}
          navigation={navigation}
        />
      ) : (
        <NoDataComponent onRefresh={() => navigation.navigate(SCREENS.home)} />
      )}

      {/* {loading ? (
        <FlatList
          key={"grid-1-col"}
          data={[0, 0, 0, 0, 0]}
          extraData={gridLayout}
          numColumns={1}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: event }) => <FlexiEventCardShimmer />}
        />
      ) : (
        <>
          {data && data.length > 0 ? (
            <FlatList
              key={gridLayout ? "grid-2-col" : "grid-1-col"}
              data={data}
              extraData={gridLayout}
              keyExtractor={(item) => item.id}
              numColumns={gridLayout ? 2 : 1}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.eventsContainer}
              columnWrapperStyle={gridLayout ? styles.columnWrapper : null}
              renderItem={({ item: event }) => (
                <FlexiEventCard
                  event={event}
                  grid={gridLayout}
                  onPress={() =>
                    navigation.navigate(SCREENS.eventDetail, { id: event.id })
                  }
                />
              )}
            />
          ) : (
            <View></View>
          )}
        </>
      )} */}
      {/* <FlatList
        key={gridLayout ? "grid-2-col" : "grid-1-col"}
        data={EVENTS}
        extraData={gridLayout}
        keyExtractor={(item) => item.id}
        numColumns={gridLayout ? 2 : 1}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.eventsContainer}
        columnWrapperStyle={gridLayout ? styles.columnWrapper : null}
        renderItem={({ item: event }) => (
          <FlexiEventCard
            event={event}
            grid={gridLayout}
            onPress={() =>
              navigation.navigate(SCREENS.eventDetail, { id: event.id })
            }
          />
        )}
      /> */}
      {/* <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.eventsContainer}>
          {gridLayout ? (
            // Double grid layout (two columns)
            <View style={gridLayout && styles.doubleGrid}>
              {EVENTS.map((event, index) => (
                <FlexiEventCard
                  event={event}
                  index={index}
                  grid={gridLayout}
                  onPress={() =>
                    navigation.navigate(SCREENS.eventDetail, {
                      id: event?.id,
                    })
                  }
                />
              ))}
            </View>
          ) : (
            // Single grid layout (one column)
            EVENTS.map((event, index) => (
              <FlexiEventCard
                event={event}
                index={index}
                grid={gridLayout}
                onPress={() =>
                  navigation.navigate(SCREENS.eventDetail, {
                    id: event?.id,
                  })
                }
              />
            ))
          )}
        </View>
      </ScrollView> */}
      {/* {loading ? (
        <Loader />
      ) : (
        <FlatList
          data={data}
          numColumns={gridLayout ? 2 : 1}
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
      )} */}
    </SafeAreaComponent>
  );
};

export default EventListingScreen;

const styles = StyleSheet.create({
  listContent: {
    // padding: 16,
  },
  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: 16,
  },
  eventsContainer: {},
  doubleGridCard: {
    width: (width - 32) / 2,
    marginBottom: 12,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    padding: 10,
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
  doubleGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
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
