import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import { Text } from "react-native-paper";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
// import SafeAreaBackButton from "@components/button/SafeAreaBackButton";
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
import UtilityAPI from "service/utility";
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

export const formData: FormValues = {
  email: "",
  username: "",
  password: "",
};
const SignUpScreen = ({ navigation }: any) => {
  const [values, setValues] = useState<FormValues>({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const [show, setShow] = useState<boolean>();

  //loader
  const [loading, setLoading] = useState<boolean>(false);
  const onChangeHandler = (text: string, field: keyof FormValues) => {
    // console.log(text);
    setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));

    setValues((prevValues) => ({ ...prevValues, [field]: text }));
  };

  const onSignUpPressed = async () => {
    setLoading(true);
    const nameError = usernameValidator(values.username);
    const emailError = emailValidator(values.email);
    const passwordError = passwordValidator(values.password);

    if (nameError || emailError || passwordError) {
      setErrors((prev) => ({
        username: nameError,
        email: emailError,
        password: passwordError,
      }));
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("username", values.username);
    formData.append("email", values.email);
    formData.append("password", values.password);

    let RockOakApi = new UtilityAPI();

    try {
      const response = await RockOakApi.userRegister(formData);
      console.log(response);
      const msg = response?.data?.message || "user is already registered";

      //storing the tokens
      setAsyncStorageValue(
        LOCALSTORAGE.MFA_ACCESS_TOKEN,
        response?.data?.accessToken
      );

      setAsyncStorageValue(
        LOCALSTORAGE.LOGGED_IN_USER,
        response?.data?.user,
        true
      );

      Toast.show({
        type: "success",
        text2: "You account has been successfully createrd",
      });

      setLoading(false);
      navigation.replace(`${SCREENS.signIn}`);
    } catch (error: any) {
      console.log(`Sign up API call error ${error}`);
      const msg =
        error?.response?.data?.message || "user is already registered";
      console.log(msg);
      Toast.show({
        type: "error",
        text2: msg,
      });
      setLoading(false);
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
        <View style={[styles.container]}>
          <Logo />
          <Header>Join the Journey to Greatness!</Header>

          <InputComp
            bgColor="#FFF"
            label="Username"
            onChangeHandler={(text: string) =>
              onChangeHandler(text, "username")
            }
            errorMessage={errors.username}
            autoCapitalize="none"
          />
          <InputComp
            bgColor="#FFF"
            label="Email"
            leftIcon={<Fontisto name="email" size={24} color="black" />}
            onChangeHandler={(text: string) => onChangeHandler(text, "email")}
            errorMessage={errors.email}
            autoCapitalize="none"
          />
          <InputComp
            bgColor="#FFF"
            label="Password"
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
            title={loading ? "Loading..." : "Sign Up"}
            onPress={() => onSignUpPressed()}
            disabled={loading}
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
