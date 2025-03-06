import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import PricingCard from "@components/pricing/PricingCard";

const { width } = Dimensions.get("window");

export interface Membership {
  id: string | number;
  title: string;
  price: number;
  benefits: string[];
  // Add other required properties here
}

interface PricingContainerProps {
  selectedMembership: any;
  setSelectedMembership: (membership: any) => void;
  currency: any;
  membershipData: any[];
}

export default function PricingContainer({
  selectedMembership,
  setSelectedMembership,
  currency,
  membershipData,
}: PricingContainerProps) {
  const handleMembershipSelect = (membership: any) => {
    setSelectedMembership(membership);
  };

  const cardWidth = width * 0.8;
  const scrollViewRef = useRef<ScrollView>(null);
  const initialScrollIndex = 1;

  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      if (scrollViewRef.current) {
        const initialOffset = initialScrollIndex * cardWidth + 10;
        scrollViewRef.current.scrollTo({ x: initialOffset, animated: true });
      }
    }, 100);

    return () => clearTimeout(scrollTimeout);
  }, []);

  return (
    <View style={styles.pricingSection}>
      <Text style={styles.sectionTitle}>Choose Your Membership</Text>
      <Text style={styles.sectionSubtitle}>
        Select the plan that fits your needs
      </Text>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardContainer}
        snapToInterval={cardWidth + 10}
        decelerationRate="fast"
        snapToAlignment="center"
        pagingEnabled
      >
        {membershipData.map((membership, index) => (
          <View
            key={membership.id.toString()}
            style={[
              styles.cardWrapper,
              {
                width: cardWidth,
              },
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

// Styles remain the same
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
    height: 350,
    justifyContent: "center",
  },
});
