import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import SCREENS from "@constants/screen.constant";
import userImg from "@images/user.png";
import { getAsyncStorageValue } from "@utils/localStorage";
import { LOCALSTORAGE } from "constants/storage.constant";

const TopNavigation = () => {
  const [user, setUser] = useState();
  const navigation = useNavigation<any>();
  const goToProfile = () => {
    navigation.navigate(SCREENS.profile); // Navigate to the Profile screen
  };

  useEffect(() => {
    getAsyncStorageValue(LOCALSTORAGE.LOGGED_IN_USER).then((res) =>
      console.log(res)
    );
    // setUser();
  }, []);

  const openDrawer = () => {
    navigation.openDrawer(); // Open the left-side drawer (popup menu)
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openDrawer}>
        <Image
          style={{ width: 26, height: 26 }}
          source={require("../../../assets/images/menu.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={goToProfile}>
        <Image source={userImg} style={{ width: 36, height: 36 }} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    display: "flex",
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 1,
    backgroundColor: "",
    paddingHorizontal: 2,
  },
});

export default TopNavigation;
