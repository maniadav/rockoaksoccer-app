import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  Alert,
  StyleSheet,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
// import { API_ENDPOINT } from "@/constants/api.constant";
import SCREENS from "@constants/screen.constant";
import { getMembershipDetails } from "@utils/auth.utils";
import COLOUR from "@constants/colour.constant";

const BookingButton = ({ uniqueID, planType }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<any>();

  const checkMembershipStatus = async () => {
    try {
      const member = await getMembershipDetails();
      return member;
    } catch (error) {
      console.error("Error checking membership status:", error);
      return false;
    }
  };

  const bookableEvent = (eventType: any, memberType: any) => {
    if (
      (eventType === "kidterm" || eventType === "kidholiday") &&
      (memberType === "kidterm" || memberType === "kidholiday")
    ) {
      return true;
    }
    return eventType === memberType;
  };

  const handleCheckout = async () => {
    const member = await checkMembershipStatus();

    if (member.isValid) {
      if (bookableEvent(planType, member.type)) {
        createBooking();
      } else {
        Alert.alert("Error", "Please select a plan valid to your plan type");
      }
    } else {
      navigation.navigate(SCREENS.pricing);
    }
  };

  const createBooking = async () => {
    Alert.alert("Creating booking...");
    setIsLoading(true);
    try {
      //   const utility = new UtilityAPI();
      //   await utility.createEventBooking(uniqueID);
      navigation.navigate(SCREENS.profile);
    } catch (error) {
      Alert.alert("Booking failed");
      console.error("Error creating booking:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.overlay}>
      {/* <View style={styles.overlayContent}>
            <View style={styles.overlayContentTop}>
              <Text style={styles.overlayContentPriceBefore}>$399</Text>
              <Text style={styles.overlayContentPrice}>$299/mo</Text>
            </View>
            <Text style={styles.overlayContentTotal}>30% discount applied</Text>
          </View> */}

      <TouchableOpacity
        style={{
          padding: 12,
          // backgroundColor: "#007BFF",
          borderRadius: 8,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={handleCheckout}
        disabled={isLoading}
      >
        <View style={styles.btn}>
          {isLoading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <Text style={{ color: "#FFF", fontWeight: "bold" }}>Book Now!</Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BookingButton;

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  overlayContent: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  overlayContentTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 2,
  },
  overlayContentPriceBefore: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "600",
    color: "#8e8e93",
    marginRight: 4,
    textDecorationLine: "line-through",
    textDecorationColor: "#8e8e93",
  },
  overlayContentPrice: {
    fontSize: 21,
    lineHeight: 26,
    fontWeight: "700",
    color: "#000",
  },
  overlayContentTotal: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    color: "#4c6cfd",
    textDecorationLine: "underline",
    textDecorationColor: "#4c6cfd",
  },
  /** Button */
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: COLOUR.primary,
    // borderColor: "#007aff",
    width: 300,
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "600",
    color: "white",
  },
});
