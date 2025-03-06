import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import COLOUR from "@constants/colour.constant";

export default function JoinCard({ selectedMembership }: any) {
  const handleMembershipRegistration = () => {

  };
  
  return (
    <View style={styles.ctaSection}>
      <View
        // colors={["#993b1f", "#7d321a"]}
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
                {
                  text: "Cancel",
                  style: "cancel",
                  onPress: () => {
                    console.log("User canceled registration");
                  },
                },
                {
                  text: "Proceed",
                  style: "default",
                  onPress: () => {
                    console.log("User proceeded with registration");
                    handleMembershipRegistration(); // Call your function here
                  },
                },
              ]
            );
          }}
        >
          <Text style={styles.ctaButtonText}>Sign Up Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor: "white",
  },

  ctaTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLOUR.primary,
  },
  ctaSubtitle: {
    fontSize: 14,
    // color: "rgba(255,255,255,0.9)",
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
    borderWidth: 1,
    borderColor: COLOUR.primary,
  },
  ctaButtonText: {
    color: "#993b1f",
    fontSize: 16,
    fontWeight: "bold",
  },
});
