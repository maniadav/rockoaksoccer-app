import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SCREENS from "@constants/screen.constant";
import userImg from "@images/user.png";
import { getAsyncStorageValue } from "@utils/localStorage";
import { LOCALSTORAGE } from "constants/storage.constant";

const TopNavigation = () => {
  const [user, setUser] = useState<any>(null);
  const navigation = useNavigation<any>();

  useEffect(() => {
    const checkLoginStatus = async () => {
      const storedUser = await getAsyncStorageValue(
        LOCALSTORAGE.LOGGED_IN_USER,
        true
      );

      setUser(storedUser);
    };

    checkLoginStatus();
  }, []);

  const openDrawer = () => {
    navigation.navigate(SCREENS.setting);
  };

  const goToProfile = () => {
    navigation.navigate(SCREENS.profile);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openDrawer}>
        <Image
          style={{ width: 25, height: 25 }}
          source={require("../../../assets/images/menu.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={goToProfile}>
        <Image
          style={{ width: 40, height: 40, borderRadius: 50, borderWidth: 2 }}
          source={
            user?.profileImage
              ? {
                  uri: user.profileImage,
                }
              : userImg
          }
        />
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
    backgroundColor: "transparent",
    paddingHorizontal: 2,
  },
});

export default TopNavigation;
