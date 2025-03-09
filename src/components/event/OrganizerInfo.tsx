import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons, Feather, AntDesign, Fontisto } from "@expo/vector-icons";
import COLOUR from "@constants/colour.constant";

interface OrganizerInfoProps {
  organizer: {
    name: string;
    role: string;
    image: string;
    contact: string;
    email: string;
  };
  isTrending: boolean;
  isFeatured: boolean;
  type: string;
}

const OrganizerInfo: React.FC<OrganizerInfoProps> = ({
  organizer,
  isTrending,
  isFeatured,
  type,
}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Organizer</Text>
      <View style={styles.organizerContainer}>
        <Image
          source={{
            uri:
              organizer.image ||
              "https://api.a0.dev/assets/image?text=sports%20australia%20logo&aspect=1:1&seed=123",
          }}
          style={styles.organizerImage}
        />
        <View style={styles.organizerInfo}>
          <Text style={styles.organizerName}>{organizer.name}</Text>
          <Text style={styles.organizerRole}>
            {organizer.role.charAt(0).toUpperCase() + organizer.role.slice(1)}
          </Text>
          <View style={styles.contactRow}>
            <Ionicons name="call-outline" size={16} color={COLOUR.primary} />
            <Text style={styles.contactText}>
              {organizer.contact || "0415305990"}
            </Text>
          </View>

          <View style={styles.contactRow}>
            <Fontisto name="email" size={16} color={COLOUR.primary} />
            <Text style={styles.contactText}>
              {organizer.email || "info@rockoaksoccer.com.au"}
            </Text>
          </View>

          <View style={styles.tagBadges}>
            <View style={styles.tagBadge}>
              <Feather name="users" size={12} color={COLOUR.primary} />
              <Text style={styles.tagBadgeText}>
                {type === "football" ? "Adult" : type}
              </Text>
            </View>

            {isFeatured && (
              <View style={styles.tagBadge}>
                <AntDesign name="star" size={12} color={COLOUR.primary} />
                <Text style={styles.tagBadgeText}>Featured</Text>
              </View>
            )}

            {isTrending && (
              <View style={styles.tagBadge}>
                <AntDesign name="find" size={12} color={COLOUR.primary} />
                <Text style={styles.tagBadgeText}>Trending</Text>
              </View>
            )}
          </View>
        </View>
      </View>{" "}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
  },
  organizerContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 16,
    borderRadius: 12,
  },
  organizerImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  organizerInfo: {
    marginLeft: 16,
    flex: 1,
  },
  organizerName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 2,
  },
  organizerRole: {
    fontSize: 14,
    color: COLOUR.primary,
    marginBottom: 6,
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  contactText: {
    fontSize: 14,
    color: "#555",
    marginLeft: 6,
  },
  tagBadges: {
    flexDirection: "row",
    marginTop: 10,
    flexWrap: "wrap",
  },
  tagBadge: {
    backgroundColor: "#f0ebe1",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 15,
    marginRight: 8,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  tagBadgeText: {
    color: COLOUR.primary,
    fontSize: 12,
    marginLeft: 4,
  },
});

export default OrganizerInfo;
