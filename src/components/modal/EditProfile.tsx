import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import InputComp from "@components/common/InputComp";
import TopNavHeader from "@components/navigation/TopNavHeader";
import { CustomButton } from "@components/common/Component";
import {
  getAsyncStorageValue,
  setAsyncStorageValue,
} from "@utils/localStorage";
import { LOCALSTORAGE } from "@constants/storage.constant";
import Fontisto from "@expo/vector-icons/Fontisto";
import Entypo from "@expo/vector-icons/Entypo";
import FormField from "@components/profile/FormField";
import UtilityAPI from "service/utility";
import Toast from "react-native-toast-message";

interface FormValues {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  mobile?: string;
  address?: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  mobile?: string;
  password?: string;
  address?: string;
}

interface ShowPasswordState {
  password?: boolean;
}

const EditProfile: React.FC = () => {
  const [values, setValues] = useState<FormValues>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [data, setData] = useState<any | null>(null);
  const [msg, setMsg] = useState("Only edit fields you want to update");
  // const [show, setShow] = useState<ShowPasswordState>({});
  // const [formData, setFormData] = useState<FormValues>({});

  const onChangeHandler = (text: string, field: keyof FormValues) => {
    setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
    setValues((prevValues) => ({ ...prevValues, [field]: text }));
  };

  const validate = (field: keyof FormValues, message: string) => {
    if (!values[field]) {
      setErrors((prevErrors) => ({ ...prevErrors, [field]: message }));
    }
  };

  useEffect(() => {
    const featchData = () =>
      getAsyncStorageValue(LOCALSTORAGE.LOGGED_IN_USER, true).then((res) =>
        setData(res)
      );
    featchData();
  }, []);

  const updateProfileData = async () => {
    let rockOakApi = new UtilityAPI();
    try {
      const profileReponse = await rockOakApi.updateProfile(values);
      if (profileReponse?.data?.data) {
        await setAsyncStorageValue(
          LOCALSTORAGE.LOGGED_IN_USER,
          profileReponse.data.data,
          true
        );
        setMsg("Profile updated successfully");
        Toast.show({
          type: "success",
          text2: "Profile updated successfully",
        });
      }
    } catch (error) {
      console.log("error updating profile", error);
      setMsg("Failed to update your profile");
      Toast.show({
        type: "error",
        text2: "Failed to update your profile",
      });
    }
  };

  return (
    <View style={{ backgroundColor: "#F8F8F8", height: "100%" }}>
      <TopNavHeader title="Edit Profile" />
      {/* <FormField
        label="Phone"
        icon="mobile"
        value={formData?.mobile || "6393241779"}
        onChangeText={(text) => handleChange("mobile", text)}
        placeholder="Enter your mobile number"
        keyboardType="mobile-pad"
      /> */}
      <View
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          paddingVertical: 30,
          paddingHorizontal: 10,
        }}
      >
        <InputComp
          label="First Name"
          onChangeHandler={(text: string) => onChangeHandler(text, "firstName")}
          validate={() => validate("firstName", "Enter firstName name")}
          errorMessage={errors.firstName}
          // leftIcon={<Ionicons name="home-outline" size={10} color={"black"} />}
          placeholder={data?.firstName || ""}
        />
        <InputComp
          label="Last Name"
          onChangeHandler={(text: string) => onChangeHandler(text, "lastName")}
          validate={() => validate("lastName", "Enter lastName name")}
          errorMessage={errors.firstName}
          // leftIcon={<Ionicons name="home-outline" size={10} color={"black"} />}
          placeholder={data?.lastName || ""}
        />
        <InputComp
          label="Email"
          leftIcon={<Fontisto name="email" size={24} color="black" />}
          onChangeHandler={(text: string) => onChangeHandler(text, "email")}
          // validate={() => validate("email", "Please enter your email")}
          errorMessage={errors.email}
          placeholder={data?.email || ""}
          autoCapitalize="none"
        />
        <InputComp
          label="mobile"
          onChangeHandler={(text: string) => onChangeHandler(text, "mobile")}
          validate={() => validate("mobile", "Enter mobile number")}
          errorMessage={errors.mobile}
          // leftIcon={<Ionicons name="home-outline" size={10} color={"black"} />}
          placeholder={data?.mobile || "-"}
        />
        <InputComp
          numLines={2}
          outlined
          label="Address"
          bgColor="white"
          value={values.address}
          leftIcon={<Entypo name="address" size={24} color="black" />}
          onChangeHandler={(text: string) => onChangeHandler(text, "address")}
          errorMessage={errors.address}
          validate={() => validate("address", "Enter a address")}
          placeholder={data?.address || ""}
        />
        {/* <InputComp
        label="Password"
        outlined
        leftIcon={<Ionicons name="home-outline" size={10} color={"black"} />}
        rightIcon={
          <Pressable
            onPress={() =>
              setShow((prev) => ({ ...prev, password: !prev.password }))
            }
          >
            {show.password ? (
              <Ionicons name="home-outline" size={10} color={"black"} />
            ) : (
              <Ionicons name="home-outline" size={10} color={"black"} />
            )}
          </Pressable>
        }
        secure={!show.password}
        onChangeHandler={(text: string) => onChangeHandler(text, "password")}
        bgColor="#fff1d2"
      /> */}
        <Text style={{ color: "green", textAlign: "center" }}>{msg}</Text>
        <View style={{ padding: 30 }}>
          <CustomButton onPress={() => updateProfileData()}>
            <Text style={{ color: "white" }}>Update</Text>
          </CustomButton>
        </View>
      </View>
    </View>
  );
};

export default EditProfile;
