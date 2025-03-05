import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  Animated,
  StatusBar,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome5,
} from "@expo/vector-icons";
import PricingCard from "@components/pricing/PricingCard";
import FeatureList from "@components/pricing/FeatureList";

export const clubData = {
  currency: {
    name: "Australian Dollar",
    symbol: "$",
    code: "AUD",
  },
  _id: "67542dba47ec2f9a22821826",
  offers: [
    {
      id: 1,
      type: "Training",
      details: "3 x training per week (Mon, Wed & Fri) with mini-matches",
      _id: "675470ef92574294c9a8c4c4",
    },
    {
      id: 2,
      type: "Matches",
      details: "1 x game per week with live guidance by coaches (Sun)",
      _id: "675470ef92574294c9a8c4c5",
    },
    {
      id: 3,
      type: "Equipment",
      details: "Access to world-class equipment",
      _id: "675470ef92574294c9a8c4c6",
    },
    {
      id: 4,
      type: "Training Program",
      details: "Structured training program",
      _id: "675470ef92574294c9a8c4c7",
    },
    {
      id: 5,
      type: "Technology",
      details: "Rotateplay10 system technology",
      _id: "675470ef92574294c9a8c4c8",
    },
    {
      id: 6,
      type: "Video Analysis",
      details: "Post-match access to GoPro footage to see your goals",
      _id: "675470ef92574294c9a8c4c9",
    },
    {
      id: 7,
      type: "Mobile App",
      details: "Access to premium mobile application",
      _id: "675470ef92574294c9a8c4ca",
    },
    {
      id: 8,
      type: "Nutrition",
      details: "Healthy nutritional guidance via premium app",
      _id: "675470ef92574294c9a8c4cb",
    },
    {
      id: 9,
      type: "Holiday Clinic",
      details:
        "Daily holiday clinic masterclass (Term 1 - 3): Morning: '09:00 - 11:00', Afternoon: '13:00 - 15:00'",
      _id: "675470ef92574294c9a8c4cc",
    },
  ],
  clubName: "ROCK OAK SOCCER",
  memberships: [
    {
      id: "kidterm",
      name: "Kid Term",
      per: "term",
      price: 299,
      description: "Basic kid's term membership",
      valueAdded: false,
      includedOffers: [1, 2, 3, 4, 5, 6, 7, 8],
      _id: "675470ef92574294c9a8c4cd",
    },
    {
      id: "kidholiday",
      name: "Kid Term + School Holiday Clinic",
      per: "term",
      price: 399,
      description: "Kid's term membership with added school holiday clinic",
      valueAdded: true,
      includedOffers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      _id: "675470ef92574294c9a8c4ce",
    },
    {
      id: "adultterm",
      name: "Adult Membership",
      per: "week",
      price: 49,
      description: "Weekly adult membership",
      valueAdded: false,
      includedOffers: [1, 2, 3, 4, 5, 6, 7, 8],
      _id: "675470ef92574294c9a8c4cf",
    },
  ],
};

const { width } = Dimensions.get("window");

