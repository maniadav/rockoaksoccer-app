import React, { useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ProfileCard from "@components/profile/ProfileCard";
import MyTabView from "@components/common/TabComponent";
import MembershipBadge from "@components/profile/MembershipBadge";
import ProfileHeader from "@components/profile/ProfileHeader";
import { MODALS } from "@constants/screen.constant";
import ProfileDetailCard from "@components/profile/ProfileDetailsCard";
import TopNavigation from "@components/navigation/TopNavigation";
import TopNavHeader from "@components/navigation/TopNavHeader";
import BackButton from "@components/BackButton";

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
  const [profileImage, setProfileImage] = useState(
    "https://api.a0.dev/assets/image?text=professional%20person%20portrait%20soft%20lighting&aspect=1:1"
  );
  const [imageModalVisible, setImageModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData>({
    name: "Jane Doe",
    email: "jane.doe@example.com",
    bio: "Software developer with a passion for creating beautiful mobile applications and exploring new technologies. Love to travel and learn about different cultures.",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    website: "janedoe.dev",
    joinDate: "May 2023",
  });

  const [membershipInfo, setMembershipInfo] = useState<MembershipInfo>({
    type: "Adultterm",
    expiryDate: "December 15, 2025",
    isActive: true,
  });

  const handleChangeData = (newData: ProfileData) => {
    setProfileData(newData);
    // toast.success("Profile updated successfully!");
    setEditModalVisible(false);
  };

  const handleSelectImage = (imageUrl: string) => {
    setProfileImage(imageUrl);
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.content}>
            <View style={styles.backButtonContainer}>
              <BackButton />
            </View>
            <ProfileCard
              profileImage={profileImage}
              name={profileData.name}
              email={profileData.email}
              navigation={navigation}
              // onEditImage={() => setImageModalVisible(true)}
            />

            <MembershipBadge
              membershipType={membershipInfo.type}
              expiryDate={membershipInfo.expiryDate}
              isActive={membershipInfo.isActive}
            />
            {/* <View style={styles.divider} /> */}
            {/* Profile Details Section */}
            <View style={styles.detailsSection}>
              {/* <Text style={styles.sectionTitle}>Profile Information</Text> */}

              <ProfileDetailCard
                icon="person"
                title="Name"
                value={profileData.name}
              />

              <ProfileDetailCard
                icon="email"
                title="Email"
                value={profileData.email}
              />

              <ProfileDetailCard
                icon="description"
                title="Bio"
                value={profileData.bio}
                multiline
              />

              <ProfileDetailCard
                icon="phone"
                title="Phone"
                value={profileData.phone}
              />

              <ProfileDetailCard
                icon="location-on"
                title="Location"
                value={profileData.location}
              />

              <ProfileDetailCard
                icon="language"
                title="Website"
                value={profileData.website}
              />

              <ProfileDetailCard
                icon="event"
                title="Member Since"
                value={profileData.joinDate}
              />
            </View>
          </View>
        </ScrollView>
      </View>
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
