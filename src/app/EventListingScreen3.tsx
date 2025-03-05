import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import EventFilterOption from "@components/event/EventFilterOption";
import SearchCard from "@components/search/SearchCard";
import MiniEventCard from "@components/event/MiniEventCard";

const { width } = Dimensions.get("window");
const cardWidth = width / 2 - 24;
const carouselItemWidth = cardWidth;

export default function AirbnbHomeScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("all-events");
  const [wishlist, setWishlist] = useState<any>({});

  const toggleWishlist = (propertyId: string) => {
    setWishlist((prev: any) => ({
      ...prev,
      [propertyId]: !prev[propertyId],
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <SearchCard />
          <TouchableOpacity style={styles.filterIconButton}>
            <Ionicons name="options-outline" size={18} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <EventFilterOption
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />

      {/* Property Listings */}
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#FF385C" />
        </View>
      ) : (
        <FlatList
          data={PROPERTIES}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MiniEventCard
              property={item}
              handleWishlist={() => toggleWishlist(item.id)}
              isWishlist={wishlist[item.id]}
            />
          )}
          contentContainerStyle={styles.listContent}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  },
  searchButton: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 40,
    paddingHorizontal: 16,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  searchTextContainer: {
    marginLeft: 12,
  },
  searchTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },
  searchSubtitle: {
    fontSize: 12,
    color: "#717171",
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
  filtersContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  filtersScrollContent: {
    paddingHorizontal: 16,
  },
  filterOption: {
    alignItems: "center",
    marginRight: 24,
    paddingBottom: 8,
    opacity: 0.6,
  },
  selectedFilterOption: {
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    opacity: 1,
  },
  filterText: {
    fontSize: 12,
    marginTop: 6,
    color: "#717171",
  },
  selectedFilterText: {
    color: "#000",
    fontWeight: "500",
  },
  listContent: {
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: cardWidth,
    backgroundColor: "white",
    borderRadius: 12,
    margin: 8,
    overflow: "hidden",
  },
  imageContainer: {
    width: cardWidth,
    height: cardWidth,
    position: "relative",
  },
  propertyImage: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
  wishlistButton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 10,
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  indicatorContainer: {
    position: "absolute",
    bottom: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  indicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 2,
  },
  propertyInfo: {
    padding: 10,
  },
  propertyHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  propertyTitle: {
    fontSize: 15,
    fontWeight: "500",
    flex: 1,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 4,
  },
  ratingText: {
    fontSize: 14,
    marginLeft: 3,
    fontWeight: "500",
  },
  propertyLocation: {
    fontSize: 14,
    color: "#717171",
  },
  propertyType: {
    fontSize: 14,
    color: "#717171",
    marginTop: 2,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  price: {
    fontSize: 15,
    fontWeight: "600",
  },
  nightText: {
    fontSize: 14,
    color: "#000",
  },
  superHostBadge: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    zIndex: 10,
  },
  superHostText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#222",
  },
});
