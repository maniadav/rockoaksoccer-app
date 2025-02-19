import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import SCREENS from "@constants/screen.constant";
// import { userImg } from "@images/index";
import userImg from "@images/user.png";

const TopNavigation = () => {
  const navigation = useNavigation<any>();
  const goToProfile = () => {
    navigation.navigate(SCREENS.profile); // Navigate to the Profile screen
  };
  // const openDrawer = () => {
  //   navigation.openDrawer(); // Open the left-side drawer (popup menu)
  // };
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={openDrawer}> */}
      <Image
        style={styles.image}
        source={require("../../../assets/images/menu.png")}
      />
      {/* </TouchableOpacity> */}

      <TouchableOpacity onPress={goToProfile}>
        <Image source={userImg} style={{ width: 36, height: 36 }} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    paddingHorizontal: 12,
    paddingRight: 20,
    paddingTop: 40,
    paddingBottom: 5,
    backgroundColor: "#fff",
  },

  image: {
    width: 22,
    height: 22,
    objectFit: "cover",
  },
});

export default TopNavigation;
