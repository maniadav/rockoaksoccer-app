import COLOUR from "@constants/colour.constant";
import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import {
  ButtonEditProfile,
  ButtonEditProfileText,
  CustomButton,
  CustomText,
} from "../common/Component";
import { getAsyncStorageValue } from "@utils/localStorage";
import { LOCALSTORAGE } from "@constants/storage.constant";
import { theme } from "@components/theme";

export default function ProfileCard() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    getAsyncStorageValue(LOCALSTORAGE.LOGGED_IN_USER, true).then((res) => {
      const data = res;
      console.log({ data });
      setUser(data);
    });
  }, []);

  console.log(user, user?.username);

  return (
    <View>
      <View style={styles.cardContainer}>
        <Image
          source={require("../../../assets/images/background.jpg")}
          style={styles.image}
        />
        <Text style={styles.proBadge}>PRO</Text>
        <Image
          style={styles.roundImage}
          source={{ uri: "https://randomuser.me/api/portraits/women/79.jpg" }}
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.name}>{`Hey, ${
          (user && user.username) || "User"
        }`}</Text>
        <Text style={styles.location}>New York</Text>
        <Text style={styles.description}>{`${
          (user && user.email) || "please add your email"
        }`}</Text>
        <View style={styles.buttonContainer}>
          <CustomButton onPress={() => alert("Edit Profile Pressed")}>
            <CustomText>Edit Profile</CustomText>
          </CustomButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    maxWidth: "100%",
    height: 200,
    alignItems: "center",
    // shadowColor: '#000',
    // shadowOpacity: 0.75,
    // shadowRadius: 10,
    // shadowOffset: { width: 0, height: 10 },
    position: "relative",
  },
  image: {
    top: 0,
    width: "100%",
    height: "60%",
    zIndex: -1,
    backgroundColor: "black",
  },
  proBadge: {
    position: "absolute",
    bottom: 30,
    left: 30,
    backgroundColor: COLOUR.primary,
    color: "white",
    paddingVertical: 3,
    paddingHorizontal: 7,
    borderRadius: 8,
    fontSize: 14,
    fontWeight: "bold",
  },
  roundImage: {
    width: 150,
    height: 150,
    borderRadius: 50,
    // borderWidth: 1,
    borderColor: COLOUR.primary,
    padding: 7,
    position: "absolute",
    // top: '50%',
    bottom: 0,
    zIndex: 1,
  },
  details: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    paddingVertical: 5,
  },
  name: {
    fontSize: 18,
    color: "black",
    marginVertical: 10,
    textTransform: "capitalize",
  },
  location: {
    fontSize: 12,
    color: "#B3B8CD",
    textTransform: "uppercase",
    marginBottom: 5,
    fontWeight: 600,
  },
  description: {
    fontSize: 14,
    color: "#B3B8CD",
    textAlign: "center",
    lineHeight: 21,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  ghostButton: {
    backgroundColor: "transparent",
  },
  ghostButtonText: {
    color: theme.colors.primary,
  },
});
