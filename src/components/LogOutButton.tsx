import React from "react";
import { useNavigation } from "@react-navigation/native";
import Button from "./Button";
import { LOCALSTORAGE } from "@constants/storage.constant"; // Ensure the path is correct
import { removeAsyncStorageValue } from "@utils/localStorage";
import { RootStackNavigationProp } from "types/stack.type";
import { navigation } from "@utils/navigation.utils";

export default function LogOutButton() {
  const handleLogOut = async () => {
    try {
      // Assuming these functions are asynchronous
      await removeAsyncStorageValue(LOCALSTORAGE.LOGGED_IN_USER);
      await removeAsyncStorageValue(LOCALSTORAGE.MFA_ACCESS_TOKEN);
      navigation.navigate("SignInScreen");
      alert("redirecting...");
    } catch (error) {
      console.error("Error during logout:", error); // Log error for debugging
      alert("Something went wrong while logging out. Please try again.");
    }
  };

  return (
    <Button mode="contained" onPress={handleLogOut}>
      Sign Out
    </Button>
  );
}
