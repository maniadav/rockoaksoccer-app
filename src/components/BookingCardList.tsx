import FlexiEventCard from "@components/event/FlexiEventCard";
import FlexiEventCardShimmer from "@components/event/FlexiEventCardShimmer";
import COLOUR from "@constants/colour.constant";
import SCREENS from "@constants/screen.constant";
import { memo, useMemo } from "react";
import { Dimensions, FlatList, StyleSheet } from "react-native";
import BookingCard from "./booking/BookingCard";

const { width } = Dimensions.get("window");

const BookingCardList = memo(({ data, gridLayout, navigation }: any) => (
  <FlatList
    key={gridLayout ? "grid-2-col" : "grid-1-col"}
    data={data}
    extraData={gridLayout}
    numColumns={gridLayout ? 2 : 1}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={styles.eventsContainer}
    columnWrapperStyle={gridLayout ? styles.columnWrapper : null}
    keyExtractor={(item) => item.id}
    renderItem={({ item: booking }) => (
      <BookingCard
        key={booking.id}
        booking={booking} //     onPress={() =>
        //       navigation.navigate(SCREENS.eventDetail, { id: event.uniqueId })
        //     }
      />
    )}
  />
));

export { BookingCardList };

const styles = StyleSheet.create({
  listContent: {
    // padding: 16,
  },
  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: 16, // Add spacing between rows
    paddingVertical: 30,
  },
  eventsContainer: {
    // padding: 12,
  },
  doubleGridCard: {
    width: (width - 32) / 2, // Account for padding and small gap
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
    color: COLOUR.primary,
  },
  doubleGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    // backgroundColor: "black",
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
    color: COLOUR.primary,
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
