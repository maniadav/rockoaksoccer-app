import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import SafeAreaComponent from "@components/common/SafeAreaComponent";
import SCREENS, { MODALS } from "@constants/screen.constant";
import { useNavigation } from "@react-navigation/native";
import TopNavHeader from "@components/navigation/TopNavHeader";
import { settingNavigationMap } from "@constants/index";

type SettingItem = {
  icon?: string;
  name: string;
  navigationName: string;
};

const Setting = () => {
  const [result, setResult] = useState<SettingItem[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const navigation = useNavigation<any>();

  // useEffect(() => {
  //   // Fetch settings data here if needed
  // }, []);

  const _onSearch = (q: string) => {
    if (q.length === 0) {
      setResult([]);
      setIsSearching(false);
      return;
    }
    console.log({ settingNavigationMap });
    const temp = settingNavigationMap.filter((item) =>
      item.name.toLowerCase().includes(q.toLowerCase())
    );

    setResult(temp);
    setIsSearching(true);
  };

  const settingsOptions = [
    { title: "Auth", route: null },
    { title: "Log Out", route: MODALS.logOut },
    { title: "Delete Account", route: "DeleteAccount" },
    { title: "Manage Notifications", route: null },
    { title: "Booking History", route: SCREENS.booking },
    { title: "User Preferences", route: "Preferences" },
    { title: "Profile", route: null },
    { title: "View Profile", route: SCREENS.profile },
    { title: "Edit Profile", route: MODALS.editProfile },
  ];

  return (
    <SafeAreaComponent>
      <TopNavHeader title="Setting" />
      <View style={styles.container}>
        <ScrollView
          bounces={false}
          contentContainerStyle={styles.scrollContainer}
        >
          {settingsOptions.map((option, index) => (
            <View key={index} style={styles.settingItem}>
              {option.route ? (
                <TouchableOpacity
                  onPress={() => navigation.navigate(option.route)}
                  activeOpacity={0.9}
                >
                  <Text style={styles.linkText}>{option.title}</Text>
                </TouchableOpacity>
              ) : (
                <Text style={styles.sectionHeader}>{option.title}</Text>
              )}
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaComponent>
  );
};

export default Setting;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
  },
  scrollContainer: {
    paddingBottom: 50,
  },
  searchWrapper: {
    zIndex: 999,
    position: "relative",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#fff",
    width: "100%",
  },
  inputWrapper: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  resultWrapper: {
    backgroundColor: "#fff",
    zIndex: 999,
    position: "absolute",
    top: "100%",
    left: 0,
    width: "100%",
    maxHeight: 300, // Optional: limits the height of results area
  },
  settingItem: {
    height: 50,
    width: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#ddd",
  },
  settingItemText: {
    fontSize: 16,
    fontWeight: "400",
    marginLeft: 10,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: "500",
  },
  linkText: {
    fontSize: 16,
    color: "#318bfb",
    fontWeight: "400",
  },
});
