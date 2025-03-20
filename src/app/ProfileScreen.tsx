import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ProfileCard from "@components/profile/ProfileCard";
import MembershipBadge from "@components/profile/MembershipBadge";
import ProfileDetailCard from "@components/profile/ProfileDetailsCard";
import BackButton from "@components/BackButton";
import { LOCALSTORAGE } from "@constants/storage.constant";
import UtilityAPI from "service/utility";
import {
  getAsyncStorageValue,
  setAsyncStorageValue,
} from "@utils/localStorage";

export type ProfileData = {
  name: string;
  email: string;
  bio: string;
  phone: string;
  location: string;
  website: string;
  joinDate: string;
};

export type MembershipInfo = {
  type: string;
  expiryDate: string;
  isActive: boolean;
};

const ProfileScreen = ({ navigation }: any) => {
  const [membership, setMembershipInfo] = useState<MembershipInfo | null>(null);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    getUserData();
    // getMembershipData();
  }, []);

  const getUserData = async () => {
    try {
      const user = await getAsyncStorageValue(
        LOCALSTORAGE.LOGGED_IN_USER,
        true
      );
      console.log({user})
      setData(user);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const getMembershipData = async () => {
    const rockOakApi = new UtilityAPI();
    try {
      const response = await rockOakApi.fetchMembershipDetails();
      const membership = response.data;
      console.log(membership);
      await setAsyncStorageValue(
        LOCALSTORAGE.ACTIVE_MEMBERSHIP,
        membership,
        true
      );
      setMembershipInfo(membership || null);
    } catch (error) {
      console.log(`Error fetching membership detail ${error}`);
    }
  };

  return (
    <SafeAreaProvider style={styles.container}>
      {data && (
        <View style={{ flex: 1 }}>
          <ScrollView>
            <View style={styles.content}>
              <View style={styles.backButtonContainer}>
                <BackButton />
              </View>
              <ProfileCard
                profileImage={
                  data.profile ||
                  "https://api.a0.dev/assets/image?text=professional%20person%20portrait%20soft%20lighting&aspect=1:1"
                }
                name={data.firstName || "Rockers"}
                email={data.email}
                navigation={navigation}
              />

              <MembershipBadge
                membershipType={membership?.type || ""}
                expiryDate={membership?.expiryDate || ""}
                isActive={membership?.isActive || false}
              />

              <View style={styles.detailsSection}>
                <ProfileDetailCard
                  icon="person"
                  title="firstName"
                  value={data.firstName || "-"}
                />

                <ProfileDetailCard
                  icon="person"
                  title="lastName"
                  value={data.lastName || "-"}
                />

                <ProfileDetailCard
                  icon="email"
                  title="Email"
                  value={data?.email || "-"}
                />

                <ProfileDetailCard
                  icon="phone"
                  title="Phone"
                  value={data?.mobile || "-"}
                />

                <ProfileDetailCard
                  icon="location-on"
                  title="Address"
                  value={data?.address || "-"}
                />

                <ProfileDetailCard
                  icon="event"
                  title="Member Since"
                  value={data.joinDate || "-"}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </SafeAreaProvider>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingBottom: 30,
    gap: 10,
  },
  detailsSection: {
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backButtonContainer: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 1,
  },
  image: {
    top: 0,
    width: "100%",
    height: 100,
    zIndex: -1,
  },
  profileImage: { position: "absolute", top: 30, left: 10, zIndex: 1 },
});
