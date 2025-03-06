import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import InputComp from "@components/common/InputComp";
import TopNavHeader from "@components/navigation/TopNavHeader";
import { CustomButton } from "@components/common/Component";
import { getAsyncStorageValue } from "@utils/localStorage";
import { LOCALSTORAGE } from "@constants/storage.constant";
import Fontisto from "@expo/vector-icons/Fontisto";
import Entypo from "@expo/vector-icons/Entypo";
import FormField from "@components/profile/FormField";

interface FormValues {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;

  address?: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
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
  const [show, setShow] = useState<ShowPasswordState>({});

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

  const [formData, setFormData] = useState<any>({});

  const handleChange = (key: keyof any, value: string) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = () => {
    // onSave(formData);
  };

  return (
    <View style={{ backgroundColor: "#F8F8F8", height: "100%" }}>
      <TopNavHeader title="Edit Profile" />
      <FormField
        label="Phone"
        icon="phone"
        value={formData?.phone || "6393241779"}
        onChangeText={(text) => handleChange("phone", text)}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
      />
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
          validate={() => validate("email", "Please enter your email")}
          errorMessage={errors.email}
          placeholder={data?.email || ""}
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
        <Text style={{ color: "green", textAlign: "center" }}>
          Only edit fields you want to update
        </Text>
        <View style={{ padding: 30 }}>
          <CustomButton onPress={() => alert("hey")}>
            <Text style={{ color: "white" }}>Update</Text>
          </CustomButton>
        </View>
      </View>
    </View>
  );
};

export default EditProfile;
