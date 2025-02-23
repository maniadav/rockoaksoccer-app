import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { CustomButton, CustomText } from "../common/Component";
import { getAsyncStorageValue } from "@utils/localStorage";
import { LOCALSTORAGE } from "@constants/storage.constant";
import { theme } from "@components/theme";
import userImg from "@images/front-cat.jpg";
import { Feather } from "@expo/vector-icons";
import { MODALS } from "@constants/screen.constant";

export default function ProfileCard({ navigation }: any) {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    getAsyncStorageValue(LOCALSTORAGE.LOGGED_IN_USER, true).then((res) => {
      const data = res;
      setUser(data);
    });
  }, []);

  return (
    <View>
      <View style={styles.cardContainer}>
        <Image
          source={require("../../../assets/images/background.jpg")}
          style={styles.image}
        />
        {/* <View style={styles.image}></View> */}
        <Text style={styles.proBadge}>PRO</Text>
        <TouchableOpacity
          style={styles.imageEditButton}
          onPress={() => navigation.navigate(MODALS.editImage)}
          activeOpacity={0.7}
        >
          <Feather name="edit" size={24} color="black" />
        </TouchableOpacity>
        <Image
          style={styles.roundImage}
          source={
            user?.profileImage
              ? {
                  uri: user.profileImage,
                }
              : userImg
          }
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.name}>{`Hey, ${
          (user && user.username) || "User"
        }`}</Text>

        <Text style={styles.location}>{`${
          (user && user.address) || "please update your address"
        }`}</Text>
        <Text style={styles.description}>{`${
          (user && user.email) || "please add your email"
        }`}</Text>
        <View style={styles.buttonContainer}>
          <CustomButton onPress={() => navigation.navigate(MODALS.editProfile)}>
            <CustomText style={{ color: "white" }}>Edit Profile</CustomText>
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
  imageEditButton: {
    position: "absolute",
    bottom: "10%",
    left: "60%",
    zIndex: 3,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 8,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  proBadge: {
    position: "absolute",
    bottom: 30,
    left: 30,
    backgroundColor: "black",
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
    borderWidth: 3,
    borderColor: "black",
    position: "absolute",
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
