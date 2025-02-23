import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ProfileCard from "@components/profile/ProfileCard";
import MyTabView from "@components/common/TabComponent";

const ProfileScreen = ({ navigation }: any) => {
  return (
    <SafeAreaProvider style={styles.container}>
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View>
            {/* <TopNavigation /> */}
            <ProfileCard navigation={navigation} />
          </View>
          <MyTabView />
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    top: 0,
    width: "100%",
    height: 100,
    zIndex: -1,
  },
  profileImage: { position: "absolute", top: 30, left: 10, zIndex: 1 },
});
