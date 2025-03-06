import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "@components/theme";
import userImg from "@images/front-cat.jpg";
import { MaterialIcons } from "@expo/vector-icons";
import { MODALS } from "@constants/screen.constant";
import COLOUR from "@constants/colour.constant";
import { CustomButton, CustomText } from "@components/common/Component";

type ProfileHeaderProps = {
  navigation: any;
  profileImage: string;
  name: string;
  email: string;
  // onEditImage: () => void;
};

export default function ProfileCard({
  navigation,
  profileImage,
  name,
  email,
}: // onEditImage,
ProfileHeaderProps) {
  return (
    <View>
      <View style={styles.cardContainer}>
        <Image
          source={require("../../../assets/images/background.jpg")}
          style={styles.image}
        />
        <TouchableOpacity
          style={styles.imageEditButton}
          onPress={() => navigation.navigate(MODALS.editImage)}
          activeOpacity={0.7}
        >
          <MaterialIcons name="edit" size={16} color="black" />
        </TouchableOpacity>
        <Image
          style={styles.roundImage}
          source={
            profileImage
              ? {
                  uri: profileImage,
                }
              : userImg
          }
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.name}>{`Hey, ${name || "User"}`}</Text>
        {/* <Text style={styles.location}>{`${
          address || "please update your address"
        }`}</Text> */}
        <Text style={styles.email}>{`${
          email || "please add your email"
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
    left: "63%",
    zIndex: 3,
    backgroundColor: COLOUR.secondary,
    borderRadius: 50,
    padding: 8,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 50,
    borderWidth: 2,
    borderColor: "white",
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
    paddingVertical: 20,
  },

  location: {
    fontSize: 12,
    color: "#B3B8CD",
    textTransform: "uppercase",
    marginBottom: 5,
    fontWeight: 600,
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
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: "#666",
  },
});
