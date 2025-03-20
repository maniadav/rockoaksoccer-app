import TopNavHeader from "@components/navigation/TopNavHeader";
import { LOCALSTORAGE } from "@constants/storage.constant";
import {
  getAsyncStorageValue,
  setAsyncStorageValue,
} from "@utils/localStorage";
import React, { useEffect, useState } from "react";
import { View, Text, Image, Alert, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import userImg from "@images/front-cat.jpg";
import COLOUR from "@constants/colour.constant";
import UtilityAPI from "service/utility";
import data from "@constants/slider.data.constant";

const EditImage = () => {
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    getAsyncStorageValue(LOCALSTORAGE.LOGGED_IN_USER, true).then((res) => {
      const data = res;
      setUser(data);
    });
  }, []);

  const pickImage = async () => {
    // Add permissions check
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Error", "Permission required to access photos");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets[0]?.uri) {
      setSelectedFile(result.assets[0].uri);
      setFilePreview(result.assets[0].uri);
    } else {
      Alert.alert("Info", "You did not select any image.");
    }
  };

  const uploadImage = async () => {
    if (!selectedFile || !user?.username) {
      Alert.alert("Error", "Please select an image to upload.");
      return;
    }
    let formData = new FormData();

    try {
      const type = "image/jpeg"; // Adjust based on actual file type
      // const response = await fetch(selectedFile);
      // const blob = await response.blob();
      // formData.append("image", blob, "profile.jpg");
      // formData.append("caption", "Profile Picture");
      

      formData.append("image", {
        uri: selectedFile,
        name: user.username,
        type,
      } as any);

      formData.append("caption", "Profile Picture");

      // Rest of your upload logic...
    } catch (error) {
      Alert.alert("Error", "Failed to prepare image for upload");
    }

    let rockOakApi = new UtilityAPI();
    try {
      const response = await rockOakApi.uploadImage(formData);
      if (response?.data?.publicUrl) {
        const updatedUser = { ...user, profile: response.data.publicUrl };
        await rockOakApi.updateProfile({ profile: response.data.publicUrl });
        await setAsyncStorageValue(
          LOCALSTORAGE.LOGGED_IN_USER,
          updatedUser,
          true
        );
        Alert.alert("Success", "Profile image uploaded");
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong during upload");
    }
  };

  return (
    <View style={{ padding: 10 }}>
      <TopNavHeader title="Edit Profile Image" />

      <View
        style={{
          height: "90%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 200, height: 200, borderRadius: 50 }}
          source={
            user?.profile || filePreview
              ? { uri: filePreview || user.profile }
              : userImg
          }
        />
        <View
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: 20,
            paddingVertical: 30,
          }}
        >
          <TouchableOpacity
            onPress={pickImage}
            style={{
              paddingVertical: 12,
              paddingHorizontal: 10,
              backgroundColor: COLOUR.primary,
              borderRadius: 5,
            }}
          >
            <Text style={{ color: "white" }}>Change Picture</Text>
          </TouchableOpacity>
          {selectedFile && (
            <TouchableOpacity
              onPress={uploadImage}
              style={{
                paddingVertical: 12,
                paddingHorizontal: 10,
                backgroundColor: COLOUR.primary,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "white" }}>Upload Picture</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default EditImage;
