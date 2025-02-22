import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import { Text } from "react-native-paper";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import BackButton from "../components/BackButton";
import { theme } from "@components/theme";
import Toast from "react-native-toast-message";
import {
  emailValidator,
  passwordValidator,
  usernameValidator,
} from "helpers/validator";
import {
  getAsyncStorageValue,
  setAsyncStorageValue,
} from "@utils/localStorage";
import { LOCALSTORAGE } from "@constants/storage.constant";
import InputComp from "@components/common/InputComp";
import ButtonComp from "@components/common/ButtonComp";
import SCREENS from "@constants/screen.constant";
import Fontisto from "@expo/vector-icons/Fontisto";
import Feather from "@expo/vector-icons/Feather";

interface FormValues {
  username: string;
  email: string;
  password: string;
}

interface FormErrors {
  username?: string;
  email?: string;
  password?: string;
}

const SignUpScreen = ({ navigation }: any) => {
  const [values, setValues] = useState<FormValues>({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const [show, setShow] = useState<boolean>();

  const onChangeHandler = (text: string, field: keyof FormValues) => {
    setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));

    setValues((prevValues) => ({ ...prevValues, [field]: text }));
  };

  const onSignUpPressed = async () => {
    const nameError = usernameValidator(values.username);
    const emailError = emailValidator(values.email);
    const passwordError = passwordValidator(values.password);

    if (nameError || emailError || passwordError) {
      setErrors((prev) => ({
        username: nameError,
        email: emailError,
        password: passwordError,
      }));
      return;
    }

    const existingUser = await getAsyncStorageValue(
      LOCALSTORAGE.LOGGED_IN_USER,
      true
    );

    if (existingUser) {
      const { email: storedEmail, username: storedUsername } = existingUser;
      if (storedEmail === values.email || storedUsername === values.username) {
        Toast.show({
          type: "error",
          text1: "Something went wrong!",
          text2: "Username or email already in use",
        });
        return;
      }
    }

    try {
      await setAsyncStorageValue(
        LOCALSTORAGE.LOGGED_IN_USER,
        {
          ...values,
        },
        true
      );

      await setAsyncStorageValue(
        LOCALSTORAGE.MFA_ACCESS_TOKEN,
        "mfatokenfromapiresponse"
      );

      Toast.show({
        type: "success",
        text2: "Your account has been created successfully!",
      });

      navigation.replace(SCREENS.signIn);
    } catch (error) {
      Toast.show({
        type: "error",
        text2: "Failed to save your account. Please try again.",
      });
    }
  };

  return (
    <Background>
      <View
        style={{
          width: "100%",
          height: "90%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 30,
          position: "relative",
        }}
      >
        <BackButton />
        <View style={[styles.container]}>
          <Logo />
          <Header>Join the Journey to Greatness!</Header>

          <InputComp
            label="Username"
            onChangeHandler={(text: string) =>
              onChangeHandler(text, "username")
            }
            errorMessage={errors.username}
          />
          <InputComp
            label="Email"
            leftIcon={<Fontisto name="email" size={24} color="black" />}
            onChangeHandler={(text: string) => onChangeHandler(text, "email")}
            errorMessage={errors.email}
          />
          <InputComp
            label="Password"
            outlined
            errorMessage={errors.password}
            rightIcon={
              <Pressable onPress={() => setShow((prev) => !show)}>
                {show ? (
                  <Feather name="eye" size={24} color="black" />
                ) : (
                  <Feather name="eye-off" size={24} color="black" />
                )}
              </Pressable>
            }
            secure={!show}
            onChangeHandler={(text: string) =>
              onChangeHandler(text, "password")
            }
          />
          <View style={styles.forgotPassword}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ResetPasswordScreen")}
            >
              <Text style={styles.forgot}>Forgot your password?</Text>
            </TouchableOpacity>
          </View>

          <ButtonComp
            borderRadius={20}
            title={"Sign Up"}
            onPress={() => onSignUpPressed()}
          />

          <View style={styles.row}>
            <Text>Already have an account? </Text>
            <TouchableOpacity
              onPress={() => navigation.replace(SCREENS.signIn)}
            >
              <Text style={styles.link}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
    backgroundColor: "white",
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  safeArea: {
    flex: 1,
  },
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});

export default SignUpScreen;
