import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

type MembershipBadgeProps = {
  membershipType: string;
  expiryDate: string;
  isActive: boolean;
};

const MembershipBadge = ({
  membershipType,
  expiryDate,
  isActive,
}: MembershipBadgeProps) => {
  // Determine badge colors based on membership type
  const getBadgeColors = () => {
    switch (membershipType.toLowerCase()) {
      case "adultterm":
        return {
          background: "#7753DD",
          highlight: "#9775E5",
          icon: "crown",
        };
      case "kidterm":
        return {
          background: "#218838",
          highlight: "#28a745",
          icon: "star",
        };
      case "kidtermholiday":
        return {
          background: "#0069d9",
          highlight: "#007bff",
          icon: "certificate",
        };
      default:
        return {
          background: "#5a6268",
          highlight: "#6c757d",
          icon: "user",
        };
    }
  };

  const { background, highlight, icon } = getBadgeColors();

  // Calculate days remaining
  const calculateDaysRemaining = () => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const daysRemaining = calculateDaysRemaining();
  const isExpiringSoon = daysRemaining <= 30 && daysRemaining > 0;

  return (
    <View style={styles.container}>
      <View style={[styles.badge, { backgroundColor: background }]}>
        <View style={[styles.iconCircle, { backgroundColor: highlight }]}>
          <FontAwesome5 name={icon} size={16} color="white" />
        </View>
        <View style={styles.badgeContent}>
          <Text style={styles.membershipType}>{membershipType} Membership</Text>
          <Text style={styles.expiryInfo}>
            {isActive ? `Expires on ${expiryDate}` : `Expired on ${expiryDate}`}
          </Text>
        </View>
        <View
          style={[
            styles.statusIndicator,
            {
              backgroundColor: isActive
                ? isExpiringSoon
                  ? "#ffc107"
                  : "#28a745"
                : "#dc3545",
            },
          ]}
        />
      </View>

      {isActive && isExpiringSoon && (
        <Text style={styles.expiringWarning}>
          Your membership expires in {daysRemaining} days!
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  badgeContent: {
    flex: 1,
  },
  membershipType: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  expiryInfo: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 13,
    marginTop: 2,
  },
  statusIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginLeft: 8,
  },
  expiringWarning: {
    color: "#e67e22",
    fontSize: 13,
    fontWeight: "500",
    marginTop: 8,
    marginLeft: 4,
  },
});

export default MembershipBadge;
