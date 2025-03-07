import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import COLOUR from "@constants/colour.constant";

const { width } = Dimensions.get("window");

const FlexiEventCard = ({ event, index, grid, onPress }: any) => {
  const cardStyle = grid
    ? [
        styles.card,
        styles.doubleGridCard,
        index % 2 === 0 ? { marginRight: 4 } : { marginLeft: 4 },
      ]
    : styles.card;

  const imageHeight = grid ? 120 : 160;

  return (
    <TouchableOpacity
      key={event.id}
      style={cardStyle}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: event.image }}
          style={[styles.cardImage, { height: imageHeight }]}
        />
        {event.isTrending && (
          <View style={styles.trendingBadge}>
            <Text style={styles.trendingText}>Trending</Text>
          </View>
        )}
        {/* {event.isFeatured && (
          <View style={styles.featuredBadge}>
            <Text style={styles.featuredText}>Featured</Text>
          </View>
        )} */}
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.eventTitle} numberOfLines={grid ? 1 : 2}>
          {event.title}
        </Text>
        <View style={styles.typeContainer}>
          <Text style={styles.typeText}>
            {event.eventType === "adult-term"
              ? "ADULT"
              : event.eventType === "kid-term"
              ? "KIDS"
              : "KIDS HOLIDAY"}
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="calendar-outline" size={14} color="#5E5E5E" />
          <Text style={styles.infoText}>{event.date}</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="location-outline" size={14} color="#5E5E5E" />
          <Text style={styles.infoText} numberOfLines={1}>
            {event.location}
          </Text>
        </View>
        <View style={styles.countRow}>
          <Text style={styles.countText}>
            {event.going} going • {event.interested} interested
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FlexiEventCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  layoutToggle: {
    backgroundColor: COLOUR.primary,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  eventsContainer: {
    padding: 12,
  },
  card: {
    backgroundColor: "#fbfaf2",
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: "black",
    borderWidth: 0.5,
    borderColor: "#ddd",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    overflow: "hidden",
  },
  doubleGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  doubleGridCard: {
    width: (width - 32) / 2, // Account for padding and small gap
    marginBottom: 12,
  },
  imageContainer: {
    position: "relative",
  },
  cardImage: {
    width: "100%",
    height: 160,
    resizeMode: "cover",
  },
  trendingBadge: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "red",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderBottomLeftRadius: 8,
  },
  trendingText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  featuredBadge: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "#000",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  featuredText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  cardContent: {
    padding: 12,
    position: "relative",
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  typeContainer: {
    backgroundColor: COLOUR.primary,
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    marginBottom: 6,
    marginTop: 2,
  },
  typeText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  infoText: {
    fontSize: 13,
    color: "#666",
    marginLeft: 6,
  },
  countRow: {
    marginTop: 10,
    paddingTop: 6,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  countText: {
    fontSize: 12,
    color: COLOUR.primary,
    fontWeight: "500",
  },
});
