import COLOUR from "@constants/colour.constant";
import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

interface AttendeeSectionProps {
  joined: number;
  interested: number;
  avatars: string[];
}

const ParticipantComp: React.FC<AttendeeSectionProps> = ({
  joined,
  interested,
  avatars,
}) => {
  const renderAvatarItem = ({ item }: { item: string }) => (
    <Image source={{ uri: item }} style={styles.attendeeAvatar} />
  );

  return (
    <View style={styles.attendeeSection}>
      <View style={styles.attendeeHeader}>
        <Text style={styles.attendeeHeaderText}>Who's Participating</Text>
      </View>

      <View style={styles.attendeeContent}>
        <View style={styles.attendeeAvatars}>
          <FlatList
            data={avatars}
            renderItem={renderAvatarItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          <View style={styles.moreAttendees}>
            <Text style={styles.moreAttendeesText}>+{joined - 4}</Text>
          </View>
        </View>

        <View style={styles.attendeeCounts}>
          <View style={styles.attendeeCount}>
            <Text style={styles.countNumber}>{joined}</Text>
            <Text style={styles.countLabel}>Going</Text>
          </View>
          <View style={styles.attendeeCount}>
            <Text style={styles.countNumber}>{interested}</Text>
            <Text style={styles.countLabel}>Interested</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  attendeeSection: {
    marginBottom: 20,
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    overflow: "hidden",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
  attendeeHeader: {
    backgroundColor: COLOUR.primary,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  attendeeHeaderText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  attendeeContent: {
    padding: 16,
  },
  attendeeAvatars: {
    flexDirection: "row",
    marginBottom: 16,
    alignItems: "center",
  },
  attendeeAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: -10,
    borderWidth: 2,
    borderColor: "#fff",
  },
  moreAttendees: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLOUR.primary,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 4,
  },
  moreAttendeesText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  attendeeCounts: {
    flexDirection: "row",
  },
  attendeeCount: {
    marginRight: 24,
  },
  countNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  countLabel: {
    fontSize: 14,
    color: "#666",
  },
});

export default ParticipantComp;
