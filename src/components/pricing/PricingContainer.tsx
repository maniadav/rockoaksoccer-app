import React, {  } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import PricingCard from "@components/pricing/PricingCard";
import COLOUR from "@constants/colour.constant";

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
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardContainer}
        snapToInterval={width * 0.75 + 16} // Card width + margin
        decelerationRate="fast"
        snapToAlignment="center"
        contentOffset={{ x: width * 0.125, y: 0 }} // Initial offset to center the middle card
        pagingEnabled={true}
      >
        {membershipData.map((membership: any, index: number) => (
          <View
            key={membership.id}
            style={[
              styles.cardWrapper,
              index === 1 && { marginHorizontal: 16 }, // Add extra margin to middle card
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
  container: {
    flex: 1,
    backgroundColor: COLOUR.secondary,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  heroSection: {
    width: "100%",
    height: 260,
    marginBottom: 24,
  },
  heroImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderBottomWidth: 2,
    borderColor: "#993b1f",
  },
  heroContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 28,
    paddingBottom: 32,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  heroText: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    letterSpacing: 0.5,
  },
  heroSubtext: {
    color: "#f0e6d6",
    fontSize: 16,
    letterSpacing: 0.3,
  },
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
    paddingHorizontal: width * 0.125, // This adds padding equal to half the difference between screen and card width
    paddingBottom: 16,
    alignItems: "center",
  },

  cardWrapper: {
    height: 350, // Fixed height for all cards
    justifyContent: "center",
  },
  featuresSection: {
    marginTop: 24,
    marginBottom: 16,
    marginHorizontal: 16,
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featuresHeader: {
    padding: 20,
    // alignItems: "start",
    backgroundColor: COLOUR.primary,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderWidth: 1,
    borderColor: "#993b1f",
  },
  featuresSectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    letterSpacing: 1,
    marginBottom: 4,
  },
  featuresSectionSubtitle: {
    fontSize: 14,
    color: "#f0f0f0",
    fontWeight: "500",
  },

  ctaSection: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  ctaGradient: {
    padding: 28,
    borderRadius: 20,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#7d321a",
  },

  ctaTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  ctaSubtitle: {
    fontSize: 14,
    color: "rgba(255,255,255,0.9)",
    marginTop: 8,
    marginBottom: 20,
  },
  ctaButton: {
    backgroundColor: "white",
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  ctaButtonText: {
    color: "#993b1f",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    marginTop: 36,
  },
  footerGradient: {
    paddingTop: 36,
    paddingBottom: 24,
    borderTopWidth: 1,
    borderColor: "#7d321a",
  },
  footerContent: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  footerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 4,
  },
  footerTagline: {
    fontSize: 12,
    letterSpacing: 1,
    color: "#cccccc",
    marginBottom: 16,
    fontWeight: "600",
  },
  footerDivider: {
    width: 60,
    height: 2,
    backgroundColor: "#cccccc",
    marginBottom: 16,
    opacity: 0.4,
  },
  footerInfo: {
    marginBottom: 20,
  },
  footerInfoText: {
    fontSize: 14,
    lineHeight: 22,
    color: "#f0f0f0",
    textAlign: "center",
  },
  footerLinks: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 16,
  },
  footerLink: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  footerLinkText: {
    fontSize: 12,
    color: "#cccccc",
    fontWeight: "500",
  },
  footerLinkSeparator: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    // backgroundColor: "#cccccc",
    opacity: 0.6,
    alignSelf: "center",
  },
  footerCopyright: {
    fontSize: 11,
    color: "#f0f0f0",
    textAlign: "center",
    opacity: 0.7,
  },
});
