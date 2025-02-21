import TopNavHeader from "@components/navigation/TopNavHeader";
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import TextInput from "@components/TextInput";

const EditProfile = () => {
  const [responseBody, setResponseBody] = useState<any>({});

  const inputChangeHandler = (name: string, value: any) => {
    setResponseBody({ ...responseBody, [name]: value });
  };

  const updateProfileData = async () => {
    console.log(responseBody);
    // let rockOakApi = new UtilityAPI();
    // try {
    //   const profileResponse = await rockOakApi.updateProfile(responseBody);
    //   if (profileResponse?.data?.data) {
    //     await AsyncStorage.setItem(
    //       "LOGGED_IN_USER",
    //       JSON.stringify(profileResponse.data.data)
    //     );
    //     Alert.alert("Success", "Profile updated");
    //   }
    // } catch (error) {
    //   Alert.alert("Error", "Something went wrong");
    // }
  };

  return (
    <View style={{ padding: 20 }}>
      <TopNavHeader title="Edit Profile Image" />
      <TextInput
        label="firstName"
        returnKeyType="next"
        value={responseBody.firstName}
        onChangeText={(text: string) => inputChangeHandler("firstName", text)}
        // error={!!credentials.firstName.error}
        // errorText={credentials.firstName.error}
        autoCapitalize="none"
        autoCompleteType="firstName"
        textContentType="emailAddress"
        keyboardType="text"
        // description="Please enter your email"
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={responseBody.firstName}
        onChangeText={(text: string) => inputChangeHandler("email", text)}
        // error={!!credentials.email.error}
        // errorText={credentials.email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        // description="Please enter your email"
      />
      <TextInput
        placeholder="Last Name"
        onChangeText={(value) => inputChangeHandler("lastName", value)}
        style={{ borderBottomWidth: 1, marginTop: 10 }}
      />
      <TextInput
        placeholder="Email"
        onChangeText={(value) => inputChangeHandler("email", value)}
        style={{ borderBottomWidth: 1, marginTop: 10 }}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Mobile Number"
        onChangeText={(value) => inputChangeHandler("number", value)}
        style={{ borderBottomWidth: 1, marginTop: 10 }}
        keyboardType="phone-pad"
      />
      <TextInput
        placeholder="Address"
        onChangeText={(value) => inputChangeHandler("address", value)}
        style={{ borderBottomWidth: 1, marginTop: 10, height: 60 }}
        multiline
      />

      <TouchableOpacity
        onPress={updateProfileData}
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: "blue",
          borderRadius: 5,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfile;
