import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import PricingCard from "@components/pricing/PricingCard";

const { width } = Dimensions.get("window");

export default function PricingContainer({
  selectedMembership,
  setSelectedMembership,
  currency,
  membershipData,
}: any) {
  const handleMembershipSelect = (membership: any) => {
    setSelectedMembership(membership);
  };

  return (
    <View style={styles.pricingSection}>
      <Text style={styles.sectionTitle}>Choose Your Membership</Text>
      <Text style={styles.sectionSubtitle}>
        Select the plan that fits your needs
      </Text>{" "}
      <ScrollView
        horizontal
        // showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardContainer}
        // snapToInterval={width * 1 + 16} // Card width + margin
        // decelerationRate="fast"
        // snapToAlignment="center"
        // contentOffset={{ x: width * 0, y: 0 }} // Initial offset to center the middle card
        pagingEnabled={true}
      >
        {membershipData.map((membership: any, index: number) => (
          <View
            key={membership.id}
            style={[
              styles.cardWrapper,
              index === 1 && { marginHorizontal: 0 }, // Add extra margin to middle card
            ]}
          >
            <PricingCard
              membership={membership}
              selected={selectedMembership.id === membership.id}
              currency={currency}
              onSelect={handleMembershipSelect}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  pricingSection: {
    marginTop: 14,
    paddingTop: 28,
    paddingHorizontal: 16,
    backgroundColor: "white",
    color: "black",
    marginHorizontal: 12,
    borderRadius: 18,
    paddingBottom: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 7,
    borderColor: "#993b1f",
    borderWidth: 1,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: "bold",
    // color: "#",
    textAlign: "center",
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: "#993b1f",
    textAlign: "center",
    marginBottom: 24,
    fontWeight: "500",
    opacity: 0.9,
  },
  cardContainer: {
    paddingHorizontal: width * 0.05,
    paddingBottom: 16,
    alignItems: "center",
  },

  cardWrapper: {
    height: 350, // Fixed height for all cards
    justifyContent: "center",
  },
});
