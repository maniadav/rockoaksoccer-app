import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  Pressable,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import StatusBadge from "./StatusBadge";
import EventTypeTag from "./EventTypeTag";
import COLOUR from "@constants/colour.constant";

interface BookingCardProps {
  booking: {
    id: string;
    type: string;
    location: string;
    date: string;
    time: string;
    eventType: string;
    image: string;
    status: string;
    teamInfo: string;
    participants: number;
  };
}

const BookingCard = ({ booking }: BookingCardProps) => {
  const cardScale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(cardScale, {
      toValue: 0.98,
      useNativeDriver: true,
      friction: 8,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(cardScale, {
      toValue: 1,
      useNativeDriver: true,
      friction: 8,
    }).start();
  };

  return (
    <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <Animated.View
        style={[styles.bookingCard, { transform: [{ scale: cardScale }] }]}
      >
        <View style={styles.cardImageContainer}>
          <Image source={{ uri: booking.image }} style={styles.bookingImage} />
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.7)"]}
            style={styles.imageGradient}
          />
          <View style={styles.bookingTypeContainer}>
            <Text style={styles.bookingType}>{booking.type}</Text>
          </View>
          <StatusBadge status={booking.status} />
        </View>
        <View style={styles.bookingInfoContainer}>
          <Text style={styles.teamInfoText}>{booking.teamInfo}</Text>
          <View style={styles.bookingDetails}>
            <View style={styles.detailRow}>
              <Ionicons name="location-outline" size={16} color="#555" />
              <Text style={styles.detailText}>{booking.location}</Text>
            </View>
            <View style={styles.detailRow}>
              <Ionicons name="calendar-outline" size={16} color="#555" />
              <Text style={styles.detailText}>{booking.date}</Text>
            </View>
            <View style={styles.detailRow}>
              <Ionicons name="time-outline" size={16} color="#555" />
              <Text style={styles.detailText}>{booking.time}</Text>
            </View>
            <View style={styles.detailsFooter}>
              <EventTypeTag eventType={booking.eventType} />
              <View style={styles.participantsContainer}>
                <Ionicons name="people-outline" size={16} color="#555" />
                <Text style={styles.participantsText}>
                  {booking.participants} Participants
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.viewDetailsButton}>
            <Text style={styles.viewDetailsText}>View Details</Text>
            <Ionicons name="arrow-forward" size={16} color={COLOUR.primary} />
          </TouchableOpacity>
        </View>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  bookingCard: {
    backgroundColor: "white",
    borderRadius: 16,
    marginBottom: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  cardImageContainer: {
    position: "relative",
  },
  bookingImage: {
    width: "100%",
    height: 160,
  },
  imageGradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 60,
  },
  bookingTypeContainer: {
    position: "absolute",
    left: 12,
    bottom: 12,
    maxWidth: "70%",
  },
  bookingType: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  bookingInfoContainer: {
    padding: 18,
  },
  teamInfoText: {
    fontSize: 17,
    fontWeight: "600",
    color: "#333",
    marginBottom: 12,
  },
  bookingDetails: {
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  detailText: {
    marginLeft: 10,
    fontSize: 14,
    color: "#555",
  },
  detailsFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  participantsContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  participantsText: {
    marginLeft: 6,
    color: "#444",
    fontSize: 14,
  },
  viewDetailsButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 8,
  },
  viewDetailsText: {
    fontSize: 15,
    fontWeight: "600",
    color: COLOUR.primary,
    marginRight: 6,
  },
});

export default BookingCard;
