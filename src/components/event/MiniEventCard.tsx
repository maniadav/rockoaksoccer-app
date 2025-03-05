import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  Animated,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import ImageCarouselIndicator from "./ImageCarouselIndicator";
import ButtonComp from "@components/common/ButtonComp";

const { width } = Dimensions.get("window");
const cardWidth = width / 2 - 24;
const carouselItemWidth = cardWidth;

const MiniEventCard = ({
  property,
  isWishlist,
  handleWishlist,
  onPress,
}: any) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  const handleMomentumScrollEnd = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / carouselItemWidth);
    setActiveImageIndex(index);
  };

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <FlatList
          ref={flatListRef}
          data={property.image}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          onMomentumScrollEnd={handleMomentumScrollEnd}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <View
              style={{ width: carouselItemWidth, height: carouselItemWidth }}
            >
              <Image
                source={{ uri: item }}
                style={styles.propertyImage}
                resizeMode="cover"
              />
            </View>
          )}
        />
        <TouchableOpacity
          style={styles.wishlistButton}
          onPress={() => handleWishlist()}
        >
          <FontAwesome
            name={isWishlist ? "heart" : "heart-o"}
            size={20}
            color={isWishlist ? "#FF385C" : "white"}
          />
        </TouchableOpacity>
        <ImageCarouselIndicator
          images={property.image}
          activeIndex={activeImageIndex}
        />
      </View>

      <View style={styles.propertyInfo}>
        <View style={styles.propertyHeader}>
          <Text style={styles.propertyTitle} numberOfLines={1}>
            {property.title}
          </Text>
        </View>

        <Text style={styles.propertyLocation} numberOfLines={1}>
          <FontAwesome
            name="map-marker"
            size={20}
            color="black"
            style={{ color: "grey" }}
          />
          {` ${property.location}`}
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              paddingVertical: 4,
            }}
          >
            <FontAwesome
              name="calendar"
              size={20}
              color="black"
              style={{ color: "grey" }}
            />
            <Text style={{ color: "grey" }}>
              {property.date?.split("T")[0].split("-").reverse().join(" ")}
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View>
            <ButtonComp
              bgColor="black"
              borderRadius={20}
              title={"View Details"}
              onPress={() => onPress()}
            />
          </View>
        </View>
      </View>

      {property.isTrending && (
        <View style={styles.superHostBadge}>
          <Text style={styles.superHostText}>trending</Text>
        </View>
      )}
    </View>
  );
};

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

export default MiniEventCard;
