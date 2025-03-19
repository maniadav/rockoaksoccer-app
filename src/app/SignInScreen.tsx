import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Background from "@components/Background";
import Logo from "@components/Logo";
import Header from "@components/Header";
import TextInput from "@components/TextInput";
import { theme } from "@components/theme";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { usernameValidator, passwordValidator } from "helpers/validator";
import SCREENS from "@constants/screen.constant";
import ButtonComp from "@components/common/ButtonComp";
import Toast from "react-native-toast-message";
import UtilityAPI from "service/utility";
import { setAsyncStorageValue } from "@utils/localStorage";
import { LOCALSTORAGE } from "@constants/storage.constant";

type Props = {
  navigation: NativeStackNavigationProp<any, any>;
};

export default function SignInScreen({ navigation }: Props) {
  const [credentials, setCredentials] = useState({
    username: { value: "", error: "" },
    password: { value: "", error: "" },
  });

  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (field: "username" | "password", value: string) => {
    setCredentials((prev) => ({
      ...prev,
      [field]: { value, error: "" },
    }));
  };

  const onLoginPressed = async () => {
    setLoading(true);
    const usernameError = usernameValidator(credentials.username.value);
    const passwordError = passwordValidator(credentials.password.value);

    if (usernameError || passwordError) {
      setCredentials((prev) => ({
        username: { ...prev.username, error: usernameError },
        password: { ...prev.password, error: passwordError },
      }));
      return;
    }

    const userLoginData: any = {
      username: credentials.username.value,
      password: credentials.password.value,
    };
    console.log(userLoginData);
    let RockOakApi = new UtilityAPI();

    try {
      const response = await RockOakApi.userLogin(userLoginData);
      // console.log(`Login API response ${response}`, userLoginData);

      const msg = response?.data?.message || "user is registered!";

      // console.log("User data when signing up", response?.data?.user);
      setAsyncStorageValue(
        LOCALSTORAGE.MFA_ACCESS_TOKEN,
        response?.data.accessToken
      );
      setAsyncStorageValue(
        LOCALSTORAGE.MFA_REFRESH_TOKEN,
        response?.data.refreshToken
      );
      setAsyncStorageValue(
        LOCALSTORAGE.LOGGED_IN_USER,
        response?.data?.user,
        true
      );
      Toast.show({
        type: "success",
        text2: msg,
      });
      setMessage(msg);
      navigation.reset({
        index: 0,
        routes: [{ name: SCREENS.main }],
      });
    } catch (error: any) {
      console.log(`Error in Login API call`, error);
      const msg = error?.response?.data?.message;
      setMessage(msg || "something went wrong");
      Toast.show({
        type: "error",
        text2: msg || "something went wrong",
      });
    } finally {
      setLoading(false);
    }
  };

  console.log({ message });

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
          <Header>Good to See You Again!</Header>

          <TextInput
            label="Username"
            returnKeyType="next"
            value={credentials.username.value}
            onChangeText={(text: string) => handleChange("username", text)}
            error={!!credentials.username.error}
            errorText={credentials.username.error}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
            description="Please enter your email"
          />
          <TextInput
            label="Password"
            returnKeyType="done"
            value={credentials.password.value}
            onChangeText={(text: string) => handleChange("password", text)}
            error={!!credentials.password.error}
            errorText={credentials.password.error}
            secureTextEntry
            description="Please enter your password"
          />

          <View style={styles.forgotPassword}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ResetPasswordScreen")}
            >
              <Text style={styles.forgot}>Forgot your password?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.errorMessageContainer}>
            {message && <Text style={styles.errorMessage}>{message}</Text>}
          </View>

          <ButtonComp
            borderRadius={20}
            title={loading ? "Logging in ...." : "Sign in"}
            onPress={() => onLoginPressed()}
          />
          <View style={styles.row}>
            <Text>Don’t have an account? </Text>
            <TouchableOpacity
              onPress={() => navigation.replace(SCREENS.signUp)}
            >
              <Text style={styles.link}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
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
  errorMessageContainer: {
    paddingBottom: 5,
  },
  errorMessage: {
    color: "#ef4444",
  },
});
