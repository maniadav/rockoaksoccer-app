import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type ProfileHeaderProps = {
  profileImage: string;
  name: string;
  email: string;
  onEditImage: () => void;
};

const ProfileHeader = ({
  profileImage,
  name,
  email,
  onEditImage,
}: ProfileHeaderProps) => {
  return (
    <View style={styles.header}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri:
              profileImage ||
              "https://api.a0.dev/assets/image?text=person%20avatar%20minimal&aspect=1:1",
          }}
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.editButton} onPress={onEditImage}>
          <MaterialIcons name="edit" size={16} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    paddingVertical: 24,
  },
  imageContainer: {
    position: "relative",
    marginBottom: 16,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#f0f0f0",
  },
  editButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#2196F3",
    borderRadius: 14,
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: "#666",
  },
});

export default ProfileHeader;
