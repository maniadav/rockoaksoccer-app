import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
  StatusBar,
} from "react-native";
import FeatureList from "@components/pricing/FeatureList";
import COLOUR from "@constants/colour.constant";
import HolidayClinicCard from "@components/pricing/HolidayClinicCard";
import JoinCard from "@components/pricing/JoinCard";
import Splitter from "@components/pricing/Splitter";
import PricingContainer from "@components/pricing/PricingContainer";
import TopImageBackground from "@components/pricing/TopImageBackground";
import { clubData } from "@constants/dummy.data.constant";

Dimensions.get("window");

export default function PricingScreen() {
  const [selectedMembership, setSelectedMembership] = useState(
    clubData.memberships[1]
  );
  const scrollY = new Animated.Value(0);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Animated.ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      >
        <TopImageBackground />
        <PricingContainer
          membershipData={clubData.memberships}
          currency={clubData.currency}
          setSelectedMembership={setSelectedMembership}
          selectedMembership={selectedMembership}
        />
        <Splitter
          primaryText="what's included in"
          secondaryText={`${selectedMembership.name} Membership Benefits`}
        >
          <FeatureList
            selectedMembership={selectedMembership}
            offers={clubData.offers}
          />
        </Splitter>
        {selectedMembership.id === "kidholiday" && <HolidayClinicCard />}
        <JoinCard selectedMembership={selectedMembership} />
      </Animated.ScrollView>
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
});
