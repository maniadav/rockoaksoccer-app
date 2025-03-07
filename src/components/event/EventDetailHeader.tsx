import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Image,
  Share,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TypeBadge from "./TypeBadge";

interface EventDetailHeaderProps {
  title: string;
  type: string;
  uniqueId?: string;
}

const EventDetailHeader: React.FC<EventDetailHeaderProps> = ({
  title,
  type,
  uniqueId,
}) => {
  const shareButtonScale = useRef(new Animated.Value(1)).current;

  const handleShare = async () => {
    // Button animation
    Animated.sequence([
      Animated.timing(shareButtonScale, {
        toValue: 0.8,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shareButtonScale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();

    try {
      await Share.share({
        title: title,
        message: `Check out this event: ${title}`,
        url: `https://events.example.com/event/${uniqueId}`,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={styles.titleContainer}>
      <View style={styles.titleAndTagsContainer}>
        <View style={styles.titleTextContainer}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.typeContainer}>
            <Text style={styles.typeText}>{type.toUpperCase()}</Text>
          </View>
        </View>
      </View>
      <Animated.View style={{ transform: [{ scale: shareButtonScale }] }}>
        <TouchableOpacity onPress={handleShare} style={styles.shareButton}>
          <Ionicons name="share-social" size={20} color="#fff" />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerActions: {
    position: "absolute",
    top: 10,
    left: 10,
    right: 10,
    zIndex: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  typeContainer: {
    backgroundColor: "#993b1f",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    marginLeft: 10,
  },
  typeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  mainImage: {
    width: "100%",
    height: 240,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  titleAndTagsContainer: {
    flex: 1,
    marginRight: 12,
  },
  titleTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    flex: 1,
    marginRight: 8,
  },
  shareButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#993b1f",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
});

export default EventDetailHeader;