export default function PricingScreen() {
  const [selectedMembership, setSelectedMembership] = useState(
    clubData.memberships[1]
  );
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0.9],
    extrapolate: "clamp",
  });

  const headerTranslate = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -20],
    extrapolate: "clamp",
  });

  const handleMembershipSelect = (membership) => {
    setSelectedMembership(membership);
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar barStyle="light-content" /> {/* Header removed as requested */}
      <Animated.ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      >
        {" "}
        <View style={styles.heroSection}>
          <Image
            source={{
              uri: "https://api.a0.dev/assets/image?text=elite soccer training facility with players&aspect=16:9",
            }}
            style={styles.heroImage}
            resizeMode="cover"
          />
          <View style={styles.heroContent}>
            <Text style={styles.heroText}>Join Our Elite Soccer Program</Text>
            <Text style={styles.heroSubtext}>
              Professional Training for All Ages
            </Text>
          </View>
        </View>
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
            {clubData.memberships.map((membership, index) => (
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
                  currency={clubData.currency}
                  onSelect={handleMembershipSelect}
                />
              </View>
            ))}
          </ScrollView>
        </View>{" "}
        <View style={styles.featuresSection}>
          <View style={styles.featuresHeader}>
            <Text style={styles.featuresSectionTitle}>WHAT'S INCLUDED</Text>
            <Text style={styles.featuresSectionSubtitle}>
              {selectedMembership.name} Membership Benefits
            </Text>
          </View>
          <FeatureList
            selectedMembership={selectedMembership}
            offers={clubData.offers}
          />
        </View>{" "}
        {selectedMembership.id === "kidholiday" && (
          <View style={styles.holidayHighlightSection}>
            <LinearGradient
              colors={["#ff9966", "#ff5e62"]}
              style={styles.holidayGradient}
            >
              <View style={styles.holidayBadge}>
                <Text style={styles.holidayBadgeText}>EXCLUSIVE</Text>
              </View>
              <Text style={styles.holidayTitle}>Holiday Clinic Included!</Text>
              <View style={styles.holidayScheduleContainer}>
                <View style={styles.holidayScheduleItem}>
                  <Ionicons name="time-outline" size={18} color="white" />
                  <Text style={styles.holidayScheduleText}>
                    Morning: 09:00 - 11:00
                  </Text>
                </View>
                <View style={styles.holidayScheduleItem}>
                  <Ionicons name="time-outline" size={18} color="white" />
                  <Text style={styles.holidayScheduleText}>
                    Afternoon: 13:00 - 15:00
                  </Text>
                </View>
                <View style={styles.holidayScheduleItem}>
                  <Ionicons name="calendar-outline" size={18} color="white" />
                  <Text style={styles.holidayScheduleText}>
                    Available during Terms 1-3
                  </Text>
                </View>
              </View>
              <Text style={styles.holidayNote}>
                *Only available with the Kid Term + School Holiday Clinic
                membership
              </Text>
            </LinearGradient>
          </View>
        )}
        <View style={styles.ctaSection}>
          <LinearGradient
            colors={["#993b1f", "#7d321a"]}
            style={styles.ctaGradient}
          >
            <Text style={styles.ctaTitle}>Ready to Join?</Text>
            <Text style={styles.ctaSubtitle}>
              Sign up today and start your journey
            </Text>
            <TouchableOpacity
              style={styles.ctaButton}
              onPress={() => {
                const plan = selectedMembership.name;
                const holidayText =
                  selectedMembership.id === "kidholiday"
                    ? " with Holiday Clinic access!"
                    : "";
                Alert.alert(
                  "Join Rock Oak Soccer",
                  `You've selected the ${plan} plan${holidayText}. Would you like to proceed with registration?`,
                  [
                    { text: "Cancel", style: "cancel" },
                    { text: "Proceed", style: "default" },
                  ]
                );
              }}
            >
              <Text style={styles.ctaButtonText}>Sign Up Now</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>{" "}
        <View style={styles.footer}>
          <LinearGradient
            colors={["#993b1f", "#7d321a"]}
            style={styles.footerGradient}
          >
            <View style={styles.footerContent}>
              <Text style={styles.footerTitle}>{clubData.clubName}</Text>
              <Text style={styles.footerTagline}>
                ELITE SOCCER TRAINING SINCE 2005
              </Text>

              <View style={styles.footerDivider} />

              <View style={styles.footerInfo}>
                <Text style={styles.footerInfoText}>
                  Join our professional soccer program and experience
                  world-class training with experienced coaches.
                </Text>
              </View>

              <View style={styles.footerLinks}>
                <TouchableOpacity style={styles.footerLink}>
                  <Text style={styles.footerLinkText}>Terms & Conditions</Text>
                </TouchableOpacity>
                <View style={styles.footerLinkSeparator} />
                <TouchableOpacity style={styles.footerLink}>
                  <Text style={styles.footerLinkText}>Privacy Policy</Text>
                </TouchableOpacity>
                <View style={styles.footerLinkSeparator} />
                <TouchableOpacity style={styles.footerLink}>
                  <Text style={styles.footerLinkText}>Contact Us</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.footerCopyright}>
                © {new Date().getFullYear()} {clubData.clubName} • All Rights
                Reserved
              </Text>
            </View>
          </LinearGradient>
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#993b1f",
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
    paddingTop: 28,
    paddingHorizontal: 16,
    backgroundColor: "#993b1f",
    marginHorizontal: 12,
    marginTop: -20,
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
    color: "#fff",
    textAlign: "center",
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: "#f0e6d6",
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
    alignItems: "center",
    backgroundColor: "#993b1f",
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
  holidayHighlightSection: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  holidayGradient: {
    padding: 20,
    borderRadius: 16,
    position: "relative",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#ff7e65",
  },

  holidayBadge: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.2)",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderBottomLeftRadius: 8,
  },
  holidayBadgeText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
  holidayTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 16,
  },
  holidayScheduleContainer: {
    marginBottom: 16,
  },
  holidayScheduleItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  holidayScheduleText: {
    color: "white",
    marginLeft: 8,
    fontSize: 14,
  },
  holidayNote: {
    color: "rgba(255,255,255,0.8)",
    fontStyle: "italic",
    fontSize: 12,
    textAlign: "center",
    marginTop: 8,
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
    backgroundColor: "#cccccc",
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
